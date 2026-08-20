/* ============================================================
   BREWED AWAKENING CAFÉ — script.js
   Features:
   1. Mobile navigation toggle
   2. Close mobile menu when a link is clicked
   3. Sticky header shadow on scroll
   4. Menu category filter tabs
   5. Scroll-reveal animations (IntersectionObserver)
   6. Reservation form validation
============================================================ */

'use strict';

/* ── Utility: grab element(s) without repeating querySelector ── */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];


/* ============================================================
   1. MOBILE NAVIGATION
   When the hamburger button is clicked, we toggle a class
   on the mobile menu and update aria-expanded for accessibility.
============================================================ */
(function initMobileNav() {
  const toggle     = qs('#nav-toggle');
  const mobileMenu = qs('#mobile-menu');

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    // Is the menu currently open?
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    // Flip the state
    toggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.setAttribute('aria-hidden',  String(isOpen));
    mobileMenu.classList.toggle('is-open', !isOpen);
  });
})();


/* ============================================================
   2. CLOSE MOBILE MENU ON LINK CLICK
   When a user taps a nav link, close the menu and scroll
   to the section — no page reload needed (single-page).
============================================================ */
(function closeMobileMenuOnLinkClick() {
  const toggle     = qs('#nav-toggle');
  const mobileMenu = qs('#mobile-menu');
  const mobileLinks = qsa('.mobile-link');

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!toggle || !mobileMenu) return;
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.classList.remove('is-open');
    });
  });
})();


/* ============================================================
   3. STICKY HEADER SHADOW ON SCROLL
   Adds a CSS class to the header when the user has scrolled
   down, giving it a visible shadow for depth.
============================================================ */
(function initStickyHeader() {
  const header = qs('#site-header');
  if (!header) return;

  const onScroll = () => {
    // Add 'scrolled' class if user has scrolled more than 20px
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  // Passive listener = better scroll performance (doesn't block rendering)
  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ============================================================
   4. MENU CATEGORY FILTER TABS
   When a tab button is clicked, show only the menu cards
   that match the selected category.

   How it works:
   - Each menu card has a data-category attribute e.g. "drinks indian"
   - Each tab button has a data-filter attribute e.g. "indian"
   - We check if the card's category string includes the filter
   - If it doesn't match, we add a "hidden" CSS class to hide it
============================================================ */
(function initMenuFilter() {
  const tabButtons = qsa('.tab-btn');
  const menuCards  = qsa('.menu-card');

  if (!tabButtons.length || !menuCards.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active tab styling
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter; // e.g. "indian" or "all"

      menuCards.forEach(card => {
        const categories = card.dataset.category || ''; // e.g. "food indian"

        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();


/* ============================================================
   5. SCROLL-REVEAL ANIMATIONS
   Uses the IntersectionObserver API to detect when elements
   enter the viewport, then adds a class to animate them in.

   IntersectionObserver is better than scroll events because:
   - It doesn't run on every scroll tick (better performance)
   - It's native to the browser (no library needed)
   - It automatically stops observing once the element is visible
============================================================ */
(function initScrollReveal() {
  // Mark elements we want to animate
  const revealTargets = qsa(
    '.menu-card, .benefit-card, .testimonial-card, .gallery-item, .about-content, .about-image-wrap'
  );

  revealTargets.forEach(el => el.setAttribute('data-animate', ''));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once visible, we don't need to watch it anymore
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,   // trigger when 12% of the element is visible
      rootMargin: '0px 0px -40px 0px'  // start a little before the element fully enters
    }
  );

  revealTargets.forEach(el => observer.observe(el));
})();


/* ============================================================
   6. RESERVATION FORM VALIDATION
   We validate the form fields before "submitting".
   Since this is a frontend-only demo, we show a success
   message instead of sending to a server.

   Important rule: NEVER fake a form submission.
   We clearly label this as a demo in the HTML.
============================================================ */
(function initReservationForm() {
  const form    = qs('#reserve-form');
  const success = qs('#form-success');

  if (!form) return;

  /* Helper: show an error message under a field */
  function showError(fieldId, message) {
    const field = qs(`#${fieldId}`);
    const error = qs(`#${fieldId}-error`);
    if (field)  field.classList.add('error');
    if (error)  error.textContent = message;
  }

  /* Helper: clear error on a field */
  function clearError(fieldId) {
    const field = qs(`#${fieldId}`);
    const error = qs(`#${fieldId}-error`);
    if (field)  field.classList.remove('error');
    if (error)  error.textContent = '';
  }

  /* Clear error as user types (better UX than waiting for submit) */
  ['name', 'phone', 'date', 'time', 'guests'].forEach(id => {
    const field = qs(`#${id}`);
    if (field) {
      field.addEventListener('input', () => clearError(id));
      field.addEventListener('change', () => clearError(id));
    }
  });

  /* Validate on submit */
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop normal form submission

    let isValid = true;

    // Clear all previous errors first
    ['name', 'phone', 'date', 'time', 'guests'].forEach(clearError);

    // Name: required, at least 2 characters
    const name = qs('#name').value.trim();
    if (!name) {
      showError('name', 'Please enter your full name.');
      isValid = false;
    } else if (name.length < 2) {
      showError('name', 'Name must be at least 2 characters.');
      isValid = false;
    }

    // Phone: required, basic format check
    const phone = qs('#phone').value.trim();
    const phoneRegex = /^[+\d\s\-()]{7,15}$/;
    if (!phone) {
      showError('phone', 'Please enter your phone number.');
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      showError('phone', 'Please enter a valid phone number.');
      isValid = false;
    }

    // Date: required, must not be in the past
    const dateVal = qs('#date').value;
    if (!dateVal) {
      showError('date', 'Please select a date.');
      isValid = false;
    } else {
      const selectedDate = new Date(dateVal);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Compare dates only, not time
      if (selectedDate < today) {
        showError('date', 'Please select today or a future date.');
        isValid = false;
      }
    }

    // Time: required
    const timeVal = qs('#time').value;
    if (!timeVal) {
      showError('time', 'Please select a time slot.');
      isValid = false;
    }

    // Guests: required
    const guests = qs('#guests').value;
    if (!guests) {
      showError('guests', 'Please select the number of guests.');
      isValid = false;
    }

    // If all valid, show success message
    if (isValid) {
      form.style.display = 'none';
      if (success) {
        success.removeAttribute('hidden');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Scroll to first error
      const firstError = qs('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
    }
  });
})();