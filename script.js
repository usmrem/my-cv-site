const options = {
  threshold: 0.2
};

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      sectionObserver.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});

const cards = document.querySelectorAll(".project-card");

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      cardObserver.unobserve(entry.target);
    }
  });
}, options);

cards.forEach(card => {
  cardObserver.observe(card);
});

function showJob(event,id){

    document.querySelectorAll('.job')
        .forEach(job => job.classList.remove('active-job'));

    document.querySelectorAll('.tab')
        .forEach(tab => tab.classList.remove('active'));

    document.getElementById(id)
        .classList.add('active-job');

    event.currentTarget
        .classList.add('active');
}
