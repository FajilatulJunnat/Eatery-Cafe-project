
   function changebg() {
    var navber =document.getElementById('navbg');
    var scrl_value =window.scrollY;
    if (scrollY < 200) {
        navber.classList.remove('nav-change');
        
    }else{
        navber.classList.add('nav-change')
    }

   }
   window.addEventListener('scroll',changebg);