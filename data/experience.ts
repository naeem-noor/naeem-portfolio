import type { JourneyItem } from "@/components/sections/Experience/types";
import type { HeadlineLine } from "@/types";

export const experienceHeader = {
  label: "Experience",
  headline: [
    [{ text: "Five Years, Three Countries," }],
    [{ text: "One Focus: " }, { text: "Reliable Systems.", accent: true }],
  ] satisfies HeadlineLine[],
};

export const journeyItems: JourneyItem[] = [
  {
    id: "pakistan",
    place: "Pakistan",
    period: "Where it started",
    description:
      "Started my career in IT support and software development, building the technical foundations everything else is built on.",
  },
  {
    id: "australia",
    place: "Australia (Remote)",
    period: "Going international",
    description:
      "Supported SaaS products remotely, working alongside international engineering teams and adjusting to a fully distributed workflow.",
  },
  {
    id: "dubai",
    place: "Dubai International Airport",
    period: "Enterprise scale",
    description:
      "Worked within enterprise-scale IT operations, supporting mission-critical infrastructure where uptime isn't optional.",
  },
  {
    id: "abu-dhabi",
    place: "Abu Dhabi",
    period: "Going deeper",
    description:
      "Expanded into enterprise infrastructure, networking, and security systems across a larger, more complex environment.",
  },
  {
    id: "today",
    place: "Today",
    period: "What's next",
    description:
      "Building cloud-native applications while mastering Docker, CI/CD, infrastructure as code, and AWS.",
    current: true,
  },
];
