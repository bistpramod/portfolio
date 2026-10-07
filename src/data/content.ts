export interface NavLink {
  label: string;
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  details: string[];
  icon: "frontend" | "backend" | "search";
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  visual: "atlas" | "townchart" | "annapurna" | "commerce";
  liveUrl?: string;
  sourceUrl?: string;
  status: "Live" | "In development";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "facebook" | "instagram";
}

export const siteConfig = {
  name: "Pramod Bist",
  initials: "PB",
  title: "Full-stack developer",
  email: "bistpramod113@gmail.com",
  phone: "+977 984-897-9255",
  location: "Bhaktapur, Nepal",
  github: "https://github.com/bistpramod",
  about:
    "I’m a BSc. CSIT student and full-stack developer focused on turning practical ideas into dependable web products. I work across React interfaces, Express APIs, MongoDB data models and the details that make a site useful after it ships.",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#portfolio" },
  { label: "Skills", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const capabilities: Capability[] = [
  {
    title: "Frontend systems",
    description:
      "Responsive product interfaces with a clear information hierarchy and reusable components.",
    details: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    icon: "frontend",
  },
  {
    title: "Backend & data",
    description:
      "REST APIs, authentication and data models designed around real application rules.",
    details: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Socket.IO"],
    icon: "backend",
  },
  {
    title: "SEO & discoverability",
    description:
      "Actively studying and applying search fundamentals through a live, server-rendered practice project.",
    details: [
      "Crawl & indexation",
      "Search intent",
      "On-page SEO",
      "Structured data",
      "Core Web Vitals",
      "AI search basics",
    ],
    icon: "search",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "TownChart",
    category: "Full-stack MERN · Realtime community platform",
    description:
      "A place-first application for seeing what is happening in a Nepal town right now—combining timely community updates, local questions, events, live weather and real map data.",
    highlights: [
      "10,000+ Nepal places with OpenStreetMap and Open-Meteo data",
      "Realtime town rooms and notifications with Socket.IO",
      "JWT auth, role-based moderation and community Pulse voting",
    ],
    tags: ["React", "TypeScript", "Express", "MongoDB", "Socket.IO", "Leaflet"],
    visual: "townchart",
    status: "In development",
  },
  {
    number: "02",
    title: "Hotel Annapurna",
    category: "MERN · Hotel reservation system",
    description:
      "A complete hotel website and reservation system for guests and staff, with availability-aware booking flows and an operational admin workspace.",
    highlights: [
      "Date-based room availability and server-calculated pricing",
      "Guest bookings, cancellation rules and status history",
      "Admin tools for rooms, reservations, users, gallery and messages",
    ],
    tags: ["React", "Express", "MongoDB", "HttpOnly JWT", "Cloudinary"],
    visual: "annapurna",
    status: "In development",
  },
  {
    number: "03",
    title: "eCommerce Store",
    category: "Full-stack MERN · Commerce",
    description:
      "A full-stack storefront with customer authentication, a searchable product catalogue and an admin workflow for managing inventory.",
    highlights: [
      "JWT signup and login with bcrypt password hashing",
      "Product CRUD, search and category filtering",
      "Admin interfaces for adding, editing and removing products",
    ],
    tags: ["React", "Tailwind CSS", "Express", "MongoDB", "JWT"],
    visual: "commerce",
    liveUrl: "https://vividvistaa-store.onrender.com/",
    sourceUrl: "https://github.com/bistpramod/eCommerceStore-fullstack",
    status: "Live",
  },
  {
    number: "04",
    title: "DevTool Atlas",
    category: "Next.js · Developer tools · Search foundations",
    description:
      "A growing collection of focused, browser-based tools for everyday development work. The first release includes a JSON formatter, JWT decoder and regex tester, with user data processed locally in the browser.",
    highlights: [
      "Server-rendered, indexable pages with route-level metadata",
      "Robots and sitemap routes built into the Next.js app",
      "Deployed on Vercel with a crawlable, performance-focused structure",
    ],
    tags: ["Next.js", "TypeScript", "React", "Technical SEO", "Vercel"],
    visual: "atlas",
    liveUrl: "https://devtool-atlas.vercel.app",
    sourceUrl: "https://github.com/bistpramod/devtool-atlas",
    status: "Live",
  },
];

export const education = [
  {
    title: "BSc. Computer Science & IT (CSIT)",
    place: "Bhaktapur Multiple Campus · Tribhuvan University",
  },
  {
    title: "Advanced MERN Stack Development",
    place: "Broadway Infosys · Training & certification",
  },
];

export const seoLearning = {
  title: "Search-aware development.",
  description:
    "I consider discoverability as part of the build—from crawlable page structure and meaningful metadata to performance, structured data and measurement. The goal is to create sites that work clearly for people and search systems alike.",
  topics: [
    "Technical audits",
    "React / JavaScript SEO",
    "Keyword-to-page mapping",
    "Search Console & GA4",
    "Ecommerce SEO",
    "AEO / GEO fundamentals",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/bistpramod",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pramod-bist-a96a032a7/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/pramod.bist.92",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pramod_bist__113/",
    icon: "instagram",
  },
];
