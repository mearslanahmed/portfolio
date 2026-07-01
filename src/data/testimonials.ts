export interface Testimonial {
  id: string;
  clientName: string;
  platform: string;
  review: string;
  rating: number;
  initials: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "fiverr-1",
    clientName: "Fiverr Client (USA)",
    platform: "Fiverr",
    review: "Arslan delivered exceptionally clean code and the turnaround time was surprisingly fast. The communication throughout the project was top-notch.",
    rating: 5,
    initials: "FC"
  },
  {
    id: "ag-leader",
    clientName: "Ag Leader representative",
    platform: "Direct Client",
    review: "The crop disease detection system was exactly what we needed. It maps perfectly to real farm problems, identifying diseases in seconds instead of days.",
    rating: 5,
    initials: "AL"
  },
  {
    id: "fiverr-2",
    clientName: "Fiverr Client (Saudi Arabia)",
    platform: "Fiverr",
    review: "Consistently praised for his clean code and fast turnaround. A highly reliable developer to work with.",
    rating: 5,
    initials: "FC"
  }
];
