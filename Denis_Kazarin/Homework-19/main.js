var startButton = document.getElementById('start_button');
var body = document.getElementsByTagName('body')[0];
var milliseconds = document.getElementsByClassName('milliseconds')[0];
var seconds = document.getElementsByClassName('seconds')[0];
var minutes = document.getElementsByClassName('minutes')[0];
var stopWatch = document.getElementsByClassName('stop_watch')[0];
var stopButton = document.getElementById('stop_button');
var runButton = document.getElementById('run_button');
var mark = document.getElementsByClassName('marks')[0];
var counterMs;
var sec;
var min;
var countObjItem = 0;

window.addEventListener("unload", function() {
  localStorage.setItem('ms', milliseconds.innerHTML);
  localStorage.setItem('sc', seconds.innerHTML);
  localStorage.setItem('mn', minutes.innerHTML);
});

window.onload = function() {
  if (localStorage.getItem('counterMs')||localStorage.getItem('SavedInfo')) {
    milliseconds.innerHTML = localStorage.getItem('ms');
    seconds.innerHTML = localStorage.getItem('sc');
    minutes.innerHTML = localStorage.getItem('mn');
    addButtons()
    countObjItem+=1;
    var objToShow = JSON.parse(localStorage.getItem('SavedInfo'));

    for (var key in objToShow){
    countObjItem++;
    localStorage.setItem('countObjItem', countObjItem);

    var objToShowItem = document.createElement('P');
    objToShowItem.innerHTML = objToShow[key];
    mark.appendChild(objToShowItem);
    }
  }
  if (localStorage.getItem('countObjItem') == null) {
    countObjItem = 1;
  } else {
    countObjItem = localStorage.getItem('countObjItem');
  }
}

startButton.addEventListener('click', function() {
  if (document.getElementsByClassName('stop_watch')[0].dataset.state == 'initial') {
    inProgress();
    addButtons();
    stopWatchProgress(localStorage.getItem('counterMs'));
    }
  });

stopButton.addEventListener('click', function() {
      if (document.getElementsByClassName('stop_watch')[0].dataset.state == 'inProgress') {
        stopWatch.dataset.state ='stopped';
      };
      buttonToRun();
    });

runButton.addEventListener('click', function(){
  stopWatch.dataset.state ='inProgress';
  buttonToRun();
  stopWatchProgress(localStorage.getItem('counterMs'));
});

function addButtons() {
    if (!document.getElementsByClassName('save_button')[0] && !document.getElementsByClassName('reset_button')[0]) {
      var marksButtons = document.createElement('div');
      var saveButton = document.createElement('button');
      var resetButton = document.createElement('button');

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
  }

function saveAction(saveButton) {
  saveButton.addEventListener('click', function() {
    localStorage.setItem('countObjItem', +countObjItem);
      var markPoint = document.createElement('p');

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
      buttonToStart()
      localStorage.clear();
      mark.innerHTML = '';
      stopWatch.dataset.state = 'initial';
      stopWatchProgress(0);
      milliseconds.innerHTML = '00';
      seconds.innerHTML ='00';
      minutes.innerHTML ='00';
    }
});
};

function stopWatchProgress(counterMs) {
  var timerId = setTimeout(function go(){

    if (stopWatch.dataset.state == 'stopped') {
      localStorage.setItem('counterMs', counterMs);
      clearInterval('timerId');
    } else if (stopWatch.dataset.state == 'inProgress'){
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
          seconds.innerHTML = sec;

        }
      }

      if (sec >= 60 && sec < 3600) {
        sec = sec - 60 * min;
        mlsText = mlsText.slice(mlsText.length - 2);
        milliseconds.innerHTML = mlsText;

        if (sec < 10) {
          seconds.innerHTML = '0' + sec;

        } else {
          seconds.innerHTML = sec;

        }
        if (min < 10) {
          minutes.innerHTML = '0' + min;

        } else {
          minutes.innerHTML = min;

        }
      }
      if (sec >= 3600) {
        clearInterval('timerId');
        stopWatch.dataset.state ='initial';
        buttonToStart();
        counterMs = 0;
        localStorage.setItem('counterMs', 0);
        milliseconds.innerHTML = '00';
        seconds.innerHTML ='00';
        minutes.innerHTML ='60';
        mark.innerHTML = '';

      }
    }
}

function inProgress() {
  stopWatch.dataset.state ='inProgress';
  startButton.classList.toggle('display_none');
  stopButton.classList.toggle('display_none');
}
function buttonToRun() {
  stopButton.classList.toggle('display_none');
  runButton.classList.toggle('display_none');
}
function buttonToStart() {
  stopButton.classList.add('display_none');
  runButton.classList.add('display_none');
  startButton.classList.remove('display_none');
}
