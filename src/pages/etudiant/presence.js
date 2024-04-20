import SideNav from './elements/sideNav';
import Etudiant from "./elements/etudiant";
import TablePres from './elements/tablePresence';
import CalendrierPres from './elements/calendar';
function Presence() {
    return ( 
        <div className="flex justify-center h-full bg-gray-100">
         <SideNav/>
         <div className="p-10">

<div className="flex items-center space-x-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 bg-gray-200 p-2 rounded-xl text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
    <h1 className="text-gray-400 text-lg">Etudiant / </h1>
   
</div>

 <h1 className="text-blue-950 text-3xl mt-4 ml-10">Absences</h1>

 <div className="text-xl p-10 bg-white pr-44 mt-6 ">
    <h1 className="text-blue-500 mb-2">Liste des Absences</h1>
    <div className=" p-10 space-y-10">
            <TablePres/>
            <CalendrierPres/>
         </div>
 </div>

</div>

         <Etudiant/>
        </div>
     );
}

export default Presence;