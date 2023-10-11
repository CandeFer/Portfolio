import SobreMi from "../SobreMi/SobreMi";
import Estudios from "../Estudios/Estudios";
import Habilidades from "../Habilidades/Habilidades";
import Proyectos from "../Proyectos/Proyectos";
import Certificados from "../Certficados/Certificados";


const Todo = () => {
    return (
        <>
            <main>
                <SobreMi/>
                <Estudios/>
                <Certificados/>
                <Habilidades/>
                <Proyectos/>
            </main>
            </>
    );
};

export default Todo;