
const hero = document.getElementById("hero");

hero.addEventListener("mousemove", (e) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  const rect = hero.getBoundingClientRect();
  ripple.style.left = (e.clientX - rect.left) + "px";
  ripple.style.top = (e.clientY - rect.top) + "px";

  hero.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 800);
});

window.onload = () => {
  document.getquerySelectorAll('.fill').forEach(bar => {
    bar.style.width = bar.classList.contains('html') ? '80%' :
                      bar.classList.contains('css') ? '80%' :
                      bar.classList.contains('js') ? '60%' :
                      '30%';
  });
}