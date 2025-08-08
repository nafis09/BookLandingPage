function toggleMenu(displayState){
   const nav = document.getElementById('header-nav');
   const closeIcon = document.getElementById('close-ic');

   nav.style.display = displayState;
   closeIcon.style.display = displayState;
}