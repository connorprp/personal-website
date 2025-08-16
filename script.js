const imageMask = document.getElementById("imageMask");
const image = document.getElementById("image");
const navLinks = document.querySelectorAll(".navBar2 a");

document.body.onmousemove = event => {
    imageMask.style.filter = "blur(0px)";
    imageMask.style.display = "block";
    const { clientX, clientY } = event;
    imageMask.style.clipPath = (`circle(75px at ${clientX}px ${clientY}px)`);
}


