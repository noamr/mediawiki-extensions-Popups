/*@nomin*/
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t.default=r}])})},"./node_modules/redux/dist/redux.min.js":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var i=n(2),o=r(i),s=n(7),a=r(s),u=n(6),c=r(u),p=n(5),l=r(p),d=n(1),f=r(d);r(n(3)),t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=c.default,t.applyMiddleware=l.default,t.compose=f.default},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],i=t.slice(0,-1);return function(){return i.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){function r(){w===v&&(w=v.slice())}function o(){return h}function a(e){if("function"!=typeof e)throw Error("Expected listener to be a function.");var t=!0;return r(),w.push(e),function(){if(t){t=!1,r();var n=w.indexOf(e);w.splice(n,1)}}}function p(e){if(!(0,s.default)(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw Error("Reducers may not dispatch actions.");try{m=!0,h=g(h,e)}finally{m=!1}for(var t=v=w,n=0;t.length>n;n++)t[n]();return e}function l(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");g=e,p({type:c.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function n(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[u.default]=function(){return this},e}var f;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(i)(e,t)}if("function"!=typeof e)throw Error("Expected the reducer to be a function.");var g=e,h=t,v=[],w=v,m=!1;return p({type:c.INIT}),f={dispatch:p,subscribe:a,getState:o,replaceReducer:l},f[u.default]=d,f}t.__esModule=!0,t.ActionTypes=void 0,t.default=i;var o=n(4),s=r(o),a=n(12),u=r(a),c=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw Error(e)}catch(e){}}t.__esModule=!0,t.default=n},function(e,t,n){function r(e){if(!s(e)||f.call(e)!=a||o(e))return!1;var t=i(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&p.call(n)==d}var i=n(8),o=n(9),s=n(11),a="[object Object]",u=Function.prototype,c=Object.prototype,p=u.toString,l=c.hasOwnProperty,d=p.call(Object),f=c.toString;e.exports=r},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var a=e(n,r,o),u=a.dispatch,c=[],p={getState:a.getState,dispatch:function(e){return u(e)}};return c=t.map(function(e){return e(p)}),u=s.default.apply(void 0,c)(a.dispatch),i({},a,{dispatch:u})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var o=n(1),s=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function r(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),i={},o=0;r.length>o;o++){var s=r[o],a=e[s];"function"==typeof a&&(i[s]=n(a,t))}return i}t.__esModule=!0,t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:a.ActionTypes.INIT}))throw Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function s(e){for(var t=Object.keys(e),n={},r=0;t.length>r;r++){var s=t[r];"function"==typeof e[s]&&(n[s]=e[s])}var a,u=Object.keys(n);try{o(n)}catch(e){a=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(a)throw a;for(var r=!1,o={},s=0;u.length>s;s++){var c=u[s],p=n[c],l=e[c],d=p(l,t);if(void 0===d){var f=i(c,t);throw Error(f)}o[c]=d,r=r||d!==l}return r?o:e}}t.__esModule=!0,t.default=s;var a=n(2);r((r(n(4)),n(3)))},function(e,t,n){var r=n(10),i=r(Object.getPrototypeOf,Object);e.exports=i},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){e.exports=n(13)},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=void 0;void 0!==e?o=e:"undefined"!=typeof window&&(o=window);var s=(0,i.default)(o);t.default=s}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}])})},"./src/actionTypes.js":function(e,t){e.exports={BOOT:"BOOT",LINK_DWELL:"LINK_DWELL",ABANDON_START:"ABANDON_START",ABANDON_END:"ABANDON_END",LINK_CLICK:"LINK_CLICK",FETCH_START:"FETCH_START",FETCH_END:"FETCH_END",FETCH_COMPLETE:"FETCH_COMPLETE",FETCH_FAILED:"FETCH_FAILED",PREVIEW_DWELL:"PREVIEW_DWELL",PREVIEW_SHOW:"PREVIEW_SHOW",PREVIEW_CLICK:"PREVIEW_CLICK",SETTINGS_SHOW:"SETTINGS_SHOW",SETTINGS_HIDE:"SETTINGS_HIDE",SETTINGS_CHANGE:"SETTINGS_CHANGE",EVENT_LOGGED:"EVENT_LOGGED",STATSV_LOGGED:"STATSV_LOGGED"}},"./src/actions.js":function(e,t,n){function r(e){return e.timestamp=o.now(),e}var i=jQuery,o=window.mediaWiki,s={},a=n("./src/actionTypes.js"),u=n("./src/wait.js");s.boot=function(e,t,n,r,i){var o=i.get("wgUserEditCount"),s=n.getPreviewCount();return{type:a.BOOT,isEnabled:e,isNavPopupsEnabled:i.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:r(),page:{title:i.get("wgTitle"),namespaceID:i.get("wgNamespaceNumber"),id:i.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:o,previewCount:s}}},s.fetch=function(e,t,n,o){var s=t.getPrefixedDb(),c=t.namespace;return function(t){var p;t(r({type:a.FETCH_START,el:n,title:s,namespaceID:c})),p=e.getPageSummary(s).then(function(e){return t(r({type:a.FETCH_END,el:n})),e}).fail(function(){t({type:a.FETCH_FAILED,el:n})}),i.when(p,u(350)).then(function(e){t(r({type:a.FETCH_COMPLETE,el:n,result:e,token:o}))})}},s.linkDwell=function(e,t,n,i,o){var c=o(),p=e.getPrefixedDb(),l=e.namespace;return function(o,d){function f(){return d().preview.activeToken===c}var g=r({type:a.LINK_DWELL,el:t,event:n,token:c,title:p,namespaceID:l});o(g),f()&&u(150).then(function(){d().preview.enabled&&f()&&o(s.fetch(i,e,t,c))})}},s.abandon=function(){return function(e,t){var n=t().preview.activeToken;n&&(e(r({type:a.ABANDON_START,token:n})),u(300).then(function(){e({type:a.ABANDON_END,token:n})}))}},s.linkClick=function(e){return r({type:a.LINK_CLICK,el:e})},s.previewDwell=function(){return{type:a.PREVIEW_DWELL}},s.previewShow=function(e){return r({type:a.PREVIEW_SHOW,token:e})},s.showSettings=function(){return{type:a.SETTINGS_SHOW}},s.hideSettings=function(){return{type:a.SETTINGS_HIDE}},s.saveSettings=function(e){return function(t,n){t({type:a.SETTINGS_CHANGE,wasEnabled:n().preview.enabled,enabled:e})}},s.eventLogged=function(e){return{type:a.EVENT_LOGGED,event:e}},s.statsvLogged=function(){return{type:a.STATSV_LOGGED}},e.exports=s},"./src/changeListener.js":function(e,t){e.exports=function(e,t){var n;e.subscribe(function(){var r=n;n=e.getState(),r!==n&&t(r,n)})}},"./src/changeListeners/eventLogging.js":function(e,t){function n(e){var t=2166136261,n=0;for(n=0;n<e.length;++n)t^=e.charCodeAt(n),t*=16777619;return t>>>0}var r=jQuery;e.exports=function(e,t,i){var o={},s={};return function(a,u){var c,p,l=u.eventLogging,d=l.event,f=!0;d&&(c=d.linkInteractionToken,!0===o[c]&&(i("counter.PagePreviews.EventLogging.DuplicateToken",1),f=!1),o[c]=!0,p=n(JSON.stringify(d)).toString(32),!0===s[p]&&(i("counter.PagePreviews.EventLogging.DuplicateEvent",1),f=!1),s[p]=!0,d=r.extend(!0,{},l.baseData,d),f&&t.log(d),e.eventLogged(d))}}},"./src/changeListeners/footerLink.js":function(e,t){function n(){var e,t=i("<li>").append(i("<a>").attr("href","#").text(r.message("popups-settings-enable").text()));return t.hide(),e=i("#footer-places, #f-list"),0===e.length&&(e=i("#footer li").parent()),e.append(t),t}var r=window.mediaWiki,i=jQuery;e.exports=function(e){var t;return function(r,i){void 0===t&&(t=n(),t.click(function(t){t.preventDefault(),e.showSettings()})),i.settings.shouldShowFooterLink?t.show():t.hide()}}},"./src/changeListeners/index.js":function(e,t,n){e.exports={footerLink:n("./src/changeListeners/footerLink.js"),eventLogging:n("./src/changeListeners/eventLogging.js"),linkTitle:n("./src/changeListeners/linkTitle.js"),render:n("./src/changeListeners/render.js"),settings:n("./src/changeListeners/settings.js"),statsv:n("./src/changeListeners/statsv.js"),syncUserSettings:n("./src/changeListeners/syncUserSettings.js")}},"./src/changeListeners/linkTitle.js":function(e,t){var n=jQuery;e.exports=function(){function e(e){var t=n(e);r||(r=t.attr("title"),t.attr("title",""))}function t(e){n(e).attr("title",r),r=void 0}var r;return function(n,r){var i=n&&n.preview.activeLink;r.preview.enabled&&(i&&n.preview.activeLink!==r.preview.activeLink&&t(n.preview.activeLink),r.preview.activeLink&&e(r.preview.activeLink))}}},"./src/changeListeners/render.js":function(e,t,n){var r=n("./src/renderer.js");e.exports=function(e){var t;return function(n,i){i.preview.shouldShow&&!t?(t=r.render(i.preview.fetchResponse),t.show(i.preview.activeEvent,e,i.preview.activeToken)):!i.preview.shouldShow&&t&&(t.hide(),t=void 0)}}},"./src/changeListeners/settings.js":function(e,t){e.exports=function(e,t){var n;return function(r,i){r&&(!1===r.settings.shouldShow&&!0===i.settings.shouldShow?(n||(n=t(e),n.appendTo(document.body)),n.setEnabled(i.preview.enabled),n.show()):!0===r.settings.shouldShow&&!1===i.settings.shouldShow&&n.hide(),r.settings.showHelp!==i.settings.showHelp&&n.toggleHelp(i.settings.showHelp))}}},"./src/changeListeners/statsv.js":function(e,t){e.exports=function(e,t){return function(n,r){var i=r.statsv;i.action&&(t(i.action,i.data),e.statsvLogged())}}},"./src/changeListeners/syncUserSettings.js":function(e,t){function n(e,t,n){return e[t]&&e[t][n]}function r(e,t,r,i,o){var s=n(t,r,i);e&&n(e,r,i)!==s&&o(s)}e.exports=function(e){return function(t,n){r(t,n,"eventLogging","previewCount",e.setPreviewCount),r(t,n,"preview","enabled",e.setIsEnabled)}}},"./src/constants.js":function(e,t){var n=jQuery;e.exports={THUMBNAIL_SIZE:300*n.bracketedDevicePixelRatio(),EXTRACT_LENGTH:525}},"./src/counts.js":function(e,t){t.getEditCountBucket=function(e){var t;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=99?t="5-99":e>=100&&e<=999?t="100-999":e>=1e3&&(t="1000+"),t+" edits"},t.getPreviewCountBucket=function(e){var t;return-1===e?"unknown":(0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=20?t="5-20":e>=21&&(t="21+"),t+" previews")}},"./src/experiments.js":function(e,t){e.exports=function(e){return{weightedBoolean:function(t,n,r){return"true"===e.getBucket({enabled:!0,name:t,buckets:{true:n,false:1-n}},r)}}}},"./src/formatter.js":function(e,t){function n(e,t){var n=e;return void 0===e?[]:(n=o(n),n=i(n),0===n.length?[]:n=r(n,t))}function r(e,t){var n,r,i=[],o="<bi-"+Math.random()+">",u="<snip-"+Math.random()+">";return t=t.replace(/\s+/g," ").trim(),r=a.RegExp.escape(t),n=new RegExp("(^|\\s)("+r+")(|$)","i"),e=e.replace(/\s+/," "),e=e.replace(n,"$1"+u+o+"$2"+u+"$3"),e=e.split(u),s.each(e,function(e,t){0===t.indexOf(o)?i.push(s("<b>").text(t.substring(o.length))):i.push(document.createTextNode(t))}),i}function i(e){return e.replace(/\.\.\.$/,"")}function o(e){var t,n="",r=0,i=0;for(i;i<e.length;i++){if(")"===(t=e.charAt(i))&&0===r)return e;if("("!==t)if(")"!==t){if(0===r){if(" "===t&&"("===e.charAt(i+1))continue;n+=t}}else r--;else r++}return 0===r?n:e}var s=jQuery,a=window.mediaWiki;e.exports={formatPlainTextExtract:n,removeTrailingEllipsis:i,removeParentheticals:o}},"./src/gateway/html/rest.js":function(e,t,n){function r(e){var t=e.extract_html;return t=i.removeTrailingEllipsis(t),t=i.removeParentheticals(t),0===t.length?[]:s.parseHTML(t)}var i=n("./src/formatter.js"),o=n("./src/gateway/restProvider.js"),s=jQuery;e.exports=function(e,t){return o(e,t,r)}},"./src/gateway/index.js":function(e,t,n){function r(e){switch(e.get("wgPopupsGateway")){case"mwApiPlain":return a(new i.Api,s);case"restbasePlain":return u(o.ajax,s);case"restbaseHTML":return c(o.ajax,s);default:throw new Error("Unknown gateway")}}var i=mediaWiki,o=jQuery,s=n("./src/constants.js"),a=n("./src/gateway/plain/mediawiki.js"),u=n("./src/gateway/plain/rest.js"),c=n("./src/gateway/html/rest.js");e.exports=r},"./src/gateway/plain/mediawiki.js":function(e,t,n){function r(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function i(e){var t=c.extend({},e);return t.extract=u.formatPlainTextExtract(e.extract,e.title),t}function o(e){return a.createModel(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.thumbnail)}var s=300,a=n("./src/preview/model.js"),u=n("./src/formatter.js"),c=jQuery;e.exports=function(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:!0,exchars:t.EXTRACT_LENGTH,explaintext:!0,piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:s,maxage:s,uselang:"content"},{headers:{"X-Analytics":"preview=1"}})}function a(e){return n(e).then(r).then(i).then(o)}return{fetch:n,extractPageFromResponse:r,convertPageToModel:o,getPageSummary:a,formatPlainTextExtract:i}}},"./src/gateway/plain/rest.js":function(e,t,n){function r(e){return i.formatPlainTextExtract(e.extract,e.title)}var i=n("./src/formatter.js"),o=n("./src/gateway/restProvider.js");e.exports=function(e,t){return o(e,t,r)}},"./src/gateway/restProvider.js":function(e,t,n){function r(e,t,n){var r,i,o,s=e.source.split("/"),a=s[s.length-1];return r=a.substr(a.indexOf("px-")+3),e.width>e.height?(i=n,o=Math.floor(n/e.width*e.height)):(i=Math.floor(n/e.height*e.width),o=n),i>=t.width&&-1===r.indexOf(".svg")?t:(s[s.length-1]=i+"px-"+r,{source:s.join("/"),width:i,height:o})}function i(e,t,n){return o.createModel(e.title,new s.Title(e.title).getUrl(),e.lang,e.dir,n(e),e.thumbnail?r(e.thumbnail,e.originalimage,t):void 0)}var o=n("./src/preview/model.js"),s=window.mediaWiki,a=jQuery;e.exports=function(e,t,n){function r(t){return e({url:"/api/rest_v1/page/summary/"+encodeURIComponent(t),headers:{Accept:'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0"'}})}function s(e){var s=a.Deferred();return r(e).then(function(e){s.resolve(i(e,t.THUMBNAIL_SIZE,n))},function(t){404===t.status?s.resolve(o.createNullModel(e)):s.reject()}),s.promise()}return{fetch:r,convertPageToModel:i,getPageSummary:s}}},"./src/index.js":function(e,t,n){function r(e,t,n){return E.isEnabled(e,t,n)?o.track:s.noop}function i(e,t,n,r,i,o){g(e,T.footerLink(t)),g(e,T.linkTitle()),g(e,T.render(i)),g(e,T.statsv(t,o)),g(e,T.syncUserSettings(n)),g(e,T.settings(t,r))}var o=mediaWiki,s=jQuery,a=n("./node_modules/redux/dist/redux.min.js"),u=n("./node_modules/redux-thunk/dist/redux-thunk.min.js"),c=n("./src/gateway/index.js"),p=n("./src/userSettings.js"),l=n("./src/previewBehavior.js"),d=n("./src/schema.js"),f=n("./src/settingsDialog.js"),g=n("./src/changeListener.js"),h=n("./src/isEnabled.js"),v=n("./src/title.js"),w=n("./src/renderer.js"),m=n("./src/experiments.js"),E=n("./src/statsvInstrumentation.js"),T=n("./src/changeListeners/index.js"),y=n("./src/actions.js"),x=n("./src/reducers/index.js"),b=[".extiw",".image",".new",".internal",".external",".oo-ui-buttonedElement-button",".cancelLink a"];o.requestIdleCallback(function(){var e,t,n,s,E,S,k,j,_,L=a.compose,I=o.user.generateRandomSessionId,P=c(o.config);n=p(o.storage),s=f(),E=m(o.experiments),S=r(o.user,o.config,E),k=h(o.user,n,o.config,o.experiments),!0===o.config.get("debug")&&(L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L),e=a.createStore(a.combineReducers(x),L(a.applyMiddleware(u.default))),t=a.bindActionCreators(y,e.dispatch),_=l(o.config,o.user,t),i(e,t,n,s,_,S),o.loader.using("ext.eventLogging.Schema").done(function(){j=d(o.config,window),g(e,T.eventLogging(t,j,S))}),t.boot(k,o.user,n,I,o.config),o.hook("wikipage.content").add(function(e){var n=b.join(", "),r="a[href][title]:not("+n+")";w.init(),e.on("mouseover keyup",r,function(e){var n=v.fromElement(this,o.config);n&&t.linkDwell(n,this,e,P,I)}).on("mouseout blur",r,function(){v.fromElement(this,o.config)&&t.abandon(this)}).on("click",r,function(){v.fromElement(this,o.config)&&t.linkClick(this)})})}),window.Redux=a,window.ReduxThunk=u},"./src/isEnabled.js":function(e,t){function n(e,t,n){var r=t.get("wgPopupsAnonsEnabledSamplingRate",.9);return"A"===n.getBucket({name:"ext.Popups.visibility",enabled:!0,buckets:{control:1-r,A:r}},e.sessionId())}e.exports=function(e,t,r,i){return!r.get("wgPopupsConflictsWithNavPopupGadget")&&(e.isAnon()?!r.get("wgPopupsBetaFeature")&&(t.hasIsEnabled()?t.getIsEnabled():n(e,r,i)):r.get("wgPopupsShouldSendModuleToUser"))}},"./src/preview/model.js":function(e,t){function n(e,t,n,r,a,u){var c=i(a);return{title:e,url:t,languageCode:n,languageDirection:r,extract:c,type:void 0===c?o:s,thumbnail:u}}function r(e){return n(e,"","","",[],"")}function i(e){if(void 0!==e&&null!==e&&0!==e.length)return e}var o="generic",s="page";e.exports={TYPE_GENERIC:o,TYPE_PAGE:s,createModel:n,createNullModel:r}},"./src/previewBehavior.js":function(e,t){var n=window.mediaWiki,r=jQuery;e.exports=function(e,t,i){var o,s,a=e.get("wgPopupsBetaFeature"),u=r.noop;return t.isAnon()?u=function(e){e.preventDefault(),i.showSettings()}:(o="Special:Preferences#mw-prefsection-",o+=a?"betafeatures":"rendering",s=n.Title.newFromText(o).getUrl()),{settingsUrl:s,showSettings:u,previewDwell:i.previewDwell,previewAbandon:i.abandon,previewShow:i.previewShow,click:i.linkClick}}},"./src/reducers/eventLogging.js":function(e,t,n){function r(e){var t={pageTitleSource:e.page.title,namespaceIdSource:e.page.namespaceID,pageIdSource:e.page.id,isAnon:e.user.isAnon,popupEnabled:e.isEnabled,pageToken:e.pageToken,sessionToken:e.sessionToken,previewCountBucket:u.getPreviewCountBucket(e.user.previewCount),hovercardsSuppressedByGadget:e.isNavPopupsEnabled};return e.user.isAnon||(t.editCountBucket=u.getEditCountBucket(e.user.editCount)),t}function i(e,t){return t.linkInteractionToken=e.token,t.pageTitleHover=e.title,t.namespaceIdHover=e.namespaceID,void 0!==e.timeToPreviewShow&&(t.previewType=e.previewType,t.perceivedWait=e.timeToPreviewShow),t}function o(e){var t={totalInteractionTime:Math.round(e.finished-e.started)};if(!e.finalized)return t.action=e.timeToPreviewShow?"dismissed":"dwelledButAbandoned",i(e,t)}var s=n("./src/actionTypes.js"),a=n("./src/reducers/nextState.js"),u=n("./src/counts.js");e.exports=function(e,t){var n,c,p=[s.FETCH_COMPLETE,s.ABANDON_END,s.PREVIEW_SHOW];if(void 0===e&&(e={previewCount:void 0,baseData:{},interaction:void 0,event:void 0}),-1!==p.indexOf(t.type)&&(!e.interaction||t.token!==e.interaction.token))return e;if(!e.interaction&&t.type!==s.BOOT&&t.type!==s.LINK_DWELL&&t.type!==s.EVENT_LOGGED)return e;switch(t.type){case s.BOOT:return a(e,{previewCount:t.user.previewCount,baseData:r(t),event:{action:"pageLoaded"}});case s.EVENT_LOGGED:return c=a(e,{event:void 0}),t.event.linkInteractionToken&&e.interaction&&t.event.linkInteractionToken===e.interaction.token&&(c.interaction=void 0),c;case s.FETCH_COMPLETE:return a(e,{interaction:a(e.interaction,{previewType:t.result.type})});case s.PREVIEW_SHOW:return n=e.previewCount+1,a(e,{previewCount:n,baseData:a(e.baseData,{previewCountBucket:u.getPreviewCountBucket(n)}),interaction:a(e.interaction,{timeToPreviewShow:Math.round(t.timestamp-e.interaction.started)})});case s.LINK_DWELL:return e.interaction&&t.el===e.interaction.link?a(e,{interaction:a(e.interaction,{isUserDwelling:!0})}):a(e,{interaction:{link:t.el,title:t.title,namespaceID:t.namespaceID,token:t.token,started:t.timestamp,isUserDwelling:!0},event:e.interaction?o(e.interaction):void 0});case s.PREVIEW_DWELL:return a(e,{interaction:a(e.interaction,{isUserDwelling:!0})});case s.LINK_CLICK:return a(e,{interaction:a(e.interaction,{finalized:!0}),event:i(e.interaction,{action:"opened",totalInteractionTime:Math.round(t.timestamp-e.interaction.started)})});case s.ABANDON_START:return a(e,{interaction:a(e.interaction,{finished:t.timestamp,isUserDwelling:!1})});case s.ABANDON_END:return e.interaction.isUserDwelling?e:a(e,{interaction:void 0,event:o(e.interaction)});case s.SETTINGS_SHOW:return a(e,{event:i(e.interaction,{action:"tapped settings cog"})});default:return e}}},"./src/reducers/index.js":function(e,t,n){e.exports={eventLogging:n("./src/reducers/eventLogging.js"),preview:n("./src/reducers/preview.js"),settings:n("./src/reducers/settings.js"),statsv:n("./src/reducers/statsv.js")}},"./src/reducers/nextState.js":function(e,t){e.exports=function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r}},"./src/reducers/preview.js":function(e,t,n){var r=n("./src/actionTypes.js"),i=n("./src/reducers/nextState.js");e.exports=function(e,t){switch(void 0===e&&(e={enabled:void 0,activeLink:void 0,activeEvent:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1}),t.type){case r.BOOT:return i(e,{enabled:t.isEnabled});case r.SETTINGS_CHANGE:return i(e,{enabled:t.enabled});case r.LINK_DWELL:return t.el!==e.activeLink?i(e,{activeLink:t.el,activeEvent:t.event,activeToken:t.token,shouldShow:!1,isUserDwelling:!0}):i(e,{isUserDwelling:!0});case r.ABANDON_END:return t.token!==e.activeToken||e.isUserDwelling?e:i(e,{activeLink:void 0,activeToken:void 0,activeEvent:void 0,fetchResponse:void 0,shouldShow:!1});case r.PREVIEW_DWELL:return i(e,{isUserDwelling:!0});case r.ABANDON_START:return i(e,{isUserDwelling:!1});case r.FETCH_START:return i(e,{fetchResponse:void 0});case r.FETCH_COMPLETE:if(t.token===e.activeToken)return i(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}}},"./src/reducers/settings.js":function(e,t,n){var r=n("./src/actionTypes.js"),i=n("./src/reducers/nextState.js");e.exports=function(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case r.SETTINGS_SHOW:return i(e,{shouldShow:!0,showHelp:!1});case r.SETTINGS_HIDE:return i(e,{shouldShow:!1,showHelp:!1});case r.SETTINGS_CHANGE:return t.wasEnabled===t.enabled?i(e,{shouldShow:!1}):i(e,{shouldShow:!t.enabled,showHelp:!t.enabled,shouldShowFooterLink:!t.enabled});case r.BOOT:return i(e,{shouldShowFooterLink:t.user.isAnon&&!t.isEnabled});default:return e}}},"./src/reducers/statsv.js":function(e,t,n){var r=n("./src/actionTypes.js"),i=n("./src/reducers/nextState.js");e.exports=function(e,t){switch(e=e||{},t.type){case r.FETCH_START:return i(e,{fetchStartedAt:t.timestamp});case r.FETCH_END:return i(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case r.FETCH_FAILED:return i(e,{action:"counter.PagePreviewsApiFailure",data:1});case r.LINK_DWELL:return i(e,{linkDwellStartedAt:t.timestamp});case r.PREVIEW_SHOW:return i(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case r.STATSV_LOGGED:return i(e,{action:null,data:null});default:return e}}},"./src/renderer.js":function(e,t,n){function r(e){m("<div>").attr("id","mwe-popups-svg").html('<svg width="0" height="0"><defs><clippath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"/></clippath></defs></svg>').appendTo(e)}function i(){r(document.body)}function o(e){var t=void 0===e.extract?a(e):s(e);return{show:function(e,n,r){return u(t,e,m(e.target),n,r,document.body)},hide:function(){return p(t)}}}function s(e){var t,n,r=l(e.thumbnail),i=null!==r,o=e.extract;return t=m.extend({},e,{hasThumbnail:i}),n=w.template.get("ext.popups","preview.mustache").render(t),i&&n.find(".mwe-popups-discreet").append(r.el),o&&n.find(".mwe-popups-extract").append(o),{el:n,hasThumbnail:i,thumbnail:r,isTall:i&&r.isTall}}function a(e){var t,n;return t=m.extend({},e,{extractMsg:w.msg("popups-preview-no-preview"),readMsg:w.msg("popups-preview-footer-read")}),n=w.template.get("ext.popups","preview-empty.mustache").render(t),{el:n,hasThumbnail:!1,isTall:!1}}function u(e,t,n,r,i,o){var s=f(e.isTall,{pageX:t.pageX,pageY:t.pageY,clientY:t.clientY},{clientRects:n.get(0).getClientRects(),offset:n.offset(),width:n.width(),height:n.height()},{scrollTop:y.scrollTop(),width:y.width(),height:y.height()},T.pokeySize);return e.el.appendTo(o),h(e,s,g(e,s),T.landscapeImage.h,T.pokeySize),e.el.show(),E(200).then(function(){c(e,r)}).then(function(){r.previewShow(i)})}function c(e,t){e.el.hover(t.previewDwell,t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click(function(e){e.stopPropagation(),t.showSettings(e)})}function p(e){var t,n;return t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",n="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up",e.el.removeClass(t).addClass(n),E(150).then(function(){e.el.remove()})}function l(e){var t,n,r,i,o,s,a,u,c=m.bracketedDevicePixelRatio();return e?(t=e.width<e.height,n=e.width/c,r=e.height/c,!t&&n<T.landscapeImage.w||t&&r<T.portraitImage.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1?null:(t?(i=n>T.portraitImage.w?(n-T.portraitImage.w)/-2:T.portraitImage.w-n,o=r>T.portraitImage.h?(r-T.portraitImage.h)/-2:0,s=T.portraitImage.w,a=T.portraitImage.h):(i=0,o=r>T.landscapeImage.h?(r-T.landscapeImage.h)/-2:0,s=T.landscapeImage.w+3,a=r>T.landscapeImage.h?T.landscapeImage.h:r,u="mwe-popups-mask"),{el:d(t?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,i,o,n,r,s,a,u),isTall:t,width:n,height:r})):null}function d(e,t,n,r,i,o,s,a,u){var c,p="http://www.w3.org/2000/svg";return c=m(document.createElementNS(p,"image")),c[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),c.addClass(e).attr({x:n,y:r,width:i,height:o,"clip-path":"url(#"+u+")"}),m(document.createElementNS(p,"svg")).attr({xmlns:p,width:s,height:a}).append(c)}function f(e,t,n,r,i){var o=!1,s=!1,a=t.pageY?v(t.pageY-r.scrollTop,n.clientRects,!1)+r.scrollTop+i:n.offset.top+n.height+i,u=t.clientY?t.clientY:a,c=t.pageX?t.pageX:n.offset.left;return c>r.width/2&&(c+=t.pageX?0:n.width,c-=e?T.landscapePopupWidth:T.portraitPopupWidth,o=!0),t.pageX&&(c+=o?20:-20),u>r.height/2&&(s=!0,a=n.offset.top,t.pageY&&(a=v(t.pageY-r.scrollTop,n.clientRects,!0)+r.scrollTop),a-=i),{offset:{top:a,left:c},flippedX:o,flippedY:s}}function g(e,t){var n=[];return t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up"),t.flippedY&&t.flippedX&&n.push("flipped_x_y"),t.flippedY&&!t.flippedX&&n.push("flipped_y"),t.flippedX&&!t.flippedY&&n.push("flipped_x"),e.hasThumbnail&&!e.isTall||t.flippedY||n.push("mwe-popups-no-image-tri"),!e.hasThumbnail||e.isTall||t.flippedY||n.push("mwe-popups-image-tri"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall"),n}function h(e,t,n,r,i){var o=e.el,s=e.isTall,a=e.hasThumbnail,u=e.thumbnail,c=t.flippedY,p=t.flippedX,l=t.offset.top;!c&&!s&&a&&u.height<r&&o.find(".mwe-popups-extract").css("margin-top",u.height-i),o.addClass(n.join(" ")),c&&(l-=o.outerHeight()),o.css({top:l,left:t.offset.left+"px"}),c&&a&&o.find("image")[0].removeAttribute("clip-path"),c&&p&&a&&s&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask-flip)"),p&&!c&&a&&!s&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-mask-flip)"),p&&!c&&a&&s&&o.removeClass("mwe-popups-no-image-tri").find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask)")}function v(e,t,n){var r,i,o=null;return m.each(t,function(t,s){i=Math.abs(e-s.top+e-s.bottom),(null===o||o>i)&&(o=i,r=n?Math.floor(s.top):Math.ceil(s.bottom))}),r}var w=window.mediaWiki,m=jQuery,E=n("./src/wait.js"),T={portraitImage:{h:250,w:203},landscapeImage:{h:200,w:300},landscapePopupWidth:450,portraitPopupWidth:300,pokeySize:8},y=m(window);e.exports={render:o,init:i,createPokeyMasks:r,createPreview:s,createEmptyPreview:a,bindBehavior:c,show:u,hide:p,createThumbnail:l,createThumbnailElement:d,createLayout:f,getClasses:g,layoutPreview:h,getClosestYPosition:v}},"./src/schema.js":function(e,t){var n=window.mediaWiki,r=jQuery;e.exports=function(e,t){var i=e.get("wgPopupsSchemaSamplingRate",0);return t.navigator&&r.isFunction(t.navigator.sendBeacon)||(i=0),new n.eventLog.Schema("Popups",i)}},"./src/settingsDialog.js":function(e,t){function n(){var e=s.config.get("wgExtensionAssetsPath")+"/Popups/resources/ext.popups/images/",t=[{id:"simple",name:s.msg("popups-settings-option-simple"),description:s.msg("popups-settings-option-simple-description"),image:e+"hovercard.svg",isChecked:!0},{id:"advanced",name:s.msg("popups-settings-option-advanced"),description:s.msg("popups-settings-option-advanced-description"),image:e+"navpop.svg"},{id:"off",name:s.msg("popups-settings-option-off")}];return o()||t.splice(1,1),s.template.get("ext.popups","settings.mustache").render({heading:s.msg("popups-settings-title"),closeLabel:s.msg("popups-settings-cancel"),saveLabel:s.msg("popups-settings-save"),helpText:s.msg("popups-settings-help"),okLabel:s.msg("popups-settings-help-ok"),descriptionText:s.msg("popups-settings-description"),choices:t})}function r(e){return e.find("input[name=mwe-popups-setting]:checked, #mwe-popups-settings").val()}function i(e,t){var n=a("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}function o(){return"undefined"!=typeof pg&&void 0!==pg.fn.disablePopups}var s=window.mediaWiki,a=jQuery;e.exports=function(){var e,t;return function(s){return e||(e=n(),t=a("<div>").addClass("mwe-popups-overlay"),e.find(".save").click(function(){var t=r(e),n="simple"===t;s.saveSettings(n)}),e.find(".close, .okay").click(s.hideSettings)),{appendTo:function(n){t.appendTo(n),e.appendTo(n)},show:function(){var n=a(window).height(),r=a(window).width();t.show(),e.show().css("left",(r-e.outerWidth(!0))/2).css("top",(n-e.outerHeight(!0))/2)},hide:function(){t.hide(),e.hide()},toggleHelp:function(t){i(e,t)},setEnabled:function(t){var n="off";t?n="simple":o()&&(n="advanced"),e.find("#mwe-popups-settings-"+n).prop("checked",!0)}}}}},"./src/statsvInstrumentation.js":function(e,t){t.isEnabled=function(e,t,n){var r=t.get("wgPopupsStatsvSamplingRate",0);return n.weightedBoolean("ext.Popups.statsv",r,e.sessionId())}},"./src/title.js":function(e,t){function n(e,t){var n,r,i,s=new RegExp(o.RegExp.escape(t.get("wgArticlePath")).replace("\\$1","(.+)"));try{n=new o.Uri(e)}catch(e){return}if(n.host===location.hostname)return i=Object.keys(n.query).length,i?1===i&&n.query.hasOwnProperty("title")?n.query.title:void 0:(r=s.exec(n.path),r?decodeURIComponent(r[1]):void 0)}function r(e,t){var n;return e?(n=o.Title.newFromText(e),n&&$.inArray(n.namespace,t)>=0?n:null):null}function i(e,t){return r(n(e.href,t),t.get("wgContentNamespaces"))}var o=window.mediaWiki;e.exports={getTitle:n,isValid:r,fromElement:i}},"./src/userSettings.js":function(e,t){e.exports=function(e){return{getIsEnabled:function(){return"0"!==e.get("mwe-popups-enabled")},setIsEnabled:function(t){e.set("mwe-popups-enabled",t?"1":"0")},hasIsEnabled:function(){var t=e.get("mwe-popups-enabled");return!1!==Boolean(t)},getPreviewCount:function(){var t=e.get("ext.popups.core.previewCount");return!1===t?-1:null===t?0:parseInt(t,10)},setPreviewCount:function(t){e.set("ext.popups.core.previewCount",t.toString())}}}},"./src/wait.js":function(e,t){var n=jQuery;e.exports=function(e){var t=n.Deferred();return setTimeout(function(){t.resolve()},e),t.promise()}}});
//# sourceMappingURL=index.js.map