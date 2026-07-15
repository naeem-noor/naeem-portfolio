import { Award, BookOpenCheck, Shield } from "lucide-react";

import type { IconComponent } from "@/types";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: "Completed" | "In Progress";
  icon: IconComponent;
}

export const certifications: Certification[] = [
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    status: "Completed",
    icon: Award,
  },
  {
    id: "google-pm",
    title: "Google Foundations of Project Management",
    issuer: "Google",
    status: "Completed",
    icon: BookOpenCheck,
  },
  {
    id: "ccna",
    title: "CCNA",
    issuer: "Cisco",
    status: "In Progress",
    icon: Shield,
  },
];
