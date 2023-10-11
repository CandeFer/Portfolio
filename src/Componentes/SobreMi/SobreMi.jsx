import './SobreMi.css'
import Foto from '../assets/Foto.png'

const SobreMi = () => {

    return (
        <div className='SobreMi'>
            <div className='Foto'>
                <img src={Foto} alt="No Carga" />
            </div>
            <div className='Informacion'>
                <div className='Texto'>
                    <h1>Sobre mí</h1>
                    <h4>Diseñadora UX/UI Tr y desarrolladora web Full Stack Jr</h4>
                    <p>¡Hola y bienvenidos a mi portfolio! Soy Candela, una apasionada de la tecnologías que combina la programación y el diseño para crear soluciones simples a partir desafíos complejos.
                        Mi enfoque se centra en transformar ideas complejas en sitios web funcionales, atractivos y efectivos.
                        Si buscas una combinación única de funcionalidad y diseño, estoy lista para llevar tus proyectos al siguiente nivel.</p>
                    <button><a href="https://drive.google.com/file/d/1nVN6zLPegrDjEIRMZGErMvkdP1aBcBAN/view?usp=sharing">Curriculum</a></button>
                </div>
            </div>
        </div>
    );
};

export default SobreMi;