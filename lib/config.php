<?php 
$clientId="0cf77f09d09ff38c8e3a2d7ef1b21e1b";
$clientSecret="efff8e14d121b336ff5ad1474cb22d1e";
$callback="http://www.benjaminholland10.github.io/callback.php";
 
require_once 'lib/Soundcloud.php';
$soundcloud = new Services_Soundcloud($clientId, $clientSecret, $callback);
?>