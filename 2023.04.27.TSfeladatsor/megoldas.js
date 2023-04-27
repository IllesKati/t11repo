//1. Diák infó
function DiakInfo(nev, csoport, tipus) {
}
//2. Magatartás - szorgalom
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return "példás";
    }
    else if (jegy == 4) {
        return "jó";
    }
    else if (jegy == 3) {
        return "változó";
    }
    else if (jegy == 2) {
        return "hanyag";
    }
    else {
        return "hibás_adat";
    }
}
var erdemjegy = SzovegesErtekeles(2);
console.log("Az szöveges értékelés eredménye:" + erdemjegy);
//3. Hárommal oszható számok listája
function HarommalOszthatokSzama(vizsgaltTomb) {
    var harommalOszthatokSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatokSzama++;
        }
    }
    return harommalOszthatokSzama;
}
var harommalOszthatokSzama = HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
console.log("A tömbben lévő hárommal osztható elemek mennyisége:" + harommalOszthatokSzama);
