document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // 禁用提交按钮防止重复提交
        submitBtn.disabled = true;
        submitBtn.textContent = '发送中...';
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            to: 'minychen.ai@gmail.com'
        };
        
        try {
            // 这里使用 EmailJS 或其他邮件服务发送邮件
            // 示例使用 EmailJS
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
            
            // 显示成功消息
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            
        } catch (error) {
            console.error('Error:', error);
            alert('发送失败，请稍后重试');
            
            // 重新启用提交按钮
            submitBtn.disabled = false;
            submitBtn.textContent = '发送';
        }
    });

    // 添加滚动监听动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 为猫咪卡片添加序号
    document.querySelectorAll('.cat-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index + 1);
    });

    // 监听需要动画的元素
    const animatedElements = document.querySelectorAll('.hero-content, .cats h2, .cat-card, .social h2, .social-item, .contact-form');
    animatedElements.forEach(el => observer.observe(el));
});

// 修改图片加载处理部分
document.addEventListener('DOMContentLoaded', function() {
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    
    imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        
        if (img.complete) {
            wrapper.classList.add('loaded');
        } else {
            img.onload = function() {
                wrapper.classList.add('loaded');
            };
            
            img.onerror = function() {
                wrapper.classList.add('loaded');
                img.style.display = 'none';
            };
        }
    });
}); 