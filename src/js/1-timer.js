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
  },
};

const refs = {
  dateTime: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

//store the instance of flatpickr
const fp = flatpickr(refs.dateTime, options);

//start button listener
refs.startBtn.addEventListener('click', onBtnClick);

//callback of start button listener
function onBtnClick(e) {
  console.log(e);
}

//converts ms to the object { days, hours, minutes, seconds }
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//adds zero before single digit numbers
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

iziToast.show({
  title: 'Hey',
  message: 'What would you like to add?',
});
