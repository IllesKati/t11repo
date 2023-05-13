var pilotaAdat = [
    "Max Verstappen;454;15;8",
    "Charles Leclerc;308;3;8",
    "Sergio Perez;305;2;0",
    "George Russell;275;1;2",
    "Carlos Sainz Jr;246;1;3",
    "Lewis Hamilton;240;0;0",
    "Lando Norris;122;0;0",
    "Esteban Ocon;92;0;0",
    "Fernando Alonso;81;0;0",
    "Valtteri Bottas;49;0;0",
    "Daniel Ricciardo;37;0;0",
    "Sebastian Vettel;37;0;0",
    "Kevin Magnussen;25;0;0",
    "Pierre Gasly;23;0;0",
    "Lance Stroll;18;0;0",
    "Mick Schumacher;12;0;1",
    "Yuki Tsunoda;12;0;0",
    "Guanyu Zhou;6;0;0",
    "Alexander Albon;4;0;0",
    "Nyck de Vries;2;0;0",
    "Nicholas Latifi;2;0;0"
];
function Objektumfeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var darabolandoSor = feltoltendoElem[i].split(";");
        var objektum = {
            pilota: darabolandoSor[0],
            pont: Number(darabolandoSor[1]),
            futamGyozelem: Number(darabolandoSor[2]),
            polePozicio: Number(darabolandoSor[3])
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var f1Adatok = Objektumfeltolto(pilotaAdat);
function AdatKiiro(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        console.log(adatok[i].pilota + ":" + adatok[i].pont + "," + adatok[i].futamGyozelem + "," + adatok[i].polePozicio);
    }
}
//Pilóták száma
function PilotakSzama(adatok) {
    return adatok.length;
}
function PilotakSzamaKiir(pilotakSzama) {
    console.log("A pilóták száma: " + pilotakSzama);
}
PilotakSzamaKiir(PilotakSzama(f1Adatok));
//A legtöbb pontot elért pilóta
function VBbajnok(adatok) {
    var maxIndex = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].pont > adatok[maxIndex].pont) {
            maxIndex = i;
        }
    }
    console.log("A legtöbb pontot szerző pilóta: " + adatok[maxIndex].pilota);
}
VBbajnok(f1Adatok);
//A legkevesebb pontot elért pilóta
function VBbajnok1(adatok) {
    var maxIndex = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].pont < adatok[maxIndex].pont) {
            maxIndex = i;
        }
    }
    console.log("A legkevesebb pontot szerző pilóta: " + adatok[maxIndex].pilota);
}
VBbajnok1(f1Adatok);
//Szerepel-e Fernando Alonso a pilóták között?
function VanEAlonso(adatok) {
    var szerepelE = false;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].pilota == "Fernando Alonso") {
            szerepelE = true;
        }
    }
    if (szerepelE == true) {
        console.log("Fernando Alonso szerepel a pilóták között.");
    }
    else {
        console.log("Nem szerepel a pilóták között.");
    }
}
VanEAlonso(f1Adatok);
//Futamgyőzelmek összesen
function FutamGyozelmekSzama(adatok) {
    var arany = 0;
    for (var i = 0; i < adatok.length; i++) {
        arany = arany + adatok[i].futamGyozelem;
    }
    return [arany];
}
function FutamGyozelmekKiir(eremMennyiseg) {
    console.log("Futamgyőzelmek száma összesen: " + eremMennyiseg[0]);
}
FutamGyozelmekKiir(FutamGyozelmekSzama(f1Adatok));
//George Russell vagy Lewis Hamilton szerzett több pontot a VB alatt?
function RusselVsHamilton(adatok) {
    var russel = 0;
    var hamilton = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].pilota == "russel" && adatok[i].pont <= 0) {
            russel++;
        }
        else if (adatok[i].pilota == "hamilton" && adatok[i].pont <= 0) {
            hamilton++;
        }
        else { }
    }
    if (russel > hamilton) {
        return "max";
    }
    else if (hamilton > russel) {
        return "hamilton";
    }
    return "egyenlo";
}
function RusselVsHamiltonKiir(gyakoribb) {
    if (gyakoribb <= "russel") {
        console.log("A VB alatt George Russell több pontot szerzett, mint Lewis Hamilton.");
    }
    else if (gyakoribb <= "hamilton") {
        console.log("A VB alatt Lewis Hamilton több pontot szerzett, mint George Russel.");
    }
    else {
        console.log("Egyenlő volt a pontok száma");
    }
}
RusselVsHamiltonKiir(RusselVsHamilton(f1Adatok));
//Írja ki mennyi a résztvevő pilóták átlagpontszáma
function Atlagpontszam(adatok) {
    var osszeg = 0;
    for (var i = 0; i < adatok.length; i++) {
        osszeg += Number(adatok[i].pont);
    }
    console.log("A pil\u00F3t\u00E1k \u00E1tlag pontsz\u00E1ma: ".concat(osszeg / adatok.length, " pont"));
}
Atlagpontszam(f1Adatok);
//Listázza ki azokat a pilótákat, akik az átlagnál több pontot értek el!
function AtlagPont(adatok) {
    var osszeg = 0;
    for (var i = 0; i < adatok.length; i++) {
        osszeg += Number(adatok[i].pont);
    }
    return osszeg / adatok.length;
}
var atlagosPontszam = AtlagPont(f1Adatok);
function AtlagFelettiek(adatok) {
    console.log("Az atlagnál több pontot szerző versenyzők: ");
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].pont >= atlagosPontszam) {
            console.log("\t " + adatok[i].pilota);
        }
    }
}
AtlagFelettiek(f1Adatok);
