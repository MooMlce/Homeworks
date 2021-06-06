// находим элементы
var header = document.getElementById('header'),
	start = document.getElementById('main__button'),
	time = header.getElementsByClassName('time')[0],
	timeValue = time.getElementsByClassName('time__value'),
	list = header.getElementsByClassName('list__tags')[0],
	minutes = timeValue[0],
	seconds = timeValue[1],
	milliseconds = timeValue[2],
	i = 0,
	j = 0,
	ms = 0,
	ss = 0,
	mm = 0;
// создаем блоки и обработчики для кнопок(reset и save)
function creatingElements() {
	var list = document.createElement('div');
	list.classList.add('list__tags')
	header.appendChild(list);

	var footerButtoms = document.createElement('div');
	footerButtoms.classList.add('footer__button');
	footerButtoms.innerHTML = '<button>Reset</button><button>Save</button>';
	var reset = footerButtoms.firstElementChild,
		save = footerButtoms.lastElementChild;
	header.insertBefore(footerButtoms, list);

	reset.onclick = function () {
		time.dataset.status = 'initial';
		start.textContent = 'Start';
		ms = 0;
		milliseconds.innerHTML = '0' + ms;
		ss = 0;
		seconds.innerHTML = '0' + ss;
		mm = 0;
		minutes.innerHTML = '0' + mm;
		list.remove();
		footerButtoms.remove();
		i = 0;

	}

	save.onclick = function () {
		var storedValues = document.createElement('div');
		storedValues.classList.add('list__store');
		storedValues.innerHTML = (++i + ') ' + minutes.innerHTML + ' : ' + seconds.innerHTML + ' : ' + milliseconds.innerHTML);
		list.appendChild(storedValues);


	}

}

//старт секундомера
start.onclick = function () {
	if (time.dataset.status == 'initial') {
		creatingElements();
		statusRunning();
		counter();

	}
	else if (time.dataset.status == 'running') {
		statusStop();


	}
	else if (time.dataset.status == 'stopped') {
		statusRunning();
		counter();
	}
}
// секундомер запущен, меняем кнопку и data
function statusRunning() {
	start.textContent = 'Stop';
	time.dataset.status = 'running';

}
// сукендомер на паузе и data
function statusStop() {
	start.textContent = 'Run';
	time.dataset.status = 'stopped';

}
//счетчик
function counter() {

	var interval = setInterval(function () {
		if (time.dataset.status == 'running' && minutes.innerHTML != 59) {

			(++ms < 10) ? milliseconds.innerHTML = ('0' + ms) : milliseconds.innerHTML = ms;

			if (ms == 100) {
				ms = 0;
				(++ss < 10) ? seconds.innerHTML = ('0' + ss) : seconds.innerHTML = ss;
				if (ss == 60) {
					ss = 0;
					(++mm < 10) ? minutes.innerHTML = ('0' + mm) : minutes.innerHTML = mm;


				}
			}
		}
		else {
			clearInterval(interval);
		}
	}, 10);

}

