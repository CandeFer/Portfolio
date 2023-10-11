import './Navbar.css'



const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="Divisiones">
                <ul>
                    <li>Sobre mÍ</li>
                    <li>Estudios</li>
                    <li>Certificados</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                </ul>
            </div>
            <div className="SocialMedia">
                <ul>
                    <li><a href="https://github.com/CandeFer"><i className="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/candela-fernandez-iba%C3%B1ez/"><i className="bi bi-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;