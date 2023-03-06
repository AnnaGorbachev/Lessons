function timer() {
  // ---------------таймер-------------------------
  // 1. ф-я опр-я разницу между временем польз-ля и временем акции,получение дней,часов,и тд-getTimeRemaining
  // 2. ф-я устан-я таймер на стр
  // 3. ф-я обновления таймера

  const deadline = '2023-05-11';//сюда данные м прих из input

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;

    const t = Date.parse(endtime) - Date.parse(new Date());//кол-во мллсек в конечном времени - время сейчас:

    if (t <= 0) {//если время истекло то пишем нули.Тут можно вставить блок с надписью -акция оконч ,другое
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));//разница в млсек / кол-во млсек в 1 дне(1000 * 60 * 60 * 24) и округляем
      hours = Math.floor((t / (1000 * 60 * 60) % 24));
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) { // 2. ф-я устан-я таймер на стр

    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {//будет обновлять таймер каждую секунду
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

}

module.exports = timer;
