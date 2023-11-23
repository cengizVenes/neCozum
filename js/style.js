$('.Carousel1').owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
});
function LightMode() {
    // Sayfanın body elementini seçme
    var bodys = document.body;
    var buttons = document.getElementsByTagName("button");
    var divElements = document.getElementsByTagName("div");
    var span = document.getElementsByClassName("acordionColor");
    var svgs = document.getElementsByTagName("svg");
    var setings = document.getElementById("bgFFF");
    var downarrow = document.getElementById("downarrow");
    // Şimdi body elementine bir özellik ekleyebilir veya üzerinde değişiklik yapabilirsiniz
    bodys.style.backgroundColor = "#fff"; // Örneğin, arka plan rengini değiştirelim
    bodys.style.color = "#000"; // Örneğin, arka plan rengini değiştirelim
    for (var i = 0; i < divElements.length; i++) {
        divElements[i].style.borderColor = '#000';
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.borderColor = '#000';
        buttons[i].style.color = '#000';
    }
    for (var i = 0; i < svgs.length; i++) {
        svgs[i].style.fill = '#000';
    }
    for (var i = 0; i < span.length; i++) {
        span[i].style.color = "#000";
    }
    setings.style.backgroundColor = "#FFF";
    downarrow.style.color = "#000";
}
function DarkMode() {
    // Sayfanın body elementini seçme
    var bodys = document.body;
    var buttons = document.getElementsByTagName("button");
    var divElements = document.getElementsByTagName("div");
    var svgs = document.getElementsByTagName("svg");
    var span = document.getElementsByClassName("acordionColor");
    var setings = document.getElementById("bgFFF");
    var downarrow = document.getElementById("downarrow");
    // Şimdi body elementine bir özellik ekleyebilir veya üzerinde değişiklik yapabilirsiniz
    bodys.style.backgroundColor = "#000"; // Örneğin, arka plan rengini değiştirelim
    bodys.style.color = "#fff"; // Örneğin, arka plan rengini değiştirelim
    for (var i = 0; i < divElements.length; i++) {
        divElements[i].style.borderColor = '#fff';
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.borderColor = '#fff';
        buttons[i].style.color = '#fff';
    }
    for (var i = 0; i < svgs.length; i++) {
        svgs[i].style.fill = '#fff';
    }
    for (var i = 0; i < span.length; i++) {
        span[i].style.color = '#fff';
    }
    setings.style.backgroundColor = "#000";
    downarrow.style.color = "#fff";
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btnMore");
    var btnIcon = document.getElementById("btnicon");


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Devamı...";
        moreText.style.display = "none";
        btnIcon.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Daha az";
        moreText.style.display = "inline";
        btnIcon.style.display = "block";
    }
}
function setColorMode(mode) {
    var bodys = document.body;
    var buttons = document.getElementsByTagName("button");
    var divElements = document.getElementsByTagName("div");
    var span = document.getElementsByClassName("acordionColor");
    var svgs = document.getElementsByTagName("svg");
    var setings = document.getElementById("lightButton");
    var downarrow = document.getElementById("downarrow");
    var settings = document.getElementById("bgFFF");

    var backgroundColor = mode === "light" ? "#fff" : "#000";
    var textColor = mode === "light" ? "#000" : "#fff";
    var borderColor = mode === "light" ? '#000' : '#fff';
    var svgFill = mode === "light" ? '#000' : '#fff';
    var settingsModes = mode === "light" ? '#fff' : '#000'
 
    bodys.style.backgroundColor = backgroundColor;
    bodys.style.color = textColor;

    for (var i = 0; i < divElements.length; i++) {
        divElements[i].style.borderColor = borderColor;
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.borderColor = borderColor;
        buttons[i].style.color = textColor;
    }

    for (var i = 0; i < svgs.length; i++) {
        svgs[i].style.fill = svgFill;
    }

    for (var i = 0; i < span.length; i++) {
        span[i].style.color = textColor;
    }
    settings.style.backgroundColor = settingsModes ;
    setings.style.backgroundColor = backgroundColor;
    downarrow.style.color = textColor;

    localStorage.setItem('colorMode', mode);
}

window.onload = function () {
    var mode = localStorage.getItem('colorMode');
    if (!mode) {
        mode = "light";
    }
    setColorMode(mode);
}