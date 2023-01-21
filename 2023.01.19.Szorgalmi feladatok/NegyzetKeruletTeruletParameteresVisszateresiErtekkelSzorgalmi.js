<script>
//Négyzet kerület és terület számítása
//Paraméteres Függvény, visszatérési értékkel

function NegyzetKerulet(aOldal){	
     let kerulet=aOldal*4;
     return kerulet;
}
function NegyzetTerulet(aOldal){
	let terulet=aOldal*aOldal;
     return aOldal*aOldal;
}

function Kiirato(szoveg, szam){
	document.write(szoveg+":"+szam+"<br>");
}

Kiirato("A négyzet kerülete", NegyzetKerulet(7));
Kiirato("A négyzet területe", NegyzetTerulet(7));
</script>