<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script type='text/javascript' src='js/script.js'></script>
    <script>DGC()</script>
    <title>Document</title>
</head>
<body>
<header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a href="#" class="navbar-brand">LPTF</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="https://laplateforme.io/" class="nav-item nav-link active">Accueil</a>
                        <a href="#" class="nav-item nav-link">Units</a>
                        <a href="#" class="nav-item nav-link">Job</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Skills</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="text-center">
            <h1>La Plateforme_</h1>
        </div>
        <div class="d-flex justify-content-around">
            <div class="col-2 justify-content-start">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F02.2F03.2Fdfb32bfd-9c18-4da3-a8b8-7472bc78ab2c.2Ejpeg/1150x647/background-color/ffffff/quality/70/texas-un-centre-de-protection-des-papillons-ferme-menace-par-des-partisans-de-trump.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Un papillon</h5>
                        <p class="card-text">Un Papillon c'est un peu comme une chenille mais avec des ailes. <br> Ne pas ingérer.</p>

                        <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Commander votre propre papillon
                        </button>

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi nulla deserunt magnam asperiores rerum a sint sequi adipisci quo architecto molestias modi, ut quis aspernatur in, nobis pariatur. Nobis!
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-7 justify-content-center p-4" id='contenu'>
                <div class="h1">
                    Bonjour, Monde!
                </div>
                <div id='text-jumbotron'class="p">
                    Il existe plusieurs viesions du terme: <br>
                    Le monde est la matiére, l'espace et les phénomènes qui nous sont accessibles par les sens, l'experience ou la raison. <br>
                    Le sens le pluscourant désigne notre planète, la Terre, avec ses habitans, et son environnement plus ou moins naturel.
                </div>
                <hr>
                <div class="h6 mt-4 mb-3">
                    Le sens étendu désignel'universdans son ensemble.
                </div>

                <button type="button" class="btn btn-danger" id='reboot'>
                    Rebooter le Monde
                </button>
                <div id ='loading' class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination mt-4 justify-content-end">
                        <li class="page-item"><a id="pagination" class="page-link" href="#"><<</a></li>
                        <li class="page-item"><a id="pagination1" class="page-link" href="#">1</a></li>
                        <li class="page-item"><a id="pagination2" class="page-link" href="#">2</a></li>
                        <li class="page-item"><a id="pagination3" class="page-link" href="#">3</a></li>
                        <li class="page-item"><a id="pagination" class="page-link" href="#">>></a></li>
                    </ul>
                </nav>
            </div>

            <div class="col-2">
                <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 280px;">
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item ">
                            <a href="#" id="li1" class="nav-link link-dark active" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                            Limbes
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li2" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                            Luxure
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li3" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                            Gourmandise
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li4" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                            Avarice
                            </a>
                        </li>
                        <li>
                            <a href="#"  id="li5" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Colere
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li6" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Heresie
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li7" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Violence
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li8" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Ruse et Tromperie
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li9" class="nav-link link-dark border-bottom">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Trahison
                            </a>
                        </li>
                        <li>
                            <a href="#" id="li10" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Internet explorer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-12 d-flex justify-content-center mt-4">
            <div id="arrowL">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                </svg>
            </div>
            <div class="col-5 d-flex flex-column justify-content-center">
                <h6 class="text-end mb-0">Installation de AI 9000</h6>
                <div class="progress">
                    <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                </div>
            </div>
            <div id="arrowR">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                </svg>
            </div>
        </div>

        <div class="d-flex justify-content-around mt-4 pb-5" id="page-form">
            <div class="col-4">
                <p class="h5">Recevez votre copie gratuite d'internet 2!</p>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Mot de passe" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                <label for="basic-url" class="form-label">URL des Internets 2 et 2.1 Beta</label>

                <div class="input-group mb-3">
                    <span class="input-group-text">Doge Coin</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-text">.00</span>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-2">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input id='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input id='password' type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button id="submit" type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>

    </main>
</body>
</html>