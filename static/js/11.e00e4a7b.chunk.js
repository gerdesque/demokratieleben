(this.webpackJsonpdemokratieerleben=this.webpackJsonpdemokratieerleben||[]).push([[11],{161:function(e,a,r){},176:function(e,a,r){"use strict";r.r(a);var t=r(38),n=r(30),l=r(34),i=r(32),c=r(31),o=r(33),s=r(0),u=r.n(s),p=r(5),d=(r(161),r(35));function m(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?m(r,!0).forEach((function(a){Object(t.a)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var f=Object(s.lazy)((function(){return r.e(0).then(r.bind(null,131))})),b={AnnaChildren1:"Anna kann es kaum glauben, dass hier rund 2000 Kinder und Jugendliche auf einem Haufen versammelt sind. Es bereitet ihr gro\xdfe Freude, jeden Tag neue Kinder kennenzulernen, auch wenn das manchmal so seine T\xfccken hat.",AnnaChildren2:"Ein Gro\xdfteil des Tages besteht darin, dass die Kinder und Jugendlichen ihren eigenen Interessen nachgehen k\xf6nnen und an einer der vielf\xe4ltigen Arbeitsgruppen teilnehmen k\xf6nnen. Oft organisieren die Kinder auch eigene Veranstaltungen oder Kurse. Anna bringt sich direkt mit Begeisterung ein.",KarlChildren1:"Karl kann es kaum glauben, dass hier rund 2000 Kinder und Jugendliche auf einem Haufen versammelt sind. Es bereitet ihm gro\xdfe Freude, jeden Tag neue Kinder kennenzulernen, auch wenn das manchmal so seine T\xfccken hat.",KarlChildren2:"Ein Gro\xdfteil des Tages besteht darin, dass die Kinder und Jugendlichen ihren eigenen Interessen nachgehen k\xf6nnen und an einer der vielf\xe4ltigen Arbeitsgruppen teilnehmen k\xf6nnen. Oft organisieren die Kinder auch eigene Veranstaltungen oder Ausfl\xfcge. Karl kann sich vor lauter M\xf6glichkeiten kaum entscheiden. Am Ende findet er doch etwas, was ihn interessiert."},y=function(e){function a(e){var r;return Object(n.a)(this,a),(r=Object(i.a)(this,Object(c.a)(a).call(this,e))).pauseVideo=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})},r.state={avatar:r.props.location.state?r.props.location.state.avatar:"Anna",redirect:!1},r}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(d.a,{class:"children"},u.a.createElement("h1",{className:"title"},"Die Kinder der Republik"),u.a.createElement("div",{className:"box column"},u.a.createElement("p",null,b[this.state.avatar+"Children1"]),u.a.createElement(f,{source:"".concat(this.state.avatar,"_Dialekte"),pauseVideo:function(){return e.pauseVideo("#group3")}})),u.a.createElement("div",{className:"box column"},u.a.createElement("p",null,b[this.state.avatar+"Children2"]),u.a.createElement(f,{source:"".concat(this.state.avatar,"_Arbeitsgruppe"),pauseVideo:function(){return e.pauseVideo("#group4")}})),u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",className:"link-button",onClick:function(){return e.setState({redirect:!0})}},"Zum Alltag der Kinderrepublik geh\xf6ren auch \xdcberraschungen..."),this.state.redirect&&u.a.createElement(p.a,{exact:!0,to:{pathname:"/routine",state:h({},this.state)}})))}}]),a}(s.Component);a.default=y},30:function(e,a,r){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}r.d(a,"a",(function(){return t}))},31:function(e,a,r){"use strict";function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(a,"a",(function(){return t}))},32:function(e,a,r){"use strict";function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return(n="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)}function l(e,a){return!a||"object"!==n(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}r.d(a,"a",(function(){return l}))},33:function(e,a,r){"use strict";function t(e,a){return(t=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function n(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&t(e,a)}r.d(a,"a",(function(){return n}))},34:function(e,a,r){"use strict";function t(e,a){for(var r=0;r<a.length;r++){var t=a[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}r.d(a,"a",(function(){return n}))},35:function(e,a,r){"use strict";var t=r(30),n=r(34),l=r(32),i=r(31),c=r(33),o=r(0),s=r.n(o),u=(r(36),function(e){function a(){return Object(t.a)(this,a),Object(l.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"parallax ".concat(this.props.class)},this.props.children[0]&&s.a.createElement("div",{id:"header",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--base"},s.a.createElement("div",{className:"title"},this.props.children[0]))),this.props.children[1]&&s.a.createElement("div",{id:"group2",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--base"},this.props.children[1]),s.a.createElement("div",{className:"parallax__layer parallax__layer--deep"})),this.props.children[2]&&s.a.createElement("div",{id:"group3",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--base"},this.props.children[2]),s.a.createElement("div",{className:"parallax__layer parallax__layer--back"})),this.props.children[3]&&s.a.createElement("div",{id:"group4",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[3])),this.props.children[4]&&s.a.createElement("div",{id:"group5",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[4]),s.a.createElement("div",{className:"parallax__layer parallax__layer--base"})),this.props.children[5]&&s.a.createElement("div",{id:"group6",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--back"}),s.a.createElement("div",{className:"parallax__layer parallax__layer--base"}),s.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[5])),this.props.children[6]&&s.a.createElement("div",{id:"group7",className:"parallax__group"},s.a.createElement("div",{className:"parallax__layer parallax__layer--base"}),s.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[6])))}}]),a}(o.Component));a.a=u},36:function(e,a,r){},38:function(e,a,r){"use strict";function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}r.d(a,"a",(function(){return t}))}}]);
//# sourceMappingURL=11.e00e4a7b.chunk.js.map