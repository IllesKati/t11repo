//Érdemjegy szöveges értékelés

function szovegesErtekeles(jegy: number): [string] {
    if (jegy == 5) {
        return ["Jeles"];
    }
    else if (jegy == 4) {
        return ["Jó"];
    }
    else if (jegy == 3) {
        return ["Közepes"];
    }
    else if (jegy == 2) {
        return ["Elégséges"];
    }
    else if (jegy == 1) {
        return ["Elégtelen"];
    }
    else {
        return ["Hibás adat"];
    }
}


//Koordinata rendszer

function koordinataRendszer(x: number, y: number): string {
    if (x > 0 && y > 0) {
        return ("Az x és y koordináta az első síknegyedben van.");
    }
    else if (x < 0 && y > 0) {
        return ("Az x és y koordináta a második síknegyedben van.");
    }
    else if (x < 0 && y < 0) {
        return ("Az x és y koordináta a harmadik síknegyedben van.");
    }
    else if (x > 0 && y < 0) {
        return ("Az x és y koordináta a negyedik síknegyedben van.");
    }
    else if (x == 0 && y == 0) {
        return ("Az x és y koordináta az origóban van.");
    }
    else if (y == 0) {
        return ("Az x és y koordináta az x tengelyen van.");
    }
    else {
        return ("Az x és y koordináta az y tengelyen van.");
    }
}


//Testtömeg index

function testTomegIndex(suly: number, magassag: number): string {
    let TTI: number = suly / (magassag * magassag);
    if (TTI < 16) {
        return "Súlyos soványság";
    }
    else if (TTI < 17) {
        return "Mérsékelt soványság";
    }
    else if (TTI < 18.5) {
        return "Enyhe soványság";
    }
    else if (TTI < 25) {
        return "Normális testsúly";
    }
    else if (TTI < 30) {
        return "Túlsúlyos";
    }
    else if (TTI < 35) {
        return "I. fokú elhízás";
    }
    else if (TTI < 40) {
        return "II. fokú elhízás";
    }
    else {
        return "III. fokú súlyos elhízás";
    }
}

//Terjedelem

function Terjedelem(vizsgaltTomb: number[]): number {
    var minErtek: number = vizsgaltTomb[0];
    var maxErtek: number = vizsgaltTomb[0];
    for (var i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] < minErtek) {
            minErtek = vizsgaltTomb[i];
        }
        else if (vizsgaltTomb[i] > maxErtek) {
            maxErtek = vizsgaltTomb[i];
        }
        else { }
    }
    return maxErtek - minErtek;
}

//Hárommal oszthatóak száma

function HarommalOszthatokSzama(vizsgalandoTomb: number[]): number {
    var harommalOszhatoakSzama: number = 0;
    for (var i: number = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 3 == 0) {
            harommalOszhatoakSzama++;
        }
    }
    return harommalOszhatoakSzama;
}

