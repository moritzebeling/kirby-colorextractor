!function i(n,c,a){function u(e,t){if(!c[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(l)return l(e,!0);var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var o=c[e]={exports:{}};n[e][0].call(o.exports,function(t){return u(n[e][1][t]||t)},o,o.exports,i,n,c,a)}return c[e].exports}for(var l="function"==typeof require&&require,t=0;t<a.length;t++)u(a[t]);return u}({1:[function(s,t,o){!function(){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t,e=s(2),r=(t=e)&&t.__esModule?t:{default:t};o.default={data:function(){return{el:"div",iconEmpty:{type:"check",back:"theme-empty"},icon:{type:"refresh",back:"theme-process"},processing:!1,completed:[],failed:[]}},props:{message:String,messageEmpty:String,files:Array},computed:{count:function(){var t=this.files.length;return t=Object.is(t,void 0)?0:t,t},completedCount:function(){var t=this.completed.length;return t=Object.is(t,void 0)?0:t},imageString:function(){return 1==this.count?"image":"images"},isString:function(){return 1==this.count?"is":"are"},itString:function(){return 1==this.count?"it":"them"}},methods:{processImages:function(){var s=this;this.resetArrays(),this.processing=!0,this.files.forEach(function(t){(0,r.default)(t,{success:function(t,e){s.complete(e,"success")},error:function(t,e,r){s.complete(e,"error")}})})},complete:function(t,e){var r=this;this.completed.push(t.name),"error"==e&&this.failed.push(t.name),this.completedCount==this.count&&(0<this.failed.length?this.failedExtraction():setTimeout(function(){r.completedExtraction()},250)),this.setProgress()},setProgress:function(){var t=this.completedCount/this.count*100;t=Math.max(0,Math.min(100,t)),this.$refs.progress.set(t)},completedExtraction:function(){var t=this.completedCount+" images processed!";this.$refs.dialog.close(),this.$store.dispatch("notification/success",t),this.processing=!1,this.currentIndex=0,this.files={}},failedExtraction:function(){var t=1<this.failed.length?" errors.":" error.",e=this.completedCount+" images processed, with "+this.failed.length+t,r=this.failed;this.$refs.dialog.close(),this.$store.dispatch("notification/error",e),this.processing=!1,this.currentIndex=0,this.files=this.files.filter(function(t){return-1<r.indexOf(t.name)})},abortExtraction:function(){this.$refs.dialog.close(),this.processing=!1},resetArrays:function(){this.completed=[],this.failed=[]}}}}(),t.exports.__esModule&&(t.exports=t.exports.default);var e="function"==typeof t.exports?t.exports.options:t.exports;e.render=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("k-field",e._b({},"k-field",e.$attrs,!1),[0==e.count?r("k-list-item",{staticClass:"colorextractor-empty",attrs:{text:e.messageEmpty,icon:e.iconEmpty,element:e.el}}):r("k-list-item",{staticClass:"colorextractor-button",attrs:{text:e.message,icon:e.icon,element:e.el},on:{click:function(t){e.$refs.dialog.open()}}}),e._v(" "),r("k-dialog",{ref:"dialog",attrs:{theme:"negative"}},[e.processing?[r("k-headline",[e._v("Processing…")]),e._v(" "),r("k-progress",{ref:"progress"}),e._v(" "),r("ul",{staticClass:"k-upload-list"},[r("div",{staticClass:"colorextractor-progress-caption"},[r("p",{staticClass:"k-colextractor-counter"},[e._v("Extracted: "+e._s(e.completedCount)+" / "+e._s(e.count))])])]),e._v(" "),r("template",{slot:"footer"},[r("k-button-group",[r("k-button",{attrs:{icon:"cancel"},on:{click:e.abortExtraction}},[e._v("Cancel")])],1)],1)]:[r("k-text",[e._v("\n\t\t    \t\tThere "+e._s(e.isString)+" "),r("strong",[e._v(e._s(e.count)+" "+e._s(e.imageString))]),e._v(" without any color extracted, do you want to process "+e._s(e.itString)+" now?\n\t\t    \t")]),e._v(" "),r("template",{slot:"footer"},[r("k-button-group",[r("k-button",{attrs:{icon:"cancel"},on:{click:function(t){e.$refs.dialog.close()}}},[e._v("Cancel")]),e._v(" "),r("k-button",{attrs:{icon:"check",theme:"positive"},on:{click:e.processImages}},[e._v("Process")])],1)],1)]],2)],1)},e.staticRenderFns=[]},{2:2}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(r,t){var s=Object.assign({url:"plugins/colorextractor/process-image",accept:"text",attributes:{},complete:function(){},error:function(){},success:function(){},progress:function(){}},t),e=new FormData;e.append("id",r.id),s.attributes&&Object.keys(s.attributes).forEach(function(t){e.append(t,s.attributes[t])});var o=new XMLHttpRequest;o.addEventListener("load",function(t){var e=null;try{e=JSON.parse(t.target.response)}catch(t){e={status:"error",message:"The file could not be updated"}}e.status&&"error"===e.status?s.error(o,r,e):s.success(o,r,e)}),o.addEventListener("error",function(t){var e=JSON.parse(t.target.response);s.error(o,r,e),s.progress(o,r,100)}),o.open("POST",s.url,!0),o.send(e)}},{}],3:[function(t,e,r){"use strict";var s,o=t(1),i=(s=o)&&s.__esModule?s:{default:s};panel.plugin("sylvainjule/colorextractor",{fields:{colorextractor:i.default}})},{1:1}]},{},[3]);