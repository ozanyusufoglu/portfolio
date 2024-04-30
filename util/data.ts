import pomodoro from '@/public/pomodoro.png';
import feedback from '@/public/feedback.png';
import kuko from '@/public/kuko_homepage.png';
import monkeymind_landing from '@/public/monkeymind_landing.png';

import { truncateSync } from 'fs';

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
      'Monkeymind is an AI based attention and productivity assistant helping user to build a solid framework of time and goal management. You can create your custom sessions to realize goals and track earnings of your actions. It’s a handmade project where all components written from scratch with vanilla CSS.',
    personal: true,
    link: '',
    dates: 'May 2023 ',
    company: '',
    misc: '',
    duration: '',
    icon: '',
    body: '',
    previewItems: [],
    tags: ['React', 'Nextjs', 'Firebase', 'OpenAI', 'Framer Motion'],
    imageUrl: monkeymind_landing,
  },
  {
    title: 'KUKO Leipzig, Event Management',
    description:
      'Kültür Kollektiv Leipzig e.V. - Association for transcultural change of perspective, encounter and exchange with people, languages, literatures, cultures, art and music from Turkey in Leipzig.',
    slug: 'kuko',
    personal: true,
    link: 'https://www.kuko-leipzig.de/',
    dates: '2021',
    company: '',
    misc: '',
    duration: '',
    icon: '',
    body: '',
    previewItems: [],
    tags: ['ruby', 'middleman', 'SSG', 'netlify', 'headless CMS'],
    imageUrl: kuko,
  },
  {
    title: 'Sales Monitoring Platform for Fast Moving Consumer Goods',
    description:
      'ESM is a retail sales monitoring platform enabling real-time sales data aggregation from legacy POS systems through a low-cost IoT embedded board. Our machine/ software agnostic board empowered us to seamlessly handle live data previously gathered manually from the field, eliminating human error and delayed time cost. I actively involved in the pilot deployment of 200 devices in major cities of Turkey. My key learning was the significance of the human factor in real-world scenarios and thinking interaction and technology design together.',
    slug: '',
    personal: false,
    link: '',
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
    link: '',
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
    link: '',
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
    link: '',
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
