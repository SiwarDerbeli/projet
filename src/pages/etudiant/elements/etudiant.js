import img from '../assets/avatar.png'
import { useState,useEffect } from 'react';
import Slide from './slider';
function Etudiant()
{
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };
    return ( 
        <div className="flex flex-col items-center  bg-blue-400 rounded-lg text-white space-y-4 p-10 w-1/4 my-10">
           <img src={img} className='rounded-full w-1/3'/> 
           <h1 className='text-xl'>Flen Fouleni</h1>
           <h1 className='text-lg'>flenFouleni@gmail.com</h1>
           <div className='bg-white rounded-lg p-4 text-blue-950 w-full text-xl'>
           <h1>Filière: <span>ING A2</span></h1>
           </div>
           <div className='bg-white rounded-lg p-4 text-blue-950 w-full text-xl'>
           <h1>Groupe: <span>2</span></h1>
           </div>              
           <div className='bg-white rounded-lg p-4 text-blue-950 w-full text-xl mb-4 mt-4'>
           <h1>Nombre Total d'absences: <span>10</span></h1>
           </div>
        
            
        </div>
     );
}

export default Etudiant;