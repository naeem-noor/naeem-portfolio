import type { Metadata } from "next";

import { Contact } from "@/components/sections/Contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Naeem Noor — open to Cloud Engineering, DevOps, and Infrastructure roles, plus technical collaboration and freelance work.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
