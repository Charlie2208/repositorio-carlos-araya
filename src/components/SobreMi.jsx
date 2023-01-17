import carlosaraya from '../assets/carlosaraya.jpg'


const SobreMi = () => {
    
    return(
        <div id="acerca-de-mi" className="container mt-10 md:mt-5 py-6 grid md:grid-cols-2">
            <div>
                <img src={carlosaraya} className="w-56 mx-auto rounded-md shadow-md" alt="" />
            </div>
            <div className=" w-full bg-gray-100 rounded-md md:mx-12 shadow-md">
                <div className="mx-3">
                <h1 className="text-3xl font-bold py-3">Acerca de mi</h1>
                <h2 className="text-gray-500">Desarrollador Web</h2>
                <p className="py-3">
                Desarrollador FrontEnd y técnico en Marketing. Cuento con experiencia trabajando en metodologías <span className="font-bold">ágiles</span> , manejo de frameworks de <span className="font-bold">JavaScript</span> tales como, <span className="font-bold">React y Vue</span>. Durante estos últimos dos años empecé el viaje en la industria tecnológica haciendo un vuelco profesional. 
                Adicionalmente  cuento con más de seis años de <span className="font-bold">experiencia</span> en el desarrollo de proyectos y producción musical sumando en este trabajo millones de reproducciones en plataformas como Spotify.
                </p>

                <p className="font-bold">
                    Actualmente busco un lugar donde aprender y crecer en el mundo del desarrollo web.
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default SobreMi