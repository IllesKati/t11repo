<script>
//Számok 1-20-ig
//Paraméterrel

function Szamok(vizsgaltSzamok){
	let oszto=0;
    document.write("A számok meghívása:");
    for(let i=1;i<=vizsgaltSzamok;i++){
	document.write(`${i},`); 
    }
    document.write("<hr>");
}

Szamok(5);
Szamok(20);
Szamok(13);

</script>


