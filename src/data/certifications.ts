export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  link?: string;
  image?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "meta-react-native",
    name: "React Native Specialization",
    issuer: "Meta – Coursera",
    link: "https://coursera.org/verify/specialization/PXKED3BSKX3O",
    image: "/certifications/react-native.jpeg"
  },
  {
    id: "meta-kotlin",
    name: "Programming Fundamentals in Kotlin",
    issuer: "Meta – Coursera",
    link: "https://coursera.org/verify/RCWXQXI4DJCY",
    image: "/certifications/kotlin.jpeg"
  },
  {
    id: "ibm-mobile",
    name: "Introduction to Mobile App Development",
    issuer: "IBM – Coursera",
    link: "https://coursera.org/verify/OTBS7JTVU0H8",
    image: "/certifications/ibm.jpeg"
  },
  {
    id: "meta-frontend-capstone",
    name: "Front-End Developer Capstone",
    issuer: "Meta – Coursera",
    link: "https://coursera.org/verify/5U0NPTO4D4I8",
    image: "/certifications/frontend-capstone.jpeg"
  }
];
