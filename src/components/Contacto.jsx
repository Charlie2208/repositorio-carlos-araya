import TituloSeccion from "./TituloSeccion"

const Contacto = () => {
    const datosContacto = [
        {nombre:"Email", icono:"mail-outline", valor:"carlosarayasalfate@gmail.com" },
        {nombre:"Whatsapp", icono:"logo-whatsapp", valor:"+56 9 56075020" },
    ]
    return(
        <div id="contacto" className="mt-10 md:mt-5">
            <TituloSeccion titulo="Contáctame" />
            <div>
                <ul className=" :py-3">
                    {
                        datosContacto.map((item)=>{
                            return(
                                <li key={item.valor} className="text-xl ml-5 md:ml-20 mt-10">
                                    <span className="text-2xl mr-5"><ion-icon name={item.icono}></ion-icon></span>
                                    <span className="">{item.nombre}</span>
                                    <span className="ml-3 md:ml-10">{item.valor}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Contacto