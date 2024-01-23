import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input'),
  startBtn: document.querySelector('button'),
};

refs.startBtn.addEventListener('click', e => {
  e.preventDefault();
  const delay = refs.delayInput.value;
  //if input delay is not set then return
  if (delay === '') return;
  createPromiss(delay)
    .then(delay => {
      iziToast.success({
        class: 'izitoast-message',
        title: 'OK',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: './img/icon-ok.svg',
        iconColor: '#FAFAFB',
        backgroundColor: '#59A10D',
        color: '#FFF',
        position: 'topRight',
        progressBarColor: '#B5EA7C',
      });
    })
    .catch(delay => {
      iziToast.error({
        class: 'izitoast-message',
        title: 'Error',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: './img/icon-error.svg',
        iconColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        color: '#FFF',
        position: 'topRight',
        progressBarColor: '#B51B1B',
      });
    });
  //clear form after promise created
  refs.form.reset();
});

const createPromiss = delay => {
  return new Promise((resolve, reject) => {
    const value = refs.form.elements.state.value;
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(delay);
      } else if (value === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
};
