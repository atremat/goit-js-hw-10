import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as p}from"./assets/vendor-77e16229.js";let u;const e={dateInput:document.querySelector("input#datetime-picker"),startBtn:document.querySelector("button[data-start]"),daySpan:document.querySelector("span[data-days]"),hourSpan:document.querySelector("span[data-hours]"),minSpan:document.querySelector("span[data-minutes]"),secSpan:document.querySelector("span[data-seconds]")};class m{constructor(t){this.intervalId=null,this.onTick=t}start(){e.dateInput.disabled=!0,this.intervalId=setInterval(()=>{const t=Date.now(),n=u-t;if(n<=0){stop(intervalId);return}const r=this.convertMs(n),s=this.addLeadingZero(r);this.onTick(s)},1e3)}stop(){clearInterval(intervalId)}convertMs(t){const a=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:c,seconds:d}}addLeadingZero(t){const{days:n,hours:r,minutes:s,seconds:l}=t,a=n.toString().padStart(2,"0"),i=r.toString().padStart(2,"0"),c=s.toString().padStart(2,"0"),d=l.toString().padStart(2,"0");return{days:a,hours:i,minutes:c,seconds:d}}}const h=new m(g),S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){if(o[0].getTime()<Date.now()){iziToast.show({class:"izitoast-message",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",message:"Please choose a date in the future",messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",iconUrl:"./img/icon-error.svg",iconColor:"#FAFAFB",backgroundColor:"#EF4040",color:"#FFF",position:"topRight",progressBarColor:"#B51B1B"}),e.startBtn.disabled=!0,u=o[0].getTime();return}u=o[0].getTime(),e.startBtn.disabled=!1}};p(e.dateInput,S);e.startBtn.addEventListener("click",()=>{h.start(),e.startBtn.disabled=!0});function g({days:o,hours:t,minutes:n,seconds:r}){e.daySpan.textContent=`${o}`,e.hourSpan.textContent=`${t}`,e.minSpan.textContent=`${n}`,e.secSpan.textContent=`${r}`}
//# sourceMappingURL=commonHelpers.js.map
