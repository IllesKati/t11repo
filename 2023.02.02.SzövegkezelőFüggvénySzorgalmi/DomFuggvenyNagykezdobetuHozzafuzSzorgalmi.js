<script>
//Nagykezdőbetűs
function Capitalize(szoveg){
	let nagyKezdobetusSzoveg=szoveg[0].toUpperCase();
    for(let i=1;i<szoveg.length;i++){
        	nagyKezdobetusSzoveg+=szoveg[i].toLowerCase();
    }
    return nagyKezdobetusSzoveg;
}
document.write(Capitalize("javascript"));
document.write("<hr>");

//Concat
function hozzaFuz(szoveg){
	let ujSzoveg=szoveg[0].concat();
    for(let i=1;i<szoveg.length;i++){
        	ujSzoveg+=szoveg[i].concat();
    }
    return ujSzoveg;
}
document.write(hozzaFuz("mert annyira szeretjük! :)"));
document.write("<hr>");

</script>

