<script>
//Pozitív, negatív
function PozNeg(vizsgaltSzam){
	let generaltSzam=vizsgaltSzam*20-10;
    for(let i=0;i<vizsgaltSzam;i++){
    	if(generaltSzam>0){
		document.write(`A ${generaltSzam} pozitív`);
        	generaltSzam++;
        }
    }
	document.write("<hr>");  
    if(generaltSzam<0){
    	document.write(`A ${generaltSzam} negatív`);
    }
}
PozNeg(5);
PozNeg(-3);
PozNeg(-1);


</script>


