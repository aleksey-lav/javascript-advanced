 $(document).ready(function () {
     $('.list-item:first').hover(function () {
         $(this).toggleClass('active')
     });

     //animation
     $('.list-item:eq(1)').on('click', function () {
         $('.image:even').fadeToggle('slow');
     });

     $('.list-item:eq(4)').on('click', function () {
         $('.image:odd').animate(
             {
              opacity: 'toggle',
              height: 'toggle'
             }, 2000
         );
     });
 });

    //в нативном js можно уже и так делать
 //  document.querySelectorAll('.list-item').forEach();
 // .classList
 // .addEventListener
 // .$ajax  - fetch(в нативном)
 // animations