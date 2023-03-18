function closeModal(modalSelector) {

  const modal = document.querySelector(modalSelector);

  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';//восстан-ем скролл страницы
}

function openModal(modalSelector, modalTimerId) {

  const modal = document.querySelector(modalSelector);

  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';//чт стр не прокруч при открытом modal
  //если польз-ль уже открывал сам мод окно то не откр его через время автом-ки

  //console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }

}


function modal(triggerSelector, modalSelector, modalTimerId) {

  const modalTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });

  //если клик на подложку или крестик то мод окно закрывается
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  })

  document.addEventListener('keydown', (e) => {// чт закрывалось при Esc
    if (e.code === 'Escape' && modal.classList.contains('show')) {//если наж Esc и открыто мод окно
      closeModal(modalSelector);
    }
  });



  // показать мод окно есть польз-ль долистал до конца стр   scrollY
  window.addEventListener('scroll', showModalByScroll)// чт событие вып-сь 1 раз { once: true } не подх


  function showModalByScroll() {
    const scrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY + clientHeight >= scrollHeight - 1) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
}

export default modal;
export { closeModal };
export { openModal };
