SC.initialize({
  client_id: '0cf77f09d09ff38c8e3a2d7ef1b21e1b',
});

SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
  alert("Latest track: " + tracks[0].title);
});