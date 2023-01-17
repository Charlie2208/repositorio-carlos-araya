import { useEffect, useState } from "react";
import TituloSeccion from "./TituloSeccion";
import './card.css'

const CardsPortafolio = () => {
    const  [data, setData] = useState([])
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            //console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            setData(myJson);
          });
      }
      useEffect(()=>{
          getData()
      },[])

    
    return(
        <div id="proyectos" className="mt-10 md:mt-5 mx-20  md:mx-10">
            <TituloSeccion titulo="Proyectos" />
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5 md:ml-10">

            {
                       data.map((link)=>(
                           <div key={link.id} className="card rounded-2xl flex justify-center my-3  ">
                               <div className="h-56 text-center mx-2 ">
                                    <img src={link.img} className="rounded-2xl" alt="" />
                                    <h1  className="text-xl font-bold">{link.titulo}</h1>
                                    <p className="text-justify">{link.descripcion}</p>
                                    <div className="flex  ">
                                        <p className="mr-5 border-solid border-2 border-gray-400 rounded-md py-1 px-1">{link.stacks.n1} <ion-icon name={link.stacks.logon1}></ion-icon></p>
                                        <p className="mr-5 border-solid border-2 border-gray-400 rounded-md py-1 px-1">{link.stacks.n2} <ion-icon name={link.stacks.logon2}></ion-icon></p>
                                        <p className={`${link.stacks.n3 === undefined ? 'hidden' : "mr-5 border-solid border-2 border-gray-400 rounded-md py-1 px-1"}`}>{link.stacks.n3} <ion-icon name={link.stacks.logon3}></ion-icon></p>
                                    </div>
                                    <div className="mt-2 flex justify-center">
                                        <a href={link.github} target="_blank" className={`${link.github == 'null' ? 'hidden' : 'text-4xl'}`}><ion-icon name="logo-github"></ion-icon></a>
                                        <a href={link.link} target="_blank" className="text-4xl"><ion-icon name="link-outline"></ion-icon></a>
                                    </div>
                                    
                               </div>
                               
                           </div>
                       ))
                   }
            </div>
            
        </div>
    )
}

export default CardsPortafolio