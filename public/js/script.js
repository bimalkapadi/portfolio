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
  // 1. Total Visits Counter
  const visitCountEl = document.getElementById('visitCount');

  if (visitCountEl) {
    // Unique key for your portfolio site counter (change this to your unique name if needed)
    const UNIQUE_COUNTER_KEY = 'janakpur_portfolio_visits_2026';

    // Call CountAPI hit endpoint to increment by +1 on every page load
    fetch(`https://countapi.mileshilliard.com/api/v1/hit/${UNIQUE_COUNTER_KEY}`)
      .then((response) => {
        if (!response.ok) throw new Error('API request failed');
        return response.json();
      })
      .then((data) => {
        // data.value returns the new incremented count integer
        if (data && data.value !== undefined) {
          visitCountEl.textContent = parseInt(data.value, 10).toLocaleString();
        }
      })
      .catch((err) => {
        console.error('Visit counter error:', err);
        // Fallback display if network or adblocker issues occur
        visitCountEl.textContent = '1,285';
      });
  }

  // 2. Fetch Visitor Location using IP Geolocation API
  const userLocationEl = document.getElementById('userLocation');

  if (userLocationEl) {
    fetch('https://ipapi.co/json/')
      .then((response) => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then((data) => {
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
