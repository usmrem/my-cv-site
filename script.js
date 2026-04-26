const dots = document.getElementById("dots");
const frames = ["", ".", "..", "..."];
let i = 0;

setInterval(() => {
  dots.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 400);
