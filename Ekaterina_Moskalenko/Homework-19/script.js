var startButton = document.getElementById('start-button');
var minutes = document.getElementsByClassName('minutes')[0];
var seconds = document.getElementsByClassName('seconds')[0];
var milliseconds = document.getElementsByClassName('milliseconds')[0];
var min = 0;
var sec = 0;
var ms = 0;
var i = 1;
var timerId;
var stopwatch = document.getElementsByClassName('stopwatch')[0];	

startButton.addEventListener('click',changeState);
function changeState(){
	if(stopwatch.dataset.state == 'running'){
		stopStopwatch();		    	
	} else {
		runStopwatch();	
	} 
}

function stopStopwatch(){
	clearInterval(timerId);
	stopwatch.dataset.state = 'stopped';
	startButton.innerText = 'Run';
}

function runStopwatch(){
	if(!document.getElementById('reset-button') && !document.getElementById('save-button')){
		addButtons();
	}
	var timerCount = setInterval(function() {
		ms += 1;
		milliseconds.innerText = ms < 10 ? '0' + ms : ms;
		seconds.innerText = sec < 10 ? '0' + sec : sec;	
    		if (ms == 100) {
    			sec += 1;
    			ms = 0;
    			milliseconds.innerText = ms;
    			seconds.innerText = sec < 10 ? '0' + sec : sec;	
    		} else if (sec == 60){
    			min += 1;
    			sec = 0;
    			seconds.innerText = sec < 10 ? '0' + sec : sec;
   				minutes.innerText = min < 10 ? '0' + min : min;		
    		} else if (min == 59 && sec ==59 && ms==99) {
    			clearInterval(timerId);
    			document.getElementById('save-button').remove();
    			startButton.remove();	
    	}

	}, 10);
	timerId = timerCount;
	stopwatch.dataset.state = 'running';
	startButton.innerText = 'Stop';
}

function addButtons(){
	stopwatch.insertAdjacentHTML('afterend', "<button id='save-button'>Save</button>");
	document.getElementById('save-button').addEventListener('click', saveStopwatch);
	stopwatch.insertAdjacentHTML('afterend', "<button id='reset-button'>Reset</button>");
	document.getElementById('reset-button').addEventListener('click', resetStopwatch);
}


function resetStopwatch(){
	stopwatch.dataset.state = 'initial';
	startButton.innerText = 'Start';
	clearInterval(timerId);
	ms = 0;
	sec = 0;
	min = 0;
	milliseconds.innerText = '0' + ms;
	seconds.innerText = '0' + sec;
	minutes.innerText = '0' + min;
	document.getElementById('save-button').remove();
	document.getElementById('reset-button').remove();
	var marks = document.getElementsByClassName('marks')[0];
	marks.innerHTML = "";
}

function saveStopwatch(){
	var marks = document.getElementsByClassName('marks')[0];
	marks.insertAdjacentHTML('beforeend', '<p>'+ i++ + ') '+ minutes.innerText + ':' + seconds.innerText +':' + milliseconds.innerText+'</p>');
}



 