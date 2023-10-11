import Carousel from 'react-bootstrap/Carousel';
import ArgentinaP from '../assets/Certificados/argentina_programa_2022-_2_.png'
import Alura from '../assets/Certificados/Candela-Fernandez-Ibañez-Formación-Alura-2.png'
import Alura2 from '../assets/Certificados/Candela-Fernandez-Ibañez-Formación-Alura-3.png'
import Alura3 from '../assets/Certificados/Candela-Fernandez-Ibañez-Formación-Alura-4.png'
import Alura4 from '../assets/Certificados/Candela-Fernandez-Ibañez-Formación-Alura-5.png'
import Alura5 from '../assets/Certificados/Candela-Fernandez-Ibañez-Formación-Alura-6.png'
import Alura6 from '../assets/Certificados/Candela-Fernandez-Ibañez-Formación-Alura.png'
import Alura7 from '../assets/Certificados/Candela-Fernandez-Ibañez-Programa-.png'
import CodoACodo from '../assets/Certificados/Certificado Diseño ux_ui-1.png'
import Bootcamp from '../assets/Certificados/Certificado HTML y css .png'
import Egg from '../assets/Certificados/Certificado_de_Curso_Programacion_desde_Cero.png'
import EducacionIt from '../assets/Certificados/Certificado-Javascript-desde-cero-EducaciónIT .png'
import './Certificados.css'

const Certificados = () => {


  return (
    <div className='Certificados'>
      <h1>Certificados</h1>
      <Carousel className='Carrusel'>
        <Carousel.Item >
          <img style={{ maxHeight: '530px' , backgroundSize: 'cover'}} className="d-block w-100" src={ArgentinaP} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px' , backgroundSize: 'cover'}} className="d-block w-100" src={Alura} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px', backgroundSize: 'cover' }} className="d-block w-100" src={Alura2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px' , backgroundSize: 'cover'}} className="d-block w-100" src={Alura3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px' , backgroundSize: 'cover'}} className="d-block w-100" src={Alura4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px', backgroundSize: 'cover' }} className="d-block w-100" src={Alura5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px' , backgroundSize: 'cover'}} className="d-block w-100" src={Alura6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px', backgroundSize: 'cover' }} className="d-block w-100" src={Alura7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px', backgroundSize: 'cover' }} className="d-block w-100" src={Egg} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px', backgroundSize: 'cover' }} className="d-block w-100" src={EducacionIt} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px', backgroundSize: 'cover' }} className="d-block w-100" src={CodoACodo} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxHeight: '530px' , backgroundSize: 'cover'}} className="d-block w-100" src={Bootcamp} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );

};

export default Certificados;