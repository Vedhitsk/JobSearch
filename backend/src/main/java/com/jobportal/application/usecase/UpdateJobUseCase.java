package com.jobportal.application.usecase;

import org.springframework.stereotype.Service;

import com.jobportal.application.dto.JobRequestDto;
import com.jobportal.application.dto.JobResponseDto;
import com.jobportal.domain.entity.Job;
import com.jobportal.domain.repository.JobRepository;

@Service
public class UpdateJobUseCase {
    private final JobRepository jobRepository;

    public UpdateJobUseCase(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public JobResponseDto execute(Long id, JobRequestDto jobRequest) {
        Job existingJob = jobRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Job not found with id: " + id));

        // Update job fields
        existingJob.setTitle(jobRequest.getJobTitle());
        existingJob.setCompany(jobRequest.getCompany());
        existingJob.setDescription(jobRequest.getDescription());
        existingJob.setLocation(jobRequest.getLocation());
        existingJob.setEmploymentType(jobRequest.getEmploymentType());
        existingJob.setSalary(jobRequest.getSalaryString());
        existingJob.setTags(jobRequest.generateTags());

        Job updatedJob = jobRepository.save(existingJob);
        return new JobResponseDto(updatedJob);
    }
}
