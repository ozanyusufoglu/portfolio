import pomodoro from '@/public/pomodoro.png';
import feedback from '@/public/feedback.png';

export const features = [
  {
    title: 'Minimize Context Switch',
    description:
      "Don't jump between browser tabs. Monkeymind keeps your workflow in a single page by bringing your goals, actions and tools together.",
    alt: 'No context switch',
    detail: '',
    src: feedback,
    previewItems: [
      'Create actions to realize your goals',
      'Stay focused on a single action at a time',
      'Use your tools to enhance your sessions',
    ],
  },
  {
    title: 'Use sessions to manage time and track your accumulated progress',
    description:
      'Pomodoros, apples or bananas, choose your optimal time window to realize actions, visualize your progress',
    alt: 'Minimal context switch',
    detail: 'Use pomodoro teqnique, flowtime or create your custom sessions',
    src: pomodoro,
    previewItems: [
      'Create actions to realize your goals',
      'Stay focused on a single action at a time',
      'Use your tools to enhance your sessions',
    ],
  },
  {
    title: 'Let the tech serve for you, not the other way around',
    description:
      'Use AI to maximise your learning, take notes and track outputs of your actions',
    alt: 'Minimal context switch',
    detail: 'Use pomodoro teqnique, flowtime or create your custom sessions',
    src: feedback,
    previewItems: [
      'Create actions to realize your goals',
      'Stay focused on a single action at a time',
      'Use your tools to enhance your sessions',
    ],
  },
] as const;

export const links = [
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Resume',
    link: '/resume',
  },
] as const;

export const projects = [
  {
    title: 'Monkeymind',
    description:
      'Browser isolation is a paradigm-shifting technology replacing traditional cyber security measures by virtualizing browsers in remote servers and streaming only the video output the user with seamless remote control. ',
    slug: '',
    personal: false,
    dates: '2018-2020',
    company: '',
    misc: 'TÜBİTAK 1507 R&D Programme',
    duration: '2 years',
    icon: '',
    body: '',
    previewItems: [],
    tags: [
      'cyber-security',
      'browser isolation',
      'phishing',
      'virtualization',
      'remote-browser',
    ],
    imageUrl: pomodoro,
  },
  {
    title: 'Browser Virtualization Protocol for Seamless Data Security',
    description:
      'Browser isolation is a paradigm-shifting technology replacing traditional cyber security measures by virtualizing browsers in remote servers and streaming only the video output the user with seamless remote control. ',
    slug: '',
    personal: false,
    dates: '2018-2020',
    company: '',
    misc: 'TÜBİTAK 1507 R&D Programme',
    duration: '2 years',
    icon: '',
    body: '',
    previewItems: [],
    tags: [
      'cyber-security',
      'browser isolation',
      'phishing',
      'virtualization',
      'remote-browser',
    ],
    imageUrl: feedback,
  },
  {
    title: 'Sales Monitoring Platform for Fast Moving Consumer Goods',
    description:
      'ESM is a retail sales monitoring platform enabling real-time sales data aggregation from legacy POS systems through a low-cost IoT embedded board. Our machine/ software agnostic board empowered us to seamlessly handle live data previously gathered manually from the field, eliminating human error and delayed time cost. I actively involved in the pilot deployment of 200 devices in major cities of Turkey. My key learning was the significance of the human factor in real-world scenarios and thinking interaction and technology design together.',
    slug: '',
    personal: false,
    dates: '2016-2018',
    company: 'Yenihayat Informatics',
    misc: 'Major Tabacco Company',
    duration: '2 years',
    icon: '',
    body: '',
    previewItems: [],
    tags: ['FMCG', 'IoT', 'Retail', 'PoS', 'Data aggregation'],
    imageUrl: feedback,
  },
  {
    title: 'Cloud-based Point-of-Sale Application for IoT Ready Platform',
    description:
      'Retail management platform and cloud-based point-of-sale application running on Beko 520TR IoT Ready hardware, integrated with new-generation cash registers according to new Turkish law. In cooperation with Arçelik A.Ş. ',
    slug: '',
    personal: false,
    dates: '',
    company: 'Yenihayat Informatics',
    misc: 'TÜBİTAK 1507 R&D Programme',
    duration: '2 years',
    icon: '',
    body: '',
    previewItems: [],
    tags: [],
    imageUrl: feedback,
  },
  {
    title: 'High-density DVB-IP Transmodulator Appliance ',
    description:
      'Scalable and modular digital headend platform featuring trans-modulation between QPSK/QAM and IP television sources, PID analysis and filtering. ',
    slug: '',
    personal: false,
    dates: '2015-2016',
    company: 'Yenihayat Informatics',
    misc: 'TÜBİTAK 1507 R&D Programme',
    duration: 'string',
    icon: '',
    body: '',
    previewItems: [],
    tags: [],
    imageUrl: feedback,
  },
  {
    title: 'DVB-IP Streamer Middleware Platform for Hospitality',
    description:
      'All-in-one IPTV streaming platform capable of QPSK demodulation and MPTS, set-top box & user management, VoD, and digital services over STB.',
    slug: '',
    personal: false,
    dates: '',
    company: '',
    misc: 'KOSGEB R&D SME Grant Program 2013.33',
    duration: 'string',
    icon: '',
    body: '',
    previewItems: [],
    tags: [],
    imageUrl: feedback,
  },
] as const;
