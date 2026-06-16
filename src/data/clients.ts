export interface ClientData {
  name: string;
  description: string;
  websiteUrl: string;
  previewImage: string;
}

export const clients: ClientData[] = [
  {
    name: "Imran Consultancy",
    description: "Developed and maintained the consultancy website with a professional and modern interface.",
    websiteUrl: "https://imranconsultancy.com",
    previewImage: "/images/clients/imran-consultancy.png"
  },
  {
    name: "BricknBolt",
    description: "Built and optimized the construction company website for Delhi region with enhanced UX.",
    websiteUrl: "https://www.bricknbolt.com/construction-company-delhi",
    previewImage: "/images/clients/bricknbolt.png"
  },
  {
    name: "Shivam Healthcare",
    description: "Designed and developed the healthcare website with a clean, accessible, and responsive layout.",
    websiteUrl: "https://shivamhealthcare.in",
    previewImage: "/images/clients/shivam-healthcare.png"
  },
  {
    name: "Maanavi Homes",
    description: "Created the real estate website with modern design patterns and smooth user experience.",
    websiteUrl: "https://maanavihomes.com",
    previewImage: "/images/clients/maanavi-homes.png"
  }
];
