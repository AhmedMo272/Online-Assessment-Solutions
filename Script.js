const scriptURL = "https://script.google.com/macros/s/AKfycbzwDNffzlbT6_yv1mmMcvXt5RRUqlDoTym3GZy5Ez-aWPIN8dmcHYx6M3PX5kXe4BHksA/exec";

function showPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

function openWhatsApp() {
  window.open('https://wa.me/201091616915', '_blank');
}

function selectPackage(packageName) {
  const packageMap = {
    Starter: "1200",
    Standard: "2500",
    Advanced: "4000"
  };

  const packageType = document.getElementById("packageType");
  packageType.value = packageMap[packageName] || "1200";
  document.getElementById("result").innerText = "";
}

function calculatePrice() {
  const packagePrice = parseInt(document.getElementById('packageType').value, 10);
  const months = parseInt(document.getElementById('months').value, 10);

  if (Number.isNaN(months) || months <= 0) {
    document.getElementById('result').innerText = 'Please enter a valid semester duration.';
    return;
  }

  const total = packagePrice * (months / 4);
  document.getElementById('result').innerText = `Estimated Price: ${total.toFixed(2)} EGP`;
}

function setLanguage(lang) {
  const isArabic = lang === 'ar';
  document.body.classList.toggle('arabic-mode', isArabic);

  document.getElementById('hero-title').innerText = isArabic ? 'حلول الاختبارات الإلكترونية' : 'Online Assessment Solutions';
  document.getElementById('hero-description').innerText = isArabic ? 'خدمات احترافية لإنشاء وإدارة الاختبارات الإلكترونية للمعلمين والمؤسسات التعليمية' : 'Professional online exam creation and management services for teachers and institutions.';
  document.getElementById('packages-title').innerText = isArabic ? 'الخدمات المتاحة خلال الفصل الدراسي ( 4 أشهر )' : 'Services available for the semester ( 4 Months )';
  document.getElementById('primary-btn').innerText = isArabic ? 'الابتدائي' : 'Primary';
  document.getElementById('prep-btn').innerText = isArabic ? 'الإعدادي' : 'Preparatory';
  document.getElementById('secondary-btn').innerText = isArabic ? 'الثانوي' : 'Secondary';
  document.getElementById('starter-title').innerText = isArabic ? 'الباقة الأساسية' : 'Starter Package';
  document.getElementById('standard-title').innerText = isArabic ? 'الباقة المتوسطة' : 'Standard Package';
  document.getElementById('advanced-title').innerText = isArabic ? 'الباقة الاحترافية' : 'Advanced Package';
  document.getElementById('seperated-title').innerText = isArabic ? 'خدمة منفصلة' : 'Separated Service';  
  document.getElementById('starter-1').innerText = isArabic ? '4 اختبارات شهريًا' : '4 Exams per Month';
  document.getElementById('starter-2').innerText = isArabic ? 'إعداد الاختبارات إلكترونيًا' : 'Online Exam Setup';
  document.getElementById('starter-3').innerText = isArabic ? 'تنسيق أساسي للاختبارات' : 'Basic Formatting';
  document.getElementById('starter-4').innerText = isArabic ? 'تصحيح تلقائي للاختبارات' : 'Automatic Grading';
  document.getElementById('standard-1').innerText = isArabic ? '8 اختبار شهريًا' : '8 Exams per Month';
  document.getElementById('standard-2').innerText = isArabic ? 'تصحيح تلقائي للاختبارات' : 'Automatic Grading';
  document.getElementById('standard-3').innerText = isArabic ? 'تصميم احترافي للاختبارات' : 'Professional Design';
  document.getElementById('advanced-1').innerText = isArabic ? '16 اختبار شهريًا' : '16 Exams per Month';
  document.getElementById('advanced-2').innerText = isArabic ? 'دعم فني سريع' : 'Priority Support';
  document.getElementById('advanced-3').innerText = isArabic ? 'تقارير تفصيلية للنتائج' : 'Detailed Reports';
  document.getElementById('advanced-4').innerText = isArabic ? 'تصحيح تلقائي للاختبارات' : 'Automatic Grading';
  document.getElementById('seperated-1').innerText = isArabic ? '1 اختبار' : '1 Exam';
  document.getElementById('seperated-2').innerText = isArabic ? 'إعداد الاختبارات إلكترونيًا' : 'Online Exam Setup';
  document.getElementById('seperated-3').innerText = isArabic ? 'تنسيق أساسي للاختبارات' : 'Basic Formatting';
  document.getElementById('seperated-4').innerText = isArabic ? 'تصحيح تلقائي للاختبارات' : 'Automatic Grading';
  document.getElementById('calc-title').innerText = isArabic ? 'حاسبة الأسعار' : 'Dynamic Pricing Calculator';
  document.getElementById('calc-btn').innerText = isArabic ? 'احسب التكلفة' : 'Calculate Price';
  document.getElementById('form-title').innerText = isArabic ? 'نموذج طلب المعلم' : 'Teacher Request Form';
  document.getElementById('form-description').innerText = isArabic ? 'قدم طلبك وسنتواصل معك في أقرب وقت.' : 'Submit your request and we will contact you shortly.';
  document.getElementById('category-label').innerText = isArabic ? 'الفئة' : 'Category';
  document.getElementById('requirements-label').innerText = isArabic ? 'المتطلبات' : 'Requirements';
  document.getElementById('submit-btn').innerText = isArabic ? 'إرسال الطلب' : 'Submit Request';
  document.getElementById('name-input').placeholder = isArabic ? 'الاسم الكامل' : 'Enter your full name';
  document.getElementById('email-input').placeholder = isArabic ? 'البريد الإلكتروني' : 'Enter your email';
  document.getElementById('phone-input').placeholder = isArabic ? 'رقم الهاتف' : 'Enter your phone';
  document.getElementById('requirements-input').placeholder = isArabic ? 'اكتب متطلباتك هنا' : 'Write your requirements...';
  const categoryOptions = document.querySelectorAll('#category-input option');
  if (categoryOptions.length >= 3) {
    categoryOptions[0].innerText = isArabic ? 'الابتدائي' : 'Primary';
    categoryOptions[1].innerText = isArabic ? 'الإعدادي' : 'Preparatory';
    categoryOptions[2].innerText = isArabic ? 'الثانوي' : 'Secondary';
  }
  const packageOptions = document.querySelectorAll('#packageType option');
  if (packageOptions.length >= 3) {
    packageOptions[0].innerText = isArabic ? 'الأساسي' : 'Starter';
    packageOptions[1].innerText = isArabic ? 'المتوسط' : 'Standard';
    packageOptions[2].innerText = isArabic ? 'الاحترافي' : 'Advanced';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const packageButtons = document.querySelectorAll('.category-btn');

  packageButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      packageButtons.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      selectPackage(this.dataset.package);
    });
  });

  const teacherForm = document.querySelector('.teacher-form');
  if (teacherForm) {
    teacherForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const data = {
        fullname: document.getElementById('name-input').value.trim(),
        email: document.getElementById('email-input').value.trim(),
        phone: document.getElementById('phone-input').value.trim(),
        category: document.getElementById('category-input').value,
        requirements: document.getElementById('requirements-input').value.trim(),
      };

      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new URLSearchParams(data),
        });

        const result = await response.json();

        if (response.ok && result && result.status === 'success') {
          showPopup();
          this.reset();
        } else if (result && result.message) {
          alert(result.message);
        } else {
          alert('Error submitting form');
        }
      } catch (error) {
        alert('Error submitting form');
      }
    });
  }

  if (document.getElementById('primary-btn')) {
    document.getElementById('primary-btn').classList.add('active');
  }
  selectPackage('Starter');
});
