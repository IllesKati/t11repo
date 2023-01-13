<script>
/*
0-6 - Kisgyermekkor
6-12 - Gyermekkor
12-16 - Serdülőkor
16-20 - Ifjúkor
20-30  - Fiatal felnőttkor
30-60  - Felnőttkor
60-tól - Aggkor
*/

let vizsgaltSzam=prompt("Add meg a vizsgálandó számot:");
if(vizsgaltSzam<5){
	document.write(`${vizsgaltSzam}  év esetén, Kisgyermekkor`);
}
else if(vizsgaltSzam<12){
	document.write(`${vizsgaltSzam} év esetén, Gyermekkor`);
}
else if(vizsgaltSzam<16){
	document.write(`${vizsgaltSzam} év esetén, Serdülőkor`);
}
else if(vizsgaltSzam<19){
	document.write(`${vizsgaltSzam} év esetén, Ifjúkor`);
}
else if(vizsgaltSzam<30){
	document.write(`${vizsgaltSzam} év esetén, Fiatal felnőttkor`);
}  
else if(vizsgaltSzam<31){
	document.write(`${vizsgaltSzam} év esetén, Felnőttkor`);
}
else if(vizsgaltSzam<61){
	document.write(`${vizsgaltSzam} év esetén, Aggkor`);
}
else{
document.write(`${vizsgaltSzam} {0 && 120<} év esetén, "Hibás adat"`);
	
}
</script>