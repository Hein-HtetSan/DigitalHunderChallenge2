
const iconChange = document.querySelector('.icons')
const Navbar_logo = document.querySelector('.img-logo')
const PageOne_logo = document.querySelector('.page-one-logo')

iconChange.onclick = function() {
    const toLight = document.body.classList.toggle('light-theme')
    if(document.body.classList.contains('light-theme') ){
        iconChange.innerHTML = `<i class="fa-solid fa-moon moon-icon"></i>`
        Navbar_logo.innerHTML = `<img class="img-fluid dh-logo" src="./img/logo-for-light.svg" alt="Digital Hunter Logo">`
        PageOne_logo.innerHTML = `<img class="img-fluid dh-logo2" src="./img/logo-for-light.svg" alt="Digital Hunter Logo">`
        localStorage.setItem('sun', JSON.stringify(iconChange.innerHTML))
        localStorage.setItem('in__logo', JSON.stringify(Navbar_logo.innerHTML))
        localStorage.setItem('in_page_logo', JSON.stringify(PageOne_logo.innerHTML))
    } else {
        iconChange.innerHTML = `<i class="fa-solid fa-sun sun-icon"></i>`
        Navbar_logo.innerHTML = `<img class="img-fluid dh-logo" src="./img/logo-for-dark copy.svg" alt="Digital Hunter Logo">`
        PageOne_logo.innerHTML = `<img class="img-fluid dh-logo2" src="./img/logo-for-dark copy.svg" alt="Digital Hunter Logo">`
        localStorage.setItem('moon', JSON.stringify(iconChange.innerHTML))
        localStorage.setItem('in_nav_light_logo', JSON.stringify(Navbar_logo.innerHTML))
        localStorage.setItem('in_page_light_logo', JSON.stringify(PageOne_logo.innerHTML))
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

const is_dark_navbar = JSON.parse(localStorage.getItem('in_nav_light_logo'))
const is_dark_page = JSON.parse(localStorage.getItem('in_page_light_logo'))
if (is_dark_navbar) {
    is_dark_navbar = Navbar_logo.innerHTML = `<img class="img-fluid dh-logo" src="./img/logo-for-dark copy.svg" alt="Digital Hunter Logo">`
}
if (is_dark_page) {
    is_dark_page = PageOne_logo.innerHTML = `<img class="img-fluid dh-logo2" src="./img/logo-for-dark copy.svg" alt="Digital Hunter Logo">`
}
const is_light_navbar = JSON.parse(localStorage.getItem('in_navbar_logo'))
const is_light_page = JSON.parse(localStorage.getItem('in_page_logo'))

if (is_light_navbar) {
    is_light_navbar = Navbar_logo.innerHTML = `<img class="img-fluid dh-logo" src="./img/logo-for-light.svg" alt="Digital Hunter Logo">`
}
if (is_light_page) {
    is_light_page = PageOne_logo.innerHTML = `<img class="img-fluid dh-logo2" src="./img/logo-for-light.svg" alt="Digital Hunter Logo">`
}