import { useState } from 'react';

const NavBar = () => {
    let links =[
        {name:"Inicio", link:"/"},
        {name:"Acerca de mi", link:"/#acerca-de-mi"},
        {name:"Proyectos", link:"/#proyectos"},
        {name:"Skills", link:"/#skills"},
        {name:"Contacto", link:"/#contacto"},
    ];
    const [open, setOpen] = useState(false);
    
    return(
        <div className="shadow-md w-full fixed md:absolute top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center 
            text-gray-800">
                <span className="text-3xl text-indigo-600 mr-1 pt-2">
                    <ion-icon name="code-slash-outline"></ion-icon>
                </span>
                Carlos
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>
            </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
                bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
                transition-all duration-500 ease-in ${open ? "top-20" : "top-[-490px]"}`}>
                   {
                       links.map((link)=>(
                           <li key={link.name} className="md:ml-8 text-xl md:-my-0 my-7">
                               <a href={link.link} className="text-gray-800 hover:text-zinc-400 duration-500">{link.name}</a>
                           </li>
                       ))
                   }
                </ul>
            </div>
        </div>
    )
}

export default NavBar