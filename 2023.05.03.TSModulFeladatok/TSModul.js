//1. feladat
function Rng(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}
console.log("A generált random szám: " + Rng(1, 30));
console.log("A generált random szám: " + Rng(20, 50));
console.log("A generált random szám: " + Rng(30, 100));
//2. feladat
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
var VizsgaltTomb = TombGenerator(10, 1, 30);
console.log("A generált tömb elemei: " + VizsgaltTomb);
//3. feladat
function Duplazo(array) {
    return array.map(function (element) { return element * 2; });
}
var duplaSzamok = Duplazo([3, 10, 5]);
console.log(duplaSzamok);
//4. feladat
function PrimekSzama(VizsgaltTomb) {
    var primSzam = 0;
    for (var i = 0; i < VizsgaltTomb.length; i++) {
        var primSzam1 = true;
        if (VizsgaltTomb[i] < 2) {
            primSzam1 = false;
        }
        else {
            for (var j = 2; j <= Math.sqrt(VizsgaltTomb[i]); j++) {
                if (VizsgaltTomb[i] % j === 0) {
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
var primSzam = PrimekSzama([3, 7, 5]);
console.log("A tömbben található prímszámok darabszáma: " + primSzam);
//5. feladat
//function EgyediElemek(VizsgaltTomb: number[]): Array<number> {
