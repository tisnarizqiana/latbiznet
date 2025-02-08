let heroIndex = 0;
const heroSlider = document.querySelector(".hero-slider");
const heroSlides = document.querySelectorAll(".hero-slide");

function updateHeroSlide() {
    heroSlider.style.transform = `translateX(${-heroIndex * 100}%)`;
}

function moveHeroSlide(step) {
    heroIndex = (heroIndex + step + heroSlides.length) % heroSlides.length;
    updateHeroSlide();
}

// Auto-slide setiap 5 detik
setInterval(() => moveHeroSlide(1), 5000);

// Tampilkan slide pertama saat halaman dimuat
updateHeroSlide();