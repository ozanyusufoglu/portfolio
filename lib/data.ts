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
  },
  {
    title:
      'Use sessions to manage time and track your accumulated progress',
    description:
      'Pomodoros, apples or bananas, choose your optimal time windows to realize your goals, visualize your outputs',
    alt: 'Minimal context switch',
    detail:
      'Use pomodoro teqnique, flowtime or create your custom sessions',
    src: pomodoro,
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

export const posts = [
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
    body: `Attention is a central concept in cognitive psychology and neuroscience. 
      Researchers study attentional processes to understand how individuals select and focus on certain stimuli while ignoring others. Models such as the spotlight model of attention and the feature integration theory provide frameworks for understanding how attention operates.

      There is ongoing research into the relationship between the design of technology products and attention problems, such as attention deficit hyperactivity disorder (ADHD) or general distractibility. While the evidence is not yet conclusive, there is a growing concern that certain aspects of technology design could be exacerbating attention problems in society.
      
      One area of concern is the use of notifications and alerts, which can be highly distracting and can interrupt the flow of a task or activity. Studies have shown that these interruptions can have a negative impact on productivity and attention, and some have suggested that designers should be more mindful of the frequency and timing of notifications.
      
      Another area of concern is the "gamification" of technology, which refers to the use of game-like elements such as points, rewards, and badges to encourage user engagement. While gamification can be a powerful motivator, some critics argue that it can also be addictive and encourage users to engage with technology in a way that is not always healthy or productive.
      
      There are also concerns about the use of certain colors, sounds, and visual effects in technology design, which can be highly stimulating and potentially overstimulating for some users. These design elements may be used intentionally to capture and hold the user's attention, but they could also contribute to attention problems in certain individuals.
      
      While it is possible that some product designers are exploiting the cognitive system of users, it is important to note that most designers are likely not intentionally trying to harm their users. However, there is a growing movement for "ethical design," which emphasizes the need for designers to consider the impact of their work on users' well-being and to design products that are mindful of users' attention and cognitive resources.`,
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
