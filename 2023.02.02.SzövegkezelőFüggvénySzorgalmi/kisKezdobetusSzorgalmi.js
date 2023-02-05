<script>
//kiskezdőbetűs szöveg

function InLowerCase(szoveg){
	let kisKezdobetusSzoveg=szoveg[0].toLowerCase();
    for(let i=1;i<szoveg.length;i++){
        	kisKezdobetusSzoveg+=szoveg[i].toLowerCase();
    }
    return kisKezdobetusSzoveg;
}
document.write(InLowerCase("Banán"));
document.write("<hr>");
document.write(InLowerCase("Körte"));
document.write("<hr>");
document.write(InLowerCase("Dinnye"));
 
 
</script>





