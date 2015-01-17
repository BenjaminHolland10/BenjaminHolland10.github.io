<?php
include("config.php");
$authorizeUrl = $soundcloud->getAuthorizeUrl();
?>
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <a class="login"href="<?php echo $authorizeUrl; ?>">
    <img src="img/btn-connect-sc-l.png" />
  </a>
</body>
</html>