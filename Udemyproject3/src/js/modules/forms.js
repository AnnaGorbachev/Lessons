import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector, modalTimerId) {

  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'icons/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });




  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);//собрала все данные с формы
      // превращ в массив массивов(formData.entries()),потом в обьект(Object.fromEntries), и в json

      const json = JSON.stringify(Object.fromEntries(formData.entries()));


      postData('http://localhost:3000/requests', json)

        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        });

    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal('.modal', modalTimerId);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal('.modal');
    }, 4000);
  }



  //-----------Vova-------------------
  // function sendRequest({
  //   url,
  //   method,
  //   data,
  //   onSuccess,
  //   onError
  // }) {
  //   const request = new XMLHttpRequest();
  //   try {
  //     request.open(method, url);
  //   } catch (error) {
  //     console.log('open error')
  //     onError(error);
  //     return;
  //   }

  //   request.send(data);

  //   request.addEventListener('load', () => {
  //     if (request.status === 200) {
  //       onSuccess();
  //     } else {
  //       console.log('not 200 error')
  //       onError();
  //     }
  //   });
  //   request.addEventListener('error', () => {
  //     console.log('error')
  //     onError()
  //   })

  // }

  // const forms = document.querySelectorAll('form');
  // const message = {
  //   loading: 'icons/spinner.svg',
  //   success: 'Спасибо! Скоро мы с вами свяжемся',
  //   failure: 'Что-то пошло не так...'
  // };

  // forms.forEach(item => {
  //   postData(item);
  // });

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     let statusMessage = document.createElement('img');
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //               display: block;
  //               margin: 0 auto;
  //           `;
  //     form.insertAdjacentElement('afterend', statusMessage);//для вставки спиннера в конец

  //     const formData = new FormData(form);

  //     const object = {};
  //     formData.forEach(function (value, key) {
  //       object[key] = value;
  //     });
  //     const json = JSON.stringify(object);

  //     sendRequest({
  //       url: 'http://localhost:8080',
  //       method: 'POST',
  //       data: json,
  //       onSuccess: () => {
  //         showThanksModal(message.success);
  //         statusMessage.remove();
  //         form.reset();
  //       },
  //       onError: () => {
  //         statusMessage.remove();
  //         showThanksModal(message.failure);
  //       }
  //     })

  //   });
  // }

  // function showThanksModal(message) {
  //   const prevModalDialog = document.querySelector('.modal__dialog');

  //   prevModalDialog.classList.add('hide');
  //   openModal();

  //   const thanksModal = document.createElement('div');
  //   thanksModal.classList.add('modal__dialog');
  //   thanksModal.innerHTML = `
  //           <div class="modal__content">
  //               <div class="modal__close" data-close>×</div>
  //               <div class="modal__title">${message}</div>
  //           </div>
  //       `;
  //   document.querySelector('.modal').append(thanksModal);
  //   setTimeout(() => {
  //     thanksModal.remove();
  //     prevModalDialog.classList.add('show');
  //     prevModalDialog.classList.remove('hide');
  //     closeModal();
  //   }, 4000);
  // }
}

export default forms;
