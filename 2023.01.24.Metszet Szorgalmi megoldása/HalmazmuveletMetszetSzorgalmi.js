<script>
//Tömb generálása és megjelenítése
let tomb1=[];
let tomb2=[];
for(let i=0;i<10;i++){
let randomSzam=Math.round(Math.random()*20);
	tomb1.push(randomSzam);
}
for(let i=0;i<10;i++){
let randomSzam=Math.round(Math.random()*20);
	tomb2.push(randomSzam);
}
document.write("A generált tömbök elemei:");
document.write("<br>tomb1:");
for(let i=0;i<tomb1.length;i++)
{
	document.write(tomb1[i]+",");
}
document.write("<br>tomb2:");
for(let i=0;i<tomb2.length;i++)
{
	document.write(tomb2[i]+",");
}

//Halmazművelet metszet, a második ábra alapján
let metszet=[];
for (let i=0;i<tomb1.length;i++){
	for (let j=0;j<tomb2.length;j++){
		if (tomb1[i]==tomb2[j]){
			szerepelE=false;
		}
      
}
for (let k=0;k<metszet.length;k++){
		if (tomb1[i]==metszet[k]){
			szerepelE==true;
		}
	}
    if (szerepelE==false){
		metszet.push(tomb1[i]);
	}
}
{	
document.write("<br>metszet:");
}

for(let i=0;i<metszet.length;i++)
{
	document.write(metszet[i]+",");
}

</script>







































