export interface EducationRecord {
  university: string;
  degree: string;
  duration: string;
  location: string;
  coursework: string[];
  achievements: string[];
}

/**
 * ⚠️ REVIEW BEFORE PUBLISHING
 * University and degree are real. `duration` is a placeholder — fill in
 * the actual start/end years. Coursework and achievements are reasonable
 * for the degree but not verified against an actual transcript.
 */
export const education: EducationRecord = {
  university: "University of Engineering and Technology, Taxila",
  degree: "Bachelor of Science in Computer Science",
  duration: "2017—2021",
  location: "Taxila, Pakistan",
  coursework: [
    "Computer Networks",
    "Operating Systems",
    "Database Systems",
    "Software Engineering",
    "Data Structures & Algorithms",
  ],
  achievements: [
    "Established a comprehensive foundation in computer science, enabling growth across enterprise IT, infrastructure, full-stack development, and cloud/DevOps engineering.",
  ],
};
