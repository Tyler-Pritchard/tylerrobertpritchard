let light = document.getElementById('video__light');
let btnLight = document.getElementById('btn-theme-light');
let headingLight = document.getElementById('heading-light');
let about = document.getElementById('nav-about');
let projects = document.getElementById('nav-projects');


let dark = document.getElementById('video__dark');
let btnDark = document.getElementById('btn-theme-dark');
let headingDark = document.getElementById('heading-dark');
let artistBio = document.getElementById('nav-artist');
let music = document.getElementById('nav-music');
let documentary = document.getElementById('nav-documentary');


document.querySelector('#btn-theme-light').addEventListener('click', () => {
    light.style.display = "none";
    btnLight.style.display = "none";
    headingLight.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";


    dark.style.display = "inline";
    btnDark.style.display = "inline";
    headingDark.style.display = "inline";
    artistBio.style.display = "inline";
    music.style.display = "inline";
    documentary.style.display = "inline";
})

document.querySelector('#btn-theme-dark').addEventListener('click', () => {
    dark.style.display = "none";
    btnDark.style.display = "none";
    headingDark.style.display = "none";


    light.style.display = "inline";
    btnLight.style.display = "inline";
    headingLight.style.display = "inline";
})