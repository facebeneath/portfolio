const header = document.querySelector(".header");
const parallaxSections = document.querySelectorAll(".hero, .parallax");
const mobileQuery = window.matchMedia("(max-width: 850px)");
let ticking = false;

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
  requestParallaxUpdate();
});

window.addEventListener("resize", requestParallaxUpdate);

if (typeof mobileQuery.addEventListener === "function") {
  mobileQuery.addEventListener("change", requestParallaxUpdate);
} else if (typeof mobileQuery.addListener === "function") {
  mobileQuery.addListener(requestParallaxUpdate);
}

function requestParallaxUpdate() {
  if (ticking) {
    return;
  }

  ticking = true;
  window.requestAnimationFrame(() => {
    applyMobileParallax();
    ticking = false;
  });
}

function applyMobileParallax() {
  if (!mobileQuery.matches) {
    parallaxSections.forEach((section) => {
      section.style.backgroundPosition = "";
    });
    return;
  }

  parallaxSections.forEach((section) => {
    const speed = section.classList.contains("hero") ? 0.2 : 0.32;
    const offset = (window.scrollY - section.offsetTop) * speed;
    section.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  });
}

requestParallaxUpdate();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
