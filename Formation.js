const {motion} = Motion;

const {
    colors,
    Typography,
    Modal,
    Box,
    Button,
    TextField,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } = MaterialUI;
  
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #C52023',
    boxShadow: 24,
    p: 4,
};

function FormAnglais({openEnglish, handleCloseEnglish}) {
    return (
        <>
        <Modal
            open={openEnglish}
            onClose={handleCloseEnglish}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <span className="font-open">Inscription Anglais</span>
                </Typography>
                <Stack justifyContent="center" spacing={2}>
                <TextField id="standard-basic" label="Nom Étudiant" variant="standard" />
                <TextField id="standard-basic" label="Post-nom Étudiant" variant="standard" />
                <TextField id="standard-basic" label="Prénom Étudiant" variant="standard" />
                <TextField id="standard-basic" label="Numero Étudiant" variant="standard" />
                <TextField id="standard-basic" label="Adresse Étudiant" variant="standard" />
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button variant="contained" disabled>Annuler</Button>
                    <Button variant="contained">Enregistrer</Button>
                </Stack>
                </Stack>
            </Box>
        </Modal>
        </>
    )
}

function FormInfo({openInfo, handleCloseInfo}) {
    return (
        <>
            <Modal
                open={openInfo}
                onClose={handleCloseInfo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <span className="font-open">Inscription Informatique</span>
                    </Typography>
                    <Stack justifyContent="center" spacing={2}>
                    <TextField id="standard-basic" label="Nom Étudiant" variant="standard" />
                    <TextField id="standard-basic" label="Post-nom Étudiant" variant="standard" />
                    <TextField id="standard-basic" label="Prénom Étudiant" variant="standard" />
                    <TextField id="standard-basic" label="Numero Étudiant" variant="standard" />
                    <TextField id="standard-basic" label="Adresse Étudiant" variant="standard" />
                    <Stack direction="row" justifyContent="center" spacing={2}>
                        <Button variant="contained" disabled>Annuler</Button>
                        <Button variant="contained">Enregistrer</Button>
                    </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

function Horaire({openHor, handleCloseHor}) {
    const rows = [
        {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
        {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
        {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0}
    ]

    return (
        <>
            <Modal
                open={openHor}
                onClose={handleCloseHor}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <span className="font-open">Horaire des cours</span>
                    </Typography>
                    <Stack justifyContent="center" spacing={2}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}
  

function Formation(props) {
    const [scroll, setScroll] = React.useState(false)

    const [openEnglish, setOpenEnglish] = React.useState(false);
    const handleOpenEnglish = () => setOpenEnglish(true);
    const handleCloseEnglish = () => setOpenEnglish(false);

    const [openInfo, setOpenInfo] = React.useState(false);
    const handleOpenInfo = () => setOpenInfo(true);
    const handleCloseInfo = () => setOpenInfo(false);

    const [openHor, setOpenHor] = React.useState(false);
    const handleOpenHor = () => setOpenHor(true);
    const handleCloseHor = () => setOpenHor(false);

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
        <>
            {/* <!-- Navigation --> */}

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
                        <div className="d-flex justify-content-center">
                            <button onClick={handleOpenHor} className={"btn rounded-pill ms-3" + (scroll ? " btn-outline-danger" : " btn-outline-light")}>Horaire</button>
                            <Horaire openHor={openHor} handleCloseHor={handleCloseHor} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* <!-- Banner --> */}

            <section class="bloc text-white font-mont">
                <img src="https://images.pexels.com/photos/8423005/pexels-photo-8423005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner" class="img-fluid" />
                <div class="container h-100">
                    <motion.div
                    initial={{x:-500}}
                    animate={{x:0}}
                    transition={{duration:0.7}}
                    class="d-flex flex-column justify-content-center h-100"
                    >
                        <h3 class="font-open fw-bold display-5">Better <span class="red-text">Design</span> Experiences</h3>
                        <p style={{ width: '800px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, provident illo? Laboriosam repudiandae sapiente, aperiam corrupti nam doloribus esse perspiciatis quisquam necessitatibus suscipit accusamus reprehenderit sed ipsam? Eos, adipisci sequi.</p>
                        <div>
                            <button class="btn rounded-0 red-bg text-white">Anglais</button>
                            <button class="btn btn-outline-light rounded-0 ms-3">Informatique</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* <!-- Anglais --> */}

            <section class="font-mont py-5 blue-text">
                <div class="container">
                    <h5 class="font-open text-center">Anglais</h5>
                    <div class="d-flex justify-content-center mb-4">
                        <p class="text-center w-50 text-black-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                    </div>
                    <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid float-start me-4" style={{ width: '500px' }} alt="Webox" />
                    <div class="">
                        <h3 class="font-open display-6">Formation diplamant en Anglais</h3>
                    </div>
                    <div class="text-muted font-mont">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt neque illo animi! Quis sint animi error magni explicabo quidem atque labore iste quae corrupti amet dolore nemo, dolor veniam?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga et alias quas voluptatibus molestiae commodi sit pariatur nesciunt dolorum neque, rem libero enim a cum maiores incidunt eligendi amet ipsam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, facilis ad. Ab dolore neque similique molestias ipsum quibusdam explicabo molestiae nam fuga obcaecati id voluptate praesentium sed, corporis non facere.
                        Saepe autem voluptas sapiente necessitatibus, fuga omnis vel fugit nesciunt et laborum quod id voluptates eveniet nulla consequuntur labore inventore quibusdam reiciendis quam, nam fugiat consequatur ea magnam? Nostrum, quia.
                        Omnis ad autem qui amet ea, quisquam odit soluta quia ducimus, voluptate repellendus dolore eos repellat! Obcaecati, delectus doloremque nesciunt voluptatum omnis iusto quas deserunt! Accusamus eaque fugiat dolores ab?</p>
                        <div class="d-flex justify-content-center py-3">
                            <button onClick={handleOpenEnglish} class="btn rounded-0 btn-lg px-5 red-bg text-white fw-bold"><small>S'inscrire</small></button>
                            <FormAnglais openEnglish={openEnglish} handleCloseEnglish={handleCloseEnglish} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Informatique --> */}

            <section class="font-mont blue-bg py-5 text-white">
                <div class="container">
                    <h5 class="font-open text-center">Informatique</h5>
                    <div class="d-flex justify-content-center mb-4">
                        <p class="text-center w-50 text-white-50"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur aliquam ut reprehenderit maxime earum!</small></p>
                    </div>
                    <img src="https://images.pexels.com/photos/4977444/pexels-photo-4977444.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid float-start me-4" style={{ width: '500px' }} alt="Webox" />
                    <div class="">
                        <h3 class="font-open display-6">Formation diplamant en Informatique</h3>
                    </div>
                    <div class="text-muted font-mont">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt neque illo animi! Quis sint animi error magni explicabo quidem atque labore iste quae corrupti amet dolore nemo, dolor veniam?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga et alias quas voluptatibus molestiae commodi sit pariatur nesciunt dolorum neque, rem libero enim a cum maiores incidunt eligendi amet ipsam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, facilis ad. Ab dolore neque similique molestias ipsum quibusdam explicabo molestiae nam fuga obcaecati id voluptate praesentium sed, corporis non facere.
                        Saepe autem voluptas sapiente necessitatibus, fuga omnis vel fugit nesciunt et laborum quod id voluptates eveniet nulla consequuntur labore inventore quibusdam reiciendis quam, nam fugiat consequatur ea magnam? Nostrum, quia.
                        Omnis ad autem qui amet ea, quisquam odit soluta quia ducimus, voluptate repellendus dolore eos repellat! Obcaecati, delectus doloremque nesciunt voluptatum omnis iusto quas deserunt! Accusamus eaque fugiat dolores ab?</p>
                        <div class="d-flex justify-content-center py-3">
                            <button onClick={handleOpenInfo} class="btn rounded-0 btn-lg px-5 red-bg text-white fw-bold"><small>S'inscrire</small></button>
                            <FormInfo openInfo={openInfo} handleCloseInfo={handleCloseInfo} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section Footer --> */}

            <section class="blue-text pt-5 font-mont">
            <div class="container">
                <div class="row">
                <div class="col-sm-6 col-md-4">
                    <h5 class="mb-4 fs-6">Liens importants</h5>
                    <ul class="list-unstyled">
                    <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Accueil</small></a></li>
                    <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Actualités</small></a></li>
                    <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Formation</small></a></li>
                    <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>ONG</small></a></li>
                    <li class="mt-3"><a href="#" class="text-decoration-none text-black-50"><small>Nos services</small></a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-4">
                    <h5 class="mb-4 fs-6">Nos contacts</h5>
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
                    <h5 class="mb-4 fs-6">Souscrire à la newsletter</h5>
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
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Formation />);