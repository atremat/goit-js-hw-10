//importing flatpickr  - is a lightweight and powerful datetime picker.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let userSelectedDate;

//options for flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //this method validates chosen date and time
    //chosen time has to be in the future
    if (selectedDates[0].getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
      //button disabled if date&time is in the past
      refs.startBtn.disabled = true;
      return;
    }
    //if true, save selected date
    userSelectedDate = selectedDates[0].getTime();
    //enable button
    refs.startBtn.disabled = false;
    //Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
  },
};

const refs = {
  dateTime: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

//store the instance of flatpickr
const fp = flatpickr(refs.dateTime, options);

refs.startBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  console.log(e);
}
