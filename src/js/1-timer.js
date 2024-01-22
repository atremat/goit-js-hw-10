//flatpickr  - is a lightweight and powerful datetime picker.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;
const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daySpan: document.querySelector('span[data-days]'),
  hourSpan: document.querySelector('span[data-hours]'),
  minSpan: document.querySelector('span[data-minutes]'),
  secSpan: document.querySelector('span[data-seconds]'),
};

class Timer {
  constructor(onTick) {
    this.intervalId = null;
    this.onTick = onTick;
  }

  start() {
    //disable DateTime input if timer started
    refs.dateInput.disabled = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now(); //this will be most likely deleted
      //time left in ms
      const deltaTime = userSelectedDate - currentTime;
      //converted time from ms to the object { days, hours, minutes, seconds }
      const convertedDeltaTime = this.convertMs(deltaTime);
      //getting values from object and add zeros before single digit numbers using addLeadingZero function
      const days = this.addLeadingZero(convertedDeltaTime.days);
      const hours = this.addLeadingZero(convertedDeltaTime.hours);
      const minutes = this.addLeadingZero(convertedDeltaTime.minutes);
      const seconds = this.addLeadingZero(convertedDeltaTime.seconds);
      //object with fixed zeros
      const time = { days, hours, minutes, seconds };
      //check if time is over and stop the timer
      if (deltaTime <= 0) {
        stop(intervalId);
        return;
      }

      //output how much time left
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(intervalId);
  }

  //converts ms to the object { days, hours, minutes, seconds }
  convertMs(ms) {
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
  addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
}

const timer = new Timer(updateClockFace);

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
      //show message wrong date
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        color: 'red',
        position: 'topRight',
        //TODO here must be more options........
      });

      //button disabled if date&time is in the past
      refs.startBtn.disabled = true;
      //saving selected datetime
      userSelectedDate = selectedDates[0].getTime();
      return;
    }
    //if true, save selected date
    userSelectedDate = selectedDates[0].getTime();
    //enable button
    refs.startBtn.disabled = false;
  },
};

//store the instance of flatpickr
const fp = flatpickr(refs.dateInput, options);

//start button listener
refs.startBtn.addEventListener('click', timer.start.bind(timer));

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.daySpan.textContent = `${days}`;
  refs.hourSpan.textContent = `${hours}`;
  refs.minSpan.textContent = `${minutes}`;
  refs.secSpan.textContent = `${seconds}`;
}
