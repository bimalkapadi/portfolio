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
  // 1. Total Visits Counter (Global Sync via CounterAPI)
  const visitCountEl = document.getElementById('visitCount');

  if (visitCountEl) {
    // Unique identifier for your website
    const WORKSPACE = 'janakpur-portfolio';
    const COUNTER_KEY = 'total_visits';

    // Check if user already visited in current browser session to prevent reload spam
    const hasVisitedThisSession = sessionStorage.getItem('visited_session');

    // Use /hit to increment on new visit, or /get to just read if refreshing
    const apiEndpoint = hasVisitedThisSession
      ? `https://api.counterapi.dev/v1/${WORKSPACE}/${COUNTER_KEY}`
      : `https://api.counterapi.dev/v1/${WORKSPACE}/${COUNTER_KEY}/up`;

    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) throw new Error('Counter API error');
        return response.json();
      })
      .then(data => {
        // Mark session so refreshing doesn't artificially inflate count
        sessionStorage.setItem('visited_session', 'true');
        
        // Display global count with formatted commas (e.g., 1,285)
        if (data && data.count !== undefined) {
          visitCountEl.textContent = Number(data.count).toLocaleString();
        }
      })
      .catch(err => {
        console.error('Visit counter error:', err);
        // Static fallback display if API fails or is blocked
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
        // Display detected City and Country Code (e.g., "Janakpur, NP")
        if (data.city && data.country_code) {
          userLocationEl.textContent = `${data.city}, ${data.country_code}`;
        } else if (data.country_name) {
          userLocationEl.textContent = data.country_name;
        } else {
          userLocationEl.textContent = 'Janakpur, NP'; // Default fallback
        }
      })
      .catch(() => {
        // Fallback display if API call fails or user uses adblocker
        userLocationEl.textContent = 'Janakpur, NP';
      });
  }
});
