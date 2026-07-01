export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    id: "ai-soft-internship",
    role: "Python Developer AI/ML",
    company: "Smart Algorithm (AI Soft)",
    location: "Faisalabad, On-site",
    startDate: "Dec 2024",
    endDate: "Mar 2025",
    description: [
      "Worked with Python, TensorFlow, PyTorch, FastAPI, and Django to develop and deploy machine learning models.",
      "Contributed to projects involving classification, regression, and clustering tasks, implementing and optimizing neural networks.",
      "Built Django web applications that integrated trained models into production and handled data preprocessing and analysis as part of the development pipeline."
    ]
  },
  {
    id: "freelance-mobile-web",
    role: "Freelance Mobile & Software Developer",
    company: "Fiverr & Independent Clients",
    location: "Local & Remote",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Served clients across Saudi Arabia, Malaysia, India, and the United States, maintaining a 5.0 rating, consistently praised for clean code and fast turnaround.",
      "Collaborated with an independent developer on a mobile app, contributing to API integration and backend troubleshooting.",
      "Built several websites for clients, managing revision cycles and delivering technical documentation post-launch.",
      "Delivered solutions across C#, Python, and web development, C++, same problem solving approach I apply to mobile development with Kotlin and React Native."
    ]
  }
];
