var start = document.getElementsByClassName('buttons')[0],
          time = document.getElementById('time'),
          timer,
          i = 1,
          ms = 0,
          min = 0,
          sec = 0,
          control;

  //Берем данные из LS при загрузке страницы
  window.onload = function () {
    var data = JSON.parse(localStorage.getItem('data'));
    if (data['control'] == false){
      control = data['control'];
      startTimer();
      document.getElementsByClassName('marks')[0].innerHTML = data['marks'];
    } else if (data['data-state'] !== 'initial') {
      dataRecovery(data);
    };
  };

  //Восстановление данных
  function dataRecovery(data) {
    i = data['i'];
    ms = data['ms'];
    sec = data['sec'];
    min = data['min'];
    time.children[2].value = ms > 9 ? ms : '0' + ms;
    time.children[1].value = sec > 9 ? sec : '0' + sec;
    time.children[0].value = min > 9 ? min : '0' + min;
    if (data['data-state'] == 'running') {
      startTimer();
    } else if (data['data-state'] == 'stopped') {
      stopTimer();
      addButton();
    };
    document.getElementsByClassName('marks')[0].innerHTML = data['marks'];
  };

  // Обрабатываем событие кнопки старт
  start.onclick = function (e) {
    var target = e.target;
    if (target.tagName === 'INPUT') {
      if (time.dataset.state == 'running') {
        stopTimer();
      } else {
        startTimer();
      };
    };
  };

  //Механизм работы секундомера
  function startTimer() {
    if (!document.getElementById('mark')) {
      addButton();
    };
    time.dataset.state = 'running';
    start.children[0].value = 'Stop';
    timer = setInterval(function () {
      ms += 1;
      time.children[2].value = ms > 9 ? ms : '0' + ms;
      if (ms == 100) {
        sec += 1;
        ms = 0;
        time.children[2].value = ms;
        time.children[1].value = sec > 9 ? sec : '0' + sec;
      } else if (sec == 60) {
        min += 1;
        sec = 0;
        time.children[1].value = '0' + sec;
        time.children[0].value = min > 9 ? min : '0' + min;
      } else if (min == 60 || control == false) {
        clearTimer(false);
      };
    },10);
  };

  //Остановка таймера
  function stopTimer() {
    clearInterval(timer);
    time.dataset.state = 'stopped';
    start.children[0].value = 'Run';
  };

  //Добавление кнопки Reset и Save
  function addButton() {
    var string = '<div id="mark" class="stopwatch"><input type="button" value="Reset">' +
            '<input type="button" value="Save"><div class="marks"></div></div>';
    time.insertAdjacentHTML('afterend', string);
    document.getElementById('mark').addEventListener('click', buttonsMark);
  };

  //Обработка событий кнопок Reset и Save
  function buttonsMark(event) {
    var target = event.target;
    if(target.value === 'Reset'){
      clearTimer(true);
    } else if (target.value === 'Save') {
      document.getElementsByClassName('marks')[0].insertAdjacentHTML('beforeend', '<p>' + i++ + ') ' +
              time.children[0].value + ':' + time.children[1].value + ':' +
              time.children[2].value + '</p>');
    };
  };

  //Очистка таймера
  function clearTimer(value) {
    clearInterval(timer);
    i = 1;
    ms = 0;
    min = 0;
    sec = 0;
    time.dataset.state = 'initial';
    if (value == true) {
      control = true;
      document.getElementById('mark').remove();
      start.innerHTML = '<input class="start" type="button" value="Start">';
      time.innerHTML = '<input class="time_item" type="text" value="00" readonly>\n' +
              '      <input class="time_item" type="text" value="00" readonly>\n' +
              '      <input class="time_item" type="text" value="00" readonly>';
    } else {
      control = false;
      time.innerHTML = '';
      start.children[0].remove();
      document.getElementById('mark').children[1].remove();
    };
  };

  //Сохранение данных о секундомере в LS при перезагрузке страницы
  window.onunload = function() {
    var marks = document.getElementsByClassName('marks')[0];
    localStorage.setItem('data', JSON.stringify({
      'data-state' : time.dataset.state,
      'ms' : ms,
      'sec' : sec,
      'min' : min,
      'i' : i,
      'marks' : marks ? marks.innerHTML : undefined,
      'control' : control
    }));
  };
