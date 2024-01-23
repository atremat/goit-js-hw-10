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
  createPromiss(delay)
    .then(value => {
      console.log(value);
      iziToast.show({
        class: 'izitoast',
        title: 'OK',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#59A10D',
        color: '#FFF',
        position: 'topRight',
        iconUrl: '../img/icon-ok.svg',
        iconColor: '#FAFAFB',
        progressBarColor: '#B5EA7C',
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.show({
        class: 'izitoast',
        title: 'Error',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
        color: '#FFF',
        position: 'topRight',
        iconUrl: '../img/icon-error.svg',
        iconColor: '#FAFAFB',
        progressBarColor: '#B51B1B',
      });
    });
});

const createPromiss = delay => {
  return new Promise((resolve, reject) => {
    const value = refs.form.elements.state.value;
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else if (value === 'rejected') {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};
