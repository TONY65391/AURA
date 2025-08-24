const header = document.querySelector('header');
const headerSubMenu = header.querySelector('.sub-menu');
const openBtn = headerSubMenu.querySelector('.openBtn');
const closeBtn = headerSubMenu.querySelector('.menu nav');
console.log(openBtn)

openBtn.addEventListener('click', () => {
    headerSubMenu.classList.remove('close');
    headerSubMenu.classList.add('open');
})
closeBtn.addEventListener('click', () => {
    headerSubMenu.classList.remove('open');
    headerSubMenu.classList.add('close');
})