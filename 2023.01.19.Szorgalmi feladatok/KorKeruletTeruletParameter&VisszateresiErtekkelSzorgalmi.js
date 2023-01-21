<script>
//Kör kerület és terület számítása
//Paraméteres Függvény, visszatérési értékkel

function KorKerulet(radius, MathPI){	
     let kerulet=2*radius*Math.PI;
     return kerulet;
}
function KorTerulet(radius, MathPI){
	 let terulet=radius*radius*Math.PI;
     return terulet;
}
function Kiirato(szoveg, szam){
	document.write(szoveg+":"+szam+"<br>");
}

Kiirato("A kör kerülete", KorKerulet(5));
Kiirato("A kör területe", KorTerulet(3));

</script>