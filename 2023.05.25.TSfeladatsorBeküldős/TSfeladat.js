//EkezetesBetukSzama(modositandoSzoveg)
//Készíts egy függvényt ami a kapott szövegben megszámolja, mennyi ékezetes betű van benne.
function EkezetesBetukSzama(vizsgaltSzoveg) {
    var db = 0;
    var maganHangzok = ["á", "é", "i", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                db++;
            }
        }
    }
    return db;
}
//camelCaseGenerator(modositandoSzoveg)
//Készíts egy függvényt, ami a bemenetinek kapott szövegből camelCase szöveget hoz létre!
function camelCaseGenerator(modositandoszoveg) {
    var camelCaseSzoveg = modositandoszoveg[0];
    for (var i = 1; i < modositandoszoveg.length; i++) {
        modositandoszoveg = modositandoszoveg[i][0].toUpperCase() + modositandoszoveg[i].substring(1);
        return camelCaseSzoveg;
    }
}
//PrimLista(vizsgaltTomb)
//Készíts egy függvényt, ami kiírja melyek a prímszámok a vizsgált tömbödben, ha van ilyen, ha nincs akkor térjen vissza a "Nincs prímszám a tömbben" szöveggel
function PrimekLista(vizsgaltTomb) {
    var primekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekSzama++;
        }
    }
    return primekSzama;
}
