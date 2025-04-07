import logo from "../assets/LogoPokemon.png"
import facebook from "../assets/iconSvg/facebook.svg"
import instagram from "../assets/iconSvg/instagram.svg"
import github from "../assets/iconSvg/github.svg"
import email from "../assets/iconSvg/email.svg"
import whatsaap from "../assets/iconSvg/whatsaap.svg"
import { Link } from "react-router-dom"
import "../css/footer.css"

function Footer() {
    return (
        <footer className="pie-pagina">

            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <Link to="/#">
                            <img src={logo} alt="Mundo_pokemon" />
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Mundo Pokémon fue creado con puros fines educativos y de aprendizaje, sin animos de lucro.</p>
                </div>
                <div className="box ">
                    <h2 >CONTACTO</h2>
                    <div className="red-social d-flex  aling-items-center justify-content-center">
                        <a href="https://www.instagram.com/pedromedina_18/" target="_blank"><img src={instagram} alt="instagram" /></a>
                        <a href="https://github.com/MedinaPedroDev/mundo_pokemon" target="_blank"><img src={github} alt="github" /></a>
                        <a href="mailto:medinacamacho27@gmail.com" target="_blank" title="medinacamacho27@gmail.com"><img src={email} alt="email" /></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small><b>Mundo Pokémon</b> - Autor Pedro Medina.</small>
                <a href="https://www.flaticon.com/free-icons/pokemon" target="_blank" title="pokemon icons">Pokemon icons created by Those Icons - Flaticon</a>
                <a href="https://www.wikidex.net" target="_blank" title="pokemon icons">Información e Iconos provenientes de - Wikidex</a>
            </div>
        </footer>
    )
}

export default Footer