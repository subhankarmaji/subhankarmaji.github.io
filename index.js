var indexbtn = document.getElementById("index-btn");
var indexnav = document.getElementById("index-nav");
var index = document.getElementById("index");

indexnav.style.right = "-250px";
indexbtn.onclick = function () {
    if (indexnav.style.right == "-250px") {
        indexnav.style.right = "0";
        index.src = "images/close.png";
    }
    else {
        indexnav.style.right = "-250px";
        index.src = "images/menu.png";
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

const tl= gsap.timeline({defaults: {ease: "Power1.out"} });

tl.to(".text", {y: "0%", duration: 1, stagger: 0.45});
tl.to(".slider",{y: "-100%", duration: 1.5, delay: 0.9 });
tl.to(".intro", { y: "-100%", duration: 1}, "-=1");
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1.2});
tl.fromTo(".welome-note", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.1});



const options = {
    top: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  


