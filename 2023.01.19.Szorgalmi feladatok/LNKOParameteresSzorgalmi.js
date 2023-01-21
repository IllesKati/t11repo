<script>
//LNKO
//Paraméteres

function LNKO(szamEgy, szamKetto){
	let lnko=1;
	for(let i=2;i<=szamEgy;i++){
    if(szamEgy%i==0 && szamKetto%i==0){
    	lnko=i;
    }
}
	document.write("<hr>");
    document.write(`A ${szamEgy} és ${szamKetto} legnagyobb közös osztója: ${lnko}`);
}
LNKO(4,3);
LNKO(10,2);
LNKO(21,4);
LNKO(33,69);
LNKO(50,80);
</script>

