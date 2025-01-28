document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active"); // Skifter mellem at vise/skjule menuen
  });
});
