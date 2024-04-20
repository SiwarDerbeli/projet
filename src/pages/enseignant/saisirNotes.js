import SelectMatiere from "./elements/SelectMatiere";
import Enseignant from "./elements/enseignant";
import Selectt from "./elements/select";
import SideNav from "./elements/sideNav";
import TableNotes from "./elements/tableNotes";

function SaisirNotes() {
   
    return ( 
        
        <div className="flex justify-center h-full bg-gray-100">
            <SideNav/>
            <div className="p-10 w-3/4">

<div className="flex items-center space-x-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 bg-gray-200 p-2 rounded-xl text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
    <h1 className="text-gray-400 text-lg">Enseignant / </h1>
   
</div>

 <h1 className="text-blue-950 text-3xl mt-4 ml-10">Gestion des notes</h1>

 <div >

   <TableNotes/>
  </div>

</div>
            <Enseignant/>
            </div>
     );
}

export default SaisirNotes;