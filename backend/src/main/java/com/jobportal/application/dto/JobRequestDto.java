package com.jobportal.application.dto;

import java.util.List;

public class JobRequestDto {
    private String jobTitle;
    private String company;
    private String location;
    private String employmentType;
    private String salaryMin;
    private String salaryMax;
    private String description;

    // Constructors
    public JobRequestDto() {}

    public JobRequestDto(String jobTitle, String company, String location, 
                        String employmentType, String salaryMin, String salaryMax, String description) {
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.employmentType = employmentType;
        this.salaryMin = salaryMin;
        this.salaryMax = salaryMax;
        this.description = description;
    }

    // Helper method to generate salary string
    public String getSalaryString() {
        if (salaryMin != null && salaryMax != null) {
            return "$" + salaryMin + " - $" + salaryMax;
        } else if (salaryMin != null) {
            return "$" + salaryMin + "+";
        }
        return "Competitive";
    }

    // Helper method to generate tags
    public List<String> generateTags() {
        return List.of(employmentType, "Remote", "New posting");
    }

    // Getters and Setters
    public String getJobTitle() { return jobTitle; }
    public void setJobTitle(String jobTitle) { this.jobTitle = jobTitle; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getEmploymentType() { return employmentType; }
    public void setEmploymentType(String employmentType) { this.employmentType = employmentType; }

    public String getSalaryMin() { return salaryMin; }
    public void setSalaryMin(String salaryMin) { this.salaryMin = salaryMin; }

    public String getSalaryMax() { return salaryMax; }
    public void setSalaryMax(String salaryMax) { this.salaryMax = salaryMax; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
