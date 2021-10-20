$('.owl-carousel').owlCarousel({
    loop:false,
    margin:17,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

/* Menu Responsivo */
const btnMobile = document.getElementById('btn-menumobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/* Botão Assistir Agora */
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const owl_carousel = document.getElementById('owl-carousel');

open.addEventListener('click', () => {
    modal_container.classList.add('show'),
    owl_carousel.classList.remove('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})

$(".open").click(function(){
    $(".owl-carousel").toggleClass("hidden");
});