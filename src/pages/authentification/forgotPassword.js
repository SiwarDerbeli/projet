
import ForgotPasswordForm from "./elements/forgotPasswordForm";

function ForgotPassword() {

    return ( 
        <div className="flex justify-center items-center  min-h-screen">
        <div className="flex justify-center items-center  bg-white rounded-lg  w-1/2 p-10">


            <div className="space-y-4 ">
            <h1 className="text-5xl font-bold font-mono text-blue-500">Mot de Passe oublié </h1>
            <p className="text-gray-700">Entrer votre email et nous vous envoyerons un email de récupération</p>
            <ForgotPasswordForm/>
            </div>

        </div>
        </div>
     );
}

export default ForgotPassword;