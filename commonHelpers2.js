import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const r={form:document.querySelector(".form"),delayInput:document.querySelector("input"),startBtn:document.querySelector("button")};r.startBtn.addEventListener("click",e=>{e.preventDefault();const o=r.delayInput.value;o!==""&&(l(o).then(t=>{i.success({class:"izitoast-message",title:"OK",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",message:`Fulfilled promise in ${t}ms`,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",iconUrl:"img/icon-ok.svg",iconColor:"#FAFAFB",backgroundColor:"#59A10D",color:"#FFF",position:"topRight",progressBarColor:"#B5EA7C"})}).catch(t=>{i.error({class:"izitoast-message",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",message:`Rejected promise in ${t}ms`,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",iconUrl:"./img/icon-error.svg",iconColor:"#FAFAFB",backgroundColor:"#EF4040",color:"#FFF",position:"topRight",progressBarColor:"#B51B1B"})}),r.form.reset())});const l=e=>new Promise((o,t)=>{const s=r.form.elements.state.value;setTimeout(()=>{s==="fulfilled"?o(e):s==="rejected"&&t(e)},e)});
//# sourceMappingURL=commonHelpers2.js.map