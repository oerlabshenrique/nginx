new Swiper("#swiper-1", {
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 24,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazyLoading: true,
    loop: true
});


new Swiper("#swiper-2", {
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 24,
    },
    
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    pagination: {
        el: ("#swiper-2 .swiper-custom-pagination"),
        clickable: true,
        
        /*
        renderBullet: function (index, className) {
            return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
            </div>`;
        }*/

        
    },
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
    breakpoints: {
        800: {
            slidesPerView: 1.5
        },
        1400: {
            slidesPerView: 3
        }
    }
});