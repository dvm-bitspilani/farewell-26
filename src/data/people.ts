export type Person = {
  name: string;
  img: string;
  position: string;
  type: string;
  description: string;
  traits: string[];
};

export type VerticalData = {
  id: number;
  label: string;
  genre: string;
  genres: string[];
  color: string;
  cast: string[];
  year: string;
  seasons: string;
  icon: string;
  people: Person[];
};

export const verticals: VerticalData[] = [
  {
    id: 1,
    label: 'UI/UX',
    genre: 'Design & Experience',
    genres: ['User Research', 'Prototyping', 'Visual Design'],
    color: '#a259ff',
    cast: ['Nabisha Obaid', 'Arnav Trehan', 'Sunpreet Brar'],
    year: '2022',
    seasons: '3 Season',
    icon: '/svg/figma-icon.svg',
    people: [
      {
        name: 'NABISHA OBAID',
        img: '/people/nabisha obaid.jpg',
        position: 'UI/UX Designer',
        type: 'other',
        description: "Don't cry because it's over, smile because it happened.",
        traits: ['Creative', 'Precise', 'Visionary']
      },
      {
        name: 'ARNAV TREHAN',
        img: '/people/arnav trehan.jpg',
        position: 'Interaction Designer',
        type: 'other',
        description: "How lucky I am to have something that makes saying goodbye so hard.",
        traits: ['Diligent', 'Technical', 'Innovative']
      },
      {
        name: 'SUNPREET BRAR',
        img: '/people/sunpreet brar.jpg',
        position: 'Visual Designer',
        type: 'other',
        description: "The magic of new beginnings is truly the most powerful of them all.",
        traits: ['Aesthetic', 'Focused', 'Dedicated']
      },
    ],
  },
  {
    id: 2,
    label: 'Frontend',
    genre: 'Web Development',
    genres: ['Oasis Website', 'Apogee Website'],
    color: '#3fb984',
    cast: ['Luv Gupta', 'Shreyas Gantayet', 'Akshit Garg', 'Bharat Raj Singhal', 'Ritik Chandra'],
    year: '2022',
    seasons: '3 Season',
    icon: '/svg/html-icon.svg',
    people: [
      {
        name: 'LUV GUPTA',
        img: '/people/luv gupta.jpg',
        position: 'Frontend Developer',
        type: 'other',
        description: "Goodbyes are not forever, they simply mean I'll miss you until we meet again.",
        traits: ['Efficient', 'Logical', 'Reliable']
      },
      {
        name: 'SHREYAS GANTAYET',
        img: '/people/shreyas gantayet.jpg',
        position: 'Frontend Engineer',
        type: 'other',
        description: "Every new beginning comes from some other beginning's end.",
        traits: ['Skilled', 'Passionate', 'Agile']
      },
      {
        name: 'AKSHIT GARG',
        img: '/people/akshit garg.jpg',
        position: 'UI Developer',
        type: 'other',
        description: "This is not a goodbye, my friend, this is a thank you.",
        traits: ['Detail-oriented', 'Fast', 'Collaborative']
      },
      {
        name: 'BHARAT RAJ SINGHAL',
        img: '/people/bharat raj singhal.jpeg',
        position: 'Web Specialist',
        type: 'other',
        description: "Go confidently in the direction of your dreams! Live the life you’ve imagined.",
        traits: ['Resourceful', 'Focused', 'Steady']
      },
      {
        name: 'RITIK CHANDRA',
        img: '/people/Ritik Chandra.jpg',
        position: 'Frontend Developer',
        type: 'other',
        description: "The future belongs to those who believe in the beauty of their dreams.",
        traits: ['Logical', 'Creative', 'Diligent']
      },
    ],
  },
  {
    id: 3,
    label: 'Backend',
    genre: 'System Architecture',
    genres: ['Fest Portals', 'Web and App Backend'],
    color: '#ff00a0',
    cast: ['Rudradatt Dave'],
    year: '2022',
    seasons: '3 Season',
    icon: '/svg/python-icon.svg',
    people: [
      {
        name: 'RUDRADATT DAVE',
        img: '/people/rudratt dave.png',
        position: 'Backend Architect',
        type: 'other',
        description: "Great is the art of beginning, but greater is the art of ending.",
        traits: ['Architect', 'Calm', 'Analytical']
      },
    ],
  },
  {
    id: 4,
    label: 'Video',
    genre: 'Motion Graphics',
    genres: ['Curtain Raiser', 'Date Reveals', 'Theme Reveals'],
    color: '#001e36',
    cast: ['Tarun S', 'Rahul Gupta', 'Srinivasa Shankar', 'Dhruv Verma', 'Manish Goyal', 'Shiva Adithya M', 'Ronit Shroff'],
    year: '2022',
    seasons: '3 Season',
    icon: '/svg/ae-icon.svg',
    people: [
      {
        name: 'TARUN S',
        img: '/people/tarun s.jpg',
        position: 'Video Lead',
        type: 'other',
        description: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        traits: ['Director', 'Creative', 'Leader']
      },
      {
        name: 'RAHUL GUPTA',
        img: '/people/rahul gupta.jpg',
        position: 'Video Editor',
        type: 'other',
        description: "The pain of parting is nothing to the joy of meeting again.",
        traits: ['Storyteller', 'Patient', 'Sharp']
      },
      {
        name: 'SRINIVASA SHANKAR',
        img: '/people/srinivasa shankar.jpg',
        position: 'Motion Designer',
        type: 'other',
        description: "May the road rise up to meet you. May the wind be always at your back.",
        traits: ['Dynamic', 'Artistic', 'Technical']
      },
      {
        name: 'DHRUV VERMA',
        img: '/people/dhruv verma.jpg',
        position: 'VFX Artist',
        type: 'other',
        description: "Yesterday is but today's memory, and tomorrow is today's dream.",
        traits: ['Experimental', 'Focused', 'Talented']
      },
      {
        name: 'MANISH GOYAL',
        img: '/people/manish goyal.png',
        position: 'Post-Production Specialist',
        type: 'other',
        description: "A farewell is necessary before we can meet again.",
        traits: ['Precise', 'Steady', 'Reliable']
      },
      {
        name: 'SHIVA ADITHYA M',
        img: '/people/shiva adithya m.jpg',
        position: 'Cinematographer',
        type: 'other',
        description: "Farewell! God knows when we shall meet again.",
        traits: ['Observant', 'Creative', 'Patient']
      },
      {
        name: 'RONIT SHROFF',
        img: '/people/Ronit Shroff.jpeg',
        position: 'Video Specialist',
        type: 'other',
        description: 'Are you Sure Farewell h?',
        traits: ['Determined', 'Skilled', 'Creative']
      },
      // { 
      //   name: 'HIMANSHU KUMAR', 
      //   img: '/people/himanshu kumar.jpg', 
      //   position: 'Video Assistant', 
      //   type: 'other',
      //   description: 'Supporting the video team in all aspects of production to ensure smooth delivery.',
      //   traits: ['Supportive', 'Eager', 'Adaptable']
      // },
    ],
  },
  {
    id: 5,
    label: 'App Dev',
    genre: 'Mobile Applications',
    genres: ['Oasis App', 'Apogee App', 'Vendor App', 'Admin App'],
    color: '#61dafb',
    cast: ['Arnav Bharti', 'Chayan Jain'],
    year: '2022',
    seasons: '3 Season',
    icon: '/svg/react-icon.svg',
    people: [
      {
        name: 'ARNAV BHARTI',
        img: '/people/arnav bharti.jpg',
        position: 'App Developer',
        type: 'other',
        description: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        traits: ['Focused', 'Logical', 'Efficient']
      },
      // {
      //   name: 'MALAY DWIVEDI',
      //   img: '/people/malay dwivedi.jpg',
      //   position: 'iOS Developer',
      //   type: 'other',
      //   description: "Life is a journey, not a destination.",
      //   traits: ['Precise', 'Dedicated', 'Artistic']
      // },
      {
        name: 'CHAYAN JAIN',
        img: '/people/chayan jain.jpg',
        position: 'UI/App Specialist',
        type: 'other',
        description: "End? No, the journey doesn't end here.",
        traits: ['Aesthetic', 'Diligent', 'Collaborative']
      },
    ],
  },
  {
    id: 6,
    label: 'Game Dev',
    genre: 'Interactive Experiences',
    genres: ['Game Design', 'Unity/Unreal', 'Game Logic'],
    color: '#ff4b2b',
    cast: ['Pushkar Mishra', 'Tejansh Gautam'],
    year: '2022',
    seasons: '3 Season',
    icon: '/svg/game.png',
    people: [
      {
        name: 'PUSHKAR MISHRA',
        img: '/people/pushkar mishra.jpg',
        position: 'Android Developer',
        type: 'other',
        description: "The best is yet to come.",
        traits: ['Hustler', 'Technical', 'Resourceful']
      },
      {
        name: 'TEJANSH GAUTAM',
        img: '/people/tejansh gautam.jpeg',
        position: 'Mobile Engineer',
        type: 'other',
        description: "Spread your wings and fly.",
        traits: ['Versatile', 'Fast', 'Inquisitive']
      },
    ],
  },
];

