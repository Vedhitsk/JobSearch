package com.jobportal.application.usecase;

import org.springframework.stereotype.Service;

import com.jobportal.domain.repository.JobRepository;

@Service
public class DeleteJobUseCase {
    private final JobRepository jobRepository;

    public DeleteJobUseCase(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public void execute(Long id) {
        if (!jobRepository.existsById(id)) {
            throw new IllegalArgumentException("Job not found with id: " + id);
        }
        jobRepository.deleteById(id);
    }
}
