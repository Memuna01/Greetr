//gets a new object here. (the architecture allows us to not have the 'new' keyword here)
// g = G$("john", "doe");

// //use our chainable methods
// g.greet(true).setLang("Igbo").greet(true);

// console.log();

//let's use our object on the click of the login button
$('#submit').click(function(){

  var loginGreetr = G$($('#firstname').val(), $('#lastname').val(), $('#location').val());

//hide the login on the screen
  $('#submitdiv').hide();

//fire off an HTML greeting, passing the 'greeting' selected from the login
// as the selector and the chosen language, and log the welcome as well
  loginGreetr.setLocation($('#location').val()).HTMLGreeting('#greeting');

  console.log(loginGreetr);
});
