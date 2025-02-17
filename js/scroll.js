document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS
    AOS.init({
        duration: 800,    // 动画持续时间
        once: true,       // 动画是否只播放一次
        offset: 100,      // 触发动画的位置（距离底部多少像素时触发）
        easing: 'ease-in-out'  // 动画缓动函数
    });

    // ... 现有的导航代码 ...
}); 