(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,t,a){"use strict";var n=a(0),r=a(165);t.a=function(){return Object(n.useContext)(r.a)}},147:function(e,t,a){"use strict";var n=a(137),r=a(146),c=a(139),o=a(141);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(r.a)(),l=t.href||e;let s={};t.target?s={target:t.target}:Object(o.a)(l)||(s={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:l,logoLinkProps:s,logoImageUrl:Object(c.a)(i),logoAlt:t.alt}}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(164),o=a(141),l=a(137),s=a(139);const i="",u="dark";var h=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(l.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(i),r(i)},[]),o=Object(n.useCallback)(()=>{a(u),r(u)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?u:i)})},[]),{isDarkTheme:t===u,setLightTheme:c,setDarkTheme:o}},d=a(165);var f=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=h();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var m=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var p=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});var b=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=m();return r.a.createElement(p.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)},g=a(96),v=a.n(g);var k=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(l.a)(),{id:t,content:a,backgroundColor:c,textColor:o}=e,[s,i]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&i(!1)},[]),!a||s?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:c,color:o},role:"banner"},r.a.createElement("div",{className:v.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),i(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(154),y=a(1),O=a(138),j=a.n(O),C=a(142),_=a(99),S=a.n(_);function w({to:e,href:t,label:a,...n}){const c=Object(s.a)(e);return r.a.createElement(C.a,Object(y.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const T=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var x=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:o=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:j()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(w,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:S.a.footerLogoLink},r.a.createElement(T,{alt:i.alt,url:u})):r.a.createElement(T,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(100);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,title:n,themeConfig:{image:i},url:u}=t,{children:h,title:d,noFooter:m,description:p,image:g,keywords:v,permalink:y,version:O}=e,j=d?`${d} | ${n}`:n,C=g||i;let _=u+Object(s.a)(C);Object(o.a)(C)||(_=C);const S=Object(s.a)(a);return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),a&&r.a.createElement("link",{rel:"shortcut icon",href:S}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:_}),C&&r.a.createElement("meta",{property:"twitter:image",content:_}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),y&&r.a.createElement("meta",{property:"og:url",content:u+y}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(E.a,null),r.a.createElement("div",{className:"main-wrapper"},h),!m&&r.a.createElement(x,null)))}},155:function(e,t,a){"use strict";var n=a(53),r=a(58),c=a(183),o="".startsWith;n(n.P+n.F*a(185)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},156:function(e,t,a){var n=a(53);n(n.S+n.F,"Object",{assign:a(186)})},157:function(e,t,a){"use strict";a(14);var n=a(0),r=a.n(n),c=a(138),o=a.n(c),l=a(137),s=a(158);a(97);t.a=e=>{const[t,c]=Object(n.useState)(!1),i=Object(n.useRef)(null),{siteConfig:u={}}=Object(l.a)(),{themeConfig:{algolia:h}}=u,d=Object(s.b)();const f=(e=!0)=>{t||Promise.all([a.e(34).then(a.t.bind(null,208,7)),a.e(22).then(a.t.bind(null,253,7))]).then(([{default:t}])=>{c(!0),window.docsearch=t,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:(e,t,a)=>{const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;d.push(r)}}),e&&i.current.focus()}(e)})},m=Object(n.useCallback)(()=>{f(),t&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),p=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),b=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;f(t)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:p,ref:i}))}},158:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},159:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(189),l=a.n(o),s=a(137),i=a(138),u=a.n(i),h=a(98),d=a.n(h);const f=()=>c.a.createElement("span",{className:u()(d.a.toggle,d.a.moon)}),m=()=>c.a.createElement("span",{className:u()(d.a.toggle,d.a.sun)});t.a=function(e){const{isClient:t}=Object(s.a)();return c.a.createElement(l.a,Object(n.a)({disabled:!t,icons:{checked:c.a.createElement(f,null),unchecked:c.a.createElement(m,null)}},e))}},162:function(e,t,a){"use strict";var n=a(0),r=a(158);var c=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};t.a=e=>{const[t,a]=Object(n.useState)(!0),[o,l]=Object(n.useState)(!1),[s,i]=Object(n.useState)(0),[u,h]=Object(n.useState)(0),d=Object(n.useCallback)(e=>{null!==e&&h(e.getBoundingClientRect().height)},[]),f=Object(r.c)(),[m,p]=c(f.hash),b=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&a(!0),e<u)return;if(o)return l(!1),a(!1),void i(e);const t=document.documentElement.scrollHeight-u,n=window.innerHeight;s&&e>=s?a(!1):e+n<t&&a(!0),i(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)}},[s,u]),Object(n.useEffect)(()=>{e&&(a(!0),p(f.hash))},[f]),Object(n.useEffect)(()=>{e&&m&&l(!0)},[m]),{navbarRef:d,isNavbarVisible:t}}},165:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},183:function(e,t,a){var n=a(184),r=a(38);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},184:function(e,t,a){var n=a(21),r=a(56),c=a(13)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==r(e))}},185:function(e,t,a){var n=a(13)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},186:function(e,t,a){"use strict";var n=a(15),r=a(39),c=a(187),o=a(188),l=a(59),s=a(55),i=Object.assign;e.exports=!i||a(37)((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=i({},e)[a]||Object.keys(i({},t)).join("")!=n}))?function(e,t){for(var a=l(e),i=arguments.length,u=1,h=c.f,d=o.f;i>u;)for(var f,m=s(arguments[u++]),p=h?r(m).concat(h(m)):r(m),b=p.length,g=0;b>g;)f=p[g++],n&&!d.call(m,f)||(a[f]=m[f]);return a}:i},187:function(e,t){t.f=Object.getOwnPropertySymbols},188:function(e,t){t.f={}.propertyIsEnumerable},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=d(c),l=d(a(138)),s=d(a(10)),i=d(a(190)),u=d(a(191)),h=a(192);function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,h.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,h.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,h.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},191:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},192:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);