export interface SkillType {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'soft';
}

export interface ExperienceType {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectType {
  title: string;
  description: string[];
  techStack: string[];
  date: string;
  imageUrl?: string;
}

export interface CertificateType {
  title: string;
  issuer: string;
  date: string;
}

export interface EducationType {
  institution: string;
  location: string;
  degree: string;
  period: string;
  grade: string;
}

export interface AchievementType {
  description: string;
}

export interface ExtraCurricularType {
  title: string;
  description: string;
}

export interface ResumeDataType {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  about: string;
  skills: SkillType[];
  experience: ExperienceType[];
  projects: ProjectType[];
  certificates: CertificateType[];
  education: EducationType[];
  achievements: AchievementType[];
  extraCurricular: ExtraCurricularType[];
}

const resumeData: ResumeDataType = {
  name: "Subrato Mondal",
  title: "Software Developer",
  contact: {
    email: "subratomondal374@gmail.com",
    phone: "+91-7903794488",
    location: "Punjab, India",
    linkedin: "https://www.linkedin.com/in/subrato-mondal-/",
    github: "https://github.com/Subratomondal"
  },
  about: "I am a Computer Science Engineering student with a strong foundation in web development, Java programming, and data structures. I'm passionate about creating efficient solutions and continuously enhancing my technical skills through hands-on projects and learning.",
  skills: [
    { name: "Java", level: 85, category: "language" },
    { name: "JavaScript", level: 80, category: "language" },
    { name: "HTML", level: 90, category: "language" },
    { name: "CSS", level: 85, category: "language" },
    { name: "React", level: 75, category: "framework" },
    { name: "Node.js", level: 70, category: "framework" },
    { name: "Bootstrap", level: 80, category: "framework" },
    { name: "MongoDB", level: 65, category: "tool" },
    { name: "MySQL", level: 70, category: "tool" },
    { name: "Problem-Solving", level: 85, category: "soft" },
    { name: "Team Player", level: 90, category: "soft" },
    { name: "Project Management", level: 75, category: "soft" },
    { name: "Adaptability", level: 90, category: "soft" }
  ],
  experience: [
    {
      title: "Java and Data Structures & Algorithms",
      company: "Cipher Schools",
      period: "June 2024 - July 2024",
      description: [
        "Gained in-depth knowledge of Java programming and core DSA concepts.",
        "Covered topics including OOP, recursion, sorting, searching, and trees.",
        "Implemented a Binary Search Tree (BST) with insertion, deletion, search, and in-order traversal.",
        "Enhanced algorithmic thinking through hands-on coding challenges."
      ]
    }
  ],
  projects: [
    {
      title: "Fitness Website",
      description: [
        "Built a responsive fitness website using HTML, CSS, and JavaScript to provide structured workout content.",
        "Developed an interactive UI, ensured cross-device compatibility, and optimized user experience.",
        "Enhanced frontend development skills while integrating fitness-based features."
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      date: "September 2024",
      imageUrl: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Blog Application",
      description: [
        "Designed a blogging platform where users can create, edit, and delete blog posts.",
        "Implemented user authentication & authorization for secure access.",
        "Integrated MongoDB for managing blog post data and user information.",
        "Used Material-UI for a modern and responsive design."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      date: "November 2024",
      imageUrl: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ],
  certificates: [
    {
      title: "Advanced Web Development - Node.js",
      issuer: "Lovely Professional University",
      date: "April 2024"
    },
    {
      title: "HTML, CSS, and JavaScript",
      issuer: "The Johns Hopkins University",
      date: "April 2024"
    },
    {
      title: "Server-Side JavaScript - Node.js",
      issuer: "NIIT Limited",
      date: "April 2024"
    },
    {
      title: "Java and Data Structures & Algorithms",
      issuer: "CipherSchools",
      date: "July 2024"
    }
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Since Jan 2025",
      grade: "CGPA: 7.47"
    },
    {
      institution: "Rajkamal Saraswati Vidya Mandir",
      location: "Dhanbad, Jharkhand",
      degree: "Intermediate",
      period: "April 2020 - March 2021",
      grade: "Percentage: 73%"
    },
    {
      institution: "Rajkamal Saraswati Vidya Mandir",
      location: "Dhanbad, Jharkhand",
      degree: "Matriculation",
      period: "April 2018 - March 2019",
      grade: "Percentage: 92%"
    }
  ],
  achievements: [
    { description: "Successfully completed multiple academic and personal projects, showcasing problem-solving skills" },
    { description: "Participated in coding competitions and hackathons, improving programming proficiency." },
    { description: "Actively involved in technical clubs and student organizations, strengthening teamwork and leadership." },
    { description: "Solved 200+ problems on LeetCode, refining algorithmic thinking." },
    { description: "Developed optimized algorithms and efficient solutions for real-world challenges." },
    { description: "Maintained 3+ years of fitness training, demonstrating commitment and discipline." }
  ],
  extraCurricular: [
    { 
      title: "Fitness Enthusiast", 
      description: "Dedicated to consistent training, promoting self-discipline and perseverance." 
    },
    { 
      title: "Sketching & Creativity", 
      description: "Engaged in sketching, enhancing attention to detail and artistic expression." 
    }
  ]
};

export default resumeData;