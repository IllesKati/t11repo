<script>
//Kör kerület és terület számítása
//Paraméteres függvény
function KorKeruletTerulet(radius, MathPI){
	let kerulet=2*radius*Math.PI;
    let terulet=radius*radius*Math.PI;
	document.write("<hr>");
    document.write(`A ${radius},${Math.PI} oldalú kör kerülete: ${kerulet}<br>`);
    document.write(`A ${radius},${Math.PI} oldalú kör területe: ${terulet}<br>`);
}
KorKeruletTerulet(2);
KorKeruletTerulet(4);
KorKeruletTerulet(10);

</script>
