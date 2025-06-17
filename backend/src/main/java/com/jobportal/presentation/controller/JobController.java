package com.jobportal.presentation.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.application.dto.JobRequestDto;
import com.jobportal.application.dto.JobResponseDto;
import com.jobportal.application.usecase.CreateJobUseCase;
import com.jobportal.application.usecase.DeleteJobUseCase;
import com.jobportal.application.usecase.GetAllJobsUseCase;
import com.jobportal.application.usecase.UpdateJobUseCase;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
public class JobController {
    private final CreateJobUseCase createJobUseCase;
    private final GetAllJobsUseCase getAllJobsUseCase;
    private final UpdateJobUseCase updateJobUseCase;
    private final DeleteJobUseCase deleteJobUseCase;

    public JobController(CreateJobUseCase createJobUseCase,
                        GetAllJobsUseCase getAllJobsUseCase,
                        UpdateJobUseCase updateJobUseCase,
                        DeleteJobUseCase deleteJobUseCase) {
        this.createJobUseCase = createJobUseCase;
        this.getAllJobsUseCase = getAllJobsUseCase;
        this.updateJobUseCase = updateJobUseCase;
        this.deleteJobUseCase = deleteJobUseCase;
    }

    @PostMapping
    public ResponseEntity<JobResponseDto> createJob(@RequestBody JobRequestDto jobRequest) {
        try {
            JobResponseDto createdJob = createJobUseCase.execute(jobRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdJob);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<JobResponseDto>> getAllJobs() {
        List<JobResponseDto> jobs = getAllJobsUseCase.execute();
        return ResponseEntity.ok(jobs);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobResponseDto> updateJob(@PathVariable Long id, 
                                                   @RequestBody JobRequestDto jobRequest) {
        try {
            JobResponseDto updatedJob = updateJobUseCase.execute(id, jobRequest);
            return ResponseEntity.ok(updatedJob);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        try {
            deleteJobUseCase.execute(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
