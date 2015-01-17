SC.initialize({
  client_id: '0cf77f09d09ff38c8e3a2d7ef1b21e1b'
});

$(document).ready(function() {
SC.stream('/tracks/293', function(sound) {
  $('#start').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});
        

});