function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,i,o,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,a=setTimeout(w,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function w(){var e=v();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?m(n,o-(e-c)):n}(e))}function O(e){return a=void 0,p&&r?y(e):(r=i=void 0,f)}function S(){var e=v(),n=h(e);if(r=arguments,i=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=i=a=void 0},S.flush=function(){return void 0===a?f:O(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};let y={};const j=document.querySelector(".feedback-form");!function(){if(localStorage.getItem("feedback-form-state")){y=JSON.parse(localStorage.getItem("feedback-form-state"));for(const e in y)j.elements[e].value=y[e]}}();j.addEventListener("input",e(t)((e=>{y[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500));j.addEventListener("submit",(e=>{if(!y.email||!y.message)return e.preventDefault(),void alert("Заповніть всі поля!");e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log(y),j.reset(),y={}}));
//# sourceMappingURL=03-feedback.12e2a07a.js.map
