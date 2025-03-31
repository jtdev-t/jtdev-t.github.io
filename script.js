$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


function hearts() {
    $.each($(".particletext.hearts"), function () {
        let heartcount = ($(this).width() / 20) * 10;
        for (let i = 0; i < heartcount; i++) {
            let size = ($.rnd(60, 120) / 10);
            $(this).append(`<span class="particle" style="top: ${$.rnd(20, 80)}%; left: ${$.rnd(0, 95)}%; width: ${size}px; height: ${size}px; animation-delay: ${$.rnd(0, 30) / 10}s;"></span>`);
        }
    })
}


jQuery.rnd = function (m, n) {
    m = parseInt(m)
    n = parseInt(n)

    return Math.floor(Math.random() * (n - m + 1) + m)
}

hearts();


document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg",
        "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg",
        "img11.jpg", "img12.jpg", "img13.jpg"
    ];

    mudaTextoDias();

    let i = 0;
    const carrossel = document.querySelector("#img-carousel");

    function proxSlide() {
        carrossel.src = "imgs/" + images[i];
        i = (i + 1) % images.length;
    }


    proxSlide();
    setInterval(proxSlide, 1000);
});


function diasPassados(dataString) {
    const dataFornecida = new Date(dataString);
    const hoje = new Date();

    const diffTime = hoje.setHours(0, 0, 0, 0) - dataFornecida.setHours(0, 0, 0, 0);
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDias;
}

function mudaTextoDias() {
    const texto = document.querySelector("#time-counter")
    texto.innerHTML = `há ${diasPassados("2024-11-29")} dias`
}