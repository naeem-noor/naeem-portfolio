import type { AboutCtaData } from "@/components/sections/About/types";
import { siteConfig } from "@/lib/site-config";

/** Short, standalone intro shown right under the Hero on `/` — deliberately
 * not a copy of the About page's story, since a reader may see both. */
export const homeIntro = {
  paragraph:
    "I'm a cybersecurity-focused technology professional with 5+ years of experience supporting enterprise environments across Pakistan, the UAE, and Australia. I'm now specializing in Security Operations, threat detection, and building more secure digital environments.",
  cta: { label: "Read my full story", href: "/about" },
};

export const homeCta: AboutCtaData = {
  heading: "Ready to strengthen your security ?",
  primary: { label: "Contact Me", href: "/contact" },
  secondary: {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    download: true,
  },
};
