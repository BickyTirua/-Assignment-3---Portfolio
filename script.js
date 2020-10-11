
   function toggle(){
    let header = document.getElementById("header");
    header.classList.toggle('active');
}



var typed = new Typed('.type', {
    strings: ["FontEnd", "Developer","&","Deginer"],
    typeSpeed: 60,
    backSpeed: 30,
    startDelay: 30,
    smartBackspace: false,
    loop: true
  });


  TweenMax.from(".logo", 1, {
    x: -20,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".my-img", 1, {
    delay:1,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".name", 1, {
    delay:1.3,
    x: -20,
    opacity: 0,
    ease: Expo.easeInOut
})