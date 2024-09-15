//preload
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none"; // Hide the preloader after the page loads
});

//mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".menu");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

  // Open/close mobile menu on click
  mobileMenuToggle.addEventListener("click", function (e) {
    e.preventDefault();

    // Toggle active class
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenu.style.maxHeight = "0"; // hide menu with animation
    } else {
      mobileMenu.classList.add("active");
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px"; // set max height for smooth expand
    }
  });
});

//step area 

window.addEventListener("load", function () {
  const firstSection = document.querySelector(".toggle-section");
  const firstContent = firstSection.querySelector(".toggle-content");

  // Set max-height for the first section on load
  firstContent.style.maxHeight = firstContent.scrollHeight + "px";
  firstSection.classList.add("expanded");
  firstSection.querySelector(".toggle-button").innerHTML =
    "Notes to cover with installer(s) &#9650;";
});

// Click event handler
document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", function () {
    const toggleSection = this.closest(".toggle-section");
    const content = toggleSection.querySelector(".toggle-content");

    // Close all sections
    document.querySelectorAll(".toggle-section").forEach((section) => {
      const sectionContent = section.querySelector(".toggle-content");
      if (section !== toggleSection) {
        sectionContent.style.maxHeight = null;
        section.classList.remove("expanded");
        section.querySelector(".toggle-button").innerHTML =
          "Notes to cover with installer(s) &#9660;";
      }
    });

    // Toggle current section
    if (!toggleSection.classList.contains("expanded")) {
      content.style.maxHeight = content.scrollHeight + "px";
      toggleSection.classList.add("expanded");
      this.innerHTML = "Notes to cover with installer(s) &#9650;";
    } else {
      content.style.maxHeight = null;
      toggleSection.classList.remove("expanded");
      this.innerHTML = "Notes to cover with installer(s) &#9660;";
    }
  });
});
