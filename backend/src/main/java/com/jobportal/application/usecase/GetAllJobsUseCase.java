package com.jobportal.application.usecase;

import com.jobportal.application.dto.JobResponseDto;
import com.jobportal.domain.repository.JobRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GetAllJobsUseCase {
    private final JobRepository jobRepository;

    public GetAllJobsUseCase(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<JobResponseDto> execute() {
        return jobRepository.findAll()
                .stream()
                .map(JobResponseDto::new)
                .collect(Collectors.toList());
    }
}
