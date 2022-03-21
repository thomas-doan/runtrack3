<?php
require_once(__DIR__ . '/../Controllers/InscriptionController.php');

session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <script type="text/javascript" src="../JS/script.js"></script>
    <link rel="stylesheet" href="../public/css/style.css">

</head>

<body>

    <header>
        <nav>
            <ul class="navigation">
                <li><a href="./index.php">Memory</a></li>
                <li><a href="./connexion.php">Connexion</a></li>
            </ul>
        </nav>
    </header>
    <main>

        <section>

            <h2>Inscription</h2>
            <p id="erreur"></p>

            <form action="" method="post" id="inscription">

                <input id="prenom" type="text" name="prenom" placeholder="Prenom" autocomplete="off">

                <input id="nom" type="text" name="nom" placeholder="Nom" autocomplete="off">

                <input id="email" type="text" name="email" placeholder="Email" autocomplete="off">

                <input id="password" type="password" name="password" placeholder="Votre mot de passe" autocomplete="off">

                <input type="password" name="confirm" placeholder="Votre mot de passe" autocomplete="off">


                <button id="validation" type="button" name="submit">Valider</button>
            </form>

            </div>



    </main>


</body>

</html>