document.addEventListener("DOMContentLoaded", () => {
  // === 1. Fade-in animation per sezioni ===
  const sections = document.querySelectorAll(".fade-in-hidden");

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        entry.target.classList.remove("fade-in-hidden");
      } else {
        entry.target.classList.remove("fade-in");
        entry.target.classList.add("fade-in-hidden");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    fadeObserver.observe(section);
  });

  // === 2. Gestione nav-title ===
  const navTitle = document.querySelector(".nav-title");
  const headerTitle = document.querySelector("header h1");

  // Mostra la nav-title quando si scrolla un po'
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navTitle.textContent = "Omar Group";
      navTitle.classList.add("visible");
    }
  });

  // Nasconde la nav-title quando il titolo grande è visibile
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Il titolo grande è visibile: nascondi nav-title
        navTitle.classList.remove("visible");
        setTimeout(() => {
          if (!navTitle.classList.contains("visible")) {
            navTitle.textContent = "";
          }
        }, 400); // Deve combaciare con la durata della transizione CSS
      }
    });
  }, { threshold: 0.1 });

  headerObserver.observe(headerTitle);
});
