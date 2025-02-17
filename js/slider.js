document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const images = document.querySelectorAll('.slider-image');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    
    // 创建导航点
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    // 更新显示的图片和导航点
    function updateSlider() {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // 切换到指定幻灯片
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // 下一张图片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }
    
    // 上一张图片
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }
    
    // 添加按钮事件监听器
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // 添加自动播放
    let slideInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停自动播放
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // 鼠标离开时恢复自动播放
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // 添加键盘控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}); 