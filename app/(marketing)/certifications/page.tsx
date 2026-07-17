import type { Metadata } from "next";

import { Certifications } from "@/components/sections/certifications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications",
  description:
    "Naeem Noor's certifications and education — Google IT Support, an in-progress CCNA, a Computer Science degree, and a clear roadmap of cloud and DevOps credentials ahead.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return <Certifications />;
}
