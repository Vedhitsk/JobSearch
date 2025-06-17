package com.jobportal.domain.repository;

import java.util.List;
import java.util.Optional;

import com.jobportal.domain.entity.Job;

public interface JobRepository {
    Job save(Job job);
    Optional<Job> findById(Long id);
    List<Job> findAll();
    void deleteById(Long id);
    boolean existsById(Long id);
}
