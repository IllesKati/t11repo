const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
];
interface EUelem {
    orszag: string;
    csatlakozas: number;
}


//Hány tagja van az EU-nak?

function TagallamokSzama(EUelem: { orszag: string, csatlakozas: string }[]): void {
    var orszagokSzama: number = EUelem.length;
    console.log(`A tömbben ${orszagokSzama} tagállam van.`);
}
TagallamokSzama(EuropaiUnio);


//Csatlakozott-e Magyarország az EU-hoz?

function CsatlakozottE(EUelem: { orszag: string, csatlakozas: string }[]): void {
    let szerepelE: boolean = false;
    for (let i: number = 0; i < EUelem.length; i++) {
        if (EUelem[i].orszag == "Magyarország") {
            szerepelE = true;
        }
    }
    if (szerepelE == true) {
        console.log("Az országok között szerepelt Magyarország");

    }
    else {
        console.log("Az országok között nincs Magyarország")
    }
}
CsatlakozottE(EuropaiUnio);


//A legutolsó csatlakozó ország

function LegutolsoCsatlakozo(EUelem: { orszag: string, csatlakozas: string }[]): void {
    var maxIndex: number = 0;
    for (let i: number = 0; i < EUelem.length; i++) {
        let aktIndexEv = Number(EUelem[i].csatlakozas.substr(0, 4));
        let maxIndexEv = Number(EUelem[maxIndex].csatlakozas.substr(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxIndex = i;
        }
    }
    console.log("A legutolsó csatlakozó ország neve:" + EUelem[maxIndex].orszag);
    console.log("A legutolsó csatlakozásának dátuma:" + EUelem[maxIndex].csatlakozas);
}
LegutolsoCsatlakozo(EuropaiUnio);


//Hány ország csatlakozott egy adott évben...

function csatlakozottAdottEvUniverzalis(EUelem: { orszag: string, csatlakozas: string }[]): void {
    let adottEvbenCsatlakozottakSzama: number = 0;
    for (let i: number = 0; i < EUelem.length; i++) {
        if (EUelem[i].csatlakozas.substr(0, 4)) {
            adottEvbenCsatlakozottakSzama++;
        }
    }

    console.log(`A 2004-ben csatlakozott államok mennyisége: ${adottEvbenCsatlakozottakSzama}`);
}
csatlakozottAdottEvUniverzalis(EuropaiUnio);


//Volt-e csatlakozás az adott évben?

function voltCsatlakozas2007(EUelem: { orszag: string, csatlakozas: string }[]): void {
    let voltCsatlakozo: boolean = false;
    for (let i: number = 0; i < EUelem.length; i++) {
        if (EUelem[i].csatlakozas.includes("2007")) {
            voltCsatlakozo = true;
        }
    }
    if (voltCsatlakozo) {
        console.log("Volt csatlakozás 2007-ben.");
    } else {
        console.log("Nem volt csatlakozás 2007-ben.");
    }
}
voltCsatlakozas2007(EuropaiUnio);


