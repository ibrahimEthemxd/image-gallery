const images = document.querySelectorAll(".gallery-images");
const overlay = document.querySelector(".overlay");
const expandedImage = document.querySelector(".expanded-image");
const closeBtn = document.querySelector(".close-button");

images.forEach((image) => {
    image.addEventListener("click", function () {
        expandedImage.src = image.src;
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            expandedImage.style.transform = "translate(-50%, -50%) scale(1)";
        }, 300);
    });
});

closeBtn.addEventListener("click", function () {
    expandedImage.style.transform = "translete(-50%,-50%) scale(0)";

    setTimeout(() => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
})