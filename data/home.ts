import type { AboutCtaData } from "@/components/sections/About/types";
import { siteConfig } from "@/lib/site-config";

/** Short, standalone intro shown right under the Hero on `/` — deliberately
 * not a copy of the About page's story, since a reader may see both. */
export const homeIntro = {
  paragraph:
    "I'm a Technical Support Engineer with five years in enterprise IT across Pakistan, the UAE, and Australia — now shifting that experience toward cloud infrastructure and DevOps.",
  cta: { label: "Read my full story", href: "/about" },
};

export const homeCta: AboutCtaData = {
  heading: "Let's build something reliable together.",
  primary: { label: "Contact Me", href: "/contact" },
  secondary: {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    download: true,
  },
};
