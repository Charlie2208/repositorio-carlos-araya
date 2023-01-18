const Tag = ({nombre, icono}) => {
    return(
        <div className="border-solid mr-8 border-2 w-40 text-center shadow-xl mb-3 border-gray-400 rounded-md py-2 px-1">
            <span className="text-xl ">{nombre}</span>
            <span className="text-xl ml-2"><ion-icon name={icono}></ion-icon></span>
        </div>
    )
}

export default Tag