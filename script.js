const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburgerMenu');
const overlay = document.getElementById('sidebarOverlay');
const tocBtn = document.getElementById('tocMenuBtn');

function openSidebar() {
  sidebar.style.display = 'block';
  // Use setTimeout to ensure display:block is applied before adding the open class
  setTimeout(() => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }, 0);
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
  // Wait for the transition to complete before hiding the sidebar
  setTimeout(() => {
    if (!sidebar.classList.contains('open')) {
      sidebar.style.display = 'none';
    }
  }, 300); // Match this with the CSS transition duration
}

function toggleSidebar() {
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

// Event Listeners
hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking a link on mobile
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1000) {
      closeSidebar();
    }
  });
});

// Close sidebar when pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    closeSidebar();
  }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 1000) {
      sidebar.style.display = '';
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  }, 250);
}); 