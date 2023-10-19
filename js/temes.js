var topics = ["tema1", "tema2", "tema3"];
var subtopics = ["subtema1", "subtema2", "subtema3"];

for (var i = 0; i < topics.length; i++) {
    var div = document.createElement('div');
    div.classList.add('class');

    var p1 = document.createElement('p');
    p1.textContent = topics[i] + " - Progreso total: ";
    var span1 = document.createElement('span');
    span1.id = "porcentajeTotal" + (i + 1);
    span1.textContent = "0%";
    p1.appendChild(span1);
    div.appendChild(p1);

    var progress = document.createElement('progress');
    progress.id = "progresoTotal" + (i + 1);
    progress.max = 100;
    progress.value = 0;
    div.appendChild(progress);

    var ul = document.createElement('ul');
    for (var j = 0; j < subtopics.length; j++) {
        var li = document.createElement('li');

        var div2 = document.createElement('div');
        div2.classList.add('item-container');

        var span2 = document.createElement('span');
        span2.classList.add('span-txt');
        span2.textContent = (i + 1) + "." + (j + 1) + subtopics[j];
        div2.appendChild(span2);

        var center = document.createElement('center');
        var span3 = document.createElement('span');
        span3.id = "porcentajeSubtema" + (i + 1) + (j + 1);
        span3.textContent = "0%";
        center.appendChild(span3);
        div2.appendChild(center);

        var input = document.createElement('input');
        input.type = "range";
        input.classList.add('input-barra');
        input.step = 10;
        input.id = "subtema" + (i + 1) + (j + 1);
        input.min = 0;
        input.max = 100;
        input.value = 0;
        input.setAttribute('oninput', 'actualizarProgresoTotal' + (i + 1) + '()');
        div2.appendChild(input);

        li.appendChild(div2);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    document.body.appendChild(div);
}
