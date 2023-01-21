<script>
//LNKO
//Paraméteres Függvény, visszatérési értékkel

function LegNagyobbKozosOszto(szamEgy, szamKetto){	
     let lnko=1;
     for(let i=2;i<=szamEgy;i++){
     if(szamEgy%i==0 && szamKetto%i==0)
    	lnko=i;
        return lnko;
    }
}
     
function Kiirato(szoveg, szam){
	document.write(szoveg+":"+szam+"<br>");
}
Kiirato("A legnagyobb közös osztó", LegNagyobbKozosOszto(3,4));
Kiirato("A legnagyobb közös osztó", LegNagyobbKozosOszto(16,22));
Kiirato("A legnagyobb közös osztó", LegNagyobbKozosOszto(26,59));

</script>





