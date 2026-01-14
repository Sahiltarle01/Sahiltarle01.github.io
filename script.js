// ===============================
// Scroll animation (sections)
// ===============================
const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


// ===============================
// Dark / Light Mode Toggle (SAFE)
// ===============================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (toggleBtn) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "☀️";
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


// ===============================
// EmailJS Initialization
// ===============================
(function () {
  emailjs.init("dIoAodAPol19baBK-"); // ✅ Public Key
})();


// ===============================
// Contact Form Submission
// ===============================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_8s0yx1o",   // Service ID
      "template_e8yzyqt",  // Template ID
      this
    ).then(() => {
      document.getElementById("form-status").innerText =
        "✅ Message sent successfully!";
      this.reset();
    }).catch(() => {
      document.getElementById("form-status").innerText =
        "❌ Failed to send message. Try again.";
    });
  });
}


// ===============================
// SKILL BAR ANIMATION ON SCROLL
// ===============================
const skillFills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const level = entry.target.getAttribute("data-level");
      entry.target.style.width = level;
      skillObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(bar => skillObserver.observe(bar));


// ===============================
// TIMELINE ANIMATION ON SCROLL
// ===============================
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      timelineObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => timelineObserver.observe(item));
