//Számok generálása

function OtosLottoszamGenerator() {
    lottoSzamok = [];
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam);
        }
        else {
            i--;
        }
    }
    return lottoSzamok;
}
document.write(OtosLottoszamGenerator());

function otosLotto(vizSzintes, fuggoleges) {
    let stringHtml = "";
    for (let is = 0; i < vizSzintes; i++) {
        for (let j = 0; j < fuggoleges; j++) {
            stringHtml += '<td class="jeloletlenCella">' + ((i * fuggoleges) + j + 1) + "</td>";
        }
        stringHtml += "</tr>";
    }
    let lotto = document.querySelector("#lotto");
    lotto.innerHTML = stringHtml;
}

document.querySelector("#szamokGeneralasa").addEventListener("click", otosLottoJatek)

function otosLottoJatek() {
    let szamokGeneralasa = document.querySelector("#szamokGeneralasa");
    szamokGeneralasa.button = true;
}

//Terjedelem

function tombTerjedelem(lottoSzamok) {
    let minErtek = lottoSzamok[0];
    let maxErtek = lottoSzamok[0];
    for (let i = 0; i < lottoSzamok.length; i++) {
        if (lottoSzamok[i] < minErtek) {
            minErtek = lottoSzamok[i];
        }
        else if (lottoSzamok[i] > maxErtek) {
            maxErtek = lottoSzamok[i];
        }
        else { }
    }
    return maxErtek - minErtek;
}

document.write("<br>Terjedelem: " + tombTerjedelem(lottoSzamok));





