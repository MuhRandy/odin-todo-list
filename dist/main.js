(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(354),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([t.id,':root {\n  --primary: #6439ff;\n  --secondary: #9b80ff;\n  --line: 1px solid #9c80ff49;\n\n  --urgent: #f0440a;\n  --important: palevioletred;\n  --normal: var(--primary);\n  --low: var(--secondary);\n\n  font-size: 62.5%;\n}\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  min-height: 100vh;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.6rem;\n}\n\nbutton {\n  cursor: pointer;\n  color: inherit;\n  text-align: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n\n  padding: 0;\n  background-color: inherit;\n  border: none;\n}\n\ndialog[open] {\n  position: fixed;\n  top: 0;\n\n  background-color: rgba(0, 0, 0, 0.6);\n  border: none;\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  place-content: center;\n  z-index: 1;\n}\n\ndialog .box {\n  background-color: #fff;\n  padding: 25px;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.box h1 {\n  font-size: 2.2rem;\n}\n\n.box > input {\n  border: none;\n  color: var(--primary);\n  font-size: 2rem;\n}\n\n.box textarea {\n  border: none;\n  color: var(--secondary);\n  font: inherit;\n  font-size: inherit;\n}\n\n.box div {\n  text-align: left;\n  color: var(--secondary);\n}\n\n.box div :is(input, select) {\n  color: var(--secondary);\n  border: none;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.buttons {\n  margin-top: 20px;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n}\n\n.buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  -webkit-border-radius: ;\n  -moz-border-radius: ;\n  -ms-border-radius: ;\n  -o-border-radius: ;\n  font-weight: bold;\n  color: white;\n}\n\n.cancel {\n  border: 1px solid var(--primary);\n  background-color: var(--primary);\n}\n\n.delete {\n  border: 1px solid var(--urgent);\n  background-color: var(--urgent);\n}\n\n.edit,\n.add {\n  border: 1px solid #00b300;\n  background-color: #00b300;\n}\n\ninput[type="checkbox"]:checked + label {\n  text-decoration: line-through;\n  color: var(--secondary);\n}\n\n.aside {\n  background-color: var(--primary);\n  color: white;\n  padding: 10px 20px;\n}\n\n.aside .heading {\n  display: flex;\n  justify-content: space-between;\n  font-size: 3rem;\n}\n\nh1,\n.project-title {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n\n.aside ul {\n  padding-left: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.aside ul li {\n  display: flex;\n  align-items: start;\n  position: relative;\n}\n\n.aside ul li::before {\n  content: "\\eff2";\n  font-size: 20px;\n  margin-right: 5px;\n  font-weight: normal;\n  font-family: tabler-icons;\n}\n\n.main {\n  padding: 30px 50px;\n  color: var(--primary);\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-title h1 {\n  margin: 0;\n}\n\n.project-title button {\n  display: none;\n}\n\n.project-title:hover button {\n  display: block;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.add-to-do {\n  color: var(--secondary);\n  font-size: 1.8rem;\n  display: flex;\n  gap: 3px;\n}\n\n.add-to-do:hover {\n  color: var(--primary);\n}\n\n.icon {\n  display: none;\n}\n\n.title-with-icon:hover .icon {\n  display: block;\n}\n\n.checklist-number-and-priority,\n.checklist-number,\n.priority,\n.due-date {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.checklist-number-and-priority {\n  gap: 5px;\n}\n\n.priority.urgent {\n  color: var(--urgent);\n}\n.priority.important {\n  color: var(--important);\n}\n.priority.normal {\n  color: var(--normal);\n}\n.priority.low {\n  color: var(--low);\n}\n\n.title-with-icon {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo > .title-with-icon {\n  font-size: 1.8rem;\n}\n\n.todo .title input[type="checkbox"] {\n  accent-color: var(--secondary);\n  margin-right: 1ch;\n}\n\n.description {\n  color: var(--secondary);\n  padding-left: 20px;\n  padding-bottom: 5px;\n  border-bottom: var(--line);\n}\n\n.checklists {\n  list-style: none;\n  padding-left: 0;\n  margin-left: 20px;\n  margin-top: 5px;\n}\n\n.checklists li {\n  --ptb: 5px;\n\n  border-bottom: var(--line);\n  padding-top: var(--ptb);\n  padding-bottom: var(--ptb);\n}\n\n.checklists input[type="checkbox"] {\n  margin-right: 1ch;\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:[':root {\n  --primary: #6439ff;\n  --secondary: #9b80ff;\n  --line: 1px solid #9c80ff49;\n\n  --urgent: #f0440a;\n  --important: palevioletred;\n  --normal: var(--primary);\n  --low: var(--secondary);\n\n  font-size: 62.5%;\n}\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  min-height: 100vh;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.6rem;\n}\n\nbutton {\n  cursor: pointer;\n  color: inherit;\n  text-align: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n\n  padding: 0;\n  background-color: inherit;\n  border: none;\n}\n\ndialog[open] {\n  position: fixed;\n  top: 0;\n\n  background-color: rgba(0, 0, 0, 0.6);\n  border: none;\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  place-content: center;\n  z-index: 1;\n}\n\ndialog .box {\n  background-color: #fff;\n  padding: 25px;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.box h1 {\n  font-size: 2.2rem;\n}\n\n.box > input {\n  border: none;\n  color: var(--primary);\n  font-size: 2rem;\n}\n\n.box textarea {\n  border: none;\n  color: var(--secondary);\n  font: inherit;\n  font-size: inherit;\n}\n\n.box div {\n  text-align: left;\n  color: var(--secondary);\n}\n\n.box div :is(input, select) {\n  color: var(--secondary);\n  border: none;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.buttons {\n  margin-top: 20px;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n}\n\n.buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  -webkit-border-radius: ;\n  -moz-border-radius: ;\n  -ms-border-radius: ;\n  -o-border-radius: ;\n  font-weight: bold;\n  color: white;\n}\n\n.cancel {\n  border: 1px solid var(--primary);\n  background-color: var(--primary);\n}\n\n.delete {\n  border: 1px solid var(--urgent);\n  background-color: var(--urgent);\n}\n\n.edit,\n.add {\n  border: 1px solid #00b300;\n  background-color: #00b300;\n}\n\ninput[type="checkbox"]:checked + label {\n  text-decoration: line-through;\n  color: var(--secondary);\n}\n\n.aside {\n  background-color: var(--primary);\n  color: white;\n  padding: 10px 20px;\n}\n\n.aside .heading {\n  display: flex;\n  justify-content: space-between;\n  font-size: 3rem;\n}\n\nh1,\n.project-title {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n\n.aside ul {\n  padding-left: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.aside ul li {\n  display: flex;\n  align-items: start;\n  position: relative;\n}\n\n.aside ul li::before {\n  content: "\\eff2";\n  font-size: 20px;\n  margin-right: 5px;\n  font-weight: normal;\n  font-family: tabler-icons;\n}\n\n.main {\n  padding: 30px 50px;\n  color: var(--primary);\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-title h1 {\n  margin: 0;\n}\n\n.project-title button {\n  display: none;\n}\n\n.project-title:hover button {\n  display: block;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.add-to-do {\n  color: var(--secondary);\n  font-size: 1.8rem;\n  display: flex;\n  gap: 3px;\n}\n\n.add-to-do:hover {\n  color: var(--primary);\n}\n\n.icon {\n  display: none;\n}\n\n.title-with-icon:hover .icon {\n  display: block;\n}\n\n.checklist-number-and-priority,\n.checklist-number,\n.priority,\n.due-date {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.checklist-number-and-priority {\n  gap: 5px;\n}\n\n.priority.urgent {\n  color: var(--urgent);\n}\n.priority.important {\n  color: var(--important);\n}\n.priority.normal {\n  color: var(--normal);\n}\n.priority.low {\n  color: var(--low);\n}\n\n.title-with-icon {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo > .title-with-icon {\n  font-size: 1.8rem;\n}\n\n.todo .title input[type="checkbox"] {\n  accent-color: var(--secondary);\n  margin-right: 1ch;\n}\n\n.description {\n  color: var(--secondary);\n  padding-left: 20px;\n  padding-bottom: 5px;\n  border-bottom: var(--line);\n}\n\n.checklists {\n  list-style: none;\n  padding-left: 0;\n  margin-left: 20px;\n  margin-top: 5px;\n}\n\n.checklists li {\n  --ptb: 5px;\n\n  border-bottom: var(--line);\n  padding-top: var(--ptb);\n  padding-bottom: var(--ptb);\n}\n\n.checklists input[type="checkbox"] {\n  margin-right: 1ch;\n}\n'],sourceRoot:""}]);const s=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,A="".concat(d," ").concat(l);i[d]=l+1;var u=n(A),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var p=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:A,updater:p,references:1})}a.push(A)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=o(t,r),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}function o(t){return function(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}(t,Date.now())}function r(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function i(t,e){const n=r(t),o=r(e),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,Math.pow(10,8);const a=43200,s=1440;function c(t){const e=r(t);return+function(t){const e=r(t);return e.setHours(23,59,59,999),e}(e)==+function(t){const e=r(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}(e)}function d(t,e){const n=r(t),o=r(e),a=i(n,o),s=Math.abs(function(t,e){const n=r(t),o=r(e);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}(n,o));let d;if(s<1)d=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*s);let e=i(n,o)===-a;c(r(t))&&1===s&&1===i(t,o)&&(e=!1),d=a*(s-Number(e))}return 0===d?0:d}function l(t,e,n){const o=function(t,e){return+r(t)-+r(e)}(t,e)/1e3;return(i=n?.roundingMethod,t=>{const e=(i?Math[i]:Math.trunc)(t);return 0===e?0:e})(o);var i}const A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const h={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},p={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return(e,n)=>{let o;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;o=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;o=t.values[r]||t.values[e]}return o[t.argumentCallback?t.argumentCallback(e):e]}}const m={ordinalNumber:(t,e)=>{const n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function C(t){return(e,n={})=>{const o=n.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;const a=i[0],s=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(a))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(a))return e}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(a.length)}}}const f={ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(E.matchPattern);if(!n)return null;const o=n[0],r=t.match(E.parsePattern);if(!r)return null;let i=E.valueCallback?E.valueCallback(r[0]):r[0];return i=e.valueCallback?e.valueCallback(i):i,{value:i,rest:t.slice(o.length)}}),era:C({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:C({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:C({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:C({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var E;const b={code:"en-US",formatDistance:(t,e,n)=>{let o;const r=A[t];return o="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o},formatLong:h,formatRelative:(t,e,n,o)=>p[t],localize:m,match:f,options:{weekStartsOn:0,firstWeekContainsDate:1}};let B={};function y(){return B}function v(t){const e=r(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function x(t,e){return function(t,e,n){const o=y(),c=n?.locale??o.locale??b,A=i(t,e);if(isNaN(A))throw new RangeError("Invalid time value");const u=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:A});let h,p;A>0?(h=r(e),p=r(t)):(h=r(t),p=r(e));const g=l(p,h),m=(v(p)-v(h))/1e3,C=Math.round((g-m)/60);let f;if(C<2)return n?.includeSeconds?g<5?c.formatDistance("lessThanXSeconds",5,u):g<10?c.formatDistance("lessThanXSeconds",10,u):g<20?c.formatDistance("lessThanXSeconds",20,u):g<40?c.formatDistance("halfAMinute",0,u):g<60?c.formatDistance("lessThanXMinutes",1,u):c.formatDistance("xMinutes",1,u):0===C?c.formatDistance("lessThanXMinutes",1,u):c.formatDistance("xMinutes",C,u);if(C<45)return c.formatDistance("xMinutes",C,u);if(C<90)return c.formatDistance("aboutXHours",1,u);if(C<s){const t=Math.round(C/60);return c.formatDistance("aboutXHours",t,u)}if(C<2520)return c.formatDistance("xDays",1,u);if(C<a){const t=Math.round(C/s);return c.formatDistance("xDays",t,u)}if(C<2*a)return f=Math.round(C/a),c.formatDistance("aboutXMonths",f,u);if(f=d(p,h),f<12){const t=Math.round(C/a);return c.formatDistance("xMonths",t,u)}{const t=f%12,e=Math.trunc(f/12);return t<3?c.formatDistance("aboutXYears",e,u):t<9?c.formatDistance("overXYears",e,u):c.formatDistance("almostXYears",e+1,u)}}(t,o(t),e)}class k{static save(t,e){localStorage.setItem(t,JSON.stringify(e))}static load(t){const e=localStorage.getItem(t);return e?JSON.parse(e):null}static remove(t){localStorage.removeItem(t)}static clearAll(){localStorage.clear()}}class D{static isDateValid(t){return!isNaN(new Date(t).getTime())}static isProjectExist(t,e){if(0===t.length)throw new Error("No such project with id "+e)}static isItemExist(t,e){if(0===t.filter((t=>t.getId()===e)).length)throw new Error("No such todo or checklist with id "+e)}}class j{#t=!1;getCompleteStatus(){return this.#t}setCompleteStatus(t){this.#t=t,N.saveProjects()}toggleComplete(){this.#t=!this.#t}}class I{#e="normal";#n=["urgent","important","normal","low"];setPriority(t){let e=t;isNaN(t)&&(e=this.#n.findIndex((e=>e===t))),this.#e=this.#n[e],N.saveProjects()}getPriority(){return this.#e}}class w{#o;#r;#i;#a;#s=new j;constructor(t,e,n,o){this.#o=t,this.#a=e,this.#i=n,this.#r=o}toggleComplete(){this.#s.toggleComplete()}isComplete(){return this.#s.getCompleteStatus()}setTitle(t){this.#o=t}setCompleteStatus(t){this.#s.setCompleteStatus(t)}getTitle(){return this.#o}getId(){return this.#r}getTodoId(){return this.#i}getProjectId(){return this.#a}}class M{#a;#i;#c=[];constructor(t,e){this.#i=e,this.#a=t}addChecklistItem(t,e=(new Date).getTime()){const n=new w(t,this.#a,this.#i,e);return this.#c.push(n),N.saveProjects(),n}deleteChecklist(t){D.isItemExist(this.#c,t),this.#c=this.#c.filter((e=>e.getId()!==t)),N.saveProjects()}getChecklists(){return this.#c}getChecklist(t){return D.isItemExist(this.#c,t),this.#c.filter((e=>e.getId()===t))[0]}getChecklistData(t){const e=this.getChecklist(t);return{title:e.getTitle(),id:e.getId(),todoId:e.getTodoId(),projectId:e.getProjectId(),isComplete:e.isComplete()}}getChecklistsData(){return this.getChecklists().map((t=>this.getChecklistData(t.getId())))}}class P{#o;#d;#r;#a;#l="";#A="";#s=new j;#u=new I;#h;constructor(t,e,n,o){this.#o=t,this.#d=e,this.#r=o,this.#a=n,this.#h=new M(n,o)}setTitle(t){this.#o=t}setDescription(t){this.#d=t}setPriority(t){this.#u.setPriority(t)}setDueDate(t){D.isDateValid(t)&&(this.#A=new Date(t).toISOString().substring(0,10)),N.saveProjects()}setNotes(t){this.#l=t}setCompleteStatus(t){this.#s.setCompleteStatus(t)}toggleComplete(){this.#s.toggleComplete()}isComplete(){return this.#s.getCompleteStatus()}addChecklistItem(t,e=(new Date).getTime()){return this.#h.addChecklistItem(t,e)}getTitle(){return this.#o}getDescription(){return this.#d}getChecklists(){return this.#h.getChecklists()}getPriority(){return this.#u.getPriority()}getNotes(){return this.#l}getDueDate(){return this.#A}getId(){return this.#r}getProjectId(){return this.#a}getChecklistManager(){return this.#h}toggleChecklistItem(t){this.getChecklists()[t].toggleComplete()}}class T{#a;#p=[];constructor(t){this.#a=t}createTodo(t,e,n=(new Date).getTime()){const o=new P(t,e,this.#a,n);return this.#p.push(o),N.saveProjects(),o}deleteTodo(t){D.isItemExist(this.#p,t),this.#p=this.#p.filter((e=>e.getId()!==t)),N.saveProjects()}getTodo(t){return D.isItemExist(this.#p,t),this.#p.filter((e=>e.getId()===t))[0]}getTodoData(t){const e=this.getTodo(t),n=e.getChecklistManager().getChecklists().length;return{title:e.getTitle(),id:e.getId(),projectId:e.getProjectId(),description:e.getDescription(),notes:e.getNotes(),dueDate:e.getDueDate(),isComplete:e.isComplete(),priority:e.getPriority(),checklistNumber:n}}getTodos(){return this.#p}getTodosData(){return this.getTodos().map((t=>this.getTodoData(t.getId())))}}class S{#o;#r;#g;constructor(t,e){this.#o=t,this.#r=e,this.#g=new T(e)}setTitle(t){this.#o=t}getTitle(){return this.#o}getId(){return this.#r}getTodos(){return this.#g.getTodos()}getTodoManager(){return this.#g}}class W{static print(t){t.forEach((t=>{console.log(`Project: ${t.getTitle()}`),t.getTodos().forEach(((t,e)=>{console.log(`${e+1}. ${t.getTitle()} - ${t.getPriority()} ${t.isComplete()?"✅":"❎"}`),t.getNotes()&&console.log(`  Notes: ${t.getNotes()}`),t.getDueDate()&&console.log(`  Due Date: ${t.getDueDate()}`),t.getChecklists().forEach(((t,e)=>{console.log(`    Checklist ${e+1}: ${t.getTitle()} - Priority: ${t.getPriority()} - ${t.isComplete()?"✅":"❎"}`)}))}))}))}}class z{static#m=[];static createProject(t,e=(new Date).getTime()){const n=new S(t,e);return this.#m.push(n),N.saveProjects(),n}static printProjects(){W.print(this.#m)}static getProjects(){return this.#m}static getProject(t){const e=this.#m.filter((e=>e.getId()===t));return D.isProjectExist(e,t),e[0]}static getProjectData(t){const e=this.getProject(t);return{title:e.getTitle(),id:e.getId()}}static getProjectsData(){return this.#m.map((t=>this.getProjectData(t.getId())))}static deleteProject(t){this.getProject(t),this.#m=this.#m.filter((e=>e.getId()!==t)),N.saveProjects()}}class N{static getTodoManager(t){return z.getProject(t).getTodoManager()}static getChecklistManager(t,e){return this.getTodoManager(t).getTodo(e).getChecklistManager()}static saveProjects(){const t=z.getProjects().map((t=>({...z.getProjectData(t.getId()),todos:t.getTodos().map((e=>({...this.getTodoManager(t.getId()).getTodoData(e.getId()),checklists:e.getChecklists().map((n=>this.getChecklistManager(t.getId(),e.getId()).getChecklistData(n.getId())))})))})));k.save("projects",t)}static loadProjects(){const t=k.load("projects");t&&0!==t.length||(k.save("projects",[{title:"Default",id:(new Date).getTime()}]),this.loadProjects()),this.transform(t)}static transform(t){t?.forEach((t=>{const e=z.createProject(t.title,t.id).getTodoManager();t.todos?.forEach((t=>{const n=e.createTodo(t.title,t.description,t.id);n.setNotes(t.notes),n.setDueDate(t.dueDate),n.setPriority(t.priority),n.setCompleteStatus(t.isComplete),t.checklists.forEach((t=>{n.addChecklistItem(t.title,t.id).setCompleteStatus(t.isComplete)}))}))}))}}class Y{static addProject(t,e,n=null){if(console.log(t),0===t.title.length)return console.log("Title required!");switch(e){case"Project":const o=z.createProject(t.title);this.#C(o.getId());break;case"To-Do":const r=N.getTodoManager(n.id).createTodo(t.title,t.description);r.setPriority(t.priority),r.setDueDate(t.dueDate),this.#C(r.getProjectId());break;case"Checklist":const i=N.getChecklistManager(n.projectId,n.id);console.log("masuk");const a=i.addChecklistItem(t.title);this.#C(a.getProjectId());break;default:throw new Error(`item type ${e} not recognized`)}}static deleteItem(t){t.projectId||(z.deleteProject(t.id),this.#C()),!t.todoId&&t.projectId&&N.getTodoManager(t.projectId).deleteTodo(t.id),t.todoId&&N.getChecklistManager(t.projectId,t.todoId).deleteChecklist(t.id),this.#C(t.projectId)}static saveChange(t,e){if(e.projectId||z.getProject(e.id).setTitle(t.title),!e.todoId&&e.projectId){const n=N.getTodoManager(e.projectId).getTodo(e.id);n.setTitle(t.title),n.setDescription(t.description),n.setPriority(t.priority),n.setDueDate(t.dueDate)}e.todoId&&N.getChecklistManager(e.projectId,e.todoId).getChecklist(e.id).setTitle(t.title),this.#C(e.projectId?e.projectId:e.id)}static toggleIsComplete(t){t.todoId||N.getTodoManager(t.projectId).getTodo(t.id).toggleComplete(),t.todoId&&N.getChecklistManager(t.projectId,t.todoId).getChecklist(t.id).toggleComplete()}static#C(t=null){document.querySelector("dialog").close(),q.renderProjectsList(),t&&q.renderProject(t)}}class L{static createTodos(t){const e=this.createContainer("todos"),n=N.getTodoManager(t),o=this.createButtonWithIcon("pencil-plus"),r=document.createElement("span");return r.textContent="Add To-Do",o.className="add-to-do",o.addEventListener("click",(()=>q.renderAddItemDialog("To-Do",{id:t}))),n.getTodosData(t).map((n=>{const o=this.createContainer("todo"),r=this.#f(n),i=this.createContainer("description"),a=document.createElement("p"),s=this.createContainer("checklist-number-and-priority"),c=this.#E("subtask","checklist-number",n.checklistNumber),d=this.#E("info-circle",`priority ${n.priority}`,n.priority),l=this.#E("calendar-due","due-date",n.dueDate?x(n.dueDate):""),A=this.#b(t,n.id);s.appendChild(c),n.dueDate&&s.appendChild(l),s.appendChild(d),a.textContent=n.description,i.appendChild(a),i.appendChild(s),o.appendChild(r),o.appendChild(i),o.appendChild(A),e.appendChild(o)})),o.appendChild(r),e.appendChild(o),e}static#b(t,e){const n=document.createElement("ul");return n.className="checklists",N.getChecklistManager(t,e).getChecklistsData(t,e).map((t=>{const e=document.createElement("li"),o=this.#f(t);e.appendChild(o),n.appendChild(e)})),n}static createAddItemBoxDialog(t,e=null){const n=this.createContainer("box"),o=document.createElement("h1"),r=document.createElement("input"),i=document.createElement("textarea"),a=this.#B([{text:"urgent"},{text:"important"},{text:"normal",selected:!0},{text:"low"}]),s=this.#y("Priority :","priority",a),c=this.#v(),d=this.#y("Due date :","due-date",c),l=this.#x("add","Add",(()=>Y.addProject({title:r.value,description:i.value,priority:a.value,dueDate:c.value},t,e)));return o.textContent=`Add New ${t}`,r.placeholder=`New ${t}`,i.placeholder="description...",n.appendChild(o),n.appendChild(r),"To-Do"===t&&(n.appendChild(i),n.appendChild(s),n.appendChild(d)),n.appendChild(l),n}static createDeleteItemBoxDialog(t,e){const n=this.createContainer("box"),o=document.createElement("h1"),r=document.createElement("p"),i=this.#x("delete","Delete",(()=>Y.deleteItem(e)));return o.textContent=`Delete ${t}?`,r.textContent=`${t} "${e.title}" will be permanently deleted`,n.appendChild(o),n.appendChild(r),n.appendChild(i),n}static createEditItemBoxDialog(t,e){const n=this.createContainer("box"),o=document.createElement("h1"),r=document.createElement("input"),i=document.createElement("textarea"),a=this.#B([{text:"urgent"},{text:"important"},{text:"normal",selected:!0},{text:"low"}]),s=this.#y("Priority :","priority",a),c=this.#v(),d=this.#y("Due date :","due-date",c),l=this.#x("edit","Save",(()=>Y.saveChange({title:r.value,description:i.value,priority:a.value,dueDate:c.value},e)));return o.textContent=`Edit ${t}`,r.value=e.title,i.textContent=e.description,a.value=e.priority,c.value=e.dueDate,n.appendChild(o),n.appendChild(r),"To-Do"===t&&(n.appendChild(i),n.appendChild(s),n.appendChild(d)),n.appendChild(l),n}static#y(t,e,n){const o=document.createElement("div"),r=this.#k(e,t);return n.id=e,o.appendChild(r),o.appendChild(n),o}static#B(t){const e=document.createElement("select");return t.forEach((t=>{const n=document.createElement("option");n.textContent=t.text,n.value=t.text,n.selected=t.selected,e.appendChild(n)})),e}static#v(){const t=document.createElement("input"),e=(new Date).toISOString().substring(0,10);return t.type="date",t.value=e,t.min=e,t}static#x(t,e,n){const o=document.querySelector("dialog"),r=this.createContainer("buttons"),i=this.#D("cancel","Cancel"),a=this.#D(t,e);return i.addEventListener("click",(()=>{o.textContent="",o.close()})),a.addEventListener("click",n),r.appendChild(i),r.appendChild(a),r}static#j(t){const e=document.createElement("input"),n=t.isComplete;return e.type="checkbox",e.id=t.id,t.todoId&&(e.dataset.todoId=t.todoId),e.checked=n,e.addEventListener("click",(()=>{Y.toggleIsComplete(t),N.saveProjects()})),e}static#k(t,e){const n=document.createElement("label");return n.htmlFor=t,n.textContent=e,n}static createContainer(t){const e=document.createElement("div");return e.className=t,e}static#I(t){const e=this.createContainer("title"),n=this.#j(t),o=this.#k(t.id,t.title);return e.appendChild(n),e.appendChild(o),e}static#f(t){const e=this.createContainer("title-with-icon"),n=this.#I(t),o=this.createContainer("icon"),r=this.createButtonWithIcon("plus"),i=this.createButtonWithIcon("edit"),a=this.createButtonWithIcon("trash");return r.addEventListener("click",(()=>q.renderAddItemDialog("Checklist",t))),i.addEventListener("click",(()=>q.renderEditItemDialog(t.todoId?"Checklist":"To-Do",t))),a.addEventListener("click",(()=>q.renderDeleteItemDialog(t.todoId?"Checklist":"To-Do",t))),t.todoId||o.appendChild(r),o.appendChild(i),o.appendChild(a),e.appendChild(n),e.appendChild(o),e}static#w(t){const e=document.createElement("i");return e.className=`ti ti-${t}`,e}static#D(t,e){const n=document.createElement("button");return n.className=t,n.textContent=e,n}static createButtonWithIcon(t){const e=document.createElement("button"),n=this.#w(t);return e.appendChild(n),e}static#E(t,e,n){const o=this.createContainer(e),r=this.#w(t),i=document.createElement("span");return i.textContent=n,o.appendChild(r),o.appendChild(i),o}}class q{static renderProjectsList(){const t=document.querySelector(".projects");t.textContent="",z.getProjectsData().map(((e,n)=>{const o=document.createElement("li"),r=document.createElement("button");r.textContent=e.title,r.addEventListener("click",(()=>this.renderProject(e.id))),o.appendChild(r),t.appendChild(o),0===n&&this.renderProject(e.id)})),0===z.getProjectsData().length&&N.loadProjects()}static renderProject(t){const e=z.getProjectData(t),n=document.querySelector(".main"),o=L.createContainer("project-title"),r=document.createElement("h1"),i=L.createButtonWithIcon("edit"),a=L.createButtonWithIcon("trash"),s=L.createTodos(t);n.textContent="",r.textContent=e.title,i.addEventListener("click",(()=>this.renderEditItemDialog("Project",e))),a.addEventListener("click",(()=>this.renderDeleteItemDialog("Project",e))),o.appendChild(r),o.appendChild(i),o.appendChild(a),n.appendChild(o),n.appendChild(s)}static renderEditItemDialog(t,e){const n=L.createEditItemBoxDialog(t,e);this.#M(n)}static renderDeleteItemDialog(t,e){const n=L.createDeleteItemBoxDialog(t,e);this.#M(n)}static renderAddItemDialog(t,e=null){const n=L.createAddItemBoxDialog(t,e);this.#M(n)}static#M(t){const e=document.querySelector("dialog");e.textContent="",e.appendChild(t),e.show()}}var X=n(72),$=n.n(X),F=n(825),Q=n.n(F),O=n(659),R=n.n(O),J=n(56),U=n.n(J),V=n(540),H=n.n(V),Z=n(113),_=n.n(Z),G=n(365),K={};K.styleTagTransform=_(),K.setAttributes=U(),K.insert=R().bind(null,"head"),K.domAPI=Q(),K.insertStyleElement=H(),$()(G.A,K),G.A&&G.A.locals&&G.A.locals,N.loadProjects(),q.renderProjectsList(),document.querySelector(".heading button").addEventListener("click",(()=>q.renderAddItemDialog("Project")))})();
//# sourceMappingURL=main.js.map