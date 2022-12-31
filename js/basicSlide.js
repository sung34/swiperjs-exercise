// SCROLL LISTENER FOR FADE-IN EFFECT AND RELOCATION OF CONTROLLER STATES
//25 ~ 75 text
const controllerCaption = document.querySelector('#controller-caption');
const backBtn = document.querySelector('#backBtn');
const controllerImages = document.querySelector('.controller-img');

window.addEventListener('scroll', () => {
  let scrollYPosition = window.scrollY; 

  if (scrollYPosition > 25) {
    controllerCaption.style.opacity = 0;
  }
  else {
    controllerCaption.style.opacity = 1;
  }
  if (scrollYPosition > 65 && window.innerWidth > 980){
    backBtn.style.transform = 'translateX(-700px)';
  }
  else {
    backBtn.style.transform = 'none';
  }

  
});

// MOUSEWHEEL AND KEYBOARD LISTENER FOR SLIDE PREV AND NEXT
const mousewheelIcon = document.querySelector("#mousewheelIcon");
const keyboardIcon = document.querySelector("#keyboardIcon");
window.onwheel = () => {
  mousewheelIcon.style.opacity = 1;
  mousewheelIcon.style.animation =
    "beating 0.8s linear infinite";
  keyboardIcon.style.opacity = 0.5;
  keyboardIcon.style.animation = "none";
};

window.onkeydown = (keyEvent) => {
  if (keyEvent.key === "ArrowRight" || keyEvent.key === "ArrowLeft") {
    mousewheelIcon.style.opacity = 0.5;
    mousewheelIcon.style.animation =
      "none";
    keyboardIcon.style.opacity = 1;
    keyboardIcon.style.animation = "beating 0.8s linear infinite";
  }
};


//SLIDERS BY ITS EFFECT STYLES
const cardSwiper = new Swiper("#card-swiper", {
  centeredSlides: true,
  slidesPerView: 2,
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: "#card-swiper .swiper-pagination",
    type: "bullets",
    clickable: true,
    clickableClass: ".test",
  },

  navigation: {
    nextEl: "#card-swiper .swiper-button-next",
    prevEl: "#card-swiper .swiper-button-prev",
  },

  effect: "cards",
  cardEffect: {
    perSlideOffset: 7,
    perSlideRotate: 40,
    rotate: true,
  },
});

const cubeSwiper = new Swiper("#cube-swiper", {
  centeredSlides: true,
  loop: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: "#cube-swiper .swiper-pagination",
    type: "bullets",
    clickable: true,
    clickableClass: ".test",
  },

  navigation: {
    nextEl: "#cube-swiper .swiper-button-next",
    prevEl: "#cube-swiper .swiper-button-prev",
  },

  effect: "cube",
  cubeEffect: true,
});

const flipSwiper = new Swiper("#flip-swiper", {
  centeredSlides: true,
  slidesPerView: 2,
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: "#flip-swiper .swiper-pagination",
    type: "bullets",
    clickable: true,
    clickableClass: ".test",
  },

  navigation: {
    nextEl: "#flip-swiper .swiper-button-next",
    prevEl: "#flip-swiper .swiper-button-prev",
  },

  effect: "flip",
  flipEffect: true,
});

const coverflowSwiper = new Swiper("#coverflow-swiper", {
  slidesPerView: 3,
  mousewheel: true,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: "#coverflow-swiper .swiper-pagination",
    type: "bullets",
    clickable: true,
    clickableClass: ".test",
  },

  navigation: {
    nextEl: "#coverflow-swiper .swiper-button-next",
    prevEl: "#coverflow-swiper .swiper-button-prev",
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 90,
    scale: 1,
    depth: 80,
    slideShadows: false,
  },
});



