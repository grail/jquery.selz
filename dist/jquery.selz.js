!function(t){"use strict";function e(){t(document.body).on("click",a(),r),t(window).on("message",c).on("unload",function(){t.isFunction(s.onClose)&&"checkoutData"in s&&s.onClose(u.checkoutData)})}function o(t){return void 0===t||null===t}function n(t){return o(t)||""===t}function a(){var e="";return t.each(s.shortDomain,function(t,o){e+="a[href^='"+o+"']"+(t<s.shortDomain.length-1?",":"")}),"string"==typeof s.longDomain&&(e+=",a[href*='"+s.longDomain+"']"),e}function i(e,n){function a(e){i in l&&!o(e)&&Object.keys(e).length&&(l[i].forEach(function(o){var n=o[0],a=o[1];t.isFunction(a)&&a(e),s.checkout?n.data("modal-url",e.CheckoutUrl).attr("href",e.CheckoutUrl):n.data("modal-url",e.Url),t.isFunction(s.onDataReady)&&s.onDataReady(n,e)}),delete l[i])}var i=e.attr("href"),r="number"==typeof s.cache;i in l?l[i].push([e,n]):(l[i]=[],l[i].push([e,n]),r&&u.exists(i)?a(u.get(i)):t.getJSON(s.domain+"/embed/itemdata/?itemurl="+i+"&callback=?",function(t){r&&u.set(i,t,s.cache),a(t)}).fail(function(){"console"in window&&console.error("We couldn't find a matching item for that link")}))}function r(e){var o=t(this),n=o.data("modal-url");"string"==typeof n&&(e.preventDefault(),window._$elz.m.open(n,null),t.isFunction(s.onModalOpen)&&s.onModalOpen(o),u.currentTrigger=o)}function c(e){var o=(e=e.originalEvent).data;if(e.origin===s.domain&&"string"==typeof o)try{var a=JSON.parse(o);switch(a.key){case"modal-theme":var i={};if(t.each(s.theme,function(e,o){switch(e){case"button":t.each(o,function(t,e){switch(t){case"bg":i.cb=e;break;case"text":i.ct=e}});break;case"checkout":t.each(o,function(t,e){switch(t){case"headerBg":i.chbg=e;break;case"headerText":i.chtx=e}})}}),e.source.postMessage(JSON.stringify({key:"modal-theme",data:Object.keys(i).length?i:null}),s.domain),s.redirect||e.source.postMessage(JSON.stringify({key:"set-redirect",data:s.redirect}),s.domain),t.isFunction(s.getTracking)){var r=s.getTracking(u.currentTrigger);n(r)||e.source.postMessage(JSON.stringify({key:"set-tracking",data:r}),s.domain)}break;case"purchase":t.isFunction(s.onPurchase)&&s.onPurchase(a.data);break;case"processing":t.isFunction(s.onProcessing)&&s.onProcessing(a.data);break;case"modal-close":t.isFunction(s.onClose)&&s.onClose(u.currentTrigger,a.data);break;case"beforeunload":u.checkoutData=a.data}}catch(t){}}window._$elz=window._$elz||{};var s={domain:"https://selz.com",shortDomain:["http://selz.co/","http://bit.ly/"],longDomain:".selz.com/item/",theme:{},cache:300,checkout:!1,redirect:!1},l={},u={supported:function(){if(!("localStorage"in window))return!1;try{window.localStorage.setItem("___support_test","OK");var t=window.localStorage.getItem("___support_test");return window.localStorage.removeItem("___support_test"),"OK"===t}catch(t){return!1}return!1},set:function(t,e,o){this.supported()&&void 0!==t&&("boolean"==typeof o&&!o||"number"==typeof o||(o=3600),null!==e&&"object"==typeof e&&(e=JSON.stringify(e)),window.localStorage.setItem(t,e),("boolean"!=typeof o||o)&&window.localStorage.setItem(t+"_ttl",Date.now()+1e3*o))},get:function(t){if(!this.supported()||!this.exists(t)||!this.validity(t))return null;var e;try{e=JSON.parse(window.localStorage.getItem(t))}catch(o){e=window.localStorage.getItem(t)}return e},clean:function(){if(this.supported())for(var t in window.localStorage)this.validity(t)},validity:function(t){return!(t+"_ttl"in window.localStorage&&window.localStorage[t+"_ttl"]<Date.now())||(window.localStorage.removeItem(t),window.localStorage.removeItem(t+"_ttl"),!1)},exists:function(t){return!!this.supported()&&t in window.localStorage}};window._$elz.m=window._$elz.m||{s:{src:s.domain+"/assets/js/embed/modal.js"}},void 0===window._$elz.m.open?t.getScript(window._$elz.m.s.src,function(){e()}):e(),t.selz=function(e){t.extend(!0,s,e),t.isArray(s.shortDomain)||(s.shortDomain=[s.shortDomain]),s.shortDomain.push(s.domain+"/checkout/item/"),t(a()).each(function(){i(t(this))})}}(window.jQuery);