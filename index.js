var valorInvestir = document.querySelector(".valorInvestir");
var valorMes = document.querySelector(".valorMes");
var nomeBar = document.querySelector(".nomeBar");
var resultado = document.querySelector(".resultado");
var totalPoupanca = document.querySelector(".totalPoupanca");
var cdiAno = document.querySelector(".taxaCDI").value / 100;
var cdbAno = document.querySelector(".taxaCDB").value / 100;

var vInvertir = 0;
var vMes = 0;


fnTotal();
function fnCdi(v) {
  cdiAno = v / 100;
  fnTotal();
}
function fnCdb(v) {
  cdbAno = v / 100;

}
//  fetch("http://ipeadata.gov.br/api/odata4/ValoresSerie(SERCODIGO='BM12_TJCDI12')")
//  .then(res => res.json())
// //  .then(data => {  console.log('ULTIMO MES API = ',data.value[data.value.length -1].VALVALOR)})
//  .then(data => {  console.log('ULTIMO MES API = ',data.value)})

var totalInvestido = document.querySelector(".totalInvestido");
var meses = 1;

function investirMais(v) {
  vInvertir = vInvertir + v;
  fnTotal();
}

function investirMenos(v) {
  if (vInvertir - v >= 0) {
    vInvertir = vInvertir - v;
    fnTotal();
  }
}

function investirMesMais(v) {
  vMes = vMes + v;
  fnTotal();
}

function investirMesMenos(v) {
  if (vMes - v >= 0) {
    vMes = vMes - v;
    fnTotal();
  }

}
function fnTotal() {
  var montante = 0;
  for (var x = 1; x <= meses; x++) {
    montante =
      montante +
      Number(vMes) * Math.pow(1 + cdbAno * cdiAno, x / 12);
  }

  resultado.innerHTML = (Number(vInvertir) * Math.pow(1 + cdbAno * cdiAno, meses / 12) + montante).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  valorInvestir.innerHTML = vInvertir.toLocaleString("pt-br", { style: "currency", currency: "BRL", });
  valorMes.innerHTML = vMes.toLocaleString("pt-br", { style: "currency", currency: "BRL", });

}
fnTotal();
function bar(e) {
  if (e == 1) {
    nomeBar.innerHTML = "1 Mês";
    meses = 1;
    fnTotal();
  }
  if (e == 2) {
    nomeBar.innerHTML = "2 Meses";
    meses = 2;
    fnTotal();
  }
  if (e == 3) {
    nomeBar.innerHTML = "3 Meses";
    meses = 3;
    fnTotal();
  }
  if (e == 4) {
    nomeBar.innerHTML = "6 Meses";
    meses = 6;
    fnTotal();
  }
  if (e == 5) {
    nomeBar.innerHTML = "12 Meses";
    meses = 12;
    fnTotal();
  }
  if (e == 6) {
    nomeBar.innerHTML = "24 Meses";
    meses = 24;
    fnTotal();
  }
  if (e == 7) {
    nomeBar.innerHTML = "60 Meses";
    meses = 60;
    fnTotal();
  }
  if (e == 8) {
    nomeBar.innerHTML = "360 Meses";
    meses = 360;
  }
  fnTotal();
}
