import { Link } from "react-router-dom";
import Input from "./input";
import { useState, useContext } from "react";
import Button from "./button";
import { AuthContext } from "../context/AuthContext";

function RegisterForm() {
    const { registerUser, errorMessage, loading,registerInfo,updateRegisterInfo} = useContext(AuthContext);

    return (
        <div className="space-y-2 text-gray-600">
            <h1 className="mb-10"><Link to="/" className="font-bold underline underline-offset-4 text-blue-500">Vous avez déjà un compte?</Link> ou bien créer un nouveau compte</h1>
            <form onSubmit={registerUser} className="space-y-6">
                <Input title='Num Tel' placeholder='num téléphone' type='number' 
                 onChange={(e) =>
                    updateRegisterInfo({...registerInfo, numTelephone: e.target.value })}/>
                <Input title='Email' placeholder='email' type='email'  
                onChange={(e) =>
                    updateRegisterInfo({...registerInfo, email: e.target.value })}/>
                <Input title='Mot de passe' placeholder='mot de passe' type='password' 
                 onChange={(e) =>
                    updateRegisterInfo({...registerInfo, password: e.target.value })}/>
                <Input title='Confirmer Mot de passe' placeholder='mot de passe' type='password'
                onChange={(e) =>
                    updateRegisterInfo({...registerInfo, confirmPassword: e.target.value })} />
                {errorMessage &&
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Erreur: </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                    </p>}
                <Button title="S'inscrire" type="submit" disabled={loading} /> 
            </form>
        </div>
    );
}

export default RegisterForm;
