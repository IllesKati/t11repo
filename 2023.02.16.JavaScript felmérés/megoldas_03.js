<script>
//Illés Miklósné Team11
//03. feladat: tombTerjedelem() –Bemeneti paraméterek száma:1(tömb)

let tomb=[];
for(let i=0;i<5;i++){
	let randomSzam=Math.round(Math.random()*20);
    tomb.push(randomSzam);
}

for(let i=0;i<tomb.length;i++){
	document.write(tomb[i]+",");
}
function tombTerjedelem(alsoHatar, felsoHatar){
	let also;
	let felso;    
	if(alsoHatar<felsoHatar){
		    also=alsoHatar;
            felso=felsoHatar;            
    }
    else{
		    also=felsoHatar;
            felso=alsoHatar;
    }
    let generaltSzam=(Math.round(Math.random()*(felso-also)))+also;  
    return generaltSzam;
}

function tombTerjedelem(tombMeret, legkisebbErtek, legnagyobbErtek){
	let vizsgaltTomb=[];
    for(let i=0;i<tombMeret;i++){
    	generaltTomb.push(Rn(legkisebbErtek,legnagyobbErtek));
    }
    return generaltTomb;
}
function vizsgaltTomb(kiirandoTomb, elnevezes){
	document.write(`<br>A ${elnevezes} tömb elemei:`);
	for(let i=0;i<kiirandoTomb.length;i++){
    	document.write(kiirandoTomb[i]+",");
    }
}





</script>

