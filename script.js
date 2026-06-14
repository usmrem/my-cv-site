const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, observerOptions);

document
  .querySelectorAll("section, .project-card")
  .forEach(element => observer.observe(element));

function showJob(event, jobId) {
  document
    .querySelectorAll(".job")
    .forEach(job => job.classList.remove("active-job"));

  document
    .querySelectorAll(".tab")
    .forEach(tab => tab.classList.remove("active"));

  const selectedJob = document.getElementById(jobId);

  if (selectedJob) {
    selectedJob.classList.add("active-job");
  }

  event.currentTarget.classList.add("active");
}
