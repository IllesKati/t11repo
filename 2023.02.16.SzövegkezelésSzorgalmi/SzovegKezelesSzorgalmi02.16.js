<script>
//1) Csak a fele
//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből minden második karaktert törli.

const EgyszeruSzoveg = "Szeretem a programozást."; 

function CsakaFele(szoveg){
	let karakterTorles=[];
    for(let i=0;i<EgyszeruSzoveg.length;i++){
    	karakterTorles=false;
        for(let j=0; j<torlendo.length; j++){
    	 if(EgyszeruSzoveg[i].splice(1,3,5,7)==szoveg)
         {
        	karakterTorles=true;
        }
    }
    return karakterTorles;
}
document.write("<br>A megoldás:"+CsakaFele(szoveg));
}


</script>

