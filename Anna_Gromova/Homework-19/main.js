var stopWatch = document.getElementsByClassName('stop-watch')[0],
    startButton = document.getElementsByClassName('start-button')[0],
    marks = document.getElementsByClassName('marks')[0],
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    milliseconds = document.querySelector('.milliseconds'),
    state = stopWatch.dataset.state,
    resIndex = 1;
    
var ms = 0,
    sec = 0,
    min = 0,
    timerId;

startButton.addEventListener('click', startRunning);

function changeEventListener(){
    if (state == "idle" || state == "stopped") {
      startButton.innerText = 'Stop';
      state = "running";
      startButton.removeEventListener('click', startRunning);
      startButton.addEventListener('click', stopRunning);
    }
    else  {
      startButton.innerText = 'Run';
      state = "stopped";
      startButton.removeEventListener('click', stopRunning);
      startButton.addEventListener('click', startRunning);
    } 
}

function startRunning() {
    timerId = setInterval(tick, 10);
    changeEventListener();
    createMarkButtons();
}

function tick() {
    ms ++;
    if (ms === 100) {
        ms = 0;
        sec ++;
        if (sec === 60) {
            sec = 0;
            min ++; 
            if (min === 60) {
            stopRunning();
            document.querySelector('.save').remove();
            startButton.remove();
            }
        } 
    }
    milliseconds.innerHTML = (ms < 10) ? "0" + ms : ms;
    minutes.innerHTML = (min < 10) ? "0" + min : min;
    seconds.innerHTML = (sec < 10) ? "0" + sec : sec;
}

function stopRunning() {
    changeEventListener();
    clearInterval(timerId);
}

function createMarkButtons() {
    var resetButton = document.querySelector('.reset');
    var saveButton = document.querySelector('save');
    if (!resetButton && !saveButton) {
        marks.innerHTML = '';
        resetButton = document.createElement('button');
        saveButton = document.createElement('button');

        resetButton.innerText = 'Reset';
        resetButton.classList.add('reset');
        saveButton.innerText ='Save';
        saveButton.classList.add('save');

    resetButton.addEventListener('click', resetStopWatch);
    saveButton.addEventListener('click', saveResult);
    
    marks.appendChild(resetButton);
    marks.appendChild(saveButton);
    } 
}

function resetStopWatch() {
    clearInterval(timerId);
    resIndex = 1;
    ms = 0;
    min = 0;
    sec = 0;
    stopWatch.dataset.state = "idle";
    startButton.innerText = 'Start';
    milliseconds.innerHTML = '00';
	minutes.innerHTML = '00';
	seconds.innerHTML = '00';
    marks.innerHTML = '';
    
    startButton.addEventListener('click', startRunning);
}

function saveResult() {
    var result = document.createElement('div');
        result.innerHTML = resIndex++ + ') ' + minutes.innerHTML + ' : '  + seconds.innerHTML + ' : ' + milliseconds.innerHTML;

    marks.appendChild(result);
}


// Написать свой секундомер в формате mm:ss:msms (по 2 цифры в каждом параметре).
//   +  Изначально на странице должна быть кнопка "Start". При запуске секундомера текст кнопки меняется на "Stop".
//    + Если пользователь нажимает на кнопку "Stop" - ее текст должен измениться на "Run".
//   +  Использовать data-атрибут, хранящий состояние секундомера. Работа кнопки и секундомера должна опираться на него.

//   +  Также после старта работы секундомера должны появиться кнопки "Save" и "Reset".
//    + Кнопки должны работать соответственным образом (по клику на кнопку "Reset" секундомер должен полностью вернуться в изначальное состояние).
//   +  Максимальное количество минут - 60. После этого секундомер останавливается (тестировать на значениях поменьше).
//    + Должны остаться только кнопка "Reset" и метки.
//     * Секундомер должен работать после перезагрузки страницы и полностью сохранять свое состояние и метки.
//     Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1 на каждой итерации и считать их до 100.
//     При реализации класс Date использовать запрещено.