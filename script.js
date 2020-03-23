let light = document.getElementById('video__light');
let btnLight = document.getElementById('btn-theme-light');
let headingLight = document.getElementById('heading-light');


let dark = document.getElementById('video__dark');
let btnDark = document.getElementById('btn-theme-dark');
let headingDark = document.getElementById('heading-dark');


document.querySelector('#btn-theme-light').addEventListener('click', () => {
    light.style.display = "none";
    btnLight.style.display = "none";
    headingLight.style.display = "none";


    dark.style.display = "inline";
    btnDark.style.display = "inline";
    headingDark.style.display = "inline";
})

document.querySelector('#btn-theme-dark').addEventListener('click', () => {
    dark.style.display = "none";
    btnDark.style.display = "none";
    headingDark.style.display = "none";


    light.style.display = "inline";
    btnLight.style.display = "inline";
    headingLight.style.display = "inline";
})