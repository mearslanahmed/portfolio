export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const educationData: Education[] = [
  {
    id: "bs-se-gcuf",
    degree: "BS Software Engineering",
    institution: "Government College University Faisalabad",
    startDate: "Nov 2022",
    endDate: "Jun 2026",
    description: [
      "Coursework: Object Oriented Programming, Data Structures & Algorithms, Artificial Intelligence, Natural Language Processing, Computer Networks, Cloud Computing",
      "Elected Class Representative for Basic Mathematics, coordinating between students and faculty across morning and evening sections for two semesters"
    ]
  }
];
