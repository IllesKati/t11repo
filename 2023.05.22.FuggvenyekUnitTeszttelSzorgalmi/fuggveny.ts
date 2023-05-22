//Négyzet kerület, terület

function NegyzetKerulet(aOldal: number): number {
    return Number((aOldal * 4));
}

function NegyzetTerulet(aOldal: number): number {
    return Number((aOldal * aOldal));
}

//Téglalap kerület, terület

function TeglalapKerulet(aOldal: number, bOldal: number): number {
    return Number((Number(aOldal) + Number(bOldal)) * 2);
}

function TeglalapTerulet(aOldal: number, bOldal: number): number {
    return Number((aOldal * bOldal));
}

//Hatványozó

function Hatvanyozo(szam: number, hatvany: number): number {
    return Number(szam ** hatvany);
}

//Kocka felszín

function KockaFelszin(aOldal: number): number {
    return Number(6 * aOldal * aOldal);
}

//Legnagyobb közös osztó

function LegNagyobbKozosOszto(szamEgy: number, szamKetto: number): number {
    let lnko = 1;
    for (let i = 2; i <= szamEgy; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0)
            lnko = i;
        return lnko;
    }
}

//Nagykezdőbetűs

function Nagybetus(szoveg: string): string {
    let nagyKezdobetusSzoveg = szoveg[0].toUpperCase();
    for (let i = 1; i < szoveg.length; i++) {
        nagyKezdobetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagyKezdobetusSzoveg;
}

//Kiskezdőbetűs

function Kisbetus(szoveg: string): string {
    let nagyKezdobetusSzoveg = szoveg[0].toLowerCase();
    for (let i = 1; i < szoveg.length; i++) {
        nagyKezdobetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagyKezdobetusSzoveg;
}


//Magánhangzók száma

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    let db = 0;
    let maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"];
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                db++;
            }
        }
    }
    return db;
}












