function Button(props) {
    return ( 
        <button className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600  font-bold text-white hover:text-blue-900 hover:border hover:border-gray-600 w-full p-4 text-center rounded-lg"
                type={props.type}>
        {props.title}
        </button>
     );
}

export default Button;