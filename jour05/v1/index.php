    <?php
    session_start();
    if (!isset($_SESSION['user'])) {

        header('Location: ./connexion.php');
    }
    ?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <script src="script.js"></script> -->
        <link rel="stylesheet" href="index.css">

        <title>page d'accueil</title>
    </head>

    <body>
        <?php
        if (isset($_SESSION['user'])) {
            echo "<p>";
            echo "Bonjour  " . $_SESSION['user']['name'];
            echo "</p>";
        }
        ?>

    </body>

    </html>