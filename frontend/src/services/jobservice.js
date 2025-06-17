// services/jobService.js
const API_BASE_URL = "http://localhost:8080/api/jobs";

export const jobService = {
  async createJob(jobData) {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      throw new Error("Failed to create job");
    }

    return response.json();
  },

  async getAllJobs() {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    return response.json();
  },

  async updateJob(id, jobData) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      throw new Error("Failed to update job");
    }

    return response.json();
  },

  async deleteJob(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete job");
    }
  },
};
