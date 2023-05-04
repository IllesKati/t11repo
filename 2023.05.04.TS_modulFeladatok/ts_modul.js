function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek < 7) {
        return "savas";
    }
    else if (vizsgaltErtek == 7) {
        return "semleges";
    }
    else {
        return "lugos";
    }
}
function PrimekSzama(vizsgaltTomb) {
    var primSzam = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var primSzam1 = true;
        if (vizsgaltTomb[i] < 2) {
            primSzam1 = false;
        }
        else {
            for (var j = 2; j <= Math.sqrt(vizsgaltTomb[i]); j++) {
                if (vizsgaltTomb[i] % j === 0) {
                    primSzam1 = false;
                    break;
                }
            }
        }
        if (primSzam1) {
            primSzam++;
        }
    }
    return primSzam;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var db = 0;
    var maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U", "Ú", "Ü", "Ű"];
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                db++;
            }
        }
    }
    return db;
}
