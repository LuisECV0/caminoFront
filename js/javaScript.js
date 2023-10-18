function actualizarProgresoTotal() {
    var subtema1 = parseInt(document.getElementById('subtema1').value);
    var subtema2 = parseInt(document.getElementById('subtema2').value);
    var subtema3 = parseInt(document.getElementById('subtema3').value);


    var promedio = parseInt((subtema1 + subtema2+subtema3) / 3);
    document.getElementById('progresoTotal').value = promedio;

    document.getElementById('porcentajeTotal').innerText = promedio + "%";
    document.getElementById('porcentajeSubtema1').innerText = subtema1 + "%";
    document.getElementById('porcentajeSubtema2').innerText = subtema2 + "%";
    document.getElementById('porcentajeSubtema3').innerText = subtema3 + "%";

    document.getElementById('subtema1').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema1 + '%, #1e1e1e ' + subtema1 + '%, #1e1e1e 100%)';
    document.getElementById('subtema2').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema2 + '%, #1e1e1e ' + subtema2 + '%, #1e1e1e 100%)';
    document.getElementById('subtema3').style.background = 'linear-gradient(to right, #354ab4 0%, #354ab4 ' + subtema3 + '%, #1e1e1e ' + subtema3 + '%, #1e1e1e 100%)';
}
