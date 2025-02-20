const updateHeadingBtn = document.getElementById("updateHeading");
const changeBackgroundBtn = document.getElementById("changeBackground");

updateHeadingBtn.addEventListener("click", updateHeading);
changeBackgroundBtn.addEventListener("click", changeBackground);

function changeBackground() {
    const colors = [
        ['#ff0000', '#ffff00'],
        ['#00ff00', '#0000ff'],
        ['#ff00ff', '#00ffff'],
        ['#ff7f50', '#1e90ff'],
        ['#ff1493', '#00bfff'],
        ['#32cd32', '#ff4500'],
        ['#8a2be2', '#da70d6']
        ['#ff6347', '#4682b4'],
        ['#ffd700', '#8b0000'],
        ['#7fff00', '#ff69b4'],
        ['#dc143c', '#00ced1'],
        ['#ff8c00', '#9400d3'],
        ['#00fa9a', '#ff4500'],
        ['#1e90ff', '#ff1493']
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = `linear-gradient(to right, ${colors[randomIndex][0]}, ${colors[randomIndex][1]})`;
}
document.querySelector('button').style.display = 'block';
document.querySelector('button').style.margin = '0 auto';

function updateHeading() {
    const newText = document.getElementById('textInput').value;
    document.querySelector('h1').textContent = newText;
}
changeBackground();