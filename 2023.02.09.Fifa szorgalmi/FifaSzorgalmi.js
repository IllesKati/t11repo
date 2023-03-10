<script>

//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];


//Objektum típusú tömb készítése

function ObjektumFeltoto(feltoltendoElem){
	const beolvasottAdat=[];
    for(let i=0;i<feltoltendoElem.length;i++){
    	let objektum={};
        let daraboltAdatSor=feltoltendoElem[i].split(';');
        objektum.nev=daraboltAdatSor[0];
        objektum.helyezes=daraboltAdatSor[1];
        objektum.valtozas=daraboltAdatSor[2];
        objektum.pontszam=daraboltAdatSor[3];
        beolvasottAdat.push(objektum);
    }
    return beolvasottAdat;
}
const fifaAdatok=ObjektumFeltoto(csapatAdat);
document.write("<table border=\"1\">");
document.write("<tr><th>Név</th><th>Helyezés</th><th>Változás</th><th>Pontszám</th></tr>");
for(let i=0;i<fifaAdatok.length;i++){
	document.write(`<tr><td>${fifaAdatok[i].nev}</td><td>${fifaAdatok[i].helyezes}</td><td>${fifaAdatok[i].valtozas}</td><td>${fifaAdatok[i].pontszam}</td></tr>`);
}
document.write("</table>");


//Adja meg aktuálisan hány csapat szerepel a ranglistán

function CsapatokSzama()
{
	document.write("A ranglistán szereplő csapat darabszáma: "+csapatAdat.length);
}
CsapatokSzama();


//Írja ki mennyi a résztvevő csapatok átlagpontszáma


function CsapatAtlagPontSzam(){
	let atlagPontSzam=0;
	for(let i=0;i<fifaAdatok.length;i++){
    {	
    atlagPontSzam+=fifaAdatok[i].pontszam;  
	}
}
document.write("<hr>A résztvevő csapatok átlagpontszáma: "+atlagPontSzam/fifaAdatok.length);
}
CsapatAtlagPontSzam();



</script>








