<script>
//kiskezdőbetűs szöveg

function CapitalizeV2(szoveg){
	let kisKezdobetusSzoveg=szoveg[0].toLowerCase();
    for(let i=1;i<szoveg.length;i++){
        	kisKezdobetusSzoveg+=szoveg[i].toLowerCase();
    }
    return kisKezdobetusSzoveg;
}
document.write(CapitalizeV2("Banán"));
document.write("<hr>");
document.write(CapitalizeV2("Körte"));
document.write("<hr>");
document.write(CapitalizeV2("Dinnye"));


</script>





