<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="script.js"></script>
    <title>pokemon</title>
</head>

<body>
    <form action="">
        <input id="id" type="text" value="id">
        <input id="nom" type="text" value="nom">
        <input id="type" list="typePokemon" type="select" value="">
        <datalist id="typePokemon">
            <option value=""></option>
        </datalist>
    </form>
    <input id="trier" type="button" value="trier">
    <p id="error"></p>
    <table>

    </table>
</body>

</html>