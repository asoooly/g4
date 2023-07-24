// تأثيرات عند التمرير على الروابط في النافذة العلوية
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#f8f8f8';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});

// تفاعلات أكثر لأزرار الانتقال
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#0056b3';
  });

  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#007bff';
  });
});

// قائمة تحويلية (hamburger menu) للهواتف النقال
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// إرسال رسالة نموذج الاتصال وعرض رسالة تأكيد الإرسال
const contactForm = document.getElementById('contactForm');
const contactModal = document.querySelector('.contact-modal');
const closeModalBtn = document.querySelector('.close-modal');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  // قم بإضافة الكود الخاص بإرسال الرسالة هنا (مثل استخدام خدمة البريد الإلكتروني أو API)

  // عرض رسالة تأكيد الإرسال
  contactModal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  contactModal.classList.remove('show');
});
