import ColorF from '../assets/Proyectos/image 25.png'
import ApiP from '../assets/Proyectos/image 23.png'
import Eco from '../assets/Proyectos/Captura de pantalla 2023-10-09 025004.png'
import './Proyectos.css'


const Proyectos = () => {

    return (
        <div className='Proyectos'>
            <h1>Proyectos</h1>

            <div className='Proy'>
                <div className='Proyecto1'>
                    <h3>Ecommerce</h3>
                    <img src={Eco} alt="" />
                    <p>
                        Desarrollé un proyecto web que se integra con la API de Rawg. Utilicé la tecnología React para crear esta aplicación en constante desarrollo.
                        El proyecto permite a los usuarios acceder a información relacionada con videojuegos y se encuentra en un estado continuo de mejora y expansión. </p>
                    <button><a href="https://github.com/CandeFer/Ecommerce_Game">Repositorio</a></button>
                </div>
                <div className='Proyecto2'>
                    <h3>Api de películas</h3>
                    <img src={ApiP} alt="Muestra" />
                    <p>Desarrollé un proyecto empleando HTML, CSS y JavaScript,
                        aplicando el método fetch junto con las técnicas async
                        y await para acceder y recopilar datos desde una API
                        externa.</p>
                    <button><a href="https://github.com/CandeFer/Proyectos/tree/main/Peliculas%20Api">Repositorio</a></button>
                </div>
                <div className='Proyecto3'>
                    <h3>Color Flipper</h3>
                    <img src={ColorF} alt="Muestra" />
                    <p>Diseñado con un enfoque en la práctica y mejora, en el
                        manejo del DOM, este proyecto se ha desarrollado
                        utilizando una combinación de JavaScript, CSS y HTML.</p>
                    <button><a href="https://github.com/CandeFer/Proyectos/tree/main/Color%20flippers">Repositorio</a></button>
                </div>
            </div>
        </div>

    );
};

export default Proyectos;