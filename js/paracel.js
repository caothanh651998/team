$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $(window).scrollTop();
      // console.log(pos_body);
      if(pos_body>300){
         $('.menu').addClass('co-dinh-menu');
         $('.add').addClass('add1');
      }
      else {
         $('.menu').removeClass('co-dinh-menu');
         $('.add').removeClass('add1');
      }
     
   });
   
   $(function(){
    $('.btn-nav').click(function(){
        $('.nav-menu').toggle(2000);
    });
});
});
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || document.documentElement.width: 768) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "35px";
//   }
// }