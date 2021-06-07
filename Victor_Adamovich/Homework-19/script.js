var start = document.getElementById('Start'),
    stopWatch = document.getElementById('stopwatch'),
    time = document.getElementById('time'),
    dm = document.getElementById('m'),
    ds = document.getElementById('s'),
    dms = document.getElementById('ms');

var reset,
    save;

var m = 0,
    s = 0,
    ms = 0;

var startInt;

function startTimer() {
    startInt = setInterval(startTime, 10);
    createResete();
    createSave()
}

function createResete() {
    var e = document.getElementById('Reset')
    if (!e) {
        reset = document.createElement('button');
        reset.innerHTML = 'Reset';
        reset.id = 'Reset';
        stopWatch.appendChild(reset);
    }
}

function createSave() {
    var e = document.getElementById('Save')
    if (!e) {
        save = document.createElement('button');
        save.innerHTML = 'Save';
        save.id = 'Save';
        stopWatch.appendChild(save);
    }
}

function startTime() {
    ms++
    if (ms >= 100) {
        s++
        ms = ms - 100;
    }
    if (s >= 60) {
        m++
        s = s - 60;
    }
    drawTime();
    if (m === 60) {
        stopTime();
        stopWatch.removeChild(save)
        start.classList.add('hide')
    }
}

function stopTime() {
    clearInterval(startInt);
}

function drawTime() {
    dms.textContent = ms > 9 ? ms : '0' + ms;
    ds.textContent = s > 9 ? s : '0' + s;
    dm.textContent = m > 9 ? m : '0' + m;
}

function resetTime() {
    m = 0;
    s = 0;
    ms = 0;
    time.dataset.status = 'base';
    start.innerHTML = 'Start';
    stopTime()
    drawTime()
    deleteTimeBlock()
    start.classList.remove('hide')
}

function deleteTimeBlock() {
    stopWatch.removeChild(reset)
    if (m === 60) {
        stopWatch.removeChild(save)
    }


    var paras = document.getElementsByClassName('saveItem');

    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
}

function overTime() {

}

start.addEventListener('click', function () {
    if (time.dataset.status === 'base') {
        startTimer();
        time.dataset.status = 'running'
        start.innerHTML = 'Stop';
    } else if (time.dataset.status === 'running') {
        stopTime()
        time.dataset.status = 'stopped'
        start.innerHTML = 'Run';
    } else if (time.dataset.status === 'stopped') {
        time.dataset.status = 'running'
        start.innerHTML = 'Stop';
        startTimer();
    }
})

var n = 0;

stopWatch.addEventListener('click', function (e) {
    if (e.target.id === 'Save') {
        var newEl = document.createElement('p');
        newEl.classList.add('saveItem');
        newEl.innerHTML = (n += 1) + ') ' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
        stopWatch.append(newEl);
    } else if (e.target.id === 'Reset') {
        resetTime()
    }
})