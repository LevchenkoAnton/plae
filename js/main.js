$(document).ready(function(){

    var emailInput = document.querySelector('.registration__input');
    var form = document.querySelector('.registration__form');
    form.addEventListener('submit', function (evt) {
        if(!emailInput.value) {
            evt.preventDefault();
            $('.registration__input').attr('placeholder', 'You must fill this field');
        }
    });

    $('.header__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });

    $('.range__slider').slick({
        arrows: true,
        fade: true,
        autoplay: true
    });
});