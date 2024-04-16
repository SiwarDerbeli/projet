function Input(props) {
    const { title, placeholder, type, } = props;
  
  
    return ( 
      <div className="flex flex-col space-y-1">
        <label className=" text-gray-500 " htmlFor={title}>{title}</label>
        <input 
          placeholder={placeholder} 
          type={type}
          required
          className="peer rounded-lg p-2 border border-gray-600 focus:shadow-lg focus:outline-blue-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500" 
        />

        {!(title === 'Num Tel') && 
           <p class="mt-2 invisible peer-invalid:visible text-pink-400 text-sm">
           Entrer une valeur valide.
           </p>
        }
      </div>
    );
  }
  
  export default Input;
