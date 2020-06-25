window.onscroll = () => {
    const header = document.querySelector('.header');
    if(this.scrollY > 5){
        header.classList.add('scroll');
    }else {
        header.classList.remove('scroll');
    }
};

$( document ).ready(function() {
    $('.slider-wrapper').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        centerMode: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="prevArrow"><svg xmlns="http://www.w3.org/2000/svg" width="8.936" height="18.373" viewBox="0 0 8.936 18.373"><path d="M5582.859,14088.725l6.246,7.987-6.246,7.574" transform="translate(5590.388 14105.693) rotate(180)" fill="none" stroke="#f21689" stroke-linecap="round" stroke-width="2"/></svg></div>',
        nextArrow: '<div class="nextArrow"><svg xmlns="http://www.w3.org/2000/svg" width="8.936" height="18.373" viewBox="0 0 8.936 18.373"><path d="M5582.859,14088.725l6.246,7.987-6.246,7.574" transform="translate(-5581.452 -14087.32)" fill="none" stroke="#f21689" stroke-linecap="round" stroke-width="2"/></svg></div>',
    });
});