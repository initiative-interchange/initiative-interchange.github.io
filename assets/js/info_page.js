!function(e){function n(n){for(var r,a,i=n[0],c=n[1],l=n[2],p=0,s=[];p<i.length;p++)a=i[p],o[a]&&s.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={4:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=c;u.push([222,0,1]),t()}({222:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),u=t(37);o()(function(){var e,n=o()("main"),t=o()(".hero > .background"),r=1.5,a=100/r;function i(){var o=Object(u.a)({targets:t.get(),clipPath:"polygon(0 0, 100% 0, 100% ".concat(a,"%, 0 ").concat(a,"%)"),duration:t.height()/r,easing:"linear",autoplay:!1});function i(){var e=Math.max(0,n.scrollTop());o.seek(e)}"function"==typeof e&&e(),n.scroll(i),e=function(){return n.off("scroll",i)},i()}document.body.onresize=i,i()})}});