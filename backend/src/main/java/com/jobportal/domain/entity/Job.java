package com.jobportal.domain.entity;

import java.time.LocalDate;
import java.util.List;

public class Job {
    private Long id;
    private LocalDate postedDate;
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

    // Constructor
    public Job(Long id, String company, String title, String description, 
               String location, String employmentType, String salary, List<String> tags) {
        this.id = id;
        this.postedDate = LocalDate.now();
        this.company = company;
        this.title = title;
        this.description = description;
        this.location = location;
        this.employmentType = employmentType;
        this.salary = salary;
        this.tags = tags;
        this.bookmarked = false;
        this.logoContent = company.substring(0, 1).toUpperCase();
        this.logoBackground = "bg-gray-800";
        this.logoTextColor = "text-white";
        this.bgColor = generateBgColor();
    }

    private String generateBgColor() {
        String[] colors = {"bg-orange-100", "bg-green-100", "bg-purple-100", 
                          "bg-blue-100", "bg-pink-100", "bg-gray-100"};
        return colors[(int) (Math.random() * colors.length)];
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDate getPostedDate() { return postedDate; }
    public void setPostedDate(LocalDate postedDate) { this.postedDate = postedDate; }

    public String getCompany() { return company; }
    public void setCompany(String company) { 
        this.company = company;
        this.logoContent = company.substring(0, 1).toUpperCase();
    }

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
