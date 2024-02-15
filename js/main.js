// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    iverlay.classList.toggle("active");
});

// Multiple Text

const typed = new Typed(".multiple", {
    strings: ["QA Engineer.", "Manual QA.", "Studing Automation."],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

