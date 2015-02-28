/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '0fb8fa4e316b44dc8b9211235d1fefda'; // Your client id
var client_secret = '584ebde0c47344b0ae214fba14cc7b5a'; // Your client secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
var stuff = [
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
    "user":  {
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
    "stream_url": "https://api.soundcloud.com/tracks/68401589/stream",fa
    "playback_count": 2409,
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
    "user":  {
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
    "playback_count": 9557,
    "download_count": 100,
    "favoritings_count": 349,
    "comment_count": 124,
    "attachments_uri": "https://api.soundcloud.com/tracks/12766372/attachments",
    "policy": "ALLOW"
  }
]
console.log(stuff[1].title);
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);
