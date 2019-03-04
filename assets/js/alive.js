   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
   
<script type="text/javascript">


$(document).ready(function(){
  console.log('is this working?');

 if (true) {
   console.log('condition is true');
 }
 else {
   console.log('this will never execute.');
 }


 var d = new Date();
 var n = d.getDay();

 // Show days
 if (n == 1){
   console.log("The day of the week is: Monday");
   // $('.center img.monday').show();
   $('body').css({'background' : 'red',
   'color' : 'darkpurple'})
 }
 if (n == 2){
   console.log("The day of the week is: Tuesday");
   // $('.center img.tuesday').show();
   $('body').css({'background' : 'orange',
   'color' : 'darkpurple'})
 }
 if (n == 3){
   console.log("The day of the week is: Wednesday");
   // $('.center img.wednesday').show();
   $('body').css({'background' : 'yellow',
   'color' : 'blue'})
 }
 if (n == 4){
   console.log("The day of the week is: Thursday");
   // $('.center img.thursday').show();
   $('body').css({'background' : 'yellowgreen',
   'color' : 'magenta'})
 }
 if (n == 5){
   console.log("The day of the week is: Friday");
   // $('.center img.friday').show();
   $('body').css({'background' : 'lime',
   'color' : 'black'})
 }
 if (n == 6){
   console.log("The day of the week is: Saturday");
   // $('.center img.saturday').show();
   $('body').css({'background' : 'cyan',
   'color' : 'orangered'})
 }
 if (n == 0){
   console.log("The day of the week is: Sunday");
   // $('.center img.sunday').show();
   $('body').css({'background' : 'blue',
   'color' : 'white'})
 }


   $("body").on({

       // mouseenter: function(){
       //     $(this).css("background-color", "blue");
       //          // $('.body').fadeOut("slow");
       // },
       //
       // mouseleave: function(){
       //     $(this).css("background-color", "magenta");
       //                        // $('.body').fadeOut();
       // },
       //
       // dblclick: function(){
       //     $(this).css("background-color", "yellow");
       //                        // $('.body').fadeOut();
       // }

   });


});



</script>
