const csr = document.getElementById("csr");
const main = document.querySelector(".main");

main.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
});

gsap.to("#csr", {
  scale: 1.2,
  duration: 0.01,
  //change this above properties of nav when scroller trigger nav
  scrollTrigger: {
    trigger: "#csr", // change nav
    scroller: "body",
    // markers:true,
    start: "top -10%", //jab scrolling yaha pochega
    end: "top -11%",
    scrub: 1, // mouse scroll smoothness
  },
});
window.addEventListener("resize", function () {
  if (window.innerWidth <= 800 && window.innerWidth >= 700) {
    alert("Please Open this in a Desktop Site for a better experience");
  }
});
