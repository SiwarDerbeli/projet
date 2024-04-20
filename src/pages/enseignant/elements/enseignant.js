import img from '../assests/avatar.png'
import { useState,useEffect } from 'react';
function Enseignant()
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
        <div className="flex flex-col items-center justify-center bg-blue-400 rounded-lg text-white  p-10 w-1/4 my-10">
           <img src={img} className='rounded-full w-1/3'/> 
           <h1 className='text-xl'>Flen Fouleni</h1>
           <h1 className='text-lg'>flenFouleni@gmail.com</h1>
           <div className='bg-white rounded-lg p-4 text-blue-950 w-full text-xl mb-4 mt-4'>
           <h1>Charge d'enseignement: <span>10 H</span></h1>
           </div>
           <div className='bg-white rounded-lg p-4 text-blue-950 w-full text-xl mb-4'>
           <h1>Charge de groupe: <span>5</span></h1>
           </div>
           <div className='bg-white rounded-lg p-4 text-blue-950 w-full text-xl'>
           <h1>Chef département: <span>informatique</span></h1>
           </div>
           <h2 className='text-7xl text-white mt-44' >{time.toLocaleTimeString()}</h2>
            
        </div>
     );
}

export default Enseignant;
