
// Para el tema 1
function actualizarProgresoTotal1() {
    var subtema11 = parseInt(document.getElementById('subtema11').value);
    var subtema12 = parseInt(document.getElementById('subtema12').value);

    var promedio = parseInt((subtema11 + subtema12 ) / 2);
    document.getElementById('progresoTotal1').value = promedio;

    document.getElementById('porcentajeTotal1').innerText = promedio + "%";
    document.getElementById('porcentajeSubtema11').innerText = subtema11 + "%";
    document.getElementById('porcentajeSubtema12').innerText = subtema12 + "%";

    document.getElementById('subtema11').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema11 + '%, #1e1e1e ' + subtema11 + '%, #1e1e1e 100%)';
    document.getElementById('subtema12').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema12 + '%, #1e1e1e ' + subtema12 + '%, #1e1e1e 100%)';
}

// Para el tema 2
function actualizarProgresoTotal2() {
    var subtema21 = parseInt(document.getElementById('subtema21').value);
    var subtema22 = parseInt(document.getElementById('subtema22').value);
    var subtema23 = parseInt(document.getElementById('subtema23').value);

    var promedio = parseInt((subtema21 + subtema22 + subtema23) / 3);
    document.getElementById('progresoTotal2').value = promedio;

    document.getElementById('porcentajeTotal2').innerText = promedio + "%";
    document.getElementById('porcentajeSubtema21').innerText = subtema21 + "%";
    document.getElementById('porcentajeSubtema22').innerText = subtema22 + "%";
    document.getElementById('porcentajeSubtema23').innerText = subtema23 + "%";

    document.getElementById('subtema21').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema21 + '%, #1e1e1e ' + subtema21 + '%, #1e1e1e 100%)';
    document.getElementById('subtema22').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema22 + '%, #1e1e1e ' + subtema22 + '%, #1e1e1e 100%)';
    document.getElementById('subtema23').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema23 + '%, #1e1e1e ' + subtema23 + '%, #1e1e1e 100%)';
}

// Para el tema 3
function actualizarProgresoTotal3() {
    var subtema31 = parseInt(document.getElementById('subtema31').value);
    var subtema32 = parseInt(document.getElementById('subtema32').value);
    var subtema33 = parseInt(document.getElementById('subtema33').value);

    var promedio = parseInt((subtema31 + subtema32 + subtema33) / 3);
    document.getElementById('progresoTotal3').value = promedio;

    document.getElementById('porcentajeTotal3').innerText = promedio + "%";
    document.getElementById('porcentajeSubtema31').innerText = subtema31 + "%";
    document.getElementById('porcentajeSubtema32').innerText = subtema32 + "%";
    document.getElementById('porcentajeSubtema33').innerText = subtema33 + "%";

    document.getElementById('subtema31').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema31 + '%, #1e1e1e ' + subtema31 + '%, #1e1e1e 100%)';
    document.getElementById('subtema32').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema32 + '%, #1e1e1e ' + subtema32 + '%, #1e1e1e 100%)';
    document.getElementById('subtema33').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema33 + '%, #1e1e1e ' + subtema33 + '%, #1e1e1e 100%)';
}
