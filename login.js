
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
