<script>
//Négyzet kerület és terület számítása
//Paraméteres Függvény

function NegyzetKeruletTerulet(aOldal){
	let kerulet=aOldal*4;
    let terulet=aOldal*aOldal;
	document.write("<hr>");
    document.write(`A négyzet kerülete: ${kerulet}<br>`);
    document.write(`A négyzet területe: ${terulet}<br>`);
}
NegyzetKeruletTerulet(4);
NegyzetKeruletTerulet(10);
NegyzetKeruletTerulet(21);
NegyzetKeruletTerulet(30);

</script>
