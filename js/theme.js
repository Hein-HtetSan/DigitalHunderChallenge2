const iconChange = document.querySelector('.icons')
const logo1 = document.querySelector('.dh-logo')
const logo2 = document.querySelector('.dh-logo2')

iconChange.onclick = function() {
    const toLight = document.body.classList.toggle('light-theme')
    if(document.body.classList.contains('light-theme') ){
        iconChange.innerHTML = `<i class="fa-solid fa-moon moon-icon"></i>`
        logo1.src = "./img/logo-for-light.svg"
        logo2.src = "./img/logo-for-light.svg"
        localStorage.setItem('sun', JSON.stringify(iconChange.innerHTML))
        localStorage.setItem('logo11', JSON.stringify(logo1.src))
        localStorage.setItem('logo22', JSON.stringify(logo2.src))
    } else {
        iconChange.innerHTML = `<i class="fa-solid fa-sun sun-icon"></i>`
        logo1.src = "./img/logo-for-dark copy.svg"
        logo2.src = "./img/logo-for-dark copy.svg"
        localStorage.setItem('moon', JSON.stringify(iconChange.innerHTML))
        localStorage.setItem('logo1-dark', JSON.stringify(logo1.src))
        localStorage.setItem('logo2-dark', JSON.stringify(logo2.src))
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
const logo1_light = JSON.parse(localStorage.getItem('logo11'))
const logo2_light = JSON.parse(localStorage.getItem('logo22'))
const logo1_dark = JSON.parse(localStorage.getItem('logo1-dark'))
const logo2_dark = JSON.parse(localStorage.getItem('logo2-dark'))
if (logo1_light && logo2_light) {
    logo2_light = logo2.src = "./img/logo-for-light.svg"
    logo1_light = logo1.src = "./img/logo-for-light.svg"
}
if (logo1_dark){
    logo1_dark = logo1.src = "./img/logo-for-dark copy.svg"
}
if (logo2_dark){
    logo2_dark = logo2.src = "./img/logo-for-dark copy.svg"
}