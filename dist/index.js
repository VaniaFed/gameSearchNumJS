!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){},function(e,n,t){"use strict";window.onload=function(){const e=function(e,n){let t=e-.5+Math.random()*(n-e+1);return t=Math.round(t)},n=function(e,n,t){let o=document.createElement("div");o.classList.add(n),o.innerHTML=e,t.appendChild(o)},t=function(){let e=document.querySelector(".score");+this.textContent===c?o(e):i(e),this.removeEventListener("click",t),u()},o=function(e){s++,function(e){f+=100,e.innerHTML="Score: "+f}(e),r()},i=function(e){s>1&&s--,function(e){f>=100?f-=100:f=0,e.innerHTML="Score: "+f}(e),r()},r=function(){!function(e,n){n<4?(e.countColumns=3,e.countLines=2):n<6?(e.countColumns=4,e.countLines=3):(e.countColumns=4,e.countLines=4)}(m,s),function(n,t){for(let o=t.countLines*t.countColumns-1;o>=0;o--)n[o]=s<=2?e(10,99):s<=4?e(100,999):e(1e3,9999)}(a,m),c=a[Math.round(Math.random()*(m.countColumns*m.countLines-1))],function(e,t,o){document.querySelector(".container__work__inner").innerHTML="",function(e){document.querySelector(".current_num").innerHTML=e}(o);let i=0;for(let o=0;o<e.countLines;o++){let o=document.getElementsByClassName("container__work__inner"),r=document.createElement("div");r.classList.add("item__row"),o[0].appendChild(r);for(let o=0;o<e.countColumns;o++)n(t[i++],"item__num",r)}}(m,a,c);let t=document.querySelectorAll(".item__num");t.forEach(function(e,n,t){s<=3?(e.style.fontSize="40px",e.style.padding="10px 0"):4===s?(e.style.fontSize="30px",e.style.padding="12px 0"):5===s?(e.style.fontSize="30px",e.style.padding="15px 0"):(e.style.fontSize="26px",e.style.padding="12px 0")}),function(){const n=["scale_element .5s infinite alternate ease-in-out","color_element_blue .5s infinite alternate ease-in-out","color_element_purple .5s infinite alternate ease-in-out","color_element_green .5s infinite alternate ease-in-out","color_element_black .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out"],t=["#2196F3","#009688","#673AB7","#333"];document.querySelectorAll(".item__num").forEach(function(o,i,r){switch(e(1,6)){case 1:o.style.animation=n[0];break;case 2:{let t=e(1,4);o.style.animation=n[t];break}case 3:{let i=e(5,8);o.style.animation=n[i];let r=e(0,3);o.style.background=t[r],o.style.color="#fff";break}}})}()},u=function(){let e=document.getElementsByClassName("item__num");for(let n=0;n<e.length;n++)e[n].addEventListener("click",t)},l=function(){f=0,document.querySelector(".score").innerHTML="Score: "+f,s=1,m.countColumns=0,m.countLines=0};let c,a=[],s=1,f=0,m={countColumns:0,countLines:0};r(),u(),function(){let e=function(e){let n=void 0===typeof e?0:e;return function(t){return 0===n&&((t||function(){})(),n=e),--n}}(45),n=document.querySelector(".timer");setInterval(function(){n.innerHTML="Timer: "+e(l)},1e3)}()}},function(e,n,t){t(1),e.exports=t(0)}]);
//# sourceMappingURL=index.js.map