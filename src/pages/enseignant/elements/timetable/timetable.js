import Cellule from "./celluleEmplois";
import Jour from "./celluleJour";
import Temps from "./celluleTemps";
function TimeTable() {
    return ( 
    <div>
        
        <div className="flex"><div className="p-6 text-blue-500 flex items-center mr-4"><h1>Jour/Temps</h1></div><Temps nom="S1" temps="8:30 - 10:00"/><Temps nom="S2" temps="10:10 - 11:40"/><Temps nom="S3" temps="11:50 - 13:20"/><Temps nom="S4" temps="13:50 - 15:20"/><Temps nom="S5" temps="15:30 - 17:00"/><Temps nom="S6" temps="17:10 - 18:40"/></div>
        <div className="flex"><Jour jour="Lundi"/><Cellule temps="S1" jour="lundi"/><Cellule temps="S2" jour="lundi"/><Cellule temps="S3" jour="lundi"/><Cellule temps="S4" jour="lundi"/><Cellule temps="S5" jour="lundi"/><Cellule temps="S6" jour="lundi"/></div>
        <div className="flex"><Jour jour="Mardi"/><Cellule temps="S1" jour="mardi"/><Cellule temps="S2" jour="mardi"/><Cellule temps="S3" jour="mardi"/><Cellule temps="S4" jour="mardi"/><Cellule temps="S5" jour="mardi"/><Cellule temps="S6" jour="mardi"/></div>
        <div className="flex"><Jour jour="Mercredi"/><Cellule temps="S1" jour="mercredi"/><Cellule temps="S2" jour="mercredi"/><Cellule temps="S3" jour="mercredi"/><Cellule temps="S4" jour="mercredi"/><Cellule temps="S5" jour="mercredi"/><Cellule temps="S6" jour="mercredi"/></div>
        <div className="flex"><Jour jour="Jeudi"/><Cellule temps="S1" jour="jeudi"/><Cellule temps="S2" jour="jeudi"/><Cellule temps="S3" jour="jeudi"/><Cellule temps="S4" jour="jeudi"/><Cellule temps="S5" jour="jeudi"/><Cellule temps="S6" jour="jeudi"/></div>
        <div className="flex"><Jour jour="Vendredi"/><Cellule temps="S1" jour="vendredi"/><Cellule temps="S2" jour="vendredi"/><Cellule temps="S3" jour="vendredi"/><Cellule temps="S4" jour="vendredi"/><Cellule temps="S5" jour="vendredi"/><Cellule temps="S6" jour="vendredi"/></div>
        <div className="flex"><Jour jour="Samedi"/><Cellule temps="S1" jour="samedi"/><Cellule temps="S2" jour="samedi"/><Cellule temps="S3" jour="samedi"/><Cellule temps="S4" jour="samedi"/><Cellule temps="S5" jour="samedi"/><Cellule temps="S6" jour="samedi"/></div>
    </div>
     );
}

export default TimeTable;