var tl = gsap.timeline()
tl.to(".full", {
    right: 0,
    duration: 1,

})
tl.from(".full h2" ,{
    x: 150,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})
tl.from(".full i " ,{
    opacity: 0
})