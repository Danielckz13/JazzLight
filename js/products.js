document.addEventListener('DOMContentLoaded', function() {
    // 处理产品图片切换
    function setupProductImageSwitch(productContainer) {
        const mainImage = productContainer.querySelector('.img_box img');
        const thumbnails = productContainer.querySelectorAll('.product_img_1 img:not(.pu img)');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src.replace('-small', '');
                
                // 添加选中效果
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 设置所有产品的图片切换功能
    const products = document.querySelectorAll('.product_1, .product_2');
    products.forEach(setupProductImageSwitch);

    // 添加滚动监听来更新活动链接
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 