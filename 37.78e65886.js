(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7],{154:function(e,a,t){"use strict";var n=t(1),r=(t(155),t(156),t(7)),l=t(0),i=t.n(l),o=t(138),c=t.n(o),s=t(142),m=t(137),b=t(139),v=t(141),d=t(157),u=t(159),g=t(146),h=t(162),f=t(147),_=t(95),p=t.n(_);function k(){}function E(e){var a=e.activeBasePath,t=e.to,l=e.href,o=e.logo,d=e.label,u=(e.position,Object(r.a)(e,["activeBasePath","to","href","logo","label","position"])),h=Object(b.a)(t),f=Object(b.a)(a),_=function(e){void 0===e&&(e={});var a=Object(m.a)().siteConfig,t=(a=void 0===a?{}:a).baseUrl,n=Object(g.a)().isDarkTheme,r=e.href||t;e.target?e.target:Object(v.a)(r);var l=e.srcDark&&n?e.srcDark:e.src;return{logoImageUrl:Object(b.a)(l),logoAlt:e.alt}}(o),k=_.logoImageUrl,E=_.logoAlt,O=null!=k?i.a.createElement("img",{className:c()(p.a.navbarIcon),src:k,alt:E}):d;return i.a.createElement(s.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:l}:Object.assign({activeClassName:"navbar__link--active",to:h},a?{isActive:function(e,a){return a.pathname.startsWith(f)}}:null),u),O)}function O(e){var a,t=e.items,l=e.emphasis,o=e.position,s=Object(r.a)(e,["items","emphasis","position"]);return t?i.a.createElement("div",{className:c()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===o,"dropdown--right":"right"===o})},i.a.createElement(E,Object(n.a)({className:"navbar__item navbar__link"},s),s.label),i.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(E,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):i.a.createElement(E,Object(n.a)({className:c()("navbar__item","navbar__link",(a={"navbar__link--icon":s.logo},a[p.a.emphasis]=l,a[p.a.noWrap]=!0,a))},s))}a.a=function(){var e,a=Object(m.a)(),t=a.siteConfig.themeConfig,r=t.navbar,o=((r=void 0===r?{}:r).title,r.links),b=void 0===o?[]:o,v=r.hideOnScroll,_=void 0!==v&&v,E=t.disableDarkMode,j=void 0!==E&&E,N=a.isClient,w=Object(g.a)(),y=w.isDarkTheme,C=w.setLightTheme,D=w.setDarkTheme,P=Object(h.a)(_),I=P.navbarRef,L=P.isNavbarVisible,T=Object(f.a)(),U=T.logoLink,A=T.logoLinkProps,B=T.logoImageUrl,x=T.logoAlt,S=Object(l.useCallback)((function(e){return e.target.checked?D():C()}),[C,D]);return i.a.createElement("nav",{ref:I,className:c()("navbar","navbar--light","navbar--fixed-top",(e={},e[p.a.navbarHideable]=_,e[p.a.navbarHidden]=!L,e))},i.a.createElement("div",{className:"navbar__inner"},i.a.createElement("div",{className:"navbar__items"},i.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:U},A),null!=B&&i.a.createElement("img",{key:N,className:"navbar__logo",src:B,alt:x})),b.filter((function(e){return"left"===e.position})).map((function(e,a){return i.a.createElement(O,Object(n.a)({},e,{key:a}))}))),i.a.createElement("div",{className:"navbar__items navbar__items--right"},b.filter((function(e){return"right"===e.position})).map((function(e,a){return i.a.createElement(O,Object(n.a)({},e,{key:a}))})),!j&&i.a.createElement(u.a,{className:p.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:S}),i.a.createElement(d.a,{handleSearchBarToggle:k,isSearchBarExpanded:!0}))))}},163:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(153);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);