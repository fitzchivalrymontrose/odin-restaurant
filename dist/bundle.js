(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),s=n(667),c=n.n(s),u=new URL(n(501),n.b),l=o()(a()),d=c()(u);l.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody { \n    background-image: url("+d+");\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n    color: rgb(214, 147, 59);\n    font-size: 28px;\n    font-weight: 800;\n}\n\nh1 {\n    font-size: 36px;\n    text-align: center;\n}\n\n.content {\n    height: fit-content;\n    width: 60vw;\n    background-color: rgba(0, 0, 0, .7);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.nav-bar {\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid rgb(214, 147, 59);\n}\n.nav-bar a {\n    padding: 1.5em 1.5em 1em 1.5em;\n}\n.home-link {\n    border-bottom: 1px solid white;\n}\n\n.page-content {\n    text-align: center;\n    padding: 2em;\n    font-size: 24px;\n    color: rgb(206, 157, 93);\n    font-weight: 600;\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},501:(e,t,n)=>{e.exports=n.p+"be13e741757006acce97.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),c=n.n(s),u=n(216),l=n.n(u),d=n(589),p=n.n(d),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,console.log("It's working for now...");const g=document.createElement("div");g.classList.add("content");const v=document.createElement("nav");v.classList.add("nav-bar");const h=document.createElement("a");h.classList.add("home-link"),h.href="#",h.textContent="Home";const b=document.createElement("a");b.classList.add("menu-link"),b.href="#",b.textContent="Menu";const y=document.createElement("a");y.classList.add("contact-link"),y.href="#",y.textContent="Contact",v.appendChild(h),v.appendChild(b),v.appendChild(y);const x=document.createElement("div");x.classList.add("page-content");const w=document.createElement("p");w.textContent="COFFEE, coffee coffee coffee coffee!!!\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis. Viverra nibh cras pulvinar mattis nunc sed. Eu mi bibendum neque egestas congue quisque egestas diam in. Sed felis eget velit aliquet sagittis id consectetur. Cursus sit amet dictum sit amet justo. Id consectetur purus ut faucibus pulvinar elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tincidunt arcu non sodales neque sodales. Ullamcorper velit sed ullamcorper morbi. Interdum consectetur libero id faucibus. A diam sollicitudin tempor id eu nisl. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis. Viverra nibh cras pulvinar mattis nunc sed. Eu mi bibendum neque egestas congue quisque egestas diam in. Sed felis eget velit aliquet sagittis id consectetur. Cursus sit amet dictum sit amet justo. Id consectetur purus ut faucibus pulvinar elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tincidunt arcu non sodales neque sodales. Ullamcorper velit sed ullamcorper morbi. Interdum consectetur libero id faucibus. A diam sollicitudin tempor id eu nisl. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.",x.appendChild(w),g.appendChild(v),g.appendChild(x),document.body.appendChild(g)})()})();