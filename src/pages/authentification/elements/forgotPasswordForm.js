import { Link } from "react-router-dom";
import Input from "./input";
import { useState } from "react";
import Button from "./button";

function ForgotPasswordForm() {

    /* states*/
    const [email,setEmail]=useState('')

   /* handling events*/
    const handleSubmit= async (e) => {
        e.preventDefault()
        console.log('submitted',email)
    }

    const handleEmail=(e)=>{
       setEmail(e.target.value)
    }
 
     /*rendering component*/

    return ( 
        <div className="space-y-10">
           
             <form onSubmit={handleSubmit} className="space-y-6">

                
                <Input title='Email' placeholder='email' type='email' value={email} onChange={handleEmail}/>

                 <div className="flex space-x-4">
                 <Link  to="/register" className="flex items-center justify-center hover:text-white hover:bg-blue-500 border border-blue-500 rounded-lg font-bold text-blue-500 w-full"><butto>Nouveau compte</butto></Link>
                    <Button title="Envoyer" type="submit"/></div>
                
            </form>
        </div>
        
     );
}

export default ForgotPasswordForm;