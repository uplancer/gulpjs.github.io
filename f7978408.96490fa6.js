(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1),b=a(7),r=(a(0),a(136)),c={id:"src",title:"src()",hide_title:!0,sidebar_label:"src()"},l={id:"api/src",title:"src()",description:"# src()",source:"@site/docs/api/src.md",permalink:"/docs/en/api/src",sidebar_label:"src()",sidebar:"docs",previous:{title:"API Concepts",permalink:"/docs/en/api/concepts"},next:{title:"dest()",permalink:"/docs/en/api/dest"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]},{value:"Options",id:"options",children:[]}]},{value:"Sourcemaps",id:"sourcemaps",children:[]}],o={rightToc:i};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"src"},"src()"),Object(r.b)("p",null,"Creates a stream for reading ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/en/api/concepts#vinyl"}),"Vinyl")," objects from the file system."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," BOMs (byte order marks) have no purpose in UTF-8 and will be removed from UTF-8 files read by ",Object(r.b)("inlineCode",{parentName:"p"},"src()"),", unless disabled using the ",Object(r.b)("inlineCode",{parentName:"p"},"removeBOM")," option."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { src, dest } = require('gulp');\n\nfunction copy() {\n  return src('input/*.js')\n    .pipe(dest('output/'));\n}\n\nexports.copy = copy;\n")),Object(r.b)("h2",{id:"signature"},"Signature"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"src(globs, [options])\n")),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"note"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"globs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string",Object(r.b)("br",null),"array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/en/api/concepts#globs"}),"Globs")," to watch on the file system.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Detailed in ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#options"}),"Options")," below.")))),Object(r.b)("h3",{id:"returns"},"Returns"),Object(r.b)("p",null,"A stream that can be used at the beginning or in the middle of a pipeline to add files based on the given globs."),Object(r.b)("h3",{id:"errors"},"Errors"),Object(r.b)("p",null,"When the ",Object(r.b)("inlineCode",{parentName:"p"},"globs")," argument can only match one file (such as ",Object(r.b)("inlineCode",{parentName:"p"},"foo/bar.js"),') and no match is found, throws an error with the message, "File not found with singular glob". To suppress this error, set the ',Object(r.b)("inlineCode",{parentName:"p"},"allowEmpty")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("p",null,"When an invalid glob is given in ",Object(r.b)("inlineCode",{parentName:"p"},"globs"),', throws an error with the message, "Invalid glob argument".'),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For options that accept a function, the passed function will be called with each Vinyl object and must return a value of another listed type.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"note"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"buffer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When true, file contents are buffered into memory. If false, the Vinyl object's ",Object(r.b)("inlineCode",{parentName:"td"},"contents")," property will be a paused stream. It may not be possible to buffer the contents of large files.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," Plugins may not implement support for streaming contents.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"read"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If false, files will be not be read and their Vinyl objects won't be writable to disk via ",Object(r.b)("inlineCode",{parentName:"td"},".dest()"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"since"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"date",Object(r.b)("br",null),"timestamp",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When set, only creates Vinyl objects for files modified since the specified time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"removeBOM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When true, removes the BOM from UTF-8 encoded files. If false, ignores a BOM.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"sourcemaps"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, enables ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#sourcemaps"}),"sourcemaps")," support on Vinyl objects created. Loads inline sourcemaps and resolves external sourcemap links.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"resolveSymlinks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When true, recursively resolves symbolic links to their targets. If false, preserves the symbolic links and sets the Vinyl object's ",Object(r.b)("inlineCode",{parentName:"td"},"symlink")," property to the original file's path.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"cwd"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"process.cwd()")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The directory that will be combined with any relative path to form an absolute path. Is ignored for absolute paths. Use to avoid combining ",Object(r.b)("inlineCode",{parentName:"td"},"globs")," with ",Object(r.b)("inlineCode",{parentName:"td"},"path.join()"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/gulpjs/glob-stream"}),"glob-stream"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"base"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explicitly set the ",Object(r.b)("inlineCode",{parentName:"td"},"base")," property on created Vinyl objects. Detailed in ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/en/api/concepts#glob-base"}),"API Concepts"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/gulpjs/glob-stream"}),"glob-stream"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"cwdbase"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, ",Object(r.b)("inlineCode",{parentName:"td"},"cwd")," and ",Object(r.b)("inlineCode",{parentName:"td"},"base")," options should be aligned.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/gulpjs/glob-stream"}),"glob-stream"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"root"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The root path that ",Object(r.b)("inlineCode",{parentName:"td"},"globs")," are resolved against.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/gulpjs/glob-stream"}),"glob-stream"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"allowEmpty"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When false, ",Object(r.b)("inlineCode",{parentName:"td"},"globs")," which can only match one file (such as ",Object(r.b)("inlineCode",{parentName:"td"},"foo/bar.js"),") causes an error to be thrown if they don't find a match. If true, suppresses glob failures.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/gulpjs/glob-stream"}),"glob-stream"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"uniqueBy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string",Object(r.b)("br",null),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'path'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Remove duplicates from the stream by comparing the string property name or the result of the function.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," When using a function, the function receives the streamed data (objects containing ",Object(r.b)("inlineCode",{parentName:"td"},"cwd"),", ",Object(r.b)("inlineCode",{parentName:"td"},"base"),", ",Object(r.b)("inlineCode",{parentName:"td"},"path")," properties).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"dot"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, compare globs against dot files, like ",Object(r.b)("inlineCode",{parentName:"td"},".gitignore"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"silent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When true, suppresses warnings from printing on ",Object(r.b)("inlineCode",{parentName:"td"},"stderr"),".",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/isaacs/node-glob"}),"node-glob")," but defaulted to ",Object(r.b)("inlineCode",{parentName:"td"},"true")," instead of ",Object(r.b)("inlineCode",{parentName:"td"},"false"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"mark"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, a ",Object(r.b)("inlineCode",{parentName:"td"},"/")," character will be appended to directory matches. Generally not needed because paths are normalized within the pipeline.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nosort"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, disables sorting the glob results.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"stat"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, ",Object(r.b)("inlineCode",{parentName:"td"},"fs.stat()")," is called on all results. This adds extra overhead and generally should not be used.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"strict"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, an error will be thrown if an unexpected problem is encountered while attempting to read a directory.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nounique"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When false, prevents duplicate files in the result set.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"debug"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, debugging information will be logged to the command line.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nobrace"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, avoids expanding brace sets - e.g. ",Object(r.b)("inlineCode",{parentName:"td"},"{a,b}")," or ",Object(r.b)("inlineCode",{parentName:"td"},"{1..3}"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"noglobstar"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, treats double-star glob character as single-star glob character.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"noext"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, avoids matching ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/en/documentation-missing"}),"extglob")," patterns - e.g. ",Object(r.b)("inlineCode",{parentName:"td"},"+(ab)"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nocase"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, performs a case-insensitive match.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," On case-insensitive file systems, non-magic patterns will match by default.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"matchBase"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true and globs don't contain any ",Object(r.b)("inlineCode",{parentName:"td"},"/")," characters, traverses all directories and matches that glob - e.g. ",Object(r.b)("inlineCode",{parentName:"td"},"*.js")," would be treated as equivalent to ",Object(r.b)("inlineCode",{parentName:"td"},"**/*.js"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodir"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, only matches files, not directories.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," To match only directories, end your glob with a ",Object(r.b)("inlineCode",{parentName:"td"},"/"),".",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ignore"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string",Object(r.b)("br",null),"array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Globs to exclude from matches. This option is combined with negated ",Object(r.b)("inlineCode",{parentName:"td"},"globs"),".",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," These globs are always matched against dot files, regardless of any other settings.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"follow"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, symlinked directories will be traversed when expanding ",Object(r.b)("inlineCode",{parentName:"td"},"**")," globs.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note:")," This can cause problems with cyclical links.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"realpath"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, ",Object(r.b)("inlineCode",{parentName:"td"},"fs.realpath()")," is called on all results. This may result in dangling links.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"cache"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A previously generated cache object - avoids some file system calls.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"statCache"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A previously generated cache of ",Object(r.b)("inlineCode",{parentName:"td"},"fs.Stat")," results - avoids some file system calls.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"symlinks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A previously generated cache of symbolic links - avoids some file system calls.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nocomment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When false, treat a ",Object(r.b)("inlineCode",{parentName:"td"},"#")," character at the start of a glob as a comment.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"This option is passed directly to ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/isaacs/node-glob"}),"node-glob"),"."))))),Object(r.b)("h2",{id:"sourcemaps"},"Sourcemaps"),Object(r.b)("p",null,"Sourcemap support is built directly into ",Object(r.b)("inlineCode",{parentName:"p"},"src()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dest()"),", but is disabled by default. Enable it to produce inline or external sourcemaps."),Object(r.b)("p",null,"Inline sourcemaps:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst uglify = require('gulp-uglify');\n\nsrc('input/**/*.js', { sourcemaps: true })\n  .pipe(uglify())\n  .pipe(dest('output/', { sourcemaps: true }));\n")),Object(r.b)("p",null,"External sourcemaps:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst uglify = require('gulp-uglify');\n\nsrc('input/**/*.js', { sourcemaps: true })\n  .pipe(uglify())\n  .pipe(dest('output/', { sourcemaps: '.' }));\n")))}s.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),j=n,O=p["".concat(c,".").concat(j)]||p[j]||d[j]||r;return a?b.a.createElement(O,l({ref:t},o,{components:a})):b.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);