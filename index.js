/**
 * This demo shows one possible way of implementing nodes as circular images
 */
function onLoad() {
  var graphics = Viva.Graph.View.svgGraphics();

  // we will use SVG patterns to fill circle with image brush:
  // http://stackoverflow.com/questions/11496734/add-a-background-image-png-to-a-svg-circle-shape
  var defs = Viva.Graph.svg('defs');
  graphics.getSvgRoot().append(defs);

  graphics.node(createNodeWithImage)
    .placeNode(placeNodeWithTransform);

  var graph = constructGraph();
  var renderer = Viva.Graph.View.renderer(graph, {
    graphics: graphics,
    container: document.getElementById('graph-container')
  });

  renderer.run();

  function createNodeWithImage(node) {
    var radius = 12;
    // First, we create a fill pattern and add it to SVG's defs:
    var pattern = Viva.Graph.svg('pattern')
      .attr('id', "imageFor_" + node.id)
      .attr('patternUnits', "userSpaceOnUse")
      .attr('width', 600)
      .attr('height', 600)
    var image = Viva.Graph.svg('image')
      .attr('x', '0')
      .attr('y', '0')
      .attr('height', radius * 2)
      .attr('width', radius * 2)
      .link(node.data.url);
    pattern.append(image);
    defs.append(pattern);

    // now create actual node and reference created fill pattern:
    var ui = Viva.Graph.svg('g');
    var circle = Viva.Graph.svg('circle')
      .attr('cx', radius)
      .attr('cy', radius)
      .attr('fill', 'url(#imageFor_' + node.id + ')')
      .attr('r', radius);

    ui.append(circle);
    return ui;
  }

  function placeNodeWithTransform(nodeUI, pos) {
    // Shift image to let links go to the center:
    nodeUI.attr('transform', 'translate(' + (pos.x - 12) + ',' + (pos.y - 12) + ')');
  }
}


function constructGraph() {
      var stuff = 
   
   [
  {
    "kind": "track",
    "id": 68401589,
    "created_at": "2012/11/22 10:39:55 +0000",
    "user_id": 2016749,
    "duration": 187053,
    "commentable": true,
    "state": "finished",
    "original_content_size": 7484521,
    "last_modified": "2013/10/31 14:40:22 +0000",
    "sharing": "public",
    "tag_list": "",
    "permalink": "count-me-out",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "Folk",
    "title": "Count me out",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "original",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/68401589",
    "user": {
      "id": 2016749,
      "kind": "user",
      "permalink": "mooders",
      "username": "mooders",
      "last_modified": "2014/11/25 15:27:44 +0000",
      "uri": "https://api.soundcloud.com/users/2016749",
      "permalink_url": "http://soundcloud.com/mooders",
      "avatar_url": "https://i1.sndcdn.com/avatars-000018130606-px3sia-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/mooders/count-me-out",
    "artwork_url": null,
    "waveform_url": "https://w1.sndcdn.com/Z4WoFFIUNpj2_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/68401589/stream",
    "playback_count": 2410,
    "download_count": 0,
    "favoritings_count": 73,
    "comment_count": 21,
    "attachments_uri": "https://api.soundcloud.com/tracks/68401589/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 12766372,
    "created_at": "2011/03/30 07:26:29 +0000",
    "user_id": 727717,
    "duration": 184207,
    "commentable": true,
    "state": "finished",
    "original_content_size": 7363478,
    "last_modified": "2015/02/11 22:22:20 +0000",
    "sharing": "public",
    "tag_list": "Post beat Hiphop Triphop Trubhop Midwess Midwest Cleveland Ohio Robb Fernald",
    "permalink": "phase-v-4-0",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "post future",
    "title": "Phase V",
    "description": "Post beat.",
    "label_name": "",
    "release": "",
    "track_type": "original",
    "key_signature": "",
    "isrc": "",
    "video_url": "http://www.youtube.com/watch?v=wtQJArkypkE",
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "cc-by",
    "uri": "https://api.soundcloud.com/tracks/12766372",
    "user": {
      "id": 727717,
      "kind": "user",
      "permalink": "the-midwess",
      "username": "THE MIDWESS",
      "last_modified": "2015/02/21 03:25:36 +0000",
      "uri": "https://api.soundcloud.com/users/727717",
      "permalink_url": "http://soundcloud.com/the-midwess",
      "avatar_url": "https://i1.sndcdn.com/avatars-000004995472-g8c72d-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/the-midwess/phase-v-4-0",
    "artwork_url": "https://i1.sndcdn.com/artworks-000005962896-0l1jp8-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/VbrzqYHVt4tV_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/12766372/stream",
    "playback_count": 9559,
    "download_count": 100,
    "favoritings_count": 349,
    "comment_count": 124,
    "attachments_uri": "https://api.soundcloud.com/tracks/12766372/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 16340931,
    "created_at": "2011/06/01 17:53:42 +0000",
    "user_id": 28645,
    "duration": 15782,
    "commentable": true,
    "state": "finished",
    "original_content_size": 195009,
    "last_modified": "2013/03/26 02:39:26 +0000",
    "sharing": "public",
    "tag_list": "soundcloud:source=android-record",
    "permalink": "next-stop-union-square-at",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": null,
    "title": "Next stop: union square at Subway",
    "description": null,
    "label_name": null,
    "release": null,
    "track_type": "recording",
    "key_signature": null,
    "isrc": null,
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "m4a",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/16340931",
    "user": {
      "id": 28645,
      "kind": "user",
      "permalink": "fredwilson",
      "username": "fredwilson",
      "last_modified": "2015/02/09 23:38:52 +0000",
      "uri": "https://api.soundcloud.com/users/28645",
      "permalink_url": "http://soundcloud.com/fredwilson",
      "avatar_url": "https://i1.sndcdn.com/avatars-000000124660-wif96w-large.jpg"
    },
    "created_with": {
      "id": 3152,
      "kind": "app",
      "name": "SoundCloud Android",
      "uri": "https://api.soundcloud.com/apps/3152",
      "permalink_url": "http://soundcloud.com/apps/android",
      "external_url": "https://market.android.com/details?id=com.soundcloud.android"
    },
    "permalink_url": "http://soundcloud.com/fredwilson/next-stop-union-square-at",
    "artwork_url": "https://i1.sndcdn.com/artworks-000007816778-x9fb05-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/iBeuZTlHYLZZ_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/16340931/stream",
    "playback_count": 5026,
    "download_count": 0,
    "favoritings_count": 29,
    "comment_count": 12,
    "attachments_uri": "https://api.soundcloud.com/tracks/16340931/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 669928,
    "created_at": "2009/09/28 18:45:00 +0000",
    "user_id": 283650,
    "duration": 20524,
    "commentable": true,
    "state": "finished",
    "original_content_size": 329351,
    "last_modified": "2012/04/05 16:50:37 +0000",
    "sharing": "public",
    "tag_list": "",
    "permalink": "hysterical-laughing",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "",
    "title": "Hysterical laughing",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/669928",
    "user": {
      "id": 283650,
      "kind": "user",
      "permalink": "robbertprijs",
      "username": "robbertprijs",
      "last_modified": "2011/08/04 10:49:16 +0000",
      "uri": "https://api.soundcloud.com/users/283650",
      "permalink_url": "http://soundcloud.com/robbertprijs",
      "avatar_url": "https://a1.sndcdn.com/images/default_avatar_large.png"
    },
    "permalink_url": "http://soundcloud.com/robbertprijs/hysterical-laughing",
    "artwork_url": null,
    "waveform_url": "https://w1.sndcdn.com/7RNZiBPHOtKo_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/669928/stream",
    "playback_count": 15306,
    "download_count": 0,
    "favoritings_count": 68,
    "comment_count": 7,
    "attachments_uri": "https://api.soundcloud.com/tracks/669928/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 21310696,
    "created_at": "2011/08/17 13:28:06 +0000",
    "user_id": 751987,
    "duration": 122587,
    "commentable": true,
    "state": "finished",
    "original_content_size": 4900868,
    "last_modified": "2013/02/14 13:34:26 +0000",
    "sharing": "public",
    "tag_list": "forss remix golopapas paradigm shift",
    "permalink": "forss-paradigm-shift-golopapas",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": true,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "",
    "title": "Forss - Paradigm Shift (Golopapas raw mix)",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "remix",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/21310696",
    "user": {
      "id": 751987,
      "kind": "user",
      "permalink": "golopapas",
      "username": "Golopapas",
      "last_modified": "2015/02/24 20:32:26 +0000",
      "uri": "https://api.soundcloud.com/users/751987",
      "permalink_url": "http://soundcloud.com/golopapas",
      "avatar_url": "https://i1.sndcdn.com/avatars-000003614475-gnzizr-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/golopapas/forss-paradigm-shift-golopapas",
    "artwork_url": "https://i1.sndcdn.com/artworks-000013363508-u0syvb-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/37hPhwx0hzFK_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/21310696/stream",
    "download_url": "https://api.soundcloud.com/tracks/21310696/download",
    "playback_count": 1673,
    "download_count": 88,
    "favoritings_count": 40,
    "comment_count": 15,
    "attachments_uri": "https://api.soundcloud.com/tracks/21310696/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 8815168,
    "created_at": "2011/01/07 00:01:10 +0000",
    "user_id": 1480865,
    "duration": 508797,
    "commentable": true,
    "state": "finished",
    "original_content_size": 20344249,
    "last_modified": "2014/12/12 11:56:02 +0000",
    "sharing": "public",
    "tag_list": "ambient \"spoken word",
    "permalink": "forss-journeyman-steve-heaps-remix",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": true,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "ambient spoken word",
    "title": "Forss - Journeyman (Steve Heaps remix)",
    "description": "ambient spoken word",
    "label_name": "",
    "release": "",
    "track_type": "",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/8815168",
    "user": {
      "id": 1480865,
      "kind": "user",
      "permalink": "steve_heaps",
      "username": "Steve Heaps",
      "last_modified": "2014/05/09 01:50:59 +0000",
      "uri": "https://api.soundcloud.com/users/1480865",
      "permalink_url": "http://soundcloud.com/steve_heaps",
      "avatar_url": "https://i1.sndcdn.com/avatars-000002550015-ewnj92-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/steve_heaps/forss-journeyman-steve-heaps-remix",
    "artwork_url": "https://i1.sndcdn.com/artworks-000004340439-vw8z02-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/QjHTu0EfLrhm_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/8815168/stream",
    "download_url": "https://api.soundcloud.com/tracks/8815168/download",
    "playback_count": 1383,
    "download_count": 62,
    "favoritings_count": 33,
    "comment_count": 23,
    "attachments_uri": "https://api.soundcloud.com/tracks/8815168/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 8814302,
    "created_at": "2011/01/06 23:36:19 +0000",
    "user_id": 157542,
    "duration": 368962,
    "commentable": true,
    "state": "finished",
    "original_content_size": 14930097,
    "last_modified": "2013/05/26 13:56:43 +0000",
    "sharing": "public",
    "tag_list": "",
    "permalink": "forss-journeyman-johnny_ripper-remix",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": true,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "",
    "title": "Journeyman (with Forss)",
    "description": "this is a story of a young man, traveling ancient countrysides, looking for new emotions to experience. \r\n\r\nmy take on http://soundcloud.com/forss/journeyman\r\n",
    "label_name": "",
    "release": "",
    "track_type": "remix",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "cc-by-nc-sa",
    "uri": "https://api.soundcloud.com/tracks/8814302",
    "user": {
      "id": 157542,
      "kind": "user",
      "permalink": "johnny_ripper",
      "username": "johnny_ripper",
      "last_modified": "2015/02/27 01:09:01 +0000",
      "uri": "https://api.soundcloud.com/users/157542",
      "permalink_url": "http://soundcloud.com/johnny_ripper",
      "avatar_url": "https://i1.sndcdn.com/avatars-000098000285-uq3dj7-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/johnny_ripper/forss-journeyman-johnny_ripper-remix",
    "artwork_url": "https://i1.sndcdn.com/artworks-000003979648-1fskyn-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/xp9nPzH83d5b_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/8814302/stream",
    "download_url": "https://api.soundcloud.com/tracks/8814302/download",
    "playback_count": 7870,
    "download_count": 671,
    "favoritings_count": 168,
    "comment_count": 65,
    "attachments_uri": "https://api.soundcloud.com/tracks/8814302/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 8773248,
    "created_at": "2011/01/05 23:09:10 +0000",
    "user_id": 48432,
    "duration": 384250,
    "commentable": true,
    "state": "finished",
    "original_content_size": 15361988,
    "last_modified": "2013/09/22 13:43:36 +0000",
    "sharing": "public",
    "tag_list": "",
    "permalink": "forss-journeyman-morgendis-remix",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": true,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "Ambient Poetry",
    "title": "Forss - Journeyman (Steve Satori Remix)",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "remix",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": 90,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "cc-by-sa",
    "uri": "https://api.soundcloud.com/tracks/8773248",
    "user": {
      "id": 48432,
      "kind": "user",
      "permalink": "stevesatori",
      "username": "Steve Satori",
      "last_modified": "2015/02/26 17:21:48 +0000",
      "uri": "https://api.soundcloud.com/users/48432",
      "permalink_url": "http://soundcloud.com/stevesatori",
      "avatar_url": "https://i1.sndcdn.com/avatars-000123083190-3b5w7s-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/stevesatori/forss-journeyman-morgendis-remix",
    "artwork_url": "https://i1.sndcdn.com/artworks-000058370945-45chjr-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/Mhxb6E14xiim_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/8773248/stream",
    "download_url": "https://api.soundcloud.com/tracks/8773248/download",
    "playback_count": 1584,
    "download_count": 88,
    "favoritings_count": 35,
    "comment_count": 12,
    "attachments_uri": "https://api.soundcloud.com/tracks/8773248/attachments",
    "policy": "ALLOW"
  },
  {
    "kind": "track",
    "id": 8315655,
    "created_at": "2010/12/22 12:42:00 +0000",
    "user_id": 2474668,
    "duration": 134555,
    "commentable": true,
    "state": "finished",
    "original_content_size": 5382186,
    "last_modified": "2012/05/01 15:47:23 +0000",
    "sharing": "public",
    "tag_list": "glitch glitchhop glitch-hop electronica forss",
    "permalink": "touch-the-solar-forss-remix",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "Glitch Hop",
    "title": "Touch The Solar (forss remix)",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "original",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/8315655",
    "user": {
      "id": 2474668,
      "kind": "user",
      "permalink": "ninthofthesolar",
      "username": "Ninth Of The Solar",
      "last_modified": "2015/02/11 00:04:49 +0000",
      "uri": "https://api.soundcloud.com/users/2474668",
      "permalink_url": "http://soundcloud.com/ninthofthesolar",
      "avatar_url": "https://i1.sndcdn.com/avatars-000002275124-nw9lxf-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/ninthofthesolar/touch-the-solar-forss-remix",
    "artwork_url": "https://i1.sndcdn.com/artworks-000003930570-css3ke-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/XmpImiKaMGL1_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/8315655/stream",
    "playback_count": 1485,
    "download_count": 0,
    "favoritings_count": 51,
    "comment_count": 8,
    "attachments_uri": "https://api.soundcloud.com/tracks/8315655/attachments",
    "policy": "ALLOW"
  },
]
var graph = Viva.Graph.graph(); 
var titles = []; 
var imageurls = []; 
for(var i = 0; i < stuff.length; i++){
    titles[i] = stuff[i].title; 
    if(stuff[i].artwork_url != null){
    imageurls[i] = stuff[i].artwork_url;}
    else{
        imageurls[i] = "http://upload.wikimedia.org/wikipedia/commons/f/fd/000080_Navy_Blue_Square.svg"; 
    }
    
}


graph.addNode('user', {url : 'http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png'}); 

for(var i = 0;i < titles.length; i++){
    
    graph.addNode(i, {url : imageurls[i]});
    graph.addLink('user', i);
}

  return graph;
}
