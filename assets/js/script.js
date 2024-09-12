document.addEventListener("DOMContentLoaded", function () {
  const firstSection = document.querySelector(
    ".toggle-section .toggle-content"
  );
  firstSection.style.maxHeight = firstSection.scrollHeight + "px";
});

document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", function () {
    const toggleSection = this.closest(".toggle-section");
    const content = toggleSection.querySelector(".toggle-content");

    if (toggleSection.classList.contains("expanded")) {
      content.style.maxHeight = null;
      toggleSection.classList.remove("expanded");
      this.innerHTML = "Notes to cover with installer(s) &#9660;";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      toggleSection.classList.add("expanded");
      this.innerHTML = "Notes to cover with installer(s) &#9650;";
    }
  });
});
