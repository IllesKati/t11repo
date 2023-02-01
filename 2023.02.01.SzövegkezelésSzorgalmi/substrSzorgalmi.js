<script>
//substr() - kivág egy adott szöveget a karakterláncból, kezdő karakter és a hossza

let egyszeruSzoveg="A kocka el van vetve.";

let kivagottSzoveg=egyszeruSzoveg.substr(2,6);
document.write(kivagottSzoveg);
document.write("<hr>");

let vetomagSzoveg=egyszeruSzoveg.replace("kocka", "vetőmag");
document.write(vetomagSzoveg);
</script>