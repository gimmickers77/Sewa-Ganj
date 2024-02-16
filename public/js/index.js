// alert("helo")
gsap.registerPlugin("ScrollTrigger");

gsap.to("#navbar", {
    scale:0.99,
    backgroundColor: "#02281E",
    scrollTrigger: {
        trigger: "#about",
        // markers: true,
        start: "top bottom",
        end: "top top",
        scrub: 2
    }    
})

gsap.to("#hero-content, #hero-img", {
    y:300,
    opacity: 0.3,
    scrollTrigger: {
        trigger: "#about",
        // markers: true,
        start: "top 40%",
        end: "top top",
        scrub:2
    }
})


const typed = new Typed("#auto-type", {
    strings: ["Electrician ", "Plumbing ","Cleaning ","Carpenter", "Salon ", "Barber ", "Laundry"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
})


const home = document.querySelector("#home");
const bg1 = document.querySelector("#bg-compo-1");
const bg2 = document.querySelector("#bg-compo-2");

home.addEventListener("mouseenter", () => {
    gsap.to(bg1, {
        scale: 1,
        opacity: 1
    })
    gsap.to(bg2, {
        scale: 1,
        opacity: 1
    })
})

home.addEventListener("mouseleave", () => {
    gsap.to(bg1, {
        scale: 0,
        opacity: 0
    })
    gsap.to(bg2, {
        scale: 0,
        opacity: 0
    })
})

home.addEventListener("mouseover", (coordinates) => {
    // console.log("x", coordinates.x);
    // console.log("y", coordinates.y);
    gsap.to(bg2, {
        scale: 1,
        opacity: 1,
        x: coordinates.x/6,
        y: coordinates.y/6,
        ease: "back"
    })
    gsap.to(bg1, {
        scale: 1,
        opacity: 1,
        x: coordinates.x/3,
        y: coordinates.y/3,
        ease: "power3.out"
    })
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const year = new Date().getFullYear();

document.querySelector("#year").innerText = year;