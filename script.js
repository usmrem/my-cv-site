const dots = document.getElementById("dots");
const frames = ["", ".", "..", "..."];
let i = 0;

setInterval(() => {
  dots.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 400);

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
