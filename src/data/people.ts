export interface Person {
  name: string;
  img: string;
  position: string;
  type: string;
  description: string;
  traits: string[];
}

export interface VerticalData {
  id: number;
  label: string;
  genre: string;
  genres: string[];
  color: string;
  cast: string[];
  year: string;
  seasons: string;
  people: Person[];
}

export const verticals: VerticalData[] = [
  {
    id: 1,
    label: 'UI/UX',
    genre: 'Design & Experience',
    genres: ['Theme reveal', 'Curtain raiser', 'Date reveal'],
    color: '#a259ff',
    cast: ['Dhruv', 'Manish', 'Sundar', 'Satyam', 'Rahul', 'Srinivasa', 'Shiva'],
    year: '2022',
    seasons: '4 Seasons',
    people: [
      { 
        name: 'TARUN P', 
        img: '/img/tarun.png', 
        position: 'Lead UI/UX Designer', 
        type: 'other',
        description: 'Juniors kaha hai? Video render kyu nahi ho rahi... QR scan kyu nahi ho raha?? Design time pe kyu nahi hai:)',
        traits: ['Bakchod', 'Chill', 'Suspenseful', 'Exiting']
      },
      { 
        name: 'ANANYA S', 
        img: '/img/tarun.png', 
        position: 'Interaction Designer', 
        type: 'other',
        description: 'Design system update incoming! Please check the latest Figma file for the new components.',
        traits: ['Creative', 'Diligent', 'Peaceful']
      },
      { 
        name: 'RAHUL K', 
        img: '/img/tarun.png', 
        position: 'Visual Designer', 
        type: 'other',
        description: 'Pixel perfect is my middle name. No alignment is left unchecked.',
        traits: ['Precise', 'Fast', 'Dedicated']
      },
    ],
  },
  {
    id: 2,
    label: 'Frontend',
    genre: 'Web Development',
    genres: ['React', 'Performance', 'Animation'],
    color: '#3fb984',
    cast: ['Siddharth', 'Priya', 'Amit', 'Vikash'],
    year: '2023',
    seasons: '3 Seasons',
    people: [
      { 
        name: 'SIDDHARTH M', 
        img: '/img/tarun.png', 
        position: 'Senior Frontend Engineer', 
        type: 'other',
        description: 'Refactoring the whole state management tonight. Don\'t push to main!',
        traits: ['Logical', 'Hustler', 'Focused']
      },
      { 
        name: 'PRIYA R', 
        img: '/img/tarun.png', 
        position: 'Frontend Developer', 
        type: 'other',
        description: 'Just fixed 50 bugs and added 2 features. Coffee is my fuel.',
        traits: ['Bug Slayer', 'Vibrant', 'Agile']
      },
    ],
  },
  {
    id: 3,
    label: 'Backend',
    genre: 'System Architecture',
    genres: ['Scalability', 'Security', 'Database'],
    color: '#ff00a0',
    cast: ['Vikram', 'Sneha', 'Arjun', 'Tanmay'],
    year: '2024',
    seasons: '2 Seasons',
    people: [
      { 
        name: 'VIKRAM J', 
        img: '/img/tarun.png', 
        position: 'Backend Lead', 
        type: 'other',
        description: 'Database migration successful. 0% downtime achieved.',
        traits: ['Architect', 'Calm', 'Visionary']
      },
    ],
  },
  {
    id: 4,
    label: 'Video',
    genre: 'Motion Graphics',
    genres: ['Storytelling', 'VFX', 'Sound Design'],
    color: '#001e36',
    cast: ['Karan', 'Ishita', 'Rohan', 'Manya'],
    year: '2022',
    seasons: '5 Seasons',
    people: [
      { 
        name: 'KARAN L', 
        img: '/img/tarun.png', 
        position: 'Video Editor', 
        type: 'other',
        description: 'Last frame of the render is done. Time to export the 4K version.',
        traits: ['Storyteller', 'Patient', 'Artistic']
      },
    ],
  },
  {
    id: 5,
    label: 'App Dev',
    genre: 'Mobile Applications',
    genres: ['Swift', 'Kotlin', 'Cross-platform'],
    color: '#61dafb',
    cast: ['Manish', 'Kavya', 'Deepak', 'Nikhil'],
    year: '2023',
    seasons: '4 Seasons',
    people: [
      { 
        name: 'MANISH V', 
        img: '/img/tarun.png', 
        position: 'Mobile App Lead', 
        type: 'other',
        description: 'App Store submission is in review. Fingers crossed!',
        traits: ['Mobile Ninja', 'Optimistic', 'Technical']
      },
    ],
  },
];
