(this.webpackJsonpdemokratieerleben=this.webpackJsonpdemokratieerleben||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(19),i=t.n(l),c=t(6),o=t(5),s=(t(27),t(12)),m=t(13),d=t(15),u=t(14),p=t(16),_=(t(28),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(u.a)(a).call(this))).state={activeItem:-1,items:["/","/chapterone","/chaptertwo"]},e}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleItemClick",value:function(e){this.setState({activeItem:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("nav",null,n.a.createElement("ul",null,this.state.items.map((function(a,t){return n.a.createElement("li",{key:t,className:e.state.activeItem===t?"current":"",onClick:e.handleItemClick.bind(e,t)},n.a.createElement(c.b,{to:a},a))}))))}}]),a}(r.Component));t(34),t(35);var h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"bird-container bird-container--one"},n.a.createElement("div",{className:"bird bird--one"})),n.a.createElement("div",{className:"bird-container bird-container--two"},n.a.createElement("div",{className:"bird bird--two"})),n.a.createElement("div",{className:"bird-container bird-container--three"},n.a.createElement("div",{className:"bird bird--three"})),n.a.createElement("div",{className:"bird-container bird-container--four"},n.a.createElement("div",{className:"bird bird--four"})))};var b=function(){return n.a.createElement("div",{className:"parallax"},n.a.createElement("div",{id:"header",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--base"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",{className:"title__white"},"Demokratie ",n.a.createElement("i",null,"er"),"leben"),n.a.createElement(h,null))),n.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},n.a.createElement("div",{className:"text__action"},n.a.createElement("h2",null,"Scrolle nach unten! \u21d3")))),n.a.createElement("div",{id:"chapter2",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--base"},n.a.createElement("div",{className:"title box"},n.a.createElement("p",null,"Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der beiden geh\xf6ren zur gro\xdfen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten. Anna und Karl machen sich Gedanken \xfcber ihre Zukunft, denn sie sind 13 Jahre alt und ihr letztes Schuljahr steht bald bevor. Begleite sie dabei, wie sie ihren Weg zu einer \u201eKinderrepublik\u201c der sozialistischen Arbeiterjugend finden und was sie dort erleben."))),n.a.createElement("div",{className:"parallax__layer parallax__layer--back"})),n.a.createElement("div",{id:"chapter3",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},n.a.createElement("div",{className:"title box"},n.a.createElement("p",null,"Wen m\xf6chtest du auf diesem Weg begleiten?"),n.a.createElement(c.b,{to:{pathname:"/chapterone",state:{avatar:"Anna"}}},"Anna"),n.a.createElement(c.b,{to:{pathname:"/chapterone",state:{avatar:"Karl"}}},"Karl"))),n.a.createElement("div",{className:"parallax__layer parallax__layer--base parallax__layer--left"})),n.a.createElement("div",{id:"chapter4",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--base"}),n.a.createElement("div",{className:"parallax__layer parallax__layer--back"}),n.a.createElement("div",{className:"parallax__layer parallax__layer--deep"})),n.a.createElement("div",{id:"chapter5",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--fore"}),n.a.createElement("div",{className:"parallax__layer parallax__layer--base parallax__layer--right"})),n.a.createElement("div",{id:"chapter6",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--back"}),n.a.createElement("div",{className:"parallax__layer parallax__layer--base"})),n.a.createElement("div",{id:"chapter7",className:"parallax__group"},n.a.createElement("div",{className:"parallax__layer parallax__layer--base parallax__layer--right"})))},v=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,40))})),E=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,39))}));var f=function(){return n.a.createElement(c.a,{basename:"/calendar"},n.a.createElement("div",{className:"App"},n.a.createElement(_,null),n.a.createElement(b,null),n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:b}),n.a.createElement(o.a,{path:"/chapterone",component:v}),n.a.createElement(o.a,{path:"/chaptertwo",component:E})))))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(n.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/demokratieerleben",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/demokratieerleben","/service-worker.js");x?(!function(e,a){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(a,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.820773fb.chunk.js.map