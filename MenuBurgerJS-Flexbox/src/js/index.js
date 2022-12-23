

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');

  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {

      const menuArrow = menuArrows[i];
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {

  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');//убираем скролл при открытом меню
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {

  menuLinks.forEach(menuLink => {

    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(event) {

    const menuLink = event.target;

    // пров заполнен ли этот data-атрибут && сущ-ет ли обьект на кот сылается данный data-атрибут
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {

      // получ-ем в const сам этот обьект
      const gotoBlock = document.querySelector(menuLink.dataset.goto);

      // gotoBlockValue-точное положен этого об с уч высоты шапки
      // встр ф-я getBoundingClientRect().top -расст от верха в px + кол-во прокруч px - высота шапки
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;


      if (iconMenu.classList.contains('_active')) {//если iconMenu содержит _active т.е если меню открыто
        document.body.classList.remove('_lock');//то убираем классы кот мы доб-ли при открытии его
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');

      }

      // это заставит кусочек прокрутиться
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });

      // чт отключ р-ту ссылки -чт она просто вып-ла прокрутку
      event.preventDefault();

    }

  }

}





// для разработчика-чт автоматич присваивался класс

window.addEventListener('resize', function () {
  if (isMobile.any()) {
    document.body.classList.add('_touch');
    document.body.classList.remove('_pc');
  } else {
    document.body.classList.remove('_touch');
    document.body.classList.add('_pc');
  }
})
