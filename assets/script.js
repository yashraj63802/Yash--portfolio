document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#00ffcc";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "#ccc";
  });
});
