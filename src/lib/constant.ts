import {
  GCPLogo,
  GemmaLogo,
  MilvusLogo,
  NestJsLogo,
  NextJSLogo,
  OlamaLogo,
  PostgreSQLLogo,
  PythonLogo,
  TypeScriptLogo,
} from "@/components/shared/techno-logo";
import {
  Home,
  User,
  Briefcase,
  FileText,
  LucideProps,
  Folder,
  Gavel,
  MessageSquare,
  Shield,
  BookOpen,
} from "lucide-react";

export type TeamMember = {
  name: string;
  role: string;
  picture: string;
  linkedin?: string;
};

export type NavbarItem = {
  name: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type Feature = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

export type Techno = {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const NAVBAR_ITEMS: NavbarItem[] = [
  { name: "Home", url: "#top", icon: Home },
  { name: "Resume", url: "#resume", icon: FileText },
  { name: "Movie", url: "#demo", icon: Briefcase },
  { name: "Our team", url: "#our-teams", icon: User },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Melone Andy",
    role: "Software Engineer",
    picture: "/team/melone.webp",
    linkedin: "https://www.linkedin.com/in/meloneandy/",
  },
  {
    name: "Sanga Ousmani",
    role: "Software Engineer",
    picture: "/team/sanga.webp",
    linkedin: "https://www.linkedin.com/in/ousmanisanga/",
  },
  {
    name: "Hans Ariel",
    role: "Data Scientist | AI Engineer",
    picture: "/team/hans.webp",
    linkedin: "https://www.linkedin.com/in/hans-ariel-doh-59a31a2ba/",
  },
  {
    name: "Levi Yao",
    role: "AI Engineer",
    picture: "/team/levy.webp",
    linkedin: "https://www.linkedin.com/in/assale-levi-jonathan-yao/",
  },
  {
    name: "Elias Gbane",
    role: "Data Engineer",
    picture: "/team/elias.webp",
    linkedin: "https://www.linkedin.com/in/desire-gbane-aa5a97231/",
  },
];
export const FEATURES: Feature[] = [
  {
    icon: Gavel,
    title: "AI Legal Advice",
    description:
      "Get instant and accurate legal advice powered by our artificial intelligence.",
  },
  {
    icon: MessageSquare,
    title: "Conversational Chat Bot",
    description:
      "Chat naturally with our legal assistant powered by Gemma 3 for instant responses.",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description:
      "Automate the analysis of your legal documents for efficient management.",
  },
  {
    icon: BookOpen,
    title: "Legal Text Sources",
    description:
      "Access a comprehensive database of legal texts with automatic references and citations.",
  },
  {
    icon: Shield,
    title: "Automated Compliance",
    description:
      "Check your documents' compliance with current regulations in real time.",
  },
  {
    icon: Folder,
    title: "Case Management",
    description:
      "Organize and track your legal cases with an intuitive interface and automatic reminders.",
  },
];

export const TECHNOLOGIES: Techno[] = [
  { name: "Next Js", id: 1, img: NextJSLogo },
  { name: "Nest.js", id: 2, img: NestJsLogo },
  { name: "Type Script", id: 3, img: TypeScriptLogo },
  { name: "Google Cloud Platform", id: 4, img: GCPLogo },
  { name: "Gemma", id: 5, img: GemmaLogo },
  { name: "PostgreSQL", id: 6, img: PostgreSQLLogo },
  { name: "Milvus", id: 7, img: MilvusLogo },
  { name: "Olama", id: 8, img: OlamaLogo },
  { name: "Python", id: 9, img: PythonLogo },
];
