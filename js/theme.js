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
    } else {
        iconChange.innerHTML = `<i class="fa-solid fa-sun sun-icon"></i>`
        logo1.src = "./img/logo-for-dark copy.svg"
        logo2.src = "./img/logo-for-dark copy.svg"
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
