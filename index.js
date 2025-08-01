
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    lightboxImg.src = images[index].src;
    lightbox.style.display = "flex";
}

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        showImage(index);
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "Escape") closeBtn.click();
    }
});










document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('booking-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Rezervasyon başarıyla alındı!");
        window.scrollTo({
            top: form.offsetTop,
            behavior: 'smooth'
        });
        form.style.display = 'none';
        successMessage.style.display = 'block';
    });
});








const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const activeItem = document.querySelector(".accordion-item.active");

        if (activeItem && activeItem !== header.parentElement) {
            activeItem.classList.remove("active");
        }

        header.parentElement.classList.toggle("active");
    });
});
