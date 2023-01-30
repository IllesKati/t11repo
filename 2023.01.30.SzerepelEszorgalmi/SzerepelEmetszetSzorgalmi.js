<script>
//Tömb generálása és megjelenítése
let aHalmaz=[];
let bHalmaz=[];
for(let i=0;i<10;i++){
	aHalmaz.push(Math.round(Math.random()*20));
}
for(let i=0;i<10;i++){
	bHalmaz.push(Math.round(Math.random()*20));
}
document.write("A generált halmazok elemei:");
document.write("<br>A halmaz:");
for(let i=0;i<aHalmaz.length;i++)
{
	document.write(aHalmaz[i]+",");
}
document.write("<br>B halmaz:");
for(let i=0;i<bHalmaz.length;i++)
{
	document.write(bHalmaz[i]+",");
}

//Halmazművelet UNIO
//A két halmaz utolsó 5 eleme
let unio=[];
// A halmaz
for (let i=5;i<aHalmaz.length;i++){
	let szerepelE=false;
	for (let j=0;j<unio.length;j++){
		if (aHalmaz[i]==unio[j]){
			szerepelE=true;
		}
	}
    if (szerepelE==false){
		unio.push(aHalmaz[i]);
	}
}


// B halmaz
for (let i=5;i<bHalmaz.length;i++){
	let szerepelE=false;
	for (let j=0;j<unio.length;j++){
		if (bHalmaz[i]==unio[j]){
			szerepelE=true;
		}
	}
    if (szerepelE==false){
		unio.push(bHalmaz[i]);
	}
}

document.write("<br>UNIO:");
for(let i=0;i<unio.length;i++)
{
	document.write(unio[i]+",");
}
//Metszet, utolsó 5 elem
let metszet=[];
for(let i=5;i<aHalmaz.length;i++)
{
	for(let j=5;j<bHalmaz.length;j++)
    {
    	if(aHalmaz[i]==bHalmaz[j])
        {
        	let szerepelE=false;
            for(let k=0;k<metszet.length;k++)
            {
            	if(aHalmaz[i]==metszet[k])
                {
                	szerepelE=true;
                }
            }
            if(szerepelE==false){
            	metszet.push(aHalmaz[i]);
            }
        }
    }
}
document.write("<br>METSZET:");
for(let i=0;i<metszet.length;i++)
{
	document.write(metszet[i]+",");
}


</script>

