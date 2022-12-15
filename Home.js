const {motion} = Motion;

function Home(props) {
    const [scroll, setScroll] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = (e) => {
            console.log("ScrollY:", window.scrollY);
            window.scrollY >= 50 ? setScroll(true) : setScroll(false);
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div>
            {/* <!-- Navigation --> */}
            {
                console.log(window)
            }

            <nav class={"navbar navbar-expand-md shadow-sm fixed-top font-mont" + (scroll ? " bg-light navbar-light" : " navbar-dark")} id="accueil">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <img src="assets/img/logo_katanga_travel.png" alt="Logo" class="img-fluid logo-dimension" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButton">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarButton">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a href="#" class="nav-link active">Accueil</a></li>
                            <li class="nav-item"><a href="#actualite" class="nav-link">Actualités</a></li>
                            <li class="nav-item"><a href="#formation" class="nav-link">Formation</a></li>
                            <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">ONG</a></li>
                            <li class="nav-item"><a href="#about" class="nav-link">À propos</a></li>
                            <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- Banner Image --> */}

            <section class="bloc text-white font-mont">
                <video autoPlay="autoplay" muted="" loop="infinite" src="assets/video/How to Turn Video into a GIF... in 2 minutes!.mp4"></video>
                <div class="container h-100">
                    <motion.div
                    initial={{x:-500}}
                    animate={{x:0}}
                    transition={{duration:0.7}}
                    class="d-flex flex-column justify-content-center h-100"
                    >
                        <h3 class="font-open fw-bold display-5">Better <span class="red-text">Design</span> Experiences</h3>
                        <p style={{width: '800px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, provident illo? Laboriosam repudiandae sapiente, aperiam corrupti nam doloribus esse perspiciatis quisquam necessitatibus suscipit accusamus reprehenderit sed ipsam? Eos, adipisci sequi.</p>
                        <div>
                            <button class="btn rounded-0 red-bg text-white">Contacter</button>
                            <button class="btn btn-outline-light rounded-0 ms-3">Souscrire</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* <!-- partner --> */}

            <motion.section
            initial={{
                opacity: 0.5,
                x:-500
            }}
            whileInView={{
                opacity: 1,
                x:0
            }}
            class="container my-3"
            >
                <div class="d-flex justify-content-around">
                    <i class="bi bi-google text-warning fs-1"></i>
                    <i class="bi bi-android text-success fs-1"></i>
                    <i class="bi bi-google-play text-info fs-1"></i>
                    <i class="bi bi-youtube text-danger fs-1"></i>
                </div>
            </motion.section>

            {/* <!-- Actualités --> */}

            <section class="font-mont red-bg py-5 text-white" id="actualite">
                <div class="container">
                    <div class="row">
                        <h5 class="font-open text-center">Actualités</h5>
                        <div class="d-flex justify-content-center mb-4">
                            <p class="text-center w-50 text-white-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                            <figure class="figure w-75 me-4 img-scale">
                                <img src="assets/img/pexels-pixabay-289737.jpg" alt="Biographie" class="img-fluid" />
                            </figure>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="h-100 d-flex flex-column align-items-end justify-content-between">
                                <p class="text-start montserrat">Denise Mwanakitata Muyayi plus connue sous le nom de <strong>Dena Mwana</strong>, est une chanteuse gospel née à Kinshasa le 27 décembre.<br /><br />
                                Dena a fait ses débuts dans une chorale d'église, <strong>"Notre dame de Grâce"</strong>, à Kinshasa à l'âge de 13 ans et elle était leur directeur musical à l'âge de 18 ans.<br /><br />
                                En 1998, la chorale connaît une proéminence sur un hymne patriotique, qui par la suite, sera copié par les écoles sur l'étendue du sol congolais, faisant ainsi connaître son style vocal...
                                </p>
                                <button class="btn btn-outline-light mb-3 me-2 rounded-0">Lire plus...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Formation --> */}

            <section class="container font-mont py-5 blue-text" id="formation">
                <div class="row g-4">
                    <h5 class="font-open text-center">Formation</h5>
                    <div class="d-flex justify-content-center mb-4">
                        <p class="text-center w-50 text-black-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="card d-flex flex-row align-items-center shadow-lg rounded-0">
                            <div class="row">
                                <div class="col-4">
                                    <img src="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{objectFit: 'cover', height: '100%'}} alt="card-img" class="img-fluid" />
                                </div>
                                <div class="col-8">
                                    <div class="d-flex flex-column justify-content-center align-items-center py-5">
                                        <i class="bi bi-mortarboard-fill display-4 red-text"></i>
                                        <h6 class="font-open">Apprentissage de l'anglais</h6>
                                        <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5
                                        }}
                                        class="mx-1 text-center"
                                        >
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, debitis.
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="card d-flex flex-row align-items-center shadow-lg rounded-0">
                            <div class="row">
                                <div class="col-4">
                                    <img src="https://images.pexels.com/photos/5621976/pexels-photo-5621976.jpeg?auto=compress&cs=tinysrgb&w=600" style={{objectFit: 'cover', height: '100%'}} alt="card-img" class="img-fluid" />
                                </div>
                                <div class="col-8">
                                    <div class="d-flex flex-column justify-content-around align-items-center py-5">
                                        <i class="bi bi-mortarboard-fill display-4 red-text"></i>
                                        <h6 class="font-open">Centre d'informatique</h6>
                                        <p class="mx-1 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, debitis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center py-5">
                        <a href="./formation.html" class="btn rounded-0 btn-lg px-5 red-bg text-white fw-bold"><small>Plus d'Infos</small></a>
                    </div>

                </div>
            </section>

            {/* <!-- Services --> */}

            <section class="font-mont p-5 blue-bg text-white" id="services">
                <div class="container">
                    <div class="row g-3 justify-content-center">
                        <h5 class="font-open text-center">Services</h5>
                        <div class="d-flex justify-content-center mb-4">
                            <p class="text-center w-50 text-white-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 blue-text">
                            <div class="card d-flex flex-column align-items-center px-4 py-5 shadow-lg rounded-0">
                                <img src="assets/img/undraw_Travelers_re_y25a.png" alt="feature 1" class="card-img-top img-feature" />
                                <div class="body mt-3">
                                    <h5 class="card-title fw-bold text-center font-open">Creatives Solutions</h5>
                                    <p class="card-text text-center text-white text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum minima laudantium.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 blue-text">
                            <div class="card d-flex flex-column align-items-center px-4 py-5 shadow-lg rounded-0">
                                <img src="assets/img/undraw_World_re_768g.png" alt="feature 1" class="card-img-top img-feature" />
                                <div class="body mt-3">
                                    <h5 class="card-title fw-bold text-center font-open">Creatives Solutions</h5>
                                    <p class="card-text text-center text-white text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum minima laudantium.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 blue-text">
                            <div class="card d-flex flex-column align-items-center px-4 py-5 shadow-lg rounded-0">
                                <img src="assets/img/undraw_education_f8ru.png" alt="feature 1" class="card-img-top img-feature" />
                                <div class="body mt-3">
                                    <h5 class="card-title fw-bold text-center font-open">Creatives Solutions</h5>
                                    <p class="card-text text-center text-white text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum minima laudantium.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 blue-text">
                            <div class="card d-flex flex-column align-items-center px-4 py-5 shadow-lg rounded-0">
                                <img src="assets/img/undraw_Travelers_re_y25a.png" alt="feature 1" class="card-img-top img-feature" />
                                <div class="body mt-3">
                                    <h5 class="card-title fw-bold text-center font-open">Creatives Solutions</h5>
                                    <p class="card-text text-center text-white text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum minima laudantium.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 blue-text">
                            <div class="card d-flex flex-column align-items-center px-4 py-5 shadow-lg rounded-0">
                                <img src="assets/img/undraw_Travelers_re_y25a.png" alt="feature 1" class="card-img-top img-feature" />
                                <div class="body mt-3">
                                    <h5 class="card-title fw-bold text-center font-open">Creatives Solutions</h5>
                                    <p class="card-text text-center text-white text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum minima laudantium.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- À propos --> */}

            <section class="container py-5 font-mont blue-text" id="about">
                <div class="row">
                    <h5 class="font-open text-center">À propos</h5>
                    <div class="d-flex justify-content-center mb-4">
                        <p class="text-center w-50 text-black-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                    </div>
                    <div class="col-md-6">
                        <img src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about" class="img-fluid" />
                    </div>
                    <div class="col-md-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sunt accusantium? Minima nobis quos omnis eaque incidunt quaerat voluptates accusantium similique dolores cupiditate cumque doloremque reprehenderit, illo fuga, atque optio!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus magnam ex voluptatum, ducimus pariatur! Magni id, molestiae ut officiis quos sit ipsum obcaecati facilis sed aut assumenda hic saepe?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi architecto explicabo assumenda, maiores debitis praesentium deserunt optio ipsam eos quos recusandae voluptas fuga ipsum possimus unde amet fugiat earum repellat?</p>
                    </div>
                </div>
            </section>

            {/* <!-- Contact --> */}

            <section class="blue-text blue-bg py-5" id="contact">
                <div class="container">
                    <h5 class="font-open text-center text-white">Contact</h5>
                    <div class="d-flex justify-content-center mb-4">
                        <p class="text-center w-50 text-white-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                    </div>
                    <div class="row">
                        <form action="" class="col-12 offset-md-3 col-md-6 my-3">
                            <div class="form-floating">
                                <input class="form-control rounded-0" type="text" name="name" id="name" placeholder="Entrez votre nom" />
                                <label for="name">Entrez votre nom</label>
                            </div>
                            <div class="form-floating mt-3">
                                <input class="form-control rounded-0" type="text" name="subject" id="subject" placeholder="Entrez votre sujet" />
                                <label for="subject">Entrez votre sujet</label>
                            </div>
                            <div class="form-floating mt-3">
                                <input class="form-control rounded-0" type="email" name="emial" id="email" placeholder="Entrez votre e-mail" />
                                <label for="email">Entrez votre e-mail</label>
                            </div>
                            <div class="mt-3">
                                <textarea class="form-control rounded-0" name="message" id="message" cols="30" rows="10" placeholder="Entrez un message"></textarea>
                            </div>
                            <div class="mt-3">
                                <button class="btn w-100 btn-light rounded-0">Valider</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* <!-- Section Footer --> */}

            <section class="blue-text pt-5 font-mont">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                        <h5 class="mb-4 fs-6 font-open">Liens importants</h5>
                        <ul class="list-unstyled">
                            <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Accueil</small></a></li>
                            <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Actualités</small></a></li>
                            <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Formation</small></a></li>
                            <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>ONG</small></a></li>
                            <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Nos services</small></a></li>
                        </ul>
                        </div>
                        <div class="col-sm-6 col-md-4">
                        <h5 class="mb-4 fs-6 font-open">Nos contacts</h5>
                        <ul class="list-unstyled">
                            <li class="mt-3 text-black-50 d-flex">
                            <i class="bi bi-geo-alt blue-text fs-4 me-2"></i>
                            <span class="my-auto"><small> Av Femme-katangaise, Lubumbashi, RDC</small></span>
                            </li>
                            <li class="mt-3 text-black-50 d-flex">
                            <i class="bi bi-envelope-at blue-text fs-4 my-auto me-2"></i>
                            <a href="mailto:mail@example.com" class="text-decoration-none my-auto">monmail@example.com</a>
                            </li>
                            <li class="mt-3 text-black-50 d-flex">
                            <i class="bi bi-telephone blue-text fs-4 me-2"></i>
                            <span class="my-auto"><small>+243 000 000 000</small></span>
                            </li>
                        </ul>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <h5 class="mb-4 fs-6 font-open">Souscrire à la newsletter</h5>
                            <p class="text-black-50"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corrupti ad.</small></p>
                            <form class="input-group mb-3">
                                <input type="text" class="form-control rounded-0" placeholder="votre mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-primary rounded-0" type="button" id="button-addon2">
                                    <i class="bi bi-send"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between text-black-50">
                        <p class="float-start"><small>© 2022 Katanga. Tous droits reservés</small></p>
                        <ul class="list-inline">
                        <li class="list-inline-item">
                            <i class="bi bi-twitter"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="bi bi-facebook"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="bi bi-linkedin"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="bi bi-instagram"></i>
                        </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);