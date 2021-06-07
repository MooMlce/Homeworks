var btnStartStop = document.getElementsByTagName('button')[0];
var btnReset = document.getElementsByTagName('button')[1];
var btnSave = document.getElementsByTagName('button')[2];
var mSec = localStorage.getItem('mSec');
var sec = localStorage.getItem('sec');
var min = localStorage.getItem('min');
var arr = JSON.parse(localStorage.getItem('arr')) || [];
var timeLimit = '60';
var correct = 0;
var timerId;



for (var i = 0; i < arr.length; i++){
  var block =document.createElement('div');
  block.innerHTML =''+ arr[i];
  block.classList.add('time');
  document.getElementsByClassName('timelog')[0].appendChild(block);
}

if (localStorage.getItem('mSec')||localStorage.getItem('sec')||localStorage.getItem('min')){

  document.getElementsByClassName('ms')[0].innerHTML=formatTime(localStorage.getItem('mSec'));
  document.getElementsByClassName('sec')[0].innerHTML=formatTime(localStorage.getItem('sec'));
  document.getElementsByClassName('min')[0].innerHTML=formatTime(localStorage.getItem('min'));
  btnReset.classList.remove('visible');


  if (localStorage.getItem('min') == timeLimit){
    btnSave.classList.add('visible');
    btnStartStop.classList.add('visible');

  }
  
}

if ((localStorage.getItem('state') == 'started') && (btnStartStop.dataset.state == 'init') && (localStorage.getItem('min') != timeLimit)){
  timerId = setInterval(ms,10);
  btnStartStop.dataset.state = 'Stop';
  btnStartStop.innerHTML = 'Stop';
  btnReset.classList.remove('visible');
  btnSave.classList.remove('visible');
} else{
  localStorage.setItem('state','stopped');
  btnStartStop.dataset.state = 'Start';
  clearInterval(timerId);
  if (localStorage.getItem('mSec')||localStorage.getItem('sec')||localStorage.getItem('min')){
    btnStartStop.innerHTML ='Run';
  } else {
    btnStartStop.innerHTML ='Start ';
  }
}


function ms() {
  setTimeout(correct);
  correct++;
  mSec++;
  
  if (mSec == 100) {
    mSec =0;
    seconds();
    correct = 0;
  }

  localStorage.setItem('mSec',mSec);
  document.getElementsByClassName('ms')[0].innerHTML=formatTime(localStorage.getItem('mSec'));
}

function seconds() {
  sec++;

  if (sec == 60) {
    sec =0;
    minutes();
  }

  localStorage.setItem('sec',sec);
  document.getElementsByClassName('sec')[0].innerHTML=formatTime(localStorage.getItem('sec'));
}

function minutes() {
  min++;

  if (min == +timeLimit) {
    clearInterval(timerId);
    btnStartStop.classList.add('visible');
    btnSave.classList.add('visible');
  }

  localStorage.setItem('min',min);
  document.getElementsByClassName('min')[0].innerHTML=formatTime(localStorage.getItem('min'));
}

btnStartStop.onclick = function() {

  if (((btnStartStop.dataset.state == 'Start')||(btnStartStop.dataset.state == 'init')) && (localStorage.getItem('min') != timeLimit)){
    localStorage.setItem('state','started');
    timerId = setInterval(ms,10);
    btnStartStop.dataset.state = 'Stop';
    btnStartStop.innerHTML = 'Stop';
    btnReset.classList.remove('visible');
    btnSave.classList.remove('visible');
  } else{
    localStorage.setItem('state','stopped');
    btnStartStop.dataset.state = 'Start';
    clearInterval(timerId);
    btnStartStop.innerHTML = 'Run';
  }
}

btnReset.onclick = function(){
  clearInterval(timerId);

  min = 0;
  sec = 0;
  mSec = 0;

  btnReset.classList.add('visible');
  btnSave.classList.add('visible');
  btnReset.classList.add('visible');
  btnSave.classList.add('visible');
  btnStartStop.classList.remove('visible');

  btnStartStop.innerHTML = 'Start';
  btnStartStop.dataset.state = 'init';

  document.getElementsByClassName('min')[0].innerHTML=formatTime(0);
  document.getElementsByClassName('sec')[0].innerHTML=formatTime(0);
  document.getElementsByClassName('ms')[0].innerHTML=formatTime(0);

  localStorage.removeItem('state'); 
  localStorage.removeItem('mSec');
  localStorage.removeItem('sec');
  localStorage.removeItem('min');
  localStorage.removeItem('arr');

  arr = [];

  while (document.getElementsByClassName('timelog')[0].firstChild) {
    document.getElementsByClassName('timelog')[0].removeChild(document.getElementsByClassName('timelog')[0].firstChild);
}
}

btnSave.onclick = function(){
  var block =document.createElement('div');
  block.innerHTML =''+formatTime(min)+' : '+formatTime(sec)+' : '+formatTime(mSec);
  block.classList.add('time');
  document.getElementsByClassName('timelog')[0].appendChild(block);
  arr.push(''+formatTime(min)+' : '+formatTime(sec)+' : '+formatTime(mSec));
  localStorage.setItem('arr', JSON.stringify(arr));
}

function formatTime(time){
  if (time == null){
    return '00';
  }
  if (time < 10){
    return '0'+time;
  } 
  return ''+time;
}
