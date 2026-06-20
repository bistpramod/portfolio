export interface NavLink {
  label: string;
  href: string;
}

export interface TabItem {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "linkedin" | "twitter" | "instagram";
}

export const siteConfig = {
  name: "Pramod Bist",
  title: "Frontend Developer & Animator",
  email: "mail@bistpramod.com.np",
  phone: "9848979255",
  about:
    "Hello, I'm Pramod. I am a student at Tribhuvan University with a passion for building beautiful web experiences and creating captivating 2D animations.",
  typewriterRoles: ["a Coder", "a Frontend Developer", "an Animator"],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const skills: TabItem[] = [
  {
    title: "Web Development",
    description: "Creating the frontend of web applications with modern tools.",
  },
  {
    title: "Animation",
    description: "2D animation and character animation for digital projects.",
  },
  {
    title: "C/C++",
    description: "Systems programming and problem solving with C and C++.",
  },
];

export const education: TabItem[] = [
  {
    title: "freeCodeCamp",
    description:
      "Gained knowledge and experience of HTML, CSS and JavaScript at freeCodeCamp.",
  },
  {
    title: "Online Sources & Self Taught",
    description:
      "Self-taught 2D animator, learned from internet resources and practice.",
  },
  {
    title: "C/C++",
    description: "Learned C and C++ at Tribhuvan University.",
  },
];

export const experience: TabItem[] = [
  {
    title: "Web Development",
    description: "Six months of experience in HTML, CSS and JavaScript.",
  },
  {
    title: "2D Animation",
    description: "More than eight months of experience in 2D animation.",
  },
  {
    title: "C/C++",
    description: "Solid knowledge of C/C++ programming fundamentals.",
  },
];

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "I specialize in crafting responsive, user-friendly interfaces using modern web technologies like React, TypeScript, HTML, CSS, and JavaScript.",
    icon: "code",
  },
  {
    title: "2D Animation",
    description:
      "As an animator, I create captivating 2D animations that add life to digital projects, from character motion to UI micro-interactions.",
    icon: "film",
  },
];

export const projects: Project[] = [
  {
    title: "Weather App",
    description: "Real-time weather info web app with clean UI and live data.",
    image: "/rock (3).jpg",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with modern web tech.",
    image: "/rock (2).jpg",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Calculator App",
    description: "A fully functional calculator with a polished interface.",
    image: "/caclulator2.png",
    tags: ["JavaScript", "CSS"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/pramod.bist.92",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pramod-bist-a96a032a7/",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://x.com/bistpramod113",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pramod_bist__113/",
    icon: "instagram",
  },
];
