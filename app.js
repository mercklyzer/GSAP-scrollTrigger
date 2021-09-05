gsap.to('.b', {
    scrollTrigger: {
        trigger: '.b',
        start: "top center", //position in the element, position in the viewport
        // start: "20px 80%", //relative to top
        endTrigger: '.b',
        end:"top top", //relative to the end trigger
        // end:"+=300", //relative to the start
        // end: () => "+=" + document.querySelector('.b').offsetWidth, //useful when object is responsive
        markers: true,
        toggleActions: "restart pause reverse pause", //onEnter onLeave onEnterBack onLeaveBack
        //scrub: true,    // locks the object with the scroll (reverses when scrolled up)
        scrub: 1, // with smoothness
        pin: true,
        // pin: ".a", //can be an element\
        // pinSpacing:false -> to remove padding
        //snap: -> when released, goes to closest element

        onEnter: () => console.log('Enter'),
        onLeave: () => console.log('Leave'),
        onEnterBack: () => console.log('Leave'),
        onLeaveBack: () => console.log('Leave'),
        // onUpdate:
        // onToggle:
        // toggleClass:
    },
    x:400,
    rotation: 360,
    duration: 3
})

//note that can use timeline here


// can also use callbacks on Scroll

