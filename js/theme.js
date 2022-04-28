const footer_logo = document.querySelector('.footer-dh-logo')
const iconChange = document.querySelector('.icons')
const Navbar_logo = document.querySelector('.dh-logo')
const Navbar_logo_sm = document.querySelector('.dh-logo-sm')
const PageOne_logo = document.querySelector('.page-one-logo')

iconChange.onclick = function() {
    const toLight = document.body.classList.toggle('light-theme')
    if(document.body.classList.contains('light-theme') ){
        iconChange.innerHTML = `<i class="fa-solid fa-moon moon-icon"></i>`
        Navbar_logo.src = "./img/logo-for-light.svg"
        Navbar_logo_sm.src = "./img/logo-for-light.svg"
        PageOne_logo.innerHTML = `<img class="img-fluid dh-logo2" src="./img/logo-for-light.svg" alt="Digital Hunter Logo">`
        footer_logo.src = "./img/logo-for-light.svg"
        localStorage.setItem('sun', JSON.stringify(iconChange.innerHTML))
        
    } else {
        iconChange.innerHTML = `<i class="fa-solid fa-sun sun-icon"></i>`
        Navbar_logo.src = "./img/logo-for-dark copy.svg"
        Navbar_logo_sm.src = "./img/logo-for-dark copy.svg"
        PageOne_logo.innerHTML = `<img class="img-fluid dh-logo2" src="./img/logo-for-dark copy.svg" alt="Digital Hunter Logo">`
        footer_logo.src = "./img/logo-for-dark copy.svg"
        localStorage.setItem('moon', JSON.stringify(iconChange.innerHTML))
        
    }
    localStorage.setItem('change-theme', JSON.stringify(toLight))
}

const changingTheme = JSON.parse(localStorage.getItem('change-theme'));
if (changingTheme) {
    changingTheme = document.body.classList.toggle('light-theme');
}

const sum = JSON.parse(localStorage.getItem('sun'))
if(sum) {
    sum = iconChange.innerHTML = `<i class="fa-solid fa-sun sun-icon"></i>`
}
const moon = JSON.parse(localStorage.getItem('moon'))
if(moon) {
    moon = iconChange.innerHTML = `<i class="fa-solid fa-moon moon-icon"></i>`
}

