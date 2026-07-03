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
      "Maintained a perfect 5.0/5.0 client satisfaction rating across a diverse portfolio of international and local clients by delivering scalable web and mobile applications with rapid turnaround times.",
      "Engineered and shipped cross-platform mobile applications, seamlessly integrating complex REST APIs and optimizing backend infrastructure for high-performance deployments.",
      "Architected robust technical solutions across C++, Python, and React Native, establishing rigorous technical documentation standards that guaranteed zero-friction client handovers."
    ]
  }
];
