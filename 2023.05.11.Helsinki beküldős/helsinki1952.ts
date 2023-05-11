var eredmenyek: string[] = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];
interface helsinkiElem {
    helyezes: number;
    sportolokSzama: number;
    sportag: string;
    versenyszam: string;
}
function Objektumfeltolto(feltoltendoElem: string[]): helsinkiElem[] {
    var beolvasottAdatok: helsinkiElem[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let darabolandoSor: string[] = feltoltendoElem[i].split(" ");
        let objektum: helsinkiElem = {
            helyezes: Number(darabolandoSor[0]),
            sportolokSzama: Number(darabolandoSor[1]),
            sportag: String(darabolandoSor[2]),
            versenyszam: String(darabolandoSor.slice(3).join(" ")),
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var helsinkiAdatok: helsinkiElem[] = Objektumfeltolto(eredmenyek);

function AdatKiiro(adatok: helsinkiElem[]): void {
    for (let i: number = 0; i < adatok.length; i++) {
        console.log(adatok[i].helyezes + ";" + adatok[i].sportolokSzama + " " + adatok[i].sportag + " " + adatok[i].versenyszam);
    }
}
AdatKiiro(helsinkiAdatok);

//3. feladat

function pontszerzokSzama(adatok: helsinkiElem[]): void {
    console.log("3. feladat: Pontszerző helyezések száma: " + adatok.length);
}

pontszerzokSzama(helsinkiAdatok);

//6. feladat

function LegtobbErem(adatok: helsinkiElem[]): void {
    let maxIndex: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes > adatok[maxIndex].helyezes) {
            maxIndex = i;
        }
    }
    console.log("6. feladat: A legtöbb érmet szerző sportág: " + adatok[maxIndex].sportag);

}
LegtobbErem(helsinkiAdatok);


