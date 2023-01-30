<script>
function Rn(alsoHatar, felsoHatar){
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
//document.write(Rn(10,20));
function TombGenerator(tombMeret, legkisebbErtek, legnagyobbErtek){
	let generaltTomb=[];
    for(let i=0;i<tombMeret;i++){
    	generaltTomb.push(Rn(legkisebbErtek,legnagyobbErtek));
    }
    return generaltTomb;
}
function TombKiirato(kiirandoTomb, elnevezes){
	document.write(`<br>A ${elnevezes} tömb elemei:`);
	for(let i=0;i<kiirandoTomb.length;i++){
    	document.write(kiirandoTomb[i]+",");
    }
}
let ujTomb=TombGenerator(10,20,60);
TombKiirato(ujTomb,"GeneráltTömb");

//SzerepelE
function SzerepelE(vizsgalandoTomb){
	let osszeg=0;
    for(let i=0;i<vizsgalandoTomb.length;i++)
    {
        osszeg=osszeg=vizsgalandoTomb[i];
    	
    }
    return osszeg;
}
document.write("<br>A tömb utolsó elemének az értéke:"+SzerepelE(ujTomb));

</script>

