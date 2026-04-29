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
    year: '2024',
    seasons: '1 Season',
    icon: '/svg/figma-icon.svg',
    people: [
      {
        name: 'NABISHA OBAID',
        img: '/people/nabisha obaid.jpg',
        position: 'UI/UX Designer',
        type: 'other',
        description: 'Creating seamless experiences and beautiful interfaces for the next generation of DVM projects.',
        traits: ['Creative', 'Precise', 'Visionary']
      },
      {
        name: 'ARNAV TREHAN',
        img: '/people/arnav trehan.jpg',
        position: 'Interaction Designer',
        type: 'other',
        description: 'Focusing on the micro-interactions that make our applications feel alive and responsive.',
        traits: ['Diligent', 'Technical', 'Innovative']
      },
      {
        name: 'SUNPREET BRAR',
        img: '/people/sunpreet brar.jpg',
        position: 'Visual Designer',
        type: 'other',
        description: 'Ensuring visual consistency and high-quality aesthetic standards across all platforms.',
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
    cast: ['Luv Gupta', 'Shreyas Gantayet', 'Akshit Garg', 'Bharat Raj Singhal'],
    year: '2024',
    seasons: '1 Season',
    icon: '/svg/html-icon.svg',
    people: [
      {
        name: 'LUV GUPTA',
        img: '/people/luv gupta.jpg',
        position: 'Frontend Developer',
        type: 'other',
        description: 'Architecting fast and responsive web applications with a focus on clean code and performance.',
        traits: ['Efficient', 'Logical', 'Reliable']
      },
      {
        name: 'SHREYAS GANTAYET',
        img: '/people/shreyas gantayet.jpg',
        position: 'Frontend Engineer',
        type: 'other',
        description: 'Bringing complex designs to life with robust React components and smooth transitions.',
        traits: ['Skilled', 'Passionate', 'Agile']
      },
      {
        name: 'AKSHIT GARG',
        img: '/people/akshit garg.jpg',
        position: 'UI Developer',
        type: 'other',
        description: 'Bridging the gap between design and code to ensure pixel-perfect implementations.',
        traits: ['Detail-oriented', 'Fast', 'Collaborative']
      },
      {
        name: 'BHARAT RAJ SINGHAL',
        img: '/people/bharat raj singhal.jpeg',
        position: 'Web Specialist',
        type: 'other',
        description: 'Optimizing web experiences for speed and accessibility across all modern browsers.',
        traits: ['Resourceful', 'Focused', 'Steady']
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
    year: '2024',
    seasons: '1 Season',
    icon: '/svg/python-icon.svg',
    people: [
      {
        name: 'RUDRADATT DAVE',
        img: '/people/rudratt dave.png',
        position: 'Backend Architect',
        type: 'other',
        description: 'Building the robust foundation and scalable APIs that power our entire ecosystem.',
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
    year: '2024',
    seasons: '1 Season',
    icon: '/svg/ae-icon.svg',
    people: [
      {
        name: 'TARUN S',
        img: '/people/tarun s.jpg',
        position: 'Video Lead',
        type: 'other',
        description: 'Directing the visual narrative and ensuring high-quality cinematic output for every project.',
        traits: ['Director', 'Creative', 'Leader']
      },
      {
        name: 'RAHUL GUPTA',
        img: '/people/rahul gupta.jpg',
        position: 'Video Editor',
        type: 'other',
        description: 'Mastering the edit to create compelling stories that captivate our audience.',
        traits: ['Storyteller', 'Patient', 'Sharp']
      },
      {
        name: 'SRINIVASA SHANKAR',
        img: '/people/srinivasa shankar.jpg',
        position: 'Motion Designer',
        type: 'other',
        description: 'Adding life to static designs with fluid motion and engaging visual effects.',
        traits: ['Dynamic', 'Artistic', 'Technical']
      },
      {
        name: 'DHRUV VERMA',
        img: '/people/dhruv verma.jpg',
        position: 'VFX Artist',
        type: 'other',
        description: 'Pushing the boundaries of visual effects to create stunning and immersive experiences.',
        traits: ['Experimental', 'Focused', 'Talented']
      },
      {
        name: 'MANISH GOYAL',
        img: '/people/manish goyal.png',
        position: 'Post-Production Specialist',
        type: 'other',
        description: 'Ensuring every frame is perfect through meticulous color grading and sound design.',
        traits: ['Precise', 'Steady', 'Reliable']
      },
      {
        name: 'SHIVA ADITHYA M',
        img: '/people/shiva adithya m.jpg',
        position: 'Cinematographer',
        type: 'other',
        description: 'Capturing the perfect shots with a keen eye for lighting and composition.',
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
    genres: ['Oasis App', 'Apogee App', 'Vendor App', 'Admin App', 'Game Dev'],
    color: '#61dafb',
    cast: ['Arnav Bharti', 'Malay Dwivedi', 'Pushkar Mishra', 'Tejansh Gautam', 'Chayan Jain'],
    year: '2024',
    seasons: '1 Season',
    icon: '/svg/react-icon.svg',
    people: [
      {
        name: 'ARNAV BHARTI',
        img: '/people/arnav bharti.jpg',
        position: 'App Developer',
        type: 'other',
        description: 'Developing high-performance mobile applications that provide a seamless user experience.',
        traits: ['Focused', 'Logical', 'Efficient']
      },
      {
        name: 'MALAY DWIVEDI',
        img: '/people/malay dwivedi.jpg',
        position: 'iOS Developer',
        type: 'other',
        description: 'Crafting premium iOS experiences with a focus on native performance and design.',
        traits: ['Precise', 'Dedicated', 'Artistic']
      },
      {
        name: 'PUSHKAR MISHRA',
        img: '/people/pushkar mishra.jpg',
        position: 'Android Developer',
        type: 'other',
        description: 'Building robust Android applications that scale across millions of devices.',
        traits: ['Hustler', 'Technical', 'Resourceful']
      },
      {
        name: 'TEJANSH GAUTAM',
        img: '/people/tejansh gautam.jpeg',
        position: 'Mobile Engineer',
        type: 'other',
        description: 'Exploring cross-platform solutions to deliver high-quality apps at speed.',
        traits: ['Versatile', 'Fast', 'Inquisitive']
      },
      {
        name: 'CHAYAN JAIN',
        img: '/people/chayan jain.jpg',
        position: 'UI/App Specialist',
        type: 'other',
        description: 'Ensuring that our mobile apps are as beautiful as they are functional.',
        traits: ['Aesthetic', 'Diligent', 'Collaborative']
      },
    ],
  },
];

