import * as THREE from "./vendor/three/three.module.min.js";

const host = document.querySelector("[data-antigravity]");
const cameraToggle = document.querySelector("[data-camera-tracking-toggle]");
const cameraLabel = document.querySelector("[data-camera-tracking-label]");
const cameraStatus = document.querySelector("[data-camera-tracking-status]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const cameraCopy = {
  en: {
    start: "Use selfie camera",
    stop: "Stop camera tracking",
    requesting: "Starting camera…",
    idle: "Optional: move the particles with your MacBook camera. Video stays on this device.",
    requestingStatus: "Waiting for browser camera permission…",
    activeFace: "Camera tracking is active. Face position is analysed only on this device; no video is uploaded or stored.",
    activeMotion: "Camera tracking is active. Movement is analysed only on this device; no video is uploaded or stored.",
    stopped: "Camera tracking stopped. Mouse and trackpad tracking are still active.",
    denied: "Camera access was not allowed. Enable it for this site in your browser settings and try again.",
    busy: "The camera is being used by another app or could not be started.",
    unavailable: "No front camera is available, or this browser does not support camera access.",
    insecure: "Camera tracking needs HTTPS or localhost.",
    reduced: "Camera tracking is disabled because reduced motion is enabled on this device.",
    error: "Camera tracking could not start. Mouse and trackpad tracking remain available.",
  },
  de: {
    start: "Selfie-Kamera verwenden",
    stop: "Kamera-Tracking stoppen",
    requesting: "Kamera wird gestartet…",
    idle: "Optional: Bewege die Partikel mit deiner MacBook-Kamera. Das Video bleibt auf diesem Gerät.",
    requestingStatus: "Warte auf die Kamera-Freigabe des Browsers…",
    activeFace: "Kamera-Tracking ist aktiv. Die Gesichtsposition wird nur auf diesem Gerät ausgewertet; kein Video wird hochgeladen oder gespeichert.",
    activeMotion: "Kamera-Tracking ist aktiv. Bewegungen werden nur auf diesem Gerät ausgewertet; kein Video wird hochgeladen oder gespeichert.",
    stopped: "Kamera-Tracking beendet. Maus- und Trackpad-Tracking bleiben aktiv.",
    denied: "Der Kamerazugriff wurde nicht erlaubt. Aktiviere ihn für diese Website in den Browser-Einstellungen und versuche es erneut.",
    busy: "Die Kamera wird von einer anderen App verwendet oder konnte nicht gestartet werden.",
    unavailable: "Es ist keine Frontkamera verfügbar oder dieser Browser unterstützt den Kamerazugriff nicht.",
    insecure: "Kamera-Tracking benötigt HTTPS oder localhost.",
    reduced: "Kamera-Tracking ist deaktiviert, weil auf diesem Gerät reduzierte Bewegung aktiviert ist.",
    error: "Das Kamera-Tracking konnte nicht gestartet werden. Maus- und Trackpad-Tracking bleiben verfügbar.",
  },
};

let cameraUiState = "idle";

function activeCameraCopy() {
  return cameraCopy[document.documentElement.lang?.startsWith("de") ? "de" : "en"];
}

function renderCameraUi() {
  if (!cameraToggle || !cameraLabel || !cameraStatus) return;
  const copy = activeCameraCopy();
  const active = cameraUiState === "activeFace" || cameraUiState === "activeMotion";
  cameraToggle.dataset.cameraState = cameraUiState;
  cameraToggle.setAttribute("aria-pressed", String(active));
  cameraToggle.disabled = cameraUiState === "requesting" || cameraUiState === "reduced";
  cameraLabel.textContent = active
    ? copy.stop
    : cameraUiState === "requesting"
      ? copy.requesting
      : copy.start;
  const statusKey = cameraUiState === "requesting" ? "requestingStatus" : cameraUiState;
  cameraStatus.textContent = copy[statusKey] || copy.error;
}

function setCameraUiState(nextState) {
  cameraUiState = nextState;
  renderCameraUi();
}

new MutationObserver(renderCameraUi).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"],
});

if (!host || reducedMotion.matches) {
  if (cameraToggle) setCameraUiState(reducedMotion.matches ? "reduced" : "unavailable");
} else {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.domElement.setAttribute("role", "presentation");
  host.append(renderer.domElement);

  const isCompact = window.matchMedia("(max-width: 680px)").matches;
  const particleCount = isCompact ? 72 : 132;
  const geometry = new THREE.CapsuleGeometry(0.032, 0.12, 2, 5);
  const material = new THREE.MeshBasicMaterial({
    color: 0x16835f,
    transparent: true,
    opacity: 0.24,
    depthWrite: false,
  });
  const particlesMesh = new THREE.InstancedMesh(geometry, material, particleCount);
  particlesMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(particlesMesh);

  const dummy = new THREE.Object3D();
  const pointer = new THREE.Vector2(0, 0);
  const cameraPointer = new THREE.Vector2(0, 0);
  const virtualPointer = new THREE.Vector2(0, 0);
  const lastPointer = new THREE.Vector2(0, 0);
  let lastPointerMove = performance.now();
  let lastCameraSignal = 0;
  let width = 1;
  let height = 1;
  let worldWidth = 16;
  let worldHeight = 9;
  let frameId = 0;
  let inView = true;
  let cameraStream = null;
  let cameraVideo = null;
  let cameraCanvas = null;
  let cameraContext = null;
  let previousLuminance = null;
  let cameraTimer = 0;
  let cameraRunId = 0;
  let cameraTrackingActive = false;
  let faceDetector = null;

  const particles = Array.from({ length: particleCount }, () => ({
    phase: Math.random() * 100,
    speed: 0.005 + Math.random() * 0.004,
    x: 0,
    y: 0,
    z: (Math.random() - 0.5) * 4,
    currentX: 0,
    currentY: 0,
    currentZ: 0,
    radiusOffset: (Math.random() - 0.5) * 0.35,
    size: 0.65 + Math.random() * 0.55,
  }));

  function scatterParticles() {
    for (const particle of particles) {
      particle.x = (Math.random() - 0.5) * worldWidth * 1.2;
      particle.y = (Math.random() - 0.5) * worldHeight * 1.2;
      particle.currentX = particle.x;
      particle.currentY = particle.y;
      particle.currentZ = particle.z;
    }
  }

  function resize() {
    const bounds = host.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    worldHeight = 10;
    worldWidth = worldHeight * (width / height);
    camera.left = -worldWidth / 2;
    camera.right = worldWidth / 2;
    camera.top = worldHeight / 2;
    camera.bottom = -worldHeight / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    scatterParticles();
  }

  function updatePointer(event) {
    const bounds = host.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * worldWidth;
    pointer.y = -((event.clientY - bounds.top) / bounds.height - 0.5) * worldHeight;
    if (pointer.distanceToSquared(lastPointer) > 0.0001) {
      lastPointer.copy(pointer);
      lastPointerMove = performance.now();
    }
  }

  function updateCameraPointer(normalizedX, normalizedY) {
    cameraPointer.x = (THREE.MathUtils.clamp(normalizedX, 0, 1) - 0.5) * worldWidth;
    cameraPointer.y = -(THREE.MathUtils.clamp(normalizedY, 0, 1) - 0.5) * worldHeight;
    lastCameraSignal = performance.now();
  }

  function analyseMotion() {
    if (!cameraVideo || !cameraContext || cameraVideo.readyState < 2) return false;
    const sampleWidth = cameraCanvas.width;
    const sampleHeight = cameraCanvas.height;
    cameraContext.save();
    cameraContext.setTransform(-1, 0, 0, 1, sampleWidth, 0);
    cameraContext.drawImage(cameraVideo, 0, 0, sampleWidth, sampleHeight);
    cameraContext.restore();

    const pixels = cameraContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
    const luminance = new Uint8Array(sampleWidth * sampleHeight);
    let averageDifference = 0;

    for (let index = 0, pixel = 0; index < luminance.length; index += 1, pixel += 4) {
      const value = (pixels[pixel] * 3 + pixels[pixel + 1] * 6 + pixels[pixel + 2]) / 10;
      luminance[index] = value;
      if (previousLuminance) averageDifference += Math.abs(value - previousLuminance[index]);
    }

    if (!previousLuminance) {
      previousLuminance = luminance;
      return false;
    }

    averageDifference /= luminance.length;
    const threshold = Math.max(13, averageDifference * 2.35);
    let weightedX = 0;
    let weightedY = 0;
    let totalWeight = 0;

    for (let index = 0; index < luminance.length; index += 1) {
      const difference = Math.abs(luminance[index] - previousLuminance[index]);
      if (difference <= threshold) continue;
      const weight = difference - threshold;
      weightedX += (index % sampleWidth) * weight;
      weightedY += Math.floor(index / sampleWidth) * weight;
      totalWeight += weight;
    }

    previousLuminance = luminance;
    if (totalWeight < 520) return false;
    updateCameraPointer(
      weightedX / totalWeight / sampleWidth,
      weightedY / totalWeight / sampleHeight
    );
    return true;
  }

  async function processCameraFrame(runId) {
    if (!cameraTrackingActive || runId !== cameraRunId) return;
    let foundFace = false;

    if (faceDetector && cameraVideo?.readyState >= 2) {
      try {
        const faces = await faceDetector.detect(cameraVideo);
        if (runId !== cameraRunId) return;
        const box = faces[0]?.boundingBox;
        if (box && cameraVideo.videoWidth && cameraVideo.videoHeight) {
          updateCameraPointer(
            1 - (box.x + box.width / 2) / cameraVideo.videoWidth,
            (box.y + box.height / 2) / cameraVideo.videoHeight
          );
          foundFace = true;
          if (cameraUiState !== "activeFace") setCameraUiState("activeFace");
        }
      } catch {
        faceDetector = null;
        setCameraUiState("activeMotion");
      }
    }

    if (!foundFace) analyseMotion();
    cameraTimer = window.setTimeout(() => processCameraFrame(runId), 90);
  }

  function stopCameraTracking(nextState = "stopped") {
    cameraRunId += 1;
    cameraTrackingActive = false;
    window.clearTimeout(cameraTimer);
    cameraTimer = 0;
    cameraStream?.getTracks().forEach((track) => track.stop());
    cameraStream = null;
    if (cameraVideo) {
      cameraVideo.pause();
      cameraVideo.srcObject = null;
      cameraVideo.remove();
    }
    cameraVideo = null;
    cameraCanvas = null;
    cameraContext = null;
    previousLuminance = null;
    faceDetector = null;
    lastCameraSignal = 0;
    if (nextState) setCameraUiState(nextState);
  }

  async function startCameraTracking() {
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraUiState("unavailable");
      return;
    }
    if (!window.isSecureContext) {
      setCameraUiState("insecure");
      return;
    }

    const runId = ++cameraRunId;
    setCameraUiState("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 24, max: 30 },
        },
      });
      if (runId !== cameraRunId) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      cameraStream = stream;
      cameraVideo = document.createElement("video");
      cameraVideo.muted = true;
      cameraVideo.playsInline = true;
      cameraVideo.setAttribute("aria-hidden", "true");
      cameraVideo.srcObject = stream;
      await cameraVideo.play();

      cameraCanvas = document.createElement("canvas");
      cameraCanvas.width = 160;
      cameraCanvas.height = 90;
      cameraContext = cameraCanvas.getContext("2d", { willReadFrequently: true });
      if (!cameraContext) throw new Error("Camera analysis canvas is unavailable.");

      if ("FaceDetector" in window) {
        try {
          faceDetector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
        } catch {
          faceDetector = null;
        }
      }

      cameraTrackingActive = true;
      updateCameraPointer(0.5, 0.5);
      setCameraUiState(faceDetector ? "activeFace" : "activeMotion");
      processCameraFrame(runId);
    } catch (error) {
      stopCameraTracking(null);
      if (error?.name === "NotAllowedError" || error?.name === "SecurityError") {
        setCameraUiState("denied");
      } else if (error?.name === "NotReadableError" || error?.name === "AbortError") {
        setCameraUiState("busy");
      } else if (error?.name === "NotFoundError" || error?.name === "OverconstrainedError") {
        setCameraUiState("unavailable");
      } else {
        setCameraUiState("error");
      }
    }
  }

  function draw(time) {
    frameId = 0;
    if (!inView || document.hidden) return;

    const elapsed = time * 0.001;
    const cameraHasSignal = cameraTrackingActive && time - lastCameraSignal < 1800;
    const pointerIsIdle = time - lastPointerMove > 1800;
    const targetX = cameraHasSignal
      ? cameraPointer.x
      : pointerIsIdle
        ? Math.sin(elapsed * 0.18) * worldWidth * 0.16
        : pointer.x;
    const targetY = cameraHasSignal
      ? cameraPointer.y
      : pointerIsIdle
        ? Math.cos(elapsed * 0.23) * worldHeight * 0.16
        : pointer.y;
    virtualPointer.x += (targetX - virtualPointer.x) * 0.025;
    virtualPointer.y += (targetY - virtualPointer.y) * 0.025;

    const magnetRadius = Math.min(worldWidth, worldHeight) * 0.43;
    const ringRadius = Math.min(worldWidth, worldHeight) * 0.27;

    particles.forEach((particle, index) => {
      particle.phase += particle.speed;
      const dx = particle.x - virtualPointer.x;
      const dy = particle.y - virtualPointer.y;
      const distance = Math.hypot(dx, dy);
      let targetXForParticle = particle.x;
      let targetYForParticle = particle.y;
      let targetZ = particle.z;

      if (distance < magnetRadius) {
        const angle = Math.atan2(dy, dx);
        const wave = Math.sin(particle.phase * 2.2 + angle) * 0.16;
        const currentRadius = ringRadius + wave + particle.radiusOffset;
        targetXForParticle = virtualPointer.x + currentRadius * Math.cos(angle);
        targetYForParticle = virtualPointer.y + currentRadius * Math.sin(angle);
        targetZ = particle.z + Math.sin(particle.phase) * 0.24;
      }

      particle.currentX += (targetXForParticle - particle.currentX) * 0.025;
      particle.currentY += (targetYForParticle - particle.currentY) * 0.025;
      particle.currentZ += (targetZ - particle.currentZ) * 0.025;

      dummy.position.set(particle.currentX, particle.currentY, particle.currentZ);
      dummy.lookAt(virtualPointer.x, virtualPointer.y, particle.currentZ);
      dummy.rotateX(Math.PI / 2);

      const distanceFromRing = Math.abs(
        Math.hypot(
          particle.currentX - virtualPointer.x,
          particle.currentY - virtualPointer.y
        ) - ringRadius
      );
      const ringInfluence = THREE.MathUtils.clamp(1 - distanceFromRing / 3.2, 0.12, 1);
      const pulse = 0.92 + Math.sin(particle.phase * 3) * 0.08;
      const scale = ringInfluence * particle.size * pulse;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      particlesMesh.setMatrixAt(index, dummy.matrix);
    });

    particlesMesh.instanceMatrix.needsUpdate = true;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(draw);
  }

  function start() {
    if (!frameId && inView && !document.hidden) frameId = requestAnimationFrame(draw);
  }

  function stop() {
    if (!frameId) return;
    cancelAnimationFrame(frameId);
    frameId = 0;
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) start();
    else stop();
  });
  intersectionObserver.observe(host);

  cameraToggle?.addEventListener("click", () => {
    if (cameraTrackingActive) stopCameraTracking();
    else startCameraTracking();
  });

  const homePage = host.closest("[data-page]");
  if (homePage) {
    new MutationObserver(() => {
      if (
        !homePage.classList.contains("is-active") &&
        (cameraTrackingActive || cameraUiState === "requesting")
      ) {
        stopCameraTracking();
      }
    }).observe(homePage, { attributes: true, attributeFilter: ["class"] });
  }

  window.addEventListener("pointermove", updatePointer, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
      if (cameraTrackingActive || cameraUiState === "requesting") stopCameraTracking();
    } else {
      start();
    }
  });
  window.addEventListener("pagehide", () => stopCameraTracking(null));
  resize();
  renderCameraUi();
  start();
}
