function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}

function teszt01() {
    try {
        let tesztElem = document.querySelector("div");
        if (tesztElem.classList == "container") {
            ujVisszajelzoSor("Legkülső div elem azonosító", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Legkülső div elem azonosító", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Legkülső div elem azonosító", "HIBA");
    }
}

function teszt02() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.innerHTML == "Tanfolyam regisztráció") {
            ujVisszajelzoSor("1-es szintű címsor  tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("1-es szintű címsor  tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("1-es szintű címsor  tartalma", "HIBA");
    }
}

function teszt03() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[0].type == "text") {
            ujVisszajelzoSor("Első input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező típusa", "HIBA");
    }
}

function teszt04() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[0].id == "veznev") {
            ujVisszajelzoSor("Első input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező azonosítója", "HIBA");
    }
}

function teszt05() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Első input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező bootsrap osztálya", "HIBA");
    }
}

function teszt06() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[0].type == "text") {
            ujVisszajelzoSor("Második input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező típusa", "HIBA");
    }
}

function teszt07() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[1].id == "kernev") {
            ujVisszajelzoSor("Második input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező azonosítója", "HIBA");
    }
}
function teszt08() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Második input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező bootsrap osztálya", "HIBA");
    }
}

function teszt09() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[0].type == "text") {
            ujVisszajelzoSor("Harmadik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező típusa", "HIBA");
    }
}

function teszt10() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[2].id == "fnev") {
            ujVisszajelzoSor("Harmadik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező azonosítója", "HIBA");
    }
}

function teszt11() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Harmadik input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező bootsrap osztálya", "HIBA");
    }
}

function teszt12() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[3].type == "password") {
            ujVisszajelzoSor("Negyedik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező típusa", "HIBA");
    }
}

function teszt13() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[3].id == "pass1") {
            ujVisszajelzoSor("Negyedik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező azonosítója", "HIBA");
    }
}

function teszt14() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Negyedik input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező bootsrap osztálya", "HIBA");
    }
}

function teszt15() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[3].type == "password") {
            ujVisszajelzoSor("Ötödik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező típusa", "HIBA");
    }
}

function teszt16() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[4].id == "pass2") {
            ujVisszajelzoSor("Ötödik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező azonosítója", "HIBA");
    }
}

function teszt17() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Ötödik input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező bootsrap osztálya", "HIBA");
    }
}

function teszt18() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[5].id == "email") {
            ujVisszajelzoSor("Hatodik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező azonosítója", "HIBA");
    }
}

function teszt19() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[5].type == "email") {
            ujVisszajelzoSor("Hatodik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező típusa", "HIBA");
    }
}

function teszt20() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Hatodik input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező bootsrap osztálya", "HIBA");
    }
}

function teszt21() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[6].type == "text") {
            ujVisszajelzoSor("Hetedik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező típusa", "HIBA");
    }
}

function teszt22() {
    try {
        let tesztElem = document.querySelectorAll("input");
        if (tesztElem[6].id == "tel") {
            ujVisszajelzoSor("Hetedik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező azonosítója", "HIBA");
    }
}

function teszt23() {
    try {
        let tesztElem = document.querySelector("input");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Hetedik input mező bootsrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező bootsrap osztálya", "HIBA");
    }
}

function teszt24() {
    try {
        let tesztElem = document.querySelector("small");
        if (tesztElem.classList.contains("form-text") && tesztElem.classList.contains("text-muted")) {
            ujVisszajelzoSor("Felhasználói név alatti üzenet osztályai ", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Felhasználói név alatti üzenet osztályai ", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Felhasználói név alatti üzenet osztályai", "HIBA");
    }
}

function teszt25() {
    try {
        let tesztElem = document.querySelector("small");
        if (tesztElem.innerHTML == "Beceneve, mely mások számára is látható.") {
            ujVisszajelzoSor("Felhasználói név alatti üzenet tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Felhasználói név alatti üzenet tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Felhasználói név alatti üzenet tartalma", "HIBA");
    }
}

function teszt26() {
    try {
        let tesztElem = document.querySelector("small");
        if (tesztElem.classList.contains("form-text") && tesztElem.classList.contains("text-muted")) {
            ujVisszajelzoSor("E-mail mező alatti üzenet osztályai ", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("E-mail mező alatti üzenet osztályai ", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("E-mail mező alatti üzenet osztályai", "HIBA");
    }
}

function teszt27() {
    try {
        let tesztElem = document.querySelector("small");
        if (tesztElem.innerHTML == "Ide továbbítjuk a legfontosabb tanfolyam információkat önnek.") {
            ujVisszajelzoSor("E-mail mező alatti üzenet tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("E-mail mező alatti üzenet tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("E-mail mező alatti üzenet tartalma", "HIBA");
    }
}

function teszt28() {
    try {
        let tesztElem = document.querySelector("small");
        if (tesztElem.classList.contains("form-text") && tesztElem.classList.contains("text-muted")) {
            ujVisszajelzoSor("Telefon mező alatti üzenet osztályai ", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Telefon mező alatti üzenet osztályai ", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Telefon mező alatti üzenet osztályai", "HIBA");
    }
}

function teszt29() {
    try {
        let tesztElem = document.querySelector("small");
        if (tesztElem.innerHTML == "Ha szeretne akár azonnal értesülni a fontosabb hírekről.") {
            ujVisszajelzoSor("Telefon mező alatti üzenet tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Telefon mező alatti üzenet tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Telefon mező alatti üzenet tartalma", "HIBA");
    }
}

function teszt30() {
    try {
        let tesztElem = document.querySelector("button");
        if (tesztElem.classList.contains("btn") && tesztElem.classList.contains("btn-primary") && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "HIBA");
    }
}

function teszt31() {
    try {
        let tesztElem = document.querySelector("button");
        if (tesztElem.classList.contains("btn-primary")) {
            ujVisszajelzoSor("Gomb színe", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb színe", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb színe", "HIBA");
    }
}

function teszt32() {
    try {
        let tesztElem = document.querySelector("button");
        if (tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Gomb méretének módosítása, form-control segítségével", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb méretének módosítása, form-control segítségével", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb méretének módosítása, form-control segítségével", "HIBA");
    }
}

function teszt33() {
    try {
        let tesztElem = document.querySelector("button");
        if (tesztElem.innerHTML == "Regisztrálok") {
            ujVisszajelzoSor("Gomb felirata", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb felirata ", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb felirata", "HIBA");
    }
}

function teszt34() {
    try {
        let tesztElem = document.querySelectorAll("#tipus option[selected]");
        let elemekSzama = tesztElem.length
        if (elemekSzama === 4) {
            ujVisszajelzoSor("Select mezőben lévő elemek száma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Select mezőben lévő elemek száma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Select mezőben lévő elemek száma", "HIBA");
    }
}



function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
    teszt14();
    teszt15();
    teszt16();
    teszt17();
    teszt18();
    teszt19();
    teszt20();
    teszt21();
    teszt22();
    teszt23();
    teszt24();
    teszt25();
    teszt26();
    teszt27();
    teszt28();
    teszt29();
    teszt30();
    teszt31();
    teszt32();
    teszt33();
    teszt34();

}
allTeszt();