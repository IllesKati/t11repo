//1. feladat
function Rng(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}
console.log("A generált random szám: " + Rng(1, 30));
console.log("A generált random szám: " + Rng(20, 50));
console.log("A generált random szám: " + Rng(30, 100));



//2. feladat
function TombGenerator(meret: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    for (let i: number = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
var VizsgaltTomb: number[] = TombGenerator(10, 1, 30);
console.log("A generált tömb elemei: " + VizsgaltTomb);



//3. feladat
function Duplazo(array: number[]): number[] {
    return array.map(element => element * 2);
}
var duplaSzamok = Duplazo([3, 10, 5]);
console.log(duplaSzamok);


//4. feladat
function PrimekSzama(VizsgaltTomb: number[]): number {
    let primSzam = 0;

    for (let i = 0; i < VizsgaltTomb.length; i++) {
        let primSzam1 = true;

        if (VizsgaltTomb[i] < 2) {
            primSzam1 = false;
        } else {
            for (let j = 2; j <= Math.sqrt(VizsgaltTomb[i]); j++) {
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

