package com.jobportal.application.dto;

import java.time.format.DateTimeFormatter;
import java.util.List;

import com.jobportal.domain.entity.Job;

public class JobResponseDto {
    private Long id;
    private String postedDate;
    private String company;
    private String title;
    private String logoBackground;
    private String logoTextColor;
    private String logoContent;
    private boolean bookmarked;
    private List<String> tags;
    private String salary;
    private String location;
    private String bgColor;
    private String description;
    private String employmentType;

    // Constructor from Job entity
    public JobResponseDto(Job job) {
        this.id = job.getId();
        this.postedDate = job.getPostedDate().format(DateTimeFormatter.ofPattern("dd MMM, yyyy"));
        this.company = job.getCompany();
        this.title = job.getTitle();
        this.logoBackground = job.getLogoBackground();
        this.logoTextColor = job.getLogoTextColor();
        this.logoContent = job.getLogoContent();
        this.bookmarked = job.isBookmarked();
        this.tags = job.getTags();
        this.salary = job.getSalary();
        this.location = job.getLocation();
        this.bgColor = job.getBgColor();
        this.description = job.getDescription();
        this.employmentType = job.getEmploymentType();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPostedDate() { return postedDate; }
    public void setPostedDate(String postedDate) { this.postedDate = postedDate; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getLogoBackground() { return logoBackground; }
    public void setLogoBackground(String logoBackground) { this.logoBackground = logoBackground; }

    public String getLogoTextColor() { return logoTextColor; }
    public void setLogoTextColor(String logoTextColor) { this.logoTextColor = logoTextColor; }

    public String getLogoContent() { return logoContent; }
    public void setLogoContent(String logoContent) { this.logoContent = logoContent; }

    public boolean isBookmarked() { return bookmarked; }
    public void setBookmarked(boolean bookmarked) { this.bookmarked = bookmarked; }

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }

    public String getSalary() { return salary; }
    public void setSalary(String salary) { this.salary = salary; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getBgColor() { return bgColor; }
    public void setBgColor(String bgColor) { this.bgColor = bgColor; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getEmploymentType() { return employmentType; }
    public void setEmploymentType(String employmentType) { this.employmentType = employmentType; }
}
