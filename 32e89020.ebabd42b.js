(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(7),i=(r(0),r(136)),s={id:"registry",title:"registry()",hide_title:!0,sidebar_label:"registry()"},o={id:"api/registry",title:"registry()",description:"# registry()",source:"@site/docs/api/registry.md",permalink:"/docs/en/api/registry",sidebar_label:"registry()",sidebar:"docs",previous:{title:"task()",permalink:"/docs/en/api/task"},next:{title:"tree()",permalink:"/docs/en/api/tree"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]}]}],b={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"registry"},"registry()"),Object(i.b)("p",null,"Allows custom registries to be plugged into the task system, which can provide shared tasks or augmented functionality."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Only tasks registered with ",Object(i.b)("inlineCode",{parentName:"p"},"task()")," will be provided to the custom registry. The task functions passed directly to ",Object(i.b)("inlineCode",{parentName:"p"},"series()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()")," will not be provided - if you need to customize the registry behavior, compose tasks with string references."),Object(i.b)("p",null,"When assigning a new registry, each task from the current registry will be transferred and the current registry will be replaced with the new one. This allows for adding multiple custom registries in sequential order."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/en/documentation-missing"}),"Creating Custom Registries")," for details."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { registry, task, series } = require('gulp');\nconst FwdRef = require('undertaker-forward-reference');\n\nregistry(FwdRef());\n\ntask('default', series('forward-ref'));\n\ntask('forward-ref', function(cb) {\n  // body omitted\n  cb();\n});\n")),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"registry([registryInstance])\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"registryInstance"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An instance - not the class - of a custom registry.")))),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"If a ",Object(i.b)("inlineCode",{parentName:"p"},"registryInstance")," is passed, nothing will be returned. If no arguments are passed, returns the current registry instance."),Object(i.b)("h3",{id:"errors"},"Errors"),Object(i.b)("p",null,"When a constructor (instead of an instance) is passed as ",Object(i.b)("inlineCode",{parentName:"p"},"registryInstance"),', throws an error with the message, "Custom registries must be instantiated, but it looks like you passed a constructor".'),Object(i.b)("p",null,"When a registry without a ",Object(i.b)("inlineCode",{parentName:"p"},"get")," method is passed as ",Object(i.b)("inlineCode",{parentName:"p"},"registryInstance"),', throws an error with the message, "Custom registry must have ',Object(i.b)("inlineCode",{parentName:"p"},"get"),' function".'),Object(i.b)("p",null,"When a registry without a ",Object(i.b)("inlineCode",{parentName:"p"},"set")," method is passed as ",Object(i.b)("inlineCode",{parentName:"p"},"registryInstance"),', throws an error with the message, "Custom registry must have ',Object(i.b)("inlineCode",{parentName:"p"},"set"),' function".'),Object(i.b)("p",null,"When a registry without an ",Object(i.b)("inlineCode",{parentName:"p"},"init")," method is passed as ",Object(i.b)("inlineCode",{parentName:"p"},"registryInstance"),', throws an error with the message, "Custom registry must have ',Object(i.b)("inlineCode",{parentName:"p"},"init"),' function"'),Object(i.b)("p",null,"When a registry without a ",Object(i.b)("inlineCode",{parentName:"p"},"tasks")," method is passed as ",Object(i.b)("inlineCode",{parentName:"p"},"registryInstance"),', throws an error with the message, "Custom registry must have ',Object(i.b)("inlineCode",{parentName:"p"},"tasks"),' function".'))}l.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?a.a.createElement(m,o({ref:t},b,{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var b=2;b<i;b++)s[b]=r[b];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);