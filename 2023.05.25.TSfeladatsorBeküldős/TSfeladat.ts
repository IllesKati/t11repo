//EkezetesBetukSzama(modositandoSzoveg)
//Készíts egy függvényt ami a kapott szövegben megszámolja, mennyi ékezetes betű van benne.

function EkezetesBetukSzama(vizsgaltSzoveg: string): number {
    let db = 0;
    let maganHangzok = ["á", "é", "i", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                db++;
            }
        }
    }
    return db;
}

//camelCaseGenerator(modositandoSzoveg)
//Készíts egy függvényt, ami a bemenetinek kapott szövegből camelCase szöveget hoz létre!

function camelCaseGenerator(modositandoszoveg: string): string {
    let camelCaseSzoveg = modositandoszoveg[0];
    for (let i = 1; i < modositandoszoveg.length; i++) {
        modositandoszoveg = modositandoszoveg[i][0].toUpperCase() + modositandoszoveg[i].substring(1);

        return camelCaseSzoveg;
    }
}




//PrimLista(vizsgaltTomb)
//Készíts egy függvényt, ami kiírja melyek a prímszámok a vizsgált tömbödben, ha van ilyen, ha nincs akkor térjen vissza a "Nincs prímszám a tömbben" szöveggel

function PrimekLista(vizsgaltTomb: number[]): number {
    let primekSzama: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 1; j <= vizsgaltTomb[i]; j++) {
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
