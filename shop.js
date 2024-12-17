window.onscroll = function() {
    scrollFunction();
    scroll();
};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

function scroll(){
    var sbutton = document.getElementById("scroll-to-top");
    if(
        document.body.scrollTop>20  || document.documentElement.scrollTop>20
    ){
        sbutton.style.display = 'block';
    }
    else{
        sbutton.style.display ="none";
    }
}

document.getElementById('top-arrow').onclick =function(){
    scrolltotop();
}

function scrolltotop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



$(document).ready(function () {
    $('.img-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
    });
});
