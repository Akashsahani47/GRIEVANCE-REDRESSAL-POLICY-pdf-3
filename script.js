const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburgerMenu');
const overlay = document.getElementById('sidebarOverlay');
const tocBtn = document.getElementById('tocMenuBtn');

function openSidebar() {
  sidebar.style.display = 'block';
  setTimeout(() => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }, 0);
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    if (!sidebar.classList.contains('open')) {
      sidebar.style.display = 'none';
    }
  }, 300);
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

document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1000) {
      closeSidebar();
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    closeSidebar();
  }
});

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