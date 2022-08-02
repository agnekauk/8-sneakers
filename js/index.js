let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let visibility = window.innerWidth;

function changeShoes() {
    document.querySelector(".section").classList.add("background-image2");
    document.querySelector(".sneakers").setAttribute("src", "img/sneakers2.png");
    line2.style.backgroundColor = "#c00921";
    line1.style.backgroundColor = "#cbbcc3";
};

function returnShoes() {
    document.querySelector(".section").classList.remove("background-image2");
    document.querySelector(".sneakers").setAttribute("src", "img/sneakers.png");
    line1.style.backgroundColor = "#c00921";
    line2.style.backgroundColor = "#cbbcc3";
};

if (visibility > 700) {
    window.addEventListener("load", scrollDown);
    window.addEventListener("load", scrollUp);

    function scrollDown() {
        window.addEventListener("mousewheel", (event) => {
            if (event.wheelDeltaY <= 0) {
                changeShoes();
            }
        })
    };


    function scrollUp() {
        window.addEventListener("mousewheel", (event) => {
            if (event.wheelDeltaY > 0) {
                returnShoes();
            }
        })
    };

} else {

    function clickLine() {
        line1.addEventListener("click", returnShoes);
        line2.addEventListener("click", changeShoes);
    };

    clickLine();
};


