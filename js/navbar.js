const OpenBtn = document.querySelector('.bar-icon')
const BackBtn = document.querySelector('.back-icon')
const ShowNavbar = document.querySelector('.links-list')

const Links = document.querySelectorAll('.sub-links')

OpenBtn.addEventListener('click', () => {
    OpenBtn.classList.add('show')
    ShowNavbar.classList.toggle('show')
    BackBtn.classList.add('show')
})

BackBtn.addEventListener('click', () => {
    OpenBtn.classList.remove('show')
    ShowNavbar.classList.remove('show')
    BackBtn.classList.remove('show')
})

Links.forEach((e) => {
    e.addEventListener('click', () => {
        OpenBtn.classList.remove('show')
        ShowNavbar.classList.remove('show')
        BackBtn.classList.remove('show')
    })
})