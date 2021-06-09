var elemButton = document.getElementsByClassName('button')[0],
    mainButton = document.getElementById('main-button'),
    elemMinute = document.getElementsByClassName('minute')[0],
    elemSeconds = document.getElementsByClassName('seconds')[0],
    elementMls = document.getElementsByClassName('milliseconds')[0],
    resetButton = document.getElementsByClassName('button1')[0],
    saveButton = document.getElementsByClassName('button2')[0],
    continerTime = document.getElementsByClassName('time')[0],
    elementMemory = document.getElementsByClassName('memory')[0],
    mnsValue = 0,
    secValue = 0,
    minValue = 0,
    timerId,
    counterMark = 1;

elemButton.onclick = function (event) {
  var target = event.target;

  if (target.tagName === 'BUTTON') {
    resetButton.style.display = 'flex';
    saveButton.style.display = 'flex';
    startStopwatch();
  }
}

saveButton.onclick = function (event) {
  var target = event.target;

  if (target.tagName === 'BUTTON') {
    showMark();
  }
}

resetButton.onclick = function (event) {
  var target = event.target;

  if (target.tagName === 'BUTTON') {
    reset();
    mark = [];
    remuveMark();
  }
}

function startStopwatch() {
  switch(continerTime.dataset.state) {
    case 'initial':
    case 'stopped':
      setStartStopwatch('running');
      mainButton.innerText = 'Stop';
      startTime();

      break;

    case 'running':
      setStartStopwatch('stopped');
      mainButton.innerText = 'Run';
      stop();

      break;

  }
}

function setStartStopwatch(state) {
  continerTime.dataset.state = state;
}

function startTime() {
   timerId = setInterval(function () {
    mnsValue++;
      if (mnsValue === 100) {
        mnsValue=0
        secValue++
      }

      if (secValue === 60 ) {
        secValue=0
        minValue++
      }

      if (minValue === 60) {
        mainButton.style.display = 'none';
        saveButton.style.display = 'none';
        stop();
      }

      var o1 = (mnsValue <= 9 ? "0" : "")  + mnsValue;
      var o2 = (secValue <= 9 ? "0" : "")  + secValue;
      var o3 = (minValue <= 9 ? "0" : "")  + minValue;

     elemMinute.innerText = o3;
     elemSeconds.innerText = o2;
     elementMls.innerText = o1;
    },10);
}

function stop() {
  clearInterval(timerId);
}

function reset() {
  mainButton.innerText = 'Start';
  setStartStopwatch('initial');
  stop();
  resetButton.style.display = 'none';
  saveButton.style.display = 'none';
  elemMinute.innerText = '00';
  elemSeconds.innerText = '00';
  elementMls.innerText = '00';
}

function showMark() {
  var paragraph = document.createElement('p');

  paragraph.innerText = counterMark++ + ')' + elemMinute.textContent + ':' + elemSeconds.textContent + ':' + elementMls.textContent;
  elementMemory.appendChild(paragraph);
}

function remuveMark() {
  counterMark = 1;
  elementMemory.innerHTML = '';
}