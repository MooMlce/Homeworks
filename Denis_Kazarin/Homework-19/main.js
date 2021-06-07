var startButton = document.getElementById('start_button');
var body = document.getElementsByTagName('body')[0];
var milliseconds = document.getElementsByClassName('milliseconds')[0];
var seconds = document.getElementsByClassName('seconds')[0];
var minutes = document.getElementsByClassName('minutes')[0];
var stopWatch = document.getElementsByClassName('stop_watch')[0];
var mark = document.getElementsByClassName('marks')[0];
var counterMs;
var sec;
var min;
var countObjItem = 0;

window.addEventListener('unload', function() {
  localStorage.setItem('ms', milliseconds.innerHTML);
  localStorage.setItem('sc', seconds.innerHTML);
  localStorage.setItem('mn', minutes.innerHTML);
  counterMs = (+minutes.innerHTML * 6000 + +seconds.innerHTML * 100 + +milliseconds.innerHTML);
  localStorage.setItem('counterMs', counterMs);
});

window.onload = function() {
    milliseconds.innerHTML = localStorage.getItem('ms');
    seconds.innerHTML = localStorage.getItem('sc');
    minutes.innerHTML = localStorage.getItem('mn');

    if (localStorage.getItem('counterMs') == null) {
      counterMs = 0;
    } else {
      counterMs = localStorage.getItem('counterMs')
    }
    if (localStorage.getItem('ms')) {
    milliseconds.innerHTML = localStorage.getItem('ms');
    } else {
      localStorage.setItem('ms', '00');
      milliseconds.innerHTML = '00';
    }
    if (localStorage.getItem('mn')) {
      minutes.innerHTML = localStorage.getItem('mn');
    } else {
      localStorage.setItem('mn', '00');
      minutes.innerHTML = '00';
    }
    if (localStorage.getItem('sc')) {
      seconds.innerHTML = localStorage.getItem('sc');
    } else {
      localStorage.setItem('sc', '00');
      seconds.innerHTML = '00';
    }

if (localStorage.getItem('isButton') == 1){
    startButton.innerHTML = 'Run';
  }

    if (localStorage.getItem('isButton') == 1){
      addButtons()
    }
    countObjItem+=1;

    var objToShow = JSON.parse(localStorage.getItem('SavedInfo'));

    for (var key in objToShow){
    countObjItem++;
    localStorage.setItem('countObjItem', countObjItem);

    var objToShowItem = document.createElement('P');
    objToShowItem.innerHTML = objToShow[key];
    mark.appendChild(objToShowItem);
    }

    if (localStorage.getItem('countObjItem') == null) {
      countObjItem = 1;
    } else {
      countObjItem = localStorage.getItem('countObjItem');
    }
}

startButton.addEventListener('click', function(event) {
  switch (stopWatch.dataset.state) {
    case 'initial':
      startButton.innerHTML = 'Stop';
      stopWatch.dataset.state = 'inProgress';
      addButtons();
      stopWatchProgress(localStorage.getItem('counterMs'));
      break;
    case 'inProgress':
      stopWatch.dataset.state = 'stopped';
      startButton.innerHTML = 'Run';
      clearTimeout('timerId');
      break;
    case 'stopped':
      startButton.innerHTML = 'Stop';
      stopWatch.dataset.state ='inProgress';
      stopWatchProgress(localStorage.getItem('counterMs'));
      break;
  }
});

function addButtons() {
    if (!document.getElementsByClassName('save_button')[0] && !document.getElementsByClassName('reset_button')[0]) {
      var marksButtons = document.createElement('div');
      var saveButton = document.createElement('button');
      var resetButton = document.createElement('button');
      localStorage.setItem('isButton', 1);

      saveButton.classList.add('save_button');
      saveButton.innerHTML = 'Save';
      resetButton.classList.add('reset_button');
      resetButton.innerHTML = 'Reset';
      marksButtons.appendChild(saveButton);
      marksButtons.appendChild(resetButton);
      marksButtons.classList.add('buttons');
      mark.appendChild(marksButtons);
      saveAction(saveButton);
      resetAction(resetButton);
    }
};

function saveAction(saveButton) {
  saveButton.addEventListener('click', function() {
    localStorage.setItem('countObjItem', +countObjItem);
    var markPoint = document.createElement('p');
    markPoint.classList.add('forRemoveP');
    mark.appendChild(markPoint);
    markPoint.innerHTML = countObjItem + ') ' + minutes.innerHTML + ' : ' + seconds.innerHTML + ' : ' + milliseconds.innerHTML + '<br>';

    if (localStorage.getItem('SavedInfo') == null) {
      var objLocal = {};
    } else {
      objLocal = JSON.parse(localStorage.getItem('SavedInfo'));
    }
    objLocal[countObjItem] = markPoint.textContent;
    localStorage.setItem('SavedInfo', JSON.stringify(objLocal));
    countObjItem++;
  });
}

function resetAction(resetButton) {
  resetButton.addEventListener('click', function(event) {
    var target = event.target;

    if (target.ClassName = 'reset_button') {
      countObjItem = 1;
      localStorage.clear();
      mark.innerHTML = '';
      stopWatch.dataset.state = 'initial';
      clearTimeout('timerId');

      startButton.innerHTML = 'Start';
      stopWatchProgress(0);
    }
  });
};

function stopWatchProgress(counterMs) {
  milliseconds.innerHTML = '00';
  seconds.innerHTML ='00';
  minutes.innerHTML ='00';
  var timerId = setTimeout(function go(){

    if (stopWatch.dataset.state === 'stopped') {
      localStorage.setItem('counterMs', counterMs);
      clearTimeout('timerId');
    } else if (stopWatch.dataset.state === 'inProgress'){
        counterMs++;
        countSec();
        setTimeout(go,10);
      }
  },0);

  function countSec() {
    min = Math.floor(counterMs/6000);
    sec = Math.floor(counterMs/100);

    var mlsText = counterMs.toString();

    if (counterMs < 100) {
        if (counterMs < 10) {
          milliseconds.innerHTML = '0' + counterMs.toFixed(0);

        } else {
          milliseconds.innerHTML = counterMs.toFixed(0);
        }
      }

      if (counterMs >= 100) {
        mlsText = mlsText.slice(mlsText.length - 2);
        milliseconds.innerHTML = mlsText;

        if (sec < 10) {
          seconds.innerHTML = '0' + sec;

        } else {
          seconds.innerHTML = (sec - 60 * min);
        }
      }

      if (sec >= 60) {
        if (sec <= 3599){

          mlsText = mlsText.slice(mlsText.length - 2);
          milliseconds.innerHTML = mlsText;

          if ((sec - 60 * min) < 10) {
            seconds.innerHTML = '0' + (sec - 60 * min);
          } else {
            seconds.innerHTML = (sec - 60 * min);
          }
          if (min < 10) {
            minutes.innerHTML = '0' + min;
          } else {
            minutes.innerHTML = min;
          }
        }
        if (sec > 3599) {
          stopWatchFullStop();
          minutes.innerHTML = min;
          if ((sec - 60 * min) < 10) {
            seconds.innerHTML = '0' + (sec - 60 * min);
          } else {
            seconds.innerHTML = (sec - (60 * min));
          }
          if (min < 10) {
            minutes.innerHTML = '0' + min;
            } else {
            minutes.innerHTML = min;
        }
      }
    }
  }
};
function stopWatchFullStop(){
  clearTimeout('timerId');
  localStorage.setItem('counterMs', 0);
  localStorage.setItem('ms', 0);
  localStorage.setItem('sc', 0);
  localStorage.setItem('mn', 0);
  stopWatch.dataset.state ='initial';
  counterMs = 0;
  startButton.innerHTML = 'Start';
  startButton.remove();
  document.getElementsByClassName('save_button')[0].remove();
}
