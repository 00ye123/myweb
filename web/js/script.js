document.addEventListener('DOMContentLoaded', function() {
    // 原有的 AOS 初始化代码（如果有的话）

    // 轮播图逻辑
    const carouselItems = document.querySelectorAll('.hero-carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 5000); // 每5秒切换一次图片
});

// 保留原有的其他 JavaScript 代码