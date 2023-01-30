<script>
// Készítsétek el a halmazműveletes "SzerepelE()" függvényt, majd próbáljátok meg implementálni 
// azt a halmazműveletekbe: UNIÓ, METSZET, AkulB és BkulA
// Gyakoroljatok az eddigi feladatokon, készítsétek el a feladatok eljárásos vagy épp függvényes verzióit!

//Tömb generálása és megjelenítése
let aHalmaz=[];
let bHalmaz=[];
for(let i=0;i<10;i++){
	aHalmaz.push(Math.round(Math.random()*20));
}
for(let i=0;i<10;i++){
	bHalmaz.push(Math.round(Math.random()*20));
}
document.write("A generált halmazok elemei:");
document.write("<br>A halmaz:");
for(let i=0;i<aHalmaz.length;i++)
{
	document.write(aHalmaz[i]+",");
}
document.write("<br>B halmaz:");
for(let i=0;i<bHalmaz.length;i++)
{
	document.write(bHalmaz[i]+",");
}
//Halmazművelet 
let paratlan=[];
// A halmaz
for (let i=0;i<aHalmaz.length;i++){
	let szerepelE=false;
	{
		if (aHalmaz[i]%2==0){
			szerepelE=true;
		}
	}
    if (szerepelE==false){
		paratlan.push(aHalmaz[i]);
	}
}

// B halmaz
for (let i=0;i<bHalmaz.length;i++){
	let szerepelE=false;
	{
		if (bHalmaz[i]%2==0){
			szerepelE=true;
		}
	}
    if (szerepelE==false){
		paratlan.push(bHalmaz[i]);
	}
}

document.write("<br>A két halmaz páratlan elemei:");
for(let i=0;i<paratlan.length;i++)
{
	document.write(paratlan[i]+",");
}
</script>




































































