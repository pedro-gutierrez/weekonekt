!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="/dist/",r(r.s="./app.js")}({"../node_modules/base64-js/index.js":function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function o(t){return 3*t.length/4-n(t)}function i(t){var r,e,o,i,s,u,f=t.length;s=n(t),u=new c(3*f/4-s),o=s>0?f-4:f;var a=0;for(r=0,e=0;r<o;r+=4,e+=3)i=h[t.charCodeAt(r)]<<18|h[t.charCodeAt(r+1)]<<12|h[t.charCodeAt(r+2)]<<6|h[t.charCodeAt(r+3)],u[a++]=i>>16&255,u[a++]=i>>8&255,u[a++]=255&i;return 2===s?(i=h[t.charCodeAt(r)]<<2|h[t.charCodeAt(r+1)]>>4,u[a++]=255&i):1===s&&(i=h[t.charCodeAt(r)]<<10|h[t.charCodeAt(r+1)]<<4|h[t.charCodeAt(r+2)]>>2,u[a++]=i>>8&255,u[a++]=255&i),u}function s(t){return a[t>>18&63]+a[t>>12&63]+a[t>>6&63]+a[63&t]}function u(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(s(n));return o.join("")}function f(t){for(var r,e=t.length,n=e%3,o="",i=[],s=0,f=e-n;s<f;s+=16383)i.push(u(t,s,s+16383>f?f:s+16383));return 1===n?(r=t[e-1],o+=a[r>>2],o+=a[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=a[r>>10],o+=a[r>>4&63],o+=a[r<<2&63],o+="="),i.push(o),i.join("")}r.byteLength=o,r.toByteArray=i,r.fromByteArray=f;for(var a=[],h=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)a[p]=l[p],h[l.charCodeAt(p)]=p;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},"../node_modules/buffer/index.js":function(t,r,e){"use strict";(function(t){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(n()<r)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=i.prototype):(null===t&&(t=new i(r)),t.length=r),t}function i(t,r,e){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return a(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?h(t,r,e):p(t,r)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,r,e,n){return u(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function a(t,r){if(u(r),t=o(t,r<0?0:0|d(r)),!i.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function h(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!i.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(r,e);t=o(t,n);var s=t.write(r,e);return s!==n&&(t=t.slice(0,s)),t}function c(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),i.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=i.prototype):t=c(t,r),t}function p(t,r){if(i.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||X(r.length)?o(t,0):c(t,r);if("Buffer"===r.type&&V(r.data))return c(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),i.alloc(+t)}function y(t,r){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return F(t).length;default:if(n)return q(t).length;r=(""+r).toLowerCase(),n=!0}}function v(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return C(this,r,e);case"utf8":case"utf-8":return P(this,r,e);case"ascii":return x(this,r,e);case"latin1":case"binary":return I(this,r,e);case"base64":return T(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function b(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=i.from(r,n)),i.isBuffer(r))return 0===r.length?-1:A(t,r,e,n,o);if("number"==typeof r)return r&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):A(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function A(t,r,e,n,o){function i(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}var s=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;s=2,u/=2,f/=2,e/=2}var a;if(o){var h=-1;for(a=e;a<u;a++)if(i(t,a)===i(r,h===-1?0:a-h)){if(h===-1&&(h=a),a-h+1===f)return h*s}else h!==-1&&(a-=a-h),h=-1}else for(e+f>u&&(e=u-f),a=e;a>=0;a--){for(var c=!0,l=0;l<f;l++)if(i(t,a+l)!==i(r,l)){c=!1;break}if(c)return a}return-1}function m(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var u=parseInt(r.substr(2*s,2),16);if(isNaN(u))return s;t[e+s]=u}return s}function E(t,r,e,n){return J(q(r,t.length-e),t,e,n)}function R(t,r,e,n){return J(G(r),t,e,n)}function _(t,r,e,n){return R(t,r,e,n)}function B(t,r,e,n){return J(F(r),t,e,n)}function U(t,r,e,n){return J(W(r,t.length-e),t,e,n)}function T(t,r,e){return 0===r&&e===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(r,e))}function P(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],s=null,u=i>239?4:i>223?3:i>191?2:1;if(o+u<=e){var f,a,h,c;switch(u){case 1:i<128&&(s=i);break;case 2:f=t[o+1],128==(192&f)&&(c=(31&i)<<6|63&f)>127&&(s=c);break;case 3:f=t[o+1],a=t[o+2],128==(192&f)&&128==(192&a)&&(c=(15&i)<<12|(63&f)<<6|63&a)>2047&&(c<55296||c>57343)&&(s=c);break;case 4:f=t[o+1],a=t[o+2],h=t[o+3],128==(192&f)&&128==(192&a)&&128==(192&h)&&(c=(15&i)<<18|(63&f)<<12|(63&a)<<6|63&h)>65535&&c<1114112&&(s=c)}}null===s?(s=65533,u=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=u}return S(n)}function S(t){var r=t.length;if(r<=$)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=$));return e}function x(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function I(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function C(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=H(t[i]);return o}function O(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function j(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function L(t,r,e,n,o,s){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<s)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function M(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function Y(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function D(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,o){return o||D(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,r,e,n,23,4),e+4}function k(t,r,e,n,o){return o||D(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,r,e,n,52,8),e+8}function z(t){if(t=Q(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function Q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function H(t){return t<16?"0"+t.toString(16):t.toString(16)}function q(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],s=0;s<n;++s){if((e=t.charCodeAt(s))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function G(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function W(t,r){for(var e,n,o,i=[],s=0;s<t.length&&!((r-=2)<0);++s)e=t.charCodeAt(s),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function F(t){return Z.toByteArray(z(t))}function J(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function X(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var Z=e("../node_modules/base64-js/index.js"),K=e("../node_modules/ieee754/index.js"),V=e("../node_modules/isarray/index.js");r.Buffer=i,r.SlowBuffer=g,r.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=n(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,r,e){return s(null,t,r,e)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,r,e){return f(null,t,r,e)},i.allocUnsafe=function(t){return a(null,t)},i.allocUnsafeSlow=function(t){return a(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,r){if(!i.isBuffer(t)||!i.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,s=Math.min(e,n);o<s;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,r){if(!V(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=i.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var s=t[e];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},i.byteLength=y,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):v.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,r,e,n,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var s=o-n,u=e-r,f=Math.min(s,u),a=this.slice(n,o),h=t.slice(r,e),c=0;c<f;++c)if(a[c]!==h[c]){s=a[c],u=h[c];break}return s<u?-1:u<s?1:0},i.prototype.includes=function(t,r,e){return this.indexOf(t,r,e)!==-1},i.prototype.indexOf=function(t,r,e){return b(this,t,r,e,!0)},i.prototype.lastIndexOf=function(t,r,e){return b(this,t,r,e,!1)},i.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return m(this,t,r,e);case"utf8":case"utf-8":return E(this,t,r,e);case"ascii":return R(this,t,r,e);case"latin1":case"binary":return _(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;i.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n;if(i.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=i.prototype;else{var o=r-t;n=new i(o,void 0);for(var s=0;s<o;++s)n[s]=this[s+t]}return n},i.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},i.prototype.readUInt8=function(t,r){return r||j(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,r){return r||j(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,r){return r||j(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,r){return r||j(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,r){return r||j(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*r)),n},i.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*r)),i},i.prototype.readInt8=function(t,r){return r||j(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},i.prototype.readInt16LE=function(t,r){r||j(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},i.prototype.readInt16BE=function(t,r){r||j(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},i.prototype.readInt32LE=function(t,r){return r||j(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,r){return r||j(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,r){return r||j(t,4,this.length),K.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,r){return r||j(t,4,this.length),K.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,r){return r||j(t,8,this.length),K.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,r){return r||j(t,8,this.length),K.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){L(this,t,r,e,Math.pow(2,8*e)-1,0)}var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},i.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){L(this,t,r,e,Math.pow(2,8*e)-1,0)}var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},i.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},i.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):M(this,t,r,!0),r+2},i.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):M(this,t,r,!1),r+2},i.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):Y(this,t,r,!0),r+4},i.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Y(this,t,r,!1),r+4},i.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);L(this,t,r,e,o-1,-o)}var i=0,s=1,u=0;for(this[r]=255&t;++i<e&&(s*=256);)t<0&&0===u&&0!==this[r+i-1]&&(u=1),this[r+i]=(t/s>>0)-u&255;return r+e},i.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);L(this,t,r,e,o-1,-o)}var i=e-1,s=1,u=0;for(this[r+i]=255&t;--i>=0&&(s*=256);)t<0&&0===u&&0!==this[r+i+1]&&(u=1),this[r+i]=(t/s>>0)-u&255;return r+e},i.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},i.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):M(this,t,r,!0),r+2},i.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):M(this,t,r,!1),r+2},i.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):Y(this,t,r,!0),r+4},i.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||L(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Y(this,t,r,!1),r+4},i.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},i.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},i.prototype.writeDoubleLE=function(t,r,e){return k(this,t,r,!0,e)},i.prototype.writeDoubleBE=function(t,r,e){return k(this,t,r,!1,e)},i.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,s=n-e;if(this===t&&e<r&&r<n)for(o=s-1;o>=0;--o)t[o+r]=this[o+e];else if(s<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+s),r);return s},i.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var s;if("number"==typeof t)for(s=r;s<e;++s)this[s]=t;else{var u=i.isBuffer(t)?t:q(new i(t,n).toString()),f=u.length;for(s=0;s<e-r;++s)this[s+r]=u[s%f]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(r,e("../node_modules/webpack/buildin/global.js"))},"../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./scss/style.scss":function(t,r,e){r=t.exports=e("../node_modules/css-loader/lib/css-base.js")(void 0),r.push([t.i,"body{color:red}p{padding:20px;background:#2b3a42;color:#dedede;text-shadow:0 1px 1px rgba(0,0,0,.5)}",""])},"../node_modules/css-loader/lib/css-base.js":function(t,r,e){(function(r){function e(t,r){var e=t[1]||"",o=t[3];if(!o)return e;if(r){var i=n(o),s=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(s).concat([i]).join("\n")}return[e].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new r(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var n=e(r,t);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),r.push(s))}},r}}).call(r,e("../node_modules/buffer/index.js").Buffer)},"../node_modules/ieee754/index.js":function(t,r){r.read=function(t,r,e,n,o){var i,s,u=8*o-n-1,f=(1<<u)-1,a=f>>1,h=-7,c=e?o-1:0,l=e?-1:1,p=t[r+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=u;h>0;i=256*i+t[r+c],c+=l,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=n;h>0;s=256*s+t[r+c],c+=l,h-=8);if(0===i)i=1-a;else{if(i===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=a}return(p?-1:1)*s*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var s,u,f,a=8*i-o-1,h=(1<<a)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,s=h):(s=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-s))<1&&(s--,f*=2),r+=s+c>=1?l/f:l*Math.pow(2,1-c),r*f>=2&&(s++,f/=2),s+c>=h?(u=0,s=h):s+c>=1?(u=(r*f-1)*Math.pow(2,o),s+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[e+p]=255&u,p+=d,u/=256,o-=8);for(s=s<<o|u,a+=o;a>0;t[e+p]=255&s,p+=d,s/=256,a-=8);t[e+p-d]|=128*g}},"../node_modules/isarray/index.js":function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},"../node_modules/style-loader/addStyles.js":function(t,r,e){function n(t,r){for(var e=0;e<t.length;e++){var n=t[e],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(h(n.parts[i],r))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(h(n.parts[i],r));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(t){for(var r=[],e={},n=0;n<t.length;n++){var o=t[n],i=o[0],s=o[1],u=o[2],f=o[3],a={css:s,media:u,sourceMap:f};e[i]?e[i].parts.push(a):r.push(e[i]={id:i,parts:[a]})}return r}function i(t,r){var e=y(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(r,n.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),b.push(r);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(r)}}function s(t){t.parentNode.removeChild(t);var r=b.indexOf(t);r>=0&&b.splice(r,1)}function u(t){var r=document.createElement("style");return t.attrs.type="text/css",a(r,t.attrs),i(t,r),r}function f(t){var r=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",a(r,t.attrs),i(t,r),r}function a(t,r){Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])})}function h(t,r){var e,n,o;if(r.singleton){var i=w++;e=v||(v=u(r)),n=c.bind(null,e,i,!1),o=c.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(r),n=p.bind(null,e,r),o=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=u(r),n=l.bind(null,e),o=function(){s(e)});return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else o()}}function c(t,r,e,n){var o=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(r,o);else{var i=document.createTextNode(o),s=t.childNodes;s[r]&&t.removeChild(s[r]),s.length?t.insertBefore(i,s[r]):t.appendChild(i)}}function l(t,r){var e=r.css,n=r.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function p(t,r,e){var n=e.css,o=e.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(n=A(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}var d={},g=function(t){var r;return function(){return void 0===r&&(r=t.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var r={};return function(e){return void 0===r[e]&&(r[e]=t.call(this,e)),r[e]}}(function(t){return document.querySelector(t)}),v=null,w=0,b=[],A=e("../node_modules/style-loader/fixUrls.js");t.exports=function(t,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},r.attrs="object"==typeof r.attrs?r.attrs:{},void 0===r.singleton&&(r.singleton=g()),void 0===r.insertInto&&(r.insertInto="head"),void 0===r.insertAt&&(r.insertAt="bottom");var e=o(t);return n(e,r),function(t){for(var i=[],s=0;s<e.length;s++){var u=e[s],f=d[u.id];f.refs--,i.push(f)}if(t){n(o(t),r)}for(var s=0;s<i.length;s++){var f=i[s];if(0===f.refs){for(var a=0;a<f.parts.length;a++)f.parts[a]();delete d[f.id]}}}};var m=function(){var t=[];return function(r,e){return t[r]=e,t.filter(Boolean).join("\n")}}()},"../node_modules/style-loader/fixUrls.js":function(t,r){t.exports=function(t){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=r.protocol+"//"+r.host,n=e+r.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,r){var o=r.trim().replace(/^"(.*)"$/,function(t,r){return r}).replace(/^'(.*)'$/,function(t,r){return r});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},"../node_modules/webpack/buildin/global.js":function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},"./app.js":function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./scss/style.scss"),o=(e.n(n),e("./img/code.png")),i=e.n(o);document.querySelector("#root").innerHTML="<p>Hello weekonekt test</p>";var s=document.createElement("img");s.src=i.a,s.style.backgroundColor="#2B3A41",s.style.padding="20px",s.width=32,document.body.appendChild(s)},"./img/code.png":function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRUlEQVR4nO2ZP0hVURzHDxIi4uggEdIUEiEhEiIiTiEhIiEhISTiIBIiDmIigoOIgzRINEhINESDQ5OIiEM0OERDQ0ODhENTRIiIyOPTcO/j/bvnz73nvPckfp/xvXu+3+/vnHvP/b3zlBIEQRAEQRAEQRCEawFwB9gHfgNfgIf1zlQzgBbgJ6VcAp3V8GuohqgnL5RS7WWfNSqlnlXD7FpNANCulJrXfN1Uyyx1AXiPnv97HwB6gZym+P16h2sAJoFdYAfoqoL+sab4K+Ceg0ZXnG03zhrm8Y7DbSfsyn1BDCKPp4Zb/7XD+L44UzHb3pMAKGBLE+zQS7zg0Qycajz+AK0OGoea8VuAV7gNw8qcZlcu8VgxeOjeCOUaugkE2MgabNUgCnCQSbjU4yZwptH/ATQ66uxbsq6mDbZgEbwEejJVXerz1uAxkkKnh8o9oJwFV7FZh+KHMldd8OlG/9o7IuWzCww5TMKsTWTKInAFjPoUHvso4JPGIwfcz6g7Gmc0MaUbPI5+RfLBxr0qLw2q442ndvo6vGYufcAm4ETjcQa0BfBwv5OBfnyfnXThFg0+iwF9XPayfgUcWC502z3dQrUBfzU+J0DQX3yWyQY4UOhvR4DP+HRSlYHKW+pingQzKvipuAYdJwrYs8zSeqAwneg3p6ATXeS5bqltL/8+vrBcuOwZxNSv54AHoYou8ly21HQBdOcvHsS+ETr15ZowIwbdd8GqLvjNW2q5BAbLBw07TMJMhjCNRH19EufArWCVR34zDsUP6waPYW8iJlIGMq3GSoiii7wmHPKbN1tHkTHHQK1Ev+mTOAWag1SuAi8eMG0QgqiTGnDQeWXQCNJWxz4D2DvZ6bSicxbBI8v4u4ZQx4Q6s4u8jixZ57IKLxlEjSdCmA8pejMF0nuZToSWfMXXNMJ7hjGPDIE+eAVK9tM1c2shxBWwWSZ8Tr6JqLz+BvBdE+gCuO0dqtKzO85UzCahust4Eh4Tnbu/BDoM1z43rL7/iuh9O+JsO3HWalkZQ7QQ/aWdxC+gpfapaghRS61jst75qg7R4UoSXwn42ru2kLwB5oD+emerGUA78DHeC76R4nxfEARBEARBEARBEGrDP7DttgMlnWLMAAAAAElFTkSuQmCC"},"./scss/style.scss":function(t,r,e){var n=e("../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./scss/style.scss");"string"==typeof n&&(n=[[t.i,n,""]]);e("../node_modules/style-loader/addStyles.js")(n,{});n.locals&&(t.exports=n.locals)}});