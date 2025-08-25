const header = document.querySelector('header');
const openBtn = header.querySelector('nav .openBtn');
const body = document.querySelector('body');

openBtn.addEventListener('click', () => {
    if (body.classList.contains('open')){
        body.classList.remove('open');
        body.classList.add('close')
    }else{
        body.classList.remove('close');
        body.classList.add('open')
    }
})