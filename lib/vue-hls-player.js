module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../lib/",n(n.s=15)}([function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],d=t.base?r[0]+t.base:r[0],p=n[d]||0,l="".concat(d," ").concat(p);n[d]=p+1;var u=s(l),c={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(c)):a.push({identifier:l,updater:m(c,t),references:1}),i.push(l)}return i}function p(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function c(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function m(e,t){var n,i,o;if(t.singleton){var r=g++;n=f||(f=p(t)),i=c.bind(null,n,r,!1),o=c.bind(null,n,r,!0)}else n=p(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=d(e,t),p=0;p<n.length;p++){var l=s(n[p]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,s,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);i&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t){e.exports=require("hls.js")},function(e,t,n){var i=n(0),o=n(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){var i=n(0),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){var i=n(0),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){var i=n(0),o=n(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){"use strict";n(3)},function(e,t,n){(t=n(1)(!1)).push([e.i,'.player *{box-sizing:border-box}.player__controls{display:flex;align-items:center;justify-content:space-between}.player__controls--progress{flex:1;margin:0 8px}.player__controls--current,.player__controls--durration{width:10%;min-width:40px;font-size:14px;color:rgba(255,255,255,0.8);line-height:1;margin:0 8px;user-select:none}.player__controls--current{text-align:center}.player__controls--durration{text-align:center}.player__controls--btn{margin:0 8px;width:30px;height:30px;border-radius:25px;border:1px solid rgba(255,255,255,0.8);position:relative;cursor:pointer}.player__controls--btn .btn-play{width:10px;height:14px;border:2px solid rgba(255,255,255,0.8);border-width:0 2px;position:absolute;top:7px;left:9px}.player__controls--btn .btn-play.stop{width:0;height:0;border:2px solid rgba(255,255,255,0.8);border-width:7px 10px;border-color:transparent transparent transparent rgba(255,255,255,0.8);left:10px}.player__controls--btn .btn-volume{position:relative;width:30px;height:30px}.player__controls--btn .btn-volume .volume{position:absolute;top:3px;left:-7px;width:10px;height:22px;border:2px solid rgba(255,255,255,0.8);border-width:9px 12px;border-color:transparent rgba(255,255,255,0.8) transparent transparent;border-radius:13px}.player__controls--btn .btn-volume .volume::after{display:block;content:"";width:18px;height:18px;border:2px solid rgba(255,255,255,0.8);border-color:transparent rgba(255,255,255,0.8) transparent transparent;position:absolute;top:-9px;left:-5px;border-radius:18px}.player__controls--btn .btn-volume .muted{display:block;content:"";width:4px;height:24px;background:rgba(255,255,255,0.8);border-radius:4px;transform:rotate(135deg);position:absolute;top:1px;left:13px;background-clip:padding-box;border:1px solid rgba(137,137,137,0.2)}.aplayer .player__controls--current,.aplayer .player__controls--durration{color:rgba(137,137,137,0.8)}.aplayer .player__controls--durration.error{color:red}.aplayer .player__controls--btn{border:1px solid rgba(137,137,137,0.8)}.aplayer .player__controls--btn .btn-play{border:2px solid rgba(137,137,137,0.8);border-width:0 2px}.aplayer .player__controls--btn .btn-play.stop{border:2px solid rgba(137,137,137,0.8);border-width:7px 10px;border-color:transparent transparent transparent rgba(137,137,137,0.8)}\n',""]),e.exports=t},function(e,t,n){"use strict";n(4)},function(e,t,n){(t=n(1)(!1)).push([e.i,".progress{height:30px;position:relative;cursor:pointer}.progress--bar{width:20px;height:20px;border-radius:10px;background:#3aa7ff;background-clip:padding-box;border:4px solid rgba(58,167,255,0.3);box-shadow:0 0 3px 3px rgba(58,167,255,0.2);position:absolute;top:5px;margin-left:-10px;z-index:4;cursor:pointer}.progress--loaded,.progress--played,.progress--length{background:rgba(255,255,255,0.3);position:absolute;top:13px;left:0;height:4px;border-radius:4px;z-index:2}.progress--played{z-index:3;background:linear-gradient(180deg, rgba(108,211,255,0.5) 0%, rgba(58,167,255,0.8) 100%)}.progress--length{width:100%}.aplayer .progress--loaded,.aplayer .progress--played,.aplayer .progress--length{background:rgba(88,89,89,0.2)}\n",""]),e.exports=t},function(e,t,n){"use strict";n(5)},function(e,t,n){(t=n(1)(!1)).push([e.i,".volume{width:30px;height:90px;position:absolute;top:-90px;left:0}.volume__con{width:30px;height:80px;position:relative}.volume--bar{width:14px;height:14px;border-radius:14px;background:#fff;background-clip:padding-box;border:2px solid rgba(255,255,255,0.3);box-shadow:0 0 1px 1px rgba(255,255,255,0.2);position:absolute;margin-top:-7px;left:8px;z-index:4;cursor:pointer}.volume--volume,.volume--bg{background:rgba(255,255,255,0.3);position:absolute;bottom:0;left:13px;width:4px;height:80px;border-radius:4px;z-index:2}.volume--volume{z-index:3;background:rgba(255,255,255,0.4)}\n",""]),e.exports=t},function(e,t,n){"use strict";n(6)},function(e,t,n){(t=n(1)(!1)).push([e.i,'.player *{box-sizing:border-box}.player__controls{display:flex;align-items:center;justify-content:space-between}.player__controls--progress{flex:1;margin:0 8px}.player__controls--current,.player__controls--durration{width:10%;min-width:40px;font-size:14px;color:rgba(255,255,255,0.8);line-height:1;margin:0 8px;user-select:none}.player__controls--current{text-align:center}.player__controls--durration{text-align:center}.player__controls--durration.error{color:red}.player__controls--btn{margin:0 8px;width:30px;height:30px;border-radius:25px;border:1px solid rgba(255,255,255,0.8);position:relative;cursor:pointer}.player__controls--btn .btn-play{width:10px;height:14px;border:2px solid rgba(255,255,255,0.8);border-width:0 2px;position:absolute;top:7px;left:9px}.player__controls--btn .btn-play.stop{width:0;height:0;border:2px solid rgba(255,255,255,0.8);border-width:7px 10px;border-color:transparent transparent transparent rgba(255,255,255,0.8);left:10px}.player__controls--btn .btn-volume{position:relative;width:30px;height:30px}.player__controls--btn .btn-volume .volume{position:absolute;top:3px;left:-7px;width:10px;height:22px;border:2px solid rgba(255,255,255,0.8);border-width:9px 12px;border-color:transparent rgba(255,255,255,0.8) transparent transparent;border-radius:13px}.player__controls--btn .btn-volume .volume::after{display:block;content:"";width:18px;height:18px;border:2px solid rgba(255,255,255,0.8);border-color:transparent rgba(255,255,255,0.8) transparent transparent;position:absolute;top:-9px;left:-5px;border-radius:18px}.player__controls--btn .btn-volume .muted{display:block;content:"";width:4px;height:24px;background:rgba(255,255,255,0.8);border-radius:4px;transform:rotate(135deg);position:absolute;top:1px;left:13px;background-clip:padding-box;border:1px solid rgba(137,137,137,0.2)}.vplayer{position:relative;font-size:0}.vplayer video{width:100%;height:100%}.vplayer .player{font-size:14px}.vplayer .player__controls{position:absolute;bottom:0;left:0;width:100%;padding:5px 0;background:rgba(0,0,0,0.6)}\n',""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"player aplayer"},[t("audio",{ref:"media",attrs:{controls:""}})])};i._withStripped=!0;var o=function(e){var t,n=Math.floor(e/60);return n<1?t="0"+n+":"+(e=e<10?"0"+e:e):(e-=60*n,t=(n=n<10?"0"+n:n)+":"+(e=e<10?"0"+e:e)),t},r={name:"Aplayer",props:{playerOptions:{type:Object,default:function(){return{type:"",src:"",preload:!0,autoplay:!0,isLoop:!1}}}},data:function(){return{dataLength:0,loadedLength:0,playedLength:0,playing:!1,playedTime:"00:00",lengthTime:"00:00",volume:0,muted:!0,error:!1}},computed:{media:function(){return this.$refs.media}},created:function(){var e=this;this.$nextTick((function(){e.initMedia()}))},methods:{initMedia:function(){var e=this;if(this.media.preload=this.playerOptions.preload||!0,this.media.autoplay=this.playerOptions.autoplay||!1,!this.playerOptions.type||"application/x-mpegURL"!=this.playerOptions.type&&"application/vnd.apple.mpegURL"!=this.playerOptions.type)this.media.src=this.playerOptions.src;else try{var t=n(2);if(t.isSupported()){if(this.hls||(this.hls=new t),this.hls.loadSource(this.playerOptions.src),this.hls.attachMedia(this.media),this.playerOptions.autoplay){var i=this;this.hls.on(t.Events.MANIFEST_PARSED,(function(){i.media.play()}))}}else if(console.warn("HLS is not supported on your browser"),this.media.src=this.playerOptions.src,this.playerOptions.autoplay){var o=this;this.media.addEventListener("loadedmetadata",(function(){o.media.play()}))}}catch(e){console.log(e),console.warn("hls.js is required to support m3u8"),this.media.src=this.playerOptions.src}this.media.addEventListener("play",(function(t){e.onMediaPlay(),e.$emit("onplay",t)})),this.media.addEventListener("playing",(function(t){e.onMediaPlay(),e.$emit("onplaying",t)})),this.media.addEventListener("pause",(function(t){e.onMediaPause(),e.$emit("onpause",t)})),this.media.addEventListener("abort",(function(t){e.onMediaPause(),e.$emit("onabort",t)})),this.media.addEventListener("progress",(function(t){e.onMediaProgress(),e.$emit("onprogress",t)})),this.media.addEventListener("durationchange",(function(t){e.onMediaDurationChange(),e.$emit("ondurationchange",t)})),this.media.addEventListener("seeking",(function(t){e.onMediaSeeking(),e.$emit("onseeking",t)})),this.media.addEventListener("seeked",(function(t){e.onMediaSeeking(),e.$emit("onseeked",t)})),this.media.addEventListener("timeupdate",(function(t){e.onMediaSeeking(),e.$emit("ontimeupdate",t)})),this.media.addEventListener("ended",(function(t){e.onMediaEnded(),e.$emit("onended",t)})),this.media.addEventListener("error",(function(t){e.onMediaError(),e.$emit("onerror",t)}))},onMediaError:function(){this.error=!0},togglePlay:function(){this.playing?this.media.pause():this.media.play()},onMediaPlay:function(){this.error=!1,this.playing=!0},onMediaPause:function(){this.playing=!1},onMediaProgress:function(){this.media.buffered.length?this.loadedLength=this.media.buffered.end(this.media.buffered.length-1):this.loadedLength=0,this.$refs.progress.initProgress(this.loadedLength,this.playedLength,this.dataLength)},onMediaDurationChange:function(){1!==this.media.duration&&(this.dataLength=this.media.duration,this.lengthTime=o(parseInt(this.media.duration))),this.$refs.progress.initProgress(this.loadedLength,this.playedLength,this.dataLength)},onMediaSeeking:function(){this.playedLength=this.media.currentTime,this.playedTime=o(parseInt(this.media.currentTime)),this.$refs.progress.initProgress(this.loadedLength,this.playedLength,this.dataLength)},onMediaChangeProgress:function(e){this.media.currentTime=parseInt(e*this.dataLength)},onMediaEnded:function(){this.playerOptions.isLoop&&this.media.play()}}};n(7);function a(e,t,n,i,o,r,a,s){var d,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=d):o&&(d=s?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(p.functional){p._injectStyles=d;var l=p.render;p.render=function(e,t){return d.call(t),l(e,t)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:p}}var s=a(r,i,[],!1,null,null,null);s.options.__file="packages/aplayer/index.vue";var d=s.exports;d.install=function(e){e.component(d.name,d)};var p=d,l=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"player vplayer"},[t("video",{ref:"media",attrs:{controls:""}})])};l._withStripped=!0;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",on:{mousedown:function(t){return e.changeProgress(t,1)},mousemove:function(t){return e.changeProgress(t)}}},[n("div",{staticClass:"progress--bar",style:"left:"+parseInt(100*e.played/e.length)+"%",on:{mousedown:function(t){return t.stopPropagation(),e.pressBarStart(t)},mousemove:function(e){e.stopPropagation()}}}),e._v(" "),n("div",{staticClass:"progress--played",style:"width:"+parseInt(100*e.played/e.length)+"%",on:{mousemove:function(e){e.stopPropagation()}}}),e._v(" "),n("div",{staticClass:"progress--loaded",style:"width:"+parseInt(100*e.loaded/e.length)+"%",on:{mousemove:function(e){e.stopPropagation()}}}),e._v(" "),n("div",{ref:"mediaLength",staticClass:"progress--length"})])};u._withStripped=!0;var c={props:{},data:function(){return{mousedownnow:!1,loaded:0,played:0,length:0}},mounted:function(){var e=this;document.addEventListener("mouseup",(function(t){e.mousedownnow&&(e.mousedownnow=!1)}),!0)},methods:{initProgress:function(e,t,n){this.loaded=e,this.played=t,this.length=n},changeProgress:function(e,t){(t||this.mousedownnow)&&this.$emit("changeProgress",parseInt(100*e.offsetX/this.$refs.mediaLength.offsetWidth)/100)},pressBarStart:function(e){this.mousedownnow=!0}}},h=(n(9),a(c,u,[],!1,null,null,null));h.options.__file="packages/components/progress-bar.vue";var f=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"volume",on:{mousedown:function(t){return e.setVolume(t,1)},mousemove:function(t){return e.setVolume(t)}}},[n("div",{staticClass:"volume__con"},[n("div",{staticClass:"volume--bar",style:"top:"+100*(1-e.volume)+"%",on:{mousedown:function(t){return t.stopPropagation(),e.pressBarStart(t)},mousemove:function(e){e.stopPropagation()}}}),e._v(" "),n("div",{staticClass:"volume--volume",style:"height:"+100*e.volume+"%",on:{mousemove:function(e){e.stopPropagation()}}}),e._v(" "),n("div",{ref:"volume",staticClass:"volume--bg"})])])};g._withStripped=!0;var m={model:{prop:"volume",event:"changeVolume"},props:{volume:{type:Number,default:0}},data:function(){return{mousedownnow:!1}},mounted:function(){var e=this;document.addEventListener("mouseup",(function(t){e.mousedownnow&&(e.mousedownnow=!1)}),!0)},methods:{setVolume:function(e,t){var n=parseInt(100*e.offsetY/this.$refs.volume.offsetHeight)/100;n=n<0?0:n>1?1:n,(t||this.mousedownnow)&&(this.$emit("changeVolume",1-n),e.stopPropagation())},pressBarStart:function(e){this.mousedownnow=!0}}},y=(n(11),a(m,g,[],!1,null,null,null));y.options.__file="packages/components/volume-bar.vue";var b={name:"Vplayer",components:{progressBar:f,volumeBar:y.exports},props:{playerOptions:{type:Object,default:function(){return{type:"",src:"",preload:!0,autoplay:!0,isLoop:!1,poster:"",playsinline:!0,crossOrigin:!1,controls:"progress,current,durration,volume"}}}},data:function(){return{dataLength:0,loadedLength:0,playedLength:0,playing:!1,playedTime:"00:00",lengthTime:"00:00",volume:1,volumeBarShow:!1,error:!1}},computed:{media:function(){return this.$refs.media},muted:function(){return 0===this.volume}},mounted:function(){this.initMedia()},methods:{initMedia:function(){var e=this;if(this.media.preload=this.playerOptions.preload||!0,this.media.autoplay=this.playerOptions.autoplay||!1,this.media.poster=this.playerOptions.poster||"",this.playerOptions.playsinline&&(this.media.setAttribute("playsinline",this.playerOptions.playsinline),this.media.setAttribute("webkit-playsinline",this.playerOptions.playsinline),this.media.setAttribute("x5-playsinline",this.playerOptions.playsinline),this.media.setAttribute("x5-video-player-type","h5"),this.media.setAttribute("x5-video-player-fullscreen",!1)),this.playerOptions.crossOrigin&&(this.media.crossOrigin=this.playerOptions.crossOrigin),!this.playerOptions.type||"application/x-mpegURL"!=this.playerOptions.type&&"application/vnd.apple.mpegURL"!=this.playerOptions.type)this.media.src=this.playerOptions.src;else try{var t=n(2);if(t.isSupported()){if(this.hls||(this.hls=new t),this.hls.loadSource(this.playerOptions.src),this.hls.attachMedia(this.media),this.playerOptions.autoplay){var i=this;this.hls.on(t.Events.MANIFEST_PARSED,(function(){i.media.play()}))}}else if(console.warn("HLS is not supported on your browser"),this.media.src=this.playerOptions.src,this.playerOptions.autoplay){var o=this;this.media.addEventListener("loadedmetadata",(function(){o.media.play()}))}}catch(e){console.log(e),console.warn("hls.js is required to support m3u8"),this.media.src=this.playerOptions.src}this.media.addEventListener("play",(function(t){e.onMediaPlay(),e.$emit("onplay",t)})),this.media.addEventListener("playing",(function(t){e.onMediaPlay(),e.$emit("onplaying",t)})),this.media.addEventListener("pause",(function(t){e.onMediaPause(),e.$emit("onpause",t)})),this.media.addEventListener("abort",(function(t){e.onMediaPause(),e.$emit("onabort",t)})),this.media.addEventListener("progress",(function(t){e.onMediaProgress(),e.$emit("onprogress",t)})),this.media.addEventListener("durationchange",(function(t){e.onMediaDurationChange(),e.$emit("ondurationchange",t)})),this.media.addEventListener("seeking",(function(t){e.onMediaSeeking(),e.$emit("onseeking",t)})),this.media.addEventListener("seeked",(function(t){e.onMediaSeeking(),e.$emit("onseeked",t)})),this.media.addEventListener("timeupdate",(function(t){e.onMediaSeeking(),e.$emit("ontimeupdate",t)})),this.media.addEventListener("volumechange",(function(t){e.onMediaVolumeChange(e.media.volume),e.$emit("onvolumechange",t)})),this.media.addEventListener("ended",(function(t){e.onMediaEnded(),e.$emit("onended",t)})),this.media.addEventListener("error",(function(t){e.onMediaError(),e.$emit("onerror",t)}))},onMediaError:function(){this.error=!0},togglePlay:function(){this.playing?this.media.pause():this.media.play()},onMediaPlay:function(){this.error=!1,this.playing=!0},onMediaPause:function(){this.playing=!1},onMediaProgress:function(){this.media.buffered.length?this.loadedLength=this.media.buffered.end(this.media.buffered.length-1):this.loadedLength=0,this.$refs.progress.initProgress(this.loadedLength,this.playedLength,this.dataLength)},onMediaDurationChange:function(){1!==this.media.duration&&(this.dataLength=this.media.duration,this.lengthTime=o(parseInt(this.media.duration))),this.$refs.progress.initProgress(this.loadedLength,this.playedLength,this.dataLength)},onMediaSeeking:function(){this.playedLength=this.media.currentTime,this.playedTime=o(parseInt(this.media.currentTime)),this.$refs.progress.initProgress(this.loadedLength,this.playedLength,this.dataLength)},onMediaVolumeChange:function(e){this.volume=e,this.media.volume=e},onMediaChangeProgress:function(e){this.media.currentTime=parseInt(e*this.dataLength)},onMediaEnded:function(){this.playerOptions.isLoop&&this.media.play()}}},v=(n(13),a(b,l,[],!1,null,null,null));v.options.__file="packages/vplayer/index.vue";var x=v.exports;x.install=function(e){e.component(x.name,x)};var _=x,w=function e(t){e.installed||(t.component(p.name,p),t.component(_.name,_))};"undefined"!=typeof window&&window.Vue&&w(window.Vue);t.default={install:w,aplayer:p,vplayer:_}}]).default;
//# sourceMappingURL=vue-hls-player.js.map