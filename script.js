/* ─────────────────────────────────────
   MINE SENSE – script.js
───────────────────────────────────── */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

/* ── Hamburger menu ── */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// Close menu on nav link click
navMenu.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

/* ── Intersection Observer: fade-up elements ── */
const fadeEls = document.querySelectorAll(".fade-up");
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

fadeEls.forEach((el) => fadeObserver.observe(el));

/* ── Animated number counters in Hero ── */
function animateCounter(el, target, duration = 1600) {
  let start = 0;
  const step = target / (duration / 16);
  const update = () => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start);
    if (start < target) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const statEls = document.querySelectorAll(".stat-val[data-count]");
let countersStarted = false;

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        statEls.forEach((el) => {
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target);
        });
      }
    });
  },
  { threshold: 0.3 },
);

const heroSection = document.getElementById("hero");
if (heroSection) heroObserver.observe(heroSection);

/* ── Active nav link highlighting on scroll ── */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  },
  { threshold: 0.35 },
);

sections.forEach((sec) => sectionObserver.observe(sec));

/* ── Smooth parallax tilt on helmet image ── */
const helmetImg = document.getElementById("helmetImg");
if (helmetImg) {
  document.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    helmetImg.style.transform = `
      translateY(${Math.sin(Date.now() / 1000) * 8}px)
      rotateY(${dx * 8}deg)
      rotateX(${-dy * 8}deg)
    `;
  });
}

/* ── Feature card accent CSS var propagation ── */
document.querySelectorAll(".feat-card").forEach((card) => {
  const wrap = card.querySelector(".feat-icon-wrap");
  if (wrap) {
    const accent = getComputedStyle(wrap).getPropertyValue("--accent").trim();
    if (accent) card.style.setProperty("--accent", accent);
  }
});

/* ── Stagger animation delays for grid children ── */
function staggerChildren(selector, delayStep = 0.07) {
  document.querySelectorAll(selector).forEach((el, i) => {
    if (!el.style.animationDelay) {
      el.style.animationDelay = `${i * delayStep}s`;
    }
  });
}
staggerChildren(".problem-card");
staggerChildren(".result-card");
staggerChildren(".future-item");

/* ── Explore button ripple effect ── */
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position:absolute;width:6px;height:6px;border-radius:50%;
      background:rgba(255,255,255,.5);
      left:${e.offsetX}px;top:${e.offsetY}px;
      transform:translate(-50%,-50%) scale(0);
      animation:ripple .5s ease forwards;
      pointer-events:none;
    `;
    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
}

// Inject ripple keyframes once
const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
  @keyframes ripple { to { transform: translate(-50%,-50%) scale(40); opacity: 0; } }
  .nav-link.active { color: var(--neon) !important; }
`;
document.head.appendChild(rippleStyle);

/* ── Trophy emoji sparkle on hover ── */
const trophy = document.getElementById("trophyAnim");
if (trophy) {
  trophy.addEventListener("mouseenter", () => {
    trophy.style.transform = "scale(1.3) rotate(10deg)";
    trophy.style.transition = "transform .3s ease";
  });
  trophy.addEventListener("mouseleave", () => {
    trophy.style.transform = "";
  });
}

/* ── Contact Form Handling ── */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Simulate form submission
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = "✓ Message Sent!";

      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }, 1200);

    console.log("Form submitted:", data);
  });
}

/* ── Gallery item stagger animation ── */
staggerChildren(".gallery-item", 0.08);
