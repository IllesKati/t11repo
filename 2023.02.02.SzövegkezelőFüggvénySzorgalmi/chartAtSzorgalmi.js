<script>
let egyszeruSzoveg="Szeretem a pisztáciás fagyit, mert az olyan vadítóan Jóóóóóóóóó";

//charAt - Adott indexű karakterrel tér vissza
let adottKarakter=egyszeruSzoveg.charAt(53);//Első karakter
let adottKarakter2=egyszeruSzoveg.charAt(9);//Második karakter
let adottKarakter3=egyszeruSzoveg.charAt(44);//Harmadik karakter
let adottKarakter4=egyszeruSzoveg.charAt(9);//Negyedik karakter
let adottKarakter5=egyszeruSzoveg.charAt(0);//Örödik karakter
let adottKarakter6=egyszeruSzoveg.charAt(17);//Hatodik karakter
let adottKarakter7=egyszeruSzoveg.charAt(3);//Hetedik karakter
let adottKarakter8=egyszeruSzoveg.charAt(12);//Nyolcadik karakter
let adottKarakter9=egyszeruSzoveg.charAt(11);//Kilencedik karakter
let adottKarakter10=egyszeruSzoveg.charAt(5);//Tizedik karakter
document.write(adottKarakter);
document.write(adottKarakter2);
document.write(adottKarakter3);
document.write(adottKarakter4);
document.write(adottKarakter5);
document.write(adottKarakter6);
document.write(adottKarakter7);
document.write(adottKarakter8);
document.write(adottKarakter9);
document.write(adottKarakter10);
document.write("<hr>");

//includes() - Keresünk egy adott karakterláncot a szövegben
let keresesEredemeny=egyszeruSzoveg.includes("pisztáciás");
document.write(keresesEredemeny+",");
let keresesEredemeny2=egyszeruSzoveg.includes("vadítóan");
document.write(keresesEredemeny2+",");
let keresesEredemeny3=egyszeruSzoveg.includes("vaníliás");
document.write(keresesEredemeny3);
document.write("<hr>");

//indexOf() - Adott kifejezés kezdő karakterének indexét adja vissza
let keresesEredemenyIndexe=egyszeruSzoveg.indexOf("Szeretem");
document.write(keresesEredemenyIndexe+",");
let keresesEredemenyIndexe2=egyszeruSzoveg.indexOf("fagyit");
document.write(keresesEredemenyIndexe2);
document.write("<hr>");

</script>
