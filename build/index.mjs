/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var r=function(){function t(){}return t.prototype[Symbol.iterator]=function(){return n(this,(function(t){return[2]}))},t}(),o=function(t){function n(e){var n=t.call(this)||this;return n.options=e,n}return e(n,t),n.prototype.reduce=function(t,e){void 0===e&&(e=0);for(var n=e,r=this[Symbol.iterator](),o=r.next(),i=0;!o.done;)n=t(n,o.value,i),i+=1,o=r.next();return n},Object.defineProperty(n.prototype,"length",{get:function(){for(var t=this[Symbol.iterator](),e=0;!t.next().done;)e++;return e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"iterator",{get:function(){return this[Symbol.iterator]()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"stringify",{get:function(){return this.reduce((function(t,e){return String(t)+String(e)}),"")},enumerable:!1,configurable:!0}),n}(r),i=function(t){function r(e,n){var r=t.call(this,n)||this;return r.metric=e,r}return e(r,t),r.prototype.setSearchMetricMap=function(t){this.dateGetters={ms:t.getTime,s:t.getSeconds,m:t.getMinutes,h:t.getHours,D:t.getDate,M:t.getMonth,Y:t.getFullYear},this.dateSetters={ms:t.setTime,s:t.setSeconds,m:t.setMinutes,h:t.setHours,D:t.setDate,M:t.setMonth,Y:t.setFullYear}},r.prototype.getTime=function(t){return this.dateGetters||this.setSearchMetricMap(t),this.dateGetters[this.metric].call(t)},r.prototype.setTime=function(t,e){return this.dateSetters||this.setSearchMetricMap(t),this.dateSetters[this.metric].call(t,e)},r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p,d,b,y,m=this;return n(this,(function(n){switch(n.label){case 0:t=this.options.start,e=void 0===t?new Date:t,r=this.options,o=r.end,i=void 0===o?1/0:o,a=r.step,s=void 0===a?1:a,u=r.count,c=r.map,l=r.filter,f=r.leapYear,h=r.weekdays,p=0,d=0,e=new Date(e),b=function(t){return t%400==0||t%100!=0&&t%4==0},y=function(){m.setTime(e,m.getTime(e)+s)},n.label=1;case 1:return u&&p<u||!u&&e<=i?l&&!l(new Date(e),d)?(d++,y(),[3,1]):f&&!b(e.getFullYear())||h&&-1===h.indexOf(e.getDay())?(y(),[3,1]):c?[4,c(new Date(e),p)]:[3,3]:[3,6];case 2:return n.sent(),[3,5];case 3:return[4,new Date(e)];case 4:n.sent(),n.label=5;case 5:return p++,d++,y(),[3,1];case 6:return[2]}}))},r}(o),a=function(t){function n(e){return t.call(this,e)||this}return e(n,t),n}(o);function s(t,e,n){var r=""+("+"===n?t+e:t*e);if(r.length<16)return"+"===n?t+e:t*e;var o,i=""+t,a=""+e,s=r.indexOf("."),u=r.lastIndexOf("e"),c=i.indexOf("."),l=i.lastIndexOf("e"),f=a.indexOf("."),h=a.lastIndexOf("e");if(o=-1!==u?r.slice(u,r.length):"",-1===u&&(u=r.length),-1===l&&(l=i.length),-1===h&&(h=a.length),u-s-1>=17-s&&(l-c-1>=16-c||h-f-1>=16-f))return t+e;if(u-s-1<16-s)return"+"===n?t+e:t*e;var p=r.length-r.indexOf(".")-2;if("9"===r[r.length-2]){var d=r+"e"+p;return+(+(d=Math.ceil(Number(d))+"e"+-p)+o)}return+((r=r.slice(0,(i.length>a.length?i.length:a.length)+1))+o)}var u=function(t,e){return s(t,e,"+")},c=function(t,e){return s(t,e,"*")},l=function(t){function r(e){return t.call(this,e||{start:0,end:1/0,step:1,float:!1})||this}return e(r,t),Object.defineProperty(r.prototype,"sum",{get:function(){return this.reduce(u)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"product",{get:function(){return this.reduce(c,1)},enumerable:!1,configurable:!0}),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,c,l,f,h,p,d,b;return n(this,(function(n){switch(n.label){case 0:t=this.options.start,e=void 0===t?0:t,r=this.options,o=r.end,i=void 0===o?1/0:o,a=r.step,s=void 0===a?1:a,c=r.count,l=r.float,f=r.map,h=r.filter,p=0,d=0,b=function(){if(l)return e=u(e,s);e+=s},n.label=1;case 1:return c&&p<c||!c&&e<=i?h&&!h(e,d)?(d++,b(),[3,1]):f?[4,f(e,p)]:[3,3]:[3,6];case 2:return n.sent(),[3,5];case 3:return[4,e];case 4:n.sent(),n.label=5;case 5:return p++,d++,b(),[3,1];case 6:return[2]}}))},r}(o),f=function(t){function r(e){return t.call(this,e||{start:"A",end:"Z",step:1})||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p;return n(this,(function(n){switch(n.label){case 0:t=this.options.start,e=void 0===t?"A":t,r=this.options,o=r.end,i=void 0===o?"Z":o,a=r.step,s=void 0===a?1:a,u=r.count,c=r.map,l=r.filter,f=0,h=0,p=function(){return e=String.fromCodePoint(e.codePointAt(0)+s)},n.label=1;case 1:return u&&f<u||!u&&e<=i?l&&!l(e,h)?(h++,p(),[3,1]):c?[4,c(e,f)]:[3,3]:[3,6];case 2:return n.sent(),[3,5];case 3:return[4,e];case 4:n.sent(),n.label=5;case 5:return f++,h++,p(),[3,1];case 6:return[2]}}))},r}(o),h=function(t){function r(e){var n=t.call(this,e)||this;return n.options.source=Array.from(n.options.source),n}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p,d;return n(this,(function(n){switch(n.label){case 0:t=this.options.start,e=void 0===t?0:t,r=this.options,o=r.source,i=r.end,a=void 0===i?this.options.source.length:i,s=r.step,u=void 0===s?1:s,c=r.count,l=r.map,f=r.filter,h=0,p=0,d=function(){return e+=u},n.label=1;case 1:return void 0!==o[e]&&(c&&h<c||!c&&e<=a)?f&&!f(o[e],p)?(p++,d(),[3,1]):l?[4,l(o[e],h)]:[3,3]:[3,6];case 2:return n.sent(),[3,5];case 3:return[4,o[e]];case 4:n.sent(),n.label=5;case 5:return h++,p++,d(),[3,1];case 6:return[2]}}))},r}(o),p=function(t){function r(e){return t.call(this,e||{start:"#000000",end:"#FFFFFF",step:1})||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p,d;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.start,r=void 0===e?"#000000":e,o=t.end,i=void 0===o?"#FFFFFF":o,a=this.options,s=a.step,u=void 0===s?1:s,c=a.count,l=a.map,f=a.filter,h=0,p=0,r=r.toLowerCase(),i=i.toLowerCase(),d=function(){var t=(parseInt(r.slice(1),16)+u).toString(16),e="";6!==t.length&&(e=Array.from({length:6-t.length},(function(){return"0"})).join("")),r="#"+e+t},n.label=1;case 1:return c&&h<c||!c&&r<=i?f&&!f(r,p)?(p++,d(),[3,1]):l?[4,l(r,h)]:[3,3]:[3,6];case 2:return n.sent(),[3,5];case 3:return[4,r];case 4:n.sent(),n.label=5;case 5:return h++,p++,d(),[3,1];case 6:return[2]}}))},r}(o),d=function(t){function n(e){return t.call(this,"ms",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),b=function(t){function n(e){return t.call(this,"s",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),y=function(t){function n(e){return t.call(this,"m",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),m=function(t){function n(e){return t.call(this,"h",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),v=function(t){function n(e){return t.call(this,"D",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),g=function(t){function n(e){return t.call(this,"M",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),w=function(t){function n(e){return t.call(this,"Y",e||{start:new Date,end:1/0,step:1})||this}return e(n,t),n}(i),S=function(t){function r(e){return t.call(this,e)||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p,d,b,y,m;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.ranges,r=t.step,o=void 0===r?1:r,i=t.count,a=t.map,s=t.filter,u=0,c=0,l=1,f=0,n.label=1;case 1:if(!(f<e.length))return[3,13];n.label=2;case 2:n.trys.push([2,10,11,12]),y=void 0,h=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(e[f]),p=h.next(),n.label=3;case 3:return p.done?[3,9]:(d=p.value,l%o!=0?(l++,[3,8]):i&&u==i?[2]:s&&!s(d,c)?(c++,[3,8]):a?[4,a(d,c)]:[3,5]);case 4:return n.sent(),[3,7];case 5:return[4,d];case 6:n.sent(),n.label=7;case 7:l++,c++,u++,n.label=8;case 8:return p=h.next(),[3,3];case 9:return[3,12];case 10:return b=n.sent(),y={error:b},[3,12];case 11:try{p&&!p.done&&(m=h.return)&&m.call(h)}finally{if(y)throw y.error}return[7];case 12:return f++,[3,1];case 13:return[2]}}))},r}(o),D=function(t){function r(e){return t.call(this,e)||this}return e(r,t),Object.defineProperty(r.prototype,"dict",{get:function(){return this.reduce((function(t,e){return Object.assign(t,e)}),{})},enumerable:!1,configurable:!0}),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p,d,b,y,m,v;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.keys,r=t.count,o=t.values,i=t.step,a=void 0===i?1:i,s=t.map,u=t.filter,c=e.iterator,l=o.iterator,f=0,h=0,p=1,d=c.next(),b=l.next(),y=function(){d=c.next(),b=l.next()},n.label=1;case 1:return d.done||b.done?[3,6]:r&&0===r?[2]:p%a!=0?(y(),p++,[3,1]):((v={})[d.value]=b.value,m=v,u&&!u(m,h)?(y(),h++,[3,1]):s?[4,s(m,f)]:[3,3]);case 2:return n.sent(),[3,5];case 3:return[4,m];case 4:n.sent(),n.label=5;case 5:return y(),h++,p++,f++,[3,1];case 6:return[2]}}))},r}(o);function x(t,e,n){return n?function(t,e,n){return t>n?n:t<e?e:t}(t+Math.random()*(e+1-t),t,e+Number.MIN_VALUE):Math.floor(t+Math.random()*(e+1-t))}var O=function(t){function r(e){return t.call(this,e)||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.start,r=t.end,o=t.count,i=void 0===o?1/0:o,a=t.float,s=void 0!==a&&a,u=t.map,c=t.filter,l=0,f=0,n.label=1;case 1:if(!(f<i))return[3,7];if(h=x(e,r,s),c)for(;!c(h,l);)h=x(e,r,s);return u?[4,u(h,f)]:[3,3];case 2:return n.sent(),[3,5];case 3:return[4,h];case 4:n.sent(),n.label=5;case 5:l++,n.label=6;case 6:return f++,[3,1];case 7:return[2]}}))},r}(o),M=function(t){function r(e){return t.call(this,e)||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.start,r=t.end,o=t.count,i=void 0===o?1/0:o,a=t.map,s=t.filter,u=0,c=0,n.label=1;case 1:if(!(c<i))return[3,7];if(l=x(e.codePointAt(0),r.codePointAt(0),!1),s)for(;!s(String.fromCodePoint(l),u);)l=x(e.codePointAt(0),r.codePointAt(0),!1);return a?[4,a(String.fromCodePoint(l),c)]:[3,3];case 2:return n.sent(),[3,5];case 3:return[4,String.fromCodePoint(l)];case 4:n.sent(),n.label=5;case 5:u++,n.label=6;case 6:return c++,[3,1];case 7:return[2]}}))},r}(o),P=function(t){function r(e){var n=t.call(this,e)||this;return n.options.source=Array.from(n.options.source),n}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.source,r=t.count,o=void 0===r?1/0:r,i=t.start,a=t.end,s=t.filter,u=t.map,c=0,l=0,n.label=1;case 1:if(!(l<o))return[3,7];if(f=x(i,a,!1),s)for(;!s(e[f],c);)f=x(i,a,!1);return u?[4,u(e[f],l)]:[3,3];case 2:return n.sent(),[3,5];case 3:return[4,e[f]];case 4:n.sent(),n.label=5;case 5:c++,n.label=6;case 6:return l++,[3,1];case 7:return[2]}}))},r}(o),F=function(t){function r(e){return t.call(this,e)||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h,p;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.start,r=t.end,o=t.count,i=void 0===o?1/0:o,a=t.map,s=t.filter,u=t.weekdays,c=t.leapYear,l=0,f=0,h=function(t){return t%400==0||t%100!=0&&t%4==0},n.label=1;case 1:return f<i?(p=x(e.getTime(),r.getTime(),!1),s&&!s(new Date(p),l)?(l++,[3,1]):u&&-1===u.indexOf(new Date(p).getDay())||c&&!h(new Date(p).getFullYear())?[3,1]:a?[4,a(new Date(p),f)]:[3,3]):[3,6];case 2:return n.sent(),[3,5];case 3:return[4,new Date(p)];case 4:n.sent(),n.label=5;case 5:return l++,f++,[3,1];case 6:return[2]}}))},r}(o),j=function(t){function r(e){return t.call(this,e)||this}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o,i,a,s,u,c,l,f,h;return n(this,(function(n){switch(n.label){case 0:t=this.options,e=t.start,r=t.end,o=t.count,i=void 0===o?1/0:o,a=t.map,s=t.filter,u=0,c=function(t){return parseInt(t.slice(1),16)},l=function(t){var e=t.toString(16),n="";return 6!==e.length&&(n=Array.from({length:6-e.length},(function(){return"0"})).join("")),"#"+n+e},f=0,n.label=1;case 1:if(!(f<i))return[3,7];if(h=l(x(c(e),c(r),!1)),s)for(;!s(h,u);)h=l(x(c(e),c(r),!1));return a?[4,a(h,f)]:[3,3];case 2:return n.sent(),[3,5];case 3:return[4,h];case 4:n.sent(),n.label=5;case 5:u++,n.label=6;case 6:return f++,[3,1];case 7:return[2]}}))},r}(o);export{i as AbstractDateRange,a as AbstractRandomRange,o as AbstractRange,r as AbstractRangeGenerator,f as CharRange,p as ColorRange,v as DayRange,m as HourRange,S as MergeRange,d as MillisecondRange,y as MinuteRange,g as MonthRange,l as NumberRange,M as RandomCharRange,j as RandomColorRange,F as RandomDateRange,O as RandomNumberRange,P as RandomStringRange,b as SecondRange,h as StringRange,w as YearRange,D as ZipRange};
