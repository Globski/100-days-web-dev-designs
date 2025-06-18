// function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show');
}

// Typed.js animation
const typed = new Typed('.typed-text', {
  strings: ["I’m Gloria Ogunsemore", "Software Engineer", "UI/UX Designer", "Problem Solver"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Back to Top logic
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};
backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
