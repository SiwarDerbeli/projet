
import LoginForm from "./elements/loginForm";

function Login() {

    return ( 
        <div  style={{ 
            backgroundImage: `url('/images/bg.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            
          }} className="flex justify-start items-center min-h-screen p-4 ">

      
            <div className="space-y-4 p-10 ml-44">
          
            <h1 className="text-5xl font-mono font-bold text-blue-500">Bienvenue !</h1>
            <LoginForm/>
            </div>
   
        </div>
     );
}

export default Login;