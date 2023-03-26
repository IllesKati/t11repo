aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

//Szorgalmi: Kijelölés megfordítása

aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");

    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");

    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }

}
//Illetve a két check gomb egy gombra való megírása
aktivaloKiBe.addEventListener("click", aktivDeaktiv);

function aktivDeaktiv(checked = true) {
    let checkboxes = document.querySelectorAll('input[class="allapot"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = checked;
    });
}
let btn = document.querySelector('#aktivaloKiBe');
btn.onclick = checkAll;

function checkAll() {
    check();
    this.onclick = uncheckAll;
}

function uncheckAll() {
    check(false);
    this.onclick = checkAll;
}



csikozasbe.addEventListener("click", CsikozasBe);
function CsikozasBe() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.add("table-striped");
}

csikozaski.addEventListener("click", CsikozasKi);
function CsikozasKi() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-striped");
}
//Illetve a két "sávozás" gomb egy gombra való megírása

savozas.addEventListener("click", csikozasKiBe);
function csikozasKiBe() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.toggle("table-striped");

}

darkMode.addEventListener("click", DarkMode);
function DarkMode() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-light");
    tableObjektum.classList.add("table-dark");
}

lightMode.addEventListener("click", LightMode);
function LightMode() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-dark");
    tableObjektum.classList.add("table-light");
}
//Illetve a két "szín mód" gomb egy gombra való megírása

szinMod.addEventListener("click", szinModMegjelenites);
function szinModMegjelenites() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.toggle("table-light");
    tableObjektum.classList.toggle("table-dark");

}

tesztSor.addEventListener("click", TesztsorBeszuras);
function TesztsorBeszuras() {
    let tableObjektum = document.querySelector("table");
    let sor = tableObjektum.insertRow();
    let vezNevCella = sor.insertCell();
    let kerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    vezNevCella.innerHTML = "teszt";
    kerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

