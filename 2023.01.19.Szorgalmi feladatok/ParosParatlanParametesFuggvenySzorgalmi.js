<script>
//Páros és páratlan számok
//Paraméterrel

function ParosParatlan(vizsgaltSzam){
	let szam=1;
    for(let i=0;i<vizsgaltSzam;i++){
    	if(szam%2==0){
        	szam++;
        }
    }
    document.write("<hr>");
    if(szam%2==0){
    	document.write(`A ${vizsgaltSzam} páros!<br>`);
    }
    else{
    	document.write(`A ${vizsgaltSzam} páratlan!<br>`);
    }
}
	
ParosParatlan(8);
ParosParatlan(23);
ParosParatlan(32);
ParosParatlan(37);
ParosParatlan(42);

</script>



