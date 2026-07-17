function navAnimation() {
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function () {
   let tl = gsap.timeline()
   tl.to("#nav-bottom",{
    height:"21vh"
   })
   tl.to(".nav-elem h4",{
    fontSize: "0.73vw",
    textTransform:"uppercase",
    fontWeight: 600
   })

   tl.to(".nav-elem h5",{
    display:"block"
   })
   tl.to(".nav-elem h5 span",{
    y:0,
    // duration:0.3,
    stagger:{
        amount:0.5
    }
   })
})
nav.addEventListener("mouseleave",function () {
   let tl = gsap.timeline()
   tl.to(".nav-elem h5 span",{
    transform:`translateY(25px)`,
    stagger:{
        amount:0.2
    }
   })
   tl.to("#nav-bottom",{
    height:"0",
    duration:0.2
   })
   tl.to(".nav-elem h5",{
    display:"none",
    duration:0.1
   })
})
}

function page2Animation(){
   var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter",function () {
       gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
       })
    })
     elem.addEventListener("mouseleave",function () {
          gsap.to(elem.childNodes[3],{
        opacity:0,
        scale:0
       })
    })
     elem.addEventListener("mousemove",function (dets) {
        gsap.to(elem.childNodes[3],{
         x:dets.x - elem.getBoundingClientRect().x-90,
          y:dets.y - elem.getBoundingClientRect().y-215
        })
       })

})
}




function page4Animation(){
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    const title = card.querySelector("h2");
    const text = title.innerText;

    card.addEventListener("mouseenter", ()=>{

        title.innerText="";
        let i=0;

        const typing=setInterval(()=>{

            title.innerText+=text.charAt(i);
            i++;

            if(i===text.length){
                clearInterval(typing);
            }

        },60);

    });

});

}
 navAnimation()
page2Animation()
page4Animation()