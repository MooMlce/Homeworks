var buttonToStart = document.getElementById('button-start'),
  watch = document.getElementsByClassName('watch')[0],
  mm = document.getElementById('minutes'),
  ss = document.getElementById('seconds'),
  msms = document.getElementById('milliseconds'),
  min = 0,
  sec = 0,
  ms = 0,
  timer,
  counter = 0;

var resetButton = document.createElement('button'),
  saveButton = document.createElement('button');

function createTwoButtons() {
  document.body.appendChild(resetButton);
  document.body.appendChild(saveButton);
  resetButton.innerHTML = 'RESET';
  saveButton.innerHTML = 'SAVE';
  resetButton.classList.add('button');
  saveButton.classList.add('button');
}

function startTimer() {
  timer = setInterval(function () {
    ms += 1;
    msms.innerHTML = ms;
    if (min == 59 && sec == 59 && ms == 99) {
      clearInterval(timer);
      watch.dataset.status = 'stopped';
      if (watch.dataset.status == 'stopped') {
        document.body.removeChild(saveButton);
        document.body.removeChild(buttonToStart);
      }
    } else {
      if (ms == 100) {
        sec += 1;
        ms = 0;
        if (sec < 10) {
          ss.innerHTML = '0' + sec;
        } else {
          ss.innerHTML = sec;
        }
      } else if (sec == 59) {
        min += 1;
        sec = 0;
        if (min < 10) {
          mm.innerHTML = '0' + min;
        } else {
          mm.innerHTML = min;
        }
      }
    }
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
}

buttonToStart.addEventListener('click', function () {
  if (watch.dataset.status == 'primary') {
    watch.dataset.status = 'running';
    buttonToStart.innerHTML = 'STOP';
    createTwoButtons();
    startTimer();
  } else if (watch.dataset.status == 'running') {
    stopTimer();
    buttonToStart.innerHTML = 'RUN';
    watch.dataset.status = 'stopped';
  } else if (watch.dataset.status == 'stopped') {
    watch.dataset.status = 'running';
    buttonToStart.innerHTML = 'STOP';
    startTimer();
  }
});

resetButton.onclick = function () {
  clearInterval(timer);
  watch.dataset.status = 'primary';
  buttonToStart.innerHTML = 'START';
  mm.innerHTML = '00';
  msms.innerHTML = '00';
  ss.innerHTML = '00';
  min = 0;
  sec = 0;
  ms = 0;
  counter = 0;

  var findSaveButton = document.getElementsByClassName('button')[1];

  if (findSaveButton != null) {
    document.body.removeChild(saveButton);
  } else {
    var findWatch = document.getElementsByClassName('watch')[0];
    document.body.appendChild(buttonToStart);
    if (findWatch != null) {
      document.body.removeChild(watch);
    }
    document.body.appendChild(watch);
  }
  document.body.removeChild(resetButton);

  if (document.body.appendChild(marks) != null) {
    document.body.removeChild(marks);
  }
  marks.innerHTML = null;
};

var marks = document.createElement('div');
saveButton.onclick = function () {
  var mark = document.createElement('p');
  document.body.appendChild(marks);
  marks.appendChild(mark);
  mark.classList.add('marks');
  mark.innerHTML =
    (counter += 1) +
    ') ' +
    mm.innerHTML +
    ' : ' +
    ss.innerHTML +
    ' : ' +
    msms.innerHTML;
};
