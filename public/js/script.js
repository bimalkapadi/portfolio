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


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });
document.addEventListener('DOMContentLoaded', () => {
  // 1. Total Visits Counter (LocalStorage Cache Logic)
  const visitCountEl = document.getElementById('visitCount');
  
  if (visitCountEl) {
    // Read previous visit count from storage or set starting base number
    let currentVisits = parseInt(localStorage.getItem('bk_portfolio_visits') || '1284', 10);
    
    // Increment on new page load
    currentVisits += 1;
    
    // Save updated count back to LocalStorage
    localStorage.setItem('bk_portfolio_visits', currentVisits);
    
    // Format number with commas (e.g. 1,285)
    visitCountEl.textContent = currentVisits.toLocaleString();
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
