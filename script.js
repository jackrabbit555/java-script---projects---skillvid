
// tow variable for selcting nav and topdistance


// تعریف متغیر برای انتخاب دیویژن با کلاس main-nav
let nav = document.querySelector('.main-nav');
// تعریف متغیر برای به دست آوردن مقدار افست نویگیشن از بالا ست نویگیشن از بالا
let topDistance = nav.offsetTop;




// function for adding a new class named (fixed-nav) with condition if (window.scrollY >= topDistance)

// ساخت تابع با دو شرط ایف الس ایف الس


function fixedNav() {

    // اگر مقدار اسکرول عمودی بزرگتر یا مساوی فاصله از بالای صفحه بود فاصله از بالای صفحه بود

    if (window.scrollY >= topDistance) {

        // اضافه کردن کلاس جدیدی با نام فیکس نو با نام فیکس نو


        document.body.classList.add('fixed-nav')


        // this if line added for avoiding jumbing elements 

      // تغییر استایل در لحظه به اندازه ارتفاع نویگیشن به علاوه مقدار پیکسل به
        document.body.style.marginTop = nav.offsetHeight + 'px';

        // در غیر این صورت کلاس فیکس نو حذف شود حذف شود
    } else {
        document.body.classList.remove('fixed-nav')

        // this  else  line added for avoiding jumbing elements
        // در غیر این صورت از بالا صفر شود از بالا صفر شود
        document.body.style.marginTop = 0;
    }


    //   to check if (window.scrollY >= topDistance) window scroll y is equl or less than topdistance thon showit to console.log
    // تست برای اطمینان از کار کردن تابع
    //  console.log("its working");

}

// اضافه کردن ایونت لیسنر زمانی که صفحه اسکرول فانکشن فیکس اجرا بشه
window.addEventListener('scroll', fixedNav);

