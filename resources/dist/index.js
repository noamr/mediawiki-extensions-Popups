!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t.default=r}])},"./node_modules/redux/dist/redux.min.js":function(e,t,n){(function(e,n){!function(t){"use strict";var r=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function a(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+n+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e,t){return function(){return t(e.apply(this,arguments))}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}t.createStore=function e(t,n,i){var a;if("function"==typeof n&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw Error("Expected the enhancer to be a function.");return i(e)(t,n)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var s=t,u=n,c=[],p=c,l=!1;function d(){p===c&&(p=c.slice())}function f(){if(l)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function g(e){if("function"!=typeof e)throw Error("Expected the listener to be a function.");if(l)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),p.push(e),function(){if(t){if(l)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=p.indexOf(e);p.splice(n,1)}}}function v(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw Error("Reducers may not dispatch actions.");try{l=!0,u=s(u,e)}finally{l=!1}for(var t=c=p,n=0;t.length>n;n++)(0,t[n])();return e}return v({type:o.INIT}),(a={dispatch:v,subscribe:g,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");s=e,v({type:o.REPLACE})}})[r]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[r]=function(){return this},e},a},t.combineReducers=function(e){for(var t=Object.keys(e),n={},r=0;t.length>r;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var s,u=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,i={},o=0;u.length>o;o++){var c=u[o],p=e[c],l=(0,n[c])(p,t);if(void 0===l){var d=a(c,t);throw Error(d)}i[c]=l,r=r||l!==p}return r?i:e}},t.bindActionCreators=function(e,t){if("function"==typeof e)return s(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},i=0;n.length>i;i++){var o=n[i],a=e[o];"function"==typeof a&&(r[o]=s(a,t))}return r},t.applyMiddleware=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map(function(e){return e(i)});return function(e){for(var t=1;arguments.length>t;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},n,{dispatch:r=c.apply(void 0,o)(n.dispatch)})}}},t.compose=c,t.__DO_NOT_USE__ActionTypes=o,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n("./node_modules/webpack/buildin/global.js"),n("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"./src/counts.js":function(e,t){t.getEditCountBucket=function(e){var t;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=99?t="5-99":e>=100&&e<=999?t="100-999":e>=1e3&&(t="1000+"),"".concat(t," edits")},t.getPreviewCountBucket=function(e){var t;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=20?t="5-20":e>=21&&(t="21+"),void 0!==t?"".concat(t," previews"):"unknown"}},"./src/index.js":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"boot",function(){return xe}),n.d(r,"fetch",function(){return Pe}),n.d(r,"linkDwell",function(){return Oe}),n.d(r,"abandon",function(){return Ae}),n.d(r,"linkClick",function(){return Le}),n.d(r,"previewDwell",function(){return Ne}),n.d(r,"previewShow",function(){return Ce}),n.d(r,"pageviewLogged",function(){return De}),n.d(r,"showSettings",function(){return Re}),n.d(r,"hideSettings",function(){return Ge}),n.d(r,"saveSettings",function(){return je}),n.d(r,"eventLogged",function(){return He}),n.d(r,"statsvLogged",function(){return We});var i=n("./node_modules/redux/dist/redux.min.js"),o=n("./node_modules/redux-thunk/dist/redux-thunk.min.js"),a=n.n(o),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.devicePixelRatio;return e?e>1.5?2:e>1?1.5:1:1}(),u={BRACKETED_DEVICE_PIXEL_RATIO:s,THUMBNAIL_SIZE:320*s,EXTRACT_LENGTH:525},c={TYPE_GENERIC:"generic",TYPE_PAGE:"page",TYPE_DISAMBIGUATION:"disambiguation",TYPE_REFERENCE:"reference"};function p(e,t,n,r,i,o,a,s){var u=function(e){if(null==e||0===e.length)return;return e}(i);return{title:e,url:t,languageCode:n,languageDirection:r,extract:u,type:function(e,t){if(void 0===t)return c.TYPE_GENERIC;switch(e){case c.TYPE_GENERIC:case c.TYPE_DISAMBIGUATION:case c.TYPE_PAGE:case c.TYPE_REFERENCE:return e;default:return c.TYPE_PAGE}}(o,u),thumbnail:a,pageId:s}}function l(e,t){return p(e,t,"","",[],"")}var d=jQuery,f=mediaWiki;function g(e,t){var n=e;return void 0===e?[]:0===n.length?[]:n=function(e,t){var n=[],r="<bi-".concat(Math.random(),">"),i="<snip-".concat(Math.random(),">");t=t.replace(/\s+/g," ").trim();var o=f.RegExp.escape(t),a=new RegExp("(^|\\s)(".concat(o,")(|$)"),"i");return(e=(e=(e=e.replace(/\s+/," ")).replace(a,"$1".concat(i).concat(r,"$2").concat(i,"$3"))).split(i)).forEach(function(e){0===e.indexOf(r)?n.push(d("<b>").text(e.substring(r.length))):n.push(document.createTextNode(e))}),n}(n,t)}var v=300,h=jQuery;function w(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function m(e){var t=h.extend({},e);return t.extract=g(e.extract,e.title),t}function E(e){return p(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.type,e.thumbnail,e.pageid)}var T="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0",b=mediaWiki,y=jQuery;function _(e,t,n){function r(n){var r=t.endpoint;return e({url:r+encodeURIComponent(n),headers:{Accept:'application/json; charset=utf-8; profile="'.concat(T,'"'),"Accept-Language":t.acceptLanguage}})}return{fetch:r,convertPageToModel:S,fetchPreviewForTitle:function(e){var i=e.getPrefixedDb(),o=r(i);return o.then(function(e){return e&&e.title||(e=y.extend(!0,e||{},{title:i})),void 0===e.extract&&(e.extract=""),S(e,t.THUMBNAIL_SIZE,n)}).catch(function(e,t,n){return y.Deferred().reject("http",{xhr:e,textStatus:t,exception:n})}).promise({abort:function(){o.abort()}})}}}function I(e,t,n){var r=e.source.split("/"),i=r[r.length-1],o=function(e){return new RegExp(/\.(jpg|jpeg|png|gif)$/i).test(e)}(t.source)||void 0,a=i.indexOf("px-");if(-1===a)return o&&t;var s,u,c=i.substr(a+3);return e.width>e.height?(s=n,u=Math.floor(n/e.width*e.height)):(s=Math.floor(n/e.height*e.width),u=n),s>=t.width&&-1===c.indexOf(".svg")?o&&t:(r[r.length-1]="".concat(s,"px-").concat(c),{source:r.join("/"),width:s,height:u})}function S(e,t,n){return p(e.title,new b.Title(e.title).getUrl(),e.lang,e.dir,n(e),e.type,e.thumbnail?I(e.thumbnail,e.originalimage,t):void 0,e.pageid)}function k(e){var t=e.extract_html;return 0===t.length?[]:$.parseHTML(t)}function x(e){return g(e.extract,e.title)}var P=mediaWiki,O=jQuery;function A(e){var t=O.extend({},u,{acceptLanguage:e.get("wgPageContentLanguage")}),n=O.extend({},t,{endpoint:e.get("wgPopupsRestGatewayEndpoint")});switch(e.get("wgPopupsGateway")){case"mwApiPlain":return function(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:!0,exchars:t.EXTRACT_LENGTH,explaintext:!0,piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:v,maxage:v,uselang:"content"},{headers:{"X-Analytics":"preview=1","Accept-Language":t.acceptLanguage}})}return{fetch:n,extractPageFromResponse:w,convertPageToModel:E,fetchPreviewForTitle:function(e){var t=n(e.getPrefixedDb());return t.then(function(e){return E(m(w(e)))}).promise({abort:function(){t.abort()}})},formatPlainTextExtract:m}}(new P.Api,t);case"restbasePlain":return _(O.ajax,n,x);case"restbaseHTML":return _(O.ajax,n,k);default:throw new Error("Unknown gateway")}}var L=jQuery;var N="mwe-popups-enabled",C="ext.popups.core.previewCount";var D=mediaWiki;var R=mediaWiki;function G(e){return R.html.escape(e)}function j(e){var t=G(e.heading),n=G(e.saveLabel),r=G(e.closeLabel),i=G(e.helpText),o=G(e.okLabel),a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){var t=e.id,n=e.name,r=e.description,i=e.isChecked;return{id:G(t),name:G(n),description:r?G(r):"",isChecked:i}})}(e.choices);return"\n\t\t<section id='mwe-popups-settings'>\n\t\t\t<header>\n\t\t\t\t<div>\n\t\t\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-close close'>".concat(r,"</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>").concat(t,"</h1>\n\t\t\t\t<div>\n\t\t\t\t\t<button class='save mw-ui-button mw-ui-progressive'>").concat(n,"</button>\n\t\t\t\t\t<button class='okay mw-ui-button mw-ui-progressive' style='display:none;'>").concat(o,"</button>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<main id='mwe-popups-settings-form'>\n\t\t\t\t<form>\n\t\t\t\t\t").concat(a.map(function(e){var t=e.id,n=e.name,r=e.description,i=e.isChecked;return"\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tname='mwe-popups-setting'\n\t\t\t\t\t\t\t".concat(i?"checked":"","\n\t\t\t\t\t\t\tvalue='").concat(t,"'\n\t\t\t\t\t\t\ttype='radio'\n\t\t\t\t\t\t\tid='mwe-popups-settings-").concat(t,"'>\n\t\t\t\t\t\t<label for='mwe-popups-settings-").concat(t,"'>\n\t\t\t\t\t\t\t<span>").concat(n,"</span>\n\t\t\t\t\t\t\t").concat(r,"\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>")}).join(""),"\n\t\t\t\t</form>\n\t\t\t</main>\n\t\t\t<div class='mwe-popups-settings-help' style='display:none;'>\n\t\t\t\t<div class=\"mw-ui-icon mw-ui-icon-element mw-ui-icon-footer\"></div>\n\t\t\t\t<p>").concat(i,"</p>\n\t\t\t</div>\n\t\t</section>\n\t").trim()}var H=mediaWiki;var W=jQuery;function B(){var e,t;return function(n){var r,i;return e||(r=F(),i=[{id:"simple",name:H.msg("popups-settings-option-simple"),description:H.msg("popups-settings-option-simple-description"),isChecked:!0},{id:"advanced",name:H.msg("popups-settings-option-advanced"),description:H.msg("popups-settings-option-advanced-description")},{id:"off",name:H.msg("popups-settings-option-off")}],r||i.splice(1,1),e=$($.parseHTML(j({heading:H.msg("popups-settings-title"),closeLabel:H.msg("popups-settings-cancel"),saveLabel:H.msg("popups-settings-save"),helpText:H.msg("popups-settings-help"),okLabel:H.msg("popups-settings-help-ok"),choices:i}))),t=W("<div>").addClass("mwe-popups-overlay"),e.find(".save").click(function(){var t="simple"===e.find("input[name=mwe-popups-setting]:checked, #mwe-popups-settings").val();n.saveSettings(t)}),e.find(".close, .okay").click(n.hideSettings)),{appendTo:function(n){t.appendTo(n),e.appendTo(t)},show:function(){t.show()},hide:function(){t.hide()},toggleHelp:function(e){!function(e,t){var n=W("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}(0,e)},setEnabled:function(t){var n="off";t?n="simple":F()&&(n="advanced"),e.find("#mwe-popups-settings-".concat(n)).prop("checked",!0)}}}}function F(){return"undefined"!=typeof pg&&void 0!==pg.fn.disablePopups}function M(e,t){var n;e.subscribe(function(){var r=n;r!==(n=e.getState())&&t(r,n)})}var U=mediaWiki;function V(e,t){return function(e,t){if(!e)return null;var n=U.Title.newFromText(e);return n&&t.indexOf(n.namespace)>=0?n:null}(function(e,t){var n,r=new RegExp(U.RegExp.escape(t.get("wgArticlePath")).replace("\\$1","(.+)"));try{n=new U.Uri(e)}catch(e){return}if(n.host===location.hostname){var i=Object.keys(n.query).length;if(!i){var o=r.exec(n.path);return o?decodeURIComponent(o[1]):void 0}return 1===i&&n.query.hasOwnProperty("title")?n.query.title:void 0}}(e.href,t),t.get("wgContentNamespaces"))}var Y=jQuery;function K(e){var t=Y.Deferred(),n=setTimeout(function(){t.resolve()},e);return t.catch(function(){return clearTimeout(n)}),t.promise({abort:function(){t.reject()}})}var X=n("./src/ui/pointer-mask.svg"),Q=n.n(X),q={portraitImage:{h:250,w:203},landscapeImage:{h:200,w:320}},z=jQuery;function Z(e,t,n,r,i,o,a,s){var u="http://www.w3.org/2000/svg",c=document.createElementNS(u,"polyline"),p=-1===e.indexOf("not-tall")?[0,0,0,s]:[0,s-1,a,s-1];c.setAttribute("stroke","rgba(0,0,0,0.1)"),c.setAttribute("points",p.join(" ")),c.setAttribute("stroke-width",1);var l=z(document.createElementNS(u,"image"));l[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),l.addClass(e).attr({x:n,y:r,width:i,height:o});var d=z(document.createElementNS(u,"svg")).attr({xmlns:u,width:a,height:s}).append(l);return d.append(c),d}function J(e,t){return"\n\t<div class='mwe-popups mwe-popups-type-".concat(e,"' role='tooltip' aria-hidden>\n\t\t<div class='mwe-popups-container'>").concat(t,"</div>\n\t</div>\n\t").trim()}function ee(e,t,n,r){var i=e.title,o=e.url,a=e.type;return i=G(i),n=G(n),r=G(r),J(a,"\n\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-preview-".concat(a,"'></div>\n\t\t\t").concat(t?"<strong class='mwe-popups-title'>".concat(i,"</strong>"):"","\n\t\t\t<a href='").concat(o,"' class='mwe-popups-extract'>\n\t\t\t\t<span class='mwe-popups-message'>").concat(n,"</span>\n\t\t\t</a>\n\t\t\t<footer>\n\t\t\t\t<a href='").concat(o,"' class='mwe-popups-read-link'>").concat(r,"</a>\n\t\t\t</footer>\n\t\t"))}var te=mediaWiki;var ne=mediaWiki,re=jQuery,ie=215,oe=re(window),ae=450,se=320,ue=8;function ce(){var e;e=document.body,re("<div>").attr("id","mwe-popups-svg").html(Q.a).appendTo(e)}function pe(e){var t=function(e){switch(e.type){case c.TYPE_PAGE:return function(e){var t=function(e){var t=u.BRACKETED_DEVICE_PIXEL_RATIO;if(!e)return null;var n,r,i,o,a=e.width<e.height,s=e.width/t,c=e.height/t;if(!a&&s<q.landscapeImage.w||a&&c<q.portraitImage.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1)return null;a?(n=s>q.portraitImage.w?(s-q.portraitImage.w)/-2:q.portraitImage.w-s,r=c>q.portraitImage.h?(c-q.portraitImage.h)/-2:0,i=q.portraitImage.w,o=q.portraitImage.h,s<i&&(n=0,i=s)):(n=0,r=c>q.landscapeImage.h?(c-q.landscapeImage.h)/-2:0,i=q.landscapeImage.w,o=c>q.landscapeImage.h?q.landscapeImage.h:c);var p=a&&s<q.portraitImage.w;return{el:Z(a?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,n,r,s,c,i,o),isTall:a,isNarrow:p,offset:p?q.portraitImage.w-s:0,width:s,height:c}}(e.thumbnail),n=null!==t,r=e.extract,i=re(re.parseHTML(function(e,t){var n=e.url,r=e.type,i=e.languageCode,o=e.languageDirection;return J(r,"\n\t\t\t".concat(t?"<a href='".concat(n,"' class='mwe-popups-discreet'></a>"):"","\n\t\t\t<a dir='").concat(o,"' lang='").concat(i,"' class='mwe-popups-extract' href='").concat(n,"'></a>\n\t\t\t<footer>\n\t\t\t\t<a class='mwe-popups-settings-icon'>\n\t\t\t\t\t<span class=\"mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-settings\"></span>\n\t\t\t\t</a>\n\t\t\t</footer>\n\t\t"))}(e,n)));n&&i.find(".mwe-popups-discreet").append(t.el);if(r){var o=function(e){return e&&e.isNarrow?"".concat(ie+e.offset,"px"):""}(t);i.find(".mwe-popups-extract").css("width",o).append(r),i.find("footer").css("width",o)}return{el:i,hasThumbnail:n,thumbnail:t,isTall:n&&t.isTall}}(e);case c.TYPE_DISAMBIGUATION:return function(e){var t=ne.msg("popups-preview-disambiguation"),n=ne.msg("popups-preview-disambiguation-link");return{el:re(re.parseHTML(ee(e,!0,t,n))),hasThumbnail:!1,isTall:!1}}(e);case c.TYPE_REFERENCE:return function(e){var t=re(re.parseHTML(function(e){var t=G(e.title||te.msg("popups-refpreview-footnote")),n=G(e.url),r=G(te.msg("popups-refpreview-jump-to-reference"));return J(e.type,"\n\t\t\t<strong class='mwe-popups-title'>".concat(t,"</strong>\n\t\t\t<div class='mwe-popups-extract'>\n\t\t\t\t<span class='mwe-popups-message'>").concat(e.extract,"</span>\n\t\t\t</div>\n\t\t\t<footer>\n\t\t\t\t<a href='").concat(n,"' class='mwe-popups-read-link'>").concat(r,"</a>\n\t\t\t</footer>\n\t\t"))}(e)));return t.find(".mwe-popups-extract a[href]:not([target])").each(function(e,t){t.target="_blank",t.rel="".concat(t.rel?"".concat(t.rel," "):"","noopener")}),{el:t,hasThumbnail:!1,isTall:!1}}(e);default:return function(e){var t=ne.msg("popups-preview-no-preview"),n=ne.msg("popups-preview-footer-read");return{el:re(re.parseHTML(ee(e,!1,t,n))),hasThumbnail:!1,isTall:!1}}(e)}}(e);return{show:function(e,n,r){return function(e,t,n,r,i,o,a){var s=function(e,t,n,r,i,o){var a=!1,s=!1,u=t.pageY?le(t.pageY-r.scrollTop,n.clientRects,!1)+r.scrollTop+i:n.offset.top+n.height+i,c=t.pageX?t.pageX:n.offset.left,p=t.clientY?t.clientY:u;c>r.width/2&&(c+=t.pageX?0:n.width,c-=e?ae:se,a=!0);t.pageX&&(c+=a?20:-20);p>r.height/2&&(s=!0,u=n.offset.top,t.pageY&&(u=le(t.pageY-r.scrollTop,n.clientRects,!0)+r.scrollTop),u-=i);return{offset:{top:u,left:c},flippedX:"rtl"===o?!a:a,flippedY:s,dir:o}}(e.isTall,{pageX:t.pageX,pageY:t.pageY,clientY:t.clientY},{clientRects:n.get(0).getClientRects(),offset:n.offset(),width:n.width(),height:n.height()},{scrollTop:oe.scrollTop(),width:oe.width(),height:oe.height()},ue,a);return e.el.appendTo(o),function(e,t,n,r,i){var o=e.el,a=e.isTall,s=e.hasThumbnail,u=e.thumbnail,c=t.flippedY,p=t.offset.top;!c&&!a&&s&&u.height<r&&o.find(".mwe-popups-extract").css("margin-top",u.height-i),o.addClass(n.join(" ")),c&&(p-=o.outerHeight()),o.css({top:p,left:"".concat(t.offset.left,"px")}),s&&function(e,t){var n=e.el,r=e.isTall,i=t.flippedY,o=t.flippedX,a=t.dir,s=function(e,t,n){return n&&!t?e?"mwe-popups-landscape-mask":"mwe-popups-mask-flip":t&&n&&e?"mwe-popups-landscape-mask-flip":t||e?void 0:"mwe-popups-mask"}(r,i,o);if(s){var u;if("rtl"===a){var c=r?q.portraitImage.w:q.landscapeImage.w;u="-1 0 0 1 ".concat(c," 0")}else u="1 0 0 1 0 0";var p=document.getElementById(s);p.setAttribute("transform","matrix(".concat(u,")")),n.find("image")[0].setAttribute("clip-path","url(#".concat(s,")"))}}(e,t)}(e,s,function(e,t){var n=[];return t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up"),t.flippedY&&t.flippedX?n.push("flipped-x-y"):t.flippedY?n.push("flipped-y"):t.flippedX&&n.push("flipped-x"),e.hasThumbnail&&(!e.isTall||t.flippedX)||t.flippedY||n.push("mwe-popups-no-image-pointer"),!e.hasThumbnail||e.isTall||t.flippedY||n.push("mwe-popups-image-pointer"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall"),n}(e,s),q.landscapeImage.h,ue),e.el.show(),K(200).then(function(){!function(e,t){e.el.on("mouseenter",t.previewDwell).on("mouseleave",t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click(function(e){e.stopPropagation(),t.showSettings(e)})}(e,r),r.previewShow(i)})}(t,e,re(e.target),n,r,document.body,document.documentElement.getAttribute("dir"))},hide:function(){return function(e){var t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",n="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up";return e.el.removeClass(t).addClass(n),K(150).then(function(){e.el.remove()})}(t)}}}function le(e,t,n){var r,i=null;return Array.prototype.slice.call(t).forEach(function(t){var o=Math.abs(e-t.top+e-t.bottom);(null===i||i>o)&&(i=o,r=n?Math.floor(t.top):Math.ceil(t.bottom))}),r}var de=mediaWiki,fe=jQuery;var ge=jQuery;var ve=jQuery;function he(e,t,n){return e[t]&&e[t][n]}function we(e,t,n,r,i){var o=he(t,n,r);e&&he(e,n,r)!==o&&i(o)}var me={footerLink:function(e){var t;return function(n,r){void 0===t&&(t=function(){var e=fe("<li>").append(fe("<a>").attr("href","#").text(de.message("popups-settings-enable").text()));e.hide();var t=fe("#footer-places, #f-list");return 0===t.length&&(t=fe("#footer li").parent()),t.append(e),e}()).click(function(t){t.preventDefault(),e.showSettings()}),r.settings.shouldShowFooterLink?t.show():t.hide()}},eventLogging:function(e,t,n){return function(r,i){var o=i.eventLogging,a=o.event;a&&(a=ge.extend(!0,{},o.baseData,a,{timestamp:n()}),t("event.Popups",a),e.eventLogged(a))}},linkTitle:function(){var e;return function(t,n){var r,i=t&&t.preview.activeLink;n.preview.enabled&&(i&&t.preview.activeLink!==n.preview.activeLink&&(r=t.preview.activeLink,ve(r).attr("title",e),e=void 0),n.preview.activeLink&&function(t){var n=ve(t);e||(e=n.attr("title"),n.attr("title",""))}(n.preview.activeLink))}},pageviews:function(e,t){return function(n,r){var i;r.pageviews&&r.pageviews.pageview&&r.pageviews.page&&(i=r.pageviews.page,t("event.VirtualPageView",$.extend({},{source_page_id:i.id,source_namespace:i.namespaceId,source_title:i.title,source_url:i.url},r.pageviews.pageview)),e.pageviewLogged())}},render:function(e){var t;return function(n,r){r.preview.shouldShow&&!t?(t=pe(r.preview.fetchResponse)).show(r.preview.activeEvent,e,r.preview.activeToken):!r.preview.shouldShow&&t&&(t.hide(),t=void 0)}},settings:function(e,t){var n;return function(r,i){r&&(!1===r.settings.shouldShow&&!0===i.settings.shouldShow?(n||(n=t(e)).appendTo(document.body),n.setEnabled(i.preview.enabled),n.show()):!0===r.settings.shouldShow&&!1===i.settings.shouldShow&&n.hide(),r.settings.showHelp!==i.settings.showHelp&&n.toggleHelp(i.settings.showHelp))}},statsv:function(e,t){return function(n,r){var i=r.statsv;i.action&&(t(i.action,i.data),e.statsvLogged())}},syncUserSettings:function(e){return function(t,n){we(t,n,"eventLogging","previewCount",e.setPreviewCount),we(t,n,"preview","enabled",e.setIsEnabled)}}},Ee={BOOT:"BOOT",LINK_DWELL:"LINK_DWELL",ABANDON_START:"ABANDON_START",ABANDON_END:"ABANDON_END",LINK_CLICK:"LINK_CLICK",FETCH_START:"FETCH_START",FETCH_END:"FETCH_END",FETCH_COMPLETE:"FETCH_COMPLETE",FETCH_FAILED:"FETCH_FAILED",FETCH_ABORTED:"FETCH_ABORTED",PAGEVIEW_LOGGED:"PAGEVIEW_LOGGED",PREVIEW_DWELL:"PREVIEW_DWELL",PREVIEW_SHOW:"PREVIEW_SHOW",PREVIEW_CLICK:"PREVIEW_CLICK",PREVIEW_SEEN:"PREVIEW_SEEN",SETTINGS_SHOW:"SETTINGS_SHOW",SETTINGS_HIDE:"SETTINGS_HIDE",SETTINGS_CHANGE:"SETTINGS_CHANGE",EVENT_LOGGED:"EVENT_LOGGED",STATSV_LOGGED:"STATSV_LOGGED"},Te=jQuery,be=mediaWiki,ye=150,_e=1e3,Ie=350+ye,Se=300;function ke(e){return e.timestamp=be.now(),e}function xe(e,t,n,r,i){var o=r.get("wgUserEditCount"),a=n.getPreviewCount();return{type:Ee.BOOT,isEnabled:e,isNavPopupsEnabled:r.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:t.getPageviewToken(),page:{url:i,title:r.get("wgTitle"),namespaceId:r.get("wgNamespaceNumber"),id:r.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:o,previewCount:a}}}function Pe(e,t,n,r){var i=t.getPrefixedDb(),o=t.namespace;return function(a){var s=e.fetchPreviewForTitle(t);a(ke({type:Ee.FETCH_START,el:n,title:i,namespaceId:o,promise:s}));var u=s.then(function(e){return a(ke({type:Ee.FETCH_END,el:n})),e}).catch(function(e,t){var r=new Error(e),i=t&&t.textStatus&&"abort"===t.textStatus?Ee.FETCH_ABORTED:Ee.FETCH_FAILED;throw r.data=t,a({type:i,el:n}),r});return Te.when(u,K(Ie-ye)).then(function(e){a({type:Ee.FETCH_COMPLETE,el:n,result:e,token:r})}).catch(function(e){var o=e.data,s=!0;o&&o.xhr&&0===o.xhr.readyState&&(s=!("error"===o.textStatus&&""===o.exception||"abort"===o.textStatus));s&&a({type:Ee.FETCH_COMPLETE,el:n,result:l(i,t.getUrl()),token:r})})}}function Oe(e,t,n,r,i){var o=i(),a=e.getPrefixedDb(),s=e.namespace;return function(i,u){var c=K(ye),p=ke({type:Ee.LINK_DWELL,el:t,event:n,token:o,title:a,namespaceId:s,promise:c});function l(){return u().preview.activeToken===o}return i(p),l()?c.then(function(){if(u().preview.enabled&&l())return i(Pe(r,e,t,o))}):Te.Deferred().resolve().promise()}}function Ae(){return function(e,t){var n=t().preview,r=n.activeToken,i=n.promise;return r?(i.abort(),e(ke({type:Ee.ABANDON_START,token:r})),K(Se).then(function(){e({type:Ee.ABANDON_END,token:r})})):Te.Deferred().resolve().promise()}}function Le(e){return ke({type:Ee.LINK_CLICK,el:e})}function Ne(){return{type:Ee.PREVIEW_DWELL}}function Ce(e){return function(t,n){return t(ke({type:Ee.PREVIEW_SHOW,token:e})),K(_e).then(function(){var r=n().preview,i=r&&r.fetchResponse,o=r&&r.activeToken,a=i&&[c.TYPE_PAGE,c.TYPE_DISAMBIGUATION].indexOf(i.type)>-1;o&&o===e&&i&&a&&t({type:Ee.PREVIEW_SEEN,title:i.title,pageId:i.pageId,namespace:0})})}}function De(){return{type:Ee.PAGEVIEW_LOGGED}}function Re(){return{type:Ee.SETTINGS_SHOW}}function Ge(){return{type:Ee.SETTINGS_HIDE}}function je(e){return function(t,n){t({type:Ee.SETTINGS_CHANGE,wasEnabled:n().preview.enabled,enabled:e})}}function He(e){return{type:Ee.EVENT_LOGGED,event:e}}function We(){return{type:Ee.STATSV_LOGGED}}function Be(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&!t.hasOwnProperty(r)&&(n[r]=e[r]);for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n}var Fe=n("./src/counts.js");function Me(e,t){return t.linkInteractionToken=e.token,t.pageTitleHover=e.title,t.namespaceIdHover=e.namespaceId,void 0!==e.timeToPreviewShow&&(t.previewType=e.previewType,t.perceivedWait=e.timeToPreviewShow),t}function Ue(e){var t={totalInteractionTime:Math.round(e.finished-e.started)};if(!e.finalized)return t.action=e.timeToPreviewShow?"dismissed":"dwelledButAbandoned",Me(e,t)}var Ve={eventLogging:function(e,t){var n,r,i,o;if(void 0===e&&(e={previewCount:void 0,baseData:{},interaction:void 0,event:void 0}),-1!==[Ee.FETCH_COMPLETE,Ee.ABANDON_END,Ee.PREVIEW_SHOW].indexOf(t.type)&&(!e.interaction||t.token!==e.interaction.token))return e;if(!e.interaction&&t.type!==Ee.BOOT&&t.type!==Ee.LINK_DWELL&&t.type!==Ee.EVENT_LOGGED&&t.type!==Ee.SETTINGS_CHANGE)return e;switch(t.type){case Ee.BOOT:return Be(e,{previewCount:t.user.previewCount,baseData:(i=t,o={pageTitleSource:i.page.title,namespaceIdSource:i.page.namespaceId,pageIdSource:i.page.id,isAnon:i.user.isAnon,popupEnabled:i.isEnabled,pageToken:i.pageToken,sessionToken:i.sessionToken,previewCountBucket:Fe.getPreviewCountBucket(i.user.previewCount),hovercardsSuppressedByGadget:i.isNavPopupsEnabled},i.user.isAnon||(o.editCountBucket=Fe.getEditCountBucket(i.user.editCount)),o),event:{action:"pageLoaded"}});case Ee.EVENT_LOGGED:return r=Be(e,{event:void 0}),t.event.linkInteractionToken&&e.interaction&&t.event.linkInteractionToken===e.interaction.token&&(r.interaction=void 0),r;case Ee.FETCH_COMPLETE:return Be(e,{interaction:Be(e.interaction,{previewType:t.result.type})});case Ee.PREVIEW_SHOW:return Be(e,{previewCount:n=e.previewCount+1,baseData:Be(e.baseData,{previewCountBucket:Fe.getPreviewCountBucket(n)}),interaction:Be(e.interaction,{timeToPreviewShow:Math.round(t.timestamp-e.interaction.started)})});case Ee.LINK_DWELL:return e.interaction&&t.el===e.interaction.link?Be(e,{interaction:Be(e.interaction,{isUserDwelling:!0})}):Be(e,{interaction:{link:t.el,title:t.title,namespaceId:t.namespaceId,token:t.token,started:t.timestamp,isUserDwelling:!0},event:e.interaction?Ue(e.interaction):void 0});case Ee.PREVIEW_DWELL:return Be(e,{interaction:Be(e.interaction,{isUserDwelling:!0})});case Ee.LINK_CLICK:return Be(e,{interaction:Be(e.interaction,{finalized:!0}),event:Me(e.interaction,{action:"opened",totalInteractionTime:Math.round(t.timestamp-e.interaction.started)})});case Ee.ABANDON_START:return Be(e,{interaction:Be(e.interaction,{finished:t.timestamp,isUserDwelling:!1})});case Ee.ABANDON_END:return e.interaction.isUserDwelling?e:Be(e,{interaction:void 0,event:Ue(e.interaction)});case Ee.SETTINGS_SHOW:return Be(e,{event:Me(e.interaction,{action:"tapped settings cog"})});case Ee.SETTINGS_CHANGE:return t.wasEnabled&&!t.enabled?Be(e,{event:{action:"disabled",popupEnabled:!1}}):e;default:return e}},pageviews:function(e,t){switch(void 0===e&&(e={pageview:void 0}),t.type){case Ee.BOOT:return Be(e,{page:t.page});case Ee.PAGEVIEW_LOGGED:return Be(e,{pageview:void 0});case Ee.PREVIEW_SEEN:return Be(e,{pageview:{page_title:t.title,page_id:t.pageId,page_namespace:t.namespace}});default:return e}},preview:function(e,t){switch(void 0===e&&(e={enabled:void 0,activeLink:void 0,activeEvent:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1}),t.type){case Ee.BOOT:return Be(e,{enabled:t.isEnabled});case Ee.SETTINGS_CHANGE:return Be(e,{enabled:t.enabled});case Ee.LINK_DWELL:return t.el!==e.activeLink?Be(e,{activeLink:t.el,activeEvent:t.event,activeToken:t.token,shouldShow:!1,isUserDwelling:!0,promise:t.promise}):Be(e,{isUserDwelling:!0});case Ee.ABANDON_END:return t.token!==e.activeToken||e.isUserDwelling?e:Be(e,{activeLink:void 0,activeToken:void 0,activeEvent:void 0,fetchResponse:void 0,shouldShow:!1});case Ee.PREVIEW_DWELL:return Be(e,{isUserDwelling:!0});case Ee.ABANDON_START:return Be(e,{isUserDwelling:!1});case Ee.FETCH_START:return Be(e,{fetchResponse:void 0,promise:t.promise});case Ee.FETCH_COMPLETE:if(t.token===e.activeToken)return Be(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}},settings:function(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case Ee.SETTINGS_SHOW:return Be(e,{shouldShow:!0,showHelp:!1});case Ee.SETTINGS_HIDE:return Be(e,{shouldShow:!1,showHelp:!1});case Ee.SETTINGS_CHANGE:return t.wasEnabled===t.enabled?Be(e,{shouldShow:!1}):Be(e,{shouldShow:!t.enabled,showHelp:!t.enabled,shouldShowFooterLink:!t.enabled});case Ee.BOOT:return Be(e,{shouldShowFooterLink:t.user.isAnon&&!t.isEnabled});default:return e}},statsv:function(e,t){switch(e=e||{},t.type){case Ee.FETCH_START:return Be(e,{fetchStartedAt:t.timestamp});case Ee.FETCH_END:return Be(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case Ee.FETCH_FAILED:return Be(e,{action:"counter.PagePreviewsApiFailure",data:1});case Ee.LINK_DWELL:return Be(e,{linkDwellStartedAt:t.timestamp});case Ee.PREVIEW_SHOW:return Be(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case Ee.STATSV_LOGGED:return Be(e,{action:null,data:null});default:return e}}};var Ye=mediaWiki;function Ke(e){var t,n,r,i=e;return i.source_title=Ye.Title.newFromText(e.source_title).getPrefixedDb(),i.page_title=Ye.Title.newFromText(e.page_title).getPrefixedDb(),i.source_url=(t=e.source_url,n=1e3,r="",t.split("").every(function(e){return encodeURIComponent(r+e).length<n&&(r+=e)}),r),i}var Xe=function(e,t,n,r){return e.get("wgPopupsVirtualPageViews")?function(e,i){var o,a=(o=e.slice(e.indexOf(".")+1))[0].toUpperCase()+o.slice(1),s=["ext.eventLogging","schema.".concat(a)];return t(s).then(function(){var e=n(),t=e.prepare(a,Ke(i)),o=e.makeBeaconUrl(t);r(o)})}:function(){}},Qe=mediaWiki,$e=jQuery,qe=[".extiw",".image",".new",".internal",".external",".mw-cite-backlink a",".oo-ui-buttonedElement-button",".cancelLink a"];function ze(){return window.performance&&window.performance.now?Math.round(window.performance.now()):null}!function(){var e,t,n,o=i.compose,s=Qe.user.generateRandomSessionId,u=A(Qe.config),p={fetchPreviewForTitle:function(e){var t=e.getFragment();return L.Deferred().resolve({url:"#".concat(t),extract:L("#".concat(L.escapeSelector(t)," .reference-text")).html(),type:c.TYPE_REFERENCE}).promise({abort:function(){}})}},l=(n=Qe.storage,{getIsEnabled:function(){return"0"!==n.get(N)},setIsEnabled:function(e){n.set(N,e?"1":"0")},hasIsEnabled:function(){var e=n.get(N);return!1!==Boolean(e)},getPreviewCount:function(){var e=n.get(C);if(!1===e)return-1;if(null===e)return 0;var t=parseInt(e,10);return isNaN(t)&&(t=0,this.setPreviewCount(t)),t},setPreviewCount:function(e){n.set(C,e.toString())}}),d=B(),f=(t=Qe.experiments,{weightedBoolean:function(e,n,r){return"true"===t.getBucket({enabled:!0,name:e,buckets:{true:n,false:1-n}},r)}}),g=function(e,t,n){return function(e,t,n){var r=t.get("wgPopupsStatsvSamplingRate",0);return n.weightedBoolean("ext.Popups.statsv",r,e.sessionId())}(e,t,n)?Qe.track:function(){}}(Qe.user,Qe.config,f),v=Xe(Qe.config,Qe.loader.using,function(){return Qe.eventLog},(e=window.navigator).sendBeacon?e.sendBeacon.bind(e):function(e){document.createElement("img").src=e}),h=function(e,t,n){return function(e,t,n){return!0===t.get("debug")||!!t.get("wgPopupsEventLogging")&&!(!n.navigator||!n.navigator.sendBeacon)&&e.isAnon()}(e,t,n)?Qe.track:function(){}}(Qe.user,Qe.config,window),w=function(e,t,n){return!n.get("wgPopupsConflictsWithNavPopupGadget")&&(e.isAnon()?!t.hasIsEnabled()||t.getIsEnabled():n.get("wgPopupsShouldSendModuleToUser"))}(Qe.user,l,Qe.config);!0===Qe.config.get("debug")&&(o=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o);var m=i.createStore(i.combineReducers(Ve),o(i.applyMiddleware(a.a))),E=i.bindActionCreators(r,m.dispatch),T=function(e,t){var n,r=function(){};e.isAnon()?r=function(e){e.preventDefault(),t.showSettings()}:n=D.Title.newFromText("Special:Preferences#mw-prefsection-rendering").getUrl();return{settingsUrl:n,showSettings:r,previewDwell:t.previewDwell,previewAbandon:t.abandon,previewShow:t.previewShow,click:t.linkClick}}(Qe.user,E);!function(e,t,n,r,i,o,a,s,u){M(e,me.footerLink(t)),M(e,me.linkTitle()),M(e,me.render(i)),M(e,me.statsv(t,o)),M(e,me.syncUserSettings(n)),M(e,me.settings(t,r)),M(e,me.eventLogging(t,a,u)),M(e,me.pageviews(t,s))}(m,E,l,d,T,g,h,v,ze),E.boot(w,Qe.user,l,Qe.config,window.location.href),Qe.popups=function(e){return{isEnabled:function(){return e.getState().preview.enabled}}}(m);var b=qe.join(", "),y="#mw-content-text a[href][title]:not(".concat(b,")");Qe.config.get("wgPopupsReferencePreviews")&&(y+=", .reference > a[href]"),ce(),$e(document).on("mouseover keyup",y,function(e){var t=V(this,Qe.config),n=u;if(Qe.config.get("wgPopupsReferencePreviews")&&$e(e.target).parent().hasClass("reference")){try{t.fragment=new Qe.Uri(e.target.href).fragment}catch(e){return}n=p}t&&E.linkDwell(t,this,e,n,s)}).on("mouseout blur",y,function(){V(this,Qe.config)&&E.abandon(this)}).on("click",y,function(){V(this,Qe.config)&&E.linkClick(this)})}(),window.Redux=i,window.ReduxThunk=o},"./src/ui/pointer-mask.svg":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><clippath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"></polygon></clippath></defs></svg>'}});
//# sourceMappingURL=index.js.map.json