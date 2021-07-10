import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Raj Singh Parihar',
  subtitle: "I'm a Student at IIIT Hyderabad",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "I'm a student at IIIT-H, I code when I'm not gaming.",
  paragraphTwo: "I like game development in unity, video editing and content creation for youtube. I've been spending most of my time trying to learn new skills recently, my most recently learned skill is web scraping using Beautiful soup library from python.",
  paragraphThree: 'Currently working on a IoT based project for Ease of Lab Experiments performed virtually : Remote Triggered Lab as my honors research project',
  resume: 'https://drive.google.com/file/d/1q1XSdKAMbhXedLv1JMegZubqwwWcQ5lI/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Space Invaders: PyGame',
    info: 'This was my first attempt at game development, A classic game',
    info2: 'made using pygame, the motive of this project was to learn how to use various libraries in python and integrate them in a working app/game',
    url: 'https://www.youtube.com/watch?v=xi-AxAlxCAo',
    repo: 'https://github.com/rajsinghparihar/PyGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'PsypherX: CLI App for Password Encryption',
    info: 'Secure your passwords with AES encryption with this cool terminal text animations based app',
    info2: 'made using pycryptodome,pyinquirer, and python, the motive of this project was to learn how to use complex libraries in python and integrate them in a working app',
    url: '/404',
    repo: 'https://github.com/rajsinghparihar/PsypherX', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'raj.singh@students.iiit.ac.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/rajsinghparihar_/?hl=en',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/rajsssinghhpariharrr',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UC8pZNkCfDwV36B0CQlXWaWg',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rajsinghparihar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rajsinghparihar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
