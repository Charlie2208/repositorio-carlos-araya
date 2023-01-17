import './header.css'
import 'animate.css';

const Header = () => {
    return(
        <div className="header">
            <div className=" grid place-items-center h-screen">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">HOLA</h1>
                <h2 className="text-6xl">
                    <span className="font-extralight">Soy un </span> 
                    desarrollador <span className="font-bold ">FrontEnd</span>
                </h2>
                    <a href="https://www.linkedin.com/in/carlos-araya-aa140818a/" target="_blank" className="text-4xl mx-2"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/Charlie2208/" target="_blank" className="text-4xl mx-2"><ion-icon name="logo-github"></ion-icon></a>
                </div>
            
            </div>
            
        </div>
    )
}

export default Header