import { Link } from "react-router-dom";
import Input from "./input";
import { useState, useContext } from "react";
import Button from "./button";
import { AuthContext } from "../context/AuthContext";

function LoginForm() {
    const {loginInfo,loginUser,updateLoginInfo,errorMessage}=useContext(AuthContext);



   
    return ( 
        <div className="space-y-2 text-gray-600">
            <h1 className="mb-10"><Link to="/register" className="font-bold underline underline-offset-4 text-blue-500">Créer un compte </Link> ou bien connecter à votre compte</h1>
            <form onSubmit={loginUser} className="space-y-6">
                <Input title='Email' placeholder='email' type='email' 
                  onChange={(e) =>
                    updateLoginInfo({...loginInfo, email: e.target.value })}/>

                <Input title='Password' placeholder='password' type='password' 
                 onChange={(e) =>
                    updateLoginInfo({...loginInfo, password: e.target.value })}/>
                
                <h1 className=" text-right"> <Link  to="/forgot password" className="font-bold underline underline-offset-4">Mot de passe oublié ?</Link></h1>

                {errorMessage && 
                <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Erreur: </strong>
                    <span className="block sm:inline">{errorMessage}</span>
                </p>}

                <Button title="Se connecter" type="submit"/>
            </form>
        </div>
    );
}

export default LoginForm;
