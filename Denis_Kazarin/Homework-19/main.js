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
var countObjItem = 1;

window.onload = function() {
  if (localStorage.getItem('counterMs')||localStorage.getItem('SavedInfo')) {
    milliseconds.innerHTML = localStorage.getItem('ms');
    seconds.innerHTML = localStorage.getItem('sc');
    minutes.innerHTML = localStorage.getItem('mn');
    addButtons()

    var objToShow = JSON.parse(localStorage.getItem('SavedInfo'));

    for (var key in objToShow){
    countObjItem++;

    var objToShowItem = document.createElement('P');
    objToShowItem.innerHTML = objToShow[key];
    mark.appendChild(objToShowItem);
    }
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
  var i = 1;
  saveButton.addEventListener('click', function() {
      var markPoint = document.createElement('p');

      markPoint.innerHTML = countObjItem + ') ' + localStorage.getItem('mn') + ' : ' + localStorage.getItem('sc') + ' : ' + localStorage.getItem('ms') + '<br>';
      mark.appendChild(markPoint);
      console.log(localStorage.getItem('SavedInfo'));
      if (localStorage.getItem('SavedInfo')){
        var objLocal = JSON.parse(localStorage.getItem('SavedInfo'));
        objLocal[countObjItem] = markPoint.textContent;
        countObjItem++;
      } else {
          var objLocal = {};
          objLocal[i] = markPoint.textContent;
          i++;
      }
      localStorage.setItem('SavedInfo', JSON.stringify(objLocal));
  });
}

function resetAction(resetButton) {
  resetButton.addEventListener('click', function(event) {
    var target = event.target;

    if (target.ClassName = 'reset_button') {
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
          localStorage.setItem('ms', '0' + counterMs.toFixed(0));
          localStorage.setItem('sc', '00');
          localStorage.setItem('mn', '00');
        } else {
          milliseconds.innerHTML = counterMs.toFixed(0);
          localStorage.setItem('ms', counterMs.toFixed(0));
        }
      }

      if (counterMs >= 100) {
        mlsText = mlsText.slice(mlsText.length - 2);
        milliseconds.innerHTML = mlsText;
        localStorage.setItem('ms', mlsText);
        if (sec < 10) {
          seconds.innerHTML = '0' + sec;
          localStorage.setItem('sc', '0' + sec);
        } else {
          seconds.innerHTML = sec;
          localStorage.setItem('sc', sec);
        }
      }

      if (sec >= 60 && sec < 3600) {
        sec = sec - 60 * min;
        mlsText = mlsText.slice(mlsText.length - 2);
        milliseconds.innerHTML = mlsText;
        localStorage.setItem('ms', mlsText);
        if (sec < 10) {
          seconds.innerHTML = '0' + sec;
          localStorage.setItem('sc', '0' + sec);
        } else {
          seconds.innerHTML = sec;
          localStorage.setItem('sc', sec);
        }
        if (min < 10) {
          minutes.innerHTML = '0' + min;
          localStorage.setItem('mn', '0' + min);
        } else {
          minutes.innerHTML = min;
          localStorage.setItem('mn', min);
        }
      }
      if (sec >= 3600) {
        clearInterval('timerId');
        stopWatch.dataset.state ='initial';
        buttonToStart();
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
