import type { Metadata } from "next";

import { Contact } from "@/components/sections/Contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Naeem Noor — Cloud & DevOps Engineer, available via email, GitHub, and LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
