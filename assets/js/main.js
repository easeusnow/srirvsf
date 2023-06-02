document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


//Image Protection
document.oncontextmenu = function() {
  return false;
}


//User Info Form
var slideIndex = 0;

if (window.location.pathname ==='/srirvsf/' || window.location.pathname ==='/srirvsf/index.html' || window.location.pathname ==='/srirvsf/sales.html') {
  showSlide(slideIndex);
}
showSlide(slideIndex);

function nextSlide() {
  var slides = document.getElementsByClassName("slide");
  var headings = document.getElementsByClassName("form__heading");
  if (slideIndex < slides.length - 1) {
    slides[slideIndex].style.display = "none";
    headings[slideIndex].style.display = "none";
    slideIndex++;
    headings[slideIndex].style.display = "block";
    slides[slideIndex].style.display = "block";
    checkField();
  }

  var prevBtn = document.getElementById("prevBtn");
  if (slideIndex === 1) {
    prevBtn.style.display = "inline-block";
  }

  var nextBtn = document.getElementById("nextBtn");
  var submitBtn = document.getElementById("submitBtn");
  if (slideIndex === slides.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  }
}

function previousSlide() {
  var slides = document.getElementsByClassName("slide");
  var headings = document.getElementsByClassName("form__heading");
  if (slideIndex > 0) {
    slides[slideIndex].style.display = "none";
    headings[slideIndex].style.display = "none";
    slideIndex--;
    slides[slideIndex].style.display = "block";
    headings[slideIndex].style.display = "block";
    checkField();
  }

  var prevBtn = document.getElementById("prevBtn");
  if (slideIndex === 0) {
    prevBtn.style.display = "none";
  }

  var nextBtn = document.getElementById("nextBtn");
  var submitBtn = document.getElementById("submitBtn");
  if (slideIndex < slides.length - 1) {
    nextBtn.innerHTML = "Next";
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}

function showSlide(index) {
  var slides = document.getElementsByClassName("slide");
  var headings = document.getElementsByClassName("form__heading");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    headings[i].style.display = "none";
  }
  slides[index].style.display = "block";
  headings[index].style.display = "block";
}

function checkField() {
  var currentSlide = document.getElementsByClassName("slide")[slideIndex];
  var inputField = currentSlide.querySelector("input");
  var nextBtn = document.getElementById("nextBtn");
  
  if (inputField.value.trim() !== '') {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

function toggleSubmitBtn() {
  var submitBtn = document.getElementById("submitBtn");
  var inputField = document.getElementById("car");

  if (inputField.value === '') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function handleEnterKey(event) {
  var currentSlide = document.getElementsByClassName("slide")[slideIndex];
  var inputField = currentSlide.querySelector("input");
  if (event.keyCode === 13 && (inputField.value.trim() !== '') ) {
    // alert("Hello");
    nextSlide();
  }
}

function handleClick(){
  nextSlide();
  var nextBtn = document.getElementById("nextBtn");
  nextBtn.style.display = "inline-block";
}


// function call(){
//   alert(window.location.pathname); 
// }

// call();
