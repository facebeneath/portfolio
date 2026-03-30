const roles = ["| Web Designer", "| Grafik Designer", "| Front-End Developer"];
let roleIndex = 0;
let charIndex = 0;

function typeWriter() {
  const el = document.getElementById("typeWriter");
  const role = roles[roleIndex];

  if (charIndex < role.length) {
    el.textContent += role[charIndex++];
    setTimeout(typeWriter, 50);
  } else {
    setTimeout(() => {
      el.textContent = "";
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typeWriter();
    }, 700);
  }
}
typeWriter();

function filterPortfolio(category, button) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  button.classList.add("active");

  document.querySelectorAll(".portfolio-category").forEach((section) => {
    section.style.display =
      category === "all" || section.dataset.category === category
        ? "block"
        : "none";
  });
}

function openCert() {
  document.getElementById("certModal").style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = modal.querySelector(".close");
const nextBtn = modal.querySelector(".next");
const prevBtn = modal.querySelector(".prev");

let images = [];
let currentIndex = 0;

document.querySelectorAll(".portfolio-category").forEach((category) => {
  const imgs = category.querySelectorAll(".portfolio-item img");
  imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      images = Array.from(imgs).map((i) => i.src);
      currentIndex = index;
      openModal();
    });
  });
});

function openModal() {
  modal.style.display = "flex";
  modalImg.src = images[currentIndex];

  if (window.innerWidth > 768) {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
}

function closeModal() {
  modal.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex];
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

let startX = 0;
modalImg.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
modalImg.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) showNext();
  if (endX - startX > 50) showPrev();
});

const backToTop = document.getElementById("backToTop");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 20) {
    backToTop.classList.remove("show");
  } else if (scrollY > 700) {
    if (scrollY < lastScrollY) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  } else {
    backToTop.classList.remove("show");
  }

  lastScrollY = scrollY;
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const showDescBtn = document.getElementById("showDescBtn");
const modalDescription = document.getElementById("modalDescription");
const descText = document.getElementById("descText");
const closeDescBtn = document.getElementById("closeDescBtn");

const imageDescriptions = {
  "mockup.jpg":
    "Webprojekt-Mockup: Das Logo wurde auf einem Billboard präsentiert und mit mehreren visuellen Effekten veredelt.",
  "Beach.webp":
    "Bearbeitung des Strandes mit Farbkorrektur und präziser Komposition, aufgeteilt in vier rechteckige Segmente – ideal für Wanddekorationen und visuell ansprechende Präsentationen",
  "Burning-Sun.webp":
    "Digitale Komposition einer futuristischen Metropole unter einer gigantischen Sonne.Die Szene verbindet eine realistische Stadtlandschaft mit einem surrealen, kosmischen Element und erzeugt dadurch eine starke visuelle Spannung zwischen Realität und Fiktion.Die warmen, intensiven Orangetöne der Sonne kontrastieren gezielt mit den kühlen Blau- und Grautönen der Architektur und lenken den Fokus auf die dramatische Lichtstimmung.Das Bild steht symbolisch für Transformation, Energie und die Konfrontation des Menschen mit übermächtigen Kräften – interpretiert in einer modernen, digitalen Bildsprache",
  "Poster.webp": "Posterdesign mit Fokus auf Typografie und Layout",
  "retouch.webp":
    "Fotoretusche und Entfernung unerwünschter Elemente – die Hautunreinheiten des Models wurden sorgfältig korrigiert, um ein makelloses und ansprechendes Erscheinungsbild zu erzielen",
  "redesign-poster.webp":
    "Neugestaltung eines alten Filmplakats mit modernem visuellen Stil und frischem Designansatz.",
  "TheLost.webp": "Projekt 'The Lost' – konzeptionelles Filmplakat.",
  "Typography.webp":
    "Kreative Experimente mit Typografie, Layout und Farbgestaltung – moderne visuelle Konzepte für ansprechende Designs",
  "Gagaa.webp":
    "„Cover-Design für das Magazin Vogue mit Lady Gaga – kreative Gestaltung, typografische Präzision und stilvolle visuelle Umsetzung",
  "crow.webp": "Crow-Illustration – Fokus auf Details und Kontraste",
  "wolf.webp": "Wolf-Projekt – Digitale Komposition und Farbkorrektur",
};

const illustratorDescriptions = {
  "weber.jpg":
    "Vektorillustration 'Weber' – modernes Porträtdesign mit klaren Linien und kräftigen Farben, erstellt in Adobe Illustrator.",
  "ill.jpg":
    "Vektorillustration 'Ill' – kreatives Porträt mit geometrischen Formen und lebendigen Farben, erstellt in Adobe Illustrator.",
  "bird.jpg":
    "Vektorillustration 'Bird' – stilisiertes Vogelporträt mit klaren Linien und kräftigen Farben, erstellt in Adobe Illustrator.",
  "sebastianADLER.jpg":
    "Vektorillustration 'Sebastian ADLER' – modernes Porträtdesign mit klaren Linien und kräftigen Farben, erstellt in Adobe Illustrator.",
  "wheredesign.jpg":
    "Vektorillustration 'Where Design' – kreative Darstellung von Designkonzepten in einer modernen, farbenfrohen Komposition.",
  "facebeneath.webp": "Mein persönliches Logo",
  "E.webp": "Vektorillustration des Buchstabens E mit modernen Farbverläufen.",
  "moon.svg":
    "Nachtszene mit Mond und Bergen – digitale Illustration mit dunkler, stimmungsvoller Farbpalette, erstellt in Illustrator",
  "Sliced.webp":
    "Sliced-Illustration – Experimente mit geometrischen Formen und modernen Kompositionstechniken.",
  "Spiral.svg": "Spiralförmiges Vektordesign – Fokus auf Symmetrie und Dynamik",
  "gruber.png":
    "Illustration meines fiktiven Projekts 'Gruber' – kreative Kombination von Vektoren und Farben",
  "two-face.webp":
    "Logo für ein fiktives Unternehmen 'Two Face' – Porträt im doppelten Stil",
  "w1739245627_Baby_G_64646.webp":
    "Vektorillustration einer Giraffe – handgezeichnet und digital in Illustrator umgesetzt.",
};

const clientDescriptions = {
  "w.png": `Kundenprojekt – Webprojekt für einen Kunden, umgesetzt nach seinen individuellen Anforderungen. Fokus lag auf benutzerfreundlichem Design, klarer Struktur und responsiver Darstellung für alle Geräte. Das Ergebnis ist eine moderne, funktionale Website, die den Wünschen des Kunden entspricht.
  <br><a href="https://wellnessbeiigor.de" target="_blank" class="kunden-link">Zur Website →</a>`,
};

function getCurrentDescription() {
  const currentSrc = modalImg.src.split("/").pop();
  return (
    illustratorDescriptions[currentSrc] ||
    clientDescriptions[currentSrc] ||
    imageDescriptions[currentSrc] ||
    "Beschreibung fehlt"
  );
}

function openDescription() {
  descText.innerHTML = getCurrentDescription();
  modalDescription.style.display = "flex";
  modalImg.style.filter = "blur(4px)";
  showDescBtn.style.display = "none";
}

function closeDescription() {
  modalDescription.style.display = "none";
  modalImg.style.filter = "none";
  showDescBtn.style.display = "block";
}

showDescBtn.addEventListener("click", openDescription);
closeDescBtn.addEventListener("click", closeDescription);
