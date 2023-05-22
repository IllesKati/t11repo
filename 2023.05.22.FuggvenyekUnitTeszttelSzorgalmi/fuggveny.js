//Négyzet kerület, terület
function NegyzetKerulet(aOldal) {
    return Number((aOldal * 4));
}
function NegyzetTerulet(aOldal) {
    return Number((aOldal * aOldal));
}
//Téglalap kerület, terület
function TeglalapKerulet(aOldal, bOldal) {
    return Number((Number(aOldal) + Number(bOldal)) * 2);
}
function TeglalapTerulet(aOldal, bOldal) {
    return Number((aOldal * bOldal));
}
//Hatványozó
function Hatvanyozo(szam, hatvany) {
    return Number(Math.pow(szam, hatvany));
}
//Kocka felszín
function KockaFelszin(aOldal) {
    return Number(6 * aOldal * aOldal);
}
//Legnagyobb közös osztó
function LegNagyobbKozosOszto(szamEgy, szamKetto) {
    var lnko = 1;
    for (var i = 2; i <= szamEgy; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0)
            lnko = i;
        return lnko;
    }
}
//Nagykezdőbetűs
function Nagybetus(szoveg) {
    var nagyKezdobetusSzoveg = szoveg[0].toUpperCase();
    for (var i = 1; i < szoveg.length; i++) {
        nagyKezdobetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagyKezdobetusSzoveg;
}
//Kiskezdőbetűs
function Kisbetus(szoveg) {
    var nagyKezdobetusSzoveg = szoveg[0].toLowerCase();
    for (var i = 1; i < szoveg.length; i++) {
        nagyKezdobetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagyKezdobetusSzoveg;
}
//Magánhangzók száma
function MaganHangzokSzama(vizsgaltSzoveg) {
    var db = 0;
    var maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"];
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                db++;
            }
        }
    }
    return db;
}
