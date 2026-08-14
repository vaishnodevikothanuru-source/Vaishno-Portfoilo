export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const profileData = {
  name: 'Kothanuru Vaishno Devi',
  shortName: 'Vaishno Devi',
  title: 'B.Tech Computer Science Student',
  subtitle: 'Web Development Learner',
  tagline: 'Passionate about building beautiful digital experiences',
  email: 'vaishno@gmail.com',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/vaishnodevi',
  linkedin: 'https://linkedin.com/in/vaishnodevi',
  about: [
    "I am a B.Tech Computer Science student with a passion for Frontend Development. I love crafting clean, responsive, and user-friendly web interfaces that blend creativity with functionality.",
    "Currently honing my skills in HTML, CSS, JavaScript, and modern frameworks, I'm on a journey to become a full-stack developer. I believe in writing clean code, learning continuously, and building projects that solve real problems.",
    "When I'm not coding, you'll find me exploring new technologies, participating in hackathons, and contributing to open-source communities. I'm always eager to take on new challenges and collaborate with fellow developers.",
  ],
  resumeSummary: 'B.Tech Computer Science student passionate about frontend development with hands-on experience in HTML, CSS, JavaScript, and Python. Eager to learn and build impactful web applications.',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 85, icon: 'Code' },
      { name: 'CSS3', level: 80, icon: 'Palette' },
      { name: 'JavaScript', level: 70, icon: 'Braces' },
      { name: 'React', level: 55, icon: 'Atom' },
      { name: 'Tailwind CSS', level: 65, icon: 'Wind' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 75, icon: 'Terminal' },
      { name: 'C Programming', level: 60, icon: 'FileCode' },
      { name: 'Java', level: 50, icon: 'Coffee' },
      { name: 'SQL', level: 55, icon: 'Database' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', level: 65, icon: 'GitBranch' },
      { name: 'VS Code', level: 90, icon: 'Code2' },
      { name: 'Figma', level: 50, icon: 'Figma' },
      { name: 'Responsive Design', level: 75, icon: 'Smartphone' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A fully responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, project filtering, and a working contact form powered by Supabase.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'],
    category: 'Web Development',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Student Portfolio Website',
    description: 'A clean, elegant portfolio website created using HTML and CSS. Showcases academic information, skills, and projects with a responsive layout that adapts to all screen sizes.',
    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
    category: 'Web Development',
    link: 'https://portfoliovaishno.netlify.app/',
    github: '#',
    featured: true,
  },
  {
    title: 'Responsive Login Form',
    description: 'A modern, responsive login form built with HTML and CSS featuring input validation, password visibility toggle, and a clean UI that works seamlessly across desktop and mobile devices.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Development',
    link: '#',
    github: '#',
  },
  {
    title: 'Python Calculator',
    description: 'A command-line calculator application built in Python that supports basic arithmetic operations, error handling, and a clean interactive interface.',
    technologies: ['Python', 'CLI'],
    category: 'Programming',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather App UI',
    description: 'A beautiful weather application interface mockup designed with HTML and CSS. Displays current weather, forecasts, and location-based data with smooth transitions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Development',
    link: '#',
    github: '#',
  },
  {
    title: 'To-Do List App',
    description: 'A feature-rich to-do list application with add, edit, delete, and filter capabilities. Built with vanilla JavaScript and local storage for persistence.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    category: 'Web Development',
    link: '#',
    github: '#',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'KLH University',
    period: '2025 - 2029',
    description: 'Pursuing a Bachelor of Technology in Computer Science Engineering. Coursework includes Data Structures, Algorithms, DBMS, Operating Systems, Web Technologies, and Software Engineering.',
    status: 'ongoing',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    period: '2023 - 2025',
    description: 'Completed higher secondary education with Mathematics, Physics, and Chemistry as core subjects. Achieved academic excellence with distinction.',
    status: 'completed',
  },
  {
    degree: 'Secondary School (SSC)',
    institution: 'Zilla Parishad High School',
    period: '2022 - 2023',
    description: 'Completed secondary education with a strong foundation in science and mathematics. Secured first class with distinction.',
    status: 'completed',
  },
];

export const certifications: Certification[] = [
  {
    title: 'HTML & CSS Certification',
    issuer: 'FreeCodeCamp',
    date: '2025',
    link: 'https://www.freecodecamp.org/',
  },
  {
    title: 'Python Basics',
    issuer: 'Coursera',
    date: '2025',
    link: 'https://www.coursera.org/',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2025',
    link: 'https://www.freecodecamp.org/',
  },
  {
    title: 'Introduction to JavaScript',
    issuer: 'Coursera',
    date: '2025',
    link: 'https://www.coursera.org/',
  },
];

export const achievements = [
  'Participated in college coding hackathon',
  'Built multiple responsive web projects',
  'Active member of tech community',
  'Consistent academic performer',
];
