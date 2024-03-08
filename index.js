document.querySelector("header>time").textContent = new Date().toLocaleDateString("fa-IR", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});
