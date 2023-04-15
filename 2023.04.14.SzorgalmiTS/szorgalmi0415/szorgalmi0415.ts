//Téglalap kerület

function TeglalapKerulet(aOldal: number, bOldal: number) {
    console.log("A téglalap kerülete: " + (aOldal + bOldal) * 2);
}
TeglalapKerulet(5, 3);


//Téglalap területe

function TeglalapTerulet(aOldal: number, bOldal: number) {
    console.log("A téglalap területe: " + (aOldal * bOldal));
}
TeglalapTerulet(8, 9);


//Kör kerület

function KorKerulet(radius: number) {
    console.log("A kör kerülete: " + (2 * radius * Math.PI));
}
KorKerulet(8);


//Kör terület

function KorTerulet(radius: number) {
    console.log("A kör területe: " + (radius * radius * Math.PI));
}
KorTerulet(8);


//Számok visszafelé 10-től 0-ig

for (let i = 10; i >= 0; i--) {
    console.log(`"Számok visszafelé: " ${i},`);
}


//Hatványozás

function Hatvany(szam: number, hatvany: number) {
    console.log("Hatványozás: " + (szam ** hatvany));
}
Hatvany(2, 3);
Hatvany(5, 3);


//Kiírja az első 5 négyzetszámot

for (let i = 1; i <= 5; i++) {
    console.log(`"Négyzetszámok: "${i * i},`);
}


//Hosszellenőr

function hosszEllenor(szoveg: string) {
    {
        if (szoveg.length < 8) {
            return false;
        }
        return true;
    }
}

console.log("Az első szöveg tesztje: " + hosszEllenor("tavasz"));
console.log("A második szöveg tesztje: " + hosszEllenor("TypeScript"));


//Tömbterjedelem

function tombTerjedelem(vizsgalandoTomb: number) {
    let minErtek: number = vizsgalandoTomb[0];
    let maxErtek: number = vizsgalandoTomb[0];
    for (let i: number = 0; i < vizsgalandoTomb; i++) {
        if (vizsgalandoTomb[i] < minErtek) {
            minErtek = vizsgalandoTomb[i];
        }
        else if (vizsgalandoTomb[i] > maxErtek) {
            maxErtek = vizsgalandoTomb[i];
        }
        else { }
    }
    return maxErtek - minErtek;
}
let vizsgalandoTomb = [3, 5, 10, 16, 9];
console.log(vizsgalandoTomb);


//Pozitív, negatív, nulla
//-10 és +10 közötti egész érték

let generaltSzam1 = Math.round((Math.random() * 20) - 10);

if (generaltSzam1 > 0) {
    console.log(`A ${generaltSzam1} pozitív`);
}
else if (generaltSzam1 < 0) {
    console.log(`A ${generaltSzam1} negatív`);
}
else {
    console.log(`A ${generaltSzam1} szám nulla`);
}


//Kocka felszín

function KockaFelszin(aOldal: number) {
    let eredmeny = 0;
    eredmeny = 6 * aOldal * aOldal;
    {
        return eredmeny;
    }
}
let KockaFelszin1 = (2);
let KockaFelszin2 = (3);
let KockaFelszin3 = (5);
console.log("A kocka felszíne: " + KockaFelszin(KockaFelszin1));
console.log("A kocka felszíne: " + KockaFelszin(KockaFelszin2));
console.log("A kocka felszíne: " + KockaFelszin(KockaFelszin3));


//Kocka térfogat

function KockaTerfogat(aOldal: number) {
    let eredmeny = 0;
    eredmeny = aOldal * aOldal * aOldal;
    {
        return eredmeny;
    }
}
let KockaTerfogat1 = (2);
let KockaTerfogat2 = (3);
let KockaTerfogat3 = (5);
console.log("A kocka térfogata: " + KockaTerfogat(KockaTerfogat1));
console.log("A kocka térfogata: " + KockaTerfogat(KockaTerfogat2));
console.log("A kocka térfogata: " + KockaTerfogat(KockaTerfogat3));


//PHérték

function PhErtek(vizsgaltErtek: number) {
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
let PhErtek1 = (9);
let PhErtek2 = (5.5);
let PhErtek3 = (7);
console.log("A vizsgált PHérték: " + PhErtek(PhErtek1));
console.log("A vizsgált PHérték: " + PhErtek(PhErtek2));
console.log("A vizsgált PHérték: " + PhErtek(PhErtek3));


//Magánhangzók száma

function MaganHangzokSzama(vizsgaltSzoveg: string) {
    let db = 0;
    let maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U", "Ú", "Ü", "Ű"];
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                db++;
            }
        }
    }
    return db;
}

console.log(+ MaganHangzokSzama("Szeretem a programozást"));
console.log(+ MaganHangzokSzama("Géza kék az ég"));
console.log(+ MaganHangzokSzama("Répa, retek, mogyoró"));


//Halmazműveletes SzerepelE függvény
//tömb generálása és megjelenítése

function Halmazok(aHalmaz: number, bHalmaz: number): void { }
let aHalmaz = [];
let bHalmaz = [];
for (let i = 0; i < 10; i++) {
    aHalmaz.push(Math.round(Math.random() * 20));
}
for (let i = 0; i < 10; i++) {
    bHalmaz.push(Math.round(Math.random() * 20));
}
console.log("A generált halmazok elemei:");
console.log("A halmaz:");
for (let i = 0; i < aHalmaz.length; i++) {
    console.log(aHalmaz[i] + ",");
}
console.log("B halmaz:");
for (let i = 0; i < bHalmaz.length; i++) {
    console.log(bHalmaz[i] + ",");
}

//A két halmaz páratlan elemei

let paratlan = [];
// A halmaz

for (let i = 0; i < aHalmaz.length; i++) {
    let szerepelE = false;
    {
        if (aHalmaz[i] % 2 == 0) {
            szerepelE = true;
        }
    }
    if (szerepelE == false) {
        paratlan.push(aHalmaz[i]);
    }
}

// B halmaz

for (let i = 0; i < bHalmaz.length; i++) {
    let szerepelE = false;
    {
        if (bHalmaz[i] % 2 == 0) {
            szerepelE = true;
        }
    }
    if (szerepelE == false) {
        paratlan.push(bHalmaz[i]);
    }
}

console.log("A két halmaz páratlan elemei:");
for (let i = 0; i < paratlan.length; i++) {
    console.log(paratlan[i] + ",");
}

//Metszet
//A két halmaz utolsó 5 eleme

let metszet = [];
for (let i = 5; i < aHalmaz.length; i++) {
    for (let j = 5; j < bHalmaz.length; j++) {
        if (aHalmaz[i] == bHalmaz[j]) {
            let szerepelE = false;
            for (let k = 0; k < metszet.length; k++) {
                if (aHalmaz[i] == metszet[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                metszet.push(aHalmaz[i]);
            }
        }
    }
}
console.log("METSZET:");
for (let i = 0; i < metszet.length; i++) {
    console.log(metszet[i] + ",");
}


//Halmazművelet UNIO
//A két halmaz utolsó 5 eleme

let unio = [];

// A halmaz
for (let i = 5; i < aHalmaz.length; i++) {
    let szerepelE = false;
    for (let j = 0; j < unio.length; j++) {
        if (aHalmaz[i] == unio[j]) {
            szerepelE = true;
        }
    }
    if (szerepelE == false) {
        unio.push(aHalmaz[i]);
    }
}


// B halmaz
for (let i = 5; i < bHalmaz.length; i++) {
    let szerepelE = false;
    for (let j = 0; j < unio.length; j++) {
        if (bHalmaz[i] == unio[j]) {
            szerepelE = true;
        }
    }
    if (szerepelE == false) {
        unio.push(bHalmaz[i]);
    }
}

console.log("UNIO:");
for (let i = 0; i < unio.length; i++) {
    console.log(unio[i] + ",");
}


//Magatartás jegy szöveges értékeléssel

let jegy: any = prompt("Add meg a magatartás érdemjegyet:");
if (jegy == 5) {
    console.log("Példás");
}
else if (jegy == 4) {
    console.log("Jó");
}
else if (jegy == 3) {
    console.log("Változó");
}
else if (jegy == 2) {
    console.log("Rossz");
}
else {
    console.log("Hibás adat!");
}