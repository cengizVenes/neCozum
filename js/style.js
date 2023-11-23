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
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
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
    var settingsbg = document.getElementById("bg000");

    var backgroundColor = mode === "light" ? "#fff" : "#000";
    var textColor = mode === "light" ? "#000" : "#fff";
    var borderColor = mode === "light" ? '#000' : '#fff';
    var svgFill = mode === "light" ? '#000' : '#fff';
    var settingsModes = mode === "light" ? '#fff' : '#000';
    var settingsModesbg = mode === "light" ? '#fff' : '#000';

 
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
    settingsbg.style.backgroundColor = settingsModesbg ;
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