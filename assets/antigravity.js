import * as THREE from "./vendor/three/three.module.min.js";

const host = document.querySelector("[data-antigravity]");
if (host && !reducedMotion.matches) {
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
  const virtualPointer = new THREE.Vector2(0, 0);
  const lastPointer = new THREE.Vector2(0, 0);
  let lastPointerMove = performance.now();
  let width = 1;
  let height = 1;
  let worldWidth = 16;
  let worldHeight = 9;
  let frameId = 0;
  let inView = true;

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

  function draw(time) {
    frameId = 0;
    if (!inView || document.hidden) return;

    const elapsed = time * 0.001;
    const pointerIsIdle = time - lastPointerMove > 1800;
    const targetX = pointerIsIdle ? Math.sin(elapsed * 0.18) * worldWidth * 0.16 : pointer.x;
    const targetY = pointerIsIdle ? Math.cos(elapsed * 0.23) * worldHeight * 0.16 : pointer.y;
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

  window.addEventListener("pointermove", updatePointer, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
  resize();
  start();
}
