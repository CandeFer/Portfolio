import { Informacion } from "../Export/Informacion";
import './Estudios.css'


const Estudios = () => {
    return (
        <div className="Est">
            <h1>Estudios</h1>
            <div className="Estudios">
                {
                    Informacion.map((info, index) => (
                        <div key={index} className="Estudio">
                            <h4>
                                {info.titulo}
                            </h4>
                            <div className="des">
                            <p>
                                {info.descripcion}
                            </p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Estudios;