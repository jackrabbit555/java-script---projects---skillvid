
// tow variable for selcting nav and topdistance

let nav = document.querySelector('.main-nav');

let topDistance = nav.offsetTop;

// function for adding a new class named (fixed-nav) with condition if (window.scrollY >= topDistance)
function fixedNav() {

    if (window.scrollY >= topDistance) {
        document.body.classList.add('fixed-nav')
// this if line added for avoiding jumbing elements 
        document.body.style.marginTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav')

       // this  else  line added for avoiding jumbing elements
        document.body.style.marginTop = 0;
    }


    //   to check if (window.scrollY >= topDistance) window scroll y is equl or less than topdistance thon showit to console.log
    //  console.log("its working");

}


window.addEventListener('scroll', fixedNav);

