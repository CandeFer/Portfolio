import { habilidadesB } from "../Export/Informacion";
import { Programas } from "../Export/Informacion";
import { Lenguajes } from "../Export/Informacion";
import './Habilidades.css'

const Habilidades = () => {
    return (
        <div className="Habilidades">
            <h1>Habilidades</h1>
            <div>
                <h4>Lenguajes y Frameworks</h4>
                <ul className="Lenguajes">
                    {
                        Lenguajes.map((lenguaje, index) => (
                            <li key={index}>
                                <div>
                                    <h5>{lenguaje.titulo}</h5>
                                    <p>{lenguaje.nivel}</p>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div>
                <h4>Programas</h4>
                <ul>
                    {
                        Programas.map((programa, index) => (
                            <li key={index}>
                                <div>
                                    <h5>{programa.nombre}</h5>
                                    <p>{programa.nivel}</p>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div>
            <h4>Habilidades blandas</h4>
                <ul>
                    {
                        habilidadesB.map((habilidad, index) => (
                            <li key={index}>
                                <div>
                                    <h5>{habilidad.nombre}</h5>
                                    <p>{habilidad.nivel}</p>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default Habilidades;