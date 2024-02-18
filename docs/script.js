

// Function to show or hide the navbar based on scroll position
function checkScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) {
        navbar.style.top = '0'; // Show the navbar
    } else {
        navbar.style.top = '-100px'; // Hide the navbar
    }
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const xIcon = document.getElementById('x-icon');

    menu.classList.toggle('menu-open');

    if (menu.classList.contains('menu-open')) {
        // Menu is open: show X icon, hide hamburger icon
        hamburgerIcon.style.display = 'none';
        xIcon.style.display = 'inline-block';
    } else {
        // Menu is closed: show hamburger icon, hide X icon
        hamburgerIcon.style.display = 'inline-block';
        xIcon.style.display = 'none';
    }
}

window.addEventListener('scroll', function() {
    checkScroll();

    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const xIcon = document.getElementById('x-icon');

    if (window.scrollY > 200) {
        navbar.style.top = '0'; // Show the navbar
    } else {
        navbar.style.top = '-100px'; // Hide the navbar
        if (menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
            hamburgerIcon.style.display = 'inline-block';
            xIcon.style.display = 'none';
        }
    }
});


function redirectToWebsite(url) {
  window.location.href = url;
}





document.addEventListener('scroll', function() {
  var backToTopBtn = document.getElementById('backToTopBtn');

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function setTheme(theme) {
    document.body.className = theme + '-mode';
    localStorage.setItem('theme', theme);

    // Update buttons to reflect the active theme if you have button toggles
    document.querySelectorAll('.theme-selector button').forEach(button => {
        button.classList.remove('active');
        if(button.getAttribute('data-theme') === theme) {
            button.classList.add('active');
        }
    });
}






let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex = (slideIndex - 2 + slides.length) % slides.length;
    showSlides();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    showSlides();
});





function setFont(font) {
    // Toggle the serif-mode class based on the font selection
    document.body.classList.toggle('serif-mode', font === 'serif');
    setFontActiveButton();
}

function setFontActiveButton() {
    // Check if 'serif-mode' class is present to determine the current font mode
    const currentFont = document.body.classList.contains('serif-mode') ? 'serif' : 'sans-serif';

    // Update the active state of buttons
    const buttons = document.querySelectorAll('.font-selector button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if ((button.textContent.toLowerCase() === 'serif' && currentFont === 'serif') ||
            (button.textContent.toLowerCase() === 'sans serif' && currentFont === 'sans-serif')) {
            button.classList.add('active');
        }
    });
}

// Initialize the active state on page load
document.addEventListener('DOMContentLoaded', setFontActiveButton);

// Event listeners for the font selection buttons
document.querySelector('.font-selector button:nth-child(1)').addEventListener('click', function() {
    setFont('sans-serif');
});
document.querySelector('.font-selector button:nth-child(2)').addEventListener('click', function() {
    setFont('serif');
});

