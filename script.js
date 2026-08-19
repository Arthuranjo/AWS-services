const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle(
        "active", link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { threshold: 0.35 });

sections.forEach(section => observer.observe(section));
