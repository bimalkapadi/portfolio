const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


/* Scroll reveal animation */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);

// Reveal elements observer setup
document.querySelectorAll(".reveal").forEach((element) => {
  if (typeof observer !== 'undefined') {
    observer.observe(element);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // 1. Total Visits Counter (Increments on EVERY page load / refresh)
  const visitCountEl = document.getElementById('visitCount');

  if (visitCountEl) {
    const WORKSPACE = 'janakpur-portfolio';
    const COUNTER_KEY = 'total_visits';

    // Call /up directly on every page load or refresh
    fetch(`https://api.counterapi.dev/v1/${WORKSPACE}/${COUNTER_KEY}/up`)
      .then(response => {
        if (!response.ok) throw new Error('Counter API error');
        return response.json();
      })
      .then(data => {
        if (data && data.count !== undefined) {
          visitCountEl.textContent = Number(data.count).toLocaleString();
        }
      })
      .catch(err => {
        console.error('Visit counter error:', err);
        visitCountEl.textContent = '1,285';
      });
  }

  // 2. Fetch Visitor Location using IP Geolocation API
  const userLocationEl = document.getElementById('userLocation');

  if (userLocationEl) {
    fetch('https://ipapi.co/json/')
      .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then(data => {
        if (data.city && data.country_code) {
          userLocationEl.textContent = `${data.city}, ${data.country_code}`;
        } else if (data.country_name) {
          userLocationEl.textContent = data.country_name;
        } else {
          userLocationEl.textContent = 'Janakpur, NP';
        }
      })
      .catch(() => {
        userLocationEl.textContent = 'Janakpur, NP';
      });
  }
});
