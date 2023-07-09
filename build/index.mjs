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
var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function i(t,e,n){return n?function(t,e,n){return t>n?n:t<e?e:t}(t+Math.random()*(e+1-t),t,e+Number.MIN_VALUE):Math.floor(t+Math.random()*(e+1-t))}var o=function(){},s=function(t){function n(){return t.call(this)||this}return e(n,t),n.prototype.filter=function(t){return new f(this,t)},n.prototype.map=function(t){return new v(this,t)},n.prototype.take=function(t){return new y(this,t)},n.prototype.from=function(t){return new p(this,t)},n.prototype.to=function(t){return new b(this,t)},n.prototype.find=function(t){return new _(this,t)},n.prototype.reduce=function(t,e){return void 0===e&&(e=0),new h(this,t,null!=e?e:0)},n.prototype.count=function(){return new l(this)},n.prototype.combine=function(t){return new c(this,t)},n.prototype.shuffle=function(t){return void 0===t&&(t=5),new a(this,t)},n.prototype.groupBy=function(t){return new u(this,t)},n.prototype.collect=function(){for(var t=this[Symbol.iterator](),e=t.next(),n=[];!e.done;)n.push(e.value),e=t.next();return n},n}(o),u=function(t){function r(e,n){var r=t.call(this)||this;return r._count=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=[],e=this._it.next(),n.label=1;case 1:if(e.done)return[3,3];for(;t.length<this._count&&!e.done;)t.push(e.value),e=this._it.next();return[4,t];case 2:return n.sent(),t=[],[3,1];case 3:return[2]}}))},r}(s),a=function(t){function r(e,n){void 0===n&&(n=5);var r=t.call(this)||this;return r._picking=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r,o;return n(this,(function(n){switch(n.label){case 0:for(t=this._it.next(),e=[],r=0;r<this._picking&&!t.done;r++)e.push(t.value),t=this._it.next();n.label=1;case 1:return e.length>=1?(o=i(0,e.length-1,!1),[4,e.splice(o,1)[0]]):[3,3];case 2:return n.sent(),t.done||e.push(t.value),t=this._it.next(),[3,1];case 3:return[2]}}))},r}(s),c=function(t){function r(e,n){var r=t.call(this)||this;return r._it1=e[Symbol.iterator](),r._it2=n[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=this._it1.next(),e=this._it2.next(),n.label=1;case 1:return t.done||e.done?[3,3]:[4,[t.value,e.value]];case 2:return n.sent(),t=this._it1.next(),e=this._it2.next(),[3,1];case 3:return[2]}}))},r}(s),l=function(t){function r(e){var n=t.call(this)||this;return n._it=e[Symbol.iterator](),n}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:for(t=this._it.next(),e=0;!t.done;)e++,t=this._it.next();return[4,e];case 1:return n.sent(),[2]}}))},r}(s),h=function(t){function r(e,n,r){void 0===r&&(r=0);var i=t.call(this)||this;return i._reducer=n,i._start=r,i._it=e[Symbol.iterator](),i}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:if(t=this._it.next(),0,t.done)return[2];for(e=this._start;!t.done;)e=this._reducer(e,t.value,0),t=this._it.next();return[4,e];case 1:return n.sent(),[2]}}))},r}(s),f=function(t){function r(e,n){var r=t.call(this)||this;return r._condition=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=this._it.next(),e=0,n.label=1;case 1:return t.done?[3,4]:this._condition(t.value,e)?[4,t.value]:[3,3];case 2:n.sent(),n.label=3;case 3:return t=this._it.next(),e++,[3,1];case 4:return[2]}}))},r}(s),_=function(t){function r(e,n){var r=t.call(this)||this;return r._condition=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=this._it.next(),e=0,n.label=1;case 1:return t.done?[3,4]:this._condition(t.value,e)?[4,t.value]:[3,3];case 2:return n.sent(),[3,4];case 3:return t=this._it.next(),e++,[3,1];case 4:return[2]}}))},r}(s),p=function(t){function r(e,n){var r=t.call(this)||this;return r._condition=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r;return n(this,(function(n){switch(n.label){case 0:t=this._it.next(),e=!1,r=0,n.label=1;case 1:return t.done?[3,4]:this._condition(t.value,r)?(e||(e=!0),e?[4,t.value]:[3,3]):[3,1];case 2:n.sent(),n.label=3;case 3:return t=this._it.next(),r++,[3,1];case 4:return[2]}}))},r}(s),v=function(t){function r(e,n){var r=t.call(this)||this;return r._mapper=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=this._it.next(),e=0,n.label=1;case 1:return t.done?[3,3]:[4,this._mapper(t.value,e)];case 2:return n.sent(),t=this._it.next(),e++,[3,1];case 3:return[2]}}))},r}(s),y=function(t){function r(e,n){var r=t.call(this)||this;return r._count=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=this._it.next(),e=0,n.label=1;case 1:return e<this._count?t.done?[3,4]:[4,t.value]:[3,4];case 2:n.sent(),t=this._it.next(),n.label=3;case 3:return e++,[3,1];case 4:return[2]}}))},r}(s),b=function(t){function r(e,n){var r=t.call(this)||this;return r._condition=n,r._it=e[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r;return n(this,(function(n){switch(n.label){case 0:t=this._it.next(),e=!1,r=0,n.label=1;case 1:return t.done||e?[3,3]:[4,t.value];case 2:return n.sent(),e=this._condition(t.value,r),t=this._it.next(),r++,[3,1];case 3:return[2]}}))},r}(s),d=function(t){function r(e){var n=t.call(this)||this;return n._it=e[Symbol.iterator](),n}return e(r,t),r.prototype[Symbol.iterator]=function(){var t;return n(this,(function(e){switch(e.label){case 0:t=this._it.next(),e.label=1;case 1:return t.done?[3,3]:[4,t.value];case 2:return e.sent(),t=this._it.next(),[3,1];case 3:return[2]}}))},r}(s);var w=function(t,e){return function(t,e,n){var r=""+("+"===n?t+e:t*e);if(r.length<16)return"+"===n?t+e:t*e;var i,o=""+t,s=""+e,u=r.indexOf("."),a=r.lastIndexOf("e"),c=o.indexOf("."),l=o.lastIndexOf("e"),h=s.indexOf("."),f=s.lastIndexOf("e");if(i=-1!==a?r.slice(a,r.length):"",-1===a&&(a=r.length),-1===l&&(l=o.length),-1===f&&(f=s.length),a-u-1>=17-u&&(l-c-1>=16-c||f-h-1>=16-h))return t+e;if(a-u-1<16-u)return"+"===n?t+e:t*e;var _=r.length-r.indexOf(".")-2;if("9"===r[r.length-2]){var p=r+"e"+_;return+(+(p=Math.ceil(Number(p))+"e"+-_)+i)}return+((r=r.slice(0,(o.length>s.length?o.length:s.length)+1))+i)}(t,e,"+")},m=function(t){function r(e,n,r,i){void 0===e&&(e=0),void 0===n&&(n=1/0),void 0===r&&(r=1),void 0===i&&(i=!1);var o=t.call(this)||this;return o._start=e,o._end=n,o._step=r,o._isFloat=i,o}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(n){switch(n.label){case 0:t=this._isFloat?function(t,e){return w(t,e)}:function(t,e){return t+e},e=this._start,n.label=1;case 1:return e<=this._end?[4,e]:[3,4];case 2:n.sent(),n.label=3;case 3:return e=t(e,this._step),[3,1];case 4:return[2]}}))},r}(s),x=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setTime(this._start.getTime()+this._step),[3,0];case 2:return[2]}}))},r}(s),S=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setSeconds(this._start.getSeconds()+this._step),[3,0];case 2:return[2]}}))},r}(s),g=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setMinutes(this._start.getMinutes()+this._step),[3,0];case 2:return[2]}}))},r}(s),D=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setHours(this._start.getHours()+this._step),[3,0];case 2:return[2]}}))},r}(s),O=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setDate(this._start.getDate()+this._step),[3,0];case 2:return[2]}}))},r}(s),M=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setMonth(this._start.getMonth()+this._step),[3,0];case 2:return[2]}}))},r}(s),k=function(t){function r(e,n,r){void 0===e&&(e=new Date),void 0===n&&(n=1/0),void 0===r&&(r=1);var i=t.call(this)||this;return i._start=e,i._end=n,i._step=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return this._start<this._end?[4,new Date(this._start)]:[3,2];case 1:return t.sent(),this._start.setFullYear(this._start.getFullYear()+this._step),[3,0];case 2:return[2]}}))},r}(s),T=function(t){function r(e,n,r){void 0===r&&(r=!1);var i=t.call(this)||this;return i._start=e,i._end=n,i._isFloat=r,i}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return[4,i(this._start,this._end,this._isFloat)];case 1:return t.sent(),[3,0];case 2:return[2]}}))},r}(s),F=function(t){function r(e,n){var r=t.call(this)||this;return r._start=e,r._end=n,r}return e(r,t),r.prototype[Symbol.iterator]=function(){return n(this,(function(t){switch(t.label){case 0:return[4,new Date(i(this._start.getTime(),this._end.getTime(),!1))];case 1:return t.sent(),[3,0];case 2:return[2]}}))},r}(s),E=function(t){function r(e,n){var r=t.call(this)||this;return r._itKey=e[Symbol.iterator](),r._itValue=n[Symbol.iterator](),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t,e,r;return n(this,(function(n){switch(n.label){case 0:t=this._itKey.next(),e=this._itValue.next(),n.label=1;case 1:return t.done||e.done?[3,3]:[4,(r={},r[t.value]=e.value,r)];case 2:return n.sent(),t=this._itKey.next(),e=this._itValue.next(),[3,1];case 3:return[2]}}))},r}(s),V=function(t){function i(e,n){var r=t.call(this)||this;r._rule=e,r._its=[];for(var i=n[Symbol.iterator](),o=i.next();!o.done;)r._its.push(o.value[Symbol.iterator]()),o=i.next();return r}return e(i,t),i.prototype[Symbol.iterator]=function(){var t,e,i,o,s,u,a,c,l,h,f,_,p,v,y,b,d=this;return n(this,(function(n){switch(n.label){case 0:t=0,e=0,!1,i=!1,s=!1,u=Array.from({length:this._its.length},(function(){return 0})),a=function(){return e},c=function(t){if(!t.done)return[t.value,!1];for(var n=e,r=!1,i=d._its[e].next();i.done;){if(++e>=d._its.length&&(e=0),e===n){r=!0;break}i=d._its[e].next()}return u[e]++,y=r,r?[void 0,!0]:[i.value,!1]},l=function(t){return function(){var e=r(c(t),2),n=e[0];if(e[1])throw new ReferenceError("All ranges are over");return s=!0,o=n}},h=function(t){if(t<0||t>=d._its.length)throw new TypeError("You cannot set the range number, more than the number of ranges, or less than zero");e=t},f=function(){return i=!0},_=this._its[e].next(),p=r(c(_),2),v=p[0],y=p[1],n.label=1;case 1:return y||i?[3,6]:(this._rule(v,t,{rangeNumber:a,nextValue:l(_),switchTo:h,stop:f}),s?(s=!1,[4,o]):[3,3]);case 2:return n.sent(),[3,5];case 3:return[4,v];case 4:n.sent(),n.label=5;case 5:return _=this._its[e].next(),b=r(c(_),2),v=b[0],y=b[1],t++,[3,1];case 6:return[2]}}))},i}(s),A=function(t){var e=t.getFullYear();return e%400==0||e%100!=0&&e%4==0},I=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){return t.includes(e.getDay())}},N=function(){var t=[];return function(e){return!t.includes(e)&&(t.push(e),!0)}},Y=function(t,e){return w(t,e)};export{O as DayRange,D as HourRange,V as MergeRange,x as MillisecondRange,g as MinuteRange,M as MonthRange,m as NumberRange,F as RandomDateRange,T as RandomNumberRange,s as Range,o as RangeGenerator,S as SecondRange,d as WalkerRange,k as YearRange,E as ZipRange,I as hasWeekday,A as isLeapYear,N as keepUnique,Y as sum};
