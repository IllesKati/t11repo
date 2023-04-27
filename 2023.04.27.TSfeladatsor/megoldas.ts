//1. Diák infó
function DiakInfo(nev: string, csoport: number, tipus: boolean): any {
}






//2. Magatartás - szorgalom
function SzovegesErtekeles(jegy: number): string {
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
let erdemjegy: string = SzovegesErtekeles(2);
console.log("Az szöveges értékelés eredménye:" + erdemjegy);


//3. Hárommal oszható számok listája
function HarommalOszthatokSzama(vizsgaltTomb: number[]): number {
    let harommalOszthatokSzama: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatokSzama++;
        }
    }
    return harommalOszthatokSzama;
}
let harommalOszthatokSzama: number = HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
console.log("A tömbben lévő hárommal osztható elemek mennyisége:" + harommalOszthatokSzama);