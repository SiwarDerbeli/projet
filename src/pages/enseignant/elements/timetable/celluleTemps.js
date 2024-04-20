function Temps(props) {
    return ( 
        <div className="text-gray-500 p-10 border border-white bg-gray-100 rounded drop-shadow">
            <h1>{props.nom}</h1>
            <h1 className="text-sm text-blue-500">{props.temps}</h1>
        </div>
     );
}

export default Temps;