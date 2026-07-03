export interface Testimonial {
  id: string;
  clientName: string;
  platform: string;
  review: string;
  rating: number;
  initials: string;
  country?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "bazilad",
    clientName: "bazilad",
    platform: "Fiverr",
    review: "I had the pleasure of working with Arslan on an e-commerce website project, and I couldn’t be more satisfied with the experience. He delivered the final product ahead of schedule and showed exceptional attention to detail throughout. We went through multiple revisions together, and he was always patient, communicative, and open to feedback.",
    rating: 5,
    initials: "B",
    country: "🇸🇦 Saudi Arabia"
  },
  {
    id: "premmurugiah",
    clientName: "premmurugiah",
    platform: "Fiverr",
    review: "This developer is awesome! He completed my C# project super fast and the code was perfect. Really clean and easy to understand. He explained everything clearly and even helped me learn a thing or two. Definitely recommend if you need a skilled engineer, he's a lifesaver!",
    rating: 5,
    initials: "P",
    country: "🇲🇾 Malaysia"
  },
  {
    id: "abdulazizsr1",
    clientName: "abdulazizsr1",
    platform: "Fiverr",
    review: "Arslan is really good at what he does. This is my second time working with him. The work was great and delivered fast. I highly recommend him.",
    rating: 5,
    initials: "A",
    country: "🇸🇦 Saudi Arabia"
  },
  {
    id: "ag-leader",
    clientName: "Ag Leader",
    platform: "Direct Client",
    review: "The crop disease detection system was exactly what we needed. It maps perfectly to real farm problems, identifying diseases in seconds instead of days.",
    rating: 5,
    initials: "AL",
    country: "🇵🇰 Pakistan"
  },
  {
    id: "slunvv",
    clientName: "slunvv",
    platform: "Fiverr",
    review: "Excellent support at a fair price. I’m grateful for his help and will gladly recommend him to my colleagues.",
    rating: 5,
    initials: "S",
    country: "🇸🇦 Saudi Arabia"
  },
  {
    id: "max_paige",
    clientName: "max_paige",
    platform: "Fiverr",
    review: "Amazing work as always, the project was well crafted and he followed all requirements perfectly. Super quick response time and quality product.",
    rating: 5,
    initials: "M",
    country: "🇺🇸 United States"
  },
  {
    id: "abdullah33x33",
    clientName: "abdullah33x33",
    platform: "Fiverr",
    review: "Professional work in a short time. Amazing job.",
    rating: 5,
    initials: "A",
    country: "🇸🇦 Saudi Arabia"
  }
];
