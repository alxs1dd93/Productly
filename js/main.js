$(document).ready(function(){
    $('.slider').slick({
        // свойства и их значения слайдера
        // стрелки true/false
        arrows: false,
        // точки
        dots: true,
        //алдаптивная высота
        // adaptiveHeight: true,
        // сколько показывать на 1 странице
        slidesToShow: 3,
        //сколько слайдов прокручивать за раз
        slidesToScroll: 3,
        // скорость перелистывания
        speed: 500,
        // анимация
        // easing: 'linear',
        // конечность слайдера true/false
        // infinite: true,
        // стартовый слайдер
        // initialSlide: 0,
        // автоплей
        autoplay: false,
        autoplaySpeed: 5500, // скорость автопрокрутки 0.5сек
        //паузы
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        //возможность: 1)переворота по самому слайду 2) тачем
        draggable: true,
        swipe: true,
        //ждать ли анимацию
        waitForAnimate: false,
        // центровка слайда 31:13
        centerMode: false,
        variableWidth: false,
        //ряды
        rows: 1,
        //вертикальный вариант
        // vertical: true,
        //АДАПТИВ слайдера
        // responsive: [
        //     {
        //         breakpoint: 950,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 930,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
        

    });
});
  


//burger

const burgerTrigger = document.querySelector('.menu__btn'); // кнопка для нажатия
const burger = document.querySelector('.modal'); // modalka
const burgerCloseBtn = document.querySelector('[data-close]');
console.log(burgerTrigger);
console.log(burger);

// burgerTrigger.addEventListener('click', () => {
//     burger.classList.add('show');
//     burger.classList.remove('hide');
// });


function closeModal() {
    burger.classList.add('hide');
    burger.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    burger.classList.add('show');
    burger.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

burgerTrigger.addEventListener('click', openModal);
burgerCloseBtn.addEventListener('click', closeModal);












// function openBurger() { 
//     burger.classList.add('show');
//     burger.classList.remove('hide');
//     document.body.style.overflow = 'hidden'; 
// }
// // openBurger();

// function closeBurger() {
//     burger.classList.add('hide');
//     burger.classList.remove('show');
   
//     document.body.style.overflow = '';
// }
// // closeBurger();

// burger.addEventListener('click', openBurger);
