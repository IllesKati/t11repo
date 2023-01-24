<script>
//Páros létrehozó

function parosLetrehoz(alsoHatar, felsoHatar){
	let also;
	let felso;
      
	if(generaltSzam%2==0){
		    also=alsoHatar;
            felso=felsoHatar;
            
    }
    else{
		    also=felsoHatar;
            felso=alsoHatar;
    }
    
    let generaltSzam=Math.round(Math.random()*100)
    return generaltSzam;
}

function parosLetrehoz(alsoHatar, felsoHatar){
	return generaltSzam=Math.round(Math.random()*100);
}

document.write(parosLetrehoz(1,100));

</script>

