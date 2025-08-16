const imageMask = document.getElementById("imageMask");

document.body.onmousemove = event => {
    imageMask.style.display = "block";
    const { clientX, clientY } = event;
    imageMask.style.clipPath = (`circle(5% at ${clientX}px ${clientY}px)`);
}