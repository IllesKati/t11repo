<script>
//Négyzet kerület, terület számítása
//Paraméteres, visszatérési érték nélkül

function NegyzetKeruletTerulet(aOldal){
	let kerulet=aOldal*4;
    let terulet=aOldal*aOldal    
    document.write(`A négyzet kerülete: ${kerulet}<br>`);
    document.write(`A négyzet területe: ${terulet}<br>`);
    document.write("<hr>");
}

NegyzetKeruletTerulet(2);
NegyzetKeruletTerulet(8);
NegyzetKeruletTerulet(11);

</script>

