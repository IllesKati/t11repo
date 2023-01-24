<script>
//Hatványozó

function Hatvanyozas(szam, hatvany){	
     let hatvanyozo=Math.pow(szam,hatvany);
     return hatvanyozo;
}

function Kiirato(szoveg, szam){
	document.write(szoveg+":"+szam+"<br>");
}

Kiirato("A két szám hatványának értéke", Hatvanyozas(2,3));
Kiirato("A két szám hatványának értéke", Hatvanyozas(5,3));

</script>

