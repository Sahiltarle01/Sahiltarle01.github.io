// ==========================================
// SAFE DOM READY WRAPPER
// ==========================================
document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // SCROLL REVEAL ANIMATION
  // ==========================================
  const sections = document.querySelectorAll('.hidden');

  if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

  } else {
    // Fallback for older browsers
    sections.forEach(section => section.classList.add('show'));
  }


  // ==========================================
  // DARK / LIGHT MODE TOGGLE
  // ==========================================
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      body.classList.add("light-theme");
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("light-theme");

      if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙";
      }
    });
  }


  // ==========================================
  // SKILL BAR ANIMATION
  // ==========================================
  const skillFills = document.querySelectorAll(".skill-fill");

  if ('IntersectionObserver' in window) {

    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute("data-level");
          entry.target.style.width = level;
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    skillFills.forEach(bar => skillObserver.observe(bar));
  }


  // ==========================================
  // TIMELINE ANIMATION
  // ==========================================
  const timelineItems = document.querySelectorAll(".timeline-item");

  if ('IntersectionObserver' in window) {

    const timelineObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => timelineObserver.observe(item));
  }


  // ==========================================
  // EMAILJS CONTACT FORM
  // ==========================================
  const contactForm = document.getElementById("contact-form");

  if (contactForm && typeof emailjs !== "undefined") {

    emailjs.init("dIoAodAPol19baBK-"); // Public Key

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const status = document.getElementById("form-status");
      const submitBtn = contactForm.querySelector("button");

      submitBtn.disabled = true;
      submitBtn.innerText = "Sending...";

      emailjs.sendForm(
        "service_8s0yx1o",
        "template_e8yzyqt",
        this
      ).then(() => {

        status.innerText = "✅ Message sent successfully!";
        status.style.color = "green";
        contactForm.reset();

      }).catch(() => {

        status.innerText = "❌ Failed to send message. Try again.";
        status.style.color = "red";

      }).finally(() => {

        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";

      });
    });
  }

});
