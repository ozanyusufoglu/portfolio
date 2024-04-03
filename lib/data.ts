export const features = [
       { title: "Minimize Context Switch", 
        description: "Don't jump between browser tabs. Monkeymind keeps your workflow in single a page by bringing your goals, actions and tools together.",
        alt:"Minimal context switch",
        src:"/session_feedback.png"
    },{
        title: "Use your time efficiently with sessions", 
        description: "Pomodoros, apples or bananas, choose your optimal time windows to realize your goals, track and visualize your outputs",
        alt:"Minimal context switch",
        src:"/runningPomodoro.png"
    }
] as const


export const links = [
    {
        title:"Home",
        link:"/"
    },
    {
        title:"About",
        link:"/about"
    },
    {
        title:"Blog",
        link:"/posts"
    },
] as const

export const posts = [
  { 
    slug: "time",
    title: "Time",
    icon: "🍅",  
    previewItems: [
      "Full-stack App Framework",
      "All-in-one backend services",
      "Working on both client and server side",
      "Easy integration with Vercel",
    ],
    content:
      "Temporal processing is another area of interest in cognitive psychology. Researchers investigate how individuals perceive and process time, how attention fluctuates over time, and how time affects cognitive processes such as memory and decision-making."
  },
     
   ,
    {
      slug: "attention",
      title: "Attention",
      icon: "🧠",
      previewItems: [
        "Reusable UI components",
        "Dynamically working onon client side",
        "code downloads to browser",
      ],
      content:
       "Attention is a central concept in cognitive psychology and neuroscience. Researchers study attentional processes to understand how individuals select and focus on certain stimuli while ignoring others. Models such as the spotlight model of attention and the feature integration theory provide frameworks for understanding how attention operates."
      },
      {
        slug: "information",
        title: "Information",
        icon: "🥫",
        previewItems: [
          "Programming language",
          "Makes your UI programmable",
          "Lets you to fetch data",
        ],
        content:"Information processing theories in psychology describe how individuals perceive, encode, store, and retrieve information. These theories often consider factors such as the amount of information presented, its complexity, and its relevance to the task at hand. Information theory, developed by Claude Shannon, provides a mathematical framework for quantifying information content."
      }
  ] as const;

