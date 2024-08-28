document.addEventListener("DOMContentLoaded", function() {
    let activeSlide = 2;

    const data = [
        { model: "Model 1" },
        { model: "Model 2" },
        { model: "Model 3" }
    ];

    data.map(x => {
        console.log(x.model);
    });

    setSlideHeader();

    document.getElementById("sub-slide").addEventListener("click", subtSlide);
    document.getElementById("add-slide").addEventListener("click", addSlide);

    function addSlide() {
        document.querySelectorAll(".slide-img")[activeSlide].classList.remove("active");
        activeSlide = (activeSlide + 1) % 3;
        document.querySelectorAll(".slide-img")[activeSlide].classList.add("active");
        setSlideHeader();
    }

    function subtSlide() {
        document.querySelectorAll(".slide-img")[activeSlide].classList.remove("active");
        activeSlide = (activeSlide + 2) % 3;
        document.querySelectorAll(".slide-img")[activeSlide].classList.add("active");
        setSlideHeader();
    }

    function setSlideHeader() {
        if (activeSlide == 0) {
            document.querySelector(".slide-header").innerHTML = "PORSCHE 911 GT2";
            document.querySelector(".slide-sub").innerHTML = "PORSCHE";
        } else if (activeSlide == 1) {
            document.querySelector(".slide-header").innerHTML = "Nissan GT-R";
            document.querySelector(".slide-sub").innerHTML = "Nissan";
        } else if (activeSlide == 2) {
            document.querySelector(".slide-header").innerHTML = "BMW I4";
            document.querySelector(".slide-sub").innerHTML = "BMW";
        }
    }
});
