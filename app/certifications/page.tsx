import type { Metadata } from "next";

import { Certifications } from "@/components/sections/Certifications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications",
  description:
    "Naeem Noor's professional certifications, including Google IT Support, Google Project Management Foundations, and an in-progress CCNA.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return <Certifications />;
}
