<script>
//Egész osztó

function egeszOszto(vizsgaltSzam){
	let oszto=0;
    for(let i=1;i<=vizsgaltSzam;i++){
    	if(vizsgaltSzam%i==0){
        	oszto++;
            return true;
        }
    }
	document.write("<hr>");
    if(oszto==2)
    		return true;
    {
    	document.write(`A ${vizsgaltSzam} osztható!<br>`);
    }
    else
    		return false;
    {
    	document.write(`A ${vizsgaltSzam} NEM osztható!<br>`);
    }
egeszOszto(25,5);
egeszOszto(1050,7);
egeszOszto(2048,3);

</script>

