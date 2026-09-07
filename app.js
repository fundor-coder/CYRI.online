const bi = (en, de) => ({ en, de });

const categories = [
  { id: "policy", en: "Climate Policy", de: "Klimapolitik" },
  { id: "energy", en: "Renewable Energy", de: "Erneuerbare Energie" },
  { id: "biodiversity", en: "Biodiversity", de: "Biodiversität" },
  { id: "cities", en: "Sustainable Cities", de: "Nachhaltige Städte" },
  { id: "marine", en: "Marine Protection", de: "Meeresschutz" },
];

const articles = [];

const learningTopics = [
  {
    id: "oceans",
    articleId: "seegraswiesen-klima-kuesten-arten-2026",
    imageId: "seagrass-meadow",
    title: bi("Oceans & coasts", "Meere & Küsten"),
    intro: bi("Explore how marine ecosystems protect coastlines, store carbon and support biodiversity.", "Entdecke, wie Meeresökosysteme Küsten schützen, Kohlenstoff speichern und Artenvielfalt fördern."),
    question: bi("How can an underwater meadow help the climate?", "Wie kann eine Unterwasserwiese dem Klima helfen?"),
    concepts: bi(["Blue carbon","Coastal protection","Biodiversity"], ["Blue Carbon","Küstenschutz","Biodiversität"]),
    facts: bi(["Seagrass captures carbon while growing. A large share can remain stored in the low-oxygen sediment below the meadow for long periods.","Leaves can slow waves and currents. Roots and rhizomes can hold sediment in place and help coastlines resist erosion.","Seagrass meadows provide food, shelter and nursery habitat for many marine species."], ["Seegras nimmt beim Wachstum Kohlenstoff auf. Ein großer Teil kann lange im sauerstoffarmen Sediment unter der Wiese gespeichert bleiben.","Die Blätter können Wellen und Strömungen bremsen. Wurzeln und Rhizome können Sediment festhalten und dadurch Küsten vor Erosion schützen.","Seegraswiesen bieten vielen Meeresarten Nahrung, Schutz und wichtige Kinderstuben."]),
    children: {
      intro: bi("Discover how underwater meadows help animals, store carbon and soften waves near the coast.", "Entdecke, wie Unterwasserwiesen Tieren helfen, Kohlenstoff speichern und Wellen an der Küste bremsen."),
      question: bi("What can a meadow under the sea do?", "Was kann eine Wiese unter dem Meer bewirken?"),
      facts: bi(["Seagrass takes carbon from the water as it grows. Some of it stays in the seabed for a long time.","The leaves slow the water. The roots hold the seabed together, so waves remove less sand.","Small fish and many other animals find food and hiding places between the leaves."], ["Seegras nimmt beim Wachsen Kohlenstoff aus dem Wasser auf. Ein Teil davon bleibt lange im Meeresboden.","Die Blätter bremsen das Wasser. Die Wurzeln halten den Boden fest, sodass Wellen weniger Sand wegtragen.","Kleine Fische und viele andere Tiere finden zwischen den Blättern Nahrung und Verstecke."]),
    },
    lab: {
      metrics: bi(["Carbon storage","Coastal protection","Habitat quality"], ["Kohlenstoffspeicherung","Küstenschutz","Lebensraumqualität"]),
      values: [62,66,64],
    },
  },
  {
    id: "climate",
    articleId: "korallenbleiche-erklaert-2026",
    imageId: "coral-bleaching-2023",
    title: bi("Climate & ecosystems", "Klima & Ökosysteme"),
    intro: bi("Understand how warming changes sensitive ecosystems and why local protection still matters.", "Verstehe, wie Erwärmung empfindliche Ökosysteme verändert und warum lokaler Schutz trotzdem wichtig ist."),
    question: bi("Why does heat make coral reefs turn white?", "Warum lässt Hitze Korallenriffe weiß werden?"),
    concepts: bi(["Marine heatwaves","Resilience","Climate action"], ["Marine Hitzewellen","Widerstandskraft","Klimaschutz"]),
    facts: bi(["Marine heatwaves are periods of unusually warm ocean water. If they persist, corals can lose the algae that supply much of their energy.","A bleached coral is stressed, not automatically dead. Quick cooling and lower local pressure can improve its chance of recovery.","Local reef protection strengthens resilience, but only rapid global emissions cuts can limit continued ocean warming."], ["Marine Hitzewellen sind Phasen ungewöhnlich warmen Meerwassers. Halten sie an, können Korallen die Algen verlieren, die ihnen viel Energie liefern.","Eine gebleichte Koralle ist gestresst, aber nicht automatisch tot. Schnelle Abkühlung und weniger lokale Belastung verbessern ihre Erholungschance.","Lokaler Riffschutz stärkt die Widerstandskraft, doch nur schnelle globale Emissionsminderung kann die weitere Meereserwärmung begrenzen."]),
    children: {
      intro: bi("Find out why very warm seawater stresses corals and what can give a reef a better chance.", "Finde heraus, warum sehr warmes Meerwasser Korallen stresst und was einem Riff helfen kann."),
      question: bi("Why can warm water make corals turn white?", "Warum können Korallen durch warmes Wasser weiß werden?"),
      facts: bi(["If the sea stays unusually warm, corals become stressed. They can lose the tiny algae that give them energy and colour.","A white coral is not always dead. It may recover if the water cools soon and other pressures are low.","Clean water and protected reefs help locally. Slowing climate change is still necessary to stop the oceans warming further."], ["Bleibt das Meer ungewöhnlich warm, geraten Korallen unter Stress. Sie können die winzigen Algen verlieren, die ihnen Energie und Farbe geben.","Eine weiße Koralle ist nicht immer tot. Kühlt das Wasser bald ab und gibt es wenig weitere Belastungen, kann sie sich erholen.","Sauberes Wasser und geschützte Riffe helfen vor Ort. Klimaschutz bleibt nötig, damit sich die Meere nicht weiter erwärmen."]),
    },
    lab: {
      metrics: bi(["Coral condition","Recovery chance","Bleaching risk"], ["Korallenzustand","Erholungschance","Bleichrisiko"]),
      values: [45,48,70],
    },
  },
  {
    id: "cities",
    articleId: "schwammstadt-regenwasser-hitze-2026",
    imageId: "sponge-city-rain-garden",
    title: bi("Cities & adaptation", "Städte & Anpassung"),
    intro: bi("See how urban planning can respond to heat, heavy rain and drought at the same time.", "Sieh dir an, wie Stadtplanung gleichzeitig auf Hitze, Starkregen und Trockenheit reagieren kann."),
    question: bi("What changes when a city treats rain as a resource?", "Was verändert sich, wenn eine Stadt Regen als Ressource behandelt?"),
    concepts: bi(["Rainwater storage","Urban heat","Climate adaptation"], ["Regenwasserspeicherung","Stadthitze","Klimaanpassung"]),
    facts: bi(["A sponge city keeps rain close to where it falls so it can infiltrate, evaporate or be reused instead of immediately entering drains.","Trees, planted areas and open water cool streets through shade and evaporation while sealed surfaces store heat.","The same green-blue infrastructure can reduce flood risk, heat and drought stress, making adaptation more efficient."], ["Eine Schwammstadt hält Regen dort zurück, wo er fällt. So kann er versickern, verdunsten oder genutzt werden, statt sofort in die Kanalisation zu fließen.","Bäume, bepflanzte Flächen und offenes Wasser kühlen durch Schatten und Verdunstung, während versiegelte Flächen Hitze speichern.","Dieselbe grün-blaue Infrastruktur kann Überflutungsrisiko, Hitze und Trockenstress gleichzeitig verringern."]),
    children: {
      intro: bi("See how trees, soil and planted areas can keep rain in a city and make hot days more comfortable.", "Sieh dir an, wie Bäume, Böden und bepflanzte Flächen Regen in der Stadt halten und heiße Tage angenehmer machen."),
      question: bi("How can a city use rain instead of sending it away?", "Wie kann eine Stadt Regen nutzen, statt ihn sofort abzuleiten?"),
      facts: bi(["A sponge city keeps rain near the place where it falls. The water can soak into the soil, evaporate or be used later.","Trees provide shade. Plants and water also cool the air when water evaporates.","Green spaces can help with heavy rain, heat and dry periods at the same time."], ["Eine Schwammstadt hält Regen dort, wo er fällt. Das Wasser kann versickern, verdunsten oder später genutzt werden.","Bäume spenden Schatten. Pflanzen und Wasser kühlen außerdem die Luft, wenn Wasser verdunstet.","Grünflächen können gleichzeitig bei Starkregen, Hitze und Trockenheit helfen."]),
    },
    lab: {
      metrics: bi(["Rain retention","Cooling effect","Flood resilience"], ["Regenrückhalt","Kühlwirkung","Überflutungsschutz"]),
      values: [58,56,55],
    },
  }
];

const explainerTools = [
  {
    id: "simple",
    title: bi("Simple words", "Einfache Worte"),
    prompt: bi(
      "Turn a difficult term into a clear child-friendly explanation.",
      "Mache aus einem schwierigen Begriff eine klare Erklärung für Kinder."
    ),
    example: bi(
      "Biodiversity means many different living things sharing one habitat.",
      "Biodiversität heißt: Viele verschiedene Lebewesen teilen sich einen Lebensraum."
    ),
    steps: bi(
      ["Name the term.", "Explain it in one sentence.", "Add one everyday example."],
      ["Begriff nennen.", "In einem Satz erklären.", "Ein Beispiel aus dem Alltag ergänzen."]
    ),
  },
  {
    id: "chain",
    title: bi("Cause chain", "Ursache-Kette"),
    prompt: bi(
      "Build a chain from human action to environmental effect and possible solution.",
      "Baue eine Kette von menschlichem Handeln über Umweltwirkung bis zur Lösung."
    ),
    example: bi(
      "More sealed ground -> faster runoff -> higher flood risk -> more green-blue spaces.",
      "Mehr versiegelter Boden -> schneller Abfluss -> höheres Überflutungsrisiko -> mehr Grün-Blau-Flächen."
    ),
    steps: bi(
      ["Start with an action.", "Show the effect.", "Add a fair solution."],
      ["Mit einer Handlung starten.", "Die Wirkung zeigen.", "Eine faire Lösung ergänzen."]
    ),
  },
  {
    id: "global",
    title: bi("Global link", "Globaler Bezug"),
    prompt: bi(
      "Connect a local environmental question with a region affected elsewhere.",
      "Verbinde eine lokale Umweltfrage mit einer betroffenen Region anderswo."
    ),
    example: bi(
      "Our energy choices influence climate risks that can intensify drought stress in other regions.",
      "Unsere Energieentscheidungen beeinflussen Klimarisiken, die Trockenstress in anderen Regionen verstärken können."
    ),
    steps: bi(
      ["Describe the local decision.", "Name the global connection.", "Ask who is affected."],
      ["Lokale Entscheidung beschreiben.", "Globalen Zusammenhang nennen.", "Fragen, wer betroffen ist."]
    ),
  },
  {
    id: "check",
    title: bi("Fact check", "Faktencheck"),
    prompt: bi(
      "Separate claim, evidence and uncertainty before sharing a statement.",
      "Trenne Behauptung, Beleg und Unsicherheit, bevor du eine Aussage teilst."
    ),
    example: bi(
      "Claim: trees cool streets. Evidence: shade and evaporation. Limit: effect depends on place and care.",
      "Behauptung: Bäume kühlen Straßen. Beleg: Schatten und Verdunstung. Grenze: Die Wirkung hängt vom Ort und von Pflege ab."
    ),
    steps: bi(
      ["What is claimed?", "Which source supports it?", "What should stay cautious?"],
      ["Was wird behauptet?", "Welche Quelle stützt es?", "Wo bleibt man vorsichtig?"]
    ),
  },
  {
    id: "clip",
    title: bi("30-second clip", "30-Sekunden-Clip"),
    prompt: bi(
      "Shape a short educational video idea without making the topic one-sided.",
      "Forme eine kurze Videoidee, ohne das Thema einseitig darzustellen."
    ),
    example: bi(
      "Hook: Why does rain become a problem in cities? Scene: sealed ground. Turn: sponge city solutions.",
      "Einstieg: Warum wird Regen in Städten zum Problem? Szene: versiegelter Boden. Wendung: Schwammstadt-Lösungen."
    ),
    steps: bi(
      ["Hook the question.", "Show one visible example.", "End with one realistic action."],
      ["Mit einer Frage starten.", "Ein sichtbares Beispiel zeigen.", "Mit einer realistischen Handlung enden."]
    ),
  },
];

const missionFocuses = [
  {
    id: "reef-rescue",
    topicId: "climate",
    articleId: "korallenbleiche-erklaert-2026",
    imageId: "coral-bleaching-2023",
    title: bi("Reef rescue mission", "Riff-Rettungsmission"),
    short: bi(
      "Understand heat stress, local pressure and recovery chances.",
      "Verstehe Hitzestress, lokalen Druck und Erholungschancen."
    ),
    region: bi("Coral reef system", "Korallenriff-System"),
    signal: bi("Heat stress is the warning signal.", "Hitzestress ist das Warnsignal."),
    problem: bi(
      "A reef can look bright and alive, but a marine heatwave can push corals into bleaching within weeks.",
      "Ein Riff kann lebendig wirken, aber eine marine Hitzewelle kann Korallen innerhalb weniger Wochen in die Bleiche treiben."
    ),
    goal: bi(
      "Find which actions protect reefs locally and which choices reduce the long-term heat risk.",
      "Finde heraus, welche Maßnahmen Riffe lokal schützen und welche Entscheidungen das langfristige Hitzrisiko senken."
    ),
    evidence: bi(
      "Compare water temperature, bleaching signs and local pressures such as pollution or broken coral.",
      "Vergleiche Wassertemperatur, Bleichzeichen und lokale Belastungen wie Verschmutzung oder beschädigte Korallen."
    ),
    experiment: bi(
      "Build a heat-stress timeline: one card for warming, one for algae loss, one for recovery or death.",
      "Baue eine Hitzestress-Zeitleiste: eine Karte für Erwärmung, eine für Algenverlust, eine für Erholung oder Absterben."
    ),
    discussion: bi(
      "Why can local reef protection help even though climate action remains necessary?",
      "Warum kann lokaler Riffschutz helfen, obwohl Klimaschutz weiterhin nötig bleibt?"
    ),
    share: bi(
      "A white coral is a warning, not always the end. Recovery depends on time, stress and protection.",
      "Eine weiße Koralle ist eine Warnung, nicht immer das Ende. Erholung hängt von Zeit, Stress und Schutz ab."
    ),
    base: [58, 46, 50, 42],
  },
  {
    id: "schoolyard-cooling",
    topicId: "cities",
    articleId: "schwammstadt-regenwasser-hitze-2026",
    imageId: "sponge-city-rain-garden",
    title: bi("Schoolyard climate lab", "Schulhof-Klimalabor"),
    short: bi(
      "Map heat, shade, rainwater and better design choices.",
      "Kartiere Hitze, Schatten, Regenwasser und bessere Gestaltung."
    ),
    region: bi("Your school or neighbourhood", "Deine Schule oder dein Viertel"),
    signal: bi("Sealed ground makes heat and heavy rain worse.", "Versiegelter Boden verschärft Hitze und Starkregen."),
    problem: bi(
      "Asphalt stores heat and sends rainwater away quickly, so one place can be too hot and flood-prone at the same time.",
      "Asphalt speichert Hitze und leitet Regen schnell ab, dadurch kann ein Ort gleichzeitig zu heiß und überflutungsanfällig sein."
    ),
    goal: bi(
      "Turn a real place into a redesign case with shade, open soil, plants and water storage.",
      "Mache aus einem echten Ort einen Umgestaltungsfall mit Schatten, offenem Boden, Pflanzen und Wasserspeicherung."
    ),
    evidence: bi(
      "Mark three hot spots, three shade spots and places where rainwater could soak in.",
      "Markiere drei Hitzeorte, drei Schattenorte und Stellen, an denen Regen versickern könnte."
    ),
    experiment: bi(
      "Compare two surfaces with a thermometer or touch-safe observation: sunlit asphalt versus shaded soil.",
      "Vergleiche zwei Flächen mit Thermometer oder sicherer Beobachtung: sonniger Asphalt gegen schattigen Boden."
    ),
    discussion: bi(
      "Who benefits first when a schoolyard becomes cooler and greener?",
      "Wer profitiert zuerst, wenn ein Schulhof kühler und grüner wird?"
    ),
    share: bi(
      "A sponge city starts small: shade, soil and stored rain can change how a place feels.",
      "Eine Schwammstadt beginnt klein: Schatten, Boden und gespeicherter Regen verändern, wie sich ein Ort anfühlt."
    ),
    base: [50, 62, 48, 54],
  },
  {
    id: "blue-carbon",
    topicId: "oceans",
    articleId: "seegraswiesen-klima-kuesten-arten-2026",
    imageId: "seagrass-meadow",
    title: bi("Blue carbon detective", "Blue-Carbon-Detektiv"),
    short: bi(
      "Explore why coastal ecosystems matter for climate and animals.",
      "Erkunde, warum Küstenökosysteme für Klima und Tiere wichtig sind."
    ),
    region: bi("Coasts and shallow seas", "Küsten und Flachmeere"),
    signal: bi("Hidden carbon stores can be lost when habitats are damaged.", "Versteckte Kohlenstoffspeicher können bei Schäden verloren gehen."),
    problem: bi(
      "Seagrass, mangroves and salt marshes can store carbon, but damage can weaken habitats and release stored material.",
      "Seegras, Mangroven und Salzwiesen können Kohlenstoff speichern, aber Schäden schwächen Lebensräume und können gespeichertes Material freisetzen."
    ),
    goal: bi(
      "Connect carbon storage with coastal protection and biodiversity instead of treating them as separate topics.",
      "Verbinde Kohlenstoffspeicherung mit Küstenschutz und Biodiversität, statt sie getrennt zu betrachten."
    ),
    evidence: bi(
      "Look for three services: carbon storage, wave slowing and nursery habitat for young animals.",
      "Suche drei Leistungen: Kohlenstoffspeicherung, Wellenbremsung und Kinderstube für Jungtiere."
    ),
    experiment: bi(
      "Use paper strips in water to model how plant leaves slow movement compared with open water.",
      "Nutze Papierstreifen im Wasser, um zu modellieren, wie Pflanzenblätter Bewegung im Vergleich zu offenem Wasser bremsen."
    ),
    discussion: bi(
      "Why is protecting an existing ecosystem often smarter than rebuilding it later?",
      "Warum ist es oft klüger, ein bestehendes Ökosystem zu schützen, statt es später wieder aufzubauen?"
    ),
    share: bi(
      "A seagrass meadow is not just underwater grass. It can store carbon, slow waves and shelter young animals.",
      "Eine Seegraswiese ist nicht nur Gras unter Wasser. Sie kann Kohlenstoff speichern, Wellen bremsen und Jungtiere schützen."
    ),
    base: [62, 58, 66, 44],
  },
  {
    id: "fair-future",
    topicId: "climate",
    articleId: "korallenbleiche-erklaert-2026",
    imageId: "mangrove",
    title: bi("Fair future case", "Fair-Future-Fall"),
    short: bi(
      "Connect climate impacts, responsibility and practical support.",
      "Verbinde Klimafolgen, Verantwortung und praktische Unterstützung."
    ),
    region: bi("Global South connection", "Globaler-Süden-Bezug"),
    signal: bi("Risk and responsibility are not distributed equally.", "Risiko und Verantwortung sind ungleich verteilt."),
    problem: bi(
      "Some communities face strong climate impacts even though they contributed far less to the emissions that drive them.",
      "Manche Gemeinschaften erleben starke Klimafolgen, obwohl sie viel weniger zu den verursachenden Emissionen beigetragen haben."
    ),
    goal: bi(
      "Build a fair question map: who is affected, who benefits, who can help and what support is respectful?",
      "Baue eine Fairness-Karte: Wer ist betroffen, wer profitiert, wer kann helfen und welche Unterstützung ist respektvoll?"
    ),
    evidence: bi(
      "Separate climate hazard, exposure, vulnerability and available support before proposing solutions.",
      "Trenne Klimagefahr, Exposition, Verwundbarkeit und vorhandene Unterstützung, bevor du Lösungen vorschlägst."
    ),
    experiment: bi(
      "Compare four viewpoints: affected community, local government, high-emission country and youth group.",
      "Vergleiche vier Blickwinkel: betroffene Gemeinschaft, lokale Regierung, emissionsstarkes Land und Jugendgruppe."
    ),
    discussion: bi(
      "What makes climate help fair instead of paternalistic?",
      "Was macht Klimahilfe fair statt bevormundend?"
    ),
    share: bi(
      "Climate justice asks three questions: who caused the risk, who is affected and who has power to help?",
      "Klimagerechtigkeit stellt drei Fragen: Wer verursacht das Risiko, wer ist betroffen und wer kann helfen?"
    ),
    base: [46, 44, 50, 68],
  },
];

const missionRoles = [
  {
    id: "explorer",
    title: bi("Explorer", "Entdecker:in"),
    text: bi(
      "Find visible clues and turn them into questions.",
      "Findet sichtbare Hinweise und macht daraus Fragen."
    ),
    action: bi(
      "Create a five-photo evidence walk with one question per photo.",
      "Erstelle einen Fünf-Foto-Beobachtungsgang mit einer Frage pro Bild."
    ),
    boosts: [14, 10, 8, 4],
  },
  {
    id: "scientist",
    title: bi("Model builder", "Modellbauer:in"),
    text: bi(
      "Compare causes, effects and uncertainty.",
      "Vergleicht Ursachen, Wirkungen und Unsicherheiten."
    ),
    action: bi(
      "Draw a cause-effect model and mark where evidence is strong or uncertain.",
      "Zeichne ein Ursache-Wirkungs-Modell und markiere, wo Belege stark oder unsicher sind."
    ),
    boosts: [18, 8, 6, 6],
  },
  {
    id: "organiser",
    title: bi("Action organiser", "Aktionsplaner:in"),
    text: bi(
      "Turn information into a realistic step for your class, group or channel.",
      "Macht aus Informationen einen realistischen Schritt für Klasse, Gruppe oder Kanal."
    ),
    action: bi(
      "Write a short action card with goal, people, material, time and first next step.",
      "Schreibe eine kurze Aktionskarte mit Ziel, Menschen, Material, Zeit und erstem nächsten Schritt."
    ),
    boosts: [8, 12, 10, 14],
  },
  {
    id: "storyteller",
    title: bi("Storyteller", "Erklärprofi"),
    text: bi(
      "Make the topic clear without making it too simple.",
      "Macht das Thema klar, ohne es zu stark zu vereinfachen."
    ),
    action: bi(
      "Build a 30-second explanation with hook, one fact, one model and one fair action.",
      "Baue eine 30-Sekunden-Erklärung mit Einstieg, Fakt, Modell und fairer Handlung."
    ),
    boosts: [10, 6, 12, 16],
  },
];

const missionPaces = [
  {
    id: "spark",
    title: bi("15 min quick check", "15-Minuten-Check"),
    text: bi("A quick fact check you can do with others.", "Ein schneller Faktencheck, den du mit anderen machen kannst."),
    deliverable: bi("One question, one model, one next step.", "Eine Frage, ein Modell, ein nächster Schritt."),
    boosts: [4, 2, 2, 2],
  },
  {
    id: "deep-dive",
    title: bi("45 min deep dive", "45-Minuten-Deep-Dive"),
    text: bi("A focused deep dive with evidence and discussion.", "Ein fokussierter Deep-Dive mit Belegen und Diskussion."),
    deliverable: bi("A mini poster with evidence, model and action.", "Ein Mini-Plakat mit Beleg, Modell und Handlung."),
    boosts: [8, 7, 6, 6],
  },
  {
    id: "project",
    title: bi("1 week project", "1-Wochen-Projekt"),
    text: bi("A deeper group project with a visible outcome.", "Ein vertieftes Gruppenprojekt mit sichtbarem Ergebnis."),
    deliverable: bi("A public info post or action idea.", "Ein öffentlicher Infopost oder eine Aktionsidee."),
    boosts: [12, 12, 12, 14],
  },
];

const sdgGoals = [
  {
    number: 1,
    color: "#e5243b",
    title: bi("No Poverty", "Keine Armut"),
    short: bi(
      "Environmental risks hit people harder when money, housing and safety are missing.",
      "Umweltrisiken treffen Menschen härter, wenn Geld, Wohnung und Sicherheit fehlen."
    ),
    focus: bi(
      "Floods, heat and pollution become social questions when protection is unequally shared.",
      "Fluten, Hitze und Verschmutzung werden soziale Fragen, wenn Schutz ungleich verteilt ist."
    ),
    question: bi(
      "Who has the fewest options when an environmental crisis happens?",
      "Wer hat die wenigsten Optionen, wenn eine Umweltkrise passiert?"
    ),
  },
  {
    number: 2,
    color: "#dda63a",
    title: bi("Zero Hunger", "Kein Hunger"),
    short: bi(
      "Healthy soils, reliable water and stable climate conditions shape food security.",
      "Gesunde Böden, verlässliches Wasser und stabiles Klima prägen Ernährungssicherheit."
    ),
    focus: bi(
      "Drought, heat and biodiversity loss can weaken harvests and local food systems.",
      "Dürre, Hitze und Biodiversitätsverlust können Ernten und lokale Ernährungssysteme schwächen."
    ),
    question: bi(
      "How can farming stay productive without exhausting soil and water?",
      "Wie bleibt Landwirtschaft produktiv, ohne Boden und Wasser zu überlasten?"
    ),
  },
  {
    number: 3,
    color: "#4c9f38",
    title: bi("Good Health and Well-being", "Gesundheit und Wohlergehen"),
    short: bi(
      "Clean air, cooler places and safe water are part of health.",
      "Saubere Luft, kühlere Orte und sicheres Wasser gehören zu Gesundheit."
    ),
    focus: bi(
      "Heat stress, polluted air and unsafe water show how environment and health connect.",
      "Hitzestress, verschmutzte Luft und unsicheres Wasser zeigen die Verbindung von Umwelt und Gesundheit."
    ),
    question: bi(
      "Which environmental change would improve everyday health in your area first?",
      "Welche Umweltveränderung würde Gesundheit in deiner Umgebung zuerst verbessern?"
    ),
  },
  {
    number: 4,
    color: "#c5192d",
    title: bi("Quality Education", "Hochwertige Bildung"),
    short: bi(
      "People need clear information to understand risks and choices.",
      "Menschen brauchen klare Informationen, um Risiken und Entscheidungen zu verstehen."
    ),
    focus: bi(
      "Environmental education turns complex facts into questions, models and useful explanations.",
      "Umweltbildung macht aus komplexen Fakten Fragen, Modelle und verständliche Erklärungen."
    ),
    question: bi(
      "Which fact becomes easier when you turn it into a model?",
      "Welcher Fakt wird leichter, wenn du daraus ein Modell machst?"
    ),
  },
  {
    number: 5,
    color: "#ff3a21",
    title: bi("Gender Equality", "Geschlechtergleichheit"),
    short: bi(
      "Fair participation matters when communities plan climate and nature solutions.",
      "Faire Beteiligung zählt, wenn Gemeinschaften Klima- und Naturlösungen planen."
    ),
    focus: bi(
      "Environmental decisions are stronger when different experiences and responsibilities are visible.",
      "Umweltentscheidungen werden stärker, wenn unterschiedliche Erfahrungen und Aufgaben sichtbar sind."
    ),
    question: bi(
      "Whose perspective is often missing when solutions are planned?",
      "Wessen Perspektive fehlt oft, wenn Lösungen geplant werden?"
    ),
  },
  {
    number: 6,
    color: "#26bde2",
    title: bi("Clean Water and Sanitation", "Sauberes Wasser und Sanitäreinrichtungen"),
    short: bi(
      "Water quality, access and storage decide what people and ecosystems can handle.",
      "Wasserqualität, Zugang und Speicherung entscheiden, was Menschen und Ökosysteme aushalten."
    ),
    focus: bi(
      "Rain gardens, wetlands and careful water use can reduce pressure during heat and heavy rain.",
      "Regengärten, Feuchtgebiete und sorgsamer Umgang mit Wasser senken Druck bei Hitze und Starkregen."
    ),
    question: bi(
      "Where should water be slowed, cleaned or stored instead of rushed away?",
      "Wo sollte Wasser gebremst, gereinigt oder gespeichert werden, statt schnell abzufließen?"
    ),
  },
  {
    number: 7,
    color: "#fcc30b",
    title: bi("Affordable and Clean Energy", "Bezahlbare und saubere Energie"),
    short: bi(
      "Energy choices shape emissions, air quality and fairness.",
      "Energieentscheidungen beeinflussen Emissionen, Luftqualität und Gerechtigkeit."
    ),
    focus: bi(
      "Clean energy only works well when access, costs and ecosystem impacts are considered together.",
      "Saubere Energie funktioniert gut, wenn Zugang, Kosten und Ökosystemwirkungen zusammengedacht werden."
    ),
    question: bi(
      "How can energy become cleaner without leaving people behind?",
      "Wie wird Energie sauberer, ohne Menschen zurückzulassen?"
    ),
  },
  {
    number: 8,
    color: "#a21942",
    title: bi("Decent Work and Economic Growth", "Menschenwürdige Arbeit und Wirtschaftswachstum"),
    short: bi(
      "A sustainable economy must protect people and natural systems.",
      "Eine nachhaltige Wirtschaft muss Menschen und natürliche Systeme schützen."
    ),
    focus: bi(
      "Supply chains, repair, reuse and green jobs connect daily products with environmental pressure.",
      "Lieferketten, Reparatur, Wiederverwendung und grüne Berufe verbinden Alltagsprodukte mit Umweltdruck."
    ),
    question: bi(
      "Which job or product could become cleaner and fairer at the same time?",
      "Welcher Beruf oder welches Produkt könnte gleichzeitig sauberer und fairer werden?"
    ),
  },
  {
    number: 9,
    color: "#fd6925",
    title: bi("Industry, Innovation and Infrastructure", "Industrie, Innovation und Infrastruktur"),
    short: bi(
      "Infrastructure decides whether places can handle heat, water and resource pressure.",
      "Infrastruktur entscheidet, ob Orte Hitze, Wasser und Ressourcendruck aushalten."
    ),
    focus: bi(
      "Better buildings, data, transport and water systems can reduce risk when they are planned fairly.",
      "Bessere Gebäude, Daten, Verkehr und Wassersysteme senken Risiken, wenn sie fair geplant sind."
    ),
    question: bi(
      "Which piece of infrastructure would make your school or city more resilient?",
      "Welche Infrastruktur würde deine Schule oder Stadt widerstandsfähiger machen?"
    ),
  },
  {
    number: 10,
    color: "#dd1367",
    title: bi("Reduced Inequalities", "Weniger Ungleichheiten"),
    short: bi(
      "Environmental damage and climate risks are not shared equally.",
      "Umweltschäden und Klimarisiken sind nicht gleich verteilt."
    ),
    focus: bi(
      "Climate justice asks who caused a risk, who is affected and who has power to help.",
      "Klimagerechtigkeit fragt, wer Risiko verursacht, wer betroffen ist und wer helfen kann."
    ),
    question: bi(
      "What would make support respectful instead of one-sided?",
      "Was macht Unterstützung respektvoll statt einseitig?"
    ),
  },
  {
    number: 11,
    color: "#fd9d24",
    title: bi("Sustainable Cities and Communities", "Nachhaltige Städte und Gemeinden"),
    short: bi(
      "Cities can become cooler, safer and more natural when space is designed differently.",
      "Städte werden kühler, sicherer und naturnäher, wenn Flächen anders gestaltet werden."
    ),
    focus: bi(
      "Shade, open soil, trees and stored rain reduce heat and flooding at the same time.",
      "Schatten, offener Boden, Bäume und gespeicherter Regen senken Hitze und Überflutungen zugleich."
    ),
    question: bi(
      "Which sealed place near you could become greener or cooler?",
      "Welche versiegelte Fläche in deiner Nähe könnte grüner oder kühler werden?"
    ),
  },
  {
    number: 12,
    color: "#bf8b2e",
    title: bi("Responsible Consumption and Production", "Nachhaltige/r Konsum und Produktion"),
    short: bi(
      "What we buy, use and throw away affects forests, water, climate and waste.",
      "Was wir kaufen, nutzen und wegwerfen, beeinflusst Wälder, Wasser, Klima und Müll."
    ),
    focus: bi(
      "Traceable products, reuse and less waste can reduce pressure on ecosystems far away.",
      "Nachverfolgbare Produkte, Wiederverwendung und weniger Müll senken Druck auf entfernte Ökosysteme."
    ),
    question: bi(
      "Which everyday product should be checked from origin to disposal?",
      "Welches Alltagsprodukt sollte man von Herkunft bis Entsorgung prüfen?"
    ),
  },
  {
    number: 13,
    color: "#3f7e44",
    title: bi("Climate Action", "Maßnahmen zum Klimaschutz"),
    short: bi(
      "Climate action means reducing emissions and preparing for impacts already happening.",
      "Klimaschutz heißt Emissionen senken und sich auf bereits spürbare Folgen vorbereiten."
    ),
    focus: bi(
      "Coral bleaching, drought, heat and sea-level rise show why mitigation and adaptation belong together.",
      "Korallenbleiche, Dürre, Hitze und Meeresspiegel zeigen, warum Minderung und Anpassung zusammengehören."
    ),
    question: bi(
      "Which action reduces future risk and also helps people now?",
      "Welche Maßnahme senkt künftige Risiken und hilft gleichzeitig heute?"
    ),
  },
  {
    number: 14,
    color: "#0a97d9",
    title: bi("Life Below Water", "Leben unter Wasser"),
    short: bi(
      "Oceans store heat and carbon, support life and protect many coasts.",
      "Meere speichern Wärme und Kohlenstoff, tragen Leben und schützen viele Küsten."
    ),
    focus: bi(
      "Reefs, seagrass and mangroves connect biodiversity, carbon storage and coastal safety.",
      "Riffe, Seegras und Mangroven verbinden Artenvielfalt, Kohlenstoffspeicherung und Küstenschutz."
    ),
    question: bi(
      "What changes when a damaged marine habitat loses its protective function?",
      "Was verändert sich, wenn ein geschädigter Meereslebensraum seine Schutzfunktion verliert?"
    ),
  },
  {
    number: 15,
    color: "#56c02b",
    title: bi("Life on Land", "Leben an Land"),
    short: bi(
      "Forests, soils, wetlands and species networks keep ecosystems stable.",
      "Wälder, Böden, Feuchtgebiete und Artennetze halten Ökosysteme stabil."
    ),
    focus: bi(
      "Connected habitats protect biodiversity and can store carbon when they are not overused.",
      "Verbundene Lebensräume schützen Biodiversität und speichern Kohlenstoff, wenn sie nicht übernutzt werden."
    ),
    question: bi(
      "Which habitat connection would help animals, plants and climate at once?",
      "Welche Lebensraumverbindung würde Tieren, Pflanzen und Klima zugleich helfen?"
    ),
  },
  {
    number: 16,
    color: "#00689d",
    title: bi("Peace, Justice and Strong Institutions", "Frieden, Gerechtigkeit und starke Institutionen"),
    short: bi(
      "Fair rules and trustworthy institutions make environmental protection possible.",
      "Faire Regeln und verlässliche Institutionen machen Umweltschutz möglich."
    ),
    focus: bi(
      "Access to information, participation and accountability decide whether promises become real action.",
      "Zugang zu Informationen, Beteiligung und Verantwortung entscheiden, ob Versprechen zu Handeln werden."
    ),
    question: bi(
      "What information should be public before a big environmental decision?",
      "Welche Informationen sollten vor einer großen Umweltentscheidung öffentlich sein?"
    ),
  },
  {
    number: 17,
    color: "#19486a",
    title: bi("Partnerships for the Goals", "Partnerschaften zur Erreichung der Ziele"),
    short: bi(
      "The goals only work when knowledge, money and responsibility are shared fairly.",
      "Die Ziele funktionieren nur, wenn Wissen, Geld und Verantwortung fair geteilt werden."
    ),
    focus: bi(
      "Climate and nature solutions often need cooperation between local groups, science, politics and countries.",
      "Klima- und Naturlösungen brauchen oft Zusammenarbeit zwischen lokalen Gruppen, Wissenschaft, Politik und Ländern."
    ),
    question: bi(
      "Which partners would need to work together for your idea to become real?",
      "Welche Partner müssten zusammenarbeiten, damit deine Idee Wirklichkeit wird?"
    ),
  },
];

const mapHotspots = [
  {
    id: "rhine",
    x: 49,
    y: 33,
    title: bi("Germany: water and heat", "Deutschland: Wasser und Hitze"),
    tag: bi("Local starting point", "Lokaler Startpunkt"),
    challenge: bi(
      "Cities and rivers feel heavy rain, heat and drought more directly as climate risks increase.",
      "Städte und Flüsse spüren Starkregen, Hitze und Trockenheit stärker, wenn Klimarisiken zunehmen."
    ),
    connection: bi(
      "Local adaptation shows why climate protection and fair infrastructure matter worldwide.",
      "Lokale Anpassung zeigt, warum Klimaschutz und faire Infrastruktur weltweit wichtig sind."
    ),
    action: bi(
      "Compare sealed and green spaces in your own area.",
      "Vergleiche versiegelte und grüne Flächen in deiner Umgebung."
    ),
    sdgs: ["SDG 11", "SDG 13"],
    model: {
      title: bi("City water model", "Stadtwasser-Modell"),
      metrics: bi(["Runoff pressure", "Cooling", "Habitat"], ["Abflussdruck", "Kühlung", "Lebensraum"]),
      scenarios: [
        {
          id: "sealed",
          label: bi("Sealed streets", "Versiegelte Straßen"),
          values: [82, 24, 18],
          outcome: bi(
            "Water runs off quickly, streets heat up and small habitats disappear.",
            "Wasser fließt schnell ab, Straßen heizen sich auf und kleine Lebensräume verschwinden."
          ),
        },
        {
          id: "mixed",
          label: bi("Mixed blocks", "Gemischte Blöcke"),
          values: [55, 48, 42],
          outcome: bi(
            "Some green spaces slow runoff, but heavy rain can still overload drains.",
            "Einige Grünflächen bremsen Abfluss, aber Starkregen kann die Kanalisation weiter überlasten."
          ),
        },
        {
          id: "sponge",
          label: bi("Sponge network", "Schwamm-Netz"),
          values: [28, 74, 68],
          outcome: bi(
            "Rain gardens, trees and open soil store water and cool the neighbourhood.",
            "Regengärten, Bäume und offene Böden speichern Wasser und kühlen das Viertel."
          ),
        },
      ],
    },
  },
  {
    id: "amazon",
    x: 34,
    y: 61,
    title: bi("Amazon region: forest and climate", "Amazonasraum: Wald und Klima"),
    tag: bi("Global South", "Globaler Süden"),
    challenge: bi(
      "Forests store carbon, shape rainfall and provide homes for many species and communities.",
      "Wälder speichern Kohlenstoff, prägen Niederschläge und sind Lebensraum für viele Arten und Gemeinschaften."
    ),
    connection: bi(
      "Consumption, land use and climate policy in one part of the world can affect ecosystems elsewhere.",
      "Konsum, Landnutzung und Klimapolitik in einem Teil der Welt können Ökosysteme anderswo beeinflussen."
    ),
    action: bi(
      "Ask where everyday products come from and which standards protect forests.",
      "Frage, wo Alltagsprodukte herkommen und welche Standards Wälder schützen."
    ),
    sdgs: ["SDG 12", "SDG 15"],
    model: {
      title: bi("Forest pressure model", "Wald-Druck-Modell"),
      metrics: bi(["Forest pressure", "Carbon storage", "Species refuge"], ["Walddruck", "Kohlenstoffspeicher", "Arten-Rückzugsraum"]),
      scenarios: [
        {
          id: "pressure",
          label: bi("High pressure", "Hoher Druck"),
          values: [78, 38, 32],
          outcome: bi(
            "More pressure means less connected habitat and weaker long-term carbon storage.",
            "Mehr Druck bedeutet weniger verbundenen Lebensraum und schwächere langfristige Kohlenstoffspeicherung."
          ),
        },
        {
          id: "standards",
          label: bi("Better standards", "Bessere Standards"),
          values: [46, 58, 54],
          outcome: bi(
            "Traceable supply chains and protected areas can reduce harm, but need monitoring.",
            "Nachverfolgbare Lieferketten und Schutzgebiete können Schäden senken, brauchen aber Kontrolle."
          ),
        },
        {
          id: "restoration",
          label: bi("Restoration links", "Wiedervernetzung"),
          values: [26, 72, 76],
          outcome: bi(
            "Restoration and local rights can reconnect habitats and strengthen resilience.",
            "Wiederherstellung und lokale Rechte können Lebensräume verbinden und Widerstandskraft stärken."
          ),
        },
      ],
    },
  },
  {
    id: "sahel",
    x: 52,
    y: 52,
    title: bi("Sahel: drought and resilience", "Sahel: Dürre und Widerstandskraft"),
    tag: bi("Climate justice", "Klimagerechtigkeit"),
    challenge: bi(
      "Drought, food security and changing rainfall can become connected social and ecological pressures.",
      "Dürre, Ernährungssicherheit und veränderte Niederschläge können soziale und ökologische Belastungen verbinden."
    ),
    connection: bi(
      "Climate impacts are not distributed equally, so solutions must include fairness and local knowledge.",
      "Klimafolgen sind ungleich verteilt, deshalb brauchen Lösungen Fairness und lokales Wissen."
    ),
    action: bi(
      "Discuss why adaptation support is part of climate responsibility.",
      "Diskutiere, warum Anpassungsunterstützung zu Klimaverantwortung gehört."
    ),
    sdgs: ["SDG 2", "SDG 13"],
    model: {
      title: bi("Drought resilience model", "Dürre-Resilienz-Modell"),
      metrics: bi(["Drought stress", "Food security", "Adaptation"], ["Dürrestress", "Ernährungssicherheit", "Anpassung"]),
      scenarios: [
        {
          id: "shock",
          label: bi("Drought shock", "Dürre-Schock"),
          values: [84, 30, 22],
          outcome: bi(
            "When rainfall shifts suddenly, water access and harvests can come under pressure.",
            "Wenn sich Niederschläge plötzlich verändern, geraten Wasserzugang und Ernten unter Druck."
          ),
        },
        {
          id: "support",
          label: bi("Adaptation support", "Anpassungshilfe"),
          values: [56, 54, 58],
          outcome: bi(
            "Early warning, storage and local knowledge can reduce risk before a crisis escalates.",
            "Frühwarnung, Speicherung und lokales Wissen können Risiken senken, bevor Krisen eskalieren."
          ),
        },
        {
          id: "resilience",
          label: bi("Resilient farming", "Robuste Landwirtschaft"),
          values: [38, 70, 74],
          outcome: bi(
            "Soil care, diverse crops and fair support make communities less vulnerable.",
            "Bodenpflege, vielfältige Kulturen und faire Unterstützung machen Gemeinschaften weniger verwundbar."
          ),
        },
      ],
    },
  },
  {
    id: "coral-triangle",
    x: 76,
    y: 61,
    title: bi("Coral Triangle: reefs and livelihoods", "Korallendreieck: Riffe und Lebensgrundlagen"),
    tag: bi("Biodiversity", "Biodiversität"),
    challenge: bi(
      "Coral reefs can support fisheries, coastal protection and biodiversity, but heat stress puts them at risk.",
      "Korallenriffe können Fischerei, Küstenschutz und Artenvielfalt stützen, aber Hitzestress gefährdet sie."
    ),
    connection: bi(
      "Ocean warming links emissions, coastal safety and livelihoods across countries.",
      "Ozeanerwärmung verbindet Emissionen, Küstenschutz und Lebensgrundlagen über Ländergrenzen hinweg."
    ),
    action: bi(
      "Explain why reef protection needs both local care and global emissions cuts.",
      "Erkläre, warum Riffschutz lokale Maßnahmen und globale Emissionsminderung braucht."
    ),
    sdgs: ["SDG 14", "SDG 13"],
    model: {
      title: bi("Reef stress model", "Riffstress-Modell"),
      metrics: bi(["Heat stress", "Recovery chance", "Local pressure"], ["Hitzestress", "Erholungschance", "Lokaler Druck"]),
      scenarios: [
        {
          id: "heat",
          label: bi("Heat wave", "Hitzewelle"),
          values: [86, 24, 62],
          outcome: bi(
            "High ocean heat can trigger bleaching; local pressure makes recovery harder.",
            "Hohe Meereshitze kann Bleiche auslösen; lokaler Druck erschwert Erholung."
          ),
        },
        {
          id: "local-care",
          label: bi("Local reef care", "Lokaler Riffschutz"),
          values: [70, 52, 34],
          outcome: bi(
            "Cleaner water and less physical damage improve recovery, even if warming remains a risk.",
            "Saubereres Wasser und weniger Schäden verbessern Erholung, auch wenn Erwärmung riskant bleibt."
          ),
        },
        {
          id: "climate-care",
          label: bi("Climate + local care", "Klima + lokaler Schutz"),
          values: [42, 76, 26],
          outcome: bi(
            "Lower emissions and local protection give reefs the strongest chance over time.",
            "Weniger Emissionen und lokaler Schutz geben Riffen langfristig die beste Chance."
          ),
        },
      ],
    },
  },
  {
    id: "pacific",
    x: 86,
    y: 66,
    title: bi("Pacific islands: sea level and justice", "Pazifikinseln: Meeresspiegel und Gerechtigkeit"),
    tag: bi("Global partnership", "Globale Partnerschaft"),
    challenge: bi(
      "Low-lying islands can face sea-level rise, storms and difficult choices about adaptation.",
      "Flache Inselstaaten können Meeresspiegelanstieg, Stürme und schwierige Anpassungsentscheidungen erleben."
    ),
    connection: bi(
      "People who contributed least to emissions can still face severe climate risks.",
      "Menschen, die wenig zu Emissionen beigetragen haben, können trotzdem starke Klimarisiken tragen."
    ),
    action: bi(
      "Create a fair-question card: who caused the risk, who is affected, who can help?",
      "Erstelle eine Fairness-Frage: Wer verursacht das Risiko, wer ist betroffen, wer kann helfen?"
    ),
    sdgs: ["SDG 10", "SDG 13", "SDG 17"],
    model: {
      title: bi("Climate justice model", "Klimagerechtigkeits-Modell"),
      metrics: bi(["Exposure", "Adaptation room", "Partnership"], ["Gefährdung", "Anpassungsspielraum", "Partnerschaft"]),
      scenarios: [
        {
          id: "exposed",
          label: bi("High exposure", "Hohe Gefährdung"),
          values: [82, 26, 28],
          outcome: bi(
            "Sea-level rise and storms can limit choices when adaptation resources are low.",
            "Meeresspiegelanstieg und Stürme begrenzen Handlungsspielräume, wenn Anpassungsressourcen fehlen."
          ),
        },
        {
          id: "planning",
          label: bi("Adaptation plan", "Anpassungsplan"),
          values: [62, 56, 50],
          outcome: bi(
            "Planning, safer infrastructure and local participation can widen choices.",
            "Planung, sichere Infrastruktur und lokale Beteiligung können Optionen erweitern."
          ),
        },
        {
          id: "partnership",
          label: bi("Fair partnership", "Faire Partnerschaft"),
          values: [48, 72, 78],
          outcome: bi(
            "Long-term support and fair partnerships make climate responsibility more practical.",
            "Langfristige Unterstützung und faire Partnerschaften machen Klimaverantwortung praktischer."
          ),
        },
      ],
    },
  },
];

const actionCards = [
  {
    title: bi("Ask better questions", "Bessere Fragen stellen"),
    text: bi(
      "Start discussions with causes, affected people and possible solutions instead of blame.",
      "Starte Gespräche mit Ursachen, betroffenen Menschen und Lösungen statt mit Schuldzuweisungen."
    ),
  },
  {
    title: bi("Share carefully", "Sorgfältig teilen"),
    text: bi(
      "Use short posts that include a source, a clear message and one uncertainty.",
      "Nutze kurze Beiträge mit Quelle, klarer Botschaft und einer benannten Unsicherheit."
    ),
  },
  {
    title: bi("Map your place", "Deinen Ort kartieren"),
    text: bi(
      "Document heat, shade, water and biodiversity spots near school or in your community.",
      "Dokumentiere Hitze, Schatten, Wasser und Biodiversität an Schule oder im Ort."
    ),
  },
  {
    title: bi("Invite participation", "Beteiligung ermöglichen"),
    text: bi(
      "Choose formats that work for different ages, language levels and info needs.",
      "Wähle Formate, die für verschiedene Altersgruppen, Sprachniveaus und Informationsbedarfe funktionieren."
    ),
  },
];

const pollOptions = [
  {
    id: "maps",
    title: bi("Interactive maps", "Interaktive Karten"),
    text: bi("Show places, risks and possible solutions.", "Orte, Risiken und mögliche Lösungen zeigen."),
  },
  {
    id: "clips",
    title: bi("Short videos", "Kurzvideos"),
    text: bi("Explain one question in under one minute.", "Eine Frage in unter einer Minute erklären."),
  },
  {
    id: "school",
    title: bi("School actions", "Schulaktionen"),
    text: bi("Turn environmental information into small group projects.", "Umweltinformationen in kleine Gruppenprojekte übersetzen."),
  },
];

const learningGames = [
  {
    id: "sdg-sprint",
    title: bi("SDG Sprint", "SDG-Sprint"),
    tag: bi("Spot the system", "System erkennen"),
    text: bi(
      "Read a real-world situation and decide which sustainability goal is the strongest link.",
      "Lies eine reale Situation und entscheide, welches Nachhaltigkeitsziel am stärksten damit verbunden ist."
    ),
    info: {
      problem: bi(
        "Environmental problems rarely stand alone: heat, water, ecosystems, justice and consumption often affect each other.",
        "Umweltprobleme stehen selten allein: Hitze, Wasser, Ökosysteme, Gerechtigkeit und Konsum beeinflussen sich oft gegenseitig."
      ),
      connection: bi(
        "The 17 goals help you see which system is touched and who is affected by a decision.",
        "Die 17 Ziele helfen dir zu erkennen, welches System berührt wird und wer von einer Entscheidung betroffen ist."
      ),
      action: bi(
        "Match the strongest goal, then ask which rule, habit or partnership would reduce the pressure.",
        "Ordne das stärkste Ziel zu und frage dann, welche Regel, Gewohnheit oder Partnerschaft den Druck senken würde."
      ),
    },
  },
  {
    id: "chain-builder",
    title: bi("Cause Chain", "Ursache-Kette"),
    tag: bi("Trace the damage", "Schäden verfolgen"),
    text: bi(
      "Trace how one pressure turns into an environmental problem and where a solution can interrupt it.",
      "Verfolge, wie ein Druck zu einem Umweltproblem wird und wo eine Lösung die Kette unterbrechen kann."
    ),
    info: {
      problem: bi(
        "Many environmental damages start with a pressure such as sealed soil, heat, pollution, waste or emissions.",
        "Viele Umweltschäden beginnen mit einem Druck wie versiegeltem Boden, Hitze, Verschmutzung, Müll oder Emissionen."
      ),
      connection: bi(
        "A cause chain shows how a human action can change nature and then create risks for people.",
        "Eine Ursache-Kette zeigt, wie menschliches Handeln Natur verändert und daraus Risiken für Menschen entstehen."
      ),
      action: bi(
        "Find the point where the chain can be interrupted: reduce the pressure, restore habitat or protect communities.",
        "Finde den Punkt, an dem die Kette unterbrochen werden kann: Druck senken, Lebensräume wiederherstellen oder Menschen schützen."
      ),
    },
  },
  {
    id: "city-builder",
    title: bi("City Builder", "Stadt-Baumeister"),
    tag: bi("Plan under pressure", "Unter Druck planen"),
    text: bi(
      "Use limited planning points and balance heat, flooding, biodiversity and fair access.",
      "Nutze begrenzte Planungspunkte und balanciere Hitze, Überflutung, Biodiversität und fairen Zugang."
    ),
    info: {
      problem: bi(
        "Sealed, dense city spaces can become too hot, flood faster and leave little room for animals, plants and people.",
        "Versiegelte, dichte Stadträume können zu heiß werden, schneller überfluten und wenig Platz für Tiere, Pflanzen und Menschen lassen."
      ),
      connection: bi(
        "Good adaptation links shade, open soil, stored rainwater, biodiversity and fair access instead of treating them separately.",
        "Gute Anpassung verbindet Schatten, offenen Boden, gespeichertes Regenwasser, Biodiversität und fairen Zugang, statt alles getrennt zu betrachten."
      ),
      action: bi(
        "Balance your budget so one solution does not create a new problem somewhere else.",
        "Verteile dein Budget so, dass eine Lösung nicht an anderer Stelle ein neues Problem erzeugt."
      ),
    },
  },
  {
    id: "reef-rescue",
    title: bi("Reef Rescue", "Riff-Rettung"),
    tag: bi("Set priorities", "Prioritäten setzen"),
    text: bi(
      "Choose reef protection actions within a tight budget and compare local pressure with climate risk.",
      "Wähle Riffschutz-Maßnahmen mit knappem Budget und vergleiche lokalen Druck mit Klimarisiko."
    ),
    info: {
      problem: bi(
        "Coral reefs are stressed by marine heatwaves, dirty water, physical damage and long-term ocean warming.",
        "Korallenriffe stehen durch marine Hitzewellen, verschmutztes Wasser, direkte Schäden und langfristige Meereserwärmung unter Druck."
      ),
      connection: bi(
        "Local protection can improve recovery chances, but it cannot replace emission cuts that limit future heat stress.",
        "Lokaler Schutz kann Erholungschancen verbessern, ersetzt aber keine Emissionssenkung gegen künftigen Hitzestress."
      ),
      action: bi(
        "Combine clean water, protected zones, heat warnings, climate action and local knowledge.",
        "Kombiniere sauberes Wasser, Schutzzonen, Hitzewarnungen, Klimaschutz und lokales Wissen."
      ),
    },
  },
  {
    id: "climate-council",
    title: bi("Climate Council 2035", "Klimarat 2035"),
    tag: bi("Final mission", "Finale Mission"),
    text: bi(
      "Build a fair climate package that cuts emissions, protects nature and prepares communities for climate impacts.",
      "Baue ein faires Klimapaket, das Emissionen senkt, Natur schützt und Gemeinschaften auf Klimafolgen vorbereitet."
    ),
    info: {
      problem: bi(
        "Single measures are not enough when energy, transport, food, ecosystems and social fairness influence one another.",
        "Einzelmaßnahmen reichen nicht, wenn Energie, Verkehr, Ernährung, Ökosysteme und soziale Fairness zusammenwirken."
      ),
      connection: bi(
        "A strong package combines rapid emission cuts with resilient ecosystems and support that people can access fairly.",
        "Ein starkes Paket verbindet schnelle Emissionsminderung mit widerstandsfähigen Ökosystemen und fair zugänglicher Unterstützung."
      ),
      action: bi(
        "Build a tightly balanced package, test it and use the qualitative feedback to uncover the hidden mission threshold.",
        "Baue ein sehr genau ausbalanciertes Paket, prüfe es und erschließe die verdeckte Missionsgrenze aus dem qualitativen Feedback."
      ),
    },
  },
];

const learningGameTracks = [
  {
    minutes: 5,
    games: ["sdg-sprint", "chain-builder"],
    description: bi("Quick path with two short puzzles.", "Schneller Pfad mit zwei kurzen Rätseln."),
  },
  {
    minutes: 15,
    games: ["sdg-sprint", "chain-builder", "city-builder", "reef-rescue"],
    description: bi("Four connected puzzles and planning challenges.", "Vier verbundene Rätsel und Planungs-Challenges."),
  },
  {
    minutes: 30,
    games: ["sdg-sprint", "chain-builder", "city-builder", "reef-rescue", "climate-council"],
    description: bi("Full mission with the Climate Council finale.", "Volle Mission mit dem Klimarat-Finale."),
  },
];

const certificateTiers = {
  5: {
    id: "bronze",
    label: bi("Bronze", "Bronze"),
    color: "#a76532",
    light: "#f1dfcf",
  },
  15: {
    id: "silver",
    label: bi("Silver", "Silber"),
    color: "#687782",
    light: "#e7ecef",
  },
  30: {
    id: "gold",
    label: bi("Gold", "Gold"),
    color: "#d19a18",
    light: "#f7ebc8",
  },
};
const certificateTierOrder = ["bronze", "silver", "gold"];

function certificateTierForMinutes(minutes) {
  return certificateTiers[minutes] || certificateTiers[30];
}

function certificateMinutesForTier(tierId) {
  return Number(
    Object.entries(certificateTiers).find(([, tier]) => tier.id === tierId)?.[0] || 30
  );
}

function certificateTrackForTier(tier) {
  return learningGameTracks.find((track) => track.minutes === certificateMinutesForTier(tier.id));
}

function isCertificateTierEarned(tier) {
  return Boolean(
    certificateTrackForTier(tier)?.games.every((gameId) => isLearningGameComplete(gameId))
  );
}

const sdgSprintRounds = [
  {
    prompt: bi(
      "A schoolyard gets trees, open soil and rain gardens so heat and heavy rain become less dangerous.",
      "Ein Schulhof bekommt Bäume, offenen Boden und Regengärten, damit Hitze und Starkregen weniger gefährlich werden."
    ),
    answer: 11,
    options: [11, 13, 3, 4],
    fact: bi(
      "SDG 11 is about sustainable cities and communities. Climate action still connects through SDG 13.",
      "SDG 11 behandelt nachhaltige Städte und Gemeinden. Klimaschutz hängt über SDG 13 trotzdem damit zusammen."
    ),
  },
  {
    prompt: bi(
      "A coastal group protects seagrass because it stores carbon, slows waves and gives animals shelter.",
      "Eine Küstengruppe schützt Seegras, weil es Kohlenstoff speichert, Wellen bremst und Tieren Schutz gibt."
    ),
    answer: 14,
    options: [6, 14, 15, 13],
    fact: bi(
      "SDG 14 focuses on life below water and connects marine habitats with climate protection.",
      "SDG 14 schaut auf Leben unter Wasser und verbindet Meereslebensräume mit Klimaschutz."
    ),
  },
  {
    prompt: bi(
      "A drought-prone region builds early warning systems, heat plans and fair support before the next extreme season.",
      "Eine dürregefährdete Region baut Frühwarnsysteme, Hitzepläne und faire Unterstützung vor der nächsten Extremsaison auf."
    ),
    answer: 13,
    options: [13, 2, 17, 3],
    fact: bi(
      "SDG 13 includes climate action and adaptation. Food security and partnerships still connect to the situation.",
      "SDG 13 umfasst Klimaschutz und Anpassung. Ernährungssicherheit und Partnerschaften hängen trotzdem damit zusammen."
    ),
  },
  {
    prompt: bi(
      "A class checks where a product comes from, how much waste it creates and whether forests are protected.",
      "Eine Klasse prüft, woher ein Produkt kommt, wie viel Müll entsteht und ob Wälder geschützt werden."
    ),
    answer: 12,
    options: [8, 12, 15, 9],
    fact: bi(
      "SDG 12 is about responsible consumption and production from origin to disposal.",
      "SDG 12 behandelt nachhaltigen Konsum und Produktion von Herkunft bis Entsorgung."
    ),
  },
  {
    prompt: bi(
      "A region gives smallholder farms drought-resistant seeds and fair market access so harvests survive dry years.",
      "Eine Region gibt kleinen Höfen dürreresistentes Saatgut und fairen Marktzugang, damit Ernten trockene Jahre überstehen."
    ),
    answer: 2,
    options: [2, 13, 15, 12],
    fact: bi(
      "SDG 2 covers food security and resilient agriculture. The climate link runs through SDG 13, but the core goal here is secure harvests.",
      "SDG 2 umfasst Ernährungssicherheit und widerstandsfähige Landwirtschaft. Der Klimabezug läuft über SDG 13, das Kernziel hier sind aber sichere Ernten."
    ),
  },
  {
    prompt: bi(
      "Youth groups from several countries share flood data, warning tools and funding so all of them can prepare together.",
      "Jugendgruppen aus mehreren Ländern teilen Flutdaten, Warnwerkzeuge und Fördermittel, damit alle sich gemeinsam vorbereiten können."
    ),
    answer: 17,
    options: [17, 13, 11, 16],
    fact: bi(
      "SDG 17 is about partnerships. The content is climate adaptation, but what makes it work here is cooperation across borders.",
      "SDG 17 steht für Partnerschaften. Inhaltlich geht es um Klimaanpassung, aber was es hier möglich macht, ist Zusammenarbeit über Grenzen."
    ),
  },
];

const chainGameRounds = [
  {
    id: "heavy-rain",
    title: bi("Heavy-rain chain", "Starkregen-Kette"),
    start: bi("Sealed surface", "Versiegelte Fläche"),
    complete: bi(
      "Correct: sealed surfaces do not create sponge cities. They are the problem: less infiltration, more surface runoff and higher local flood risk. Unsealing, planted areas, rain gardens and storage interrupt that chain.",
      "Richtig: Versiegelte Flächen erzeugen keine Schwammstadt. Sie sind das Problem: weniger Versickerung, mehr oberflächlicher Abfluss und ein höheres lokales Überflutungsrisiko. Entsiegelung, Grünflächen, Regengärten und Speicher unterbrechen diese Kette."
    ),
    links: [
      { id: "infiltration", text: bi("Less rain infiltrates", "Regen versickert schlechter") },
      { id: "runoff", text: bi("More water runs off across the surface", "Mehr Wasser fließt oberflächlich ab") },
      { id: "flood", text: bi("Local flood risk rises", "Lokales Überflutungsrisiko steigt") },
      { id: "sponge", text: bi("Unsealing and storage interrupt the chain", "Entsiegelung und Speicher unterbrechen die Kette") },
    ],
    decoys: [
      { id: "shade", text: bi("Shade lowers heat stress", "Schatten senkt Hitzestress") },
      { id: "pipes", text: bi("Bigger sewer pipes alone solve everything", "Größere Abwasserrohre allein lösen alles") },
      { id: "emissions", text: bi("Emissions cuts slow warming", "Emissionssenkung verlangsamt Erwärmung") },
      { id: "clean-water", text: bi("Clean water improves reef recovery", "Sauberes Wasser verbessert Riff-Erholung") },
      { id: "reuse", text: bi("Repair and reuse reduce waste", "Reparatur und Wiederverwendung senken Müll") },
    ],
  },
  {
    id: "reef-heat",
    title: bi("Reef heat chain", "Riff-Hitze-Kette"),
    start: bi("Marine heatwave", "Marine Hitzewelle"),
    complete: bi(
      "Exactly: heat stress can trigger bleaching, local pressure lowers recovery and climate action stays necessary.",
      "Genau: Hitzestress kann Bleiche auslösen, lokaler Druck senkt Erholung und Klimaschutz bleibt nötig."
    ),
    links: [
      { id: "stress", text: bi("Corals become stressed", "Korallen geraten unter Stress") },
      { id: "bleach", text: bi("Algae loss causes bleaching", "Algenverlust löst Bleiche aus") },
      { id: "starve", text: bi("Without their algae, corals run out of energy", "Ohne ihre Algen fehlt Korallen Energie") },
      { id: "care", text: bi("Clean water and climate action improve chances", "Sauberes Wasser und Klimaschutz verbessern Chancen") },
    ],
    decoys: [
      { id: "warm-good", text: bi("Warmer water always speeds up coral growth", "Wärmeres Wasser beschleunigt Korallenwachstum immer") },
      { id: "soil", text: bi("Open soil stores rainwater", "Offener Boden speichert Regenwasser") },
      { id: "routes", text: bi("Safe routes improve fair access", "Sichere Wege verbessern fairen Zugang") },
      { id: "consumption", text: bi("Responsible consumption reduces waste", "Nachhaltiger Konsum senkt Müll") },
      { id: "seagrass", text: bi("Seagrass slows waves near coasts", "Seegras bremst Wellen an Küsten") },
    ],
  },
  {
    id: "consumption",
    title: bi("Consumption chain", "Konsum-Kette"),
    start: bi("Cheap trend purchase", "Billiger Trend-Kauf"),
    complete: bi(
      "Right: every purchase starts a chain. Repair, second-hand and sharing interrupt it before waste and emissions pile up - a low price alone says nothing about the real impact.",
      "Richtig: Jeder Kauf startet eine Kette. Reparatur, Secondhand und Teilen unterbrechen sie, bevor Müll und Emissionen entstehen - ein niedriger Preis allein sagt nichts über die echten Folgen."
    ),
    links: [
      { id: "demand", text: bi("High demand drives new production", "Hohe Nachfrage treibt Neuproduktion an") },
      { id: "resources", text: bi("Production uses water, energy and land", "Produktion verbraucht Wasser, Energie und Fläche") },
      { id: "waste", text: bi("Short use creates waste and emissions", "Kurze Nutzung erzeugt Müll und Emissionen") },
      { id: "circular", text: bi("Repair, second-hand and sharing interrupt the chain", "Reparatur, Secondhand und Teilen unterbrechen die Kette") },
    ],
    decoys: [
      { id: "price", text: bi("A low price means a low impact", "Ein niedriger Preis bedeutet geringe Folgen") },
      { id: "recycling-only", text: bi("Recycling alone makes any amount harmless", "Recycling allein macht jede Menge unschädlich") },
      { id: "label", text: bi("A green label alone proves sustainability", "Ein grünes Label allein beweist Nachhaltigkeit") },
      { id: "shade-street", text: bi("Shade trees cool shopping streets", "Schattenbäume kühlen Einkaufsstraßen") },
    ],
  },
];

const cityBuilderControls = [
  {
    id: "shade",
    title: bi("Shade trees", "Schattenbäume"),
    text: bi("Cools hot places and creates small habitats.", "Kühlt heiße Orte und schafft kleine Lebensräume."),
    effects: { cooling: 9, flood: 2, habitat: 6 },
  },
  {
    id: "soil",
    title: bi("Open soil", "Offener Boden"),
    text: bi("Lets rain soak in and supports plants.", "Lässt Regen versickern und unterstützt Pflanzen."),
    effects: { cooling: 5, flood: 8, habitat: 7 },
  },
  {
    id: "water",
    title: bi("Rain storage", "Regenspeicher"),
    text: bi("Stores water for dry periods and heavy rain.", "Speichert Wasser für Trockenphasen und Starkregen."),
    effects: { cooling: 5, flood: 9, habitat: 3 },
  },
  {
    id: "routes",
    title: bi("Safe routes", "Sichere Wege"),
    text: bi("Makes the redesign useful for more people.", "Macht die Umgestaltung für mehr Menschen nutzbar."),
    effects: { cooling: 2, flood: 2, habitat: 3, fairness: 9 },
  },
];

const reefActionCards = [
  {
    id: "clean-water",
    title: bi("Clean water rules", "Sauberes Wasser"),
    text: bi("Reduce pollution so stressed corals can recover better.", "Verringert Verschmutzung, damit gestresste Korallen sich besser erholen."),
    cost: 3,
    recovery: 18,
    pressure: 18,
    community: 8,
  },
  {
    id: "reef-zones",
    title: bi("Protection zones", "Schutzzonen"),
    text: bi("Limit physical damage in sensitive reef areas.", "Begrenzt direkte Schäden in empfindlichen Riffbereichen."),
    cost: 3,
    recovery: 14,
    pressure: 16,
    community: 6,
  },
  {
    id: "heat-alert",
    title: bi("Heat alert", "Hitze-Alarm"),
    text: bi("Warns people early when ocean heat becomes dangerous.", "Warnt früh, wenn Meereshitze gefährlich wird."),
    cost: 2,
    recovery: 10,
    pressure: 8,
    community: 14,
  },
  {
    id: "climate-cut",
    title: bi("Emission cuts", "Emissionen senken"),
    text: bi("Reduces the long-term heat risk for reefs.", "Senkt langfristig das Hitzrisiko für Riffe."),
    cost: 4,
    recovery: 20,
    pressure: 20,
    community: 10,
  },
  {
    id: "local-guides",
    title: bi("Local guides", "Lokale Guides"),
    text: bi("Uses local knowledge and creates fair participation.", "Nutzt lokales Wissen und schafft faire Beteiligung."),
    cost: 2,
    recovery: 8,
    pressure: 6,
    community: 18,
  },
];

const climateCouncilControls = [
  {
    id: "energy",
    title: bi("Clean energy", "Saubere Energie"),
    text: bi("Replace fossil energy and improve efficiency.", "Fossile Energie ersetzen und Effizienz steigern."),
    effects: { climate: 10, nature: 2, justice: 4, resilience: 3 },
  },
  {
    id: "mobility",
    title: bi("Fair mobility", "Faire Mobilität"),
    text: bi("Make public transport, walking and cycling accessible.", "ÖPNV, Fuß- und Radverkehr zugänglich machen."),
    effects: { climate: 8, nature: 3, justice: 7, resilience: 3 },
  },
  {
    id: "food",
    title: bi("Food transition", "Ernährungswende"),
    text: bi("Reduce waste and support climate-friendly food systems.", "Verschwendung senken und klimafreundliche Ernährungssysteme stärken."),
    effects: { climate: 6, nature: 7, justice: 4, resilience: 4 },
  },
  {
    id: "nature",
    title: bi("Restore nature", "Natur wiederherstellen"),
    text: bi("Protect soils, forests, wetlands and coastal habitats.", "Böden, Wälder, Moore und Küstenlebensräume schützen."),
    effects: { climate: 5, nature: 10, justice: 3, resilience: 8 },
  },
  {
    id: "fairness",
    title: bi("Climate fairness", "Klimagerechtigkeit"),
    text: bi("Fund participation, protection and affordable access.", "Beteiligung, Schutz und bezahlbaren Zugang finanzieren."),
    effects: { climate: 3, nature: 3, justice: 10, resilience: 8 },
  },
];
const CLIMATE_CONTROL_COLORS = ["#f2c14e", "#2a7f9e", "#e56b5d", "#8fbd68", "#c971b8"];

const CITY_GAME_TARGET = 69;
const CITY_METRIC_FLOOR = 60;
const CITY_BUDGET = 12;
const REEF_GAME_TARGET = 65;
const REEF_METRIC_FLOOR = 58;
const REEF_BUDGET = 9;
const CLIMATE_GAME_TARGET = 94;
const CLIMATE_METRIC_FLOOR = 90;
const CLIMATE_BUDGET = 14;

const reefSynergies = [
  {
    pair: ["clean-water", "reef-zones"],
    metric: "recovery",
    bonus: 8,
    text: bi(
      "Clean water + protection zones: +8 recovery",
      "Sauberes Wasser + Schutzzonen: +8 Erholung"
    ),
  },
  {
    pair: ["heat-alert", "local-guides"],
    metric: "community",
    bonus: 8,
    text: bi(
      "Heat alert + local guides: +8 community support",
      "Hitze-Alarm + lokale Guides: +8 Unterstützung"
    ),
  },
  {
    pair: ["climate-cut", "heat-alert"],
    metric: "pressure",
    bonus: 8,
    text: bi(
      "Emission cuts + heat alert: +8 pressure reduction",
      "Emissionen senken + Hitze-Alarm: +8 Drucksenkung"
    ),
  },
];

const learningGameTips = {
  "sdg-sprint": {
    title: bi("Strategy tip", "Strategie-Tipp"),
    initial: bi(
      "1. Name the main change. 2. Ask who or what benefits. 3. Choose the goal that describes this result—not merely a related topic.",
      "1. Benenne die zentrale Veränderung. 2. Frage, wer oder was davon profitiert. 3. Wähle das Ziel, das dieses Ergebnis beschreibt – nicht nur ein verwandtes Thema."
    ),
    retry: bi(
      "Try this: underline the action, then the intended result. Ignore side effects for one moment—the strongest goal usually names the intended result.",
      "Probiere das: Markiere zuerst die Maßnahme, dann das gewünschte Ergebnis. Blende Nebenwirkungen kurz aus – das stärkste Ziel benennt meist das Ergebnis."
    ),
  },
  "chain-builder": {
    title: bi("Strategy tip", "Strategie-Tipp"),
    initial: bi(
      "1. Read the starting event. 2. Find its immediate consequence. 3. Continue one link at a time; the solution belongs at the end.",
      "1. Lies das Startereignis. 2. Finde die direkte Folge. 3. Gehe Verbindung für Verbindung weiter; die Lösung gehört ans Ende."
    ),
    progress: bi(
      "Look only at the last revealed card. Complete the sentence “Because this happens, next …” and choose the option that fits directly.",
      "Betrachte nur die zuletzt aufgedeckte Karte. Ergänze den Satz „Weil das passiert, folgt als Nächstes …“ und wähle die direkt passende Option."
    ),
    retry: bi(
      "The choice may be true but too early or too late. Compare just two cards: does your choice follow directly from the card on its left?",
      "Die Wahl kann richtig, aber zu früh oder zu spät sein. Vergleiche nur zwei Karten: Folgt deine Wahl direkt aus der Karte links daneben?"
    ),
  },
  "city-builder": {
    title: bi("Planning tip", "Planungs-Tipp"),
    initial: bi(
      "1. Spend the whole budget. 2. Watch all four meters. 3. Move only one point before each test so you can see which trade-off it creates.",
      "1. Nutze das ganze Budget. 2. Beobachte alle vier Anzeigen. 3. Verschiebe vor jedem Test nur einen Punkt, damit du den entstehenden Zielkonflikt erkennst."
    ),
    budget: bi(
      "Your next test needs the full budget. Add one remaining point, check which meter rises, then place the next point where the lowest meter benefits.",
      "Für den nächsten Test brauchst du das volle Budget. Setze einen übrigen Punkt, prüfe welche Anzeige steigt, und setze den nächsten dort ein, wo der niedrigste Wert profitiert."
    ),
    weak: bi(
      "Focus on “{area}”. Find the control whose description supports it, move one point there, and confirm that no other meter drops too far.",
      "Konzentriere dich auf „{area}“. Finde die Maßnahme, deren Beschreibung dazu passt, verschiebe einen Punkt dorthin und prüfe, dass keine andere Anzeige zu weit fällt."
    ),
    balance: bi(
      "The average is close, but one trade-off is still too sharp. Swap a single point between two controls, then compare all four meters again.",
      "Der Durchschnitt ist nah dran, aber ein Zielkonflikt ist noch zu stark. Tausche einen einzelnen Punkt zwischen zwei Maßnahmen und vergleiche danach wieder alle vier Anzeigen."
    ),
  },
  "reef-rescue": {
    title: bi("Planning tip", "Planungs-Tipp"),
    initial: bi(
      "1. Cover coral recovery, pressure and community. 2. Compare each action with its cost. 3. Reserve enough budget to test a useful pair.",
      "1. Decke Erholung, Drucksenkung und Beteiligung ab. 2. Vergleiche jede Maßnahme mit ihren Kosten. 3. Halte genug Budget für ein sinnvolles Maßnahmenpaar frei."
    ),
    synergy: bi(
      "The decisive effect comes from a pair. Combine two actions that clearly support each other—for example protection plus prevention, or warning plus local response.",
      "Der entscheidende Effekt entsteht durch ein Paar. Verbinde zwei Maßnahmen, die sich klar ergänzen – etwa Schutz plus Vorsorge oder Warnung plus lokale Reaktion."
    ),
    weak: bi(
      "Use the weakest meter as the next clue: “{area}”. Keep one useful pair active while trading out an action that contributes less to that goal.",
      "Nutze die schwächste Anzeige als nächsten Hinweis: „{area}“. Lass ein hilfreiches Paar aktiv und tausche eine Maßnahme aus, die weniger zu diesem Ziel beiträgt."
    ),
    balance: bi(
      "The plan is close. Compare the three meters before adding anything: the best next move improves the lowest value without losing the combination effect.",
      "Der Plan ist nah dran. Vergleiche die drei Anzeigen, bevor du etwas ergänzt: Der beste nächste Schritt verbessert den niedrigsten Wert, ohne den Kombinationseffekt zu verlieren."
    ),
  },
  "climate-council": {
    title: bi("Council tip", "Klimarat-Tipp"),
    initial: bi(
      "1. Keep every field active. 2. Find the lowest of the four meters. 3. Add one token to an action that names this outcome, then test again.",
      "1. Halte jeden Bereich aktiv. 2. Finde die niedrigste der vier Anzeigen. 3. Gib einer passenden Maßnahme genau einen Token und prüfe erneut."
    ),
    budget: bi(
      "Use the remaining tokens to strengthen the weakest outcome, but keep every field represented. The final package rewards balance more than a single peak.",
      "Nutze die übrigen Token, um das schwächste Ergebnis zu stärken, aber halte jeden Bereich vertreten. Das finale Paket belohnt Balance stärker als einen einzelnen Spitzenwert."
    ),
    category: bi(
      "One field is empty. Restore it first, then compare the four meters again; every field is needed for a fair climate package.",
      "Ein Bereich ist leer. Fülle ihn zuerst wieder und vergleiche dann erneut die vier Anzeigen; jeder Bereich wird für ein faires Klimapaket gebraucht."
    ),
    weak: bi(
      "Your next clue is “{area}”. Read which action texts mention that outcome and move only one token before testing again.",
      "Dein nächster Hinweis lautet „{area}“. Lies nach, welche Maßnahmen dieses Ziel nennen, und verschiebe vor dem nächsten Test nur einen Token."
    ),
    balance: bi(
      "The package is nearly there, so avoid a full reset. Rebalance one token from the strongest area toward the weakest and test again.",
      "Das Paket ist fast geschafft – setze es nicht komplett zurück. Verschiebe einen Token vom stärksten zum schwächsten Bereich und prüfe erneut."
    ),
  },
};
const LEARNING_3D_MODULE_URL = "./assets/learning-3d.js?v=20260719-4";

const quizQuestions = [
  {
    question: bi("What does coral bleaching mean?", "Was bedeutet Korallenbleiche?"),
    options: bi(["The coral has always died","The coral has expelled its symbiotic algae under stress","The reef is covered by white sand"], ["Die Koralle ist immer bereits gestorben","Die Koralle hat unter Stress ihre symbiotischen Algen abgestoßen","Das Riff ist von weißem Sand bedeckt"]),
    correct: 1,
    explanation: bi("Bleached corals are severely stressed but not automatically dead. They may recover if conditions improve quickly.", "Gebleichte Korallen sind stark gestresst, aber nicht automatisch tot. Verbessern sich die Bedingungen schnell, können sie sich erholen."),
  },
  {
    question: bi("Where can seagrass meadows store carbon for a long time?", "Wo können Seegraswiesen Kohlenstoff langfristig speichern?"),
    options: bi(["Mainly in the sediment","Only in fish","Only at the water surface"], ["Vor allem im Sediment","Nur in Fischen","Nur an der Wasseroberfläche"]),
    correct: 0,
    explanation: bi("A large part of the long-term carbon storage associated with seagrass lies in the sediment beneath the plants.", "Ein großer Teil der langfristigen Kohlenstoffspeicherung von Seegras liegt im Sediment unter den Pflanzen."),
  },
  {
    question: bi("What is the basic idea of a sponge city?", "Was ist die Grundidee einer Schwammstadt?"),
    options: bi(["Drain all rainwater immediately","Store and reuse rainwater within the city","Build only taller buildings"], ["Regenwasser sofort vollständig ableiten","Regenwasser in der Stadt speichern und wieder nutzen","Nur höhere Gebäude bauen"]),
    correct: 1,
    explanation: bi("Sponge cities retain rainwater so it can infiltrate, evaporate or be reused instead of disappearing immediately into drains.", "Schwammstädte halten Regenwasser zurück, damit es versickern, verdunsten oder wiederverwendet werden kann."),
  },
  {
    question: bi("Which SDG is directly about climate action?", "Welches SDG steht direkt für Klimaschutz?"),
    options: bi(["SDG 4","SDG 13","SDG 16"], ["SDG 4","SDG 13","SDG 16"]),
    correct: 1,
    explanation: bi("SDG 13 is Climate Action. It connects emissions cuts with preparation for climate impacts.", "SDG 13 steht für Maßnahmen zum Klimaschutz. Es verbindet Emissionsminderung mit Vorbereitung auf Klimafolgen."),
  },
  {
    question: bi("Which two SDGs focus on ecosystems in water and on land?", "Welche zwei SDGs schauen besonders auf Ökosysteme im Wasser und an Land?"),
    options: bi(["SDG 14 and SDG 15","SDG 1 and SDG 8","SDG 5 and SDG 9"], ["SDG 14 und SDG 15","SDG 1 und SDG 8","SDG 5 und SDG 9"]),
    correct: 0,
    explanation: bi("SDG 14 focuses on life below water. SDG 15 focuses on life on land.", "SDG 14 behandelt Leben unter Wasser. SDG 15 behandelt Leben an Land."),
  },
  {
    question: bi("Why is SDG 17 important for climate and nature protection?", "Warum ist SDG 17 für Klima- und Naturschutz wichtig?"),
    options: bi(["Because solutions often need partnerships","Because one person can solve every goal alone","Because it replaces all other goals"], ["Weil Lösungen oft Partnerschaften brauchen","Weil eine Person alle Ziele allein lösen kann","Weil es alle anderen Ziele ersetzt"]),
    correct: 0,
    explanation: bi("Many environmental solutions need shared knowledge, funding, local participation and fair responsibility.", "Viele Umweltlösungen brauchen geteiltes Wissen, Finanzierung, lokale Beteiligung und faire Verantwortung."),
  },
  {
    question: bi("How can seagrass meadows help protect coastlines?", "Wie können Seegraswiesen Küsten schützen?"),
    options: bi(["By slowing waves and stabilizing sediment","By increasing wave height","By removing all salt from seawater"], ["Indem sie Wellen bremsen und Sediment stabilisieren","Indem sie die Wellenhöhe vergrößern","Indem sie dem Meerwasser sämtliches Salz entziehen"]),
    correct: 0,
    explanation: bi("Dense seagrass leaves slow water movement, while their roots and rhizomes help stabilize the seabed.", "Dichte Seegrasblätter bremsen die Wasserbewegung, während Wurzeln und Rhizome den Meeresboden stabilisieren."),
  },
  {
    question: bi("What is the main global driver of mass coral bleaching?", "Was ist der wichtigste globale Auslöser für großflächige Korallenbleiche?"),
    options: bi(["Colder winter nights","Prolonged heat stress in the ocean","Normal tidal changes"], ["Kältere Winternächte","Anhaltender Hitzestress im Meer","Normale Gezeitenwechsel"]),
    correct: 1,
    explanation: bi("Unusually warm water and marine heatwaves can overwhelm corals and trigger bleaching across large reef areas.", "Ungewöhnlich warmes Wasser und marine Hitzewellen können Korallen überfordern und großflächige Bleichen auslösen."),
  },
  {
    question: bi("Why do green spaces help cool a sponge city?", "Warum helfen Grünflächen dabei, eine Schwammstadt zu kühlen?"),
    options: bi(["They create shade and support evaporation","They seal the ground more strongly","They prevent all air movement"], ["Sie spenden Schatten und fördern Verdunstung","Sie versiegeln den Boden stärker","Sie verhindern jede Luftbewegung"]),
    correct: 0,
    explanation: bi("Trees, planted areas and stored water reduce heat through shade and evapotranspiration.", "Bäume, bepflanzte Flächen und gespeichertes Wasser mindern Hitze durch Schatten und Verdunstung."),
  },
  {
    question: bi("Can local reef protection replace global climate action?", "Kann lokaler Riffschutz globalen Klimaschutz ersetzen?"),
    options: bi(["Yes, completely","Only when reefs are very small","No, but it can improve local resilience"], ["Ja, vollständig","Nur wenn Riffe sehr klein sind","Nein, aber er kann die lokale Widerstandskraft verbessern"]),
    correct: 2,
    explanation: bi("Reducing pollution and physical damage can help reefs cope, but limiting ocean warming still requires global emissions cuts.", "Weniger Verschmutzung und Schäden können Riffen helfen, doch die Meereserwärmung lässt sich nur durch globale Emissionsminderung begrenzen."),
  },
  {
    question: bi("Why are heavily sealed city surfaces a problem during heavy rain?", "Warum sind stark versiegelte Stadtflächen bei Starkregen problematisch?"),
    options: bi(["Water cannot infiltrate easily and runs off quickly","They absorb every drop immediately","They turn rainwater into drinking water"], ["Wasser kann schlecht versickern und fließt schnell ab","Sie nehmen jeden Tropfen sofort auf","Sie verwandeln Regenwasser in Trinkwasser"]),
    correct: 0,
    explanation: bi("Concrete and asphalt limit infiltration, increasing rapid runoff and pressure on drainage systems.", "Beton und Asphalt begrenzen die Versickerung, wodurch Wasser schneller abfließt und die Kanalisation stärker belastet wird."),
  },
  {
    question: bi("Which statement best describes blue carbon?", "Welche Aussage beschreibt Blue Carbon am besten?"),
    options: bi(["Carbon stored by coastal and marine ecosystems","Carbon found only in deep-sea animals","Carbon used to color seawater blue"], ["Kohlenstoff, den Küsten- und Meeresökosysteme speichern","Kohlenstoff, der nur in Tiefseetieren vorkommt","Kohlenstoff, der Meerwasser blau färbt"]),
    correct: 0,
    explanation: bi("Blue carbon refers to carbon captured and stored by coastal ecosystems such as seagrass meadows, salt marshes and mangroves.", "Blue Carbon bezeichnet Kohlenstoff, den Küstenökosysteme wie Seegraswiesen, Salzwiesen und Mangroven aufnehmen und speichern."),
  }
];

const photoSources = [
  {
    id: "sponge-city-rain-garden",
    src: "assets/photos/sponge-city-rain-garden-hd.jpg",
    credit: "Jeremy Jeziorski / Oregon Convention Center · CC BY 2.0 · resized",
    license: "CC BY 2.0 · web-optimized",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rain_Garden_(33234470895).jpg",
    label: bi("Urban rain garden that retains and slowly releases stormwater", "Städtischer Regengarten, der Niederschlagswasser zurückhält"),
  },
  {
    id: "seagrass-meadow",
    src: "assets/photos/seagrass-meadow-zostera-hd.jpg",
    credit: "Olivier Dugornay / Ifremer · CC BY 4.0 · resized",
    license: "CC BY 4.0 · web-optimized",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbier_de_zost%C3%A8res_(Zostera_marina)_(Ifremer_00560-67187_-_21863).jpg",
    label: bi("Common eelgrass meadow beneath shallow coastal water", "Wiese aus Großem Seegras in flachem Küstenwasser"),
  },
  {
    id: "coral-bleaching-2023",
    src: "assets/photos/coral-bleaching-florida-2023-hd.jpg",
    credit: "Dan Eidsmoe / Symbiosis · CC BY 2.0 · resized",
    license: "CC BY 2.0 · web-optimized",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%22The_Great_Coral_Bleaching_of_2023%22_-_53088200178.jpg",
    label: bi("Heat-stressed corals during the 2023 bleaching event in Florida", "Hitzegestresste Korallen während der Bleiche 2023 in Florida"),
  },
  {
    id: "coral",
    src: "assets/photos/coral-reef-bleaching-hd.webp",
    credit: "Jay Galvin / Wikimedia Commons",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Coral_Reef_Bleaching.jpg",
    label: bi("Coral bleaching", "Korallenbleiche"),
  },
  {
    id: "marine-debris",
    src: "assets/photos/ocean-plastic-hd.jpg",
    credit: "Kevin Krejci / Wikimedia Commons",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plastic_Ocean_(4408273247).jpg",
    label: bi("Marine debris", "Meeresmüll"),
  },
  {
    id: "mangrove",
    src: "assets/photos/mangrove-forest-hd.jpg",
    credit: "Emonjnu / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_mighty_Mangrove_forest.jpg",
    label: bi("Mangrove forest", "Mangrovenwald"),
  },
  {
    id: "glacier",
    src: "assets/photos/aletsch-glacier-hd.jpg",
    credit: "Gzzz / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Glacier_d%27Aletsch_panorama.jpg",
    label: bi("Glacier change", "Gletscherwandel"),
  },
  {
    id: "solar",
    src: "assets/photos/offshore-wind-hd.jpg",
    credit: "U.S. Department of Energy / Wikimedia Commons",
    license: "Public Domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Block_Island_Wind_Farm.jpg",
    label: bi("Offshore wind energy", "Offshore-Windenergie"),
  }
];

const API_BASES = ["backend.php?route=", "api"];
const SITE_ORIGIN = "https://cyri.online";
const routePaths = {
  en: {
    home: "/en/",
    learn: "/en/learn",
    research: "/en/assistant",
    articles: "/en/articles",
    about: "/en/about",
    publish: "/en/publish",
    imprint: "/en/imprint",
    privacy: "/en/privacy",
  },
  de: {
    home: "/de/",
    learn: "/de/lernen",
    research: "/de/assistent",
    articles: "/de/artikel",
    about: "/de/ueber-uns",
    publish: "/de/publizieren",
    imprint: "/de/impressum",
    privacy: "/de/datenschutz",
  },
};
const publicRoutePages = Object.keys(routePaths.en);

function routeLanguageFromPath(pathname = window.location.pathname) {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "";
}

function articleRoutePath(articleId, language = state?.lang || "en") {
  return `${routePaths[language].articles}/${encodeURIComponent(articleId)}`;
}

function pageRoutePath(page, language = state?.lang || "en", anchor = null) {
  if (page === "mission") return `${routePaths[language].home}#mission`;
  const base = routePaths[language][page] || routePaths[language].home;
  return anchor ? `${base}#${encodeURIComponent(anchor)}` : base;
}

function routeAbsoluteUrl(page, language = state?.lang || "en", articleId = null) {
  const path = articleId
    ? articleRoutePath(articleId, language)
    : pageRoutePath(page, language);
  return new URL(path, SITE_ORIGIN).toString();
}

function preserveCurrentSearch(path) {
  if (!window.location.search) return path;
  const [pathname, hash = ""] = path.split("#");
  return `${pathname}${window.location.search}${hash ? `#${hash}` : ""}`;
}

const PUBLISH_SESSION_KEY = "cyri-publish-token";
const HOMEPAGE_ARTICLE_COUNT = 5;
const HOMEPAGE_ARTICLE_ROTATION_MS = 12 * 1000;
const FEATURED_ARTICLE_COUNT = 2;
const SITE_FEATURES = {
  publishActionFunding: true,
};
let articleModalReturnFocus = null;
let articleModalReturnUrl = null;
let homeSdgModalReturnFocus = null;
let homepageArticleRotationTimer = null;

const content = {
  en: {
    accessibility: {
      skip: "Skip to content",
      menu: "Open navigation menu",
      close: "Close",
      learnNeonOn: "Turn on dark green neon light",
      learnNeonOff: "Turn off dark green neon light",
    },
    seo: {
      title: "CYRI | Climate & Environmental Education for Teens",
      description:
        "CYRI is a youth-led digital info platform for climate, nature and environmental protection.",
      pages: {
        home: {
          title: "CYRI | Environmental Education & 17 SDGs for Young People",
          description:
            "CYRI offers youth-led environmental education on climate, nature and all 17 Sustainable Development Goals through sourced articles and interactive learning.",
        },
        learn: {
          title: "Environmental & Climate Learning for Teens | CYRI",
          description:
            "Free environmental and climate learning for ages 15-19, teachers and classrooms with interactive challenges linked to all 17 Sustainable Development Goals.",
        },
        articles: {
          title: "Climate, Nature & Sustainability Articles | CYRI",
          description:
            "Source-based environmental articles for young people about climate action, biodiversity, oceans, renewable energy, sustainable cities and the 17 SDGs.",
        },
        research: {
          title: "CYRI Assistant | CYRI",
          description:
            "Ask questions and receive AI-assisted answers based only on published CYRI environmental articles.",
        },
        about: {
          title: "About CYRI | Youth-led Environmental Education",
          description:
            "Read about CYRI, an independent youth-led environmental info platform currently in development in Germany.",
        },
        publish: {
          title: "Publish | CYRI",
          description:
            "Protected publishing backend for CYRI articles and updates.",
        },
        imprint: {
          title: "Imprint | CYRI",
          description:
            "Legal notice and responsible contact information for CYRI.",
        },
        privacy: {
          title: "Privacy | CYRI",
          description:
            "Privacy notice for the CYRI website backend and publishing area.",
        },
      },
    },
    nav: {
      home: "Home",
      mission: "Mission",
      learn: "Learn",
      articles: "Articles",
      research: "Ask CYRI",
      learnOverview: "Overview",
      learnMission: "Mission Lab",
      learnSdg: "17 goals",
      learnTopics: "Topics",
      learnTools: "Info tools",
      learnMap: "World map",
      learnQuiz: "Quiz",
      learningArticles: "Info articles",
      about: "About",
      publish: "Publish",
    },
    audience: {
      gateEyebrow: "Choose your view",
      gateTitle: "How much detail do you want?",
      gateIntro:
        "Choose once so CYRI can show explanations and articles in the right level of detail. You can change this setting at any time.",
      children: "Short & clear",
      childrenDescription: "Shorter sentences, clear examples and compact articles.",
      adults: "More detail",
      adultsDescription: "Full explanations, terminology and complete articles.",
      switchLabel: "Info style",
      articleLabel: "Article version",
      childrenNote: "Clear and compact. The sources are the same as in the full article.",
      adultsNote: "Complete article with all details and terminology.",
      saved: "This choice is saved on this device.",
      childFallbackTitle: "The most important points",
      childFallbackIntro:
        "This shorter version selects the central ideas from the full article.",
      learning: {
        children: {
          title: "Environmental info you can click through.",
          intro:
            "Choose a mission, test choices and see what changes in nature, cities and communities.",
          journeyTitle: "Your discovery board.",
          journeyIntro:
            "Open a topic, read the short article and test facts in the quiz. Your choices stay on this device.",
          topicsTitle: "What would you like to discover?",
          quizTitle: "What did you discover?",
          quizIntro: "Choose a game or quiz and check the facts.",
        },
        adults: {
          title: "Environmental info you can explore.",
          intro:
            "Start with a mission, test models, compare choices and continue with source-based articles.",
          journeyTitle: "Choose your next move.",
          journeyIntro:
            "Explore a topic, open its article and complete the quiz. Your choices stay on this device.",
          topicsTitle: "What do you want to understand?",
          quizTitle: "What stayed with you?",
          quizIntro: "Choose how many questions you want to answer.",
        },
      },
    },
    hero: {
      eyebrow: "Youth-led environmental education",
      title: "Environmental education that connects all 17 goals.",
      subtitle:
        "CYRI combines environmental education with the 17 Sustainable Development Goals. Young people explore how climate, nature, justice and sustainable development belong together.",
      primaryCta: "Start exploring",
      secondaryCta: "Read articles",
      imageAlt: "Bleached coral reef",
    },
    learningIntro: {
      eyebrow: "Explore actively",
      title: "From reading to seeing connections.",
      intro:
        "Choose a topic, ask questions and connect reliable information with interactive environmental facts.",
      cta: "Explore CYRI info tools",
      paths: [
        {
          step: "01",
          title: "Explore",
          text: "Find a clear entry point into climate, nature and environmental topics.",
        },
        {
          step: "02",
          title: "Question",
          text: "Use the CYRI assistant to ask questions about published articles.",
        },
        {
          step: "03",
          title: "Check",
          text: "Check facts with short quizzes and explanations.",
        },
      ],
    },
    homeSdgs: {
      eyebrow: "Environmental education and Agenda 2030",
      title: "Environmental knowledge connects all 17 Sustainable Development Goals.",
      intro:
        "CYRI shows how environmental questions are connected with education, health, food, energy, cities, justice and international cooperation.",
      cta: "Explore the goals",
      educationBadge: "SDG 4 · Quality Education",
      educationTitle: "Environmental education builds knowledge for action.",
      educationText:
        "Clear information helps young people understand evidence, see connections and discuss fair solutions instead of treating environmental problems in isolation.",
      educationPoints: [
        "Understand reliable information",
        "Connect ecology and society",
        "Evaluate choices and solutions",
      ],
      allEyebrow: "The complete overview",
      allTitle: "All 17 goals belong together.",
      goalsAria: "All 17 Sustainable Development Goals",
      goalAria: "Open SDG {number}: {title}",
      openGoal: "Show goal",
      detailEyebrow: "Sustainable Development Goal {number}",
      detailWhy: "Environmental connection",
      detailQuestion: "Question to explore",
      officialLink: "View this goal at the United Nations",
      officialNote:
        "Official SDG icon © United Nations. CYRI's explanations are independent and are not endorsed by the United Nations.",
      logoAlt: "Official icon for SDG {number}: {title}",
      actionText:
        "In the learning section, you can test these connections through environmental challenges and the SDG Sprint.",
      actionCta: "Start environmental learning",
    },
    mission: {
      eyebrow: "Mission",
      title: "Our Mission",
      intro: "CYRI is an independent youth-led environmental education platform based in Germany.",
      paragraphOne:
        "Our goal is to make climate science, nature conservation, environmental policy and sustainability understandable for young people and the wider public.",
      paragraphTwo:
        "We create articles, visual explainers and social media formats based on credible, traceable sources. CYRI does not conduct original research.",
      focus: [
        {
          title: "Understandable knowledge",
          text: "We turn complex environmental topics into precise, accessible information.",
        },
        {
          title: "Interactive information",
          text: "Topic explorers, questions and quizzes help readers connect information actively.",
        },
        {
          title: "Youth perspectives",
          text: "Young people shape the topics, formats and language while sources remain transparent.",
        },
      ],
    },
    latest: {
      eyebrow: "New environmental info",
      title: "Articles in rotation",
      intro: "The selection changes automatically so every CYRI info article is featured in turn.",
      viewAll: "View all info articles",
      previous: "Previous article selection",
      next: "Next article selection",
      pause: "Pause rotation",
      play: "Continue rotation",
      status: "Rotation {current} of {total}",
    },
    learn: {
      topicsEyebrow: "Choose a topic",
      topicsTitle: "What do you want to understand?",
      topicsAria: "Environmental topics",
      journeyEyebrow: "Mission board",
      journeyTitle: "Choose your next move.",
      journeyIntro:
        "Explore a topic, open its info article and complete the quiz. Your choices stay on this device.",
      journeyProgress: "Overall progress",
      journeySaved: "Saved locally on this device",
      journeyExplored: "Topic explored",
      journeyArticle: "Info article opened",
      journeyQuiz: "Knowledge check completed",
      journeyNext: "Recommended next step",
      journeyExploreAction: "Explore {topic}",
      journeyReadAction: "Read {topic}",
      journeyQuizAction: "Start knowledge check",
      journeyMission: "Mission step",
      journeyMissionAction: "Build mission",
      journeyCompleteTitle: "Mission board completed.",
      journeyCompleteText:
        "You explored every topic, opened all three info articles, completed the quiz and saved a mission.",
      journeyReset: "Reset progress",
      journeyStatus: "{complete} of {total} steps",
      guidingQuestion: "Guiding question",
      concepts: "Key concepts",
      discoverHint: "Choose a concept to reveal the connection.",
      discoverEyebrow: "Aha moment",
      discoverProgress: "{complete} of {total} discovered",
      labEyebrow: "Cause & effect lab",
      openArticle: "Open info article",
      askAssistant: "Ask CYRI",
      toolsEyebrow: "Info tools",
      toolsTitle: "Understand, compare, explain.",
      toolsIntro:
        "Use short info tools to turn environmental topics into simple explanations, discussion questions and source-based mini formats.",
      toolsPrompt: "Info prompt",
      toolsExample: "Example output",
      toolsSteps: "Steps",
      missionEyebrow: "Mission control",
      missionTitle: "Build your own environmental mission.",
      missionIntro:
        "Choose a real environmental challenge, switch perspectives and timeframes, then get an info mission with models, experiments and action steps.",
      missionFocusLabel: "Choose challenge",
      missionRoleLabel: "Choose perspective",
      missionPaceLabel: "Choose time",
      missionModelTitle: "Live info model",
      missionImpactMap: "Impact cockpit",
      missionImpactScore: "Mission score",
      missionMeters: ["Facts", "Nature", "Community", "Action"],
      missionModelNote:
        "This info model turns your choices into a visible overview, not into measured live data.",
      missionKitTitle: "Field kit",
      missionPlanTitle: "Mission plan",
      missionEvidence: "Evidence to look for",
      missionExperiment: "Mini experiment",
      missionDiscussion: "Discussion question",
      missionShare: "Post idea",
      missionRoleAction: "Next move",
      missionDeliverable: "Result",
      missionOpenTopic: "Open topic",
      missionOpenArticle: "Read article",
      missionAskAssistant: "Ask CYRI",
      missionSave: "Save mission locally",
      missionSaved: "Mission saved locally on this device.",
      sdgEyebrow: "17 Sustainable Development Goals",
      sdgTitle: "Click through the goals behind environmental protection.",
      sdgIntro:
        "The SDGs show how climate, nature, water, cities, justice and partnerships belong together.",
      sdgAria: "Interactive overview of the 17 Sustainable Development Goals",
      sdgWhy: "Why it matters",
      sdgQuestion: "Question to think about",
      sdgConnections: "Connected CYRI map models",
      sdgNoConnection:
        "No map model yet. This goal still helps you compare resources, risks and fairness.",
      sdgMapButton: "Open map model",
      gameChoose: "Challenge path",
      gameMedalLabel: "Choose your medal",
      gameStart: "Start the puzzle",
      gameAutoNext: "Correct - the next round starts by itself.",
      gameFinishing: "Correct - finishing the puzzle.",
      sprintYourPick: "Your pick",
      sprintFits: "Fits here",
      sprintEffect: "What happens:",
      gameMedalNote: "Bronze takes about 5 minutes, silver about 15 and gold about 30.",
      councilSpeakingNote: "An exclamation mark shows who speaks up for the weakest of the four meters right now. Give that seat a token and watch where the mark moves next.",
      gameTimeLabel: "Choose time",
      gameTimeMinutes: "{count} min",
      gamePathProgress: "{complete} of {total} solved",
      gameLocked: "Solve the previous puzzle first",
      gameSolved: "Solved",
      gameUnlockNext: "Unlock next game",
      gameFinishPath: "Finish path",
      gamePathComplete: "Path complete",
      gameTryAgain: "Try again",
      gameImprovePlan: "Reach the visible target percentage to continue.",
      gameScore: "Score",
      gameRound: "Round {current} of {total}",
      gameCorrect: "Correct choice.",
      gameIncorrect: "Try a different link.",
      gameReset: "Reset game",
      gameNext: "Next round",
      gameComplete: "Completed",
      gameBudget: "Budget",
      gameRemaining: "{count} points left",
      gameSelected: "Selected",
      gameFullBudget: "Budget used",
      gameTokens: "Tokens",
      gameOptionalRemaining: "{count} optional tokens left",
      gameTargetAt: "Continue from {count}%",
      gameTargetReached: "Target reached. You can continue now.",
      gameTargetRemaining: "{count} percentage points to go.",
      gameHiddenGoal: "Hidden mission threshold",
      gameHiddenGoalIntro: "The exact solution stays hidden. Build a plan, test it and use the clue to improve your next attempt.",
      gameAttempts: "Checks: {count}",
      gameTestPlan: "Test plan",
      gameUseFullBudget: "The plan is not ambitious enough yet. Use the remaining {count} points.",
      gameKeepEveryCategory: "One field was reduced to zero. A robust package must keep every field active.",
      gameFindSynergy: "The individual actions are useful, but the decisive hidden synergy is still missing.",
      gameWeakestArea: "Almost there. Your weakest area is “{area}”. Rebalance the plan and test it again.",
      gameNeedsBalance: "The package is close, but its overall balance is not strong enough yet.",
      gameCongratulations: "Congratulations!",
      gameCongratulationsText: "You experimented successfully and cracked the mission.",
      gameMissionBrief: "Mission brief",
      gameClose: "Continue",
      gameLiveModel: "Live 3D model",
      cityModelLabel: "Interactive 3D sponge-city model. The scene responds to shade, soil, water and route tokens.",
      reefModelLabel: "Interactive 3D reef model. The scene responds to the selected protection actions.",
      climateModelLabel: "Interactive 3D climate council around a planetary table. Five people grow as tokens are allocated to their action areas.",
      gameInfoProblem: "Problem",
      gameInfoConnection: "Connection",
      gameInfoAction: "What helps",
      chainStart: "Start",
      chainNext: "Choose the next link",
      chainBuilt: "Your chain",
      chainMistakes: "{count} misses",
      chainBroken: "The chain broke after three misses. It restarts from the beginning - think before you pick.",
      gameRuleFloor: "Extra rule: no value below {count}%",
      reefSynergyTitle: "Combination effects",
      cityCooling: "Cooling",
      cityFlood: "Flood safety",
      cityHabitat: "Biodiversity",
      cityFairness: "Fair access",
      cityOutcomeStrong: "Strong plan: balanced, cooler and safer.",
      cityOutcomeMedium: "Good start. Add balance so one risk is not forgotten.",
      cityOutcomeWeak: "Still risky. Spread points across water, shade, soil and access.",
      reefRecovery: "Recovery chance",
      reefPressure: "Pressure reduced",
      reefCommunity: "Community support",
      reefOutcomeStrong: "Strong rescue plan: local care and climate action work together.",
      reefOutcomeMedium: "Useful plan. Add one missing action if the budget allows it.",
      reefOutcomeWeak: "Too little protection yet. Choose actions that lower stress.",
      gameModelNote: "Illustrative learning model: the scores show relationships, not measured forecasts or live data.",
      decrease: "decrease points",
      increase: "increase points",
      finalBudget: "Council budget",
      finalClimate: "Emission cuts",
      finalNature: "Nature protection",
      finalJustice: "Fairness",
      finalResilience: "Resilience",
      finalOutcomeStrong: "The council package has reached the target and can move forward.",
      finalOutcomeHint: "Reach 66% to move forward. Remaining tokens are optional.",
      profileTitle: "Your game progress",
      gamesSolved: "games solved",
      badges: "badges",
      localOnly: "Progress, badges and results stay in this browser and are not published.",
      certificateTitle: "CYRI Climate Certificate unlocked",
      certificateTierTitle: "CYRI {tier} Certificate unlocked",
      certificateTierIssuedTitle: "{tier} Certificate issued",
      certificateIssuedList: "Issued certificates",
      certificateCollection: "Three certificate levels",
      certificateLocked: "Not earned yet",
      certificateEarned: "Earned",
      certificateCreated: "Created",
      certificateText: "Enter your name to create the certificate for this completed path.",
      certificateBottomText: "Your completion certificate is ready below the games.",
      certificateGoTo: "Enter name for certificate",
      certificateName: "Name on the certificate",
      certificateNameRequired: "Please enter a name for the certificate.",
      certificateDownload: "Create certificate as PNG",
      certificateOnce: "Each tier (Bronze 5 min, Silver 15 min, Gold 30 min) can issue one certificate on this device.",
      certificateIssuedTitle: "Certificate issued",
      certificateIssuedText: "This tier already has its certificate. Complete a longer path to earn the next tier.",
      certificateId: "Certificate ID",
      resetProgress: "Reset all game progress",
      resetConfirm: "Reset all game progress, badges, results and the certificate status on this device?",
      resetNote: "Starts a new run and removes the locally stored game results on this device.",
      mapEyebrow: "Global connections",
      mapTitle: "Click through the world map and test models.",
      mapIntro:
        "Choose a place, compare model scenarios and explore how climate, water, biodiversity and justice connect Germany with regions of the Global South.",
      mapAria: "Interactive world map with global environmental hotspots",
      mapChallenge: "Challenge",
      mapConnection: "Global connection",
      mapAction: "What to check",
      mapOpenModel: "Click a place and test a model.",
      modelChoose: "Choose a model scenario",
      modelOutcome: "Model result",
      modelNote:
        "These info simulations show relationships, not measured live data.",
      actionEyebrow: "Take part",
      actionTitle: "From knowledge to action.",
      actionIntro:
        "CYRI turns environmental information into small, realistic next steps for school, youth groups and social media.",
      pollTitle: "What should CYRI build next?",
      pollIntro: "Your choice is saved only on this device.",
      pollSaved: "Saved as your info priority.",
      formatsEyebrow: "Formats",
      formatsTitle: "Knowledge for different contexts.",
      formatsIntro:
        "The same topic can be explored in depth, understood visually or prepared for social media.",
      formats: [
        {
          status: "Available now",
          title: "Info articles",
          text: "Source-based long-form explanations with clear structure and further reading.",
        },
        {
          status: "In development",
          title: "Infographics",
          text: "Visual summaries that make processes, comparisons and key figures easier to grasp.",
        },
        {
          status: "On our channels",
          title: "Social explainers",
          text: "Compact educational posts for Instagram.",
        },
      ],
      quizEyebrow: "Knowledge check",
      quizTitle: "What stayed with you?",
      quizIntro: "Choose how many questions you want to answer.",
      quizLengthLabel: "Quiz length",
      quizLengths: [
        { value: 3, title: "Quick", text: "3 questions" },
        { value: 6, title: "Focused", text: "6 questions" },
        { value: 9, title: "Deep dive", text: "9 questions" },
        { value: 12, title: "SDG run", text: "12 questions" },
      ],
      questionProgress: "Question {current} of {total}",
      correct: "Correct.",
      incorrect: "Not quite.",
      next: "Next question",
      finish: "Show result",
      resultTitle: "Your result",
      resultText: "You answered {score} of {total} questions correctly.",
      resultStrong: "Strong result. Continue with a new topic or ask a deeper question.",
      resultDeveloping: "A good start. The linked info articles explain each answer in more depth.",
      restart: "Restart quiz",
    },
    articles: {
      eyebrow: "Info articles",
      title: "Environmental topics, explained clearly.",
      intro:
        "Explore source-based CYRI articles on climate, nature, marine protection, renewable energy, biodiversity and sustainable cities.",
      newestEyebrow: "Newest",
      newestTitle: "Newest Articles",
      archiveEyebrow: "Archive",
      olderTitle: "Older Articles",
      olderIntro: "Browse previous CYRI publications by topic and format.",
      readMore: "Read more",
      sourcesTitle: "Sources and further reading",
      modalNote: "Photo sources are shown in the lower corner of each image.",
      filters: {
        all: "All",
      },
      emptyLatest: "No CYRI articles have been published yet.",
      emptyLatestHint: "Use the protected publishing area to add the first article.",
      emptyNewest: "No newest articles yet.",
      noResults: "No older articles match this category yet.",
    },
    research: {
      eyebrow: "CYRI assistant",
      title: "Ask questions about CYRI environmental info.",
      intro:
        "Receive concise AI-assisted explanations based only on published CYRI info articles.",
      questionLabel: "Your question",
      questionPlaceholder: "What does coral bleaching have to do with climate change?",
      submit: "Ask CYRI",
      asking: "Reviewing CYRI articles...",
      answerEyebrow: "Answer",
      referencesTitle: "Based on these CYRI articles",
      readArticle: "Read article",
      privacyNote:
        "Your question is sent to the configured AI provider for processing. Do not enter personal or confidential information.",
      consent:
        "I agree that my question is processed by the configured AI provider. I will not enter personal data.",
      missing: "Enter a question with at least five characters.",
      unavailable: "The CYRI assistant is not configured on the server yet.",
      rateLimited: "Too many questions were submitted. Please try again in a few minutes.",
      error: "The question could not be answered. Please try again later.",
    },
    about: {
      eyebrow: "About",
      title: "A youth-led platform for environmental education.",
      intro: "CYRI is an independent youth-led digital education platform currently in development.",
      storyTitle: "Making environmental knowledge accessible and useful.",
      storyOne:
        "CYRI helps young people understand environmental topics, evaluate public debates and participate in sustainability conversations with confidence.",
      storyTwo:
        "The platform combines careful editorial work, accessible writing, transparent sourcing and interactive info formats.",
      teamEyebrow: "Team",
      teamTitle: "Core team",
      team: [
        {
          name: "Tobias Göppert",
          role: "Co-founder & education lead",
          text: "Co-founded CYRI and leads educational direction, editorial standards, info formats and source-based environmental content.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      panelTitle: "Questions and article feedback.",
      panelText:
        "Write to CYRI about articles, climate topics, media questions and general feedback. Messages go straight to the address below.",
    },
    publish: {
      eyebrow: "Publish",
      title: "Publish a CYRI info article.",
      intro: "Add new source-based environmental education content with the protected editor.",
      panelEyebrow: "Editor access",
      panelTitle: "Protected publishing backend.",
      panelText:
        "This editor saves articles on the server so published posts are available to every visitor.",
      password: "Password",
      passwordPlaceholder: "Enter editor password",
      unlock: "Unlock editor",
      loginSuccess: "Editor unlocked.",
      loginError: "Wrong password.",
      backendError: "Backend is not reachable. Start the Node server or upload the PHP backend files.",
      titleDe: "German title",
      titleDePlaceholder: "Example: Warum Meeresschutz Klimaschutz ist",
      titleEn: "English title",
      titleEnPlaceholder: "Optional English title",
      category: "Category",
      date: "Article date",
      publication: "Publication",
      publishNow: "Publish now",
      publishLater: "Schedule for later",
      scheduleTime: "Launch date and time",
      scheduleHint: "The time uses your device's local time zone.",
      summaryDe: "German summary",
      summaryDePlaceholder: "Short, clear summary for the article card.",
      summaryEn: "English summary",
      summaryEnPlaceholder: "Optional English summary.",
      bodyDe: "German article text",
      bodyDePlaceholder: "Write the article text here.",
      bodyEn: "English article text",
      bodyEnPlaceholder: "Optional English article text.",
      translate: "Translate German article with AI",
      translating: "Translating article...",
      translateSuccess: "English title, summary and article text have been filled in.",
      translateMissing: "Enter the German title, summary and article text first.",
      translateNotConfigured: "AI translation is not configured on the server yet.",
      translateError: "The article could not be translated. Please try again later.",
      cover: "Cover photo",
      ownImage: "Upload your own photo",
      ownImageHint: "Optional. JPG, PNG or WebP; the image is optimized before upload.",
      chooseImage: "Choose photo",
      removeImage: "Remove photo",
      imageCredit: "Photo credit",
      imageCreditPlaceholder: "Example: Tobias Göppert / CYRI",
      imageTooLarge: "The selected image is too large or could not be processed.",
      uploadingImage: "Optimizing and uploading photo...",
      submit: "Publish article",
      scheduleSubmit: "Schedule article",
      success: "Article published. It now appears in the articles section.",
      scheduledSuccess: "Article scheduled. It will appear automatically at the selected time.",
      error: "The article could not be published. Please log in again or try later.",
    },
    legal: {
      imprintEyebrow: "Legal notice",
      imprintTitle: "Imprint",
      imprintIntro:
        "CYRI is currently in its public launch phase. This page contains the legal information required under German provider identification rules.",
      providerEyebrow: "Information according to § 5 DDG",
      providerTitle: "Provider",
      projectLabel: "Project",
      operatorLabel: "Operator",
      statusLabel: "Status",
      statusText:
        "Independent youth-led initiative currently in its public launch phase; not a registered NGO or incorporated association.",
      addressLabel: "Address",
      addressText: "Tobias Göppert, Aachener Straße 238, 40223 Düsseldorf, Germany",
      emailLabel: "Email",
      editorialEyebrow: "Editorial responsibility",
      editorialTitle: "Responsible under § 18 Abs. 2 MStV",
      editorialText:
        "Tobias Göppert is responsible for editorial article content. Responsible contact: Tobias Göppert, Aachener Straße 238, 40223 Düsseldorf, Germany.",
      publisherResponsibilityEyebrow: "Funded content",
      publisherResponsibilityTitle: "Responsibility for CYRI content",
      publisherResponsibilityText:
        "CYRI is solely responsible as publisher for the content of this website. The published content does not necessarily reflect the views of the Federal Ministry for Economic Cooperation and Development.",
      liabilityEyebrow: "Liability notice",
      liabilityTitle: "Liability for content",
      liabilityContent:
        "CYRI creates article content with care. However, no guarantee is given for correctness, completeness, timeliness or suitability for a particular purpose. The content is for general information and does not replace professional advice. Liability is excluded to the extent permitted by law. Mandatory liability, especially for intent, gross negligence and injury to life, body or health, remains unaffected.",
      linksTitle: "Liability for external links",
      linksText:
        "External links lead to third-party content. The respective providers are responsible for their own content. Linked pages were checked for obvious legal violations when the links were created. If CYRI becomes aware of illegal content, the relevant links will be removed.",
      copyrightTitle: "Copyright and image credits",
      copyrightText:
        "Texts, layout and original CYRI content are protected by copyright unless otherwise stated. Third-party images are used with source and license information shown near the image or in the documentation.",
      privacyEyebrow: "Privacy",
      privacyTitle: "Privacy notice",
      privacyIntro:
        "This website sends assistant questions and protected publishing requests to the CYRI backend.",
      localDataTitle: "Backend data",
      localDataText:
        "Published articles and uploaded article photos are stored on the server. The website receives no messages from visitors and therefore stores none.",
      controllerTitle: "Controller and contact",
      controllerText:
        "CYRI, operated by Tobias Göppert, is responsible for this website. Privacy questions can be sent to climateyri@gmail.com.",
      processingTitle: "What is processed",
      processingText:
        "The hosting provider may process technical log data. The website has no contact form and stores no messages. The CYRI assistant sends the entered question to the configured AI provider only after consent.",
      basisTitle: "Purposes and legal bases",
      basisText:
        "Technical logs are processed for secure website operation on the basis of legitimate interests under Article 6(1)(f) GDPR. AI questions are processed only with consent under Article 6(1)(a) GDPR, which can be withdrawn for the future.",
      localStorageTitle: "Data on this device",
      localStorageText:
        "Language, game progress, badges and selected settings are stored locally in the browser. They are not a public profile and can be deleted through the browser settings.",
      rightsTitle: "Your rights",
      rightsText:
        "You may request access, correction, deletion, restriction, portability or object to processing. You may withdraw consent at any time and lodge a complaint with a data-protection authority.",
    },
    footer: {
      statement: "Youth-led environmental education for a more sustainable future.",
      contact: "Contact",
      language: "Language",
      social: "Social",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    funding: {
      ariaLabel: "Funding information",
      logoAlt:
        "Funded by the German Foundation for Civic Engagement and Volunteering with funds from the Federal Ministry for Economic Cooperation and Development",
      note:
        "CYRI is funded through the programme “action! Aktiv für eine globale Welt” by the German Foundation for Civic Engagement and Volunteering (DSEE) with funds from the Federal Ministry for Economic Cooperation and Development (BMZ).",
    },
  },
  de: {
    accessibility: {
      skip: "Zum Inhalt springen",
      menu: "Navigationsmenü öffnen",
      close: "Schließen",
      learnNeonOn: "Dunkelgrünes Neonlicht einschalten",
      learnNeonOff: "Dunkelgrünes Neonlicht ausschalten",
    },
    seo: {
      title: "CYRI | Umweltbildung für Jugendliche (Klima, Natur, Ozean)",
      description:
        "CYRI ist eine jugendgeführte digitale Infoplattform für Klima-, Natur- und Umweltschutz.",
      pages: {
        home: {
          title: "CYRI | Umweltbildung & 17 Nachhaltigkeitsziele für Jugendliche",
          description:
            "CYRI bietet jugendgeführte Umweltbildung zu Klima, Natur und allen 17 Nachhaltigkeitszielen – mit fundierten Artikeln und interaktivem Lernen.",
        },
        learn: {
          title: "Umweltbildung & Klima-Lernen für Jugendliche | CYRI",
          description:
            "Kostenlose Umwelt- und Klimabildung für Jugendliche von 15 bis 19 Jahren, Lehrkräfte und Unterricht – interaktiv verbunden mit allen 17 Nachhaltigkeitszielen.",
        },
        articles: {
          title: "Umweltwissen: Klima, Natur & Nachhaltigkeit | CYRI",
          description:
            "Fundierte Umweltartikel für Jugendliche über Klimaschutz, Biodiversität, Meere, erneuerbare Energie, nachhaltige Städte und die 17 Nachhaltigkeitsziele.",
        },
        research: {
          title: "CYRI-Assistent | CYRI",
          description:
            "Stelle Fragen und erhalte KI-gestützte Antworten auf Basis veröffentlichter CYRI-Artikel.",
        },
        about: {
          title: "Über CYRI | Jugendgeführte Umweltbildung",
          description:
            "Erfahre mehr über CYRI, eine unabhängige jugendgeführte Plattform für Umweltbildung im Aufbau in Deutschland.",
        },
        publish: {
          title: "Publizieren | CYRI",
          description:
            "Geschütztes Veröffentlichungsbackend für CYRI-Artikel und Updates.",
        },
        imprint: {
          title: "Impressum | CYRI",
          description:
            "Impressum und verantwortliche Kontaktinformationen für CYRI.",
        },
        privacy: {
          title: "Datenschutz | CYRI",
          description:
            "Datenschutzhinweise für das CYRI-Website-Backend und den Redaktionsbereich.",
        },
      },
    },
    nav: {
      home: "Start",
      mission: "Mission",
      learn: "Lernen",
      articles: "Artikel",
      research: "CYRI fragen",
      learnOverview: "Übersicht",
      learnMission: "Mission Lab",
      learnSdg: "17 Ziele",
      learnTopics: "Themen",
      learnTools: "Infotools",
      learnMap: "Weltkarte",
      learnQuiz: "Quiz",
      learningArticles: "Infoartikel",
      about: "Über uns",
      publish: "Publizieren",
    },
    audience: {
      gateEyebrow: "Ansicht wählen",
      gateTitle: "Wie viele Details möchtest du?",
      gateIntro:
        "Wähle einmal aus, damit CYRI Erklärungen und Artikel passend darstellt. Du kannst die Einstellung jederzeit ändern.",
      children: "Kurz & klar",
      childrenDescription: "Kürzere Sätze, klare Beispiele und kompakte Artikel.",
      adults: "Mehr Details",
      adultsDescription: "Vollständige Erklärungen, Fachbegriffe und komplette Artikel.",
      switchLabel: "Info-Stil",
      articleLabel: "Artikelversion",
      childrenNote: "Klar und kompakt. Die Quellen sind dieselben wie im vollständigen Artikel.",
      adultsNote: "Vollständiger Artikel mit allen Details und Fachbegriffen.",
      saved: "Diese Auswahl wird auf diesem Gerät gespeichert.",
      childFallbackTitle: "Das Wichtigste",
      childFallbackIntro:
        "Diese kürzere Version wählt die zentralen Gedanken aus dem vollständigen Artikel aus.",
      learning: {
        children: {
          title: "Umweltinfos zum Durchklicken.",
          intro:
            "Wähle eine Mission, teste Entscheidungen und sieh, was sich in Natur, Städten und Gemeinschaften verändert.",
          journeyTitle: "Dein Entdecker-Board.",
          journeyIntro:
            "Öffne ein Thema, lies den kurzen Artikel und prüfe Fakten im Quiz. Deine Auswahl bleibt auf diesem Gerät.",
          topicsTitle: "Was möchtest du entdecken?",
          quizTitle: "Was hast du entdeckt?",
          quizIntro: "Wähle ein Spiel oder Quiz und checke die Fakten.",
        },
        adults: {
          title: "Umweltinfos, die du selbst erkunden kannst.",
          intro:
            "Starte mit einer Mission, teste Modelle, vergleiche Entscheidungen und vertiefe das Thema mit quellenbasierten Artikeln.",
          journeyTitle: "Wähle deinen nächsten Zug.",
          journeyIntro:
            "Erkunde ein Thema, öffne den passenden Artikel und mache das Quiz. Deine Auswahl bleibt auf diesem Gerät.",
          topicsTitle: "Was möchtest du verstehen?",
          quizTitle: "Was ist hängen geblieben?",
          quizIntro: "Wähle selbst, wie viele Fragen du beantworten möchtest.",
        },
      },
    },
    hero: {
      eyebrow: "Jugendgeführte Umweltbildung",
      title: "Umweltbildung, die alle 17 Ziele verbindet.",
      subtitle:
        "CYRI verbindet Umweltbildung mit den 17 Nachhaltigkeitszielen. Junge Menschen entdecken, wie Klima, Natur, Gerechtigkeit und nachhaltige Entwicklung zusammengehören.",
      primaryCta: "Jetzt entdecken",
      secondaryCta: "Artikel lesen",
      imageAlt: "Gebleichter Korallenriffbereich",
    },
    learningIntro: {
      eyebrow: "Aktiv entdecken",
      title: "Vom Lesen zu echten Zusammenhängen.",
      intro:
        "Wähle ein Thema, stelle Fragen und verbinde verlässliche Informationen mit interaktiven Umweltfakten.",
      cta: "CYRI-Infotools entdecken",
      paths: [
        {
          step: "01",
          title: "Entdecken",
          text: "Finde einen verständlichen Einstieg in Klima-, Natur- und Umweltthemen.",
        },
        {
          step: "02",
          title: "Nachfragen",
          text: "Stelle dem CYRI-Assistenten Fragen zu den veröffentlichten Artikeln.",
        },
        {
          step: "03",
          title: "Überprüfen",
          text: "Checke Fakten mit kurzen Quizfragen und Erklärungen.",
        },
      ],
    },
    homeSdgs: {
      eyebrow: "Umweltbildung und Agenda 2030",
      title: "Umweltwissen verbindet alle 17 Nachhaltigkeitsziele.",
      intro:
        "CYRI zeigt, wie Umweltfragen mit Bildung, Gesundheit, Ernährung, Energie, Städten, Gerechtigkeit und internationaler Zusammenarbeit verbunden sind.",
      cta: "Die Ziele entdecken",
      educationBadge: "SDG 4 · Hochwertige Bildung",
      educationTitle: "Umweltbildung schafft Wissen zum Handeln.",
      educationText:
        "Verständliche Informationen helfen jungen Menschen, Belege einzuordnen, Zusammenhänge zu erkennen und faire Lösungen zu diskutieren, statt Umweltprobleme einzeln zu betrachten.",
      educationPoints: [
        "Verlässliche Informationen verstehen",
        "Ökologie und Gesellschaft verbinden",
        "Entscheidungen und Lösungen bewerten",
      ],
      allEyebrow: "Die vollständige Übersicht",
      allTitle: "Alle 17 Ziele gehören zusammen.",
      goalsAria: "Alle 17 Nachhaltigkeitsziele",
      goalAria: "SDG {number} öffnen: {title}",
      openGoal: "Ziel anzeigen",
      detailEyebrow: "Nachhaltigkeitsziel {number}",
      detailWhy: "Verbindung zur Umwelt",
      detailQuestion: "Frage zum Weiterdenken",
      officialLink: "Dieses Ziel bei den Vereinten Nationen ansehen",
      officialNote:
        "Offizielles SDG-Symbol © Vereinte Nationen. Die CYRI-Erklärungen sind unabhängig und nicht von den Vereinten Nationen bestätigt.",
      logoAlt: "Offizielles Symbol für SDG {number}: {title}",
      actionText:
        "Im Lernbereich testest du diese Zusammenhänge mit Umwelt-Challenges und dem SDG-Sprint.",
      actionCta: "Umweltbildung starten",
    },
    mission: {
      eyebrow: "Mission",
      title: "Unsere Mission",
      intro: "CYRI ist eine unabhängige, jugendgeführte Plattform für Umweltbildung aus Deutschland.",
      paragraphOne:
        "Unser Ziel ist es, Klimawissenschaft, Naturschutz, Umweltpolitik und Nachhaltigkeit für junge Menschen und die breite Öffentlichkeit verständlich zu machen.",
      paragraphTwo:
        "Wir erstellen Artikel, visuelle Erklärformate und Social-Media-Inhalte auf Basis glaubwürdiger, nachvollziehbarer Quellen. CYRI führt keine eigene Forschung durch.",
      focus: [
        {
          title: "Verständliches Wissen",
          text: "Wir machen komplexe Umweltthemen mit präzisen und zugänglichen Informationen verständlich.",
        },
        {
          title: "Interaktive Infos",
          text: "Themenexplorer, Fragen und Quizze helfen dabei, Informationen aktiv zu verbinden.",
        },
        {
          title: "Jugendliche Perspektiven",
          text: "Junge Menschen prägen Themen, Formate und Sprache, während Quellen transparent bleiben.",
        },
      ],
    },
    latest: {
      eyebrow: "Neue Umweltinfos",
      title: "Artikel im Wechsel",
      intro:
        "Die Auswahl wechselt automatisch, damit jeder CYRI-Infoartikel der Reihe nach vorgestellt wird.",
      viewAll: "Alle Infoartikel ansehen",
      previous: "Vorherige Artikelauswahl",
      next: "Nächste Artikelauswahl",
      pause: "Rotation pausieren",
      play: "Rotation fortsetzen",
      status: "Rotation {current} von {total}",
    },
    learn: {
      topicsEyebrow: "Thema wählen",
      topicsTitle: "Was möchtest du verstehen?",
      topicsAria: "Umweltthemen",
      journeyEyebrow: "Mission Board",
      journeyTitle: "Wähle deinen nächsten Zug.",
      journeyIntro:
        "Erkunde ein Thema, öffne den passenden Infoartikel und mache das Quiz. Deine Auswahl bleibt auf diesem Gerät.",
      journeyProgress: "Gesamtfortschritt",
      journeySaved: "Lokal auf diesem Gerät gespeichert",
      journeyExplored: "Thema erkundet",
      journeyArticle: "Infoartikel geöffnet",
      journeyQuiz: "Wissenscheck abgeschlossen",
      journeyNext: "Empfohlener nächster Schritt",
      journeyExploreAction: "{topic} erkunden",
      journeyReadAction: "{topic} lesen",
      journeyQuizAction: "Wissenscheck starten",
      journeyMission: "Missionsschritt",
      journeyMissionAction: "Mission bauen",
      journeyCompleteTitle: "Mission Board abgeschlossen.",
      journeyCompleteText:
        "Du hast alle Themen erkundet, alle drei Infoartikel geöffnet, das Quiz abgeschlossen und eine Mission gespeichert.",
      journeyReset: "Fortschritt zurücksetzen",
      journeyStatus: "{complete} von {total} Schritten",
      guidingQuestion: "Leitfrage",
      concepts: "Schlüsselbegriffe",
      discoverHint: "Wähle einen Begriff und entdecke den Zusammenhang.",
      discoverEyebrow: "Aha-Moment",
      discoverProgress: "{complete} von {total} entdeckt",
      labEyebrow: "Ursache-Wirkungs-Labor",
      openArticle: "Infoartikel öffnen",
      askAssistant: "CYRI fragen",
      toolsEyebrow: "Infotools",
      toolsTitle: "Verstehen, vergleichen, erklären.",
      toolsIntro:
        "Nutze kurze Infotools, um Umweltthemen in einfache Erklärungen, Diskussionsfragen und quellenbasierte Mini-Formate zu übersetzen.",
      toolsPrompt: "Infoimpuls",
      toolsExample: "Beispiel-Ausgabe",
      toolsSteps: "Schritte",
      missionEyebrow: "Mission Control",
      missionTitle: "Baue deine eigene Umweltmission.",
      missionIntro:
        "Wähle eine echte Umweltherausforderung, wechsle Blickwinkel und Zeitrahmen und erhalte eine Infomission mit Modellen, Experimenten und Handlungsschritten.",
      missionFocusLabel: "Herausforderung wählen",
      missionRoleLabel: "Blickwinkel wählen",
      missionPaceLabel: "Zeit wählen",
      missionModelTitle: "Live-Infomodell",
      missionImpactMap: "Impact-Cockpit",
      missionImpactScore: "Missionswert",
      missionMeters: ["Fakten", "Natur", "Gemeinschaft", "Aktion"],
      missionModelNote:
        "Dieses Infomodell macht deine Auswahl sichtbar, nutzt aber keine live gemessenen Daten.",
      missionKitTitle: "Forschungs-Kit",
      missionPlanTitle: "Missionsplan",
      missionEvidence: "Belege suchen",
      missionExperiment: "Mini-Experiment",
      missionDiscussion: "Diskussionsfrage",
      missionShare: "Post-Idee",
      missionRoleAction: "Nächster Schritt",
      missionDeliverable: "Resultat",
      missionOpenTopic: "Thema öffnen",
      missionOpenArticle: "Artikel lesen",
      missionAskAssistant: "CYRI fragen",
      missionSave: "Mission lokal speichern",
      missionSaved: "Mission lokal auf diesem Gerät gespeichert.",
      sdgEyebrow: "17 Nachhaltigkeitsziele",
      sdgTitle: "Klicke dich durch die Ziele hinter Umweltschutz.",
      sdgIntro:
        "Die SDGs zeigen, wie Klima, Natur, Wasser, Städte, Gerechtigkeit und Partnerschaften zusammenhängen.",
      sdgAria: "Interaktive Übersicht der 17 Nachhaltigkeitsziele",
      sdgWhy: "Warum es wichtig ist",
      sdgQuestion: "Frage zum Nachdenken",
      sdgConnections: "Verbundene CYRI-Kartenmodelle",
      sdgNoConnection:
        "Noch kein Kartenmodell. Dieses Ziel hilft trotzdem, Ressourcen, Risiken und Fairness zu vergleichen.",
      sdgMapButton: "Kartenmodell öffnen",
      gameChoose: "Challenge-Pfad",
      gameMedalLabel: "Medaille wählen",
      gameStart: "Rätsel starten",
      gameAutoNext: "Richtig – die nächste Runde startet von selbst.",
      gameFinishing: "Richtig – das Rätsel wird abgeschlossen.",
      sprintYourPick: "Deine Wahl",
      sprintFits: "Passt hier",
      sprintEffect: "Was passiert:",
      gameMedalNote: "Bronze dauert etwa 5 Minuten, Silber etwa 15 und Gold etwa 30.",
      councilSpeakingNote: "Ein Ausrufezeichen zeigt, wer gerade für die schwächste der vier Anzeigen spricht. Gib diesem Platz einen Punkt und schau, wohin die Meldung wandert.",
      gameTimeLabel: "Zeit wählen",
      gameTimeMinutes: "{count} min",
      gamePathProgress: "{complete} von {total} gelöst",
      gameLocked: "Löse zuerst das vorherige Rätsel",
      gameSolved: "Gelöst",
      gameUnlockNext: "Nächstes Spiel freischalten",
      gameFinishPath: "Pfad abschließen",
      gamePathComplete: "Pfad geschafft",
      gameTryAgain: "Nochmal versuchen",
      gameImprovePlan: "Erreiche die sichtbare Zielmarke, um weiterzugehen.",
      gameScore: "Punkte",
      gameRound: "Runde {current} von {total}",
      gameCorrect: "Richtige Wahl.",
      gameIncorrect: "Versuche eine andere Verbindung.",
      gameReset: "Spiel zurücksetzen",
      gameNext: "Nächste Runde",
      gameComplete: "Geschafft",
      gameBudget: "Budget",
      gameRemaining: "{count} Punkte übrig",
      gameSelected: "Ausgewählt",
      gameFullBudget: "Budget verbraucht",
      gameTokens: "Token",
      gameOptionalRemaining: "{count} optionale Token übrig",
      gameTargetAt: "Weiter ab {count}%",
      gameTargetReached: "Ziel erreicht. Du kannst jetzt weitergehen.",
      gameTargetRemaining: "Noch {count} Prozentpunkte bis zum Weitergehen.",
      gameHiddenGoal: "Verdeckte Missionsgrenze",
      gameHiddenGoalIntro: "Die exakte Lösung bleibt verborgen. Baue einen Plan, prüfe ihn und nutze den Hinweis für deinen nächsten Versuch.",
      gameAttempts: "Prüfversuche: {count}",
      gameTestPlan: "Plan prüfen",
      gameUseFullBudget: "Der Plan ist noch nicht ambitioniert genug. Nutze die übrigen {count} Punkte.",
      gameKeepEveryCategory: "Ein Bereich wurde auf null gesetzt. Ein robustes Paket muss jeden Bereich einbeziehen.",
      gameFindSynergy: "Die Einzelmaßnahmen helfen, aber die entscheidende versteckte Synergie fehlt noch.",
      gameWeakestArea: "Fast geschafft. Dein schwächster Bereich ist „{area}“. Verteile neu und prüfe erneut.",
      gameNeedsBalance: "Das Paket ist nah dran, aber insgesamt noch nicht ausgewogen genug.",
      gameCongratulations: "Herzlichen Glückwunsch!",
      gameCongratulationsText: "Du hast erfolgreich ausprobiert und die Mission geknackt.",
      gameMissionBrief: "Missionswissen",
      gameClose: "Weiter",
      gameLiveModel: "3D-Live-Modell",
      cityModelLabel: "Interaktives 3D-Modell einer Schwammstadt. Die Szene reagiert auf Token für Schatten, Boden, Wasser und Wege.",
      reefModelLabel: "Interaktives 3D-Riffmodell. Die Szene reagiert auf die ausgewählten Schutzmaßnahmen.",
      climateModelLabel: "Interaktiver 3D-Klimarat an einem Planetentisch. Fünf Menschen wachsen mit den Token in ihren Handlungsfeldern.",
      gameInfoProblem: "Problem",
      gameInfoConnection: "Zusammenhang",
      gameInfoAction: "Was hilft",
      chainStart: "Start",
      chainNext: "Wähle die nächste Verbindung",
      chainBuilt: "Deine Kette",
      chainMistakes: "{count} Fehlversuche",
      chainBroken: "Die Kette ist nach drei Fehlversuchen gerissen. Sie startet von vorn - überlege vor dem Klicken.",
      gameRuleFloor: "Zusatzregel: kein Wert unter {count}%",
      reefSynergyTitle: "Kombinationseffekte",
      cityCooling: "Kühlung",
      cityFlood: "Überflutungsschutz",
      cityHabitat: "Biodiversität",
      cityFairness: "Fairer Zugang",
      cityOutcomeStrong: "Starker Plan: ausgewogen, kühler und sicherer.",
      cityOutcomeMedium: "Guter Anfang. Ergänze Balance, damit kein Risiko vergessen wird.",
      cityOutcomeWeak: "Noch riskant. Verteile Punkte auf Wasser, Schatten, Boden und Zugang.",
      reefRecovery: "Erholungschance",
      reefPressure: "Druck gesenkt",
      reefCommunity: "Unterstützung",
      reefOutcomeStrong: "Starker Rettungsplan: lokaler Schutz und Klimaschutz greifen zusammen.",
      reefOutcomeMedium: "Nützlicher Plan. Ergänze eine fehlende Maßnahme, wenn das Budget reicht.",
      reefOutcomeWeak: "Noch zu wenig Schutz. Wähle Maßnahmen, die Stress senken.",
      gameModelNote: "Anschauliches Lernmodell: Die Werte zeigen Zusammenhänge, keine gemessenen Prognosen oder Live-Daten.",
      decrease: "Punkte verringern",
      increase: "Punkte erhöhen",
      finalBudget: "Ratsbudget",
      finalClimate: "Emissionsminderung",
      finalNature: "Naturschutz",
      finalJustice: "Gerechtigkeit",
      finalResilience: "Widerstandskraft",
      finalOutcomeStrong: "Das Maßnahmenpaket hat die Zielmarke erreicht und kann umgesetzt werden.",
      finalOutcomeHint: "Erreiche 66 Prozent, um weiterzugehen. Übrige Token sind optional.",
      profileTitle: "Dein Spielfortschritt",
      gamesSolved: "Spiele gelöst",
      badges: "Badges",
      localOnly: "Fortschritt, Badges und Ergebnisse bleiben in diesem Browser und werden nicht veröffentlicht.",
      certificateTitle: "CYRI Climate Certificate freigeschaltet",
      certificateTierTitle: "CYRI {tier}-Zertifikat freigeschaltet",
      certificateTierIssuedTitle: "{tier}-Zertifikat ausgestellt",
      certificateIssuedList: "Ausgestellte Zertifikate",
      certificateCollection: "Drei Zertifikatsstufen",
      certificateLocked: "Noch nicht verdient",
      certificateEarned: "Verdient",
      certificateCreated: "Erstellt",
      certificateText: "Trage deinen Namen ein und erstelle das Zertifikat für diesen abgeschlossenen Pfad.",
      certificateBottomText: "Dein Abschlusszertifikat ist unter den Spielen bereit.",
      certificateGoTo: "Namen für Zertifikat eintragen",
      certificateName: "Name auf dem Zertifikat",
      certificateNameRequired: "Bitte gib einen Namen für das Zertifikat ein.",
      certificateDownload: "Zertifikat als PNG erstellen",
      certificateOnce: "Pro Stufe (Bronze 5 min, Silber 15 min, Gold 30 min) kann auf diesem Gerät ein Zertifikat ausgestellt werden.",
      certificateIssuedTitle: "Zertifikat ausgestellt",
      certificateIssuedText: "Diese Stufe hat ihr Zertifikat bereits. Schließe einen längeren Pfad ab, um die nächste Stufe zu verdienen.",
      certificateId: "Zertifikats-ID",
      resetProgress: "Gesamten Spielfortschritt zurücksetzen",
      resetConfirm: "Gesamten Spielfortschritt, Badges, Ergebnisse und Zertifikatsstatus auf diesem Gerät zurücksetzen?",
      resetNote: "Startet einen neuen Durchlauf und löscht die lokal gespeicherten Spielergebnisse auf diesem Gerät.",
      mapEyebrow: "Globale Zusammenhänge",
      mapTitle: "Klicke dich durch die Weltkarte und teste Modelle.",
      mapIntro:
        "Wähle einen Ort, vergleiche Modellszenarien und erkunde, wie Klima, Wasser, Biodiversität und Gerechtigkeit Deutschland mit Regionen des Globalen Südens verbinden.",
      mapAria: "Interaktive Weltkarte mit globalen Umweltorten",
      mapChallenge: "Herausforderung",
      mapConnection: "Globaler Zusammenhang",
      mapAction: "Was du prüfen kannst",
      mapOpenModel: "Klicke einen Ort an und teste ein Modell.",
      modelChoose: "Modellszenario wählen",
      modelOutcome: "Modellergebnis",
      modelNote:
        "Diese Infosimulationen zeigen Zusammenhänge, keine live gemessenen Daten.",
      actionEyebrow: "Mitmachen",
      actionTitle: "Vom Wissen ins Handeln.",
      actionIntro:
        "CYRI übersetzt Umweltinformationen in kleine, realistische nächste Schritte für Schule, Jugendgruppen und Social Media.",
      pollTitle: "Was soll CYRI als Nächstes ausbauen?",
      pollIntro: "Deine Auswahl wird nur auf diesem Gerät gespeichert.",
      pollSaved: "Als deine Info-Priorität gespeichert.",
      formatsEyebrow: "Formate",
      formatsTitle: "Wissen für unterschiedliche Situationen.",
      formatsIntro:
        "Dasselbe Thema kann ausführlich vertieft, visuell verstanden oder für Social Media aufbereitet werden.",
      formats: [
        {
          status: "Jetzt verfügbar",
          title: "Infoartikel",
          text: "Quellenbasierte Langform-Erklärungen mit klarer Struktur und weiterführenden Informationen.",
        },
        {
          status: "Im Aufbau",
          title: "Infografiken",
          text: "Visuelle Zusammenfassungen, die Abläufe, Vergleiche und Kennzahlen leichter erfassbar machen.",
        },
        {
          status: "Auf unseren Kanälen",
          title: "Social Erklärformate",
          text: "Kompakte Bildungsbeiträge für Instagram.",
        },
      ],
      quizEyebrow: "Wissenscheck",
      quizTitle: "Was ist hängen geblieben?",
      quizIntro: "Wähle selbst, wie viele Fragen du beantworten möchtest.",
      quizLengthLabel: "Quizlänge",
      quizLengths: [
        { value: 3, title: "Kurz", text: "3 Fragen" },
        { value: 6, title: "Fokussiert", text: "6 Fragen" },
        { value: 9, title: "Ausführlich", text: "9 Fragen" },
        { value: 12, title: "SDG-Runde", text: "12 Fragen" },
      ],
      questionProgress: "Frage {current} von {total}",
      correct: "Richtig.",
      incorrect: "Noch nicht ganz.",
      next: "Nächste Frage",
      finish: "Ergebnis anzeigen",
      resultTitle: "Dein Ergebnis",
      resultText: "Du hast {score} von {total} Fragen richtig beantwortet.",
      resultStrong: "Starkes Ergebnis. Vertiefe ein neues Thema oder stelle eine weiterführende Frage.",
      resultDeveloping: "Ein guter Anfang. Die verlinkten Infoartikel erklären jede Antwort ausführlicher.",
      restart: "Quiz neu starten",
    },
    articles: {
      eyebrow: "Infoartikel",
      title: "Umweltthemen klar erklärt.",
      intro:
        "Entdecke quellenbasierte CYRI-Artikel zu Klima, Natur, Meeresschutz, erneuerbarer Energie, Biodiversität und nachhaltigen Städten.",
      newestEyebrow: "Neueste",
      newestTitle: "Neueste Artikel",
      archiveEyebrow: "Archiv",
      olderTitle: "Ältere Artikel",
      olderIntro: "Durchsuche frühere CYRI-Veröffentlichungen nach Thema und Format.",
      readMore: "Weiterlesen",
      sourcesTitle: "Quellen und weiterführende Informationen",
      modalNote: "Bildquellen werden unten rechts im jeweiligen Foto angezeigt.",
      filters: {
        all: "Alle",
      },
      emptyLatest: "Es wurden noch keine CYRI-Artikel veröffentlicht.",
      emptyLatestHint: "Nutze den geschützten Veröffentlichungsbereich, um den ersten Artikel anzulegen.",
      emptyNewest: "Noch keine neuesten Artikel.",
      noResults: "Zu dieser Kategorie gibt es noch keine älteren Artikel.",
    },
    research: {
      eyebrow: "CYRI-Assistent",
      title: "Stelle Fragen zu CYRI-Umweltinfos.",
      intro:
        "Erhalte kurze KI-gestützte Erklärungen, die ausschließlich auf veröffentlichten CYRI-Infoartikeln basieren.",
      questionLabel: "Deine Frage",
      questionPlaceholder: "Was hat Korallenbleiche mit dem Klimawandel zu tun?",
      submit: "CYRI fragen",
      asking: "CYRI-Artikel werden ausgewertet...",
      answerEyebrow: "Antwort",
      referencesTitle: "Basiert auf diesen CYRI-Artikeln",
      readArticle: "Artikel lesen",
      privacyNote:
        "Deine Frage wird zur Verarbeitung an den eingerichteten KI-Anbieter übermittelt. Gib keine persönlichen oder vertraulichen Informationen ein.",
      consent:
        "Ich stimme zu, dass meine Frage vom eingerichteten KI-Anbieter verarbeitet wird. Ich gebe keine personenbezogenen Daten ein.",
      missing: "Gib eine Frage mit mindestens fünf Zeichen ein.",
      unavailable: "Der CYRI-Assistent ist auf dem Server noch nicht eingerichtet.",
      rateLimited: "Es wurden zu viele Fragen gestellt. Bitte versuche es in einigen Minuten erneut.",
      error: "Die Frage konnte nicht beantwortet werden. Bitte versuche es später erneut.",
    },
    about: {
      eyebrow: "Über uns",
      title: "Eine jugendgeführte Plattform für Umweltbildung.",
      intro: "CYRI ist eine unabhängige, jugendgeführte digitale Bildungsplattform, die sich derzeit im Aufbau befindet.",
      storyTitle: "Umweltwissen zugänglich und nutzbar machen.",
      storyOne:
        "CYRI hilft jungen Menschen, Umweltthemen zu verstehen, öffentliche Debatten einzuordnen und selbstbewusst an Nachhaltigkeitsgesprächen teilzunehmen.",
      storyTwo:
        "Die Plattform verbindet sorgfältige Redaktionsarbeit, verständliche Sprache, transparente Quellen und interaktive Infoformate.",
      teamEyebrow: "Team",
      teamTitle: "Kernteam",
      team: [
        {
          name: "Tobias Göppert",
          role: "Mitgründer & Bildungsleitung",
          text: "Hat CYRI mitgegründet und leitet Bildungsstrategie, redaktionelle Standards, Infoformate und quellenbasierte Umweltinhalte.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      panelTitle: "Fragen und Artikelhinweise.",
      panelText:
        "Schreib CYRI zu Artikeln, Klimathemen, Medienfragen und allgemeinem Feedback. Nachrichten gehen direkt an die Adresse unten.",
    },
    publish: {
      eyebrow: "Publizieren",
      title: "Einen CYRI-Infoartikel veröffentlichen.",
      intro: "Füge neue quellenbasierte Inhalte für die Umweltbildung über den geschützten Editor hinzu.",
      panelEyebrow: "Editor-Zugang",
      panelTitle: "Geschütztes Veröffentlichungsbackend.",
      panelText:
        "Dieser Editor speichert Artikel auf dem Server, damit veröffentlichte Beiträge für alle Besucher verfügbar sind.",
      password: "Passwort",
      passwordPlaceholder: "Editor-Passwort eingeben",
      unlock: "Editor entsperren",
      loginSuccess: "Editor entsperrt.",
      loginError: "Falsches Passwort.",
      backendError: "Das Backend ist nicht erreichbar. Starte den Node-Server oder lade die PHP-Backend-Dateien hoch.",
      titleDe: "Deutscher Titel",
      titleDePlaceholder: "Beispiel: Warum Meeresschutz Klimaschutz ist",
      titleEn: "Englischer Titel",
      titleEnPlaceholder: "Optionaler englischer Titel",
      category: "Kategorie",
      date: "Artikeldatum",
      publication: "Veröffentlichung",
      publishNow: "Sofort veröffentlichen",
      publishLater: "Für später planen",
      scheduleTime: "Launch-Datum und Uhrzeit",
      scheduleHint: "Es gilt die lokale Zeitzone deines Geräts.",
      summaryDe: "Deutsche Zusammenfassung",
      summaryDePlaceholder: "Kurze, klare Zusammenfassung für die Artikelkarte.",
      summaryEn: "Englische Zusammenfassung",
      summaryEnPlaceholder: "Optionale englische Zusammenfassung.",
      bodyDe: "Deutscher Artikeltext",
      bodyDePlaceholder: "Schreibe den Artikeltext hier.",
      bodyEn: "Englischer Artikeltext",
      bodyEnPlaceholder: "Optionaler englischer Artikeltext.",
      translate: "Deutschen Artikel mit KI übersetzen",
      translating: "Artikel wird übersetzt...",
      translateSuccess: "Englischer Titel, Zusammenfassung und Artikeltext wurden ausgefüllt.",
      translateMissing: "Fülle zuerst den deutschen Titel, die Zusammenfassung und den Artikeltext aus.",
      translateNotConfigured: "Die KI-Übersetzung ist auf dem Server noch nicht eingerichtet.",
      translateError: "Der Artikel konnte nicht übersetzt werden. Bitte versuche es später erneut.",
      cover: "Coverfoto",
      ownImage: "Eigenes Foto hochladen",
      ownImageHint: "Optional. JPG, PNG oder WebP; das Bild wird vor dem Upload optimiert.",
      chooseImage: "Foto auswählen",
      removeImage: "Foto entfernen",
      imageCredit: "Bildnachweis",
      imageCreditPlaceholder: "Beispiel: Tobias Göppert / CYRI",
      imageTooLarge: "Das ausgewählte Bild ist zu groß oder konnte nicht verarbeitet werden.",
      uploadingImage: "Foto wird optimiert und hochgeladen...",
      submit: "Artikel veröffentlichen",
      scheduleSubmit: "Artikel einplanen",
      success: "Artikel veröffentlicht. Er erscheint jetzt im Artikelbereich.",
      scheduledSuccess: "Artikel eingeplant. Er erscheint automatisch zum ausgewählten Zeitpunkt.",
      error: "Der Artikel konnte nicht veröffentlicht werden. Bitte melde dich erneut an oder versuche es später.",
    },
    legal: {
      imprintEyebrow: "Impressum",
      imprintTitle: "Impressum",
      imprintIntro:
        "CYRI befindet sich derzeit in der öffentlichen Launchphase. Diese Seite enthält die rechtlichen Angaben nach den deutschen Anforderungen zur Anbieterkennzeichnung.",
      providerEyebrow: "Angaben gemäß § 5 DDG",
      providerTitle: "Anbieter",
      projectLabel: "Projekt",
      operatorLabel: "Betreiber",
      statusLabel: "Status",
      statusText:
        "Unabhängige jugendgeführte Initiative in der öffentlichen Launchphase; kein eingetragener Verein, keine registrierte NGO.",
      addressLabel: "Anschrift",
      addressText: "Tobias Göppert, Aachener Straße 238, 40223 Düsseldorf, Deutschland",
      emailLabel: "E-Mail",
      editorialEyebrow: "Redaktionelle Verantwortung",
      editorialTitle: "Verantwortlich nach § 18 Abs. 2 MStV",
      editorialText:
        "Tobias Göppert ist für redaktionelle Artikelinhalte verantwortlich. Verantwortliche Kontaktperson: Tobias Göppert, Aachener Straße 238, 40223 Düsseldorf, Deutschland.",
      publisherResponsibilityEyebrow: "Geförderte Inhalte",
      publisherResponsibilityTitle: "Verantwortung für CYRI-Inhalte",
      publisherResponsibilityText:
        "CYRI ist als Herausgeber allein für die Inhalte dieser Website verantwortlich. Die veröffentlichten Inhalte spiegeln nicht notwendigerweise die Ansichten des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung wider.",
      liabilityEyebrow: "Haftungshinweis",
      liabilityTitle: "Haftung für Inhalte",
      liabilityContent:
        "CYRI erstellt Artikelinhalte mit Sorgfalt. Eine Gewähr für Richtigkeit, Vollständigkeit, Aktualität oder Eignung für einen bestimmten Zweck wird jedoch nicht übernommen. Die Inhalte dienen der allgemeinen Information und ersetzen keine professionelle Beratung. Eine Haftung ist im gesetzlich zulässigen Umfang ausgeschlossen. Zwingende gesetzliche Haftungstatbestände, insbesondere für Vorsatz, grobe Fahrlässigkeit sowie Schäden aus der Verletzung von Leben, Körper oder Gesundheit, bleiben unberührt.",
      linksTitle: "Haftung für externe Links",
      linksText:
        "Externe Links führen zu Inhalten Dritter. Für diese Inhalte sind die jeweiligen Anbieter verantwortlich. Verlinkte Seiten wurden zum Zeitpunkt der Verlinkung auf offensichtliche Rechtsverstöße geprüft. Sobald CYRI rechtswidrige Inhalte bekannt werden, werden entsprechende Links entfernt.",
      copyrightTitle: "Urheberrecht und Bildnachweise",
      copyrightText:
        "Texte, Layout und eigene CYRI-Inhalte sind urheberrechtlich geschützt, sofern nicht anders angegeben. Bilder Dritter werden mit Quellen- und Lizenzhinweisen direkt am Bild oder in der Dokumentation verwendet.",
      privacyEyebrow: "Datenschutz",
      privacyTitle: "Datenschutzhinweis",
      privacyIntro:
        "Diese Website sendet Assistenzfragen und geschützte Veröffentlichungsanfragen an das CYRI-Backend.",
      localDataTitle: "Serverdaten",
      localDataText:
        "Auf dem Server werden veröffentlichte Artikel und hochgeladene Artikelfotos gespeichert. Die Website nimmt keine Nachrichten von Besucherinnen und Besuchern entgegen und speichert daher auch keine.",
      controllerTitle: "Verantwortliche und Kontakt",
      controllerText:
        "Für diese Website ist CYRI, betrieben von Tobias Göppert, verantwortlich. Datenschutzfragen können an climateyri@gmail.com gesendet werden.",
      processingTitle: "Welche Daten verarbeitet werden",
      processingText:
        "Der Hosting-Anbieter kann technische Protokolldaten verarbeiten. Die Website hat kein Kontaktformular und speichert keine Nachrichten. Der CYRI-Assistent sendet die eingegebene Frage erst nach Einwilligung an den eingerichteten KI-Anbieter.",
      basisTitle: "Zwecke und Rechtsgrundlagen",
      basisText:
        "Technische Protokolldaten werden für den sicheren Websitebetrieb auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO verarbeitet. KI-Fragen werden nur mit Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO verarbeitet; die Einwilligung kann für die Zukunft widerrufen werden.",
      localStorageTitle: "Daten auf diesem Gerät",
      localStorageText:
        "Sprache, Spielfortschritt, Badges und ausgewählte Einstellungen werden lokal im Browser gespeichert. Sie bilden kein öffentliches Profil und können über die Browser-Einstellungen gelöscht werden.",
      rightsTitle: "Deine Rechte",
      rightsText:
        "Du kannst Auskunft, Berichtigung, Löschung, Einschränkung oder Datenübertragbarkeit verlangen und der Verarbeitung widersprechen. Eine Einwilligung kann jederzeit widerrufen und eine Datenschutzaufsichtsbehörde kontaktiert werden.",
    },
    footer: {
      statement: "Jugendgeführte Umweltbildung für eine nachhaltigere Zukunft.",
      contact: "Kontakt",
      language: "Sprache",
      social: "Social Media",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    funding: {
      ariaLabel: "Förderhinweis",
      logoAlt:
        "Gefördert durch die Deutsche Stiftung für Engagement und Ehrenamt mit Mitteln des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung",
      note:
        "Das Projekt CYRI wird im Rahmen des Förderprogramms „action! Aktiv für eine globale Welt“ durch die Deutsche Stiftung für Engagement und Ehrenamt (DSEE) mit Mitteln des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung (BMZ) gefördert.",
    },
  },
};

const LEARNING_PROGRESS_KEY = "cyri-learning-progress";
const AUDIENCE_KEY = "cyri-learning-audience";
const LEARNING_POLL_KEY = "cyri-learning-poll";
const MISSION_STATE_KEY = "cyri-mission-lab";
const GAME_PROGRESS_KEY = "cyri-game-progress-v2";
const CERTIFICATE_ISSUANCE_KEY = "cyri-certificate-issuance-v2";
const LEGACY_CERTIFICATE_ISSUANCE_KEY = "cyri-certificate-issuance-v1";

function loadAudience() {
  const savedAudience = localStorage.getItem(AUDIENCE_KEY);
  return ["children", "adults"].includes(savedAudience) ? savedAudience : null;
}

function loadPollChoice() {
  const savedChoice = localStorage.getItem(LEARNING_POLL_KEY);
  return pollOptions.some((option) => option.id === savedChoice) ? savedChoice : "";
}

function loadMissionLabState() {
  const fallback = {
    focus: missionFocuses[0].id,
    role: missionRoles[0].id,
    pace: missionPaces[1].id,
  };

  try {
    const saved = JSON.parse(localStorage.getItem(MISSION_STATE_KEY) || "{}");
    return {
      focus: missionFocuses.some((focus) => focus.id === saved.focus)
        ? saved.focus
        : fallback.focus,
      role: missionRoles.some((role) => role.id === saved.role) ? saved.role : fallback.role,
      pace: missionPaces.some((pace) => pace.id === saved.pace) ? saved.pace : fallback.pace,
    };
  } catch {
    return fallback;
  }
}

function loadGameProgress() {
  const fallback = { minutes: 5, completed: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(GAME_PROGRESS_KEY) || "{}");
    const validIds = new Set(learningGames.map((game) => game.id));
    return {
      minutes: [5, 15, 30].includes(saved.minutes) ? saved.minutes : 5,
      completed: Array.isArray(saved.completed)
        ? [...new Set(saved.completed.filter((id) => validIds.has(id)))]
        : [],
    };
  } catch {
    return fallback;
  }
}

function sanitizeCertificateEntry(entry) {
  if (!(
    entry &&
    typeof entry.id === "string" &&
    entry.id.startsWith("CYRI-") &&
    typeof entry.issuedAt === "string"
  )) {
    return null;
  }

  return {
    id: entry.id.slice(0, 48),
    issuedAt: entry.issuedAt,
    ...(typeof entry.name === "string" ? { name: entry.name.slice(0, 80) } : {}),
    ...(typeof entry.language === "string" && ["de", "en"].includes(entry.language)
      ? { language: entry.language }
      : {}),
    ...(Number.isFinite(entry.minutes) ? { minutes: entry.minutes } : {}),
    ...(Number.isFinite(entry.missionCount) ? { missionCount: entry.missionCount } : {}),
    ...(Array.isArray(entry.sdgs)
      ? { sdgs: entry.sdgs.filter((number) => Number.isInteger(number) && number >= 1 && number <= 17) }
      : {}),
  };
}

function loadCertificateIssuance() {
  try {
    const saved = JSON.parse(localStorage.getItem(CERTIFICATE_ISSUANCE_KEY) || "null");
    if (saved && typeof saved === "object" && !saved.id) {
      const issuance = {};
      certificateTierOrder.forEach((tierId) => {
        const entry = sanitizeCertificateEntry(saved[tierId]);
        if (entry) issuance[tierId] = entry;
      });
      return issuance;
    }
    // Migrate the old single-certificate format: it required the full
    // 30-minute path, so it maps to the gold tier.
    const legacy = sanitizeCertificateEntry(
      JSON.parse(localStorage.getItem(LEGACY_CERTIFICATE_ISSUANCE_KEY) || "null")
    );
    return legacy ? { gold: legacy } : {};
  } catch {
    return {};
  }
}

function loadLearningProgress() {
  const fallback = {
    visitedTopics: [],
    readArticles: [],
    quizCompleted: false,
    quizScore: 0,
    missionBuilt: false,
    quizIndex: 0,
    quizAnswers: [],
    quizComplete: false,
    quizLength: 3,
    discoveredConcepts: {},
    lastTopic: "oceans",
  };

  try {
    const saved = JSON.parse(localStorage.getItem(LEARNING_PROGRESS_KEY) || "{}");
    const validTopicIds = new Set(learningTopics.map((topic) => topic.id));
    const validArticleIds = new Set(learningTopics.map((topic) => topic.articleId));
    const quizLength = [3, 6, 9, 12].includes(saved.quizLength) ? saved.quizLength : 3;
    const quizAnswers = Array.isArray(saved.quizAnswers)
      ? saved.quizAnswers.slice(0, quizLength)
      : [];
    const discoveredConcepts = Object.fromEntries(
      learningTopics.map((topic) => [
        topic.id,
        Array.isArray(saved.discoveredConcepts?.[topic.id])
          ? saved.discoveredConcepts[topic.id].filter(
              (index) => Number.isInteger(index) && index >= 0 && index < topic.concepts.en.length
            )
          : [],
      ])
    );
    return {
      visitedTopics: Array.isArray(saved.visitedTopics)
        ? saved.visitedTopics.filter((id) => validTopicIds.has(id))
        : [],
      readArticles: Array.isArray(saved.readArticles)
        ? saved.readArticles.filter((id) => validArticleIds.has(id))
        : [],
      quizCompleted: Boolean(saved.quizCompleted),
      quizScore: Number.isFinite(saved.quizScore) ? saved.quizScore : 0,
      missionBuilt: Boolean(saved.missionBuilt),
      quizIndex:
        Number.isInteger(saved.quizIndex) &&
        saved.quizIndex >= 0 &&
        saved.quizIndex < quizLength
          ? saved.quizIndex
          : 0,
      quizAnswers,
      quizComplete: Boolean(saved.quizComplete),
      quizLength,
      discoveredConcepts,
      lastTopic: validTopicIds.has(saved.lastTopic) ? saved.lastTopic : "oceans",
    };
  } catch {
    return fallback;
  }
}

const savedLearningProgress = loadLearningProgress();
const savedMissionLab = loadMissionLabState();
const savedGameProgress = loadGameProgress();
const savedCertificateIssuance = loadCertificateIssuance();

const state = {
  lang:
    routeLanguageFromPath() ||
    localStorage.getItem("cyri-language") ||
    (navigator.language.startsWith("de") ? "de" : "en"),
  page: "home",
  anchor: null,
  filter: "all",
  homepageArticleOffset: 0,
  homepageArticlesPaused: false,
  activeArticleId: null,
  publisherToken: sessionStorage.getItem(PUBLISH_SESSION_KEY) || "",
  publisherUnlocked: Boolean(sessionStorage.getItem(PUBLISH_SESSION_KEY)),
  publishedArticles: [],
  customImagePreviewUrl: "",
  learningTopic: savedLearningProgress.lastTopic,
  learningProgress: {
    visitedTopics: savedLearningProgress.visitedTopics,
    readArticles: savedLearningProgress.readArticles,
    quizCompleted: savedLearningProgress.quizCompleted,
    quizScore: savedLearningProgress.quizScore,
    missionBuilt: savedLearningProgress.missionBuilt,
    discoveredConcepts: savedLearningProgress.discoveredConcepts,
  },
  quizIndex: savedLearningProgress.quizIndex,
  quizAnswers: savedLearningProgress.quizAnswers,
  quizComplete: savedLearningProgress.quizComplete,
  quizLength: savedLearningProgress.quizLength,
  activeConcept: null,
  activeExplainerTool: explainerTools[0].id,
  activeMissionFocus: savedMissionLab.focus,
  activeMissionRole: savedMissionLab.role,
  activeMissionPace: savedMissionLab.pace,
  activeSdg: 13,
  activeHomeSdg: null,
  learningGameMinutes: savedGameProgress.minutes,
  completedLearningGames: savedGameProgress.completed,
  certificateIssuance: savedCertificateIssuance,
  selectedCertificateTier: null,
  learningGameCelebration: null,
  activeLearningGame: learningGames[0].id,
  sdgSprintIndex: 0,
  sdgSprintStarted: false,
  sdgSprintAnswers: [],
  chainRound: 0,
  chainPicks: [],
  chainMistakes: 0,
  chainRoundMisses: 0,
  chainFeedback: "",
  cityPlan: {
    shade: 2,
    soil: 2,
    water: 2,
    routes: 2,
  },
  puzzleAttempts: {
    city: 0,
    reef: 0,
    climate: 0,
  },
  puzzleFeedback: {
    city: null,
    reef: null,
    climate: null,
  },
  reefActions: [],
  climatePlan: {
    energy: 1,
    mobility: 1,
    food: 1,
    nature: 1,
    fairness: 1,
  },
  activeMapHotspot: mapHotspots[0].id,
  activeMapScenario: mapHotspots[0].model.scenarios[0].id,
  pollChoice: loadPollChoice(),
  audience: loadAudience(),
};

const routes = new Set([
  "home",
  "learn",
  "articles",
  "research",
  "about",
  "publish",
  "imprint",
  "privacy",
]);

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], content[state.lang]) || "";
}

function activeAudience() {
  return state.audience || "adults";
}

function isChildrenMode() {
  return activeAudience() === "children";
}

function localizedValue(value) {
  return value?.[state.lang] || value?.de || value?.en || "";
}

function learningTopicValue(topic, field) {
  if (isChildrenMode() && topic.children?.[field]) {
    return localizedValue(topic.children[field]);
  }
  return localizedValue(topic[field]);
}

function learningTopicFacts(topic) {
  if (isChildrenMode() && topic.children?.facts?.[state.lang]) {
    return topic.children.facts[state.lang];
  }
  return topic.facts[state.lang];
}

function sdgNumberFromLabel(label) {
  const match = String(label).match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function getSdgGoal(number) {
  return sdgGoals.find((goal) => goal.number === Number(number)) || sdgGoals[12];
}

function hotspotSdgNumbers(hotspot) {
  return hotspot.sdgs.map(sdgNumberFromLabel).filter(Boolean);
}

function connectedSdgHotspots(goal) {
  return mapHotspots.filter((hotspot) => hotspotSdgNumbers(hotspot).includes(goal.number));
}

function activeLearningGame() {
  return learningGames.find((game) => game.id === state.activeLearningGame) || learningGames[0];
}

function activeLearningGameTrack() {
  return (
    learningGameTracks.find((track) => track.minutes === state.learningGameMinutes) ||
    learningGameTracks[0]
  );
}

function activeLearningGameIds() {
  return activeLearningGameTrack().games;
}

function learningGameIndex(gameId) {
  return activeLearningGameIds().indexOf(gameId);
}

function isLearningGameComplete(gameId) {
  return state.completedLearningGames.includes(gameId);
}

function isLearningGameUnlocked(gameId) {
  const index = learningGameIndex(gameId);
  if (index < 0) return false;
  return index === 0 || isLearningGameComplete(activeLearningGameIds()[index - 1]);
}

function nextUnlockedLearningGameId() {
  return activeLearningGameIds().find((gameId) => !isLearningGameComplete(gameId));
}

function saveGameProgress() {
  localStorage.setItem(
    GAME_PROGRESS_KEY,
    JSON.stringify({
      minutes: state.learningGameMinutes,
      completed: state.completedLearningGames,
    })
  );
}

function saveCertificateIssuance(tierId, issuance) {
  if (!tierId) {
    state.certificateIssuance = {};
    localStorage.removeItem(CERTIFICATE_ISSUANCE_KEY);
    localStorage.removeItem(LEGACY_CERTIFICATE_ISSUANCE_KEY);
    return;
  }
  state.certificateIssuance = { ...state.certificateIssuance, [tierId]: issuance };
  localStorage.setItem(CERTIFICATE_ISSUANCE_KEY, JSON.stringify(state.certificateIssuance));
}

function resetAllLearningGameProgress() {
  state.completedLearningGames = [];
  state.selectedCertificateTier = null;
  saveCertificateIssuance(null);
  resetLearningGameRun(state.learningGameMinutes);
  state.activeLearningGame = activeLearningGameIds()[0];
  saveGameProgress();
}

function resetLearningGameRun(minutes = state.learningGameMinutes) {
  state.learningGameMinutes = minutes;
  state.selectedCertificateTier = certificateTierForMinutes(minutes).id;
  state.activeLearningGame = nextUnlockedLearningGameId() || activeLearningGameIds().at(-1);
  state.sdgSprintIndex = 0;
  state.sdgSprintStarted = false;
  state.sdgSprintAnswers = [];
  state.chainRound = 0;
  state.chainPicks = [];
  state.chainMistakes = 0;
  state.chainRoundMisses = 0;
  state.chainFeedback = "";
  state.cityPlan = { shade: 2, soil: 2, water: 2, routes: 2 };
  state.puzzleAttempts = { city: 0, reef: 0, climate: 0 };
  state.puzzleFeedback = { city: null, reef: null, climate: null };
  state.learningGameCelebration = null;
  state.reefActions = [];
  state.climatePlan = { energy: 1, mobility: 1, food: 1, nature: 1, fairness: 1 };
  saveGameProgress();
}

function completeLearningGame(gameId) {
  let newlyCompleted = false;
  if (!isLearningGameComplete(gameId)) {
    state.completedLearningGames.push(gameId);
    newlyCompleted = true;
    state.learningGameCelebration = {
      gameId,
      id: `${gameId}-${Date.now()}`,
    };
  }

  saveGameProgress();

  const nextGameId = nextUnlockedLearningGameId();
  if (nextGameId) {
    state.activeLearningGame = nextGameId;
  }
}

function selectedCertificateTier() {
  const selected = Object.values(certificateTiers).find(
    (tier) => tier.id === state.selectedCertificateTier
  );
  if (selected && isCertificateTierEarned(selected)) return selected;

  const active = certificateTierForMinutes(state.learningGameMinutes);
  if (isCertificateTierEarned(active)) return active;

  return Object.values(certificateTiers).find((tier) => isCertificateTierEarned(tier)) || active;
}

function climatePlanTotal() {
  return climateCouncilControls.reduce(
    (sum, item) => sum + (state.climatePlan[item.id] || 0),
    0
  );
}

function changeClimatePlan(id, change) {
  if (!climateCouncilControls.some((item) => item.id === id)) return false;
  const current = state.climatePlan[id] || 0;
  const next = current + change;
  if (next < 0 || next > 6 || (change > 0 && climatePlanTotal() >= CLIMATE_BUDGET)) return false;
  state.climatePlan[id] = next;
  return true;
}

function climateMetric(metric) {
  return gameScoreValue(
    12 +
      climateCouncilControls.reduce(
        (sum, item) => sum + (state.climatePlan[item.id] || 0) * (item.effects[metric] || 0),
        0
      )
  );
}

function climateGameSolved(metrics, average) {
  return (
    average >= CLIMATE_GAME_TARGET &&
    Object.values(metrics).every((value) => value >= CLIMATE_METRIC_FLOOR) &&
    Object.values(state.climatePlan).every((value) => value >= 1) &&
    climatePlanTotal() === CLIMATE_BUDGET
  );
}

function learningBadges() {
  const completed = new Set(state.completedLearningGames);
  return [
    {
      id: "first-step",
      label: bi("First move", "Erster Zug"),
      unlocked: completed.size >= 1,
    },
    {
      id: "sdg-scout",
      label: bi("SDG Scout", "SDG-Scout"),
      unlocked: completed.has("sdg-sprint"),
    },
    {
      id: "systems-thinker",
      label: bi("Systems thinker", "Systemdenker:in"),
      unlocked: completed.has("chain-builder"),
    },
    {
      id: "resilience-planner",
      label: bi("Resilience planner", "Resilienz-Planer:in"),
      unlocked: completed.has("city-builder") && completed.has("reef-rescue"),
    },
    {
      id: "climate-council",
      label: bi("Climate Council", "Klimarat"),
      unlocked: completed.has("climate-council"),
    },
  ];
}

function learningGameCompletionLabel(gameId) {
  return learningGameIndex(gameId) === activeLearningGameIds().length - 1
    ? t("learn.gameFinishPath")
    : t("learn.gameUnlockNext");
}

function gameScoreValue(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function contrastText(hexColor) {
  const color = String(hexColor).replace("#", "");
  if (!/^[a-f0-9]{6}$/i.test(color)) return "#ffffff";
  const [red, green, blue] = [0, 2, 4].map((index) => parseInt(color.slice(index, index + 2), 16));
  const luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;
  return luminance > 0.58 ? "#10211d" : "#ffffff";
}

function cityPlanTotal() {
  return cityBuilderControls.reduce((sum, item) => sum + (state.cityPlan[item.id] || 0), 0);
}

function changeCityPlan(id, change) {
  if (!cityBuilderControls.some((item) => item.id === id)) return false;
  const current = state.cityPlan[id] || 0;
  const next = current + change;
  if (next < 0 || next > 6 || (change > 0 && cityPlanTotal() >= CITY_BUDGET)) return false;
  state.cityPlan[id] = next;
  return true;
}

function cityMetric(metric) {
  const base = metric === "fairness" ? 18 : 14;
  return gameScoreValue(
    base +
      cityBuilderControls.reduce(
        (sum, item) => sum + (state.cityPlan[item.id] || 0) * (item.effects[metric] || 0),
        0
      )
  );
}

function selectedReefActions() {
  return reefActionCards.filter((item) => state.reefActions.includes(item.id));
}

function reefBudgetUsed() {
  return selectedReefActions().reduce((sum, item) => sum + item.cost, 0);
}

function toggleReefAction(id) {
  const action = reefActionCards.find((item) => item.id === id);
  if (!action) return false;
  if (state.reefActions.includes(id)) {
    state.reefActions = state.reefActions.filter((item) => item !== id);
    return true;
  }
  if (reefBudgetUsed() + action.cost > REEF_BUDGET) return false;
  state.reefActions.push(id);
  return true;
}

function activeReefSynergies() {
  const selected = new Set(state.reefActions);
  return reefSynergies.filter((synergy) => synergy.pair.every((id) => selected.has(id)));
}

function reefMetric(metric) {
  const base = metric === "pressure" ? 16 : 24;
  const synergyBonus = activeReefSynergies()
    .filter((synergy) => synergy.metric === metric)
    .reduce((sum, synergy) => sum + synergy.bonus, 0);
  return gameScoreValue(
    base +
      synergyBonus +
      selectedReefActions().reduce((sum, item) => sum + (item[metric] || 0), 0)
  );
}

function cityGameSolved(metrics, average) {
  return (
    average >= CITY_GAME_TARGET &&
    Object.values(metrics).every((value) => value >= CITY_METRIC_FLOOR) &&
    cityPlanTotal() === CITY_BUDGET
  );
}

function reefGameSolved(recovery, pressure, community, average) {
  return (
    average >= REEF_GAME_TARGET &&
    [recovery, pressure, community].every((value) => value >= REEF_METRIC_FLOOR) &&
    activeReefSynergies().length >= 1
  );
}

function weakestMetricId(metrics) {
  return Object.entries(metrics).reduce(
    (weakest, entry) => (entry[1] < weakest[1] ? entry : weakest),
    Object.entries(metrics)[0]
  )[0];
}

function puzzleFeedbackText(feedback, metricLabels) {
  if (!feedback) return t("learn.gameHiddenGoalIntro");
  if (feedback.reason === "budget") {
    return formatLearningText(t("learn.gameUseFullBudget"), { count: feedback.remaining });
  }
  if (feedback.reason === "category") return t("learn.gameKeepEveryCategory");
  if (feedback.reason === "synergy") return t("learn.gameFindSynergy");
  if (feedback.reason === "weak") {
    return formatLearningText(t("learn.gameWeakestArea"), {
      area: metricLabels[feedback.metric] || feedback.metric,
    });
  }
  return t("learn.gameNeedsBalance");
}

function gameTipText(game, metricLabels = {}) {
  const tips = learningGameTips[game];
  if (!tips) return null;

  if (game === "sdg-sprint") {
    const selected = state.sdgSprintAnswers[state.sdgSprintIndex];
    const round = sdgSprintRounds[state.sdgSprintIndex];
    return localizedValue(selected !== undefined && selected !== round?.answer ? tips.retry : tips.initial);
  }

  if (game === "chain-builder") {
    if (state.chainFeedback === "wrong" || state.chainFeedback === "broken") {
      return localizedValue(tips.retry);
    }
    return localizedValue(state.chainPicks.length ? tips.progress : tips.initial);
  }

  const feedback = state.puzzleFeedback[game === "city-builder" ? "city" : game === "reef-rescue" ? "reef" : "climate"];
  if (!feedback) return localizedValue(tips.initial);
  if (feedback.reason === "budget") {
    return localizedValue(tips.budget);
  }
  if (feedback.reason === "category") {
    return localizedValue(tips.category);
  }
  if (feedback.reason === "synergy") {
    return localizedValue(tips.synergy);
  }
  if (feedback.reason === "weak") {
    return formatLearningText(localizedValue(tips.weak), {
      area: metricLabels[feedback.metric] || feedback.metric,
    });
  }
  return localizedValue(tips.balance);
}

function renderGameTip(game, metricLabels) {
  const tips = learningGameTips[game];
  const text = gameTipText(game, metricLabels);
  if (!tips || !text) return "";
  return `
    <aside class="game-tip" data-game-tip data-game-tip-for="${escapeHtml(game)}">
      <div>
        <span aria-hidden="true">✦</span>
        <strong>${escapeHtml(localizedValue(tips.title))}</strong>
      </div>
      <p>${escapeHtml(text)}</p>
    </aside>
  `;
}

function renderPuzzleGate(game, metricLabels) {
  const attempts = state.puzzleAttempts[game] || 0;
  const feedback = state.puzzleFeedback[game];
  const gameIds = {
    city: "city-builder",
    reef: "reef-rescue",
    climate: "climate-council",
  };
  const complete = isLearningGameComplete(gameIds[game]);
  if (complete) {
    return `
      <div class="puzzle-gate is-solved" role="status">
        <div>
          <span aria-hidden="true">✓</span>
          <div>
            <strong>${escapeHtml(t("learn.gameCongratulations"))}</strong>
            <p>${escapeHtml(t("learn.gameCongratulationsText"))}</p>
          </div>
        </div>
        <small>${escapeHtml(
          formatLearningText(t("learn.gameAttempts"), { count: attempts })
        )}</small>
      </div>
    `;
  }
  return `
    <div class="puzzle-gate${feedback ? " has-result" : ""}" role="status">
      <div>
        <span aria-hidden="true">?</span>
        <div>
          <strong>${escapeHtml(t("learn.gameHiddenGoal"))}</strong>
          <p>${escapeHtml(puzzleFeedbackText(feedback, metricLabels))}</p>
        </div>
      </div>
      <small>${escapeHtml(
        formatLearningText(t("learn.gameAttempts"), { count: attempts })
      )}</small>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function apiRequest(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (options.auth) {
    headers.Authorization = `Bearer ${state.publisherToken}`;
  }

  const requestOptions = {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  };
  let fallbackError = null;

  for (const base of API_BASES) {
    const url = base.endsWith("=") ? `${base}${encodeURIComponent(path)}` : `${base}${path}`;

    try {
      const response = await fetch(url, requestOptions);
      const isJson = response.headers.get("content-type")?.includes("application/json");
      const payload = isJson ? await response.json().catch(() => ({})) : {};

      if (response.ok && isJson) {
        return payload;
      }

      const error = new Error(payload.error || "Request failed.");
      error.status = response.status;
      fallbackError = error;

      if (response.status !== 404 && response.status !== 405 && isJson) {
        throw error;
      }
    } catch (error) {
      fallbackError = error;

      if (error.status && error.status !== 404 && error.status !== 405) {
        throw error;
      }
    }
  }

  throw fallbackError || new Error("Backend is not reachable.");
}

async function loadArticlesFromBackend() {
  try {
    const payload = await apiRequest("/articles");
    state.publishedArticles = Array.isArray(payload.articles) ? payload.articles : [];
    renderArticles();
    if (state.activeArticleId) syncArticleModalToRoute();
    return true;
  } catch {
    state.publishedArticles = [];
    renderArticles();
    return false;
  }
}

async function loadStaticArticles() {
  try {
    const articleFiles = [
      "content/articles.json?v=20260727-1",
      "content/articles-2026-expansion.json?v=20260727-1",
    ];
    const payloads = await Promise.all(
      articleFiles.map(async (url) => {
        const response = await fetch(url, { cache: "no-cache" });
        if (!response.ok) throw new Error("Static article corpus is not available.");
        const payload = await response.json();
        return Array.isArray(payload) ? payload : [];
      })
    );
    articles.splice(0, articles.length, ...payloads.flat());
    renderArticles();
    if (state.activeArticleId) syncArticleModalToRoute();
    return true;
  } catch {
    articles.splice(0, articles.length);
    renderArticles();
    return false;
  }
}

function allArticles() {
  const uniqueArticles = new Map();
  [...state.publishedArticles, ...articles].forEach((article) => {
    if (article?.id && !uniqueArticles.has(article.id)) {
      uniqueArticles.set(article.id, article);
    }
  });
  return [...uniqueArticles.values()];
}

function sortedArticles() {
  return allArticles().sort((a, b) => {
    const timeA = Date.parse(a.publishAt || `${a.date}T12:00:00`);
    const timeB = Date.parse(b.publishAt || `${b.date}T12:00:00`);
    return timeB - timeA;
  });
}

function getCategory(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

function getPhoto(id) {
  return photoSources.find((photo) => photo.id === id) || photoSources[0];
}

function getArticlePhoto(article) {
  if (String(article.imageId || "").startsWith("upload:")) {
    const filename = String(article.imageId).slice("upload:".length);
    return {
      src: `uploads/${encodeURIComponent(filename)}`,
      credit: article.imageCredit || "CYRI",
      sourceUrl: "",
      label: {
        en: "Article cover photo",
        de: "Artikel-Coverfoto",
      },
    };
  }

  return getPhoto(article.imageId);
}

function renderPhotoCredit(photo) {
  const credit = escapeHtml(photo.credit || "CYRI");
  if (!photo.sourceUrl) return credit;
  return `<a href="${escapeHtml(photo.sourceUrl)}" target="_blank" rel="noreferrer">${credit}</a>`;
}

function formatDate(date) {
  const locale = state.lang === "de" ? "de-DE" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function toLocalDateTimeValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function updatePublishScheduleControls() {
  const later = document.querySelector('input[name="publishMode"][value="later"]')?.checked;
  const timeWrap = document.querySelector("[data-publish-time-wrap]");
  const timeInput = document.querySelector("[data-publish-at]");
  const submitButton = document.querySelector("[data-publish-submit]");
  const now = new Date();

  if (!timeWrap || !timeInput || !submitButton) return;

  timeWrap.hidden = !later;
  timeInput.required = Boolean(later);
  timeInput.min = toLocalDateTimeValue(now);

  if (later && !timeInput.value) {
    timeInput.value = toLocalDateTimeValue(new Date(now.getTime() + 60 * 60 * 1000));
  }

  submitButton.textContent = t(later ? "publish.scheduleSubmit" : "publish.submit");
}

function updateRouteLinks() {
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.href = `${window.location.pathname}#main`;
  }
  document.querySelectorAll("[data-route-link]").forEach((link) => {
    const destination = link.dataset.routeLink;
    link.href = pageRoutePath(destination, state.lang);
    if (destination === "home") {
      link.setAttribute(
        "aria-label",
        state.lang === "de" ? "CYRI Startseite" : "CYRI home"
      );
    }
  });
}

function updateLearnNeonAccessibility() {
  const toggle = document.querySelector("[data-learn-neon-toggle]");
  if (!toggle) return;
  const isOn = toggle.classList.contains("is-neon-on");
  toggle.setAttribute("aria-pressed", String(isOn));
  toggle.setAttribute(
    "aria-label",
    t(isOn ? "accessibility.learnNeonOff" : "accessibility.learnNeonOn")
  );
}

function updateStaticText() {
  document.documentElement.lang = state.lang;
  updateSeo();

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  updateLearnNeonAccessibility();

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langButton === state.lang);
    button.setAttribute("aria-pressed", String(button.dataset.langButton === state.lang));
  });

  updateRouteLinks();
  updateAudienceInterface();
}

function renderAudienceSwitch(container, labelPath) {
  if (!container) return;
  const audience = activeAudience();
  container.innerHTML = `
    <span>${escapeHtml(t(labelPath))}</span>
    <div class="audience-options" role="group" aria-label="${escapeHtml(t(labelPath))}">
      <button
        type="button"
        data-audience-select="children"
        aria-pressed="${audience === "children"}"
        class="${audience === "children" ? "is-active" : ""}"
      >
        ${escapeHtml(t("audience.children"))}
      </button>
      <button
        type="button"
        data-audience-select="adults"
        aria-pressed="${audience === "adults"}"
        class="${audience === "adults" ? "is-active" : ""}"
      >
        ${escapeHtml(t("audience.adults"))}
      </button>
    </div>
  `;
}

function updateAudienceGate() {
  const gate = document.querySelector("[data-audience-gate]");
  if (!gate) return;
  const shouldOpen = false;
  gate.hidden = !shouldOpen;
  gate.setAttribute("aria-hidden", String(!shouldOpen));
  document.body.classList.toggle("audience-gate-open", shouldOpen);

  if (shouldOpen) {
    requestAnimationFrame(() => gate.querySelector("[data-audience-select]")?.focus());
  }
}

function updateAudienceInterface() {
  document.body.dataset.audience = activeAudience();
  renderAudienceSwitch(
    document.querySelector("[data-learning-audience-switch]"),
    "audience.switchLabel"
  );
  renderAudienceSwitch(
    document.querySelector("[data-article-audience-switch]"),
    "audience.articleLabel"
  );

  const learningCopy = t(`audience.learning.${activeAudience()}`);
  document.querySelectorAll("[data-audience-copy]").forEach((element) => {
    const value = learningCopy?.[element.dataset.audienceCopy];
    if (value) element.textContent = value;
  });

  const articleNote = document.querySelector("[data-article-audience-note]");
  if (articleNote) {
    articleNote.textContent = t(
      isChildrenMode() ? "audience.childrenNote" : "audience.adultsNote"
    );
  }

  updateAudienceGate();
}

function setAudience(audience) {
  if (!["children", "adults"].includes(audience)) return;
  state.audience = audience;
  localStorage.setItem(AUDIENCE_KEY, audience);
  updateStaticText();
  renderDynamicContent();
}

function updateSeo() {
  const seo = content[state.lang].seo.pages[state.page] || content[state.lang].seo;
  const article =
    state.page === "articles" && state.activeArticleId
      ? allArticles().find((item) => item.id === state.activeArticleId)
      : null;
  const articleCopy = article ? localizedArticle(article) : null;
  const pageTitle = articleCopy ? `${articleCopy.title} | CYRI` : seo.title;
  const pageDescription = articleCopy?.summary || seo.description;
  const pageUrl = routeAbsoluteUrl(
    state.page,
    state.lang,
    article?.id || null
  );
  const alternatePage = state.page === "publish" ? "publish" : state.page;
  const alternateDe = routeAbsoluteUrl(alternatePage, "de", article?.id || null);
  const alternateEn = routeAbsoluteUrl(alternatePage, "en", article?.id || null);
  document.title = pageTitle;
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogType = document.querySelector('meta[property="og:type"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
  const canonical = document.querySelector('link[rel="canonical"]');
  const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
  let robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement("meta");
    robots.name = "robots";
    document.head.append(robots);
  }
  if (description) description.content = pageDescription;
  if (ogTitle) ogTitle.content = pageTitle;
  if (ogDescription) ogDescription.content = pageDescription;
  if (ogType) ogType.content = article ? "article" : "website";
  if (ogUrl) ogUrl.content = pageUrl;
  if (ogLocale) ogLocale.content = state.lang === "de" ? "de_DE" : "en_GB";
  if (twitterTitle) twitterTitle.content = pageTitle;
  if (twitterDescription) twitterDescription.content = pageDescription;
  if (canonical) canonical.href = pageUrl;
  alternateLinks.forEach((link) => {
    const language = link.getAttribute("hreflang");
    link.href = language === "de" ? alternateDe : language === "en" ? alternateEn : SITE_ORIGIN;
  });
  const defaultImage = `${SITE_ORIGIN}/assets/photos/coral-reef-bleaching-hd.webp`;
  const articleImage = article ? new URL(getArticlePhoto(article).src, SITE_ORIGIN).toString() : "";
  const socialImage = articleImage || defaultImage;
  const socialImageAlt = articleCopy?.title || t("hero.imageAlt");
  if (ogImage) ogImage.content = socialImage;
  if (ogImageAlt) ogImageAlt.content = socialImageAlt;
  if (twitterImage) twitterImage.content = socialImage;
  if (twitterImageAlt) twitterImageAlt.content = socialImageAlt;
  robots.content =
    state.page === "publish"
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  updateStructuredData(article, pageUrl, pageTitle, pageDescription, socialImage);
}

function updateStructuredData(article, pageUrl, pageTitle, pageDescription, socialImage) {
  const node = document.querySelector("#seo-structured-data");
  if (!node) return;
  const graph = [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: "CYRI",
      alternateName: "Climate Youth Research Initiative",
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/assets/cyri-logo.svg`,
      description:
        state.lang === "de"
          ? "Jugendgeführte Umweltbildung zu Klima, Natur und den 17 Nachhaltigkeitszielen."
          : "Youth-led environmental education about climate, nature and the 17 Sustainable Development Goals.",
      areaServed: "Germany",
      email: "climateyri@gmail.com",
      founder: [
        { "@type": "Person", name: "Tobias Göppert" },
      ],
      sameAs: [
        "https://www.instagram.com/cyri.de/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: "CYRI",
      alternateName: "Climate Youth Research Initiative",
      inLanguage: ["de", "en"],
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ];

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: pageUrl,
      headline: localizedValue(article.title),
      description: localizedValue(article.summary),
      image: [socialImage],
      datePublished: article.date,
      dateModified: article.updatedAt?.slice(0, 10) || article.date,
      inLanguage: state.lang,
      isAccessibleForFree: true,
      author: { "@id": `${SITE_ORIGIN}/#organization` },
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    });
  } else if (state.page === "learn") {
    graph.push({
      "@type": "LearningResource",
      "@id": `${pageUrl}#learning-resource`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      inLanguage: state.lang,
      isAccessibleForFree: true,
      educationalLevel: "Secondary education",
      typicalAgeRange: "15-19",
      learningResourceType: ["Interactive learning", "Educational game"],
      about: [
        "Environmental education",
        "Climate education",
        "Sustainable Development Goals",
      ],
      provider: { "@id": `${SITE_ORIGIN}/#organization` },
    });
  }

  node.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function renderMissionFocus() {
  const container = document.querySelector("[data-mission-focus]");
  container.innerHTML = t("mission.focus")
    .map(
      (item, index) => `
        <article class="focus-card">
          <span class="focus-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function formatLearningText(template, values) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replace(`{${key}}`, String(value)),
    template
  );
}

function saveLearningProgress() {
  localStorage.setItem(
    LEARNING_PROGRESS_KEY,
    JSON.stringify({
      ...state.learningProgress,
      quizIndex: state.quizIndex,
      quizAnswers: state.quizAnswers,
      quizComplete: state.quizComplete,
      quizLength: state.quizLength,
      discoveredConcepts: state.learningProgress.discoveredConcepts,
      lastTopic: state.learningTopic,
    })
  );
}

function saveMissionLabState() {
  localStorage.setItem(
    MISSION_STATE_KEY,
    JSON.stringify({
      focus: state.activeMissionFocus,
      role: state.activeMissionRole,
      pace: state.activeMissionPace,
    })
  );
}

function markLearningTopicVisited(topicId) {
  if (!state.learningProgress.visitedTopics.includes(topicId)) {
    state.learningProgress.visitedTopics.push(topicId);
  }
  saveLearningProgress();
}

function selectLearningTopic(topicId, shouldScroll = false) {
  state.learningTopic = topicId;
  state.activeConcept = null;
  markLearningTopicVisited(topicId);
  renderLearningTopics();

  if (shouldScroll) {
    document.querySelector(".topic-explorer")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

function markLearningArticleRead(articleId) {
  const learningArticle = learningTopics.some((topic) => topic.articleId === articleId);
  if (learningArticle && !state.learningProgress.readArticles.includes(articleId)) {
    state.learningProgress.readArticles.push(articleId);
    saveLearningProgress();
  }
}

function renderLearningPaths() {
  const container = document.querySelector("[data-learning-paths]");
  if (!container) return;
  container.innerHTML = t("learningIntro.paths")
    .map(
      (path) => `
        <article class="learning-path-card">
          <span class="learning-step">${escapeHtml(path.step)}</span>
          <h3>${escapeHtml(path.title)}</h3>
          <p>${escapeHtml(path.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderHomepageSdgs() {
  const education = document.querySelector("[data-home-sdg-education]");
  const goals = document.querySelector("[data-home-sdg-goals]");
  if (!education || !goals) return;

  education.style.setProperty("--sdg-color", getSdgGoal(4).color);
  education.innerHTML = `
    <span class="home-sdg-education-badge">${escapeHtml(t("homeSdgs.educationBadge"))}</span>
    <h3>${escapeHtml(t("homeSdgs.educationTitle"))}</h3>
    <p>${escapeHtml(t("homeSdgs.educationText"))}</p>
    <ul>
      ${t("homeSdgs.educationPoints")
        .map((point) => `<li>${escapeHtml(point)}</li>`)
        .join("")}
    </ul>
  `;

  goals.innerHTML = sdgGoals
    .map(
      (goal) => `
        <button
          class="home-sdg-goal${goal.number === 4 ? " is-education" : ""}"
          type="button"
          data-home-sdg-goal="${goal.number}"
          aria-label="${escapeHtml(
            formatLearningText(t("homeSdgs.goalAria"), {
              number: goal.number,
              title: localizedValue(goal.title),
            })
          )}"
          style="--sdg-color: ${goal.color}; --sdg-ink: ${contrastText(goal.color)}"
        >
          <span>${goal.number}</span>
          <strong>${escapeHtml(localizedValue(goal.title))}</strong>
          <small>${escapeHtml(t("homeSdgs.openGoal"))} →</small>
        </button>
      `
    )
    .join("");
}

function homeSdgLogoPath(number) {
  return `assets/sdg/E_SDG_Icons-${String(number).padStart(2, "0")}.jpg`;
}

function updateHomepageSdgModal() {
  const modal = document.querySelector("[data-home-sdg-modal]");
  if (!modal || !state.activeHomeSdg) return;
  const goal = getSdgGoal(state.activeHomeSdg);
  const title = localizedValue(goal.title);
  const modalPanel = modal.querySelector("[data-home-sdg-modal-panel]");
  modalPanel.style.setProperty("--sdg-color", goal.color);
  modalPanel.style.setProperty("--sdg-ink", contrastText(goal.color));
  modal.querySelector("[data-home-sdg-modal-eyebrow]").textContent = formatLearningText(
    t("homeSdgs.detailEyebrow"),
    { number: goal.number }
  );
  modal.querySelector("[data-home-sdg-modal-title]").textContent = title;
  modal.querySelector("[data-home-sdg-modal-short]").textContent = localizedValue(goal.short);
  modal.querySelector("[data-home-sdg-modal-focus-label]").textContent = t(
    "homeSdgs.detailWhy"
  );
  modal.querySelector("[data-home-sdg-modal-focus]").textContent = localizedValue(goal.focus);
  modal.querySelector("[data-home-sdg-modal-question-label]").textContent = t(
    "homeSdgs.detailQuestion"
  );
  modal.querySelector("[data-home-sdg-modal-question]").textContent = localizedValue(
    goal.question
  );
  const image = modal.querySelector("[data-home-sdg-modal-image]");
  image.src = homeSdgLogoPath(goal.number);
  image.alt = formatLearningText(t("homeSdgs.logoAlt"), {
    number: goal.number,
    title,
  });
  const officialLink = modal.querySelector("[data-home-sdg-modal-link]");
  officialLink.href = `https://sdgs.un.org/goals/goal${goal.number}`;
  officialLink.textContent = t("homeSdgs.officialLink");
  modal.querySelector("[data-home-sdg-modal-note]").textContent = t(
    "homeSdgs.officialNote"
  );
}

function openHomepageSdg(number) {
  homeSdgModalReturnFocus =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;
  state.activeHomeSdg = getSdgGoal(number).number;
  updateHomepageSdgModal();
  const modal = document.querySelector("[data-home-sdg-modal]");
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  modal.querySelector("[data-home-sdg-modal-close]").focus();
}

function closeHomepageSdg() {
  const modal = document.querySelector("[data-home-sdg-modal]");
  state.activeHomeSdg = null;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  homeSdgModalReturnFocus?.focus();
  homeSdgModalReturnFocus = null;
}

function markConceptDiscovered(topicId, conceptIndex) {
  const discovered = state.learningProgress.discoveredConcepts[topicId] || [];
  if (!discovered.includes(conceptIndex)) {
    state.learningProgress.discoveredConcepts[topicId] = [...discovered, conceptIndex];
  }
  state.activeConcept = conceptIndex;
  saveLearningProgress();
}

function renderLearningTopics() {
  const selector = document.querySelector("[data-learning-topics]");
  const detail = document.querySelector("[data-learning-detail]");
  if (!selector || !detail) return;

  const activeTopic =
    learningTopics.find((topic) => topic.id === state.learningTopic) || learningTopics[0];
  selector.innerHTML = learningTopics
    .map((topic) => {
      const photo = getPhoto(topic.imageId);
      const active = topic.id === activeTopic.id;
      return `
        <button
          class="topic-tab${active ? " is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${active}"
          data-learning-topic="${escapeHtml(topic.id)}"
        >
          <img src="${escapeHtml(photo.src)}" alt="" loading="lazy" />
          <span>${escapeHtml(topic.title[state.lang])}</span>
        </button>
      `;
    })
    .join("");

  const photo = getPhoto(activeTopic.imageId);
  const discovered = state.learningProgress.discoveredConcepts[activeTopic.id] || [];
  const topicFacts = learningTopicFacts(activeTopic);
  const activeConcept =
    Number.isInteger(state.activeConcept) &&
    state.activeConcept >= 0 &&
    state.activeConcept < activeTopic.concepts[state.lang].length
      ? state.activeConcept
      : null;
  detail.innerHTML = `
    <figure class="topic-visual">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.label[state.lang])}" />
      <figcaption>${renderPhotoCredit(photo)}</figcaption>
    </figure>
    <div class="topic-copy">
      <p class="eyebrow">${escapeHtml(activeTopic.title[state.lang])}</p>
      <h2>${escapeHtml(learningTopicValue(activeTopic, "question"))}</h2>
      <p>${escapeHtml(learningTopicValue(activeTopic, "intro"))}</p>
      <div class="topic-concepts">
        <div class="topic-concepts-heading">
          <strong>${escapeHtml(t("learn.concepts"))}</strong>
          <span>${escapeHtml(
            formatLearningText(t("learn.discoverProgress"), {
              complete: discovered.length,
              total: activeTopic.concepts[state.lang].length,
            })
          )}</span>
        </div>
        <div>
          ${activeTopic.concepts[state.lang]
            .map(
              (concept, index) => `
                <button
                  class="concept-button${activeConcept === index ? " is-active" : ""}${
                    discovered.includes(index) ? " is-discovered" : ""
                  }"
                  type="button"
                  data-learning-concept="${index}"
                  aria-pressed="${activeConcept === index}"
                >
                  <span aria-hidden="true">${discovered.includes(index) ? "✓" : index + 1}</span>
                  ${escapeHtml(concept)}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="concept-reveal${activeConcept === null ? " is-prompt" : ""}" aria-live="polite">
        ${
          activeConcept === null
            ? `
              <span class="concept-spark" aria-hidden="true">+</span>
              <p>${escapeHtml(t("learn.discoverHint"))}</p>
            `
            : `
              <div>
                <span>${escapeHtml(t("learn.discoverEyebrow"))}</span>
                <strong>${escapeHtml(activeTopic.concepts[state.lang][activeConcept])}</strong>
              </div>
              <p>${escapeHtml(topicFacts[activeConcept])}</p>
            `
        }
      </div>
      <section class="topic-lab" aria-label="${escapeHtml(t("learn.labEyebrow"))}">
        <div class="lab-charts" aria-hidden="true">
          ${activeTopic.lab.values
            .map(
              (value) => `
                <div class="lab-chart">
                  <span style="--lab-value: ${value}%"></span>
                  <strong>${value}%</strong>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="lab-legend">
          ${activeTopic.lab.metrics[state.lang]
            .map(
              (metric) => `
                <div class="lab-legend-item">
                  <i aria-hidden="true"></i>
                  <span>${escapeHtml(metric)}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
      <div class="topic-actions">
        <button
          class="button button-primary"
          type="button"
          data-article-id="${escapeHtml(activeTopic.articleId)}"
        >
          ${escapeHtml(t("learn.openArticle"))}
        </button>
        <button class="button button-secondary" type="button" data-open-learning-assistant>
          ${escapeHtml(t("learn.askAssistant"))}
        </button>
      </div>
    </div>
  `;
}

function renderExplainerTools() {
  const container = document.querySelector("[data-explainer-tools]");
  if (!container) return;

  const activeTool =
    explainerTools.find((tool) => tool.id === state.activeExplainerTool) || explainerTools[0];

  container.innerHTML = `
    <div class="explainer-tool-list" role="tablist" aria-label="${escapeHtml(
      t("learn.toolsEyebrow")
    )}">
      ${explainerTools
        .map((tool, index) => {
          const active = tool.id === activeTool.id;
          return `
            <button
              class="explainer-tool-button${active ? " is-active" : ""}"
              type="button"
              role="tab"
              aria-selected="${active}"
              data-explainer-tool="${escapeHtml(tool.id)}"
            >
              <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(localizedValue(tool.title))}</strong>
              <small>${escapeHtml(localizedValue(tool.prompt))}</small>
            </button>
          `;
        })
        .join("")}
    </div>
    <article class="explainer-tool-detail" aria-live="polite">
      <p class="eyebrow">${escapeHtml(t("learn.toolsPrompt"))}</p>
      <h3>${escapeHtml(localizedValue(activeTool.title))}</h3>
      <p>${escapeHtml(localizedValue(activeTool.prompt))}</p>
      <div class="explainer-example">
        <strong>${escapeHtml(t("learn.toolsExample"))}</strong>
        <p>${escapeHtml(localizedValue(activeTool.example))}</p>
      </div>
      <div class="explainer-steps">
        <strong>${escapeHtml(t("learn.toolsSteps"))}</strong>
        <ol>
          ${localizedValue(activeTool.steps)
            .map((step) => `<li>${escapeHtml(step)}</li>`)
            .join("")}
        </ol>
      </div>
    </article>
  `;
}

function boundedMissionMetric(value) {
  return Math.max(8, Math.min(96, Math.round(value)));
}

function activeMissionSelection() {
  const focus =
    missionFocuses.find((item) => item.id === state.activeMissionFocus) || missionFocuses[0];
  const role = missionRoles.find((item) => item.id === state.activeMissionRole) || missionRoles[0];
  const pace = missionPaces.find((item) => item.id === state.activeMissionPace) || missionPaces[0];
  return { focus, role, pace };
}

function missionMetricValues(focus, role, pace) {
  return focus.base.map((value, index) =>
    boundedMissionMetric(value + role.boosts[index] + pace.boosts[index])
  );
}

function renderMissionLab() {
  const container = document.querySelector("[data-mission-lab]");
  if (!container) return;

  const { focus, role, pace } = activeMissionSelection();
  const photo = getPhoto(focus.imageId);
  const topic = learningTopics.find((item) => item.id === focus.topicId) || learningTopics[0];
  const metricLabels = t("learn.missionMeters");
  const metricValues = missionMetricValues(focus, role, pace);
  const missionScore = Math.round(
    metricValues.reduce((sum, value) => sum + value, 0) / metricValues.length
  );
  const nodePositions = [
    { x: 50, y: 16 },
    { x: 78, y: 50 },
    { x: 50, y: 84 },
    { x: 22, y: 50 },
  ];
  const kitItems = [
    { label: t("learn.missionEvidence"), text: localizedValue(focus.evidence) },
    { label: t("learn.missionExperiment"), text: localizedValue(focus.experiment) },
    { label: t("learn.missionDiscussion"), text: localizedValue(focus.discussion) },
    { label: t("learn.missionShare"), text: localizedValue(focus.share) },
  ];
  const planItems = [
    { label: t("learn.missionEvidence"), text: localizedValue(focus.evidence) },
    { label: t("learn.missionRoleAction"), text: localizedValue(role.action) },
    { label: t("learn.missionDeliverable"), text: localizedValue(pace.deliverable) },
  ];

  container.innerHTML = `
    <div class="mission-lab-grid">
      <aside class="mission-control-panel">
        <div class="mission-control-group">
          <p class="eyebrow">${escapeHtml(t("learn.missionFocusLabel"))}</p>
          <div class="mission-focus-list" role="tablist" aria-label="${escapeHtml(
            t("learn.missionFocusLabel")
          )}">
            ${missionFocuses
              .map((item) => {
                const active = item.id === focus.id;
                const itemPhoto = getPhoto(item.imageId);
                return `
                  <button
                    class="mission-focus-button${active ? " is-active" : ""}"
                    type="button"
                    role="tab"
                    aria-selected="${active}"
                    data-mission-lab-focus="${escapeHtml(item.id)}"
                  >
                    <img src="${escapeHtml(itemPhoto.src)}" alt="" loading="lazy" />
                    <span>
                      <strong>${escapeHtml(localizedValue(item.title))}</strong>
                      <small>${escapeHtml(localizedValue(item.short))}</small>
                    </span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
        <div class="mission-control-group">
          <p class="eyebrow">${escapeHtml(t("learn.missionRoleLabel"))}</p>
          <div class="mission-segment-grid" role="group" aria-label="${escapeHtml(
            t("learn.missionRoleLabel")
          )}">
            ${missionRoles
              .map((item) => {
                const active = item.id === role.id;
                return `
                  <button
                    class="mission-segment${active ? " is-active" : ""}"
                    type="button"
                    data-mission-role="${escapeHtml(item.id)}"
                    aria-pressed="${active}"
                  >
                    <strong>${escapeHtml(localizedValue(item.title))}</strong>
                    <small>${escapeHtml(localizedValue(item.text))}</small>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
        <div class="mission-control-group">
          <p class="eyebrow">${escapeHtml(t("learn.missionPaceLabel"))}</p>
          <div class="mission-pace-row" role="group" aria-label="${escapeHtml(
            t("learn.missionPaceLabel")
          )}">
            ${missionPaces
              .map((item) => {
                const active = item.id === pace.id;
                return `
                  <button
                    class="mission-pace${active ? " is-active" : ""}"
                    type="button"
                    data-mission-pace="${escapeHtml(item.id)}"
                    aria-pressed="${active}"
                  >
                    ${escapeHtml(localizedValue(item.title))}
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
      </aside>

      <article class="mission-dashboard">
        <figure class="mission-photo">
          <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.label[state.lang])}" />
          <figcaption>${renderPhotoCredit(photo)}</figcaption>
        </figure>
        <div class="mission-dashboard-copy">
          <span class="mission-region">${escapeHtml(localizedValue(focus.region))}</span>
          <h3>${escapeHtml(localizedValue(focus.title))}</h3>
          <p>${escapeHtml(localizedValue(focus.problem))}</p>
          <div class="mission-signal">
            <strong>${escapeHtml(localizedValue(focus.signal))}</strong>
            <span>${escapeHtml(localizedValue(focus.goal))}</span>
          </div>
        </div>
        <div
          class="mission-holo"
          aria-label="${escapeHtml(t("learn.missionImpactMap"))}"
          style="--holo-score: ${missionScore}%; --pulse-speed: ${Math.max(
            3.2,
            7 - missionScore / 20
          )}s"
        >
          <div class="mission-holo-grid" aria-hidden="true"></div>
          <div class="mission-holo-ring mission-holo-ring-one" aria-hidden="true"></div>
          <div class="mission-holo-ring mission-holo-ring-two" aria-hidden="true"></div>
          <div class="mission-holo-core">
            <strong>${missionScore}</strong>
            <span>${escapeHtml(t("learn.missionImpactScore"))}</span>
          </div>
          ${metricLabels
            .map((label, index) => {
              const value = metricValues[index];
              const position = nodePositions[index];
              return `
                <span
                  class="mission-node mission-node-${index + 1}"
                  style="--node-x: ${position.x}%; --node-y: ${position.y}%; --node-strength: ${value}%"
                >
                  <strong>${value}%</strong>
                  <small>${escapeHtml(label)}</small>
                </span>
              `;
            })
            .join("")}
        </div>
        <section class="mission-model" aria-label="${escapeHtml(t("learn.missionModelTitle"))}">
          <div class="mission-score" style="--score: ${missionScore}%">
            <span>${missionScore}</span>
            <small>${escapeHtml(t("learn.missionImpactScore"))}</small>
          </div>
          <div class="mission-meter-list">
            ${metricLabels
              .map((label, index) => {
                const value = metricValues[index];
                return `
                  <div class="mission-meter">
                    <div>
                      <span>${escapeHtml(label)}</span>
                      <strong>${value}%</strong>
                    </div>
                    <i style="width: ${value}%"></i>
                  </div>
                `;
              })
              .join("")}
          </div>
          <p>${escapeHtml(t("learn.missionModelNote"))}</p>
        </section>
      </article>
    </div>

    <div class="mission-output-grid">
      <section class="mission-kit">
        <div class="mission-output-heading">
          <p class="eyebrow">${escapeHtml(t("learn.missionKitTitle"))}</p>
          <h3>${escapeHtml(localizedValue(topic.title))}</h3>
        </div>
        <div class="mission-kit-grid">
          ${kitItems
            .map(
              (item, index) => `
                <article class="mission-kit-item">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <strong>${escapeHtml(item.label)}</strong>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="mission-plan">
        <div class="mission-output-heading">
          <p class="eyebrow">${escapeHtml(t("learn.missionPlanTitle"))}</p>
          <h3>${escapeHtml(localizedValue(pace.title))}</h3>
          <p>${escapeHtml(localizedValue(pace.text))}</p>
        </div>
        <ol class="mission-plan-list">
          ${planItems
            .map(
              (item) => `
                <li>
                  <strong>${escapeHtml(item.label)}</strong>
                  <span>${escapeHtml(item.text)}</span>
                </li>
              `
            )
            .join("")}
        </ol>
        <div class="mission-actions">
          <button
            class="button button-secondary"
            type="button"
            data-mission-open-topic="${escapeHtml(focus.topicId)}"
          >
            ${escapeHtml(t("learn.missionOpenTopic"))}
          </button>
          <button
            class="button button-secondary"
            type="button"
            data-mission-open-article="${escapeHtml(focus.articleId)}"
          >
            ${escapeHtml(t("learn.missionOpenArticle"))}
          </button>
          <button class="button button-secondary" type="button" data-mission-ask>
            ${escapeHtml(t("learn.missionAskAssistant"))}
          </button>
          <button class="button button-primary" type="button" data-mission-save>
            ${escapeHtml(t("learn.missionSave"))}
          </button>
        </div>
        ${
          state.learningProgress.missionBuilt
            ? `<p class="mission-saved">${escapeHtml(t("learn.missionSaved"))}</p>`
            : ""
        }
      </section>
    </div>
  `;
}

function renderSdgLab() {
  const container = document.querySelector("[data-sdg-lab]");
  if (!container) return;

  const activeGoal = getSdgGoal(state.activeSdg);
  const connectedHotspots = connectedSdgHotspots(activeGoal);

  container.innerHTML = `
    <div
      class="sdg-grid"
      role="list"
      aria-label="${escapeHtml(t("learn.sdgAria"))}"
    >
      ${sdgGoals
        .map((goal) => {
          const active = goal.number === activeGoal.number;
          return `
            <button
              class="sdg-card${active ? " is-active" : ""}"
              type="button"
              role="listitem"
              data-sdg-goal="${goal.number}"
              aria-pressed="${active}"
              style="--sdg-color: ${goal.color}; --sdg-ink: ${contrastText(goal.color)}"
            >
              <span>SDG ${goal.number}</span>
              <strong>${escapeHtml(localizedValue(goal.title))}</strong>
              <small>${escapeHtml(localizedValue(goal.short))}</small>
            </button>
          `;
        })
        .join("")}
    </div>
    <article class="sdg-detail" style="--sdg-color: ${activeGoal.color}; --sdg-ink: ${contrastText(activeGoal.color)}">
      <div class="sdg-detail-heading">
        <span>SDG ${activeGoal.number}</span>
        <h3>${escapeHtml(localizedValue(activeGoal.title))}</h3>
      </div>
      <p>${escapeHtml(localizedValue(activeGoal.short))}</p>
      <div class="sdg-info-grid">
        <div>
          <strong>${escapeHtml(t("learn.sdgWhy"))}</strong>
          <p>${escapeHtml(localizedValue(activeGoal.focus))}</p>
        </div>
        <div>
          <strong>${escapeHtml(t("learn.sdgQuestion"))}</strong>
          <p>${escapeHtml(localizedValue(activeGoal.question))}</p>
        </div>
      </div>
      <div class="sdg-map-links">
        <strong>${escapeHtml(t("learn.sdgConnections"))}</strong>
        ${
          connectedHotspots.length
            ? `<div>
                ${connectedHotspots
                  .map(
                    (hotspot) => `
                      <button
                        class="sdg-hotspot-button"
                        type="button"
                        data-sdg-hotspot="${escapeHtml(hotspot.id)}"
                      >
                        <span>${escapeHtml(localizedValue(hotspot.tag))}</span>
                        <strong>${escapeHtml(localizedValue(hotspot.title))}</strong>
                        <small>${escapeHtml(t("learn.sdgMapButton"))}</small>
                      </button>
                    `
                  )
                  .join("")}
              </div>`
            : `<p>${escapeHtml(t("learn.sdgNoConnection"))}</p>`
        }
      </div>
    </article>
  `;
}

function renderGameMeter(label, value) {
  return `
    <div class="game-meter">
      <div>
        <span>${escapeHtml(label)}</span>
        <strong>${value}%</strong>
      </div>
      <i style="width: ${value}%"></i>
    </div>
  `;
}

function renderGameTarget(average, target, solved, outcome = "", rules = []) {
  const remaining = Math.max(0, target - average);
  const status = solved
    ? t("learn.gameTargetReached")
    : formatLearningText(t("learn.gameTargetRemaining"), { count: remaining });
  return `
    <div class="game-target-status${solved ? " is-reached" : ""}" role="status">
      <div class="game-target-heading">
        <span>${escapeHtml(formatLearningText(t("learn.gameTargetAt"), { count: target }))}</span>
        <strong>${average}%</strong>
      </div>
      <div
        class="game-target-track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${average}"
        aria-valuetext="${escapeHtml(status)}"
      >
        <i style="width: ${average}%"></i>
        <b style="left: ${target}%" aria-hidden="true"></b>
      </div>
      <p>${escapeHtml(status)}</p>
      ${rules
        .map(
          (rule) => `
            <p class="game-rule ${rule.met ? "is-met" : "is-open"}">
              <b aria-hidden="true">${rule.met ? "✓" : "!"}</b> ${escapeHtml(rule.text)}
            </p>
          `
        )
        .join("")}
      ${solved && outcome ? `<small>${escapeHtml(outcome)}</small>` : ""}
    </div>
  `;
}

function renderLearning3DStage(type, average) {
  return `
    <div class="learning-model-band">
      <div class="learning-model-stage" data-learning-3d="${escapeHtml(type)}"></div>
      <div class="learning-model-score" aria-hidden="true">
        <span>${escapeHtml(t("learn.gameLiveModel"))}</span>
        <strong>${average}%</strong>
      </div>
    </div>
  `;
}

// Nach der Antwort wird die eigene Wahl der passenden gegenuebergestellt, damit
// auch ein Fehlversuch zeigt, worum es bei beiden Zielen geht.
let sprintAdvanceTimer = 0;

function advanceSdgSprint() {
  const round = sdgSprintRounds[state.sdgSprintIndex] || sdgSprintRounds[0];
  if (state.sdgSprintAnswers[state.sdgSprintIndex] !== round.answer) return;

  if (state.sdgSprintIndex < sdgSprintRounds.length - 1) {
    state.sdgSprintIndex += 1;
  } else {
    completeLearningGame("sdg-sprint");
  }
  renderLearningGames();
}

function renderSprintOutcome(round, selected, correct) {
  const picked = getSdgGoal(selected);
  const target = getSdgGoal(round.answer);
  const cards = correct
    ? [[t("learn.sprintFits"), target]]
    : [
        [t("learn.sprintYourPick"), picked],
        [t("learn.sprintFits"), target],
      ];

  return `
    <div class="sprint-outcome">
      ${cards
        .map(
          ([label, goal]) => `
            <article class="sprint-outcome-card" style="--game-color: ${goal.color}">
              <span>${escapeHtml(label)}</span>
              <strong>SDG ${goal.number} · ${escapeHtml(localizedValue(goal.title))}</strong>
            </article>
          `
        )
        .join("")}
    </div>
    <p class="sprint-outcome-fact">
      <em>${escapeHtml(t("learn.sprintEffect"))}</em>
      ${escapeHtml(localizedValue(round.fact))}
    </p>
  `;
}

function renderSdgSprintGame() {
  if (!state.sdgSprintStarted) {
    return `
      <div class="game-play-panel game-start-panel">
        ${renderGameTip("sdg-sprint")}
        <button class="button button-primary game-start-button" type="button" data-sdg-sprint-start>
          ${escapeHtml(t("learn.gameStart"))}
        </button>
      </div>
    `;
  }

  const round = sdgSprintRounds[state.sdgSprintIndex] || sdgSprintRounds[0];
  const selected = state.sdgSprintAnswers[state.sdgSprintIndex];
  const answered = Number.isInteger(selected);
  const correct = selected === round.answer;
  const lastRound = state.sdgSprintIndex === sdgSprintRounds.length - 1;
  const score = state.sdgSprintAnswers.reduce(
    (sum, answer, index) => sum + (answer === sdgSprintRounds[index]?.answer ? 1 : 0),
    0
  );

  return `
    <div class="game-play-panel">
      <div class="game-status-row">
        <span>${escapeHtml(
          formatLearningText(t("learn.gameRound"), {
            current: state.sdgSprintIndex + 1,
            total: sdgSprintRounds.length,
          })
        )}</span>
        <strong>${escapeHtml(t("learn.gameScore"))}: ${score}/${sdgSprintRounds.length}</strong>
      </div>
      <div class="game-prompt">
        <p>${escapeHtml(localizedValue(round.prompt))}</p>
      </div>
      <div class="game-choice-grid">
        ${round.options
          .map((number) => {
            const goal = getSdgGoal(number);
            let className = "game-choice";
            if (answered && correct && number === round.answer) className += " is-correct";
            if (answered && number === selected && number !== round.answer) className += " is-wrong";
            return `
              <button
                class="${className}"
                type="button"
                data-sdg-sprint-option="${number}"
                ${answered ? "disabled" : ""}
                style="--game-color: ${goal.color}; --game-ink: ${contrastText(goal.color)}"
              >
                <span>SDG ${number}</span>
                <strong>${escapeHtml(localizedValue(goal.title))}</strong>
              </button>
            `;
          })
          .join("")}
      </div>
      ${
        answered
          ? `<div class="game-feedback ${correct ? "is-correct" : "is-wrong"}">
              <strong>${escapeHtml(
                t(correct ? "learn.gameCorrect" : "learn.incorrect")
              )}</strong>
              ${renderSprintOutcome(round, selected, correct)}
            </div>
            ${
              correct
                ? `<p class="game-autonext" aria-live="polite">${escapeHtml(
                    t(lastRound ? "learn.gameFinishing" : "learn.gameAutoNext")
                  )}</p>`
                : `<div class="game-action-row">
                    <button class="button button-secondary" type="button" data-sdg-sprint-reset>
                      ${escapeHtml(t("learn.gameReset"))}
                    </button>
                    <button class="button button-primary" type="button" data-sdg-sprint-retry>
                      ${escapeHtml(t("learn.gameTryAgain"))}
                    </button>
                  </div>`
            }`
          : ""
      }
    </div>
  `;
}

function renderChainGame() {
  const round = chainGameRounds[state.chainRound] || chainGameRounds[0];
  const nextLink = round.links[state.chainPicks.length];
  const complete = state.chainPicks.length >= round.links.length;
  let choices = [];
  if (!complete) {
    const rotation = state.chainPicks.length + state.chainRound;
    const decoys = round.decoys
      .map((_, index, all) => all[(index + rotation) % all.length])
      .slice(0, 3);
    choices = [...decoys];
    choices.splice((rotation * 3 + 1) % (decoys.length + 1), 0, nextLink);
  }

  return `
    <div class="game-play-panel">
      <div class="game-status-row">
        <span>${escapeHtml(localizedValue(round.title))}</span>
        <strong>${escapeHtml(
          formatLearningText(t("learn.chainMistakes"), { count: state.chainMistakes })
        )}</strong>
      </div>
      ${renderGameTip("chain-builder")}
      <div class="chain-board">
        <div class="chain-step is-start">
          <span>${escapeHtml(t("learn.chainStart"))}</span>
          <strong>${escapeHtml(localizedValue(round.start))}</strong>
        </div>
        {steps}
      </div>
      ${
        complete
          ? `<div class="game-feedback is-correct">
              <strong>${escapeHtml(t("learn.gameComplete"))}</strong>
              <p>${escapeHtml(localizedValue(round.complete))}</p>
            </div>
            <div class="game-action-row">
              <button class="button button-secondary" type="button" data-chain-reset>
                ${escapeHtml(t("learn.gameReset"))}
              </button>
              ${
                state.chainRound < chainGameRounds.length - 1
                  ? `<button class="button button-primary" type="button" data-chain-next>
                      ${escapeHtml(t("learn.gameNext"))}
                    </button>`
                  : `<button class="button button-primary" type="button" data-chain-complete>
                      ${escapeHtml(learningGameCompletionLabel("chain-builder"))}
                    </button>`
              }
            </div>`
          : `<div class="game-prompt">
              <p>${escapeHtml(t("learn.chainNext"))}</p>
            </div>
            <div class="game-choice-grid">
              ${choices
                .map(
                  (choice) => `
                    <button class="game-choice" type="button" data-chain-choice="${escapeHtml(
                      choice.id
                    )}">
                      <strong>${escapeHtml(localizedValue(choice.text))}</strong>
                    </button>
                  `
                )
                .join("")}
            </div>
            ${
              state.chainFeedback
                ? `<div class="game-feedback ${
                    state.chainFeedback === "correct" ? "is-correct" : "is-wrong"
                  }">
                    <strong>${escapeHtml(
                      t(
                        state.chainFeedback === "correct"
                          ? "learn.gameCorrect"
                          : "learn.gameIncorrect"
                      )
                    )}</strong>
                    ${
                      state.chainFeedback === "broken"
                        ? `<p>${escapeHtml(t("learn.chainBroken"))}</p>`
                        : ""
                    }
                  </div>`
                : ""
            }`
      }
    </div>
  `.replace(
    "{steps}",
    round.links
      .map((link, index) => {
        const active = state.chainPicks.includes(link.id);
        // Das zuletzt gesetzte Glied wird hervorgehoben, damit sichtbar wird,
        // was der eigene Klick in der Kette ausgeloest hat.
        const justPlaced = active && index === state.chainPicks.length - 1;
        return `
          <div class="chain-step${active ? " is-active" : ""}${justPlaced ? " is-new" : ""}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${active ? escapeHtml(localizedValue(link.text)) : "..."}</strong>
          </div>
        `;
      })
      .join("")
  );
}

function renderCityBuilderGame() {
  const budget = CITY_BUDGET;
  const used = cityPlanTotal();
  const remaining = budget - used;
  const metrics = {
    cooling: cityMetric("cooling"),
    flood: cityMetric("flood"),
    habitat: cityMetric("habitat"),
    fairness: cityMetric("fairness"),
  };
  const average = Math.round(
    (metrics.cooling + metrics.flood + metrics.habitat + metrics.fairness) / 4
  );
  const outcome =
    average >= 72
      ? t("learn.cityOutcomeStrong")
      : average >= 52
        ? t("learn.cityOutcomeMedium")
        : t("learn.cityOutcomeWeak");
  const solved = cityGameSolved(metrics, average);

  return `
    <div class="game-play-panel">
      <div class="game-status-row">
        <span>${escapeHtml(t("learn.gameTokens"))}: ${used}/${budget}</span>
        <strong>${escapeHtml(
          formatLearningText(t("learn.gameOptionalRemaining"), {
            count: remaining,
          })
        )}</strong>
      </div>
      ${renderGameTip("city-builder", {
        cooling: t("learn.cityCooling"),
        flood: t("learn.cityFlood"),
        habitat: t("learn.cityHabitat"),
        fairness: t("learn.cityFairness"),
      })}
      ${renderLearning3DStage("city", average)}
      <div class="city-control-grid">
        ${cityBuilderControls
          .map((control) => {
            const value = state.cityPlan[control.id] || 0;
            return `
              <article class="city-control-card">
                <div>
                  <strong>${escapeHtml(localizedValue(control.title))}</strong>
                  <p>${escapeHtml(localizedValue(control.text))}</p>
                </div>
                <div class="city-stepper">
                  <button
                    type="button"
                    data-city-control="${escapeHtml(control.id)}"
                    data-city-change="-1"
                    aria-label="${escapeHtml(`${localizedValue(control.title)}: ${t("learn.decrease")}`)}"
                    ${value <= 0 ? "disabled" : ""}
                  >-</button>
                  <span>${value}</span>
                  <button
                    type="button"
                    data-city-control="${escapeHtml(control.id)}"
                    data-city-change="1"
                    aria-label="${escapeHtml(`${localizedValue(control.title)}: ${t("learn.increase")}`)}"
                    ${remaining <= 0 || value >= 6 ? "disabled" : ""}
                  >+</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
      <div class="game-meter-grid">
        ${renderGameMeter(t("learn.cityCooling"), metrics.cooling)}
        ${renderGameMeter(t("learn.cityFlood"), metrics.flood)}
        ${renderGameMeter(t("learn.cityHabitat"), metrics.habitat)}
        ${renderGameMeter(t("learn.cityFairness"), metrics.fairness)}
      </div>
      ${renderPuzzleGate("city", {
        cooling: t("learn.cityCooling"),
        flood: t("learn.cityFlood"),
        habitat: t("learn.cityHabitat"),
        fairness: t("learn.cityFairness"),
      })}
      <div class="game-action-row">
        <button class="button button-secondary" type="button" data-city-reset>
          ${escapeHtml(t("learn.gameReset"))}
        </button>
        <button class="button button-primary" type="button" data-city-complete ${
          isLearningGameComplete("city-builder") ? "disabled" : ""
        }>
          ${escapeHtml(
            t(isLearningGameComplete("city-builder") ? "learn.gameComplete" : "learn.gameTestPlan")
          )}
        </button>
      </div>
    </div>
  `;
}

function renderReefRescueGame() {
  const budget = REEF_BUDGET;
  const used = reefBudgetUsed();
  const remaining = budget - used;
  const recovery = reefMetric("recovery");
  const pressure = reefMetric("pressure");
  const community = reefMetric("community");
  const average = Math.round((recovery + pressure + community) / 3);
  const outcome =
    average >= 72
      ? t("learn.reefOutcomeStrong")
      : average >= 52
        ? t("learn.reefOutcomeMedium")
        : t("learn.reefOutcomeWeak");
  const solved = reefGameSolved(recovery, pressure, community, average);

  return `
    <div class="game-play-panel">
      <div class="game-status-row">
        <span>${escapeHtml(t("learn.gameBudget"))}: ${used}/${budget}</span>
        <strong>${escapeHtml(
          formatLearningText(t(remaining > 0 ? "learn.gameRemaining" : "learn.gameFullBudget"), {
            count: remaining,
          })
        )}</strong>
      </div>
      ${renderGameTip("reef-rescue", {
        recovery: t("learn.reefRecovery"),
        pressure: t("learn.reefPressure"),
        community: t("learn.reefCommunity"),
      })}
      ${renderLearning3DStage("reef", average)}
      <div class="reef-action-grid">
        ${reefActionCards
          .map((action) => {
            const active = state.reefActions.includes(action.id);
            const disabled = !active && action.cost > remaining;
            return `
              <button
                class="reef-action-card${active ? " is-active" : ""}"
                type="button"
                data-reef-action="${escapeHtml(action.id)}"
                aria-pressed="${active}"
                ${disabled ? "disabled" : ""}
              >
                <span>${action.cost} ${escapeHtml(t("learn.gameBudget"))}</span>
                <strong>${escapeHtml(localizedValue(action.title))}</strong>
                <small>${escapeHtml(localizedValue(action.text))}</small>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="reef-synergy-panel">
        <strong>${escapeHtml(t("learn.reefSynergyTitle"))}</strong>
        ${reefSynergies
          .map((synergy) => {
            const active = synergy.pair.every((id) => state.reefActions.includes(id));
            return `<p class="game-rule ${active ? "is-met" : "is-open"}">
              <b aria-hidden="true">${active ? "✓" : "?"}</b> ${escapeHtml(
                active ? localizedValue(synergy.text) : t("learn.gameHiddenGoal")
              )}
            </p>`;
          })
          .join("")}
      </div>
      <div class="game-meter-grid">
        ${renderGameMeter(t("learn.reefRecovery"), recovery)}
        ${renderGameMeter(t("learn.reefPressure"), pressure)}
        ${renderGameMeter(t("learn.reefCommunity"), community)}
      </div>
      ${renderPuzzleGate("reef", {
        recovery: t("learn.reefRecovery"),
        pressure: t("learn.reefPressure"),
        community: t("learn.reefCommunity"),
      })}
      <div class="game-action-row">
        <button class="button button-secondary" type="button" data-reef-reset>
          ${escapeHtml(t("learn.gameReset"))}
        </button>
        <button class="button button-primary" type="button" data-reef-complete ${
          isLearningGameComplete("reef-rescue") ? "disabled" : ""
        }>
          ${escapeHtml(
            t(isLearningGameComplete("reef-rescue") ? "learn.gameComplete" : "learn.gameTestPlan")
          )}
        </button>
      </div>
    </div>
  `;
}

function renderClimateCouncilGame() {
  const budget = CLIMATE_BUDGET;
  const used = climatePlanTotal();
  const remaining = budget - used;
  const metrics = {
    climate: climateMetric("climate"),
    nature: climateMetric("nature"),
    justice: climateMetric("justice"),
    resilience: climateMetric("resilience"),
  };
  const average = Math.round(Object.values(metrics).reduce((sum, value) => sum + value, 0) / 4);
  const solved = climateGameSolved(metrics, average);

  const speaking = new Set(councilMembersWantingToSpeak());

  return `
    <div class="game-play-panel final-game-panel">
      <div class="game-status-row">
        <span>${escapeHtml(t("learn.gameTokens"))}: ${used}/${budget}</span>
        <strong>${escapeHtml(
          formatLearningText(t("learn.gameOptionalRemaining"), {
            count: remaining,
          })
        )}</strong>
      </div>
      ${renderGameTip("climate-council", {
        climate: t("learn.finalClimate"),
        nature: t("learn.finalNature"),
        justice: t("learn.finalJustice"),
        resilience: t("learn.finalResilience"),
      })}
      ${renderLearning3DStage("climate", average)}
      <p class="council-speaking-note">${escapeHtml(t("learn.councilSpeakingNote"))}</p>
      <div class="city-control-grid climate-control-grid">
        ${climateCouncilControls
          .map((control, index) => {
            const value = state.climatePlan[control.id] || 0;
            const title = localizedValue(control.title);
            return `
              <article class="city-control-card climate-control-card" style="--control-color: ${CLIMATE_CONTROL_COLORS[index]}">
                <div class="climate-control-copy">
                  <span class="climate-person-symbol" aria-hidden="true"><i></i>${speaking.has(control.id) ? '<b class="council-speak-mark">!</b>' : ""}</span>
                  <div>
                    <strong>${escapeHtml(title)}</strong>
                    <p>${escapeHtml(localizedValue(control.text))}</p>
                  </div>
                </div>
                <div class="city-stepper">
                  <button type="button" data-climate-control="${escapeHtml(control.id)}" data-climate-change="-1"
                    aria-label="${escapeHtml(`${title}: ${t("learn.decrease")}`)}" ${value <= 0 ? "disabled" : ""}>-</button>
                  <span aria-live="polite">${value}</span>
                  <button type="button" data-climate-control="${escapeHtml(control.id)}" data-climate-change="1"
                    aria-label="${escapeHtml(`${title}: ${t("learn.increase")}`)}" ${remaining <= 0 || value >= 6 ? "disabled" : ""}>+</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
      <div class="game-meter-grid">
        ${renderGameMeter(t("learn.finalClimate"), metrics.climate)}
        ${renderGameMeter(t("learn.finalNature"), metrics.nature)}
        ${renderGameMeter(t("learn.finalJustice"), metrics.justice)}
        ${renderGameMeter(t("learn.finalResilience"), metrics.resilience)}
      </div>
      ${renderPuzzleGate("climate", {
        climate: t("learn.finalClimate"),
        nature: t("learn.finalNature"),
        justice: t("learn.finalJustice"),
        resilience: t("learn.finalResilience"),
      })}
      <div class="game-action-row">
        <button class="button button-secondary" type="button" data-climate-reset>${escapeHtml(t("learn.gameReset"))}</button>
        <button class="button button-primary" type="button" data-climate-complete ${
          isLearningGameComplete("climate-council") ? "disabled" : ""
        }>
          ${escapeHtml(
            t(isLearningGameComplete("climate-council") ? "learn.gameComplete" : "learn.gameTestPlan")
          )}
        </button>
      </div>
    </div>
  `;
}

function renderCompletionCertificate() {
  const activeTier = selectedCertificateTier();
  const certificateUnlocked = isCertificateTierEarned(activeTier);
  const tierIssuance = state.certificateIssuance?.[activeTier.id];
  if (!certificateUnlocked) return "";

  return `
    <section class="completion-certificate certificate-tier-${escapeHtml(
      activeTier.id
    )}" data-completion-certificate aria-label="${escapeHtml(
      formatLearningText(t("learn.certificateTierTitle"), {
        tier: localizedValue(activeTier.label),
      })
    )}">
      <div class="completion-certificate-heading">
        <div class="completion-certificate-medal" aria-hidden="true">✓</div>
        <div>
          <span class="certificate-tier-chip">${escapeHtml(localizedValue(activeTier.label))}</span>
          <strong>${escapeHtml(t("learn.gameCongratulations"))}</strong>
          <p>${escapeHtml(t("learn.certificateBottomText"))}</p>
        </div>
      </div>
      ${
        tierIssuance
          ? `<div class="certificate-panel certificate-panel-issued certificate-tier-${escapeHtml(
              activeTier.id
            )}" data-certificate-issued>
              <span class="certificate-issued-mark" aria-hidden="true">✓</span>
              <div>
                <strong>${escapeHtml(
                  formatLearningText(t("learn.certificateTierIssuedTitle"), {
                    tier: localizedValue(activeTier.label),
                  })
                )}</strong>
                <p>${escapeHtml(t("learn.certificateIssuedText"))}</p>
              </div>
              <dl>
                <dt>${escapeHtml(t("learn.certificateId"))}</dt>
                <dd>${escapeHtml(tierIssuance.id)}</dd>
              </dl>
            </div>`
          : `<div class="certificate-panel certificate-tier-${escapeHtml(
              activeTier.id
            )}" data-certificate-form>
              <div>
                <strong>${escapeHtml(
                  formatLearningText(t("learn.certificateTierTitle"), {
                    tier: localizedValue(activeTier.label),
                  })
                )}</strong>
                <p>${escapeHtml(t("learn.certificateText"))}</p>
              </div>
              <label>
                <span>${escapeHtml(t("learn.certificateName"))}</span>
                <input type="text" maxlength="80" autocomplete="name" aria-describedby="certificate-once" data-certificate-name required />
              </label>
              <button class="button button-primary" type="button" data-certificate-download data-certificate-tier="${escapeHtml(
                activeTier.id
              )}" disabled>${escapeHtml(t("learn.certificateDownload"))}</button>
              <small id="certificate-once">${escapeHtml(t("learn.certificateOnce"))}</small>
            </div>`
      }
    </section>
  `;
}

function renderGameCelebration() {
  const celebration = state.learningGameCelebration;
  if (!celebration) return "";
  const game = learningGames.find((item) => item.id === celebration.gameId);
  const tier = celebrationCertificateTier();
  return `
    <div
      class="game-celebration"
      role="dialog"
      aria-modal="true"
      aria-live="assertive"
      data-game-celebration="${escapeHtml(celebration.id)}"
    >
      <div class="game-celebration-card">
        <button
          class="game-celebration-dismiss"
          type="button"
          data-celebration-dismiss
          aria-label="${escapeHtml(t("learn.gameClose"))}"
        >×</button>
        <div class="game-celebration-burst" aria-hidden="true">
          ${Array.from({ length: 16 }, (_, index) => `<i style="--particle: ${index}"></i>`).join("")}
          <b>✓</b>
        </div>
        <div class="game-celebration-content">
          <strong>${escapeHtml(t("learn.gameCongratulations"))}</strong>
          <span>${escapeHtml(localizedValue(game?.title || bi("Mission", "Mission")))}</span>
          <p>${escapeHtml(t("learn.gameCongratulationsText"))}</p>
          ${
            tier
              ? `<button class="button button-primary game-celebration-continue" type="button" data-celebration-certificate-jump>
                  ${escapeHtml(t("learn.certificateGoTo"))}
                </button>`
              : `<button class="button button-primary game-celebration-continue" type="button" data-celebration-dismiss>
                  ${escapeHtml(t("learn.gameClose"))}
                </button>`
          }
        </div>
      </div>
    </div>
  `;
}

function renderGameCelebrationOverlay() {
  const existingRoot = document.querySelector("[data-game-celebration-root]");
  if (!state.learningGameCelebration) {
    existingRoot?.remove();
    return;
  }
  const root = existingRoot || document.createElement("div");
  root.dataset.gameCelebrationRoot = "";
  root.innerHTML = renderGameCelebration();
  if (!existingRoot) document.body.append(root);
}

function celebrationCertificateTier() {
  if (!state.learningGameCelebration) return null;
  const activeTrack = activeLearningGameTrack();
  const pathComplete = activeTrack.games.every((gameId) => isLearningGameComplete(gameId));
  const tier = certificateTierForMinutes(activeTrack.minutes);
  return pathComplete && !state.certificateIssuance?.[tier.id] ? tier : null;
}

const certificateTierSdgs = {
  bronze: [4, 11, 12, 13, 14, 17],
  silver: [4, 6, 11, 12, 13, 14, 15, 17],
  gold: [4, 6, 7, 10, 11, 12, 13, 14, 15, 17],
};

function certificateRoundedRect(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.arcTo(x + width, y, x + width, y + height, safeRadius);
  context.arcTo(x + width, y + height, x, y + height, safeRadius);
  context.arcTo(x, y + height, x, y, safeRadius);
  context.arcTo(x, y, x + width, y, safeRadius);
  context.closePath();
}

function certificateFitFont(context, text, maximumWidth, maximumSize, minimumSize, weight = 700) {
  let size = maximumSize;
  while (size > minimumSize) {
    context.font = `${weight} ${size}px Arial, sans-serif`;
    if (context.measureText(text).width <= maximumWidth) break;
    size -= 2;
  }
  return size;
}

function certificateWrappedLines(context, text, maximumWidth, maximumLines = 2) {
  const words = String(text).trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (!line || context.measureText(candidate).width <= maximumWidth) {
      line = candidate;
      return;
    }
    lines.push(line);
    line = word;
  });
  if (line) lines.push(line);

  if (lines.length <= maximumLines) return lines;
  const visible = lines.slice(0, maximumLines);
  let finalLine = lines.slice(maximumLines - 1).join(" ");
  while (context.measureText(`${finalLine}…`).width > maximumWidth && finalLine.includes(" ")) {
    finalLine = finalLine.slice(0, finalLine.lastIndexOf(" "));
  }
  visible[maximumLines - 1] = `${finalLine}…`;
  return visible;
}

function drawCertificateLines(context, lines, x, y, lineHeight) {
  lines.forEach((line, index) => context.fillText(line, x, y + index * lineHeight));
}

function certificateCopy(tier, minutes, track, issuedAt) {
  const german = state.lang === "de";
  const tierLabel = localizedValue(tier.label);
  const missionNames = track.games.map((id) =>
    localizedValue(learningGames.find((game) => game.id === id)?.title || id)
  );
  return {
    title: german ? "CYRI Klima-Zertifikat" : "CYRI Climate Certificate",
    missionLabel: german ? "MISSION GESCHAFFT" : "MISSION COMPLETE",
    recipientLabel: german ? "AUSGESTELLT FÜR" : "AWARDED TO",
    statement: german
      ? `hat den CYRI-Klimamissionspfad der ${tierLabel}-Stufe erfolgreich abgeschlossen.`
      : `has successfully completed the CYRI climate mission path at ${tierLabel} level.`,
    missionNames,
    timeLabel: german ? "MISSIONSZEIT" : "MISSION TIME",
    missionValue: german ? `${minutes} MINUTEN` : `${minutes} MINUTES`,
    modulesLabel: german ? "MISSIONEN" : "MISSIONS",
    issuedLabel: german ? "Ausgestellt" : "Issued",
    idLabel: german ? "Zertifikats-ID" : "Certificate ID",
    sdgLabel: german ? "SDG-Fokus" : "SDG focus",
    sealLabel: german ? "SDG-ZIELE" : "SDG GOALS",
    funding: german
      ? "Gefördert durch die DSEE mit Mitteln des BMZ – action! Aktiv für eine globale Welt"
      : "Funded by DSEE with funds from BMZ – action! Aktiv für eine globale Welt",
    date: new Intl.DateTimeFormat(german ? "de-DE" : "en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(issuedAt),
  };
}

function drawClimateCertificate(canvas, details) {
  const context = canvas.getContext("2d");
  const {
    name,
    tier,
    minutes,
    track,
    certificateId,
    issuedAt,
    sdgs,
  } = details;
  const copy = certificateCopy(tier, minutes, track, issuedAt);
  const dark = "#062f27";
  const green = "#075f4d";
  const paper = "#f6f9f1";
  const soft = "#e8f1e9";
  const muted = "#52645e";

  context.fillStyle = dark;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = paper;
  context.fillRect(54, 54, 1892, 1306);
  context.strokeStyle = dark;
  context.lineWidth = 4;
  context.strokeRect(94, 94, 1812, 1226);

  const stripeColors = ["#4f9f5b", "#2f91ad", "#f4bc3b", "#dc5145", "#9255a5"];
  stripeColors.forEach((color, index) => {
    context.fillStyle = color;
    context.fillRect(94 + index * 362.4, 121, 362.4, 24);
  });

  context.fillStyle = green;
  context.font = "800 62px Arial, sans-serif";
  context.fillText("CYRI", 130, 222);
  context.fillStyle = "#3e5650";
  context.font = "600 20px Arial, sans-serif";
  context.fillText("CLIMATE YOUTH RESEARCH INITIATIVE", 320, 215);

  context.fillStyle = "#dceee4";
  certificateRoundedRect(context, 130, 252, 435, 69, 3);
  context.fill();
  context.fillStyle = green;
  context.font = "800 24px Arial, sans-serif";
  context.textAlign = "center";
  context.fillText(copy.missionLabel, 347, 295);

  context.fillStyle = tier.light;
  certificateRoundedRect(context, 587, 252, 267, 69, 3);
  context.fill();
  context.strokeStyle = tier.color;
  context.lineWidth = 3;
  context.stroke();
  context.fillStyle = tier.color;
  context.font = "800 24px Arial, sans-serif";
  context.fillText(localizedValue(tier.label).toUpperCase(), 720, 295);
  context.textAlign = "left";

  context.fillStyle = "#0b201c";
  context.font = "800 61px Arial, sans-serif";
  context.fillText(copy.title, 130, 415);
  context.fillStyle = muted;
  context.font = "700 19px Arial, sans-serif";
  context.fillText(copy.recipientLabel, 132, 458);

  context.fillStyle = green;
  const nameFontSize = certificateFitFont(context, name, 1090, 70, 38, 800);
  context.font = `800 ${nameFontSize}px Arial, sans-serif`;
  context.fillText(name, 130, 525);

  context.fillStyle = "#213b34";
  context.font = "400 28px Arial, sans-serif";
  drawCertificateLines(
    context,
    certificateWrappedLines(context, copy.statement, 1110, 2),
    130,
    575,
    36
  );

  context.strokeStyle = green;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(134, 658);
  context.lineTo(1320, 658);
  context.stroke();

  context.fillStyle = "#40554f";
  context.font = "500 23px Arial, sans-serif";
  const missionLines = certificateWrappedLines(
    context,
    copy.missionNames.join("  |  "),
    1120,
    2
  );
  drawCertificateLines(context, missionLines, 134, 750, 34);

  context.fillStyle = soft;
  certificateRoundedRect(context, 130, 845, 548, 150, 3);
  context.fill();
  certificateRoundedRect(context, 700, 845, 548, 150, 3);
  context.fill();
  context.fillStyle = "#3f5650";
  context.font = "800 18px Arial, sans-serif";
  context.fillText(copy.timeLabel, 160, 888);
  context.fillText(copy.modulesLabel, 730, 888);
  context.fillStyle = green;
  context.font = "800 43px Arial, sans-serif";
  context.fillText(copy.missionValue, 160, 952);
  context.fillText(`${track.games.length} / ${track.games.length}`, 730, 952);

  context.save();
  context.translate(1530, 745);
  context.fillStyle = tier.color;
  context.beginPath();
  context.arc(-80, 0, 168, 0, Math.PI * 2);
  context.arc(80, 0, 168, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = green;
  context.lineWidth = 8;
  context.beginPath();
  context.arc(0, 0, 172, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = green;
  context.textAlign = "center";
  context.font = "800 74px Arial, sans-serif";
  context.fillText("17", 0, -15);
  context.font = "800 18px Arial, sans-serif";
  context.fillText(copy.sealLabel, 0, 65);
  context.restore();

  context.fillStyle = "#344b44";
  context.font = "500 21px Arial, sans-serif";
  context.fillText(`${copy.sdgLabel}: ${sdgs.join(" | ")}`, 134, 1065);
  context.fillText(`${copy.issuedLabel}: ${copy.date}`, 134, 1115);
  context.font = "500 18px Arial, sans-serif";
  context.fillText(`${copy.idLabel}: ${certificateId}`, 134, 1163);

  context.fillStyle = green;
  context.font = "800 59px Arial, sans-serif";
  context.textAlign = "right";
  context.fillText("CYRI.ONLINE", 1780, 1190);
  context.textAlign = "left";

  context.fillStyle = muted;
  const fundingFontSize = certificateFitFont(context, copy.funding, 1160, 18, 14, 500);
  context.font = `500 ${fundingFontSize}px Arial, sans-serif`;
  context.fillText(copy.funding, 134, 1250);
}

function downloadClimateCertificate(name, tier, minutes = certificateMinutesForTier(tier.id)) {
  const issuedAt = new Date();
  const certificateId = `CYRI-${tier.id.toUpperCase()}-${issuedAt
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const track = learningGameTracks.find((item) => item.minutes === minutes) || learningGameTracks[0];
  const sdgs = certificateTierSdgs[tier.id] || certificateTierSdgs.gold;
  const canvas = document.createElement("canvas");
  canvas.width = 2000;
  canvas.height = 1414;
  drawClimateCertificate(canvas, {
    name,
    tier,
    minutes,
    track,
    certificateId,
    issuedAt,
    sdgs,
  });

  canvas.toBlob((blob) => {
    if (!blob) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `CYRI-Climate-Certificate-${certificateId.slice(5)}.png`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }, "image/png");

  return {
    id: certificateId,
    issuedAt: issuedAt.toISOString(),
    name,
    language: state.lang,
    minutes,
    missionCount: track.games.length,
    sdgs,
  };
}

let learningModelDispose = null;
let learningModelRequestId = 0;
let learningCelebrationTimer = null;
let learningCelebrationTimerId = null;

function disposeLearning3DModel() {
  learningModelRequestId += 1;
  learningModelDispose?.();
  learningModelDispose = null;
}

// Es meldet sich, wer fuer den gerade schwaechsten der vier Werte zustaendig
// ist. Damit wandert das Ausrufezeichen beim Spielen mit und zeigt genau den
// Engpass, nach dem der Missions-Tipp fragt.
function councilMembersWantingToSpeak() {
  const metrics = ["climate", "nature", "justice", "resilience"];
  const values = new Map(metrics.map((metric) => [metric, climateMetric(metric)]));
  const lowest = Math.min(...values.values());
  if (lowest >= CLIMATE_METRIC_FLOOR) return [];

  return climateCouncilControls
    .filter((control) => {
      const strongest = Object.entries(control.effects).sort((a, b) => b[1] - a[1])[0]?.[0];
      return strongest ? values.get(strongest) === lowest : false;
    })
    .map((control) => control.id);
}

function learning3DModelConfig(type) {
  if (type === "city") {
    return {
      values: { ...state.cityPlan },
      label: t("learn.cityModelLabel"),
      onActivate: (id) => {
        if (changeCityPlan(id, 1)) renderLearningGames();
      },
    };
  }
  if (type === "reef") {
    return {
      values: {
        recovery: reefMetric("recovery"),
        pressure: reefMetric("pressure"),
        community: reefMetric("community"),
      },
      label: t("learn.reefModelLabel"),
      onActivate: (id) => {
        if (toggleReefAction(id)) renderLearningGames();
      },
    };
  }
  if (type === "climate") {
    return {
      values: { ...state.climatePlan, speaking: councilMembersWantingToSpeak() },
      label: t("learn.climateModelLabel"),
      onActivate: (id) => {
        if (changeClimatePlan(id, 1)) renderLearningGames();
      },
    };
  }
  return null;
}

async function syncLearning3DModel() {
  const stage = document.querySelector("[data-learning-3d]");
  if (!stage) return;
  const type = stage.getAttribute("data-learning-3d");
  const config = learning3DModelConfig(type);
  if (!config) return;
  const requestId = ++learningModelRequestId;
  try {
    const { mountLearningModel } = await import(LEARNING_3D_MODULE_URL);
    if (requestId !== learningModelRequestId || !stage.isConnected) return;
    learningModelDispose = mountLearningModel(stage, { type, ...config });
  } catch (error) {
    console.error("CYRI 3D model could not be loaded.", error);
    stage.closest(".learning-model-band")?.setAttribute("hidden", "");
  }
}

function renderLearningGames() {
  const container = document.querySelector("[data-learning-games]");
  if (!container) return;
  window.clearTimeout(sprintAdvanceTimer);
  disposeLearning3DModel();

  const sequenceIds = activeLearningGameIds();
  if (!sequenceIds.includes(state.activeLearningGame) || !isLearningGameUnlocked(state.activeLearningGame)) {
    state.activeLearningGame = nextUnlockedLearningGameId() || sequenceIds[sequenceIds.length - 1];
  }
  const activeGame = activeLearningGame();
  const renderers = {
    "sdg-sprint": renderSdgSprintGame,
    "chain-builder": renderChainGame,
    "city-builder": renderCityBuilderGame,
    "reef-rescue": renderReefRescueGame,
    "climate-council": renderClimateCouncilGame,
  };
  const gameInfoCards = [
    ["gameInfoProblem", activeGame.info?.problem],
    ["gameInfoConnection", activeGame.info?.connection],
    ["gameInfoAction", activeGame.info?.action],
  ].filter(([, text]) => text);
  const completedCount = sequenceIds.filter((gameId) => isLearningGameComplete(gameId)).length;
  const pathComplete = completedCount === sequenceIds.length;

  container.innerHTML = `
    <aside class="game-menu" aria-label="${escapeHtml(t("learn.gameChoose"))}">
      <div class="game-medal-select">
        <p class="eyebrow">${escapeHtml(t("learn.gameMedalLabel"))}</p>
        <div class="game-medal-row" role="group" aria-label="${escapeHtml(t("learn.gameMedalLabel"))}">
          ${learningGameTracks
            .map((track) => {
              const tier = certificateTierForMinutes(track.minutes);
              const active = track.minutes === state.learningGameMinutes;
              const earned = isCertificateTierEarned(tier);
              return `
                <button
                  class="game-medal-button${active ? " is-active" : ""}${earned ? " is-earned" : ""}"
                  type="button"
                  data-game-duration="${track.minutes}"
                  aria-pressed="${active}"
                  style="--medal-color: ${tier.color}; --medal-light: ${tier.light}"
                >
                  <span class="game-medal-disc" aria-hidden="true"></span>
                  <strong>${escapeHtml(localizedValue(tier.label))}</strong>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
      <div class="game-path-status ${pathComplete ? "is-complete" : ""}">
        <strong>${escapeHtml(
          formatLearningText(t("learn.gamePathProgress"), {
            complete: completedCount,
            total: sequenceIds.length,
          })
        )}</strong>
        <span>${escapeHtml(pathComplete ? t("learn.gamePathComplete") : localizedValue(activeLearningGameTrack().description))}</span>
      </div>
      <div class="game-tab-list" role="tablist" aria-label="${escapeHtml(t("learn.gameChoose"))}">
        ${sequenceIds
          .map((gameId, index) => {
            const game = learningGames.find((item) => item.id === gameId) || learningGames[0];
            const active = game.id === activeGame.id;
            const locked = !isLearningGameUnlocked(game.id);
            const complete = isLearningGameComplete(game.id);
            return `
              <button
                class="game-tab${active ? " is-active" : ""}${locked ? " is-locked" : ""}${complete ? " is-complete" : ""}"
                type="button"
                role="tab"
                aria-selected="${active}"
                aria-disabled="${locked}"
                data-learning-game="${escapeHtml(game.id)}"
                ${locked ? "disabled" : ""}
              >
                <span>${String(index + 1).padStart(2, "0")} · ${escapeHtml(
                  complete ? t("learn.gameSolved") : locked ? t("learn.gameLocked") : localizedValue(game.tag)
                )}</span>
                <strong>${escapeHtml(localizedValue(game.title))}</strong>
                <small>${escapeHtml(localizedValue(game.text))}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    </aside>
    <section class="game-stage${
      activeGame.id === "sdg-sprint" && state.sdgSprintStarted ? " is-focus" : ""
    }" aria-live="polite">
      <div class="game-stage-heading">
        <span>${escapeHtml(localizedValue(activeGame.tag))}</span>
        <h3>${escapeHtml(localizedValue(activeGame.title))}</h3>
        <p>${escapeHtml(localizedValue(activeGame.text))}</p>
      </div>
      <details class="game-context">
        <summary>${escapeHtml(t("learn.gameMissionBrief"))}</summary>
        <div class="game-info-grid">
          ${gameInfoCards
            .map(
              ([label, text]) => `
                <article class="game-info-card">
                  <strong>${escapeHtml(t(`learn.${label}`))}</strong>
                  <p>${escapeHtml(localizedValue(text))}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <small>${escapeHtml(t("learn.gameModelNote"))}</small>
      </details>
      ${(renderers[activeGame.id] || renderSdgSprintGame)()}
    </section>
    <div class="learning-reset-footer">
      <p class="game-medal-note">${escapeHtml(t("learn.gameMedalNote"))}</p>
      <p>${escapeHtml(t("learn.resetNote"))}</p>
      <button class="button button-secondary" type="button" data-learning-games-reset>
        ${escapeHtml(t("learn.resetProgress"))}
      </button>
    </div>
    ${renderCompletionCertificate()}
  `;
  renderGameCelebrationOverlay();
  if (state.learningGameCelebration && !celebrationCertificateTier()) {
    const celebrationId = state.learningGameCelebration.id;
    if (learningCelebrationTimerId !== celebrationId) {
      window.clearTimeout(learningCelebrationTimer);
      learningCelebrationTimerId = celebrationId;
      learningCelebrationTimer = window.setTimeout(() => {
        if (state.learningGameCelebration?.id === celebrationId) {
          state.learningGameCelebration = null;
        }
        learningCelebrationTimerId = null;
        document.querySelector("[data-game-celebration-root]")?.remove();
      }, 3200);
    }
  } else if (celebrationCertificateTier()) {
    window.clearTimeout(learningCelebrationTimer);
    learningCelebrationTimerId = null;
  }
  syncLearning3DModel();
}

function renderLearningMap() {
  const container = document.querySelector("[data-learning-map]");
  if (!container) return;

  const activeHotspot =
    mapHotspots.find((hotspot) => hotspot.id === state.activeMapHotspot) || mapHotspots[0];
  const activeScenario =
    activeHotspot.model.scenarios.find((scenario) => scenario.id === state.activeMapScenario) ||
    activeHotspot.model.scenarios[0];

  container.innerHTML = `
    <div class="map-stage" role="group" aria-label="${escapeHtml(t("learn.mapAria"))}">
      <div class="map-grid" aria-hidden="true"></div>
      <svg class="world-map" viewBox="0 0 1000 520" role="img" aria-hidden="true">
        <path class="map-coast map-coast-muted" d="M128 125 162 89 221 73 291 91 336 126 372 130 392 159 364 194 321 191 282 220 233 214 198 241 148 231 103 194 86 154Z" />
        <path class="map-coast" d="M83 153 124 116 188 94 262 107 310 139 360 145 381 174 349 212 305 207 260 238 221 229 182 254 132 241 94 207Z" />
        <path class="map-coast map-coast-muted" d="M265 268 315 291 347 341 335 397 300 461 265 420 246 360 225 317Z" />
        <path class="map-coast" d="M290 265 334 296 358 342 343 407 304 476 273 425 253 365 236 315Z" />
        <path class="map-coast map-coast-muted" d="M446 154 497 126 557 146 536 183 481 188Z" />
        <path class="map-coast" d="M459 159 505 133 560 152 535 191 482 193Z" />
        <path class="map-coast" d="M489 209 552 197 609 241 628 310 589 389 526 379 487 315 461 259Z" />
        <path class="map-coast map-coast-muted" d="M576 124 662 96 777 111 880 165 925 230 876 278 780 258 731 302 661 271 594 290 540 232Z" />
        <path class="map-coast" d="M582 135 669 108 774 124 872 176 916 231 870 268 782 247 730 292 663 260 598 280 550 229Z" />
        <path class="map-coast" d="M770 342 830 327 875 357 862 403 805 411 754 381Z" />
        <path class="map-coast map-island" d="M398 87 450 55 520 76 498 118 431 121Z" />
        <path class="map-coast map-island" d="M887 288 921 300 942 326 913 342 877 322Z" />
        <path class="map-coast map-island" d="M651 322 676 332 664 356 635 350Z" />
      </svg>
      <p class="map-instruction">${escapeHtml(t("learn.mapOpenModel"))}</p>
      ${mapHotspots
        .map((hotspot) => {
          const active = hotspot.id === activeHotspot.id;
          return `
            <button
              class="map-marker${active ? " is-active" : ""}"
              type="button"
              style="--x: ${hotspot.x}%; --y: ${hotspot.y}%"
              data-map-hotspot="${escapeHtml(hotspot.id)}"
              aria-pressed="${active}"
            >
              <span class="map-marker-dot" aria-hidden="true"></span>
              <span class="map-marker-label">${escapeHtml(localizedValue(hotspot.tag))}</span>
            </button>
          `;
        })
        .join("")}
    </div>
    <article class="map-detail" aria-live="polite">
      <span class="map-tag">${escapeHtml(localizedValue(activeHotspot.tag))}</span>
      <h3>${escapeHtml(localizedValue(activeHotspot.title))}</h3>
      <dl>
        <div>
          <dt>${escapeHtml(t("learn.mapChallenge"))}</dt>
          <dd>${escapeHtml(localizedValue(activeHotspot.challenge))}</dd>
        </div>
        <div>
          <dt>${escapeHtml(t("learn.mapConnection"))}</dt>
          <dd>${escapeHtml(localizedValue(activeHotspot.connection))}</dd>
        </div>
        <div>
          <dt>${escapeHtml(t("learn.mapAction"))}</dt>
          <dd>${escapeHtml(localizedValue(activeHotspot.action))}</dd>
        </div>
      </dl>
      <div class="sdg-row">
        ${activeHotspot.sdgs
          .map((sdg) => {
            const number = sdgNumberFromLabel(sdg);
            const goal = getSdgGoal(number);
            return `
              <button
                class="sdg-chip"
                type="button"
                data-sdg-goal="${number}"
                data-sdg-jump="true"
                style="--sdg-color: ${goal.color}; --sdg-ink: ${contrastText(goal.color)}"
              >
                <span>${escapeHtml(sdg)}</span>
                ${escapeHtml(localizedValue(goal.title))}
              </button>
            `;
          })
          .join("")}
      </div>
      <section class="map-model">
        <div class="map-model-heading">
          <div>
            <p class="eyebrow">${escapeHtml(t("learn.modelChoose"))}</p>
            <h4>${escapeHtml(localizedValue(activeHotspot.model.title))}</h4>
          </div>
          <small>${escapeHtml(t("learn.modelNote"))}</small>
        </div>
        <div class="map-scenario-row" role="group" aria-label="${escapeHtml(t("learn.modelChoose"))}">
          ${activeHotspot.model.scenarios
            .map((scenario) => {
              const active = scenario.id === activeScenario.id;
              return `
                <button
                  class="map-scenario${active ? " is-active" : ""}"
                  type="button"
                  data-map-scenario="${escapeHtml(scenario.id)}"
                  aria-pressed="${active}"
                >
                  ${escapeHtml(localizedValue(scenario.label))}
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="model-meters">
          ${activeHotspot.model.metrics[state.lang]
            .map((metric, index) => {
              const value = activeScenario.values[index];
              return `
                <div class="model-meter">
                  <div>
                    <span>${escapeHtml(metric)}</span>
                    <strong>${value}%</strong>
                  </div>
                  <i style="width: ${value}%"></i>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="model-outcome">
          <strong>${escapeHtml(t("learn.modelOutcome"))}</strong>
          <p>${escapeHtml(localizedValue(activeScenario.outcome))}</p>
        </div>
      </section>
    </article>
  `;
}

function renderActionBuilder() {
  const container = document.querySelector("[data-action-builder]");
  if (!container) return;

  const selected = state.pollChoice;
  const baseVotes = [5, 4, 3];
  const voteCounts = pollOptions.map((option, index) => baseVotes[index] + (option.id === selected ? 4 : 0));
  const totalVotes = voteCounts.reduce((sum, count) => sum + count, 0);

  container.innerHTML = `
    <div class="action-card-grid">
      ${actionCards
        .map(
          (card, index) => `
            <article class="action-card">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(localizedValue(card.title))}</h3>
              <p>${escapeHtml(localizedValue(card.text))}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <section class="poll-panel" aria-live="polite">
      <div>
        <p class="eyebrow">${escapeHtml(t("learn.actionEyebrow"))}</p>
        <h3>${escapeHtml(t("learn.pollTitle"))}</h3>
        <p>${escapeHtml(t("learn.pollIntro"))}</p>
      </div>
      <div class="poll-options">
        ${pollOptions
          .map((option) => {
            const active = selected === option.id;
            return `
              <button
                class="poll-option${active ? " is-active" : ""}"
                type="button"
                data-poll-choice="${escapeHtml(option.id)}"
                aria-pressed="${active}"
              >
                <strong>${escapeHtml(localizedValue(option.title))}</strong>
                <small>${escapeHtml(localizedValue(option.text))}</small>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="poll-results">
        ${pollOptions
          .map((option, index) => {
            const percentage = Math.round((voteCounts[index] / totalVotes) * 100);
            return `
              <div class="poll-result">
                <span>${escapeHtml(localizedValue(option.title))}</span>
                <strong>${percentage}%</strong>
                <i style="width: ${percentage}%"></i>
              </div>
            `;
          })
          .join("")}
      </div>
      ${selected ? `<p class="poll-saved">${escapeHtml(t("learn.pollSaved"))}</p>` : ""}
    </section>
  `;
}

function renderLearningFormats() {
  const container = document.querySelector("[data-learning-formats]");
  if (!container) return;
  container.innerHTML = t("learn.formats")
    .map(
      (format, index) => `
        <article class="format-card">
          <div class="format-card-top">
            <span class="format-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="format-status">${escapeHtml(format.status)}</span>
          </div>
          <h3>${escapeHtml(format.title)}</h3>
          <p>${escapeHtml(format.text)}</p>
        </article>
      `
    )
    .join("");
}

function quizScore() {
  return state.quizAnswers.slice(0, state.quizLength).reduce(
    (score, answer, index) => score + (answer === quizQuestions[index].correct ? 1 : 0),
    0
  );
}

function renderQuizLengthSelector() {
  return `
    <div class="quiz-length-picker">
      <span>${escapeHtml(t("learn.quizLengthLabel"))}</span>
      <div class="quiz-length-options" role="group" aria-label="${escapeHtml(
        t("learn.quizLengthLabel")
      )}">
        ${t("learn.quizLengths")
          .map(
            (option) => `
              <button
                class="quiz-length-option${option.value === state.quizLength ? " is-active" : ""}"
                type="button"
                data-quiz-length="${option.value}"
                aria-pressed="${option.value === state.quizLength}"
              >
                <strong>${escapeHtml(option.title)}</strong>
                <small>${escapeHtml(option.text)}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderLearningQuiz() {
  const container = document.querySelector("[data-learning-quiz]");
  if (!container) return;
  const lengthSelector = renderQuizLengthSelector();

  if (state.quizComplete) {
    const score = quizScore();
    const total = state.quizLength;
    const strong = score >= Math.ceil(total * 0.67);
    container.innerHTML = `
      ${lengthSelector}
      <div class="quiz-result">
        <span class="quiz-score">${score}/${total}</span>
        <div>
          <p class="eyebrow">${escapeHtml(t("learn.resultTitle"))}</p>
          <h3>${escapeHtml(
            formatLearningText(t("learn.resultText"), { score, total })
          )}</h3>
          <p>${escapeHtml(t(strong ? "learn.resultStrong" : "learn.resultDeveloping"))}</p>
        </div>
      </div>
      <button class="button button-secondary" type="button" data-quiz-reset>
        ${escapeHtml(t("learn.restart"))}
      </button>
    `;
    return;
  }

  const question = quizQuestions[state.quizIndex];
  const selectedAnswer = state.quizAnswers[state.quizIndex];
  const answered = Number.isInteger(selectedAnswer);
  const correct = selectedAnswer === question.correct;
  const progress = ((state.quizIndex + 1) / state.quizLength) * 100;
  container.innerHTML = `
    ${lengthSelector}
    <div class="quiz-progress-row">
      <span>${escapeHtml(
        formatLearningText(t("learn.questionProgress"), {
          current: state.quizIndex + 1,
          total: state.quizLength,
        })
      )}</span>
      <span>${state.quizIndex + 1}/${state.quizLength}</span>
    </div>
    <div class="quiz-progress"><span style="width: ${progress}%"></span></div>
    <h3 class="quiz-question">${escapeHtml(question.question[state.lang])}</h3>
    <div class="quiz-options">
      ${question.options[state.lang]
        .map((option, index) => {
          let className = "quiz-option";
          if (answered && index === question.correct) className += " is-correct";
          if (answered && index === selectedAnswer && !correct) className += " is-incorrect";
          return `
            <button
              class="${className}"
              type="button"
              data-quiz-option="${index}"
              ${answered ? "disabled" : ""}
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${escapeHtml(option)}
            </button>
          `;
        })
        .join("")}
    </div>
    ${
      answered
        ? `
          <div class="quiz-feedback ${correct ? "is-correct" : "is-incorrect"}">
            <strong>${escapeHtml(t(correct ? "learn.correct" : "learn.incorrect"))}</strong>
            <p>${escapeHtml(question.explanation[state.lang])}</p>
          </div>
          <button class="button button-primary" type="button" data-quiz-next>
            ${escapeHtml(
              t(
                state.quizIndex === state.quizLength - 1
                  ? "learn.finish"
                  : "learn.next"
              )
            )}
          </button>
        `
        : ""
    }
  `;
}

function localizedArticle(article) {
  return Object.fromEntries(
    ["title", "summary", "body"].map((field) => [field, localizedValue(article[field])])
  );
}

function shortenForChildren(text, maxLength = 320) {
  const sentences = String(text)
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);
  const selected = sentences.slice(0, 2).join(" ");
  if (selected.length <= maxLength) return selected;
  const shortened = selected.slice(0, maxLength);
  return `${shortened.slice(0, shortened.lastIndexOf(" ")).trim()}...`;
}

function createChildArticleFallback(article) {
  const { title, summary, body } = localizedArticle(article);
  const blocks = body.split(/\n{2,}/).filter(Boolean);
  const sections = [];
  let currentHeading = "";

  for (const block of blocks) {
    const heading = block.match(/^##\s+(.+)$/);
    if (heading) {
      currentHeading = heading[1];
      continue;
    }
    if (currentHeading && sections.length < 4) {
      sections.push(`## ${currentHeading}\n\n${shortenForChildren(block)}`);
      currentHeading = "";
    }
  }

  return {
    title,
    summary,
    body: [
      `## ${t("audience.childFallbackTitle")}`,
      `${t("audience.childFallbackIntro")} ${summary}`,
      ...sections,
    ].join("\n\n"),
  };
}

function articlePresentation(article) {
  if (!isChildrenMode()) return localizedArticle(article);

  const childVersion = article.children;
  if (!childVersion) return createChildArticleFallback(article);
  return {
    title: localizedValue(childVersion.title),
    summary: localizedValue(childVersion.summary),
    body: localizedValue(childVersion.body),
  };
}

function renderEmptyArticleState(title, text) {
  return `
    <article class="empty-card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function renderArticleCard(article, featured = false) {
  const category = getCategory(article.category);
  const photo = getArticlePhoto(article);
  const presentation = articlePresentation(article);
  return `
    <article class="article-card${featured ? " article-card-featured" : ""}">
      <figure class="article-photo">
        <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.label[state.lang])}" loading="lazy" />
        <figcaption>${renderPhotoCredit(photo)}</figcaption>
      </figure>
      <div class="article-meta">
        <span class="article-category">${escapeHtml(category[state.lang])}</span>
        <span aria-hidden="true">-</span>
        <time datetime="${article.date}">${formatDate(article.date)}</time>
      </div>
      <h3>${escapeHtml(presentation.title)}</h3>
      <p>${escapeHtml(presentation.summary)}</p>
      <a
        class="card-button"
        href="${escapeHtml(articleRoutePath(article.id))}"
        data-article-id="${escapeHtml(article.id)}"
      >
        ${escapeHtml(t("articles.readMore"))}
      </a>
    </article>
  `;
}

function homepageArticleSelection(sorted) {
  if (sorted.length <= HOMEPAGE_ARTICLE_COUNT) return sorted;
  const offset = state.homepageArticleOffset % sorted.length;
  return Array.from(
    { length: HOMEPAGE_ARTICLE_COUNT },
    (_, index) => sorted[(offset + index) % sorted.length]
  );
}

function renderHomepageArticles(sorted = sortedArticles()) {
  const homepageContainer = document.querySelector("[data-latest-articles]");
  const controls = document.querySelector("[data-article-rotation-controls]");
  const status = document.querySelector("[data-article-rotation-status]");
  const toggle = document.querySelector("[data-homepage-articles-toggle]");
  const homepageArticles = homepageArticleSelection(sorted);
  const canRotate = sorted.length > HOMEPAGE_ARTICLE_COUNT;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  homepageContainer.innerHTML = homepageArticles.length
    ? homepageArticles.map((article) => renderArticleCard(article)).join("")
    : renderEmptyArticleState(t("articles.emptyLatest"), t("articles.emptyLatestHint"));

  controls.hidden = !canRotate;
  if (!canRotate) return;

  const current = (state.homepageArticleOffset % sorted.length) + 1;
  status.textContent = formatLearningText(t("latest.status"), {
    current,
    total: sorted.length,
  });
  toggle.hidden = reducedMotion;
  toggle.textContent = t(state.homepageArticlesPaused ? "latest.play" : "latest.pause");
  toggle.setAttribute("aria-pressed", String(state.homepageArticlesPaused));
}

function scheduleHomepageArticleRotation() {
  window.clearTimeout(homepageArticleRotationTimer);
  homepageArticleRotationTimer = null;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (state.homepageArticlesPaused || reducedMotion || state.page !== "home") return;
  if (sortedArticles().length <= HOMEPAGE_ARTICLE_COUNT) return;

  homepageArticleRotationTimer = window.setTimeout(() => {
    const sorted = sortedArticles();
    if (sorted.length > HOMEPAGE_ARTICLE_COUNT) {
      state.homepageArticleOffset = (state.homepageArticleOffset + 1) % sorted.length;
      renderHomepageArticles(sorted);
    }
    scheduleHomepageArticleRotation();
  }, HOMEPAGE_ARTICLE_ROTATION_MS);
}

function moveHomepageArticleSelection(direction) {
  const sorted = sortedArticles();
  if (sorted.length <= HOMEPAGE_ARTICLE_COUNT) return;
  state.homepageArticleOffset =
    (state.homepageArticleOffset + direction + sorted.length) % sorted.length;
  renderHomepageArticles(sorted);
  scheduleHomepageArticleRotation();
}

function renderArticles() {
  const sorted = sortedArticles();
  const newest = sorted.slice(0, FEATURED_ARTICLE_COUNT);
  const older = sorted.slice(FEATURED_ARTICLE_COUNT);
  const newestContainer = document.querySelector("[data-articles-newest]");
  const olderContainer = document.querySelector("[data-articles-older]");

  if (sorted.length) {
    state.homepageArticleOffset %= sorted.length;
  } else {
    state.homepageArticleOffset = 0;
  }
  renderHomepageArticles(sorted);
  newestContainer.innerHTML = newest.length
    ? newest.map((article) => renderArticleCard(article, true)).join("")
    : renderEmptyArticleState(t("articles.emptyNewest"), t("articles.emptyLatestHint"));

  const filteredOlder =
    state.filter === "all" ? older : older.filter((article) => article.category === state.filter);

  olderContainer.innerHTML = filteredOlder.length
    ? filteredOlder.map((article) => renderArticleCard(article)).join("")
    : `<p class="empty-state">${escapeHtml(t("articles.noResults"))}</p>`;

  scheduleHomepageArticleRotation();
}

function renderFilters() {
  const container = document.querySelector("[data-article-filters]");
  const filterItems = [{ id: "all", label: t("articles.filters.all") }].concat(
    categories.map((category) => ({ id: category.id, label: category[state.lang] }))
  );
  container.innerHTML = filterItems
    .map(
      (item) => `
        <button class="filter-button${item.id === state.filter ? " is-active" : ""}" type="button" data-filter="${item.id}">
          ${escapeHtml(item.label)}
        </button>
      `
    )
    .join("");
}

function renderTeam() {
  const container = document.querySelector("[data-team]");
  container.innerHTML = t("about.team")
    .map(
      (member) => `
        <article class="team-card">
          <span class="team-initial" aria-hidden="true">${escapeHtml(member.name.charAt(0))}</span>
          <h3>${escapeHtml(member.name)}</h3>
          <p class="article-category">${escapeHtml(member.role)}</p>
          <p>${escapeHtml(member.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderPublishTools() {
  const categorySelect = document.querySelector("[data-publish-category]");
  const imagePicker = document.querySelector("[data-publish-images]");
  const gate = document.querySelector("[data-publish-login]");
  const form = document.querySelector("[data-publish-form]");
  const dateInput = document.querySelector("[data-publish-date]");

  if (categorySelect) {
    const current = categorySelect.value || "policy";
    categorySelect.innerHTML = categories
      .map(
        (category) => `
          <option value="${escapeHtml(category.id)}"${category.id === current ? " selected" : ""}>
            ${escapeHtml(category[state.lang])}
          </option>
        `
      )
      .join("");
  }

  if (imagePicker) {
    const selected = imagePicker.querySelector("input:checked")?.value || photoSources[0].id;
    imagePicker.innerHTML = photoSources
      .map(
        (photo, index) => `
          <label class="image-option">
            <input
              type="radio"
              name="imageId"
              value="${escapeHtml(photo.id)}"
              ${photo.id === selected || (!selected && index === 0) ? "checked" : ""}
            />
            <span class="image-option-frame">
              <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.label[state.lang])}" loading="lazy" />
              <span class="photo-credit">${escapeHtml(photo.credit)}</span>
            </span>
            <span class="image-option-text">
              <strong>${escapeHtml(photo.label[state.lang])}</strong>
              <small>${escapeHtml(photo.license)}</small>
            </span>
          </label>
        `
      )
      .join("");
  }

  if (gate && form) {
    gate.hidden = state.publisherUnlocked;
    form.hidden = !state.publisherUnlocked;
  }

  if (dateInput && !dateInput.value) {
    dateInput.value = toLocalDateTimeValue(new Date()).slice(0, 10);
  }

  updatePublishScheduleControls();
}

function lockPublisher() {
  state.publisherUnlocked = false;
  state.publisherToken = "";
  sessionStorage.removeItem(PUBLISH_SESSION_KEY);
  renderPublishTools();
}

function clearCustomImage() {
  const input = document.querySelector("[data-custom-image]");
  const preview = document.querySelector("[data-custom-image-preview]");
  const previewImage = document.querySelector("[data-custom-image-preview-img]");
  const creditWrap = document.querySelector("[data-custom-credit-wrap]");
  const creditInput = document.querySelector("[data-custom-image-credit]");

  if (state.customImagePreviewUrl) {
    URL.revokeObjectURL(state.customImagePreviewUrl);
    state.customImagePreviewUrl = "";
  }

  if (input) input.value = "";
  if (preview) preview.hidden = true;
  if (previewImage) previewImage.removeAttribute("src");
  if (creditWrap) creditWrap.hidden = true;
  if (creditInput) creditInput.value = "";
}

function showCustomImage(file) {
  const preview = document.querySelector("[data-custom-image-preview]");
  const previewImage = document.querySelector("[data-custom-image-preview-img]");
  const creditWrap = document.querySelector("[data-custom-credit-wrap]");

  if (state.customImagePreviewUrl) {
    URL.revokeObjectURL(state.customImagePreviewUrl);
  }

  state.customImagePreviewUrl = URL.createObjectURL(file);
  previewImage.src = state.customImagePreviewUrl;
  previewImage.alt = file.name;
  preview.hidden = false;
  creditWrap.hidden = false;
}

function loadBrowserImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image could not be decoded."));
    };
    image.src = url;
  });
}

function canvasToBlob(canvas, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Image could not be encoded."))),
      "image/jpeg",
      quality
    );
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Image could not be read."));
    reader.readAsDataURL(blob);
  });
}

async function optimizeImage(file) {
  const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!allowedTypes.has(file.type) || file.size > 15 * 1024 * 1024) {
    throw new Error("Unsupported image.");
  }

  const image = await loadBrowserImage(file);
  if (
    image.naturalWidth < 1 ||
    image.naturalHeight < 1 ||
    image.naturalWidth > 12000 ||
    image.naturalHeight > 12000 ||
    image.naturalWidth * image.naturalHeight > 80000000
  ) {
    throw new Error("Image dimensions are unsupported.");
  }

  const maxDimension = 2000;
  const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const context = canvas.getContext("2d", { alpha: false });

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  let quality = 0.86;
  let blob = await canvasToBlob(canvas, quality);
  while (blob.size > 2.5 * 1024 * 1024 && quality > 0.58) {
    quality -= 0.08;
    blob = await canvasToBlob(canvas, quality);
  }

  if (blob.size > 2.5 * 1024 * 1024) {
    throw new Error("Optimized image is too large.");
  }

  return blobToDataUrl(blob);
}

async function uploadCustomImage(file, credit) {
  const dataUrl = await optimizeImage(file);
  return apiRequest("/uploads", {
    method: "POST",
    auth: true,
    body: {
      dataUrl,
      credit: credit || "CYRI",
    },
  });
}

function renderDynamicContent() {
  renderMissionFocus();
  renderLearningPaths();
  renderHomepageSdgs();
  renderMissionLab();
  renderSdgLab();
  renderLearningGames();
  renderLearningTopics();
  renderExplainerTools();
  renderLearningMap();
  renderActionBuilder();
  renderLearningFormats();
  renderLearningQuiz();
  renderFilters();
  renderArticles();
  renderTeam();
  renderPublishTools();
  if (state.activeArticleId) updateArticleModal();
  if (state.activeHomeSdg) updateHomepageSdgModal();
}

function parseRoute() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const pathLanguage = routeLanguageFromPath(pathname);
  const language = pathLanguage || state.lang;
  const articleBase = routePaths[language].articles;
  if (pathname.startsWith(`${articleBase}/`)) {
    const articleId = decodeURIComponent(pathname.slice(articleBase.length + 1));
    return { page: "articles", anchor: null, language, articleId, legacy: false };
  }

  const cleanPage = publicRoutePages.find((page) => {
    const candidate = routePaths[language][page].replace(/\/+$/, "") || "/";
    return pathname === candidate;
  });
  if (cleanPage) {
    return {
      page: cleanPage,
      anchor: window.location.hash === "#mission" && cleanPage === "home" ? "mission" : null,
      language,
      articleId: null,
      legacy: false,
    };
  }

  const raw = window.location.hash.replace("#", "") || "home";
  const learnAnchors = new Set(["learn-games"]);
  const legacyLearnAnchors = new Set([
    "learn-mission",
    "learn-sdgs",
    "learn-topics",
    "learn-tools",
    "learn-map",
    "learn-quiz",
  ]);
  if (raw === "mission") {
    return { page: "home", anchor: "mission", language, articleId: null, legacy: true };
  }
  if (raw === "research") {
    return { page: "research", anchor: null, language, articleId: null, legacy: true };
  }
  if (learnAnchors.has(raw)) {
    return { page: "learn", anchor: raw, language, articleId: null, legacy: true };
  }
  if (legacyLearnAnchors.has(raw)) {
    return {
      page: "learn",
      anchor: "learn-games",
      language,
      articleId: null,
      legacy: true,
    };
  }
  if (routes.has(raw)) {
    return { page: raw, anchor: null, language, articleId: null, legacy: true };
  }
  return { page: "home", anchor: null, language, articleId: null, legacy: pathname === "/" };
}

function showPage(shouldScroll = true) {
  document.querySelectorAll("[data-page]").forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === state.page);
  });

  const activeKey = state.anchor === "mission" ? "mission" : state.page;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.navLink === activeKey);
  });

  updateSeo();
  updateAudienceGate();
  scheduleHomepageArticleRotation();

  if (!shouldScroll) return;

  requestAnimationFrame(() => {
    if (state.anchor === "mission") {
      document.querySelector("[data-anchor='mission']").scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (state.anchor === "assistant") {
      document.querySelector("[data-learning-assistant]")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }
    if (state.anchor?.startsWith("learn-")) {
      document.querySelector(`[data-anchor='${state.anchor}']`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function syncRoute(shouldScroll = true) {
  const route = parseRoute();
  const languageChanged = route.language !== state.lang;
  state.lang = route.language;
  state.page = route.page;
  state.anchor = route.anchor;
  state.activeArticleId = route.articleId;
  if (route.legacy) {
    const cleanPath = pageRoutePath(route.page, route.language, route.anchor);
    window.history.replaceState(null, "", preserveCurrentSearch(cleanPath));
  }
  if (languageChanged) updateStaticText();
  showPage(shouldScroll);
  syncArticleModalToRoute();
}

function navigateToRoute(page, options = {}) {
  const language = options.language || state.lang;
  const path = options.articleId
    ? articleRoutePath(options.articleId, language)
    : pageRoutePath(page, language, options.anchor || null);
  window.history.pushState(null, "", path);
  syncRoute(options.shouldScroll !== false);
}

function closeMenu() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  header.classList.remove("is-menu-open");
  toggle.setAttribute("aria-expanded", "false");
}

function createArticleId(title) {
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
  return `${slug || "cyri-article"}-${Date.now().toString(36)}`;
}

function buildPublishedArticle(form) {
  const data = new FormData(form);
  const titleDe = String(data.get("titleDe") || "").trim();
  const titleEn = String(data.get("titleEn") || "").trim() || titleDe;
  const summaryDe = String(data.get("summaryDe") || "").trim();
  const summaryEn = String(data.get("summaryEn") || "").trim() || summaryDe;
  const bodyDe = String(data.get("bodyDe") || "").trim();
  const bodyEn = String(data.get("bodyEn") || "").trim() || bodyDe;
  const publishMode = String(data.get("publishMode") || "now");
  const scheduledValue = String(data.get("publishAt") || "");
  const publishAt =
    publishMode === "later" && scheduledValue
      ? new Date(scheduledValue).toISOString()
      : new Date().toISOString();

  return {
    id: createArticleId(titleEn || titleDe),
    date: String(data.get("date") || new Date().toISOString().slice(0, 10)),
    category: String(data.get("category") || "policy"),
    imageId: String(data.get("imageId") || photoSources[0].id),
    publishAt,
    title: {
      en: titleEn,
      de: titleDe,
    },
    summary: {
      en: summaryEn,
      de: summaryDe,
    },
    body: {
      en: bodyEn,
      de: bodyDe,
    },
  };
}

function openArticle(id) {
  articleModalReturnFocus =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;
  articleModalReturnUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  navigateToRoute("articles", { articleId: id, shouldScroll: false });
}

function revealRoutedArticle() {
  const article = allArticles().find((item) => item.id === state.activeArticleId);
  if (!article) return;
  markLearningArticleRead(article.id);
  updateArticleModal();
  updateSeo();
  const modal = document.querySelector("[data-article-modal]");
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  document.querySelector("[data-modal-close]").focus();
}

function hideArticleModal() {
  const modal = document.querySelector("[data-article-modal]");
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function syncArticleModalToRoute() {
  const modal = document.querySelector("[data-article-modal]");
  if (state.activeArticleId) {
    revealRoutedArticle();
  } else if (!modal.hidden) {
    hideArticleModal();
  }
}

function closeArticle() {
  hideArticleModal();
  state.activeArticleId = null;
  const returnUrl = articleModalReturnUrl;
  articleModalReturnUrl = null;
  if (returnUrl) {
    window.history.pushState(null, "", returnUrl);
  } else {
    window.history.replaceState(null, "", pageRoutePath("articles", state.lang));
  }
  syncRoute(false);
  articleModalReturnFocus?.focus();
  articleModalReturnFocus = null;
}

function renderArticleBody(body) {
  return body
    .split(/\n{2,}/)
    .map((block) => {
      const heading = block.match(/^##\s+(.+)$/);
      return heading
        ? `<h3>${escapeHtml(heading[1])}</h3>`
        : `<p>${escapeHtml(block)}</p>`;
    })
    .join("");
}

function updateArticleModal() {
  const article = allArticles().find((item) => item.id === state.activeArticleId);
  if (!article) return;
  const category = getCategory(article.category);
  const photo = getArticlePhoto(article);
  const presentation = articlePresentation(article);
  const photoWrap = document.querySelector("[data-modal-photo-wrap]");
  const photoImage = document.querySelector("[data-modal-photo]");
  const photoCredit = document.querySelector("[data-modal-credit]");
  const sourcesWrap = document.querySelector("[data-modal-sources]");
  const sourcesList = document.querySelector("[data-modal-source-list]");
  renderAudienceSwitch(
    document.querySelector("[data-article-audience-switch]"),
    "audience.articleLabel"
  );
  document.querySelector("[data-modal-category]").textContent = category[state.lang];
  document.querySelector("[data-modal-title]").textContent = presentation.title;
  document.querySelector("[data-modal-date]").textContent = formatDate(article.date);
  document.querySelector("[data-modal-date]").dateTime = article.date;
  document.querySelector("[data-modal-summary]").textContent = presentation.summary;
  document.querySelector("[data-article-audience-note]").textContent = t(
    isChildrenMode() ? "audience.childrenNote" : "audience.adultsNote"
  );
  photoWrap.hidden = false;
  photoImage.src = photo.src;
  photoImage.alt = photo.label[state.lang];
  photoCredit.innerHTML = renderPhotoCredit(photo);
  document.querySelector("[data-modal-body]").innerHTML = presentation.body
    ? renderArticleBody(presentation.body)
    : "";

  const sources = Array.isArray(article.sources) ? article.sources : [];
  sourcesWrap.hidden = sources.length === 0;
  sourcesList.innerHTML = sources
    .map(
      (source) => `
        <li>
          <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
            ${escapeHtml(source.label)}
          </a>
        </li>
      `
    )
    .join("");
}

function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.addEventListener("click", (event) => {
  const learnNeonToggle = event.target.closest("[data-learn-neon-toggle]");
  if (learnNeonToggle) {
    learnNeonToggle.classList.toggle("is-neon-on");
    updateLearnNeonAccessibility();
    return;
  }

  const languageButton = event.target.closest("[data-lang-button]");
  if (languageButton) {
    state.lang = languageButton.dataset.langButton;
    localStorage.setItem("cyri-language", state.lang);
    const localizedPath = state.activeArticleId
      ? articleRoutePath(state.activeArticleId, state.lang)
      : pageRoutePath(state.page, state.lang, state.anchor);
    window.history.replaceState(null, "", localizedPath);
    updateStaticText();
    renderDynamicContent();
    resetResearchAnswer();
    return;
  }

  const homepageSdgButton = event.target.closest("[data-home-sdg-goal]");
  if (homepageSdgButton) {
    openHomepageSdg(Number(homepageSdgButton.dataset.homeSdgGoal));
    return;
  }

  if (event.target.closest("[data-home-sdg-modal-close]")) {
    closeHomepageSdg();
    return;
  }

  const homepageSdgModal = document.querySelector("[data-home-sdg-modal]");
  if (!homepageSdgModal.hidden && event.target === homepageSdgModal) {
    closeHomepageSdg();
    return;
  }

  const audienceButton = event.target.closest("[data-audience-select]");
  if (audienceButton) {
    setAudience(audienceButton.dataset.audienceSelect);
    return;
  }

  const topicButton = event.target.closest("[data-learning-topic], [data-learning-next-topic]");
  if (topicButton) {
    const topicId =
      topicButton.dataset.learningTopic || topicButton.dataset.learningNextTopic;
    selectLearningTopic(topicId, !topicButton.dataset.learningTopic);
    return;
  }

  const conceptButton = event.target.closest("[data-learning-concept]");
  if (conceptButton) {
    markConceptDiscovered(state.learningTopic, Number(conceptButton.dataset.learningConcept));
    renderLearningTopics();
    return;
  }

  const explainerButton = event.target.closest("[data-explainer-tool]");
  if (explainerButton) {
    state.activeExplainerTool = explainerButton.dataset.explainerTool;
    renderExplainerTools();
    return;
  }

  const missionFocusButton = event.target.closest("[data-mission-lab-focus]");
  if (missionFocusButton) {
    state.activeMissionFocus = missionFocusButton.dataset.missionLabFocus;
    state.learningProgress.missionBuilt = false;
    saveMissionLabState();
    saveLearningProgress();
    renderMissionLab();
    return;
  }

  const missionRoleButton = event.target.closest("[data-mission-role]");
  if (missionRoleButton) {
    state.activeMissionRole = missionRoleButton.dataset.missionRole;
    state.learningProgress.missionBuilt = false;
    saveMissionLabState();
    saveLearningProgress();
    renderMissionLab();
    return;
  }

  const missionPaceButton = event.target.closest("[data-mission-pace]");
  if (missionPaceButton) {
    state.activeMissionPace = missionPaceButton.dataset.missionPace;
    state.learningProgress.missionBuilt = false;
    saveMissionLabState();
    saveLearningProgress();
    renderMissionLab();
    return;
  }

  const missionTopicButton = event.target.closest("[data-mission-open-topic]");
  if (missionTopicButton) {
    selectLearningTopic(missionTopicButton.dataset.missionOpenTopic, true);
    return;
  }

  const missionArticleButton = event.target.closest("[data-mission-open-article]");
  if (missionArticleButton) {
    openArticle(missionArticleButton.dataset.missionOpenArticle);
    return;
  }

  if (event.target.closest("[data-mission-ask]")) {
    document.querySelector("[data-learning-assistant]")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.setTimeout(() => document.querySelector("#research-question")?.focus(), 420);
    return;
  }

  if (event.target.closest("[data-mission-save]")) {
    state.learningProgress.missionBuilt = true;
    saveLearningProgress();
    renderMissionLab();
    return;
  }

  const durationButton = event.target.closest("[data-game-duration]");
  if (durationButton) {
    resetLearningGameRun(Number(durationButton.dataset.gameDuration) || 5);
    renderLearningGames();
    return;
  }

  const certificateTierButton = event.target.closest("[data-certificate-tier-select]");
  if (certificateTierButton) {
    const tier = Object.values(certificateTiers).find(
      (item) => item.id === certificateTierButton.dataset.certificateTierSelect
    );
    if (tier && isCertificateTierEarned(tier)) {
      state.selectedCertificateTier = tier.id;
      renderLearningGames();
    }
    return;
  }

  const gameButton = event.target.closest("[data-learning-game]");
  if (gameButton) {
    if (!isLearningGameUnlocked(gameButton.dataset.learningGame)) return;
    state.activeLearningGame = gameButton.dataset.learningGame;
    renderLearningGames();
    return;
  }

  const sdgSprintButton = event.target.closest("[data-sdg-sprint-option]");
  if (sdgSprintButton) {
    const picked = Number(sdgSprintButton.dataset.sdgSprintOption);
    state.sdgSprintAnswers[state.sdgSprintIndex] = picked;
    renderLearningGames();
    // Bei einer richtigen Antwort bleibt die Rueckmeldung kurz stehen und die
    // naechste Runde kommt von selbst - kein zusaetzlicher Klick noetig.
    if (picked === (sdgSprintRounds[state.sdgSprintIndex] || sdgSprintRounds[0]).answer) {
      sprintAdvanceTimer = window.setTimeout(advanceSdgSprint, 2200);
    }
    return;
  }

  if (event.target.closest("[data-sdg-sprint-start]")) {
    state.sdgSprintStarted = true;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-sdg-sprint-retry]")) {
    state.sdgSprintAnswers[state.sdgSprintIndex] = undefined;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-sdg-sprint-reset]")) {
    state.sdgSprintIndex = 0;
    state.sdgSprintAnswers = [];
    state.sdgSprintStarted = false;
    renderLearningGames();
    return;
  }

  const chainChoiceButton = event.target.closest("[data-chain-choice]");
  if (chainChoiceButton) {
    const round = chainGameRounds[state.chainRound] || chainGameRounds[0];
    const nextLink = round.links[state.chainPicks.length];
    if (chainChoiceButton.dataset.chainChoice === nextLink?.id) {
      state.chainPicks.push(nextLink.id);
      state.chainFeedback = "correct";
    } else {
      state.chainMistakes += 1;
      state.chainRoundMisses += 1;
      if (state.chainRoundMisses >= 3) {
        state.chainPicks = [];
        state.chainRoundMisses = 0;
        state.chainFeedback = "broken";
      } else {
        state.chainFeedback = "wrong";
      }
    }
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-chain-next]")) {
    state.chainRound = Math.min(state.chainRound + 1, chainGameRounds.length - 1);
    state.chainPicks = [];
    state.chainMistakes = 0;
    state.chainRoundMisses = 0;
    state.chainFeedback = "";
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-chain-complete]")) {
    const round = chainGameRounds[state.chainRound] || chainGameRounds[0];
    if (state.chainPicks.length >= round.links.length) {
      completeLearningGame("chain-builder");
    }
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-chain-reset]")) {
    state.chainPicks = [];
    state.chainMistakes = 0;
    state.chainRoundMisses = 0;
    state.chainFeedback = "";
    renderLearningGames();
    return;
  }

  const cityControlButton = event.target.closest("[data-city-control]");
  if (cityControlButton) {
    const id = cityControlButton.dataset.cityControl;
    const change = Number(cityControlButton.dataset.cityChange);
    if (changeCityPlan(id, change)) renderLearningGames();
    return;
  }

  if (event.target.closest("[data-city-reset]")) {
    state.cityPlan = { shade: 2, soil: 2, water: 2, routes: 2 };
    state.puzzleFeedback.city = null;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-city-complete]")) {
    const metrics = {
      cooling: cityMetric("cooling"),
      flood: cityMetric("flood"),
      habitat: cityMetric("habitat"),
      fairness: cityMetric("fairness"),
    };
    const average = Math.round(
      (metrics.cooling + metrics.flood + metrics.habitat + metrics.fairness) / 4
    );
    state.puzzleAttempts.city += 1;
    if (cityGameSolved(metrics, average)) {
      completeLearningGame("city-builder");
    } else if (cityPlanTotal() < CITY_BUDGET) {
      state.puzzleFeedback.city = {
        reason: "budget",
        remaining: CITY_BUDGET - cityPlanTotal(),
      };
    } else {
      state.puzzleFeedback.city = {
        reason: Object.values(metrics).some((value) => value < CITY_METRIC_FLOOR)
          ? "weak"
          : "balance",
        metric: weakestMetricId(metrics),
      };
    }
    renderLearningGames();
    return;
  }

  const reefActionButton = event.target.closest("[data-reef-action]");
  if (reefActionButton) {
    const id = reefActionButton.dataset.reefAction;
    if (toggleReefAction(id)) renderLearningGames();
    return;
  }

  if (event.target.closest("[data-reef-reset]")) {
    state.reefActions = [];
    state.puzzleFeedback.reef = null;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-reef-complete]")) {
    const recovery = reefMetric("recovery");
    const pressure = reefMetric("pressure");
    const community = reefMetric("community");
    const average = Math.round((recovery + pressure + community) / 3);
    const metrics = { recovery, pressure, community };
    state.puzzleAttempts.reef += 1;
    if (reefGameSolved(recovery, pressure, community, average)) {
      completeLearningGame("reef-rescue");
    } else if (activeReefSynergies().length === 0) {
      state.puzzleFeedback.reef = { reason: "synergy" };
    } else {
      state.puzzleFeedback.reef = {
        reason: Object.values(metrics).some((value) => value < REEF_METRIC_FLOOR)
          ? "weak"
          : "balance",
        metric: weakestMetricId(metrics),
      };
    }
    renderLearningGames();
    return;
  }

  const climateControlButton = event.target.closest("[data-climate-control]");
  if (climateControlButton) {
    const id = climateControlButton.dataset.climateControl;
    const change = Number(climateControlButton.dataset.climateChange);
    if (changeClimatePlan(id, change)) renderLearningGames();
    return;
  }

  if (event.target.closest("[data-climate-reset]")) {
    state.climatePlan = { energy: 1, mobility: 1, food: 1, nature: 1, fairness: 1 };
    state.puzzleFeedback.climate = null;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-climate-complete]")) {
    const metrics = {
      climate: climateMetric("climate"),
      nature: climateMetric("nature"),
      justice: climateMetric("justice"),
      resilience: climateMetric("resilience"),
    };
    const average = Math.round(Object.values(metrics).reduce((sum, value) => sum + value, 0) / 4);
    state.puzzleAttempts.climate += 1;
    if (climateGameSolved(metrics, average)) {
      completeLearningGame("climate-council");
    } else if (climatePlanTotal() < CLIMATE_BUDGET) {
      state.puzzleFeedback.climate = {
        reason: "budget",
        remaining: CLIMATE_BUDGET - climatePlanTotal(),
      };
    } else if (Object.values(state.climatePlan).some((value) => value < 1)) {
      state.puzzleFeedback.climate = { reason: "category" };
    } else {
      state.puzzleFeedback.climate = {
        reason: Object.values(metrics).some((value) => value < CLIMATE_METRIC_FLOOR)
          ? "weak"
          : "balance",
        metric: weakestMetricId(metrics),
      };
    }
    renderLearningGames();
    return;
  }

  const certificateDownloadButton = event.target.closest(
    "[data-certificate-download], [data-celebration-certificate-download]"
  );
  if (certificateDownloadButton) {
    const tier = Object.values(certificateTiers).find(
      (item) => item.id === certificateDownloadButton.dataset.certificateTier
    );
    if (!tier || !isCertificateTierEarned(tier) || state.certificateIssuance?.[tier.id]) return;
    const certificateForm = certificateDownloadButton.closest(
      "[data-certificate-form], [data-celebration-certificate-form]"
    );
    const nameInput = certificateForm?.querySelector(
      "[data-certificate-name], [data-celebration-certificate-name]"
    );
    const name = nameInput?.value.trim() || "";
    if (!name) {
      nameInput?.setCustomValidity(t("learn.certificateNameRequired"));
      nameInput?.reportValidity();
      return;
    }
    nameInput.setCustomValidity("");
    saveCertificateIssuance(
      tier.id,
      downloadClimateCertificate(name, tier, certificateMinutesForTier(tier.id))
    );
    state.learningGameCelebration = null;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-celebration-certificate-jump]")) {
    state.learningGameCelebration = null;
    window.clearTimeout(learningCelebrationTimer);
    learningCelebrationTimerId = null;
    renderLearningGames();
    window.requestAnimationFrame(() => {
      const certificate = document.querySelector("[data-completion-certificate]");
      certificate?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => certificate?.querySelector("[data-certificate-name]")?.focus(), 420);
    });
    return;
  }

  if (event.target.closest("[data-celebration-dismiss]")) {
    state.learningGameCelebration = null;
    window.clearTimeout(learningCelebrationTimer);
    learningCelebrationTimerId = null;
    renderLearningGames();
    return;
  }

  if (event.target.closest("[data-learning-games-reset]")) {
    if (!window.confirm(t("learn.resetConfirm"))) return;
    resetAllLearningGameProgress();
    renderLearningGames();
    return;
  }

  const sdgGoalButton = event.target.closest("[data-sdg-goal]");
  if (sdgGoalButton) {
    state.activeSdg = Number(sdgGoalButton.dataset.sdgGoal) || 13;
    renderSdgLab();
    if (sdgGoalButton.dataset.sdgJump === "true") {
      document.querySelector("[data-anchor='learn-sdgs']")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    return;
  }

  const sdgHotspotButton = event.target.closest("[data-sdg-hotspot]");
  if (sdgHotspotButton) {
    state.activeMapHotspot = sdgHotspotButton.dataset.sdgHotspot;
    const hotspot = mapHotspots.find((item) => item.id === state.activeMapHotspot);
    state.activeMapScenario = hotspot?.model.scenarios[0]?.id || "";
    renderLearningMap();
    document.querySelector("[data-anchor='learn-map']")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  const mapButton = event.target.closest("[data-map-hotspot]");
  if (mapButton) {
    state.activeMapHotspot = mapButton.dataset.mapHotspot;
    const hotspot = mapHotspots.find((item) => item.id === state.activeMapHotspot);
    state.activeMapScenario = hotspot?.model.scenarios[0]?.id || "";
    renderLearningMap();
    return;
  }

  const mapScenarioButton = event.target.closest("[data-map-scenario]");
  if (mapScenarioButton) {
    state.activeMapScenario = mapScenarioButton.dataset.mapScenario;
    renderLearningMap();
    return;
  }

  const pollButton = event.target.closest("[data-poll-choice]");
  if (pollButton) {
    state.pollChoice = pollButton.dataset.pollChoice;
    localStorage.setItem(LEARNING_POLL_KEY, state.pollChoice);
    renderActionBuilder();
    return;
  }

  const nextArticleButton = event.target.closest("[data-learning-next-article]");
  if (nextArticleButton) {
    openArticle(nextArticleButton.dataset.learningNextArticle);
    return;
  }

  if (event.target.closest("[data-learning-next-quiz]")) {
    document.querySelector(".quiz-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  if (event.target.closest("[data-learning-next-mission]")) {
    document.querySelector(".mission-lab-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  if (event.target.closest("[data-open-learning-assistant]")) {
    document.querySelector("[data-learning-assistant]")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.setTimeout(() => document.querySelector("#research-question")?.focus(), 420);
    return;
  }

  if (event.target.closest("[data-learning-reset]")) {
    state.learningTopic = "oceans";
    state.learningProgress = {
      visitedTopics: [],
      readArticles: [],
      quizCompleted: false,
      quizScore: 0,
      missionBuilt: false,
      discoveredConcepts: {},
    };
    state.quizIndex = 0;
    state.quizAnswers = [];
    state.quizComplete = false;
    state.activeConcept = null;
    saveLearningProgress();
    renderMissionLab();
    renderLearningTopics();
    renderLearningQuiz();
    return;
  }

  const quizLengthButton = event.target.closest("[data-quiz-length]");
  if (quizLengthButton) {
    const quizLength = Number(quizLengthButton.dataset.quizLength);
    if ([3, 6, 9, 12].includes(quizLength) && quizLength !== state.quizLength) {
      state.quizLength = quizLength;
      state.quizIndex = 0;
      state.quizAnswers = [];
      state.quizComplete = false;
      saveLearningProgress();
      renderLearningQuiz();
    }
    return;
  }

  const quizOptionButton = event.target.closest("[data-quiz-option]");
  if (quizOptionButton) {
    state.quizAnswers[state.quizIndex] = Number(quizOptionButton.dataset.quizOption);
    saveLearningProgress();
    renderLearningQuiz();
    return;
  }

  if (event.target.closest("[data-quiz-next]")) {
    if (state.quizIndex === state.quizLength - 1) {
      state.quizComplete = true;
      state.learningProgress.quizCompleted = true;
      state.learningProgress.quizScore = quizScore();
    } else {
      state.quizIndex += 1;
    }
    saveLearningProgress();
    renderLearningQuiz();
    return;
  }

  if (event.target.closest("[data-quiz-reset]")) {
    state.quizIndex = 0;
    state.quizAnswers = [];
    state.quizComplete = false;
    saveLearningProgress();
    renderLearningQuiz();
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    renderFilters();
    renderArticles();
    return;
  }

  const homepageArticleStep = event.target.closest("[data-homepage-articles-step]");
  if (homepageArticleStep) {
    moveHomepageArticleSelection(Number(homepageArticleStep.dataset.homepageArticlesStep));
    return;
  }

  if (event.target.closest("[data-homepage-articles-toggle]")) {
    state.homepageArticlesPaused = !state.homepageArticlesPaused;
    renderHomepageArticles();
    scheduleHomepageArticleRotation();
    return;
  }

  const articleButton = event.target.closest("[data-article-id]");
  if (articleButton) {
    event.preventDefault();
    openArticle(articleButton.dataset.articleId);
    return;
  }

  if (event.target.closest("[data-modal-close]")) {
    closeArticle();
    return;
  }

  const modal = document.querySelector("[data-article-modal]");
  if (!modal.hidden && event.target === modal) {
    closeArticle();
    return;
  }

  const routeLink = event.target.closest("[data-route-link]");
  if (routeLink) {
    event.preventDefault();
    closeMenu();
    const destination = routeLink.dataset.routeLink;
    navigateToRoute(destination === "mission" ? "home" : destination, {
      anchor: destination === "mission" ? "mission" : null,
    });
  }
});

document.addEventListener("input", (event) => {
  const nameInput = event.target.closest(
    "[data-certificate-name], [data-celebration-certificate-name]"
  );
  if (!nameInput) return;
  nameInput.setCustomValidity("");
  const certificateForm = nameInput.closest(
    "[data-certificate-form], [data-celebration-certificate-form]"
  );
  const downloadButton = certificateForm?.querySelector(
    "[data-certificate-download], [data-celebration-certificate-download]"
  );
  if (downloadButton) downloadButton.disabled = nameInput.value.trim().length < 2;
});

document.querySelector("[data-menu-toggle]").addEventListener("click", () => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const isOpen = header.classList.toggle("is-menu-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    document.dispatchEvent(new CustomEvent("cyri:menu-open"));
    requestAnimationFrame(() =>
      document.querySelector("[data-nav-panel] a")?.focus()
    );
  }
});

document.addEventListener("pointerdown", (event) => {
  const header = document.querySelector("[data-header]");
  if (header.classList.contains("is-menu-open") && !header.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("cyri:menu-close", closeMenu);

document.querySelectorAll('input[name="publishMode"]').forEach((input) => {
  input.addEventListener("change", updatePublishScheduleControls);
});

document.querySelector("[data-publish-at]").addEventListener("change", (event) => {
  const scheduled = new Date(event.currentTarget.value);
  const dateInput = document.querySelector("[data-publish-date]");
  if (!Number.isNaN(scheduled.getTime()) && dateInput) {
    dateInput.value = toLocalDateTimeValue(scheduled).slice(0, 10);
  }
});

document.querySelector("[data-custom-image]").addEventListener("change", (event) => {
  const file = event.currentTarget.files?.[0];
  const status = document.querySelector("[data-publish-status]");
  status.textContent = "";

  if (!file) {
    clearCustomImage();
    return;
  }

  const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!allowedTypes.has(file.type) || file.size > 15 * 1024 * 1024) {
    clearCustomImage();
    status.textContent = t("publish.imageTooLarge");
    return;
  }

  showCustomImage(file);
});

document.querySelector("[data-custom-image-remove]").addEventListener("click", () => {
  clearCustomImage();
  document.querySelector("[data-publish-status]").textContent = "";
});

document.querySelector("[data-ai-translate]").addEventListener("click", async (event) => {
  const form = document.querySelector("[data-publish-form]");
  const button = event.currentTarget;
  const status = document.querySelector("[data-translation-status]");
  const title = form.elements.titleDe.value.trim();
  const summary = form.elements.summaryDe.value.trim();
  const body = form.elements.bodyDe.value.trim();

  status.textContent = "";

  if (!title || !summary || !body) {
    status.textContent = t("publish.translateMissing");
    return;
  }

  button.disabled = true;
  button.textContent = t("publish.translating");

  try {
    const payload = await apiRequest("/translate", {
      method: "POST",
      auth: true,
      body: { title, summary, body },
    });
    form.elements.titleEn.value = payload.translation.title;
    form.elements.summaryEn.value = payload.translation.summary;
    form.elements.bodyEn.value = payload.translation.body;
    status.textContent = t("publish.translateSuccess");
  } catch (error) {
    if (error.status === 401) {
      lockPublisher();
    }
    status.textContent =
      error.status === 503 ? t("publish.translateNotConfigured") : t("publish.translateError");
  } finally {
    button.disabled = false;
    button.textContent = t("publish.translate");
  }
});

function resetResearchAnswer() {
  const answer = document.querySelector("[data-research-answer]");
  const answerCopy = document.querySelector("[data-research-answer-copy]");
  const references = document.querySelector("[data-research-references]");
  const referenceList = document.querySelector("[data-research-reference-list]");
  if (answer) answer.hidden = true;
  if (answerCopy) answerCopy.innerHTML = "";
  if (references) references.hidden = true;
  if (referenceList) referenceList.innerHTML = "";
}

document.querySelector("[data-research-form]").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const question = String(new FormData(form).get("question") || "").trim();
  const submitButton = form.querySelector("button[type='submit']");
  const status = document.querySelector("[data-research-status]");
  const answer = document.querySelector("[data-research-answer]");
  const answerCopy = document.querySelector("[data-research-answer-copy]");
  const references = document.querySelector("[data-research-references]");
  const referenceList = document.querySelector("[data-research-reference-list]");

  if (question.length < 5) {
    status.textContent = t("research.missing");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = t("research.asking");
  status.textContent = t("research.asking");
  resetResearchAnswer();

  try {
    const payload = await apiRequest("/research", {
      method: "POST",
      body: { question, language: state.lang },
    });
    const paragraphs = String(payload.answer || "")
      .split(/\n{2,}/)
      .filter(Boolean);
    answerCopy.innerHTML = paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");

    const referencedArticles = Array.isArray(payload.articles) ? payload.articles : [];
    referenceList.innerHTML = referencedArticles
      .map(
        (article) => `
          <button class="research-reference" type="button" data-article-id="${escapeHtml(article.id)}">
            <span>${escapeHtml(article.title || "")}</span>
            <small>${escapeHtml(t("research.readArticle"))}</small>
          </button>
        `
      )
      .join("");
    references.hidden = referencedArticles.length === 0;
    answer.hidden = false;
    status.textContent = "";
  } catch (error) {
    if (error.status === 503) {
      status.textContent = t("research.unavailable");
    } else if (error.status === 429) {
      status.textContent = t("research.rateLimited");
    } else {
      status.textContent = t("research.error");
    }
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t("research.submit");
  }
});

document.querySelector("[data-publish-login]").addEventListener("submit", async (event) => {
  event.preventDefault();
  const passwordInput = document.querySelector("[data-publish-password]");
  const status = document.querySelector("[data-publish-login-status]");
  const submitButton = event.currentTarget.querySelector("button[type='submit']");

  submitButton.disabled = true;
  status.textContent = "";

  try {
    const payload = await apiRequest("/auth/publish", {
      method: "POST",
      body: { password: passwordInput.value },
    });
    state.publisherUnlocked = true;
    state.publisherToken = payload.token;
    sessionStorage.setItem(PUBLISH_SESSION_KEY, payload.token);
    passwordInput.value = "";
    status.textContent = t("publish.loginSuccess");
    renderPublishTools();
  } catch (error) {
    status.textContent = error.status === 401 ? t("publish.loginError") : t("publish.backendError");
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("[data-publish-form]").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const submitButton = form.querySelector("button[type='submit']");
  const status = document.querySelector("[data-publish-status]");
  const customImage = document.querySelector("[data-custom-image]").files?.[0];
  const imageCredit = document.querySelector("[data-custom-image-credit]").value.trim();
  let customImageUploaded = !customImage;
  let article;

  submitButton.disabled = true;
  status.textContent = "";

  try {
    article = buildPublishedArticle(form);

    if (customImage) {
      status.textContent = t("publish.uploadingImage");
      const upload = await uploadCustomImage(customImage, imageCredit);
      article.imageId = upload.imageId;
      article.imageCredit = upload.credit;
      customImageUploaded = true;
    }

    const payload = await apiRequest("/articles", {
      method: "POST",
      auth: true,
      body: article,
    });
    if (!payload.scheduled) {
      state.publishedArticles = [payload.article, ...state.publishedArticles];
    }
    form.reset();
    clearCustomImage();
    document.querySelector("[data-publish-date]").value = toLocalDateTimeValue(new Date()).slice(0, 10);
    status.textContent = t(payload.scheduled ? "publish.scheduledSuccess" : "publish.success");
    renderDynamicContent();
  } catch (error) {
    if (error.status === 401) {
      lockPublisher();
    }
    status.textContent =
      customImage && !customImageUploaded && error.status !== 401
        ? t("publish.imageTooLarge")
        : t("publish.error");
  } finally {
    submitButton.disabled = false;
  }
});

window.addEventListener("hashchange", () => syncRoute(true));
window.addEventListener("popstate", () => {
  articleModalReturnUrl = null;
  syncRoute(true);
});
document.addEventListener("visibilitychange", scheduleHomepageArticleRotation);

window.addEventListener("keydown", (event) => {
  const articleModal = document.querySelector("[data-article-modal]");
  const homepageSdgModal = document.querySelector("[data-home-sdg-modal]");
  const modal = !homepageSdgModal.hidden
    ? homepageSdgModal
    : !articleModal.hidden
      ? articleModal
      : null;
  if (event.key === "Escape") {
    if (!homepageSdgModal.hidden) {
      closeHomepageSdg();
    } else if (!articleModal.hidden) {
      closeArticle();
    }
    closeMenu();
    return;
  }
  if (event.key === "Tab" && modal) {
    const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelector("[data-action-funding]").hidden = !SITE_FEATURES.publishActionFunding;
updateStaticText();
renderDynamicContent();
syncRoute(window.location.hash === "#research" || window.location.hash === "#mission");
observeReveals();
loadStaticArticles();
loadArticlesFromBackend().then((backendAvailable) => {
  if (backendAvailable) {
    setInterval(loadArticlesFromBackend, 60 * 1000);
  }
});
