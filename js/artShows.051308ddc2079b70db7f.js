!function(e){function t(t){for(var n,a,l=t[0],s=t[1],i=t[2],c=0,d=[];c<l.length;c++)a=l[c],o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(f&&f(t);d.length;)d.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={2:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/js/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=s;u.push([5,0]),r()}([,function(e,t,r){"use strict";var n,o=(n=r(0))&&n.__esModule?n:{default:n};(0,o.default)("#js-menu-trigger,#js-menu-screen").on("click touchstart",function(e){(0,o.default)("#js-menu, #js-menu-screen").toggleClass("is-visible"),(0,o.default)("#js-menu-trigger").toggleClass("slide close"),e.preventDefault()}),(0,o.default)("#markdown-toc").prepend("<li><h6>Overview</h6></li>")},,,function(e,t,r){"use strict";var n,o=(n=r(0))&&n.__esModule?n:{default:n};r(1);var u=(0,o.default)("#current-shows");!function(e,t){for(var r=Math.floor(Date.now()/1e3),n=0;n<e.length;++n){var u=(0,o.default)(e[n]);t(u,r>parseInt(u.data("time"),10))}}((0,o.default)("#previous-shows > div"),function(e,t){t||(e.detach(),u.prepend(e))}),u.is(":parent")||((0,o.default)("#current-shows").remove(),(0,o.default)("#no-current-shows-message").removeClass("hidden")),(0,o.default)("#show-root").removeClass("load")},function(e,t,r){e.exports=r(4)}]);
//# sourceMappingURL=artShows.051308ddc2079b70db7f.js.map