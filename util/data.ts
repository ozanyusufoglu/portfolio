import kuko from '@/public/kuko_homepage.png';
import monkeymind_landing from '@/public/monkeymind_landing.png';
import { SiTailwindcss } from 'react-icons/si';

export const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Work',
    link: '/work',
  },
] as const;

export const techs = [{ title: 'Tailwind', SVG: SiTailwindcss }];
export const projects = [
  {
    title: 'Monkeymind',
    slug: 'monkeymind',
    description:
      'Monkeymind is an AI based productivity tool designed to help users strengthen their cognitive muscles, enabling them to stay focused and attentive to their goals. Create your custom sessions to realize goals and track earnings of your actions.',
    personal: true,
    link: 'https://www.monkeymind.ai',
    dates: 'May 2023',
    company: null,
    misc: null,
    duration: null,
    icon: null,
    body: null,
    previewItems: null,
    tools: ['React', 'Next.js', 'Firebase', 'OpenAI API', 'Framer API'],
    tags: [
      'attention',
      'productivity',
      'pomodoro',
      'time management',
      'action-driven progress',
    ],
    imageUrl: monkeymind_landing,
  },
  {
    title: 'KUKO Leipzig Event Site',
    description:
      'Kültür Kollektiv Leipzig e.V. - Association for transcultural change of perspective, encounter and exchange with people, languages, literatures, cultures, art and music from Turkey in Leipzig.',
    slug: 'kuko',
    personal: true,
    link: 'https://www.kuko-leipzig.de/',
    dates: '2021',
    position: null,
    company: null,
    misc: null,
    duration: null,
    icon: null,
    body: null,
    previewItems: null,
    tags: ['Leipzig', 'community', 'events', 'culture', 'solidarity'],
    tools: ['Ruby', 'middleman', 'SSG', 'headless CMS'],
    imageUrl: kuko,
  },
  {
    title: 'Isoolate Cyber-Security',
    description:
      'Isoolate is an enterprise security platform providing browser isolation and manageability against against critical web-born threads. I carried out early phase R&D process and product development. We took part successfully in ITU Innogate Startup Accelerator 12th cohort as a promising cyber-security solution',
    slug: null,
    personal: false,
    link: null,
    dates: '',
    company: 'Isoolate',
    position: 'Product Manager',
    misc: null,
    duration: '2 years',
    icon: null,
    body: null,
    previewItems: null,
    tags: [
      'cybersecurity',
      'browser-isolation',
      'zero-trust',
      'phishing-protection',
    ],
    tools: null,
    imageUrl: null,
  },
  {
    title: 'Sales Monitoring Platform for Fast Moving Consumer Goods',
    description:
      'ESM is a retail sales monitoring platform enabling real-time sales data aggregation from legacy POS systems through a low-cost IoT embedded board. Our machine/ software agnostic board empowered us to seamlessly handle live data previously gathered manually from the field, eliminating human error and delayed time cost. I actively involved in the pilot deployment of 200 devices in major cities of Turkey. My key learning was the significance of the human factor in real-world scenarios and thinking interaction and technology design together.',
    slug: null,
    personal: false,
    link: null,
    dates: '2016 - 2018',
    company: 'Yenihayat Informatics',
    position: 'R&D Manager',
    misc: 'Major Tabacco Company',
    duration: '2 years',
    icon: null,
    body: null,
    previewItems: null,
    tags: ['FMCG', 'IoT', 'Retail', 'PoS', 'Data aggregation'],
    tools: null,
    imageUrl: null,
  },
  {
    title: 'Cloud-based Point-of-Sale Application for IoT Ready Platform',
    description:
      'Retail management platform and cloud-based point-of-sale application running on Beko 520TR IoT Ready hardware, integrated with new-generation cash registers according to new Turkish law. In cooperation with Arçelik A.Ş. ',
    slug: null,
    personal: false,
    link: null,
    dates: null,
    company: 'Yenihayat Informatics',
    position: 'R&D Manager',
    misc: 'TÜBİTAK 1507 R&D Programme',
    duration: '2 years',
    icon: null,
    body: null,
    previewItems: null,
    tags: null,
    tools: null,
    imageUrl: null,
  },
  {
    title: 'High-density DVB-IP Transmodulator Appliance ',
    description:
      'Scalable and modular digital headend platform featuring trans-modulation between QPSK/QAM and IP television sources, PID analysis and filtering. ',
    slug: null,
    personal: false,
    link: null,
    dates: '2015-2016',
    company: 'Yenihayat Informatics',
    position: 'R&D Manager',
    misc: 'TÜBİTAK 1507 R&D Programme',
    duration: null,
    icon: null,
    body: null,
    previewItems: null,
    tags: ['Iptv', 'Digital Video Broadcasting'],
    tools: null,
    imageUrl: null,
  },
  {
    title: 'DVB-IP Streamer Middleware Platform for Hospitality',
    description:
      'All-in-one IPTV streaming platform capable of QPSK demodulation and MPTS, set-top box & user management, VoD, and digital services over STB.',
    slug: null,
    personal: false,
    link: null,
    dates: '2013',
    company: 'Yenihayat Informatics',
    position: 'R&D Manager',
    misc: 'KOSGEB R&D SME Grant Program 2013.33',
    duration: '18 months',
    icon: null,
    body: null,
    previewItems: null,
    tags: ['IPTV', 'Set-Top-Box', 'Video-on-Demand', 'Hospitaility'],
    tools: null,
    imageUrl: null,
  },
] as const;

export const experiences = [
  {
    company: 'Scrimba',
    description:
      'I join to the bootcamp to retool myself with advanced React and ecosystem ',
    position: 'React Bootcamp',
    dates: '6 months, 2023',
    duration: '6 months',
    link: 'https://scrimba.com/',
    projects: null,
    type: 'training',
  },
  {
    company: 'Freelance',
    description: '',
    position: 'R&D Consultant',
    dates: '2022-present',
    duration: '',
    link: '',
    projects: null,
    type: 'work',
  },
  {
    company: 'Innogate Startup Accelerator',
    description:
      'Innogate is an accelerator program for early phase startups, preparing companies ready for US market',
    position: 'Product Manager',
    dates: '6 months, 2020',
    duration: '6 months',
    link: 'https://innogate.org/en/homepage/',
    projects: null,
    type: 'training',
  },
  {
    company: 'Isoolate Cyber-Security',
    description:
      'Isoolate is an enterprise security platform providing browser isolation and manageability against against critical web-born threads. I carried out early phase R&D process and product development. We took part successfully in ITU Innogate Startup Accelerator 12th cohort as a promising cyber-security solution.  ',
    position: 'Product Manager',
    dates: '2019 - 2020',
    duration: '1 year',
    link: 'https://www.defensx.com/',
    projects: null,
    type: 'work',
  },

  {
    company: 'Yenihayat Informatics',
    position: 'R&D Manager',
    description:
      'I coordinated multiple software projects supported by The Scientific and Technological Research Council of Turkey (TÜBİTAK), the national partner of the EU Horizon 2020 Programme in Turkey. In addition to my roles in technical writing for R&D grants and coordinating the development team according to the roadmap, I played a key role in the product development process, ensuring our projects met market needs and maintained high standards of innovation. I also managed the technical and financial reporting of deliverables. These efforts secured valuable financial resources for our early-phase innovative products. Our MVPs successfully evolved into proprietary solutions within the industry.',
    dates: '2013 - 2021',
    link: 'https://www.yh.com.tr/en/',
    duration: '8 years',
    type: 'work',
    projects: [
      {
        title: 'Browser Virtualization Protocol for Seamless Data Security',
        description:
          'Browser isolation is a paradigm-shifting technology replacing traditional cyber security measures by virtualizing browsers in remote servers and streaming only the video output the user with seamless remote control. ',
        slug: null,
        personal: false,
        link: null,
        dates: '2016-2018',
        duration: null,
        misc: 'TÜBİTAK 1507 R&D Programme',
        icon: null,
        body: null,
        previewItems: [],
        tags: ['virtualization', 'rdp', 'remote rendering', 'cybersecurity'],
        tools: [],
        imageUrl: null,
      },
      {
        title: 'Sales Monitoring Platform for Fast Moving Consumer Goods',
        description:
          'ESM is a retail sales monitoring platform enabling real-time sales data aggregation from legacy POS systems through a low-cost IoT embedded board. Our machine/ software agnostic board empowered us to seamlessly handle live data previously gathered manually from the field, eliminating human error and delayed time cost. I actively involved in the pilot deployment of 200 devices in major cities of Turkey. My key learning was the significance of the human factor in real-world scenarios and thinking interaction and technology design together.',
        slug: null,
        personal: false,
        link: null,
        dates: '2016-2018',
        duration: null,
        misc: 'Major Tabacco Company',
        icon: null,
        body: null,
        previewItems: [],
        tags: ['FMCG', 'IoT', 'Retail', 'PoS', 'Data aggregation'],
        tools: [],
        imageUrl: null,
      },
      {
        title: 'Cloud-based Point-of-Sale Application for IoT Ready Platform',
        description:
          'Retail management platform and cloud-based point-of-sale application running on Beko 520TR IoT Ready hardware, integrated with new-generation cash registers according to new Turkish law. In cooperation with Arçelik A.Ş. ',
        slug: null,
        personal: false,
        link: null,
        dates: '2016 - 2018',
        duration: null,
        misc: 'TÜBİTAK 1507 R&D Programme',
        icon: null,
        body: null,
        previewItems: null,
        tags: null,
        tools: null,
        imageUrl: null,
      },
      {
        title: 'High-density DVB-IP Transmodulator Appliance ',
        description:
          'Scalable and modular digital headend platform featuring trans-modulation between QPSK/QAM and IP television sources, PID analysis and filtering. ',
        slug: null,
        personal: false,
        link: null,
        dates: '2015-2016',
        misc: 'TÜBİTAK 1507 R&D Programme',
        duration: 'string',
        icon: null,
        body: null,
        previewItems: [],
        tags: ['IPTV', 'Digital Video Broadcasting'],
        tools: null,
        imageUrl: null,
      },
      {
        title: 'DVB-IP Streamer Middleware Platform for Hospitality',
        description:
          'All-in-one IPTV streaming platform capable of QPSK demodulation and MPTS, set-top box & user management, VoD, and digital services over STB.',
        slug: null,
        personal: false,
        link: null,
        dates: '2013',
        misc: 'KOSGEB R&D SME Grant Program 2013.33',
        duration: null,
        icon: null,
        body: null,
        previewItems: [],
        tags: ['Set-Top-Box', 'Video-on-Demand', 'Hospitaility'],
        tools: null,
        imageUrl: null,
      },
    ],
  },

  {
    company: 'Protel Turkey',
    description: '',
    position: 'Software Engineer',
    dates: '2011 - 2013',
    duration: '1 year',
    link: 'https://www.protelturkey.com/en/',
    projects: null,
    type: 'work',
  },
];
