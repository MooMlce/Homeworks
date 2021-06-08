// ДОМАШНЕЕ ЗАДАНИЕ
//   Задание 1:
//     Написать свой секундомер в формате mm:ss:msms (по 2 цифры в каждом параметре).
//     + Изначально на странице должна быть кнопка "Start". При запуске секундомера текст кнопки меняется на "Stop".
//     + Если пользователь нажимает на кнопку "Stop" - ее текст должен измениться на "Run".
//     Использовать data-атрибут, хранящий состояние секундомера. Работа кнопки и секундомера должна опираться на него.
//     + Также после старта работы секундомера должны появиться кнопки "Save" и "Reset".
//     Кнопки должны работать соответственным образом (по клику на кнопку "Reset" секундомер должен полностью вернуться
//     в изначальное состояние).
//     Максимальное количество минут - 60. После этого секундомер останавливается (тестировать на значениях поменьше).
//     Должны остаться только кнопка "Reset" и метки.
//     * Секундомер должен работать после перезагрузки страницы и полностью сохранять свое состояние и метки.
//     Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1
//     на каждой итерации и считать их до 100.
//     При реализации класс Date использовать запрещено.

var main = document.getElementsByClassName('main')[0];
var btnControl = document.getElementsByClassName('btnControl')[0];
var watch = document.getElementsByClassName('watch')[0];
var minutesBlock = document.getElementsByClassName('minutes')[0];
var secondsBlock = document.getElementsByClassName('seconds')[0];
var milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
var workingBlock = document.createElement('div');
var resultsBlock = document.createElement('div');
resultsBlock.classList.add('results');
var result = document.createElement('div');
result.classList.add('result');

btnControl.addEventListener('click', controlBtns);
btnControl.addEventListener('click', controlState);
btnControl.addEventListener('click', controlWatch);

function controlState() {
    if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
        // btnControl.innerHTML = 'Stop';
        watch.dataset.state = 'running';
        console.log(watch.dataset.state);
    } else if (watch.dataset.state == 'running') {
        // btnControl.innerHTML = 'Run';
        watch.dataset.state = 'stopped';
        console.log(watch.dataset.state);
    }
}

function controlBtns() {
    if (watch.dataset.state == 'initial') {
        // var btnReset = document.createElement('button');
        // var btnSave = document.createElement('button');
        // btnReset.innerHTML = 'Reset';
        // btnSave.innerHTML = 'Save';
        // btnReset.classList.add('btn', 'btnReset');
        // btnSave.classList.add('btn', 'btnSave');
        // main.appendChild(btnReset);
        // main.appendChild(btnSave);
        main.appendChild(workingBlock);
        workingBlock.appendChild(btnReset);
        workingBlock.appendChild(btnSave);
        // main.appendChild(btnReset);
        // main.appendChild(btnSave);
    //     addBtn('Reset');
    //     addBtn('Save');
    }
    if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
        btnControl.innerHTML = 'Stop';
    } else if (btnControl.innerHTML == 'Stop') {
        btnControl.innerHTML = 'Run';
    }
}

function controlWatch() {

}

if (watch.dataset.state == 'initial') {
    var btnReset = createBtn('Reset');
    var btnSave = createBtn('Save');
}

function createBtn(type) {
    var btn = document.createElement('button');

    btn.setAttribute('type', 'button');
    btn.innerHTML = type;
    btn.classList.add('btn', 'btn' + type);

    return btn;
}

btnReset.addEventListener('click', resetWatch);

function resetWatch() {
    // console.log('btn reset works');
    for (var i = 0; i < watch.children.length; i++) {
        watch.children[i].innerHTML = '00';
    }

    // main.removeChild(main.lastElementChild);
    // main.removeChild(workingBlock);
    workingBlock.innerHTML = '';
    resultsBlock.innerHTML = '';
    resultsBlock.remove();
    workingBlock.remove();
    watch.dataset.state = 'initial';
    btnControl.innerHTML = 'Start';
}

btnSave.addEventListener('click', function() {
    workingBlock.appendChild(resultsBlock);
    // main.appendChild(resultsBlock);
});

btnSave.addEventListener('click', addResult);

function addResult() {
    var minutes = minutesBlock.innerHTML.trim();
    var seconds = secondsBlock.innerHTML.trim();
    var miliseconds = milisecondsBlock.innerHTML.trim();
    var newResult = result.cloneNode(false);

    if (!resultsBlock.firstElementChild) {
        newResult.innerHTML = '1) ' + minutes + ' : ' + seconds + ' : ' + miliseconds;
    } else {
        newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML[0] + 1 + ') ' + minutes + ' : ' + seconds + ' : ' + miliseconds;
    }
    
    resultsBlock.appendChild(newResult);
}