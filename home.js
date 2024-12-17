document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navList = document.querySelector('.left ul');

    hamburgerIcon.addEventListener('click', function () {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        navList.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });

    setTimeout(function () {
        showSignupForm(); 
    }, 8000);

    function showSignupForm() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "flex";
    }
    
    document.getElementById("show-login-form").addEventListener("click", function () {
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "flex";
    });

    document.querySelector("#login-form .close-btn").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
    });

    document.querySelector("#signup-form .close-btn").addEventListener("click", function () {
        document.getElementById("signup-form").style.display = "none";
    });

   
    document.getElementById("show-signup-form").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "flex";
    });
});
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
$(document).ready(function () {
    if ($(window).width() <= 767) {
        $('.photo-container').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            prevArrow: false,
            nextArrow: false,
        });
    }
});
$(document).ready(function () {
   
    if ($(window).width() <= 767) {
        $('.bride-container').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            prevArrow: false,
            nextArrow: false,
        });
    }
});

$(document).ready(function(){
   
    $('.right-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true
    });
});
$(document).ready(function () {
   
    if ($(window).width() <= 767) {
        $('.gender').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            prevArrow: false,
            nextArrow: false,
        });
    }
});
$(document).ready(function () {
    $('.video-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
    });
});
$(document).ready(function () {
   
    if ($(window).width() <= 767) {
       
        $('.re-img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            prevArrow: false,
            nextArrow: false,
        });
    }
});

function verifyPhone() {
        
    alert("Verification code sent to your phone!");
}

function verifyEmail() {
    
    alert("Verification link sent to your email!");
}



function animateImageSlide() {
    const leftCarousel = document.querySelector('.left-img .img-carousel');
    const rightCarousels = document.querySelectorAll('.right-carousel');

    gsap.from(leftCarousel, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power4.out',
    });

    gsap.from(rightCarousels, {
        opacity: 0,
        x: 100,
        duration: 1,
        stagger: 0.5, 
        ease: 'power4.out',
    });
}


const container1 = document.querySelector('.container1');
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateImageSlide();
            observer1.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer1.observe(container1);


function animateImageCreative() {
    const images = document.querySelectorAll('.box img');
    const headingContainer = document.querySelector('.heading-container');
    const lineImage = document.querySelector('.line-image');
    gsap.from(headingContainer, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'ease.out',
    });

    gsap.from(lineImage, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: 'ease.out',
    });

    gsap.from(images, {
        opacity: 0,
        x: -100,
        scale: 0.5,
        duration: 1,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
    });
}


const container2 = document.querySelector('.container2');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateImageCreative();
            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(container2);


function animateImages() {
    const photoItems = document.querySelectorAll('.photo-item');
    const headingContainer = document.querySelector('.heading-container');
    const lineImage = document.querySelector('.line-image');
    gsap.from(headingContainer, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'ease.out',
    });

    gsap.from(lineImage, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: 'ease.out',
    });

    photoItems.forEach((item, index) => {
        gsap.from(item, {
            x: index % 2 === 0 ? -100 : 100, 
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power2.out',
        });
    });
}


const container = document.querySelector('.container3');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateImages();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); 

observer.observe(container);

function animateContainer4() {
    const brideContainer = document.querySelector('.bride-container');
    const brides = document.querySelectorAll('.bride');

    // gsap.from('.heading-container h2, .heading-container p, .line-image', {
    //     opacity: 0,
    //     y: 50,
    //     duration: 1,
    //     delay: 0.5,
    //     ease: 'power2.out',
    // });

    gsap.from(brides, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
    });
}


const container4 = document.querySelector('.container4');
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateContainer4();
            observer4.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer4.observe(container4);


function animateContainer5() {
    const giftContainer = document.querySelector('.container5');
    const giftImage = document.querySelector('.gift img');

    gsap.from('.container5 h2, .container5 p, .line-image', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
    });

    gsap.from(giftImage, {
        opacity: 0,
        scale: 0.8,
        rotation: -20,
        duration: 1,
        delay: 0.8,
        ease: 'back.out(1.7)',
    });
}


const container5 = document.querySelector('.container5');

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateContainer5();
            observer5.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer5.observe(container5);



function animateContainer6() {
    const container = document.querySelector('.container6');
    const headingContainer = document.querySelector('.heading-container');
    const lineImage = document.querySelector('.line-image');
    const genderBoxes = document.querySelectorAll('.gender-box');

    gsap.from(headingContainer, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
    });

    gsap.from(lineImage, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out',
    });

    gsap.from(genderBoxes, {
        opacity: 0,
        scale: 0.8,
        rotation: -20,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
    });
}


const container6 = document.querySelector('.container6');
const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateContainer6();
            observer6.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer6.observe(container6);



// function animateContainer7() {
//     const container = document.querySelector('.container7');
//     const videoItems = document.querySelectorAll('.video-item');

//     gsap.from('.container7 h2, .container7 p, .line-image', {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         delay: 0.5,
//         ease: 'power2.out',
//     });

//     gsap.from(videoItems, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1,
//         delay: 0.8,
//         stagger: 0.2,
//         ease: 'back.out(1.7)',
//     });
// }


// const container7 = document.querySelector('.container7');
// const observer7 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             animateContainer7();
//             observer7.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// observer7.observe(container7);



function animateContainer8() {
    const container = document.querySelector('.container8');
    const constLeft = document.querySelector('.const-left');
    const constRight = document.querySelector('.const-right');
    const reImg = document.querySelector('.re-img');
    const banner = document.querySelector('.banner');
    const headingContainer = document.querySelector('.heading-container');
    const lineImage = document.querySelector('.line-image');

    gsap.from(headingContainer, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'ease.out',
    });

    gsap.from(lineImage, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: 'ease.out',
    });
    
    gsap.from([constLeft, constRight, reImg, banner], {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: 'power4.out',
    });
}


const container8 = document.querySelector('.container8');
const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateContainer8();
            observer8.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer8.observe(container8);
