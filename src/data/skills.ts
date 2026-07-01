export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Kotlin", "C#", "C++"]
  },
  {
    category: "Mobile",
    skills: ["React Native", "Expo", "Android SDK"]
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Flask"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Firebase (Auth, Firestore, Realtime DB)", "MySQL", "MS SQL Server"]
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "Keras", "Pillow", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Linux", "VS Code", "Android Studio", "Visual Studio", "Streamlit"]
  }
];
