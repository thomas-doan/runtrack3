<?php
require_once '../Model/UserModel.php';

if (!empty($_POST) && isset($_POST['email'], $_POST['password']) && !empty($_POST['email']) && !empty($_POST['password'])) {
    $gestion_erreur = [];
    $email = strip_tags(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
    $password = strip_tags($_POST['password']);

    $utilisateur = new UserModel();
    $exist = $utilisateur->findByEmail($email);

    if ($exist) {

        if (password_verify($password, $exist[0]['password'])) {

            $password = password_hash($password, PASSWORD_ARGON2I);
            $insert = $utilisateur->connect($email, $exist[0]['password']);
            $_SESSION['message'] = 'Connexion reussi';
            header('Location: index.php');
            exit;

            $gestion_erreur = [
                array(
                    0 => 'Connexion reussi',
                )
            ];

            echo json_encode($gestion_erreur);
        } else {
            $gestion_erreur = [
                array(
                    0 => 'les mots de passe sont differents',
                    1 => 'email valide'
                )
            ];

            echo json_encode($gestion_erreur);
        }
    } else {

        $gestion_erreur = [
            array(
                0 => 'Mot de passe ou email incorrect'
            )
        ];

        echo json_encode($gestion_erreur);
    }
}
