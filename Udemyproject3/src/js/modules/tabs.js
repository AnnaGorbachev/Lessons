

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);

  // 1.ф-я кот будет скрывать ненужные нам табы
  // 2.ф-я кот показывает нужный таб
  // 3.назначить обр-ки событий на меню фитнесс и т д

  function hideTabContent() {
    tabsContent.forEach(item => { //скрываем .tabcontent 
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass); // скрываем .tabheader__item_active пропис-й в html
    })
  }

  function showTabContent(i = 0) { //показ-ем i-й эл с  .tabheader__item_active
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {// тк нам надо передавать 'tabheader__item'без точки
      // опр-ем номер куда кликнул польз-ль чт по этому номеру вызвать showTabContent();
      // перебираем все tabs и сравниваем
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

}

export default tabs;
