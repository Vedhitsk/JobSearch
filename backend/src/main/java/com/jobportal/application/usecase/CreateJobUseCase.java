package com.jobportal.application.usecase;

import org.springframework.stereotype.Service;

import com.jobportal.application.dto.JobRequestDto;
import com.jobportal.application.dto.JobResponseDto;
import com.jobportal.domain.entity.Job;
import com.jobportal.domain.repository.JobRepository;

@Service
public class CreateJobUseCase {
    private final JobRepository jobRepository;

    public CreateJobUseCase(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public JobResponseDto execute(JobRequestDto jobRequest) {
        // Validate input
        validateJobRequest(jobRequest);

        // Generate unique ID
        Long newId = generateNewId();

        // Create Job entity
        Job job = new Job(
            newId,
            jobRequest.getCompany(),
            jobRequest.getJobTitle(),
            jobRequest.getDescription(),
            jobRequest.getLocation(),
            jobRequest.getEmploymentType(),
            jobRequest.getSalaryString(),
            jobRequest.generateTags()
        );

        // Save job
        Job savedJob = jobRepository.save(job);

        // Return response DTO
        return new JobResponseDto(savedJob);
    }

    private void validateJobRequest(JobRequestDto jobRequest) {
        if (jobRequest.getJobTitle() == null || jobRequest.getJobTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Job title is required");
        }
        if (jobRequest.getCompany() == null || jobRequest.getCompany().trim().isEmpty()) {
            throw new IllegalArgumentException("Company name is required");
        }
        if (jobRequest.getDescription() == null || jobRequest.getDescription().trim().isEmpty()) {
            throw new IllegalArgumentException("Job description is required");
        }
    }

    private Long generateNewId() {
        return System.currentTimeMillis(); // Simple ID generation for in-memory storage
    }
}
