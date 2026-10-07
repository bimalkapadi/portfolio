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
document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------
  // 1. Total Visits Counter (Global CountAPI Logic)
  // ----------------------------------------------------
  const visitCountEl = document.getElementById('visitCount');

  if (visitCountEl) {
    const UNIQUE_COUNTER_KEY = 'janakpur_portfolio_visits_2026';

    fetch(`https://countapi.mileshilliard.com/api/v1/hit/${UNIQUE_COUNTER_KEY}`)
      .then((response) => {
        if (!response.ok) throw new Error('API request failed');
        return response.json();
      })
      .then((data) => {
        if (data && data.value !== undefined) {
          visitCountEl.textContent = parseInt(data.value, 10).toLocaleString();
        }
      })
      .catch((err) => {
        console.error('Visit counter error:', err);
        visitCountEl.textContent = '1,285';
      });
  }

  // ----------------------------------------------------
  // 2. Fetch Visitor Location (ipapi)
  // ----------------------------------------------------
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

  // ----------------------------------------------------
  // 3. Pure JavaScript Floating WhatsApp Button
  // ----------------------------------------------------
  
  // Remove any old buttons in HTML if present
  const oldButtons = document.querySelectorAll('.fixed.bottom-6.right-6, #whatsapp-float, #whatsapp-global-float');
  oldButtons.forEach(btn => btn.remove());

  // Inject Keyframe Animation Styles dynamically
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes waBounceAnimation {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-8px); }
      60% { transform: translateY(-4px); }
    }
  `;
  document.head.appendChild(styleTag);

  // Create clean floating WhatsApp container
  const waContainer = document.createElement('div');
  waContainer.id = 'whatsapp-global-float';

  waContainer.setAttribute('style', `
    position: fixed !important;
    bottom: 24px !important;
    right: 24px !important;
    top: auto !important;
    left: auto !important;
    z-index: 2147483647 !important;
    display: flex !important;
    align-items: center !important;
  `);

  waContainer.innerHTML = `
    <a 
      href="https://wa.me/447344062907?text=Hello%2C%20I%20have%20a%20question%20and%20would%20like%20to%20know%20more." 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat on WhatsApp" 
      style="
        display: flex !important; 
        align-items: center !important; 
        justify-content: center !important; 
        width: 56px !important; 
        height: 56px !important; 
        background-color: #25D366 !important; 
        border-radius: 50% !important; 
        box-shadow: 0 10px 20px rgba(0,0,0,0.3) !important; 
        transition: transform 0.3s ease !important; 
        text-decoration: none !important;
        animation: waBounceAnimation 2s infinite !important;
      "
      onmouseover="this.style.transform='scale(1.1)'"
      onmouseout="this.style.transform='scale(1.0)'"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        style="
          width: 28px !important; 
          height: 28px !important; 
          min-width: 28px !important; 
          max-width: 28px !important; 
          display: block !important;
        " 
      />
    </a>
  `;

  // Attach directly to <html> to keep it visible on full page scroll
  document.documentElement.appendChild(waContainer);
});
