var timeContainer = document.getElementById('stopwatch');
var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var saveButton = document.getElementById('save');
var savedTimeContainer = document.getElementById('saved-time');

var ms = 0,
  sec = 0,
  min = 0,
  timerId,
  savedTime = [];

document.addEventListener("DOMContentLoaded", function () {
  var stateLocal = localStorage.getItem('state');
  if (stateLocal !== null) {
    var state = JSON.parse(stateLocal);
    timeContainer.dataset.enabled = state.state;
    if (state.state === 'started') {
      timerId = setInterval(timer, 10);
    }

    sec = state.seconds;
    ms = state.miliseconds;
    min = state.minutes;
    timeContainer.innerHTML = formatTimeOutput(min, sec, ms);

    if (state.savedTime.length > 0) {
      state.savedTime.forEach(function (time) {
        var el = document.createElement('LI');
        savedTime.push(time);
        el.innerHTML = time;
        savedTimeContainer.appendChild(el);
      });
    }
  }

  updateButtonState();
});

function timer() {
  ms++;
  if (ms >= 100) {
    sec++;
    ms = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    ms, sec, min = 0;
    timeContainer.dataset.enabled = 'finished';
    clearInterval(timerId);
    updateButtonState();
  }

  timeContainer.innerHTML = formatTimeOutput(min, sec, ms);
};

function startOrStop() {
  if (timeContainer.dataset.enabled === 'init' || timeContainer.dataset.enabled === 'paused') {
    timerId = setInterval(timer, 10);
    timeContainer.dataset.enabled = 'started';
    updateButtonState();
  } else {
    clearInterval(timerId);
    timeContainer.dataset.enabled = 'paused';
    updateButtonState();
  }
}

function reset() {
  ms = 0;
  sec = 0;
  min = 0;
  clearInterval(timerId);
  timeContainer.dataset.enabled = 'init';
  updateButtonState();
  localStorage.clear();
}

function save() {
  var el = document.createElement('LI');
  var timeToSave = formatTimeOutput(min, sec, ms);
  el.innerHTML = timeToSave;
  savedTime.push(timeToSave);
  savedTimeContainer.appendChild(el);
}

function formatTimeOutput(min, sec, ms) {
  var milli = ms < 10 ? '0' + ms : ms;
  var seconds = sec < 10 ? '0' + sec : sec;
  var minute = min < 10 ? '0' + min : min;

  return minute + ':' + seconds + ':' + milli;
}

function updateButtonState() {
  var currentState = timeContainer.dataset.enabled;
  switch (currentState) {
    case 'init':
      timeContainer.innerHTML = '00:00:00';
      savedTimeContainer.innerHTML = '';
      startButton.innerHTML = 'Start';
      resetButton.hidden = true;
      saveButton.hidden = true;
      startButton.hidden = false;
      break;
    case 'started':
      startButton.innerHTML = 'Stop';
      resetButton.hidden = false;
      saveButton.hidden = false;
      break;
    case 'paused':
      startButton.innerHTML = 'Run';
      break;
    case 'finished':
      saveButton.hidden = true;
      startButton.hidden = true;
  }
}

window.onbeforeunload = function () {
  if (timeContainer.dataset.enabled !== 'init') {
    var objectToSave = {
      'state': timeContainer.dataset.enabled,
      'minutes': min,
      'seconds': sec,
      'miliseconds': ms,
      'savedTime': savedTime
    };
    localStorage.setItem('state', JSON.stringify(objectToSave));
  }
};