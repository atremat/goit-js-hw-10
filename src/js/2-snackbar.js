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
    .then(success => {
      console.log(success);
    })
    .catch(error => {
      console.log(error);
    });
});

const createPromiss = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (refs.form.elements.state.value === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      }
      reject(`❌ Rejected promise in ${delay}ms`);
    }, delay);
  });
};
