
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
}


document.addEventListener('DOMContentLoaded', () => {
const counters = document.querySelectorAll('.counter');
const speed = 2000; // The lower the slower

const animateCounters = () => {
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
};

// Check if counters are in view
const isElementInView = (el) => {
const rect = el.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
};

const handleScroll = () => {
counters.forEach(counter => {
  if (isElementInView(counter)) {
    animateCounters();
    window.removeEventListener('scroll', handleScroll);
  }
});
};

// Animate counters on load
animateCounters();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
});



