(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n(1),r=n(7),i=(n(0),n(136)),c={id:"lastrun",title:"lastRun()",hide_title:!0,sidebar_label:"lastRun()"},b={id:"api/lastrun",title:"lastRun()",description:"# lastRun()",source:"@site/docs/api/last-run.md",permalink:"/docs/en/api/lastrun",sidebar_label:"lastRun()",sidebar:"docs",previous:{title:"symlink()",permalink:"/docs/en/api/symlink"},next:{title:"series()",permalink:"/docs/en/api/series"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]}]},{value:"Timestamp precision",id:"timestamp-precision",children:[]}],l={rightToc:s};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"lastrun"},"lastRun()"),Object(i.b)("p",null,"Retrieves the last time a task was successfully completed during the current running process. Most useful on subsequent task runs while a watcher is running."),Object(i.b)("p",null,"When combined with ",Object(i.b)("inlineCode",{parentName:"p"},"src()"),", enables incremental builds to speed up execution times by skipping files that haven't changed since the last successful task completion."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest, lastRun, watch } = require('gulp');\nconst imagemin = require('gulp-imagemin');\n\nfunction images() {\n  return src('src/images/**/*.jpg', { since: lastRun(images) })\n    .pipe(imagemin())\n    .pipe(dest('build/img/'));\n}\n\nexports.default = function() {\n  watch('src/images/**/*.jpg', images);\n};\n")),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"lastRun(task, [precision])\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"task",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"(required)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function",Object(i.b)("br",null),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The task function or the string alias of a registered task.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"precision"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: ",Object(i.b)("inlineCode",{parentName:"td"},"1000")," on Node v0.10, ",Object(i.b)("inlineCode",{parentName:"td"},"0")," on Node v0.12+. Detailed in ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#timestamp-precision"}),"Timestamp precision")," section below.")))),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"A timestamp (in milliseconds), matching the last completion time of the task. If the task has not been run or has failed, returns ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,"To avoid an invalid state being cached, the returned value will be ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," if a task errors."),Object(i.b)("h3",{id:"errors"},"Errors"),Object(i.b)("p",null,'When called with a value other than a string or function, throws an error with the message, "Only functions can check lastRun".'),Object(i.b)("p",null,'When called on a non-extensible function and Node is missing WeakMap, throws an error with the message, "Only extensible functions can check lastRun".'),Object(i.b)("h2",{id:"timestamp-precision"},"Timestamp precision"),Object(i.b)("p",null,"While there are sensible defaults for the precision of timestamps, they can be rounded using the ",Object(i.b)("inlineCode",{parentName:"p"},"precision")," parameter. Useful if your file system or Node version has a lossy precision on file time attributes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lastRun(someTask)")," returns 1426000001111"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lastRun(someTask, 100)")," returns 1426000001100"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lastRun(someTask, 1000)")," returns 1426000001000")),Object(i.b)("p",null,"A file's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/api/concepts#file-system-stats"}),"mtime stat")," precision may vary depending on the node version and/or the file system used."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"platform"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"precision"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Node v0.10"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1000ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Node v0.12+"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"FAT32 file system"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2000ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"HFS+ or Ext3 file systems"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1000ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"NTFS using Node v0.10"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1s")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"NTFS using Node 0.12+"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"100ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Ext4 using Node v0.10"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1000ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Ext4 using Node 0.12+"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms")))))}o.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,b({ref:t},l,{components:n})):r.a.createElement(d,b({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);