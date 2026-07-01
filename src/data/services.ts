export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // We will use this string to map to a Lucide icon
}

export const servicesData: Service[] = [
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Building seamless, cross-platform mobile applications using React Native and Expo, with identical behavior on iOS and Android.",
    icon: "Smartphone"
  },
  {
    id: "ai-ml-integration",
    title: "AI & ML Integration",
    description: "Deploying custom machine learning models into production environments, from computer vision to recommendation engines.",
    icon: "BrainCircuit"
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description: "Architecting clean, scalable backend systems using Node.js, Express, Flask, and integrating robust database solutions.",
    icon: "Server"
  },
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    description: "Creating premium, high-performance web applications using modern technologies like Next.js, React, and Tailwind CSS.",
    icon: "Globe"
  }
];
