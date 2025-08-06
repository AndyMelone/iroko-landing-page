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
  Video,
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

export type feature = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
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
    linkedin: "https://www.linkedin.com/in/melone-andy/",
  },
  {
    name: "Sanga Ousmani",
    role: "Software Engineer",
    picture: "/team/sanga.webp",
    linkedin: "https://www.linkedin.com/in/sanga-ousmani/",
  },
  {
    name: "Hans Ariel",
    role: "Gen AI Engineer",
    picture: "/logo.png",
    linkedin: "https://www.linkedin.com/in/hans-ariel/",
  },
  {
    name: "Levi Yao",
    role: "AI Engineer",
    picture: "/team/levy.webp",
    linkedin: "https://www.linkedin.com/in/levi-yao/",
  },
  {
    name: "Elias Gbane",
    role: "Data Engineer",
    picture: "/logo.png",
    linkedin: "https://www.linkedin.com/in/elias-gbane/",
  },
];

export const FEATURES: feature[] = [
  {
    icon: Gavel,
    title: "Conseils Juridiques AI",
    description:
      "Obtenez des conseils juridiques instantanés et précis grâce à notre intelligence artificielle.",
  },
  {
    icon: MessageSquare,
    title: "Support 24/7",
    description:
      "Accédez à une assistance juridique en direct à tout moment via notre chat intégré.",
  },
  {
    icon: FileText,
    title: "Analyse de Documents",
    description:
      "Automatisez l'analyse de vos documents juridiques pour une gestion efficace.",
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description:
      "Protégez vos données avec un chiffrement de bout en bout et des contrôles d'accès.",
  },
  {
    icon: Folder,
    title: "Gestion de Cas",
    description:
      "Organisez et suivez vos affaires juridiques avec notre plateforme intuitive.",
  },
  {
    icon: Video,
    title: "Démonstration Vidéo",
    description:
      "Explorez les fonctionnalités via une démo vidéo dédiée au hackathon Google Gemma 3n.",
  },
];
