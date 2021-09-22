<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $subject = "empty";

    $mailTo = "diteso4939@tst999.com";
    $headers = "From: $mailFrom \r\n";
    $txt = "Sie haben eine e-mail von ".$name." bekommen\n\n.".$message;

    mail($mailTo,$subject, $txt, $headers);
    header("Location: kontakt.html");
}