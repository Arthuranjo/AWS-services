const cards = document.querySelectorAll(".tech-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 650,
          easing: "cubic-bezier(.2,.7,.2,1)",
          fill: "forwards"
        }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.animationDelay = `${index * 80}ms`;
  observer.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
