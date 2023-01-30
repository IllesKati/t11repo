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
//Halmazművelet: Különbség A/B utolsó 5 elem

let AkulB=[];
for(let i=5;i<aHalmaz.length;i++){
	let vanEgyezes=false;
    for(let j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j])
        {
        	vanEgyezes=true;
        }
    }
    if(vanEgyezes==false){
    	let szerepelE=false;
        for(let k=0;k<AkulB.length;k++){
        	if(aHalmaz[i]==AkulB[k]){
            	szerepelE=true;
            }
        }
        if(szerepelE==false){
        	AkulB.push(aHalmaz[i]);
        }
        
    }
}
document.write("<br>A különbség B halmaz:");
for(let i=0;i<AkulB.length;i++)
{
	document.write(AkulB[i]+",");
}

//Halmazművelet: Különbség B/A


let BkulA=[];
for(let i=5;i<bHalmaz.length;i++){
	let vanEgyezes=false;
    for(let j=0;j<aHalmaz.length;j++){
    	if(bHalmaz[i]==aHalmaz[j])
        {
        	vanEgyezes=true;
        }
    }
    if(vanEgyezes==false){
    	let szerepelE=false;
        for(let k=0;k<BkulA.length;k++){
        	if(bHalmaz[i]==BkulA[k]){
            	szerepelE=true;
            }
        }
        if(szerepelE==false){
        	BkulA.push(bHalmaz[i]);
        }
        
    }
}
document.write("<br>B különbség A halmaz:");
for(let i=0;i<BkulA.length;i++)
{
	document.write(BkulA[i]+",");
}


</script>

