function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Reveal sections on scroll
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Typing effect
const text = "Yousef";
let index = 0;
const speed = 200;
const cursor = document.querySelector(".cursor");

function type() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  } else {
    cursor.style.display = "none"; 
  }
}

type();


// Dark mode toggle
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

// Save theme
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});



// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});





