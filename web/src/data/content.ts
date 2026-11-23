import type { Lang } from '../i18n/ui';

export type L = Record<Lang, string>;

export type ProjectId = 'lumen' | 'terraorbis' | 'centinel' | 'trackmania' | 'wc-ml' | 'pi-gem' | 'somnolence';

export interface Metric {
  value: string;
  label: L;
  note?: L;
}

export interface Act {
  id: ProjectId;
  act: L;
  name: string;
  tagline: L;
  role: L;
  context?: L;
  awards?: L[];
  repo?: string;
  repoPrivate?: boolean;
  links?: { label: L; href: string }[];
  problem: L[];
  solution: { title: L; items: L[] }[];
  metrics: { title: L; items: Metric[]; disclaimer?: L }[];
  stack: string[];
  media: { type: 'video' | 'image'; src: string; poster?: string; vertical?: boolean; caption?: L }[];
}

export const acts: Act[] = [
  {
    id: 'lumen',
    act: { es: 'Acto I', en: 'Act I' },
    name: 'Lumen',
    tagline: {
      es: 'Creemos en tu potencia, a tu propio ritmo.',
      en: 'We believe in your potential, at your own pace.',
    },
    role: { es: 'Fundador y Coordinador General', en: 'Founder & General Coordinator' },
    context: { es: 'Proyecto social · EIAO', en: 'Social project · EIAO' },
    repo: 'https://github.com/JDHVa/Lumen',
    links: [
      { label: { es: 'Visitar la plataforma', en: 'Visit the platform' }, href: 'https://proyecto-lumen.vercel.app' },
      { label: { es: 'Leer la documentación', en: 'Read the documentation' }, href: '/lumen/' },
    ],
    problem: [
      {
        es: 'En la EIAO las carreras técnicas funcionan como burbujas aisladas: los alumnos casi no conviven con los de otras especialidades.',
        en: 'At EIAO, technical majors work like isolated bubbles: students barely interact with peers from other specialties.',
      },
      {
        es: 'Cuando alguien se atora en un tema y le da pena preguntarle al maestro, no tiene a quién acudir, aunque en otro salón haya compañeros que dominan ese tema.',
        en: 'When someone gets stuck and feels too shy to ask the teacher, they have nobody to turn to, even if classmates in another room have mastered that topic.',
      },
      {
        es: 'El resultado: clases monótonas, aislamiento y mucho talento desaprovechado.',
        en: 'The result: monotonous classes, isolation and a lot of wasted talent.',
      },
    ],
    solution: [
      {
        title: { es: 'Acompañamiento académico', en: 'Academic support' },
        items: [
          {
            es: 'Asesorías en grupo donde un zhenshi (tutor) atiende hasta unos 8 schülers (alumnos).',
            en: 'Group tutoring where one zhenshi (tutor) supports up to about 8 schülers (students).',
          },
          {
            es: 'Los schülers piden asesoría desde la plataforma, sin crear cuenta, a través del tablero de demanda.',
            en: 'Schülers request sessions from the platform, without an account, through the demand board.',
          },
        ],
      },
      {
        title: { es: 'Formación de comunidad', en: 'Community building' },
        items: [
          {
            es: 'Clubes de Matemáticas, Física e IA incubados por Lumen que hoy funcionan como extensiones independientes, cada uno con su propio líder.',
            en: 'Math, Physics and AI clubs incubated by Lumen that now run as independent extensions, each with its own leader.',
          },
        ],
      },
    ],
    metrics: [
      {
        title: { es: 'Impacto', en: 'Impact' },
        items: [
          { value: '150+', label: { es: 'personas impactadas', en: 'people reached' } },
          { value: '23', label: { es: 'zhenshis de muchas carreras', en: 'zhenshis across majors' } },
          { value: '3', label: { es: 'clubes independientes', en: 'independent clubs' } },
          { value: '~8', label: { es: 'schülers por asesoría', en: 'schülers per session' } },
        ],
      },
    ],
    stack: ['TypeScript', 'React', 'Astro', 'PostgreSQL', 'Docker', 'Vercel', 'Liderazgo'],
    media: [
      { type: 'image', src: 'evidencias/lumen-ev1.jpeg' },
      { type: 'image', src: 'evidencias/lumen-ev2.jpeg' },
      { type: 'image', src: 'evidencias/lumen-ev3.jpeg' },
      { type: 'image', src: 'evidencias/clases-de-ia.jpeg' },
    ],
  },
  {
    id: 'terraorbis',
    act: { es: 'Acto II', en: 'Act II' },
    name: 'TerraOrbis 2.0',
    tagline: {
      es: 'Un rover autónomo que detecta plagas antes de que se vean los síntomas.',
      en: 'An autonomous rover that detects crop threats before symptoms appear.',
    },
    role: { es: 'Programador y diseñador de la arquitectura de IA', en: 'Programmer & AI architecture designer' },
    context: { es: 'Robótica agrícola · Nuevo León (Linares y García)', en: 'Agricultural robotics · Nuevo León, Mexico' },
    awards: [
      { es: 'Olimpiadas STEM Nuevo León 2025', en: 'STEM Olympiad Nuevo León 2025' },
      { es: 'Podio · Concurso Interpreparatorias UANL 2026', en: 'Podium · UANL Inter-High School Contest 2026' },
    ],
    repoPrivate: true,
    problem: [
      {
        es: 'Plagas, hongos y enfermedades se detectan tarde porque la revisión es visual y esporádica.',
        en: 'Pests, fungi and diseases are detected late because inspection is visual and sporadic.',
      },
      {
        es: 'Muchas infecciones pasan días o semanas en incubación: los virus de la mosca blanca tardan 20–30 días y Fusarium 7–14. Mientras, la planta enferma sigue contagiando.',
        en: 'Many infections incubate for days or weeks: whitefly-borne viruses take 20–30 days and Fusarium 7–14. Meanwhile the sick plant keeps spreading it.',
      },
      {
        es: 'Cuando el daño se ve, se fumiga toda la parcela: contamina suelo y agua, crea resistencia, daña polinizadores y expone a trabajadores y consumidores.',
        en: 'Once damage is visible, the whole field gets sprayed: polluting soil and water, breeding resistance, harming pollinators and exposing workers and consumers.',
      },
    ],
    solution: [
      {
        title: { es: 'Plataforma (de la 1.0)', en: 'Platform (from 1.0)' },
        items: [
          {
            es: 'Chasis de PVC con piezas impresas en 3D, Raspberry Pi 5, ROS 2, LiDAR con SLAM, GPS, IMU y panel solar. Alertas por SMS, Wi-Fi o LoRa hacia Arduino Cloud.',
            en: 'PVC chassis with 3D-printed parts, Raspberry Pi 5, ROS 2, LiDAR SLAM, GPS, IMU and solar panel. Alerts over SMS, Wi-Fi or LoRa to Arduino Cloud.',
          },
        ],
      },
      {
        title: { es: 'Capa 1 · Percepción multimodal', en: 'Layer 1 · Multimodal perception' },
        items: [
          { es: 'YOLOv8s en un acelerador Hailo-8 localiza hojas, frutos, insectos y lesiones.', en: 'YOLOv8s on a Hailo-8 accelerator locates leaves, fruits, insects and lesions.' },
          { es: 'EfficientNet-B0 clasifica varias amenazas a la vez y su severidad.', en: 'EfficientNet-B0 classifies multiple threats and their severity.' },
          { es: 'DINOv2 detecta anomalías fuera de las clases entrenadas.', en: 'DINOv2 flags anomalies outside the trained classes.' },
          { es: 'Red de fusión con calibración por temperatura ajusta cada probabilidad con los sensores.', en: 'A temperature-calibrated fusion network adjusts each probability with sensor data.' },
          { es: 'Cámara multiespectral (NDVI, NDRE) + LightGBM para estimar infección presintomática.', en: 'Multispectral camera (NDVI, NDRE) + LightGBM to estimate presymptomatic infection.' },
        ],
      },
      {
        title: { es: 'Capa 2 · Modelo epidemiológico (el "modelo del mundo")', en: 'Layer 2 · Epidemiological "world model"' },
        items: [
          { es: 'La parcela es un grafo: cada planta es un nodo conectado con sus vecinas a menos de 1.6 m.', en: 'The field is a graph: each plant is a node linked to neighbors within 1.6 m.' },
          { es: 'Modelo SEIR espacial con creencia bayesiana del estado oculto de cada planta.', en: 'Spatial SEIR model with a Bayesian belief over each plant’s hidden state.' },
          { es: 'GraphSAGE corrige el modelo para cada parcela.', en: 'GraphSAGE corrects the model per field.' },
          { es: 'Monte Carlo de 512 trayectorias proyecta el riesgo a 3, 7 y 14 días.', en: '512-trajectory Monte Carlo projects risk at 3, 7 and 14 days.' },
        ],
      },
      {
        title: { es: 'Capa 3 · Planificación del patrullaje', en: 'Layer 3 · Patrol planning' },
        items: [
          { es: 'Problema de orienteering con heurística voraz: menos de 30 ms para 700 plantas.', en: 'Orienteering problem solved greedily: under 30 ms for 700 plants.' },
          { es: 'Siempre reserva 15 % de batería para volver a la estación de carga.', en: 'Always keeps 15% battery to return to the charging station.' },
        ],
      },
      {
        title: { es: 'Capa 4 · Reflejos neuromórficos', en: 'Layer 4 · Neuromorphic reflexes' },
        items: [
          { es: 'SNN 8-5-3 entrenada con gradientes sustitutos detecta patinaje y vibración y reacciona en menos de 60 ms.', en: 'An 8-5-3 SNN trained with surrogate gradients detects slip and vibration and reacts in under 60 ms.' },
          { es: 'CNN ligera autosupervisada aprende qué zonas son difíciles de transitar y las agrega al mapa de Nav2.', en: 'A light self-supervised CNN learns hard-to-traverse zones and adds them to the Nav2 map.' },
        ],
      },
    ],
    metrics: [
      {
        title: { es: 'Versión 1.0 · medido en campo', en: 'Version 1.0 · field-measured' },
        items: [
          { value: '<5 cm', label: { es: 'error de SLAM', en: 'SLAM error' } },
          { value: '98 %', label: { es: 'obstáculos evadidos', en: 'obstacles avoided' } },
          { value: '25 s', label: { es: 'tiempo de alerta', en: 'alert time' } },
          { value: '88–90 %', label: { es: 'acierto en 9 amenazas (campo)', en: 'accuracy on 9 threats (field)' }, note: { es: '>93 % en laboratorio', en: '>93% in the lab' } },
        ],
      },
      {
        title: { es: 'Versión 2.0 · simulación', en: 'Version 2.0 · simulation' },
        items: [
          { value: '48+', label: { es: 'clases base + anomalías abiertas', en: 'base classes + open-set anomalies' } },
          { value: '≥93 %', label: { es: 'exactitud', en: 'accuracy' } },
          { value: '≥50 %', label: { es: 'sensibilidad presintomática a mitad de incubación', en: 'presymptomatic sensitivity mid-incubation' } },
          { value: '29–35 min', label: { es: 'para 700 plantas (antes 93 min)', en: 'for 700 plants (was 93 min)' } },
        ],
        disclaimer: {
          es: 'Cifras de la 2.0 obtenidas con simulación Monte Carlo (parcela de 300 m², 700 plantas, 60 días) y probadas una vez en campo. Aún falta medir el ahorro real de agroquímicos.',
          en: 'Version 2.0 figures come from Monte Carlo simulation (300 m² field, 700 plants, 60 days) and were tested once in the field. Real agrochemical savings are yet to be measured.',
        },
      },
    ],
    stack: ['ROS 2', 'Nav2', 'SLAM', 'Raspberry Pi 5', 'Hailo-8', 'YOLOv8', 'EfficientNet', 'DINOv2', 'LightGBM', 'GraphSAGE', 'SNN', 'PyTorch', 'Arduino Cloud', 'LoRa', 'Impresión 3D'],
    media: [
      { type: 'video', src: '/media/videos/terraorbis-ev3-chida.mp4', poster: '/media/videos/terraorbis-ev3-chida.jpg' },
      { type: 'video', src: '/media/videos/terraorbis-ev1.mp4', poster: '/media/videos/terraorbis-ev1.jpg', vertical: true },
      { type: 'video', src: '/media/videos/terraorbis-ev2.mp4', poster: '/media/videos/terraorbis-ev2.jpg', vertical: true },
      { type: 'video', src: '/media/videos/terraorbis-ev4.mp4', poster: '/media/videos/terraorbis-ev4.jpg', vertical: true },
    ],
  },
  {
    id: 'centinel',
    act: { es: 'Acto III', en: 'Act III' },
    name: 'Centinel',
    tagline: {
      es: '¿Humano o IA? Detección de voz sintética en llamadas bancarias.',
      en: 'Human or AI? Synthetic voice detection for bank phone calls.',
    },
    role: { es: 'AI Lead', en: 'AI Lead' },
    context: { es: 'HackMTY 2026 · Altur Challenge · Top 3 🏆', en: 'HackMTY 2026 · Altur Challenge · Top 3 🏆' },
    repo: 'https://github.com/JDHVa/altur-hackmty',
    problem: [
      {
        es: 'Un atacante puede juntar reconocimiento de voz, un LLM y voz sintética (incluso clonada) para llamar a un banco haciéndose pasar por un cliente.',
        en: 'An attacker can chain speech recognition, an LLM and synthetic (even cloned) voice to call a bank posing as a customer.',
      },
      {
        es: 'El reto: decidir si quien llama es humano o IA a partir de 353 llamadas reales en español mexicano, a 8 kHz con calidad telefónica, evaluado con voces nunca vistas.',
        en: 'The challenge: decide whether a caller is human or AI from 353 real Mexican-Spanish calls at 8 kHz phone quality, evaluated on unseen voices.',
      },
      {
        es: 'Los detectores de deepfake existentes fallaban con este audio: AUC 0.41 zero-shot, peor que el azar.',
        en: 'Off-the-shelf deepfake detectors failed on this audio: 0.41 AUC zero-shot, worse than chance.',
      },
    ],
    solution: [
      {
        title: { es: 'Señal A · Cómo conversa', en: 'Signal A · How they talk' },
        items: [
          { es: 'VAD por canal y ~45 features de ritmo: latencia de respuesta, interrupciones, silencios y variación de turnos.', en: 'Per-channel VAD and ~45 rhythm features: response latency, overlaps, silences and turn variability.' },
          { es: 'Un bot contesta casi siempre igual de rápido y casi nunca interrumpe; un humano duda y se encima.', en: 'A bot answers with near-constant latency and rarely interrupts; humans hesitate and overlap.' },
        ],
      },
      {
        title: { es: 'Señal B · Cómo suena', en: 'Signal B · How they sound' },
        items: [
          { es: 'XLS-R 300M congelado con Sensitive Layer Selection sobre sus 25 capas + MLP: AUC 1.0 contra un motor de voz nunca visto.', en: 'Frozen XLS-R 300M with Sensitive Layer Selection over its 25 layers + MLP: 1.0 AUC on an unseen TTS engine.' },
          { es: 'WavLM Base+ congelado con un clasificador ligero.', en: 'Frozen WavLM Base+ with a light classifier.' },
          { es: 'Modelos congelados a propósito: aprenden los artefactos de la síntesis, no la voz de cada persona.', en: 'Frozen on purpose: they learn synthesis artifacts, not speaker identity.' },
        ],
      },
      {
        title: { es: 'Fusión y producto', en: 'Fusion & product' },
        items: [
          { es: 'HistGradientBoosting combina todo y da un semáforo al operador: continuar, verificar o colgar.', en: 'HistGradientBoosting fuses everything into a traffic light for the operator: continue, verify or hang up.' },
          { es: 'Whisper transcribe y explica el veredicto en lenguaje natural.', en: 'Whisper transcribes and explains the verdict in natural language.' },
          { es: 'API FastAPI, consola web y un hardware Centinel con Raspberry Pi 5 que muestra HUMANO o IA.', en: 'FastAPI service, web console and a Raspberry Pi 5 Centinel device showing HUMAN or AI.' },
          { es: 'Voces sintéticas propias (Edge-TTS, gTTS, Piper, SAPI, XTTS-v2) y canal telefónico simulado G.711 para generalizar.', en: 'Own synthetic voices (Edge-TTS, gTTS, Piper, SAPI, XTTS-v2) and simulated G.711 phone channel to generalize.' },
        ],
      },
    ],
    metrics: [
      {
        title: { es: 'Resultados', en: 'Results' },
        items: [
          { value: 'Top 3', label: { es: 'HackMTY 2026', en: 'HackMTY 2026' } },
          { value: '99.2 %', label: { es: 'accuracy en el set de prueba', en: 'accuracy on the test set' } },
          { value: '86 %', label: { es: 'vs. voces comerciales (ElevenLabs y otras)', en: 'vs. commercial voices (ElevenLabs and others)' } },
          { value: '0.41 → 1.0', label: { es: 'AUC: detector existente vs. el nuestro en motor nunca visto', en: 'AUC: off-the-shelf vs. ours on an unseen engine' } },
        ],
      },
    ],
    stack: ['PyTorch', 'Hugging Face', 'XLS-R', 'WavLM', 'Whisper', 'scikit-learn', 'librosa', 'torchaudio', 'webrtcvad', 'FastAPI', 'WebSockets', 'Docker', 'Modal', 'Raspberry Pi 5'],
    media: [
      { type: 'video', src: '/media/videos/hackmty-real-3am.mp4', poster: '/media/videos/hackmty-real-3am.jpg', caption: { es: 'HackMTY, 3 a.m.', en: 'HackMTY, 3 a.m.' } },
      { type: 'video', src: '/media/videos/hackmty-2.mp4', poster: '/media/videos/hackmty-2.jpg', vertical: true },
      { type: 'video', src: '/media/videos/hackmty-1.mp4', poster: '/media/videos/hackmty-1.jpg' },
      { type: 'image', src: 'evidencias/hackmty-ev1.jpeg' },
    ],
  },
  {
    id: 'trackmania',
    act: { es: 'Acto IV', en: 'Act IV' },
    name: 'World Model × TrackMania',
    tagline: {
      es: 'Una IA que aprende a manejar soñando el juego.',
      en: 'An AI that learns to drive by dreaming the game.',
    },
    role: { es: 'Creador e investigador independiente', en: 'Creator & independent researcher' },
    context: { es: 'Investigación · TrackMania Nations Forever · pista A01', en: 'Research · TrackMania Nations Forever · track A01' },
    repo: 'https://github.com/JDHVa/wm-tmnf',
    problem: [
      {
        es: 'Un agente con world model primero aprende cómo funciona el juego, luego practica dentro de su propio "sueño" y al final maneja en el juego real.',
        en: 'A world-model agent first learns how the game works, then practices inside its own "dream", and finally drives in the real game.',
      },
      {
        es: 'Pregunta de investigación: ¿aprende con menos horas de juego que Linesight (sin world model)? ¿Se transfiere a pistas que nunca vio?',
        en: 'Research question: does it learn with fewer hours of play than Linesight (no world model)? Does it transfer to unseen tracks?',
      },
    ],
    solution: [
      {
        title: { es: 'Sistema', en: 'System' },
        items: [
          { es: 'DreamerV3 en PyTorch con un adaptador propio y un entorno Gymnasium.', en: 'DreamerV3 in PyTorch with a custom adapter and a Gymnasium environment.' },
          { es: 'TMInterface + ModLoader + plugin AngelScript que habla con Python por socket TCP: inputs, captura de cuadros y guardar/cargar estados.', en: 'TMInterface + ModLoader + an AngelScript plugin talking to Python over TCP: inputs, frame capture and save/load states.' },
          { es: 'Recompensa por avance sobre checkpoints virtuales sacados de vueltas humanas, con bonos y penalizaciones.', en: 'Reward for progress along virtual checkpoints derived from human laps, with bonuses and penalties.' },
          { es: 'Banco de estados estilo Go-Explore: la mitad de los episodios arranca a mitad de pista para practicar las zonas difíciles.', en: 'Go-Explore-style start bank: half of the episodes start mid-track to practice the hard sections.' },
        ],
      },
      {
        title: { es: 'Problemas que resolví', en: 'Problems I solved' },
        items: [
          { es: 'Colapso de política tras el CP2: se destrabó con el banco de estados y más entropía del actor.', en: 'Policy collapse after CP2: fixed with the start bank and higher actor entropy.' },
          { es: 'Atasco de ~3 h en la curva de los 1 840 m a 340–370 km/h: se ajustó la frontera del banco.', en: '~3 h plateau at the 1,840 m corner at 340–370 km/h: fixed by widening the bank frontier.' },
          { es: 'Estancamiento en ~28.7 s: nueva corrida con mayor penalización por paso para empujar velocidad. Resultado: bajó a 26.41 s.', en: 'Plateau at ~28.7 s: new run with a higher per-step penalty to push for speed. Result: down to 26.41 s.' },
        ],
      },
    ],
    metrics: [
      {
        title: { es: 'Resultados (A01, semilla 0)', en: 'Results (A01, seed 0)' },
        items: [
          { value: '26.41 s', label: { es: 'mejor vuelta de la IA', en: 'best AI lap' }, note: { es: 'mi mejor vuelta humana: 28.75 s', en: 'my best human lap: 28.75 s' } },
          { value: '99/100', label: { es: 'últimas vueltas terminadas', en: 'of the last laps finished' } },
          { value: '42 h', label: { es: 'de entrenamiento', en: 'of training' } },
          { value: '3.9 GB', label: { es: 'VRAM máxima', en: 'peak VRAM' } },
        ],
      },
      {
        title: { es: 'Predicción del futuro (PSNR, más alto es mejor)', en: 'Predicting the future (PSNR, higher is better)' },
        items: [
          { value: '22.3 dB', label: { es: 'a 0.5 s (copiar último cuadro: 13.5)', en: 'at 0.5 s (copy last frame: 13.5)' } },
          { value: '19.9 dB', label: { es: 'a 1 s (copiar último cuadro: 12.6)', en: 'at 1 s (copy last frame: 12.6)' } },
          { value: '15.6 dB', label: { es: 'a 3 s (copiar último cuadro: 11.5)', en: 'at 3 s (copy last frame: 11.5)' } },
        ],
      },
    ],
    stack: ['PyTorch', 'DreamerV3', 'Gymnasium', 'Go-Explore', 'TMInterface', 'AngelScript', 'NumPy', 'OpenCV', 'TensorBoard', 'Matplotlib'],
    media: [],
  },
];

export interface MinorProject {
  id: ProjectId;
  name: string;
  description: L;
  tags: string[];
  repo: string;
  context?: L;
  media?: { type: 'video'; src: string; poster: string };
}

export const minorProjects: MinorProject[] = [
  {
    id: 'somnolence',
    name: 'Somnolence Conscience',
    description: {
      es: 'Detector de somnolencia al volante en tiempo real con solo una cámara. Calcula EAR, PERCLOS, bostezos (MAR), cabeceo (head pose) y parpadeo, los combina en un score de fatiga (Normal → Cansado → Somnoliento → Alerta) y dispara una alarma. Incluye un stand interactivo bilingüe con vistas de landmarks, convoluciones, red neuronal, monitor y simulación, y una versión web que corre completa en el navegador.',
      en: 'Real-time drowsy-driving detector using only a camera. It computes EAR, PERCLOS, yawns (MAR), head nodding (head pose) and blink rate, fuses them into a fatigue score (Normal → Tired → Drowsy → Alert) and sounds an alarm. Includes a bilingual interactive booth with landmark, convolution, neural network, monitor and simulation views, plus a web version that runs fully in the browser.',
    },
    context: { es: 'Global Transportation & Innovation Summit · Cintermex · en representación de la UANL', en: 'Global Transportation & Innovation Summit · Cintermex · representing UANL' },
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'JavaScript', 'WASM'],
    repo: 'https://github.com/JDHVa/somnolence-conciencie',
  },
  {
    id: 'wc-ml',
    name: 'WC-ML Dixon-Coles',
    description: {
      es: 'Sistema de predicciones para el Mundial 2026 con el modelo estadístico Dixon-Coles. Le atinó a casi todos los partidos, salvo algunos de eliminatoria, la final y los de México.',
      en: 'Prediction system for the 2026 World Cup using the Dixon-Coles statistical model. It called almost every match, except a few knockout games, the final and Mexico’s games.',
    },
    tags: ['Python', 'Estadística', 'ML'],
    repo: 'https://github.com/JDHVa/WC-ML-DixonColes',
  },
  {
    id: 'pi-gem',
    name: 'PI-Gem',
    description: {
      es: 'Asistente gamer que detecta tus emociones y conversa contigo. Prototipo técnico.',
      en: 'Gaming assistant that detects your emotions and talks with you. Technical prototype.',
    },
    context: { es: 'HackDays Tec', en: 'HackDays Tec' },
    tags: ['Visión', 'Voz', 'LLM'],
    repo: 'https://github.com/JDHVa/PI-Gem',
    media: { type: 'video', src: '/media/videos/hackdaystec-ev1.mp4', poster: '/media/videos/hackdaystec-ev1.jpg' },
  },
];

export interface Role {
  title: L;
  org: string;
  description: L;
  period?: L;
  image?: string;
}

export const education = {
  degree: { es: 'Técnico en Inteligencia Artificial', en: 'Technical Degree in Artificial Intelligence' },
  school: 'EIAO · UANL',
  schoolFull: 'Escuela Industrial y Preparatoria Técnica "Álvaro Obregón" · UANL',
  status: { es: '5.º semestre', en: '5th semester' },
};

export const experience: Role[] = [
  {
    title: { es: 'AI Intern Developer', en: 'AI Intern Developer' },
    org: 'Fourier',
    image: 'evidencias/fourier.jpeg',
    period: { es: 'Mayo 2026 – actualidad', en: 'May 2026 – present' },
    description: {
      es: 'Automatización: desarrollo full-stack y flujos con n8n.',
      en: 'Automation: full-stack development and n8n workflows.',
    },
  },
  {
    title: { es: 'Coordinador de Proyectos con IA', en: 'AI Projects Coordinator' },
    org: 'Coordinación de Inteligencia Artificial · EIAO',
    image: 'evidencias/coordinador-ia-proyectrois.jpeg',
    description: {
      es: 'Coordinación de proyectos con inteligencia artificial en la escuela.',
      en: 'Coordinating artificial intelligence projects at school.',
    },
  },
  {
    title: { es: 'Lead Programmer', en: 'Lead Programmer' },
    org: 'Iron Lion 4977 · FRC',
    image: 'evidencias/ironlion.jpeg',
    description: {
      es: 'Entré como apoyo y por mi nivel de programación los coaches me nombraron lead programmer. Hoy dirijo la programación del robot del equipo de FIRST Robotics Competition.',
      en: 'I joined as support and, because of my programming skills, the coaches named me lead programmer. I now lead the robot programming for our FIRST Robotics Competition team.',
    },
  },
  {
    title: { es: 'Fundador y Coordinador General', en: 'Founder & General Coordinator' },
    org: 'Lumen',
    image: 'evidencias/lumen-fundador.jpeg',
    description: { es: 'Red de apoyo alumno a alumno con 23 zhenshis y 150+ personas impactadas.', en: 'Peer-to-peer support network with 23 zhenshis and 150+ people reached.' },
  },
  {
    title: { es: 'Instructor de IA', en: 'AI Instructor' },
    org: 'EIAO',
    image: 'evidencias/clases-ia.jpeg',
    description: {
      es: 'Clases de inteligencia artificial y lógica de programación para 31 estudiantes.',
      en: 'Artificial intelligence and programming logic classes for 31 students.',
    },
  },
  {
    title: { es: 'Organizador', en: 'Organizer' },
    org: 'Haven Hack Club MTY',
    image: 'evidencias/haven-organizador.jpeg',
    description: { es: 'Organización del game jam Haven en Monterrey.', en: 'Organizing the Haven game jam in Monterrey.' },
  },
  {
    title: { es: 'Organizador', en: 'Organizer' },
    org: 'Sábado de Ciencia · Horno 3',
    image: 'evidencias/sabadodeciencia.jpeg',
    description: { es: 'Divulgación científica.', en: 'Science outreach.' },
  },
  {
    title: { es: 'Divulgador', en: 'Science communicator' },
    org: 'DivulgaCiencia UANL 2026',
    image: 'evidencias/divulgaciencia.jpeg',
    description: {
      es: 'Difusión de proyectos de inteligencia artificial.',
      en: 'Sharing artificial intelligence projects with the public.',
    },
  },
  {
    title: { es: 'Expositor en representación de la UANL', en: 'Exhibitor representing UANL' },
    org: 'Global Transportation & Innovation Summit',
    image: 'evidencias/global-innovation.jpeg',
    description: {
      es: 'Presenté en Cintermex un detector de somnolencia al volante con visión por computadora y un stand interactivo.',
      en: 'Presented a computer-vision drowsy-driving detector with an interactive booth at Cintermex.',
    },
  },
];

export interface Achievement {
  title: L;
  detail?: L;
  image?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  { title: { es: 'Top 3 · HackMTY 2026', en: 'Top 3 · HackMTY 2026' }, detail: { es: 'Altur Challenge', en: 'Altur Challenge' }, image: 'logros/hackmty3.jpeg', featured: true },
  { title: { es: 'Finalista estatal de Física', en: 'State Physics Olympiad finalist' }, image: 'logros/finalista-fisica.jpeg', featured: true },
  { title: { es: 'Clubes de Ciencia México', en: 'Clubes de Ciencia México' }, image: 'logros/clubesdeciencia.jpeg', featured: true },
  { title: { es: 'Lead Programmer · Iron Lion 4977 FRC', en: 'Lead Programmer · Iron Lion 4977 FRC' }, image: 'logros/ironlion.jpeg', featured: true },
  { title: { es: 'Organizador · Haven Hack Club MTY', en: 'Organizer · Haven Hack Club MTY' }, image: 'logros/haven-jesus.png', featured: true },
  { title: { es: 'Organizador · Sábado de Ciencia Horno 3', en: 'Organizer · Sábado de Ciencia Horno 3' }, featured: true },
  { title: { es: 'Podio · Concurso Interpreparatorias UANL 2026', en: 'Podium · UANL Inter-High School Contest 2026' }, detail: { es: 'TerraOrbis', en: 'TerraOrbis' }, image: 'logros/podio-uanl.jpeg', featured: true },
  { title: { es: 'Becario Bilingüe Progresivo · UANL', en: 'Progressive Bilingual scholar · UANL' }, detail: { es: 'Beca de Rectoría', en: 'Rectory scholarship' } },
  { title: { es: '1.er lugar de la preparatoria', en: '#1 student in my high school' }, detail: { es: 'Exención de cuota interna', en: 'Tuition fee waiver' } },
  { title: { es: 'Olimpiadas STEM Nuevo León 2025', en: 'STEM Olympiad Nuevo León 2025' }, detail: { es: 'TerraOrbis', en: 'TerraOrbis' } },
  { title: { es: 'Debate · Tecmilenio', en: 'Debate · Tecmilenio' } },
  { title: { es: 'Participante · Daydream (Hack Club)', en: 'Participant · Daydream (Hack Club)' } },
];

export const about = {
  lookingFor: {
    es: 'Busco colaboradores, oportunidades para construir cosas y becas.',
    en: 'Looking for collaborators, opportunities to build things and scholarships.',
  },
  nextStudies: {
    es: 'Quiero estudiar Ingeniería en Robótica o Ciencias de la Computación.',
    en: 'I want to study Robotics Engineering or Computer Science.',
  },
  learning: { es: 'Cursando: especialización de DeepLearning.AI', en: 'In progress: DeepLearning.AI specialization' },
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2 aprox.', en: '~B2' } },
    { name: { es: 'Chino', en: 'Chinese' }, level: { es: 'A1', en: 'A1' } },
    { name: { es: 'Japonés', en: 'Japanese' }, level: { es: 'Básico', en: 'Basic' } },
  ],
  duolingo: { es: '900+ días de racha en Duolingo (para larpear)', en: '900+ day Duolingo streak (for larping purposes)' },
  interests: [
    { es: 'One Piece', en: 'One Piece' },
    { es: 'Olivia Rodrigo (GUTS en loop)', en: 'Olivia Rodrigo (GUTS on repeat)' },
    { es: 'Vegeta777', en: 'Vegeta777' },
    { es: 'Furina', en: 'Furina' },
  ],
  purpleNote: {
    es: '¿Por qué tanto morado? Culpa de GUTS y de Vegeta777.',
    en: 'Why so much purple? Blame GUTS and Vegeta777.',
  },
};

export interface SkillGroup {
  title: L;
  kind: 'concept' | 'tool' | 'human';
  items: { name: L | string; projects: ProjectId[] }[];
}

export const skills: SkillGroup[] = [
  {
    title: { es: 'Conceptos e investigación', en: 'Concepts & research' },
    kind: 'concept',
    items: [
      { name: { es: 'World models y RL', en: 'World models & RL' }, projects: ['trackmania'] },
      { name: { es: 'Visión por computadora', en: 'Computer vision' }, projects: ['terraorbis', 'pi-gem', 'somnolence'] },
      { name: { es: 'Anti-spoofing de voz', en: 'Voice anti-spoofing' }, projects: ['centinel'] },
      { name: { es: 'Fusión multimodal y calibración', en: 'Multimodal fusion & calibration' }, projects: ['terraorbis', 'centinel'] },
      { name: { es: 'Redes de grafos (GNN)', en: 'Graph neural networks' }, projects: ['terraorbis'] },
      { name: { es: 'Inferencia bayesiana y Monte Carlo', en: 'Bayesian inference & Monte Carlo' }, projects: ['terraorbis'] },
      { name: { es: 'Modelado estadístico', en: 'Statistical modeling' }, projects: ['wc-ml', 'terraorbis'] },
      { name: { es: 'Redes neuronales de impulsos', en: 'Spiking neural networks' }, projects: ['terraorbis'] },
      { name: { es: 'Edge AI', en: 'Edge AI' }, projects: ['terraorbis', 'centinel'] },
      { name: { es: 'Control de IA agéntica', en: 'Agentic AI orchestration' }, projects: [] },
    ],
  },
  {
    title: { es: 'IA y ML', en: 'AI & ML' },
    kind: 'tool',
    items: [
      { name: 'PyTorch', projects: ['terraorbis', 'centinel', 'trackmania'] },
      { name: 'Hugging Face', projects: ['centinel'] },
      { name: 'scikit-learn', projects: ['centinel'] },
      { name: 'LightGBM', projects: ['terraorbis'] },
      { name: 'YOLOv8', projects: ['terraorbis'] },
      { name: 'DINOv2', projects: ['terraorbis'] },
      { name: 'Whisper', projects: ['centinel'] },
      { name: 'DreamerV3', projects: ['trackmania'] },
      { name: 'Gymnasium', projects: ['trackmania'] },
      { name: 'n8n', projects: [] },
    ],
  },
  {
    title: { es: 'Robótica y hardware', en: 'Robotics & hardware' },
    kind: 'tool',
    items: [
      { name: 'ROS 2', projects: ['terraorbis'] },
      { name: 'Nav2 / SLAM', projects: ['terraorbis'] },
      { name: 'Raspberry Pi', projects: ['terraorbis', 'centinel'] },
      { name: 'Hailo-8', projects: ['terraorbis'] },
      { name: 'Arduino / LoRa', projects: ['terraorbis'] },
      { name: { es: 'Impresión 3D', en: '3D printing' }, projects: ['terraorbis'] },
      { name: 'FRC', projects: [] },
    ],
  },
  {
    title: { es: 'Audio y visión', en: 'Audio & vision' },
    kind: 'tool',
    items: [
      { name: 'torchaudio / librosa', projects: ['centinel'] },
      { name: 'OpenCV', projects: ['trackmania', 'terraorbis', 'somnolence'] },
      { name: 'MediaPipe', projects: ['somnolence'] },
      { name: 'ffmpeg', projects: ['centinel', 'trackmania'] },
    ],
  },
  {
    title: { es: 'Backend e infraestructura', en: 'Backend & infra' },
    kind: 'tool',
    items: [
      { name: 'Python', projects: ['terraorbis', 'centinel', 'trackmania', 'wc-ml', 'pi-gem'] },
      { name: 'FastAPI', projects: ['centinel'] },
      { name: 'Docker', projects: ['centinel', 'lumen'] },
      { name: 'PostgreSQL', projects: ['lumen'] },
      { name: 'Modal', projects: ['centinel'] },
      { name: 'Vercel', projects: ['lumen'] },
    ],
  },
  {
    title: { es: 'Web', en: 'Web' },
    kind: 'tool',
    items: [
      { name: 'TypeScript', projects: ['lumen'] },
      { name: 'React', projects: ['lumen'] },
      { name: 'Astro', projects: ['lumen'] },
      { name: 'Next.js', projects: ['centinel'] },
      { name: 'Tailwind', projects: ['centinel'] },
    ],
  },
  {
    title: { es: 'Habilidades humanas', en: 'Human skills' },
    kind: 'human',
    items: [
      { name: { es: 'Liderazgo', en: 'Leadership' }, projects: ['lumen', 'centinel'] },
      { name: { es: 'Organización de eventos', en: 'Event organizing' }, projects: [] },
      { name: { es: 'Divulgación científica', en: 'Science outreach' }, projects: ['lumen'] },
      { name: { es: 'Oratoria', en: 'Public speaking' }, projects: [] },
    ],
  },
];

export const stats: { value: string; label: L }[] = [
  { value: '150+', label: { es: 'personas impactadas con Lumen', en: 'people reached with Lumen' } },
  { value: 'Top 3', label: { es: 'HackMTY 2026', en: 'HackMTY 2026' } },
  { value: '26.41 s', label: { es: 'mi IA me ganó en TrackMania', en: 'my AI beat me at TrackMania' } },
  { value: '99.2 %', label: { es: 'detectando voces de IA', en: 'detecting AI voices' } },
];

export const socials: { name: string; href: string }[] = [
  { name: 'GitHub', href: 'https://github.com/JDHVa' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jdhva/' },
  { name: 'Hugging Face', href: 'https://huggingface.co/JDHVa' },
  { name: 'Instagram', href: 'https://www.instagram.com/jesus.lstm/' },
];

export const email = 'jesust9x@gmail.com';
