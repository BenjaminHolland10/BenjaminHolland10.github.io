/* !! READ ME !! if you fork this project you will have to change BASE_URL
   The projects BASE_URL can be found by clicking the "Instructions" button under API keys.
   Copy the BASE_URL paste below replacing the current BASE_URL
*/
var BASE_URL = "http://www.benjaminholland10.github.io";

// initialize soundcloud API with key and redirect URL
SC.initialize({
    // This is the sample client_id. you should replace this with your own
    client_id: "0cf77f09d09ff38c8e3a2d7ef1b21e1b",
    redirect_uri: "http://benjaminholland10.github.io/callback.html",
});

function authenticate() {
  // initiate authentication popup
  SC.connect(function() {
    // This gets the authenticated user's username
    SC.get('/me', function(me) { 
      alert('Hello, ' + me.username); 
    });
  });
}