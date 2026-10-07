document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Toggle ---
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

  // --- 2. Scroll Reveal Animation ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });

  // --- 3. Total Visits Counter ---
  const visitCountEl = document.getElementById('visitCount');
  if (visitCountEl) {
    let currentVisits = parseInt(localStorage.getItem('bk_portfolio_visits') || '1284', 10);
    currentVisits += 1;
    localStorage.setItem('bk_portfolio_visits', currentVisits);
    visitCountEl.textContent = currentVisits.toLocaleString();
  }

  // --- 4. Visitor Location API ---
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
