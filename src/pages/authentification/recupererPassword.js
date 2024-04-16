
import RecupererPasswordForm from "./elements/recupererPasswordForm";

function RecupererPassword() {

    return ( 
        <div className="flex justify-center items-center bg-blue-200 p-4 ">
        <div className="flex justify-center items-center justify-around bg-white rounded-lg min-h-screen w-1/2 p-10">


            <div className="flex flex-col items-center justify-center space-y-4 ">
            <h1 className="text-3xl font-bold">Entrer le code: </h1>
            <RecupererPasswordForm/>
            </div>

        </div>
        </div>
     );
}

export default RecupererPassword;