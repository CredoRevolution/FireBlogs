(self["webpackChunkfireblogss"]=self["webpackChunkfireblogss"]||[]).push([[205],{352:function(t,e,n){"use strict";n.d(e,{A:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{ref:"modal",staticClass:"modal"},[e("div",{staticClass:"modal-content"},[e("svg",{staticClass:"svg-inline--fa fa-times-circle fa-w-16 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"times-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},on:{click:t.closePreview}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z"}})]),e("img",{attrs:{src:this.blogCoverPhoto,alt:""}})])])},o=[],i={components:{},methods:{closePreview(){this.$store.commit("openPhotoPreview")}},computed:{blogCoverPhoto(){return this.$store.state.blogPhotoFileURL}}},s=i,a=n(1656),c=(0,a.A)(s,r,o,!1,null,"260b8535",null),u=c.exports},5147:function(t,e,n){n(4114),n(8111),n(2489),n(116),n(7588),n(1701),function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){var r=n(22),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(75),i=n(76),s=n(77),a=n(78),c=n(79);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=s,r.prototype.has=a,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(8);t.exports=r},function(t,e,n){function r(t){return null==t?void 0===t?c:a:u&&u in Object(t)?i(t):s(t)}var o=n(16),i=n(64),s=n(87),a="[object Null]",c="[object Undefined]",u=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(73);t.exports=r},function(t,e,n){var r=n(11),o=r(Object,"create");t.exports=o},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}));var o=function t(e){r(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=e.overlay,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}},function(t,e,n){function r(t,e,n){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var o=n(21);t.exports=r},function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(48),i=n(65);t.exports=r},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(13),i=n(30);t.exports=r},function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==a||e==c||e==s||e==u}var o=n(5),i=n(0),s="[object AsyncFunction]",a="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(11),o=n(1),i=r(o,"Map");t.exports=i},function(t,e,n){var r=n(1),o=r.Symbol;t.exports=o},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){function r(t,e,n){(void 0===n||i(t[e],n))&&(void 0!==n||e in t)||o(t,e,n)}var o=n(10),i=n(8);t.exports=r},function(t,e,n){function r(t,e,n,l,h){t!==e&&s(e,(function(s,u){if(c(s))h||(h=new o),a(t,e,u,n,r,l,h);else{var f=l?l(t[u],s,u+"",t,e,h):void 0;void 0===f&&(f=s),i(t,u,f)}}),u)}var o=n(41),i=n(18),s=n(46),a=n(51),c=n(0),u=n(32);t.exports=r},function(t,e,n){function r(t,e){return s(i(t,e,o),t+"")}var o=n(26),i=n(89),s=n(90);t.exports=r},function(t,e,n){var r=n(11),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(107))},function(t,e,n){var r=n(88),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}var r=Object.prototype;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(47),o=n(2),i=Object.prototype,s=i.hasOwnProperty,a=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&s.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var r=n(1),o=n(102),i="object"==typeof e&&e&&!e.nodeType&&e,s=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===i,c=a?r.Buffer:void 0,u=c?c.isBuffer:void 0,l=u||o;t.exports=l}).call(e,n(14)(t))},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){var r=n(49),o=n(54),i=n(86),s=i&&i.isTypedArray,a=s?o(s):r;t.exports=a},function(t,e,n){function r(t){return s(t)?o(t,!0):i(t)}var o=n(43),i=n(50),s=n(12);t.exports=r},function(t,e,n){"use strict";e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(9);n.d(e,"a",(function(){return a}));var a=function(t){function e(){var t,n,i,s;r(this,e);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display)},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.img){var t=i.getCurrentSize();if(i.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"==i.img.style.float){var e=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"})}else{var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-"+(n.width+4)+"px",bottom:"-"+(n.height+4)+"px",left:"auto"})}}},i.getCurrentSize=function(){return[i.img.width,Math.round(i.img.width/i.img.naturalWidth*i.img.naturalHeight)]},s=n,o(i,s)}return i(e,t),e}(s.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(9);n.d(e,"a",(function(){return a}));var a=function(t){function e(){var t,n,i,s;r(this,e);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.onCreate=function(){i.boxes=[],i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.positionBoxes()},i.onDestroy=function(){i.setCursor("")},i.positionBoxes=function(){var t=-parseFloat(i.options.handleStyles.width)/2+"px",e=-parseFloat(i.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach((function(t,e){Object.assign(i.boxes[e].style,t)}))},i.addBox=function(t){var e=document.createElement("div");Object.assign(e.style,i.options.handleStyles),e.style.cursor=t,e.style.width=i.options.handleStyles.width+"px",e.style.height=i.options.handleStyles.height+"px",e.addEventListener("mousedown",i.handleMousedown,!1),i.overlay.appendChild(e),i.boxes.push(e)},i.handleMousedown=function(t){i.dragBox=t.target,i.dragStartX=t.clientX,i.preDragWidth=i.img.width||i.img.naturalWidth,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1)},i.handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup)},i.handleDrag=function(t){if(i.img){var e=t.clientX-i.dragStartX;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?i.img.width=Math.round(i.preDragWidth-e):i.img.width=Math.round(i.preDragWidth+e),i.requestUpdate()}},i.setCursor=function(t){[document.body,i.img].forEach((function(e){e.style.cursor=t}))},s=n,o(i,s)}return i(e,t),e}(s.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(105),a=n.n(s),c=n(104),u=n.n(c),l=n(106),h=n.n(l),f=n(9);n.d(e,"a",(function(){return v}));var p=window.Quill.imports.parchment,d=new p.Attributor.Style("float","float"),_=new p.Attributor.Style("margin","margin"),g=new p.Attributor.Style("display","display"),v=function(t){function e(){var t,n,i,s;r(this,e);for(var c=arguments.length,l=Array(c),f=0;f<c;f++)l[f]=arguments[f];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),i.onCreate=function(){i.toolbar=document.createElement("div"),Object.assign(i.toolbar.style,i.options.toolbarStyles),i.overlay.appendChild(i.toolbar),i._defineAlignments(),i._addToolbarButtons()},i.onDestroy=function(){},i.onUpdate=function(){},i._defineAlignments=function(){i.alignments=[{icon:a.a,apply:function(){g.add(i.img,"inline"),d.add(i.img,"left"),_.add(i.img,"0 1em 1em 0")},isApplied:function(){return"left"==d.value(i.img)}},{icon:u.a,apply:function(){g.add(i.img,"block"),d.remove(i.img),_.add(i.img,"auto")},isApplied:function(){return"auto"==_.value(i.img)}},{icon:h.a,apply:function(){g.add(i.img,"inline"),d.add(i.img,"right"),_.add(i.img,"0 0 1em 1em")},isApplied:function(){return"right"==d.value(i.img)}}]},i._addToolbarButtons=function(){var t=[];i.alignments.forEach((function(e,n){var r=document.createElement("span");t.push(r),r.innerHTML=e.icon,r.addEventListener("click",(function(){t.forEach((function(t){return t.style.filter=""})),e.isApplied()?(d.remove(i.img),_.remove(i.img),g.remove(i.img)):(i._selectButton(r),e.apply()),i.requestUpdate()})),Object.assign(r.style,i.options.toolbarButtonStyles),n>0&&(r.style.borderLeftWidth="0"),Object.assign(r.children[0].style,i.options.toolbarButtonSvgStyles),e.isApplied()&&i._selectButton(r),i.toolbar.appendChild(r)}))},i._selectButton=function(t){t.style.filter="invert(20%)"},s=n,o(i,s)}return i(e,t),e}(f.a)},function(t,e,n){var r=n(17),o=n(20),i=n(63),s=n(101),a=o((function(t){return t.push(void 0,i),r(s,void 0,t)}));t.exports=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(37),i=n.n(o),s=n(33),a=n(34),c=n(36),u=n(35),l={DisplaySize:a.a,Toolbar:c.a,Resize:u.a},h=function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.initializeModules=function(){n.removeModules(),n.modules=n.moduleClasses.map((function(t){return new(l[t]||t)(n)})),n.modules.forEach((function(t){t.onCreate()})),n.onUpdate()},this.onUpdate=function(){n.repositionElements(),n.modules.forEach((function(t){t.onUpdate()}))},this.removeModules=function(){n.modules.forEach((function(t){t.onDestroy()})),n.modules=[]},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(n.img===t.target)return;n.img&&n.hide(),n.show(t.target)}else n.img&&n.hide()},this.show=function(t){n.img=t,n.showOverlay(),n.initializeModules()},this.showOverlay=function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements()},this.hideOverlay=function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect(""))},this.repositionElements=function(){if(n.overlay&&n.img){var t=n.quill.root.parentNode,e=n.img.getBoundingClientRect(),r=t.getBoundingClientRect();Object.assign(n.overlay.style,{left:e.left-r.left-1+t.scrollLeft+"px",top:e.top-r.top+t.scrollTop+"px",width:e.width+"px",height:e.height+"px"})}},this.hide=function(){n.hideOverlay(),n.removeModules(),n.img=void 0},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(e){n.quill.root.style[e]=t,document.documentElement.style[e]=t}))},this.checkImage=function(t){n.img&&(46!=t.keyCode&&8!=t.keyCode||window.Quill.find(n.img).deleteAt(0),n.hide())},this.quill=e;var a=!1;o.modules&&(a=o.modules.slice()),this.options=i()({},o,s.a),!1!==a&&(this.options.modules=a),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,console.log("this.options.modules",this.options.modules),this.modules=[]};e.default=h,window.Quill&&window.Quill.register("modules/imageResize",h)},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(66),i=n(67),s=n(68),a=n(69),c=n(70);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=s,r.prototype.has=a,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(80),i=n(81),s=n(82),a=n(83),c=n(84);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=s,r.prototype.has=a,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(3),i=n(92),s=n(93),a=n(94),c=n(95),u=n(96);r.prototype.clear=i,r.prototype.delete=s,r.prototype.get=a,r.prototype.has=c,r.prototype.set=u,t.exports=r},function(t,e,n){var r=n(1),o=r.Uint8Array;t.exports=o},function(t,e,n){function r(t,e){var n=s(t),r=!n&&i(t),l=!n&&!r&&a(t),f=!n&&!r&&!l&&u(t),p=n||r||l||f,d=p?o(t.length,String):[],_=d.length;for(var g in t)!e&&!h.call(t,g)||p&&("length"==g||l&&("offset"==g||"parent"==g)||f&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||c(g,_))||d.push(g);return d}var o=n(53),i=n(27),s=n(28),a=n(29),c=n(24),u=n(31),l=Object.prototype,h=l.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n){var r=t[e];a.call(t,e)&&i(r,n)&&(void 0!==n||e in t)||o(t,e,n)}var o=n(10),i=n(8),s=Object.prototype,a=s.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(0),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){var r=n(62),o=r();t.exports=o},function(t,e,n){function r(t){return i(t)&&o(t)==s}var o=n(5),i=n(2),s="[object Arguments]";t.exports=r},function(t,e,n){function r(t){return!(!s(t)||i(t))&&(o(t)?p:c).test(a(t))}var o=n(13),i=n(74),s=n(0),a=n(97),c=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,h=u.toString,f=l.hasOwnProperty,p=RegExp("^"+h.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return s(t)&&i(t.length)&&!!a[o(t)]}var o=n(5),i=n(30),s=n(2),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=r},function(t,e,n){function r(t){if(!o(t))return s(t);var e=i(t),n=[];for(var r in t)("constructor"!=r||!e&&c.call(t,r))&&n.push(r);return n}var o=n(0),i=n(25),s=n(85),a=Object.prototype,c=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,r,b,m,y){var x=t[n],w=e[n],O=y.get(w);if(O)o(t,n,O);else{var E=m?m(x,w,n+"",t,e,y):void 0,T=void 0===E;if(T){var k=l(w),R=!k&&f(w),C=!k&&!R&&g(w);E=w,k||R||C?l(x)?E=x:h(x)?E=a(x):R?(T=!1,E=i(w,!0)):C?(T=!1,E=s(w,!0)):E=[]:_(w)||u(w)?(E=x,u(x)?E=v(x):(!d(x)||r&&p(x))&&(E=c(w))):T=!1}T&&(y.set(w,E),b(E,w,r,m,y),y.delete(w)),o(t,n,E)}}var o=n(18),i=n(56),s=n(57),a=n(58),c=n(71),u=n(27),l=n(28),h=n(99),f=n(29),p=n(13),d=n(0),_=n(100),g=n(31),v=n(103);t.exports=r},function(t,e,n){var r=n(98),o=n(21),i=n(26),s=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=s},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){function r(t){var e=new t.constructor(t.byteLength);return new o(e).set(new o(t)),e}var o=n(42);t.exports=r},function(t,e,n){(function(t){function r(t,e){if(e)return t.slice();var n=t.length,r=u?u(n):new t.constructor(n);return t.copy(r),r}var o=n(1),i="object"==typeof e&&e&&!e.nodeType&&e,s=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===i,c=a?o.Buffer:void 0,u=c?c.allocUnsafe:void 0;t.exports=r}).call(e,n(14)(t))},function(t,e,n){function r(t,e){var n=e?o(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var o=n(55);t.exports=r},function(t,e){function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},function(t,e,n){function r(t,e,n,r){var s=!n;n||(n={});for(var a=-1,c=e.length;++a<c;){var u=e[a],l=r?r(n[u],t[u],u,n,t):void 0;void 0===l&&(l=t[u]),s?i(n,u,l):o(n,u,l)}return n}var o=n(44),i=n(10);t.exports=r},function(t,e,n){var r=n(1),o=r["__core-js_shared__"];t.exports=o},function(t,e,n){function r(t){return o((function(e,n){var r=-1,o=n.length,s=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(s=t.length>3&&"function"==typeof s?(o--,s):void 0,a&&i(n[0],n[1],a)&&(s=o<3?void 0:s,o=1),e=Object(e);++r<o;){var c=n[r];c&&t(e,c,r,s)}return e}))}var o=n(20),i=n(72);t.exports=r},function(t,e){function n(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}t.exports=n},function(t,e,n){function r(t,e,n,s,a,c){return i(t)&&i(e)&&(c.set(e,t),o(t,e,void 0,r,c),c.delete(e)),t}var o=n(19),i=n(0);t.exports=r},function(t,e,n){function r(t){var e=s.call(t,c),n=t[c];try{t[c]=void 0}catch(t){}var r=a.call(t);return e?t[c]=n:delete t[c],r}var o=n(16),i=Object.prototype,s=i.hasOwnProperty,a=i.toString,c=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(7);t.exports=r},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return a.call(e,t)?e[t]:void 0}var o=n(7),i="__lodash_hash_undefined__",s=Object.prototype,a=s.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:s.call(e,t)}var o=n(7),i=Object.prototype,s=i.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(7),i="__lodash_hash_undefined__";t.exports=r},function(t,e,n){function r(t){return"function"!=typeof t.constructor||s(t)?{}:o(i(t))}var o=n(45),i=n(23),s=n(25);t.exports=r},function(t,e,n){function r(t,e,n){if(!a(n))return!1;var r=typeof e;return!!("number"==r?i(n)&&s(e,n.length):"string"==r&&e in n)&&o(n[e],t)}var o=n(8),i=n(12),s=n(24),a=n(0);t.exports=r},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function r(t){return!!i&&i in t}var o=n(60),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return!(n<0)&&(n==e.length-1?e.pop():s.call(e,n,1),--this.size,!0)}var o=n(4),i=Array.prototype,s=i.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(4);t.exports=r},function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(4);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(4);t.exports=r},function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(s||i),string:new o}}var o=n(39),i=n(3),s=n(15);t.exports=r},function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(6);t.exports=r},function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(6);t.exports=r},function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(6);t.exports=r},function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(6);t.exports=r},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e,n){(function(t){var r=n(22),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=i&&i.exports===o,a=s&&r.process,c=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=c}).call(e,n(14)(t))},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){function r(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,s=-1,a=i(r.length-e,0),c=Array(a);++s<a;)c[s]=r[e+s];s=-1;for(var u=Array(e+1);++s<e;)u[s]=r[s];return u[e]=n(c),o(t,this,u)}}var o=n(17),i=Math.max;t.exports=r},function(t,e,n){var r=n(52),o=n(91),i=o(r);t.exports=i},function(t,e){function n(t){var e=0,n=0;return function(){var s=i(),a=o-(s-n);if(n=s,a>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;t.exports=n},function(t,e,n){function r(){this.__data__=new o,this.size=0}var o=n(3);t.exports=r},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<a-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new s(r)}return n.set(t,e),this.size=n.size,this}var o=n(3),i=n(15),s=n(40),a=200;t.exports=r},function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},function(t,e){function n(t){return function(){return t}}t.exports=n},function(t,e,n){function r(t){return i(t)&&o(t)}var o=n(12),i=n(2);t.exports=r},function(t,e,n){function r(t){if(!s(t)||o(t)!=a)return!1;var e=i(t);if(null===e)return!0;var n=h.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==f}var o=n(5),i=n(23),s=n(2),a="[object Object]",c=Function.prototype,u=Object.prototype,l=c.toString,h=u.hasOwnProperty,f=l.call(Object);t.exports=r},function(t,e,n){var r=n(19),o=n(61),i=o((function(t,e,n,o){r(t,e,n,o)}));t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){return o(t,i(t))}var o=n(59),i=n(32);t.exports=r},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])}))},7844:function(t,e,n){"use strict";n.d(e,{qk:function(){return be},c7:function(){return ye},KR:function(){return me},bp:function(){return ve}});n(4114),n(8111),n(2489),n(7588),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(4979);var r=n(3405),o=n(774),i=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5,l=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends o.g{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,p;function d(t){return"storage/"+t}function _(){const t="An unknown error occurred, please check the error payload for server response.";return new h(f.UNKNOWN,t)}function g(t){return new h(f.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function v(t){return new h(f.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(f.UNAUTHENTICATED,t)}function m(){return new h(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function y(t){return new h(f.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function x(){return new h(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w(){return new h(f.CANCELED,"User canceled the upload/download.")}function O(t){return new h(f.INVALID_URL,"Invalid URL '"+t+"'.")}function E(t){return new h(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T(){return new h(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function k(){return new h(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function R(){return new h(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function C(){return new h(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function U(t){return new h(f.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function A(t){return new h(f.INVALID_ARGUMENT,t)}function S(){return new h(f.APP_DELETED,"The Firebase app was deleted.")}function j(t){return new h(f.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function P(t,e){return new h(f.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function N(t){throw new h(f.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(f||(f={}));class I{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=I.makeFromUrl(t,e)}catch(r){return new I(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),d={bucket:1,path:3},_=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${_}/${r}/${g}`,"i"),b={bucket:1,path:2},m=[{regex:a,indices:c,postModify:o},{regex:p,indices:d,postModify:u},{regex:v,indices:b,postModify:u}];for(let s=0;s<m.length;s++){const e=m[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let o=r[e.indices.path];o||(o=""),n=new I(t,o),e.postModify(n);break}}if(null==n)throw O(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let r=1,o=null,i=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){o=setTimeout((()=>{o=null,t(p,c())}),e)}function f(){i&&clearTimeout(i)}function p(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||s;if(n)return f(),void l.call(null,t,...e);let o;r<64&&(r*=2),1===a?(a=2,o=0):o=1e3*(r+Math.random()),h(o)}let d=!1;function _(t){d||(d=!0,f(),u||(null!==o?(t||(a=2),clearTimeout(o),h(0)):t||(a=1)))}return h(0),i=setTimeout((()=>{s=!0,_(!0)}),n),_}function B(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return void 0!==t}function M(t){return"function"===typeof t}function q(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function H(t){return $()&&t instanceof Blob}function $(){return"undefined"!==typeof Blob}function V(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function X(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const o=e(r)+"="+e(t[r]);n=n+o+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t,e){const n=t>=500&&t<600,r=[408,429],o=-1!==r.indexOf(t),i=-1!==e.indexOf(t);return n||o||i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(p||(p={}));class K{constructor(t,e,n,r,o,i,s,a,c,u,l,h=!0,f=!1){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Z(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===p.NO_ERROR,o=n.getStatus();if(!e||G(o,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===p.ABORT;return void t(!1,new Z(!1,null,e))}const i=-1!==this.successCodes_.indexOf(o);t(!0,new Z(i,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,o=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(o,o.getResponse());z(t)?n(t):n()}catch(i){r(i)}else if(null!==o){const t=_();t.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,t)):r(t)}else if(e.canceled){const t=this.appDelete_?S():w();r(t)}else{const t=x();r(t)}};this.canceled_?e(!1,new Z(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&B(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Z{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function J(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tt(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function et(t,e,n,r,o,i,s=!0,a=!1){const c=X(t.urlParams),u=t.url+c,l=Object.assign({},t.headers);return Y(l,e),J(l,n),Q(l,i),tt(l,r),new K(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,s,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function rt(...t){const e=nt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if($())return new Blob(t);throw new h(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function ot(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){if("undefined"===typeof atob)throw U("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class at{constructor(t,e){this.data=t,this.contentType=e||null}}function ct(t,e){switch(t){case st.RAW:return new at(ut(e));case st.BASE64:case st.BASE64URL:return new at(ht(t,e));case st.DATA_URL:return new at(pt(e),dt(e))}throw _()}function ut(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const o=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(o){const o=r,i=t.charCodeAt(++n);r=65536|(1023&o)<<10|1023&i,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function lt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw P(st.DATA_URL,"Malformed data URL.")}return ut(e)}function ht(t,e){switch(t){case st.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw P(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case st.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw P(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=it(e)}catch(o){if(o.message.includes("polyfill"))throw o;throw P(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ft{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw P(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=_t(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function pt(t){const e=new ft(t);return e.base64?ht(st.BASE64,e.rest):lt(e.rest)}function dt(t){const e=new ft(t);return e.contentType}function _t(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e){let n=0,r="";H(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(H(this.data_)){const n=this.data_,r=ot(n,t,e);return null===r?null:new gt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new gt(n,!0)}}static getBlob(...t){if($()){const e=t.map((t=>t instanceof gt?t.data_:t));return new gt(rt.apply(null,e))}{const e=t.map((t=>F(t)?ct(st.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let o=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[o++]=t[e]})),new gt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return q(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return e}class wt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||xt}}let Ot=null;function Et(t){return!F(t)||t.length<2?t:yt(t)}function Tt(){if(Ot)return Ot;const t=[];function e(t,e){return Et(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const o=new wt("size");return o.xform=r,t.push(o),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Ot=t,Ot}function kt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],o=new I(n,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Rt(t,e,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const t=n[i];r[t.local]=t.xform(r,e[t.server])}return kt(r,t),r}function Ct(t,e,n){const r=vt(e);if(null===r)return null;const o=r;return Rt(t,o,n)}function Ut(t,e,n,r){const o=vt(e);if(null===o)return null;if(!F(o["downloadTokens"]))return null;const i=o["downloadTokens"];if(0===i.length)return null;const s=encodeURIComponent,a=i.split(","),c=a.map((e=>{const o=t["bucket"],i=t["fullPath"],a="/b/"+s(o)+"/o/"+s(i),c=W(a,n,r),u=X({alt:"media",token:e});return c+u}));return c[0]}function At(t,e){const n={},r=e.length;for(let o=0;o<r;o++){const r=e[o];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){if(!t)throw _()}function Pt(t,e){function n(n,r){const o=Ct(t,r,e);return jt(null!==o),o}return n}function Nt(t,e){function n(n,r){const o=Ct(t,r,e);return jt(null!==o),Ut(o,r,t.host,t._protocol)}return n}function It(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():b():402===e.getStatus()?v(t.bucket):403===e.getStatus()?y(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Dt(t){const e=It(t);function n(n,r){let o=e(n,r);return 404===n.getStatus()&&(o=g(t.path)),o.serverResponse=r.serverResponse,o}return n}function Lt(t,e,n){const r=e.fullServerUrl(),o=W(r,t.host,t._protocol),i="GET",s=t.maxOperationRetryTime,a=new St(o,i,Pt(t,n),s);return a.errorHandler=Dt(e),a}function Bt(t,e,n){const r=e.fullServerUrl(),o=W(r,t.host,t._protocol),i="GET",s=t.maxOperationRetryTime,a=new St(o,i,Nt(t,n),s);return a.errorHandler=Dt(e),a}function zt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Mt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=zt(null,e)),r}function qt(t,e,n,r,o){const i=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Mt(e,r,o),l=At(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",p=gt.getBlob(h,r,f);if(null===p)throw k();const d={name:u["fullPath"]},_=W(i,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,b=new St(_,g,Pt(t,n),v);return b.urlParams=d,b.headers=s,b.body=p.uploadData(),b.errorHandler=It(e),b}class Ft{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Ht(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(o){jt(!1)}const r=e||["active"];return jt(!!n&&-1!==r.indexOf(n)),n}function $t(t,e,n,r,o){const i=e.bucketOnlyServerUrl(),s=Mt(e,r,o),a={name:s["fullPath"]},c=W(i,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=At(s,n),f=t.maxUploadRetryTime;function p(t){let e;Ht(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){jt(!1)}return jt(F(e)),e}const d=new St(c,u,p,f);return d.urlParams=a,d.headers=l,d.body=h,d.errorHandler=It(e),d}function Vt(t,e,n,r){const o={"X-Goog-Upload-Command":"query"};function i(t){const e=Ht(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){jt(!1)}n||jt(!1);const o=Number(n);return jt(!isNaN(o)),new Ft(o,r.size(),"final"===e)}const s="POST",a=t.maxUploadRetryTime,c=new St(n,s,i,a);return c.headers=o,c.errorHandler=It(e),c}const Wt=262144;function Xt(t,e,n,r,o,i,s,a){const c=new Ft(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw R();const u=c.total-c.current;let l=u;o>0&&(l=Math.min(l,o));const h=c.current,f=h+l;let p="";p=0===l?"finalize":u===l?"upload, finalize":"upload";const d={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},_=r.slice(h,f);if(null===_)throw k();function g(t,n){const o=Ht(t,["active","final"]),s=c.current+l,a=r.size();let u;return u="final"===o?Pt(e,i)(t,n):null,new Ft(s,a,"final"===o,u)}const v="POST",b=e.maxUploadRetryTime,m=new St(n,v,g,b);return m.headers=d,m.body=_.uploadData(),m.progressCallback=a||null,m.errorHandler=It(t),m}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kt(t){switch(t){case"running":case"pausing":case"canceling":return Gt.RUNNING;case"paused":return Gt.PAUSED;case"success":return Gt.SUCCESS;case"canceled":return Gt.CANCELED;case"error":return Gt.ERROR;default:return Gt.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e,n){const r=M(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt=null;class Yt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=p.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=p.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r,i){if(this.sent_)throw N("cannot .send() more than once");if((0,o.zJ)(t)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw N("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw N("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class te extends Yt{initXhr(){this.xhr_.responseType="text"}}function ee(){return Qt?Qt():new te}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=Tt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{if(this._request=void 0,this._chunkMultiplier=1,t._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const e=this.isExponentialBackoffExpired();if(G(t.status,[])){if(!e)return this.sleepTime=Math.max(2*this.sleepTime,l),this._needToFetchStatus=!0,void this.completeTransitions_();t=x()}this._error=t,this._transition("error")}},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=t,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=$t(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ee,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const r=Vt(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(r,ee,e,n);this._request=o,o.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Wt*this._chunkMultiplier,e=new Ft(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let i;try{i=Xt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(i,ee,r,o,!1);this._request=s,s.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Wt*this._chunkMultiplier;2*t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Lt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ee,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=qt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ee,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Kt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const o=new Zt(e||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Kt(this._state)){case Gt.SUCCESS:Jt(this._resolve.bind(null,this.snapshot))();break;case Gt.CANCELED:case Gt.ERROR:const e=this._reject;Jt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Kt(this._state);switch(e){case Gt.RUNNING:case Gt.PAUSED:t.next&&Jt(t.next.bind(t,this.snapshot))();break;case Gt.SUCCESS:t.complete&&Jt(t.complete.bind(t))();break;case Gt.CANCELED:case Gt.ERROR:t.error&&Jt(t.error.bind(t,this._error))();break;default:t.error&&Jt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this._service=t,this._location=e instanceof I?e:I.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new re(t,e)}get root(){const t=new I(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=bt(this._location.path);if(null===t)return null;const e=new I(this._location.bucket,t);return new re(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw j(t)}}function oe(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ne(t,new gt(e),n)}function ie(t){t._throwIfRoot("getDownloadURL");const e=Bt(t.storage,t._location,Tt());return t.storage.makeRequestWithTokens(e,ee).then((t=>{if(null===t)throw C();return t}))}function se(t,e){const n=mt(t._location.path,e),r=new I(t._location.bucket,n);return new re(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return/^[A-Za-z]+:\/\//.test(t)}function ce(t,e){return new re(t,e)}function ue(t,e){if(t instanceof pe){const n=t;if(null==n._bucket)throw T();const r=new re(n,n._bucket);return null!=e?ue(r,e):r}return void 0!==e?se(t,e):t}function le(t,e){if(e&&ae(e)){if(t instanceof pe)return ce(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return ue(t,e)}function he(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:I.makeFromBucketSpec(n,t)}function fe(t,e,n,r={}){t.host=`${e}:${n}`;const i=(0,o.zJ)(e);i&&((0,o.gE)(`https://${t.host}/b`),(0,o.P1)("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,o.Fy)(s,t.app.options.projectId))}class pe{constructor(t,e,n,r,o,i=!1){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?I.makeFromBucketSpec(r,this._host):he(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=I.makeFromBucketSpec(this._url,t):this._bucket=he(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new re(this,t)}_makeRequest(t,e,n,r,o=!0){if(this._deleted)return new D(S());{const i=et(t,this._appId,n,r,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const de="@firebase/storage",_e="0.13.13",ge="storage";function ve(t,e,n){return t=(0,o.Ku)(t),oe(t,e,n)}function be(t){return t=(0,o.Ku)(t),ie(t)}function me(t,e){return t=(0,o.Ku)(t),le(t,e)}function ye(t=(0,r.Sx)(),e){t=(0,o.Ku)(t);const n=(0,r.j6)(t,ge),i=n.getImmediate({identifier:e}),s=(0,o.yU)("storage");return s&&xe(i,...s),i}function xe(t,e,n,r={}){fe(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new pe(n,o,i,e,r.MF)}function Oe(){(0,r.om)(new i.uA(ge,we,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(de,_e,""),(0,r.KO)(de,_e,"esm2017")}Oe()}}]);
//# sourceMappingURL=205.b466e9dc.js.map