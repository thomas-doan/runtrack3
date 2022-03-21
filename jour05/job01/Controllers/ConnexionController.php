<?php
session_start();
require_once '../Model/UserModel.php';

if (!empty($_POST) && isset($_POST['email'], $_POST['password']) && !empty($_POST['email']) && !empty($_POST['password'])) {
    $gestion_erreur = [];
    $email = strip_tags(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
    $password = strip_tags($_POST['password']);

    $utilisateur = new UserModel();
    $exist = $utilisateur->findByEmail($email);

    var_dump($exist);

    if ($exist) {

        if (password_verify($password, $exist[0]['password'])) {

            $password = password_hash($password, PASSWORD_BCRYPT);
            $insert = $utilisateur->connect($email, $exist[0]['password']);




            $_SESSION['user'] = [];
            $_SESSION['user']['email'] = $exist[0]['email'];
            $_SESSION['user']['id'] = $exist[0]['id'];

            $_SESSION['message'] = 'Connexion reussi';

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
