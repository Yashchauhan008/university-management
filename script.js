gsap.to('#page1 h1',{
    transform:'translateX(-100%)',
    fontWeight:100,
    scrollTrigger:{
        trigger: '#page1',
        scroller:'body',
        scrub:3,
        // markers:true,
        start:'top 0',
        end:'top -200%',
        pin:true
    }
}) 