

// function createCalendar(elem, year, month) {

//   const d = new Date(year, month);
//   let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

//   // пробелы для первого ряда с пн до первого дня месяца * * * 1  2  3  4
//   for (let i = 0; i < getDay(d); i++) {
//     table += '<td></td>';
//   }

//   // <td> ячейки календаря с датами
//   while (d.getMonth() == month) {
//     table += '<td>' + d.getDate() + '</td>';

//     if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
//       table += '</tr><tr>';
//     }

//     d.setDate(d.getDate() + 1);
//   }

//   // добить таблицу пустыми ячейками, если нужно 29 30 31 * * * *
//   if (getDay(d) != 0) {
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td></td>';
//     }
//   }

//   // закрыть таблицу
//   table += '</tr></table>';

//   elem.innerHTML = table;
// }

// function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
//   let day = date.getDay();
//   if (day == 0) day = 7; // сделать воскресенье (0) последним днем
//   return day - 1;
// }

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let currentMonth = currentDate.getMonth();


// createCalendar(calendar, currentYear, currentMonth);











let Cal = function (divId) {

  //Сохраняем идентификатор div
  this.divId = divId;

  // Дни недели с понедельника
  this.DaysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // Месяцы начиная с января
  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  //Устанавливаем текущий месяц, год
  const d = new Date();

  this.currMonth = d.getMonth('9');
  this.currYear = d.getFullYear('22');
  this.currDay = d.getDate('3');
};

// Переход к следующему месяцу
Cal.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Переход к предыдущему месяцу
Cal.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Показать текущий месяц
Cal.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};



// Показать месяц (год, месяц)
Cal.prototype.showMonth = function (y, m) {

  const d = new Date()
    // Первый день недели в выбранном месяце 
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    // Последний день выбранного месяца
    , lastDateOfMonth = new Date(y, m + 1, 0).getDate()
    // Последний день предыдущего месяца
    , lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  let html = '<table>';

  // Запись выбранного месяца и года
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  // заголовок дней недели
  html += '<tr class="days">';
  for (let i = 0; i < this.DaysOfWeek.length; i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  // Записываем дни
  let i = 1;
  do {

    let dow = new Date(y, m, i).getDay();

    // Начать новую строку в понедельник
    if (dow == 1) {
      html += '<tr>';
    }

    // Если первый день недели не понедельник показать последние дни предидущего месяца
    else if (i == 1) {
      html += '<tr>';
      let k = lastDayOfLastMonth - firstDayOfMonth + 1;
      for (let j = 0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    // Записываем текущий день в цикл
    let chk = new Date();
    let chkY = chk.getFullYear();
    let chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // закрыть строку в воскресенье
    if (dow == 0) {
      html += '</tr>';
    }
    // Если последний день месяца не воскресенье, показать первые дни следующего месяца
    else if (i == lastDateOfMonth) {
      let k = 1;
      for (dow; dow < 7; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  } while (i <= lastDateOfMonth);

  // Конец таблицы
  html += '</table>';

  // Записываем HTML в div
  document.getElementById(this.divId).innerHTML = html;
};

// При загрузке окна
window.onload = function () {

  // Начать календарь
  let c = new Cal("divCal");
  c.showcurr();

  // Привязываем кнопки «Следующий» и «Предыдущий»
  getId('btnNext').onclick = function () {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function () {
    c.previousMonth();
  };
}
// ------Текущее время-----------

function zeroFirstFormat(value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value;
}

function getTimeNow() {
  const t = new Date();
  const day = zeroFirstFormat(t.getDate());
  const month = zeroFirstFormat(t.getMonth() + 1);
  const year = t.getFullYear();
  const hours = zeroFirstFormat(t.getHours());
  const minutes = zeroFirstFormat(t.getMinutes());
  const seconds = zeroFirstFormat(t.getSeconds());

  return `сегодня ${day}.${month}.${year}. ${hours}.${minutes}.${seconds}`;
}

setInterval(function () {
  document.getElementById('data').innerHTML = getTimeNow();
}, 1000);


//-------Оставшееся время-------------

const deadline = '2023-05-11';

function getTimeRemaining(endtime) {
  //кол-во мллсек в конечном времени - время сейчас:
  const t = Date.parse(endtime) - Date.parse(new Date());
  //разница в млсек 
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  // const hours = Math.floor((t / (1000 * 60 * 60) % 24));
  // const minutes = Math.floor((t / 1000 / 60) % 60);
  // const seconds = Math.floor((t / 1000) % 60);

  return `До оплаты осталось ${days} дня.`;
  // return `осталось ${days} дня ${hours} часов ${minutes} минут ${seconds} секунд`;
}

setInterval(function () {
  document.getElementById('deadline').innerHTML = getTimeRemaining(deadline);
}, 1000);

