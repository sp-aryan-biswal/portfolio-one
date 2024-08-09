const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.05
});


gsap.from("h1", {
    y: 20,
    duration: 1,
    delay: 0.8,
    opacity: 0,
    stagger: 0.2
})
