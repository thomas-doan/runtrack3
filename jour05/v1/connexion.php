<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type='text/javascript' src='connexion.js'></script>
    <link rel="stylesheet" href="index.css">

    <title>connexion</title>
</head>

<body>
    <form method='post' action="back_connexion.php">
        <label for="email">Email</label>
        <input id='email' name="email" type="email" placeholder="Email">
        <p></p>

        <label for="password">Mot de passe</label>
        <input id='password' name="password" type="password" placeholder="Mot de passe">
        <p></p>

        <button id='connexion' type='submit' name="submit"> Connexion </button>
        <p></p>
    </form>
</body>

</html>