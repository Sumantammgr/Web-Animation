
function homePage(){
    let cursor=document.querySelector(".cursor");
    let pageContent=document.querySelector(".page_one");
    
    pageContent.addEventListener("mousemove",(dets)=>{
            gsap.to(cursor,{
             x:dets.x,
             y:dets.y
            })
    })
    
    pageContent.addEventListener("mouseenter",()=>{
           gsap.to(cursor,{
            scale:1,
            opacity:1
           })
    })
    pageContent.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
         scale:0,
         opacity:0
        })
    })
}
homePage();


function scrollTigger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
scrollTigger();

function textScroll(){
     gsap.from(".container_pagetwo h1",{
         y:200,
         stagger:0.25,
         duration:1,
         scrollTrigger:{
            trigger:".page_two",
            scroller:".main",
            start:"top 40%",
            end:"top 37%",
            scrub:2
         }
     })
     gsap.from(".page_top h1",{
      y:100,
      stagger:0.25,
      duration:1,
      scrollTrigger:{
         trigger:".page_three",
         scroller:".main",
         start:"top 40%",
         end:"top 37%",
         scrub:2
      }
  })
  gsap.from(".four_top h3",{
    y:50,
    stagger:0.25,
    duration:1,
    scrollTrigger:{
       trigger:".page_four",
       scroller:".main",
       start:"top 40%",
       end:"top 37%",
       scrub:2
    }
})
gsap.from(".page_four h1",{
  y:200,
  stagger:0.25,
  duration:1,
  scrollTrigger:{
     trigger:".page_four",
     scroller:".main",
     start:"top 40%",
     end:"top 37%",
     scrub:2
  }
})
gsap.from(".container_five h1",{
  y:-100,
  stagger:0.25,
  duration:5,
  scrollTrigger:{
     trigger:".page_five",
     scroller:".main",
     start:"top 40%",
     end:"top 37%",
     scrub:2
  }
})
}

textScroll();


