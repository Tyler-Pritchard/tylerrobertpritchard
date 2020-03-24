let light = document.getElementById('video__light');
let btnLight = document.getElementById('btn-theme-light');
let mainLight = document.getElementById('heading-main-light');
let headingLight = document.getElementById('heading-light');
let about = document.getElementById('nav-about');
let projects = document.getElementById('nav-projects');


let dark = document.getElementById('video__dark');
let btnDark = document.getElementById('btn-theme-dark');
let mainDark = document.getElementById('heading-main-dark');
let headingDark = document.getElementById('heading-dark');
let artistBio = document.getElementById('nav-artist');
let music = document.getElementById('nav-music');
let documentary = document.getElementById('nav-documentary');


document.querySelector('#btn-theme-light').addEventListener('click', () => {
    light.style.display = "none";
    btnLight.style.display = "none";
    mainLight.style.display = "none";
    headingLight.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";


    dark.style.display = "block";
    btnDark.style.display = "inline";
    mainDark.style.display = "block";
    headingDark.style.display = "block";
    artistBio.style.display = "block";
    music.style.display = "block";
    documentary.style.display = "block";
})

document.querySelector('#btn-theme-dark').addEventListener('click', () => {
    dark.style.display = "none";
    btnDark.style.display = "none";
    mainDark.style.display = "none";
    headingDark.style.display = "none";
    artistBio.style.display = "none";
    music.style.display = "none";
    documentary.style.display = "none";


    light.style.display = "block";
    btnLight.style.display = "inline";
    mainLight.style.display = "block";
    headingLight.style.display = "block";
    about.style.display = "block";
    projects.style.display = "block";
})