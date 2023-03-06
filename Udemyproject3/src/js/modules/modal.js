function modal() {
  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  //const modalClosedBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });


  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';//чт стр не прокруч при открытом modal
    //если польз-ль уже открывал сам мод окно то не откр его через время автом-ки
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');//
    document.body.style.overflow = '';//восстан-ем скролл страницы
  }

  //modalClosedBtn.addEventListener('click', closeModal);

  //если клик на подложку или крестик то мод окно закрывается
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  })

  document.addEventListener('keydown', (e) => {// чт закрывалось при Esc
    if (e.code === 'Escape' && modal.classList.contains('show')) {//если наж Esc и открыто мод окно
      closeModal();
    }
  });

  // Модальное окно кот вызовется через опр-й промеж времени
  const modalTimerId = setTimeout(openModal, 50000);

  // показать мод окно есть польз-ль долистал до конца стр   scrollY
  window.addEventListener('scroll', showModalByScroll)// чт событие вып-сь 1 раз { once: true } не подх


  function showModalByScroll() {
    const scrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY + clientHeight >= scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
}

module.exports = modal;
