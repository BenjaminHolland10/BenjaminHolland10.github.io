function playSome(genre) {
    SC.get('/tracks', {
        genres: genre,
        bpm: {
            from: 100
        }
    }, function(tracks) {
        var random = Math.floor(Math.random() * 49);
        SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById('target'));
    });
}
window.onload = function() {
     SC.initialize({      
        client_id: '0cf77f09d09ff38c8e3a2d7ef1b21e1b'
        });
    var menuLinks = document.getElementsByClassName('genre');
    for (var i = 0; i< menuLinks.length; i++){
        var menuLink = menuLinks[i];
        menuLink[i].onclick = function(e){
            e.preventDefault();
            playSomeSound(menuLink.innerHTML);
        };
    }
        
};