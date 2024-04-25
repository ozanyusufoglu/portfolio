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
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Posts',
    link: '/posts',
  },
] as const;

export const values = [
  {
    title: 'Time',
    slug: 'time',
    icon: '🍅',
    cover: '',
    previewItems: [],
    body: 'Temporal processing is another area of interest in cognitive psychology. Researchers investigate how individuals perceive and process time, how attention fluctuates over time, and how time affects cognitive processes such as memory and decision-making. ',
  },
  {
    title: 'Attention',
    slug: 'attention',
    cover: '',
    icon: '🧠',
    previewItems: [],
    body: 'Attention is a central concept in cognitive psychology and neuroscience',
  },
  {
    title: 'Information',
    slug: 'information',
    cover: '',
    icon: '🥫',
    previewItems: [],
    body: 'Information processing theories in psychology describe how individuals perceive, encode, store, and retrieve information. These theories often consider factors such as the amount of information presented, its complexity, and its relevance to the task at hand. Information theory, developed by Claude Shannon, provides a mathematical framework for quantifying information content.',
  },
] as const;
