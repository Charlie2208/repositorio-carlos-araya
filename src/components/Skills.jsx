import Tag from '../components/Tag'
import TituloSeccion from './TituloSeccion'

const Skills = () => {
    const lenguajes = [
        {nombre: "HTML", id:"1", icono:"logo-html5"},
        {nombre: "CSS", id:"2", icono:"logo-css3"},
        {nombre: "JavaScript", id:"3", icono:"logo-javascript"}
    ]
    const librerias = [
        {nombre:"Vue", id:"1", icono:"logo-vue"},
        {nombre:"React", id:"2", icono:"logo-react"},
        {nombre:"Bootstrap", id:"3"},
        {nombre:"Tailwind", id:"4"}
    ]

    const herramientas = [
        {nombre:"Visual Studio", id:"1", icono:"logo-microsoft"},
        {nombre:"GitHub", id:"2", icono:"logo-github"}
    ]
    return(
        
        <div id="skills" className="py-5 mt-10 md:mt-5">
            <TituloSeccion titulo="Skills" />
            <div className="ml-4 md:ml-20">
                <h2 className="text-2xl my-3 mt-10">Lenguajes</h2>
                <div className="flex">
                    {lenguajes.map((item)=>{
                        return(
                            <Tag nombre={item.nombre}
                                icono={item.icono}
                            />
                        )
                    })}
                </div>
                <h2 className="text-2xl my-3 mt-10">Frameworks y Librerias</h2>
                <div className="grid grid-cols-2  md:flex">
                    {librerias.map((item)=>{
                        return(
                            <Tag nombre={item.nombre} icono={item.icono} />
                        )
                    })}
                </div>
                <h2 className="text-2xl my-3 mt-10">Software y Herramientas</h2>
                <div className="flex">
                    {herramientas.map((item)=>{
                        return(
                            <Tag nombre={item.nombre} icono={item.icono} />
                        )
                    })}
                </div>
            </div>
            
        </div>

        
    )
}

export default Skills