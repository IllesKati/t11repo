//Illés Miklósné Team11
//01. feladat: hosszEllenor()–Bemeneti paraméterek száma: 1(szöveg)

let egyszeruSzoveg="Szeretem a programozást";
document.write(egyszeruSzoveg.length);

	function hosszEllenor(szoveg){
    for(let i=0;i<egyszeruSzoveg.length;i++)
    {
    	if(egyszeruSzoveg[i].substr(0,10)=="Szeretem"){
        	return true;
        }
    }
    return false;
}
function EredmenyKiiro(eredmeny,eredmenySzovegEgy, eredmenySzovegKetto){
	if(eredmeny==true){
		document.write("<br>"+eredmenySzovegEgy);
	}
    else{
    	document.write("<br>"+eredmenySzovegKetto);
    }
}
EredmenyKiiro(hosszEllenor("08"), "Megfelelő.", "NEM megfelelő.");