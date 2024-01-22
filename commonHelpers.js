import{f as m}from"./assets/vendor-2b44ac2e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();let l;const s={dateInput:document.querySelector("input#datetime-picker"),startBtn:document.querySelector("button[data-start]"),daySpan:document.querySelector("span[data-days]"),hourSpan:document.querySelector("span[data-hours]"),minSpan:document.querySelector("span[data-minutes]"),secSpan:document.querySelector("span[data-seconds]")};class f{constructor(o){this.intervalId=null,this.onTick=o}start(){s.dateInput.disabled=!0,this.intervalId=setInterval(()=>{const o=Date.now(),a=l-o,r=y(a),t=c(r.days),e=c(r.hours),i=c(r.minutes),u=c(r.seconds),d={days:t,hours:e,minutes:i,seconds:u};if(a<=0){stop(intervalId);return}this.onTick(d)},1e3)}stop(){clearInterval(intervalId)}}const p=new f(S),h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){if(n[0].getTime()<Date.now()){iziToast.show({title:"Error",message:"Please choose a date in the future",color:"red",position:"topRight"}),s.startBtn.disabled=!0,l=n[0].getTime();return}l=n[0].getTime(),s.startBtn.disabled=!1}};m(s.dateInput,h);s.startBtn.addEventListener("click",()=>{p.start()});function y(n){const e=Math.floor(n/864e5),i=Math.floor(n%864e5/36e5),u=Math.floor(n%864e5%36e5/6e4),d=Math.floor(n%864e5%36e5%6e4/1e3);return{days:e,hours:i,minutes:u,seconds:d}}function c(n){return n.toString().padStart(2,"0")}function S({days:n,hours:o,minutes:a,seconds:r}){s.daySpan.textContent=`${n}`,s.hourSpan.textContent=`${o}`,s.minSpan.textContent=`${a}`,s.secSpan.textContent=`${r}`}
//# sourceMappingURL=commonHelpers.js.map
