export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
  ENDPOINTS: {
    JOBS: "/api/jobs",
  },
  TIMEOUT: 10000,
};

export const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

export const EMPLOYMENT_TYPES = ["Remote", "On-site", "Hybrid"];

export const EXPERIENCE_LEVELS = [
  "Entry level",
  "Mid level",
  "Senior level",
  "Executive",
];
