//mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.menu');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

  // Open/close mobile menu on click
  mobileMenuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Toggle active class
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      mobileMenu.style.maxHeight = '0'; // hide menu with animation
    } else {
      mobileMenu.classList.add('active');
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px'; // set max height for smooth expand
    }
  });
});



//other section
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
