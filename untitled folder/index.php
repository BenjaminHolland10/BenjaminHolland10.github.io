<html>
  <head>
    <!-- Load jQuery from Google's CDN -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <!-- Load Soundcloud SDK -->
    <script src="//connect.soundcloud.com/sdk.js"></script>
    <!-- Source our javascript file which uses Soundcloud API -->
    <script src="script.js"></script>
    <link rel="stylesheet" href="runnable.css" />
  </head>
  <body>
    <h1>Click to connect with Soundcloud</h1>
    <!-- Image obtained from soundcloud developer resources -->
    <img onclick="authenticate()" src="http://connect.soundcloud.com/2/btn-connect-sc-l.png">
</body>
</html>