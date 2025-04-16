import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";


function SectionExplore() {
    const { types } = useContext(AuthContext)

    return (
        <section className='section-explore'>
            <h2>¡Explora!</h2>
            <p className='text-white fs-4 mb-0 fw-bold text-center'>¡Encuentra el Pokémon o el Objeto que estas buscando!</p>
            <div className='explore d-flex flex-column flex-md-row'>
                <Link to="/pokedex" className='shadow__btn poke my-4 my-md-0 text-center'>Pokédex</Link>
                <Link to="/items" className='shadow__btn obje my-4 my-md-0 text-center'>Items</Link>
            </div>
            <h2 className='mb-3'>Tipos</h2>
            <div className='w-100 d-flex flex-wrap justify-content-center gap-4 my-3'>
                <Link to="/tipo/grass" className='link-type'><img src={types.grass.icono_png} width={"120px"} alt="grass" /></Link>
                <Link to="/tipo/fire" className='link-type'><img src={types.fire.icono_png} width={"120px"} alt="fire" /></Link>
                <Link to="/tipo/water" className='link-type'><img src={types.water.icono_png} width={"120px"} alt="water" /></Link>
                <Link to="/tipo/flying" className='link-type'><img src={types.flying.icono_png} width={"120px"} alt="flying" /></Link>
                <Link to="/tipo/poison" className='link-type'><img src={types.poison.icono_png} width={"120px"} alt="poison" /></Link>
                <Link to="/tipo/normal" className='link-type'><img src={types.normal.icono_png} width={"120px"} alt="normal" /></Link>
                <Link to="/tipo/electric" className='link-type'><img src={types.electric.icono_png} width={"120px"} alt="electric" /></Link>
                <Link to="/tipo/ground" className='link-type'><img src={types.ground.icono_png} width={"120px"} alt="ground" /></Link>
                <Link to="/tipo/bug" className='link-type'><img src={types.bug.icono_png} width={"120px"} alt="bug" /></Link>
                <Link to="/tipo/fighting" className='link-type'><img src={types.fighting.icono_png} width={"120px"} alt="fighting" /></Link>
                <Link to="/tipo/rock" className='link-type'><img src={types.rock.icono_png} width={"120px"} alt="rock" /></Link>
                <Link to="/tipo/steel" className='link-type'><img src={types.steel.icono_png} width={"120px"} alt="steel" /></Link>
                <Link to="/tipo/ghost" className='link-type'><img src={types.ghost.icono_png} width={"120px"} alt="ghost" /></Link>
                <Link to="/tipo/fairy" className='link-type'><img src={types.fairy.icono_png} width={"120px"} alt="fairy" /></Link>
                <Link to="/tipo/psychic" className='link-type'><img src={types.psychic.icono_png} width={"120px"} alt="psychic" /></Link>
                <Link to="/tipo/ice" className='link-type'><img src={types.ice.icono_png} width={"120px"} alt="ice" /></Link>
                <Link to="/tipo/dragon" className='link-type'><img src={types.dragon.icono_png} width={"120px"} alt="dragon" /></Link>
                <Link to="/tipo/dark" className='link-type'><img src={types.dark.icono_png} width={"120px"} alt="dark" /></Link>

            </div>
        </section>
    )
}

export default SectionExplore