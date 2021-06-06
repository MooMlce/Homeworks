'Use Strict';
var startBtn = document.getElementById('main-button'),
    timer = document.getElementsByClassName('timer')[0],
    saveBtn = document.getElementById('save-button'),
    resetBtn = document.getElementById('reset-button'),
    Min = document.getElementsByClassName('minutes')[0],
    Sec = document.getElementsByClassName('seconds')[0],
    Msec = document.getElementsByClassName('mseconds')[0],
    marks = document.getElementsByClassName('marks')[0],
    timerId;

startBtn.addEventListener('click', startStopTime);

function startStopTime() {
    if (timer.dataset.state == 'stopped') {
        startBtn.innerHTML = 'Stop';
        timerId = setInterval(startTime, 10);
        timer.dataset.state = 'running';
    }
    else if (timer.dataset.state == 'running') {
        startBtn.innerHTML = 'Run';
        clearInterval(timerId);
        timer.dataset.state = 'stopped';
    }
    else if (timer.dataset.state == 'initial') {
        startBtn.innerHTML = 'Stop';
        saveBtn.removeAttribute('hidden');
        resetBtn.removeAttribute('hidden');
        timerId = setInterval(startTime, 10);
        timer.dataset.state = 'running';
    }
}

resetBtn.addEventListener('click', resetTime);

function resetTime() {
    clearInterval(timerId);
    timer.dataset.state = 'initial';
    startBtn.innerHTML = 'Start';
    Msec.innerHTML = '0' + '0';
    Sec.innerHTML = '0' + '0';
    Min.innerHTML = '0' + '0';
    saveBtn.setAttribute('hidden', true);
    resetBtn.setAttribute('hidden', true);
    marks.innerHTML = '';
}

saveBtn.addEventListener('click', saveMark);

function saveMark() {
    var p = document.createElement('p');
    p.innerHTML = '-' + Min.innerHTML + ' : ' + Sec.innerHTML + ' : ' + Msec.innerHTML;
    marks.appendChild(p);
}

function endTime() {
    if (Min.innerHTML == 59 && Sec.innerHTML == 59 && Msec.innerHTML == 99) {
        clearInterval(timerId);
        saveBtn.setAttribute('hidden', true);
        startBtn.setAttribute('hidden', true);
    }
}

function startTime() {
    if (Msec.innerHTML < 9) {
        Msec.innerHTML++;
        Msec.innerHTML = '0' + Msec.innerHTML;
    } else {
        Msec.innerHTML++;
    }

    if (Msec.innerHTML == 100) {
        if (Sec.innerHTML < 9) {
            Sec.innerHTML++;
            Sec.innerHTML = '0' + Sec.innerHTML;
        } else {
            Sec.innerHTML++;
        }
        Msec.innerHTML = '0' + '0';
    }

    if (Sec.innerHTML == 60) {
        if (Min.innerHTML < 9) {
            Min.innerHTML++;
            Min.innerHTML = '0' + Min.innerHTML;
        } else {
            Min.innerHTML++;
        }
        Sec.innerHTML = '0' + '0';
    }
    endTime();
}











