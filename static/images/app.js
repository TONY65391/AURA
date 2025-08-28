const header = document.querySelector('header');
const openBtn = header.querySelector('.openBtn');
const body = document.querySelector('body');
const loading = document.querySelector('.loading');


openBtn.addEventListener('click', () => {
    if (body.classList.contains('open')){
        body.classList.remove('open');
        body.classList.add('close')
    }else{
        body.classList.remove('close');
        body.classList.add('open')
    }
})

setInterval(() => {
    loading.classList.add('fade');
}, 2000);
