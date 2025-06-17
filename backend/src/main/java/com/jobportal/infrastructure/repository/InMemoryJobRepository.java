package com.jobportal.infrastructure.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Repository;

import com.jobportal.domain.entity.Job;
import com.jobportal.domain.repository.JobRepository;

@Repository
public class InMemoryJobRepository implements JobRepository {
    private final Map<Long, Job> jobs = new ConcurrentHashMap<>();

    // Initialize with some sample data
    public InMemoryJobRepository() {
        initializeSampleData();
    }

    @Override
    public Job save(Job job) {
        jobs.put(job.getId(), job);
        return job;
    }

    @Override
    public Optional<Job> findById(Long id) {
        return Optional.ofNullable(jobs.get(id));
    }

    @Override
    public List<Job> findAll() {
        return new ArrayList<>(jobs.values());
    }

    @Override
    public void deleteById(Long id) {
        jobs.remove(id);
    }

    @Override
    public boolean existsById(Long id) {
        return jobs.containsKey(id);
    }

    private void initializeSampleData() {
        Job job1 = new Job(1L, "Amazon", "Senior UI/UX Designer", 
                          "Design user interfaces for web applications", 
                          "San Francisco, CA", "Part time", "$250/hr", 
                          List.of("Part time", "Senior level", "Distant", "Project work"));
        job1.setLogoBackground("bg-black");
        job1.setBgColor("bg-orange-100");

        Job job2 = new Job(2L, "Google", "Product Designer", 
                          "Design products that users love", 
                          "Mountain View, CA", "Full time", "$180/hr", 
                          List.of("Full time", "Senior level", "Remote", "Long-term"));
        job2.setLogoBackground("bg-blue-500");
        job2.setBgColor("bg-green-100");
        job2.setBookmarked(true);

        jobs.put(1L, job1);
        jobs.put(2L, job2);
    }
}
