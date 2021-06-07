var startBtn = document.getElementsByClassName('timer')[0],
    stopwatch = document.getElementById('stop-watch'),
    saved = document.getElementById('saved'),
    miliseconds = document.getElementById('msms'),
    seconds = document.getElementById('ss'),
    minutes = document.getElementById('mm'),
    timerId,
    fetchedState;

try {
    fetchedState = JSON.parse(localStorage.getItem('state'));
} catch (err) {
    console.log(err);
}

var initialState = {
    ms: 0,
    saved: [],
};

var state = fetchedState || initialState;

if (state.saved.length) {
    state.saved.forEach(function(savedItem) {
        var savedInfo = '<div>' + savedItem.index + '.) ' + savedItem.min + ':' +
                        savedItem.sec + ':' + savedItem.ms + '</div>';
        saved.innerHTML += savedInfo;
    });
}

startBtn.onclick = function() {
    if (event.target.classList.contains('timer')) {
        if (stopwatch.dataset.state == 'running') {
            pause();
        } else {
            startTheTimer();
        }
    }
};

function render() {
    var ms = state.ms;
    var msToShow = Math.floor((ms % 1000) / 10);
    var secToShow = Math.floor((ms % 60000) / 1000);
    var minToShow = Math.floor(ms / 60000);
  
    if (msToShow < 10) {
      miliseconds.value = '0' + msToShow;
    } else {
      miliseconds.value = msToShow;
    }
  
    if (secToShow < 10) {
      seconds.value = '0' + secToShow;
    } else {
      seconds.value = secToShow;
    }
  
    if (minToShow < 10) {
      minutes.value = '0' + minToShow;
    } else {
      minutes.value = minToShow;
    }
  }

function startTheTimer() {
    if (!document.getElementsByClassName('marks')[0]) {
        addButtons();
      };
    
    stopwatch.dataset.state = 'running';
    startBtn.innerHTML = 'Stop';

    timerId = setInterval(function() {
       state.ms += 10;

    localStorage.setItem('state', JSON.stringify(state));

    render();

    if (Math.floor(state.ms / 60000) >= 60) {
        stop();
    }  
}, 10);
}

function addButtons() {
    var additionalBtns = '<div class="marks"><button class="timerSave">Save</button>' +
                            '<button class="timerReset">Reset</button></div>';
    stopwatch.insertAdjacentHTML('afterEnd', additionalBtns);
    document.getElementsByClassName('marks')[0].addEventListener('click', toResetandSavetheInfo);
}

function pause() {
    clearInterval(timerId);
    stopwatch.dataset.state = 'stopped';
    startBtn.innerHTML = 'Run';
}

function toResetandSavetheInfo() {
    var target = event.target;
    var additionalBtns = document.getElementsByClassName('marks');
    if (target.textContent == 'Save') {
        state.saved.push({
            index: state.saved.length + 1,
            ms: miliseconds.value,
            sec: seconds.value,
            min: minutes.value,
        });
        
        var savedInfo = '<div>' + state.saved.length + '.) ' + minutes.value + ':' + seconds.value + ':' + miliseconds.value + '</div';
        saved.innerHTML += savedInfo;
        
    } else if (target.textContent == 'Reset') {
        stopwatch.dataset.state = 'initial';
        startBtn.innerHTML = 'Start';
        
        state.ms = 0;
        state.saved = [];
        localStorage.setItem('state', JSON.stringify(state));
        render();

        clearInterval(timerId);
        document.getElementsByClassName('marks')[0].remove();
        saved.innerHTML = '';
    }
}

function stop() {
    startBtn.remove();
    document.getElementsByClassName('timerSave')[0].remove();
    stopwatch.dataset.state = "initial";
    
    localStorage.setItem('state', JSON.stringify(state));
    render();
    clearInterval(timerId);
}

