// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// VIN Checker Function
function checkVin() {
  const vin = document.getElementById('vinInput').value.trim();
  if (vin.length === 17) {
    alert(`Fetching report for VIN: ${vin}\n(API integration would go here)`);
  } else {
    alert('Please enter a valid 17-character VIN');
  }
}

// Pricing Plan Hover and Selection Effects
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
  // Highlight card on hover
  card.addEventListener('mouseenter', () => {
    if (!card.classList.contains('selected')) {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    }
  });

  // Remove highlight when mouse leaves
  card.addEventListener('mouseleave', () => {
    if (!card.classList.contains('selected')) {
      card.style.transform = '';
      card.style.boxShadow = '';
    }
  });

  // Select plan on click
  card.addEventListener('click', (e) => {
    // Don't trigger if clicking the button itself
    if (e.target.classList.contains('btn-plan')) return;
    
    // Remove selection from all cards
    pricingCards.forEach(c => {
      c.classList.remove('selected');
      c.style.transform = '';
      c.style.boxShadow = '';
    });

    // Add selection to clicked card
    card.classList.add('selected');
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    
    // Focus the button for keyboard accessibility
    const button = card.querySelector('.btn-plan');
    button.focus();
  });

  // Keyboard navigation support
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// Plan Button Click Handlers
document.querySelectorAll('.btn-plan').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering card click
    const plan = button.closest('.pricing-card').querySelector('h3').textContent;
    alert(`You selected the ${plan} plan!`);
    
    // Visual feedback
    button.textContent = 'Selected!';
    button.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
      button.textContent = 'Choose Plan';
      button.style.backgroundColor = '';
    }, 1500);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});