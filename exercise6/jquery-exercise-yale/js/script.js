/*

Instructions:

---- PART 1 ----
Start by removing the Yale School of Art crest (#crest).

Instead let's add a blue gradient to the whole page by applying the "gradient" class to the body.

Let's also show the traffic light (#status).

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "T-R-A-F-F-I-C L-I-G-H-T" button:

When the user clicks the "T-R-A-F-F-I-C L-I-G-H-T" button (#button), change the text of traffic light (#status) to read "GO".
Let's also change the background color of the traffic light (#status) to green.

The light needs to turn on and off, so when the user clicks the button again, revert all of the above.
So the traffic light should read "STOP" and its background color should be red.

Let's add a image too. Show the user an animated image when it's safe to cross. So when the traffic light is green, reveal our flying pigeon (#pigeon).
The pigeon should fade out slowly when the button is toggled to "STOP" and the traffic light should go back to red.

---- PART 3 ... Advanced ----
If you're comfortable with all this, let's try one more thing...
Let's make the traffic light turn on and off on its own in 5 second intervals.

Hint: You'll need to create a variable that stores the status of the light.
And you'll also need to learn about the JavaScript function "setInterval".

Every 10 seconds, check the status of the light and turn it either on or off along with all the effects.
Of course the button should also still work.

*/


/////////////////////////////////////////////////////////////

$(document).ready(function(){
  $('#crest').hide();

  $('body').addClass('gradient');
  $('#status').show();

  var stop = true;
  //
  // var auto = setInterval(toggleLight, 5000);

  $('')

  console.log(stop);
  $('#button').click(function(){
    if(stop == true){
      console.log('waaat?');
      $('#status').html('GO');
      $('#status').css('background', 'green');
        $('#pigeon').fadeIn("slow");
      stop = false;
      console.log(stop);
    } else {

      $('#status').html('STOP');
      $('#status').css('background','red');
        $('#pigeon').fadeOut("slow");
      stop = true;
      console.log(stop);
    }
  });

//part 3//

function changeLights() {

  if(stop == true){
    console.log('waaat?');
    $('#status').html('GO');
    $('#status').css('background', 'green');
      $('#pigeon').fadeIn("slow");
    stop = false;

  } else {

    $('#status').html('STOP');
    $('#status').css('background','red');
      $('#pigeon').fadeOut("slow");
    stop = true;

}
}

// setInterval(function() {
//   changeLights();
// }, 3000);
});
