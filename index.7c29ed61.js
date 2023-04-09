function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var i={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("kyEFX",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var o={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},r=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("9QQ9J",(function(e,n){var i,r,s;t(e.exports,"SourceMapGenerator",(function(){return i}),(function(t){return i=t})),t(e.exports,"SourceMapConsumer",(function(){return r}),(function(t){return r=t})),t(e.exports,"SourceNode",(function(){return s}),(function(t){return s=t})),i=o("ic7WM").SourceMapGenerator,r=o("lbXUp").SourceMapConsumer,s=o("Tx9qF").SourceNode})),o.register("ic7WM",(function(e,n){var i;t(e.exports,"SourceMapGenerator",(function(){return i}),(function(t){return i=t}));var r=o("duvZU"),s=o("dQK2c"),a=o("lSTHk").ArraySet,l=o("2EyUB").MappingList;function c(t){t||(t={}),this._file=s.getArg(t,"file",null),this._sourceRoot=s.getArg(t,"sourceRoot",null),this._skipValidation=s.getArg(t,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new l,this._sourcesContents=null}c.prototype._version=3,c.fromSourceMap=function(t){var e=t.sourceRoot,n=new c({file:t.file,sourceRoot:e});return t.eachMapping((function(t){var i={generated:{line:t.generatedLine,column:t.generatedColumn}};null!=t.source&&(i.source=t.source,null!=e&&(i.source=s.relative(e,i.source)),i.original={line:t.originalLine,column:t.originalColumn},null!=t.name&&(i.name=t.name)),n.addMapping(i)})),t.sources.forEach((function(i){var r=i;null!==e&&(r=s.relative(e,i)),n._sources.has(r)||n._sources.add(r);var o=t.sourceContentFor(i);null!=o&&n.setSourceContent(i,o)})),n},c.prototype.addMapping=function(t){var e=s.getArg(t,"generated"),n=s.getArg(t,"original",null),i=s.getArg(t,"source",null),r=s.getArg(t,"name",null);this._skipValidation||this._validateMapping(e,n,i,r),null!=i&&(i=String(i),this._sources.has(i)||this._sources.add(i)),null!=r&&(r=String(r),this._names.has(r)||this._names.add(r)),this._mappings.add({generatedLine:e.line,generatedColumn:e.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:i,name:r})},c.prototype.setSourceContent=function(t,e){var n=t;null!=this._sourceRoot&&(n=s.relative(this._sourceRoot,n)),null!=e?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(n)]=e):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},c.prototype.applySourceMap=function(t,e,n){var i=e;if(null==e){if(null==t.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');i=t.file}var r=this._sourceRoot;null!=r&&(i=s.relative(r,i));var o=new a,l=new a;this._mappings.unsortedForEach((function(e){if(e.source===i&&null!=e.originalLine){var a=t.originalPositionFor({line:e.originalLine,column:e.originalColumn});null!=a.source&&(e.source=a.source,null!=n&&(e.source=s.join(n,e.source)),null!=r&&(e.source=s.relative(r,e.source)),e.originalLine=a.line,e.originalColumn=a.column,null!=a.name&&(e.name=a.name))}var c=e.source;null==c||o.has(c)||o.add(c);var u=e.name;null==u||l.has(u)||l.add(u)}),this),this._sources=o,this._names=l,t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=s.join(n,e)),null!=r&&(e=s.relative(r,e)),this.setSourceContent(e,i))}),this)},c.prototype._validateMapping=function(t,e,n,i){if(e&&"number"!=typeof e.line&&"number"!=typeof e.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(t&&"line"in t&&"column"in t&&t.line>0&&t.column>=0)||e||n||i)&&!(t&&"line"in t&&"column"in t&&e&&"line"in e&&"column"in e&&t.line>0&&t.column>=0&&e.line>0&&e.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:t,source:n,original:e,name:i}))},c.prototype._serializeMappings=function(){for(var t,e,n,i,o=0,a=1,l=0,c=0,u=0,h=0,p="",d=this._mappings.toArray(),f=0,m=d.length;f<m;f++){if(t="",(e=d[f]).generatedLine!==a)for(o=0;e.generatedLine!==a;)t+=";",a++;else if(f>0){if(!s.compareByGeneratedPositionsInflated(e,d[f-1]))continue;t+=","}t+=r.encode(e.generatedColumn-o),o=e.generatedColumn,null!=e.source&&(i=this._sources.indexOf(e.source),t+=r.encode(i-h),h=i,t+=r.encode(e.originalLine-1-c),c=e.originalLine-1,t+=r.encode(e.originalColumn-l),l=e.originalColumn,null!=e.name&&(n=this._names.indexOf(e.name),t+=r.encode(n-u),u=n)),p+=t}return p},c.prototype._generateSourcesContent=function(t,e){return t.map((function(t){if(!this._sourcesContents)return null;null!=e&&(t=s.relative(e,t));var n=s.toSetString(t);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},c.prototype.toJSON=function(){var t={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(t.file=this._file),null!=this._sourceRoot&&(t.sourceRoot=this._sourceRoot),this._sourcesContents&&(t.sourcesContent=this._generateSourcesContent(t.sources,t.sourceRoot)),t},c.prototype.toString=function(){return JSON.stringify(this.toJSON())},i=c})),o.register("duvZU",(function(e,n){var i,r;t(e.exports,"encode",(function(){return i}),(function(t){return i=t})),t(e.exports,"decode",(function(){return r}),(function(t){return r=t}));var s=o("iJ1ZV");i=function(t){var e,n="",i=function(t){return t<0?1+(-t<<1):0+(t<<1)}(t);do{e=31&i,(i>>>=5)>0&&(e|=32),n+=s.encode(e)}while(i>0);return n},r=function(t,e,n){var i,r,o,a,l=t.length,c=0,u=0;do{if(e>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(r=s.decode(t.charCodeAt(e++))))throw new Error("Invalid base64 digit: "+t.charAt(e-1));i=!!(32&r),c+=(r&=31)<<u,u+=5}while(i);n.value=(a=(o=c)>>1,1==(1&o)?-a:a),n.rest=e}})),o.register("iJ1ZV",(function(e,n){var i,r;t(e.exports,"encode",(function(){return i}),(function(t){return i=t})),t(e.exports,"decode",(function(){return r}),(function(t){return r=t}));var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");i=function(t){if(0<=t&&t<o.length)return o[t];throw new TypeError("Must be between 0 and 63: "+t)},r=function(t){return 65<=t&&t<=90?t-65:97<=t&&t<=122?t-97+26:48<=t&&t<=57?t-48+52:43==t?62:47==t?63:-1}})),o.register("dQK2c",(function(e,n){var i,r,o,s,a,l,c,u,h,p,d,f,m;t(e.exports,"getArg",(function(){return i}),(function(t){return i=t})),t(e.exports,"urlParse",(function(){return r}),(function(t){return r=t})),t(e.exports,"isAbsolute",(function(){return a}),(function(t){return a=t})),t(e.exports,"normalize",(function(){return o}),(function(t){return o=t})),t(e.exports,"join",(function(){return s}),(function(t){return s=t})),t(e.exports,"relative",(function(){return l}),(function(t){return l=t})),t(e.exports,"toSetString",(function(){return c}),(function(t){return c=t})),t(e.exports,"fromSetString",(function(){return u}),(function(t){return u=t})),t(e.exports,"compareByOriginalPositions",(function(){return h}),(function(t){return h=t})),t(e.exports,"compareByGeneratedPositionsDeflated",(function(){return p}),(function(t){return p=t})),t(e.exports,"compareByGeneratedPositionsInflated",(function(){return d}),(function(t){return d=t})),t(e.exports,"parseSourceMapInput",(function(){return f}),(function(t){return f=t})),t(e.exports,"computeSourceURL",(function(){return m}),(function(t){return m=t})),i=function(t,e,n){if(e in t)return t[e];if(3===arguments.length)return n;throw new Error('"'+e+'" is a required argument.')};var g=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,y=/^data:.+\,.+$/;function v(t){var e=t.match(g);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}function b(t){var e="";return t.scheme&&(e+=t.scheme+":"),e+="//",t.auth&&(e+=t.auth+"@"),t.host&&(e+=t.host),t.port&&(e+=":"+t.port),t.path&&(e+=t.path),e}function w(t){var e=t,n=v(t);if(n){if(!n.path)return t;e=n.path}for(var i,r=a(e),o=e.split(/\/+/),s=0,l=o.length-1;l>=0;l--)"."===(i=o[l])?o.splice(l,1):".."===i?s++:s>0&&(""===i?(o.splice(l+1,s),s=0):(o.splice(l,2),s--));return""===(e=o.join("/"))&&(e=r?"/":"."),n?(n.path=e,b(n)):e}function x(t,e){""===t&&(t="."),""===e&&(e=".");var n=v(e),i=v(t);if(i&&(t=i.path||"/"),n&&!n.scheme)return i&&(n.scheme=i.scheme),b(n);if(n||e.match(y))return e;if(i&&!i.host&&!i.path)return i.host=e,b(i);var r="/"===e.charAt(0)?e:w(t.replace(/\/+$/,"")+"/"+e);return i?(i.path=r,b(i)):r}r=v,o=w,s=x,a=function(t){return"/"===t.charAt(0)||g.test(t)},l=function(t,e){""===t&&(t="."),t=t.replace(/\/$/,"");for(var n=0;0!==e.indexOf(t+"/");){var i=t.lastIndexOf("/");if(i<0)return e;if((t=t.slice(0,i)).match(/^([^\/]+:\/)?\/*$/))return e;++n}return Array(n+1).join("../")+e.substr(t.length+1)};var k=!("__proto__"in Object.create(null));function _(t){return t}function S(t){if(!t)return!1;var e=t.length;if(e<9)return!1;if(95!==t.charCodeAt(e-1)||95!==t.charCodeAt(e-2)||111!==t.charCodeAt(e-3)||116!==t.charCodeAt(e-4)||111!==t.charCodeAt(e-5)||114!==t.charCodeAt(e-6)||112!==t.charCodeAt(e-7)||95!==t.charCodeAt(e-8)||95!==t.charCodeAt(e-9))return!1;for(var n=e-10;n>=0;n--)if(36!==t.charCodeAt(n))return!1;return!0}function I(t,e){return t===e?0:null===t?1:null===e?-1:t>e?1:-1}c=k?_:function(t){return S(t)?"$"+t:t},u=k?_:function(t){return S(t)?t.slice(1):t},h=function(t,e,n){var i=I(t.source,e.source);return 0!==i||0!==(i=t.originalLine-e.originalLine)||0!==(i=t.originalColumn-e.originalColumn)||n||0!==(i=t.generatedColumn-e.generatedColumn)||0!==(i=t.generatedLine-e.generatedLine)?i:I(t.name,e.name)},p=function(t,e,n){var i=t.generatedLine-e.generatedLine;return 0!==i||0!==(i=t.generatedColumn-e.generatedColumn)||n||0!==(i=I(t.source,e.source))||0!==(i=t.originalLine-e.originalLine)||0!==(i=t.originalColumn-e.originalColumn)?i:I(t.name,e.name)},d=function(t,e){var n=t.generatedLine-e.generatedLine;return 0!==n||0!==(n=t.generatedColumn-e.generatedColumn)||0!==(n=I(t.source,e.source))||0!==(n=t.originalLine-e.originalLine)||0!==(n=t.originalColumn-e.originalColumn)?n:I(t.name,e.name)},f=function(t){return JSON.parse(t.replace(/^\)]}'[^\n]*\n/,""))},m=function(t,e,n){if(e=e||"",t&&("/"!==t[t.length-1]&&"/"!==e[0]&&(t+="/"),e=t+e),n){var i=v(n);if(!i)throw new Error("sourceMapURL could not be parsed");if(i.path){var r=i.path.lastIndexOf("/");r>=0&&(i.path=i.path.substring(0,r+1))}e=x(b(i),e)}return w(e)}})),o.register("lSTHk",(function(e,n){var i;t(e.exports,"ArraySet",(function(){return i}),(function(t){return i=t}));var r=o("dQK2c"),s=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function l(){this._array=[],this._set=a?new Map:Object.create(null)}l.fromArray=function(t,e){for(var n=new l,i=0,r=t.length;i<r;i++)n.add(t[i],e);return n},l.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},l.prototype.add=function(t,e){var n=a?t:r.toSetString(t),i=a?this.has(t):s.call(this._set,n),o=this._array.length;i&&!e||this._array.push(t),i||(a?this._set.set(t,o):this._set[n]=o)},l.prototype.has=function(t){if(a)return this._set.has(t);var e=r.toSetString(t);return s.call(this._set,e)},l.prototype.indexOf=function(t){if(a){var e=this._set.get(t);if(e>=0)return e}else{var n=r.toSetString(t);if(s.call(this._set,n))return this._set[n]}throw new Error('"'+t+'" is not in the set.')},l.prototype.at=function(t){if(t>=0&&t<this._array.length)return this._array[t];throw new Error("No element indexed by "+t)},l.prototype.toArray=function(){return this._array.slice()},i=l})),o.register("2EyUB",(function(e,n){var i;t(e.exports,"MappingList",(function(){return i}),(function(t){return i=t}));var r=o("dQK2c");function s(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}s.prototype.unsortedForEach=function(t,e){this._array.forEach(t,e)},s.prototype.add=function(t){var e,n,i,o,s,a;e=this._last,n=t,i=e.generatedLine,o=n.generatedLine,s=e.generatedColumn,a=n.generatedColumn,o>i||o==i&&a>=s||r.compareByGeneratedPositionsInflated(e,n)<=0?(this._last=t,this._array.push(t)):(this._sorted=!1,this._array.push(t))},s.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},i=s})),o.register("lbXUp",(function(e,n){var i;t(e.exports,"SourceMapConsumer",(function(){return i}),(function(t){return i=t}));var r=o("dQK2c"),s=o("bTtvB"),a=o("lSTHk").ArraySet,l=o("duvZU"),c=o("76ffZ").quickSort;function u(t,e){var n=t;return"string"==typeof t&&(n=r.parseSourceMapInput(t)),null!=n.sections?new d(n,e):new h(n,e)}function h(t,e){var n=t;"string"==typeof t&&(n=r.parseSourceMapInput(t));var i=r.getArg(n,"version"),o=r.getArg(n,"sources"),s=r.getArg(n,"names",[]),l=r.getArg(n,"sourceRoot",null),c=r.getArg(n,"sourcesContent",null),u=r.getArg(n,"mappings"),h=r.getArg(n,"file",null);if(i!=this._version)throw new Error("Unsupported version: "+i);l&&(l=r.normalize(l)),o=o.map(String).map(r.normalize).map((function(t){return l&&r.isAbsolute(l)&&r.isAbsolute(t)?r.relative(l,t):t})),this._names=a.fromArray(s.map(String),!0),this._sources=a.fromArray(o,!0),this._absoluteSources=this._sources.toArray().map((function(t){return r.computeSourceURL(l,t,e)})),this.sourceRoot=l,this.sourcesContent=c,this._mappings=u,this._sourceMapURL=e,this.file=h}function p(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(t,e){var n=t;"string"==typeof t&&(n=r.parseSourceMapInput(t));var i=r.getArg(n,"version"),o=r.getArg(n,"sections");if(i!=this._version)throw new Error("Unsupported version: "+i);this._sources=new a,this._names=new a;var s={line:-1,column:0};this._sections=o.map((function(t){if(t.url)throw new Error("Support for url field in sections not implemented.");var n=r.getArg(t,"offset"),i=r.getArg(n,"line"),o=r.getArg(n,"column");if(i<s.line||i===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=n,{generatedOffset:{generatedLine:i+1,generatedColumn:o+1},consumer:new u(r.getArg(t,"map"),e)}}))}u.fromSourceMap=function(t,e){return h.fromSourceMap(t,e)},u.prototype._version=3,u.prototype.__generatedMappings=null,Object.defineProperty(u.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),u.prototype.__originalMappings=null,Object.defineProperty(u.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),u.prototype._charIsMappingSeparator=function(t,e){var n=t.charAt(e);return";"===n||","===n},u.prototype._parseMappings=function(t,e){throw new Error("Subclasses must implement _parseMappings")},u.GENERATED_ORDER=1,u.ORIGINAL_ORDER=2,u.GREATEST_LOWER_BOUND=1,u.LEAST_UPPER_BOUND=2,u.prototype.eachMapping=function(t,e,n){var i,o=e||null;switch(n||u.GENERATED_ORDER){case u.GENERATED_ORDER:i=this._generatedMappings;break;case u.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;i.map((function(t){var e=null===t.source?null:this._sources.at(t.source);return{source:e=r.computeSourceURL(s,e,this._sourceMapURL),generatedLine:t.generatedLine,generatedColumn:t.generatedColumn,originalLine:t.originalLine,originalColumn:t.originalColumn,name:null===t.name?null:this._names.at(t.name)}}),this).forEach(t,o)},u.prototype.allGeneratedPositionsFor=function(t){var e=r.getArg(t,"line"),n={source:r.getArg(t,"source"),originalLine:e,originalColumn:r.getArg(t,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var i=[],o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,s.LEAST_UPPER_BOUND);if(o>=0){var a=this._originalMappings[o];if(void 0===t.column)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o];else for(var c=a.originalColumn;a&&a.originalLine===e&&a.originalColumn==c;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o]}return i},i=u,h.prototype=Object.create(u.prototype),h.prototype.consumer=u,h.prototype._findSourceIndex=function(t){var e,n=t;if(null!=this.sourceRoot&&(n=r.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(e=0;e<this._absoluteSources.length;++e)if(this._absoluteSources[e]==t)return e;return-1},h.fromSourceMap=function(t,e){var n=Object.create(h.prototype),i=n._names=a.fromArray(t._names.toArray(),!0),o=n._sources=a.fromArray(t._sources.toArray(),!0);n.sourceRoot=t._sourceRoot,n.sourcesContent=t._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=t._file,n._sourceMapURL=e,n._absoluteSources=n._sources.toArray().map((function(t){return r.computeSourceURL(n.sourceRoot,t,e)}));for(var s=t._mappings.toArray().slice(),l=n.__generatedMappings=[],u=n.__originalMappings=[],d=0,f=s.length;d<f;d++){var m=s[d],g=new p;g.generatedLine=m.generatedLine,g.generatedColumn=m.generatedColumn,m.source&&(g.source=o.indexOf(m.source),g.originalLine=m.originalLine,g.originalColumn=m.originalColumn,m.name&&(g.name=i.indexOf(m.name)),u.push(g)),l.push(g)}return c(n.__originalMappings,r.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(t,e){for(var n,i,o,s,a,u=1,h=0,d=0,f=0,m=0,g=0,y=t.length,v=0,b={},w={},x=[],k=[];v<y;)if(";"===t.charAt(v))u++,v++,h=0;else if(","===t.charAt(v))v++;else{for((n=new p).generatedLine=u,s=v;s<y&&!this._charIsMappingSeparator(t,s);s++);if(o=b[i=t.slice(v,s)])v+=i.length;else{for(o=[];v<s;)l.decode(t,v,w),a=w.value,v=w.rest,o.push(a);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");b[i]=o}n.generatedColumn=h+o[0],h=n.generatedColumn,o.length>1&&(n.source=m+o[1],m+=o[1],n.originalLine=d+o[2],d=n.originalLine,n.originalLine+=1,n.originalColumn=f+o[3],f=n.originalColumn,o.length>4&&(n.name=g+o[4],g+=o[4])),k.push(n),"number"==typeof n.originalLine&&x.push(n)}c(k,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,c(x,r.compareByOriginalPositions),this.__originalMappings=x},h.prototype._findMapping=function(t,e,n,i,r,o){if(t[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+t[n]);if(t[i]<0)throw new TypeError("Column must be greater than or equal to 0, got "+t[i]);return s.search(t,e,r,o)},h.prototype.computeColumnSpans=function(){for(var t=0;t<this._generatedMappings.length;++t){var e=this._generatedMappings[t];if(t+1<this._generatedMappings.length){var n=this._generatedMappings[t+1];if(e.generatedLine===n.generatedLine){e.lastGeneratedColumn=n.generatedColumn-1;continue}}e.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(t){var e={generatedLine:r.getArg(t,"line"),generatedColumn:r.getArg(t,"column")},n=this._findMapping(e,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(t,"bias",u.GREATEST_LOWER_BOUND));if(n>=0){var i=this._generatedMappings[n];if(i.generatedLine===e.generatedLine){var o=r.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),o=r.computeSourceURL(this.sourceRoot,o,this._sourceMapURL));var s=r.getArg(i,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:r.getArg(i,"originalLine",null),column:r.getArg(i,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(t){return null==t})))},h.prototype.sourceContentFor=function(t,e){if(!this.sourcesContent)return null;var n=this._findSourceIndex(t);if(n>=0)return this.sourcesContent[n];var i,o=t;if(null!=this.sourceRoot&&(o=r.relative(this.sourceRoot,o)),null!=this.sourceRoot&&(i=r.urlParse(this.sourceRoot))){var s=o.replace(/^file:\/\//,"");if("file"==i.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!i.path||"/"==i.path)&&this._sources.has("/"+o))return this.sourcesContent[this._sources.indexOf("/"+o)]}if(e)return null;throw new Error('"'+o+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(t){var e=r.getArg(t,"source");if((e=this._findSourceIndex(e))<0)return{line:null,column:null,lastColumn:null};var n={source:e,originalLine:r.getArg(t,"line"),originalColumn:r.getArg(t,"column")},i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(t,"bias",u.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===n.source)return{line:r.getArg(o,"generatedLine",null),column:r.getArg(o,"generatedColumn",null),lastColumn:r.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},d.prototype=Object.create(u.prototype),d.prototype.constructor=u,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var t=[],e=0;e<this._sections.length;e++)for(var n=0;n<this._sections[e].consumer.sources.length;n++)t.push(this._sections[e].consumer.sources[n]);return t}}),d.prototype.originalPositionFor=function(t){var e={generatedLine:r.getArg(t,"line"),generatedColumn:r.getArg(t,"column")},n=s.search(e,this._sections,(function(t,e){var n=t.generatedLine-e.generatedOffset.generatedLine;return n||t.generatedColumn-e.generatedOffset.generatedColumn})),i=this._sections[n];return i?i.consumer.originalPositionFor({line:e.generatedLine-(i.generatedOffset.generatedLine-1),column:e.generatedColumn-(i.generatedOffset.generatedLine===e.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:t.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(t){return t.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(t,e){for(var n=0;n<this._sections.length;n++){var i=this._sections[n].consumer.sourceContentFor(t,!0);if(i)return i}if(e)return null;throw new Error('"'+t+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(t){for(var e=0;e<this._sections.length;e++){var n=this._sections[e];if(-1!==n.consumer._findSourceIndex(r.getArg(t,"source"))){var i=n.consumer.generatedPositionFor(t);if(i)return{line:i.line+(n.generatedOffset.generatedLine-1),column:i.column+(n.generatedOffset.generatedLine===i.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(t,e){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var i=this._sections[n],o=i.consumer._generatedMappings,s=0;s<o.length;s++){var a=o[s],l=i.consumer._sources.at(a.source);l=r.computeSourceURL(i.consumer.sourceRoot,l,this._sourceMapURL),this._sources.add(l),l=this._sources.indexOf(l);var u=null;a.name&&(u=i.consumer._names.at(a.name),this._names.add(u),u=this._names.indexOf(u));var h={source:l,generatedLine:a.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(i.generatedOffset.generatedLine===a.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:u};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}c(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),c(this.__originalMappings,r.compareByOriginalPositions)}})),o.register("bTtvB",(function(e,n){var i,r,o;function s(t,e,n,i,o,a){var l=Math.floor((e-t)/2)+t,c=o(n,i[l],!0);return 0===c?l:c>0?e-l>1?s(l,e,n,i,o,a):a==r?e<i.length?e:-1:l:l-t>1?s(t,l,n,i,o,a):a==r?l:t<0?-1:t}t(e.exports,"GREATEST_LOWER_BOUND",(function(){return i}),(function(t){return i=t})),t(e.exports,"LEAST_UPPER_BOUND",(function(){return r}),(function(t){return r=t})),t(e.exports,"search",(function(){return o}),(function(t){return o=t})),i=1,r=2,o=function(t,e,n,r){if(0===e.length)return-1;var o=s(-1,e.length,t,e,n,r||i);if(o<0)return-1;for(;o-1>=0&&0===n(e[o],e[o-1],!0);)--o;return o}})),o.register("76ffZ",(function(e,n){var i;function r(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function o(t,e,n,i){if(n<i){var s=n-1;r(t,(u=n,h=i,Math.round(u+Math.random()*(h-u))),i);for(var a=t[i],l=n;l<i;l++)e(t[l],a)<=0&&r(t,s+=1,l);r(t,s+1,l);var c=s+1;o(t,e,n,c-1),o(t,e,c+1,i)}var u,h}t(e.exports,"quickSort",(function(){return i}),(function(t){return i=t})),i=function(t,e){o(t,e,0,t.length-1)}})),o.register("Tx9qF",(function(e,n){var i;t(e.exports,"SourceNode",(function(){return i}),(function(t){return i=t}));var r=o("ic7WM").SourceMapGenerator,s=o("dQK2c"),a=/(\r?\n)/;function l(t,e,n,i,r){this.children=[],this.sourceContents={},this.line=null==t?null:t,this.column=null==e?null:e,this.source=null==n?null:n,this.name=null==r?null:r,this.$$$isSourceNode$$$=!0,null!=i&&this.add(i)}l.fromStringWithSourceMap=function(t,e,n){var i=new l,r=t.split(a),o=0,c=function(){return t()+(t()||"");function t(){return o<r.length?r[o++]:void 0}},u=1,h=0,p=null;return e.eachMapping((function(t){if(null!==p){if(!(u<t.generatedLine)){var e=(n=r[o]||"").substr(0,t.generatedColumn-h);return r[o]=n.substr(t.generatedColumn-h),h=t.generatedColumn,d(p,e),void(p=t)}d(p,c()),u++,h=0}for(;u<t.generatedLine;)i.add(c()),u++;if(h<t.generatedColumn){var n=r[o]||"";i.add(n.substr(0,t.generatedColumn)),r[o]=n.substr(t.generatedColumn),h=t.generatedColumn}p=t}),this),o<r.length&&(p&&d(p,c()),i.add(r.splice(o).join(""))),e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=s.join(n,t)),i.setSourceContent(t,r))})),i;function d(t,e){if(null===t||void 0===t.source)i.add(e);else{var r=n?s.join(n,t.source):t.source;i.add(new l(t.originalLine,t.originalColumn,r,e,t.name))}}},l.prototype.add=function(t){if(Array.isArray(t))t.forEach((function(t){this.add(t)}),this);else{if(!t.$$$isSourceNode$$$&&"string"!=typeof t)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);t&&this.children.push(t)}return this},l.prototype.prepend=function(t){if(Array.isArray(t))for(var e=t.length-1;e>=0;e--)this.prepend(t[e]);else{if(!t.$$$isSourceNode$$$&&"string"!=typeof t)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);this.children.unshift(t)}return this},l.prototype.walk=function(t){for(var e,n=0,i=this.children.length;n<i;n++)(e=this.children[n]).$$$isSourceNode$$$?e.walk(t):""!==e&&t(e,{source:this.source,line:this.line,column:this.column,name:this.name})},l.prototype.join=function(t){var e,n,i=this.children.length;if(i>0){for(e=[],n=0;n<i-1;n++)e.push(this.children[n]),e.push(t);e.push(this.children[n]),this.children=e}return this},l.prototype.replaceRight=function(t,e){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(t,e):"string"==typeof n?this.children[this.children.length-1]=n.replace(t,e):this.children.push("".replace(t,e)),this},l.prototype.setSourceContent=function(t,e){this.sourceContents[s.toSetString(t)]=e},l.prototype.walkSourceContents=function(t){for(var e=0,n=this.children.length;e<n;e++)this.children[e].$$$isSourceNode$$$&&this.children[e].walkSourceContents(t);var i=Object.keys(this.sourceContents);for(e=0,n=i.length;e<n;e++)t(s.fromSetString(i[e]),this.sourceContents[i[e]])},l.prototype.toString=function(){var t="";return this.walk((function(e){t+=e})),t},l.prototype.toStringWithSourceMap=function(t){var e={code:"",line:1,column:0},n=new r(t),i=!1,o=null,s=null,a=null,l=null;return this.walk((function(t,r){e.code+=t,null!==r.source&&null!==r.line&&null!==r.column?(o===r.source&&s===r.line&&a===r.column&&l===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:e.line,column:e.column},name:r.name}),o=r.source,s=r.line,a=r.column,l=r.name,i=!0):i&&(n.addMapping({generated:{line:e.line,column:e.column}}),o=null,i=!1);for(var c=0,u=t.length;c<u;c++)10===t.charCodeAt(c)?(e.line++,e.column=0,c+1===u?(o=null,i=!1):i&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:e.line,column:e.column},name:r.name})):e.column++})),this.walkSourceContents((function(t,e){n.setSourceContent(t,e)})),{code:e.code,map:n}},i=l})),o.register("5Io6y",(function(t,e){})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.7c29ed61.js","lp5u4":"sprite.0d6d8de2.svg","7mVsD":"index.4831b839.css"}'));var s,a,l,c=s={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function p(t){if(a===setTimeout)return setTimeout(t,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(t){a=u}try{l="function"==typeof clearTimeout?clearTimeout:h}catch(t){l=h}}();var d,f=[],m=!1,g=-1;function y(){m&&d&&(m=!1,d.length?f=d.concat(f):g=-1,f.length&&v())}function v(){if(!m){var t=p(y);m=!0;for(var e=f.length;e;){for(d=f,f=[];++g<e;)d&&d[g].run();g=-1,e=f.length}d=null,m=!1,function(t){if(l===clearTimeout)return clearTimeout(t);if((l===h||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function w(){}c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new b(t,e)),1!==f.length||m||p(v)},b.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=w,c.addListener=w,c.once=w,c.off=w,c.removeListener=w,c.removeAllListeners=w,c.emit=w,c.prependListener=w,c.prependOnceListener=w,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|l>>6,p=63&l;a||(p=64,o||(h=64)),i.push(n[c],n[u],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==o||null==s||null==a)throw new _;const l=r<<2|o>>4;if(i.push(l),64!==s){const t=o<<4&240|s>>2;if(i.push(t),64!==a){const t=s<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S=function(t){return function(t){const e=x(t);return k.encodeByteArray(e,!0)}(t).replace(/\./g,"")},I=function(t){try{return k.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,C=()=>{try{return E()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&I(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},N=t=>{var e,n;return null===(n=null===(e=C())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},T=t=>{const e=N(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},A=t=>{var e;return null===(e=C())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function P(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function M(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function D(){try{return"object"==typeof indexedDB}catch(t){return!1}}class B extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(z,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new B(i,s,n)}}const z=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function j(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],o=e[r];if(H(n)&&H(o)){if(!j(n,o))return!1}else if(n!==o)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function H(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function V(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e){const n=new K(t,e);return n.subscribe.bind(n)}class K{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=q),void 0===i.error&&(i.error=q),void 0===i.complete&&(i.complete=q);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){return t&&t._delegate?t._delegate:t}class J{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=[];var tt,et;(et=tt||(tt={}))[et.DEBUG=0]="DEBUG",et[et.VERBOSE=1]="VERBOSE",et[et.INFO=2]="INFO",et[et.WARN=3]="WARN",et[et.ERROR=4]="ERROR",et[et.SILENT=5]="SILENT";const nt={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},it=tt.INFO,rt={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},ot=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=rt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class st{constructor(t){this.name=t,this._logLevel=it,this._logHandler=ot,this._userLogHandler=null,Z.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?nt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}let at,lt;const ct=new WeakMap,ut=new WeakMap,ht=new WeakMap,pt=new WeakMap,dt=new WeakMap;let ft={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ut.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ht.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function mt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(vt(this),e),yt(ct.get(this))}:function(...e){return yt(t.apply(vt(this),e))}:function(e,...n){const i=t.call(vt(this),e,...n);return ht.set(i,e.sort?e.sort():[e]),yt(i)}}function gt(t){return"function"==typeof t?mt(t):(t instanceof IDBTransaction&&function(t){if(ut.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));ut.set(t,e)}(t),e=t,(at||(at=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ft):t);var e}function yt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(yt(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&ct.set(e,t)})).catch((()=>{})),dt.set(e,t),e}(t);if(pt.has(t))return pt.get(t);const e=gt(t);return e!==t&&(pt.set(t,e),dt.set(e,t)),e}const vt=t=>dt.get(t);function bt(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=yt(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(yt(s.result),t.oldVersion,t.newVersion,yt(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const wt=["get","getKey","getAll","getAllKeys","count"],xt=["put","add","delete","clear"],kt=new Map;function _t(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(kt.get(e))return kt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=xt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!wt.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),r&&o.done]))[0]};return kt.set(e,o),o}ft=(t=>({...t,get:(e,n,i)=>_t(e,n)||t.get(e,n,i),has:(e,n)=>!!_t(e,n)||t.has(e,n)}))(ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const It=new st("@firebase/app"),Et={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ct=new Map,Nt=new Map;function Tt(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(Nt.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Nt.set(e,t);for(const e of Ct.values())Tt(e,t);return!0}function Lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=new U("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new J("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Rt.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=C())||void 0===o?void 0:o.config),!n)throw Rt.create("no-options");const s=Ct.get(r);if(s){if(j(n,s.options)&&j(i,s.config))return s;throw Rt.create("duplicate-app",{appName:r})}const a=new Q(r);for(const t of Nt.values())a.addComponent(t);const l=new Ot(n,i,a);return Ct.set(r,l),l}function Mt(t="[DEFAULT]"){const e=Ct.get(t);if(!e&&"[DEFAULT]"===t)return Pt();if(!e)throw Rt.create("no-app",{appName:t});return e}function Dt(t,e,n){var i;let r=null!==(i=Et[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void It.warn(t.join(" "))}At(new J(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let Bt=null;function Ut(){return Bt||(Bt=bt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})}))),Bt}async function zt(t,e){try{const n=(await Ut()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,Ft(t)),n.done}catch(t){if(t instanceof B)It.warn(t.message);else{const e=Rt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});It.warn(e.message)}}}function Ft(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Ht();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ht(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),$t(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$t(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=S(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ht(){return(new Date).toISOString().substring(0,10)}class Wt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!D()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Ut()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ft(t))}catch(t){if(t instanceof B)It.warn(t.message);else{const e=Rt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});It.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return zt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return zt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function $t(t){return S(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;Vt="",At(new J("platform-logger",(t=>new St(t)),"PRIVATE")),At(new J("heartbeat",(t=>new jt(t)),"PRIVATE")),Dt("@firebase/app","0.9.7",Vt),Dt("@firebase/app","0.9.7","esm2017"),Dt("fire-js","");function Xt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function Kt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qt=Kt,Gt=new U("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Jt=new st("@firebase/auth");function Yt(t,...e){Jt.logLevel<=tt.ERROR&&Jt.error(`Auth (9.19.1): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw ee(t,...e)}function Zt(t,...e){return ee(t,...e)}function te(t,e,n){const i=Object.assign(Object.assign({},qt()),{[e]:n});return new U("auth","Firebase",i).create(e,{appName:t.name})}function ee(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Gt.create(t,...e)}function ne(t,e,...n){if(!t)throw ee(e,...n)}function ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yt(e),new Error(e)}function re(t,e){t||ie(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Map;function se(t){re(t instanceof Function,"Expected a class definition");let e=oe.get(t);return e?(re(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oe.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function le(){return"http:"===ce()||"https:"===ce()}function ce(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(le()||P()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t,e){this.shortDelay=t,this.longDelay=e,re(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ue()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,e){re(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},me=new he(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ye(t,e,n,i,r={}){return ve(t,r,(async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const s=W(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),de.fetch()(we(t,t.config.apiHost,n,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function ve(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},fe),e);try{const e=new xe(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ke(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ke(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw ke(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw ke(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw te(t,a,s);Qt(t,a)}}catch(e){if(e instanceof B)throw e;Qt(t,"network-request-failed",{message:String(e)})}}async function be(t,e,n,i,r={}){const o=await ye(t,e,n,i,r);return"mfaPendingCredential"in o&&Qt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function we(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?pe(t.config,r):`${t.config.apiScheme}://${r}`}class xe{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Zt(this.auth,"network-request-failed"))),me.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ke(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Zt(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return 1e3*Number(t)}function Ie(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Yt("JWT malformed, contained fewer than 3 sections"),null;try{const t=I(n);return t?JSON.parse(t):(Yt("Failed to decode base64 JWT payload"),null)}catch(t){return Yt("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof B&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ce{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=_e(this.lastLoginAt),this.creationTime=_e(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ee(t,async function(t,e){return ye(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));ne(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((t=>{var{providerId:e}=t,n=Xt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,h=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),p=!!u&&h,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ne(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ne(t.idToken,"internal-error"),ne(void 0!==t.idToken,"internal-error"),ne(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ie(t);return ne(e,"internal-error"),ne(void 0!==e.exp,"internal-error"),ne(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ne(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await ve(t,{},(async()=>{const n=W({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=we(t,i,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",de.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,o=new Ae;return n&&(ne("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(ne("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),r&&(ne("number"==typeof r,"internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ae,this.toJSON())}_performRefresh(){return ie("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){ne("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Re{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=Xt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ce(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ne(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Ee(this,this.stsTokenManager.getToken(this.auth,t));return ne(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=G(t),i=await n.getIdToken(e),r=Ie(i);ne(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:_e(Se(r.auth_time)),issuedAtTime:_e(Se(r.iat)),expirationTime:_e(Se(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=G(t);await Te(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ne(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Re(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ee(this,async function(t,e){return ye(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,o,s,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,p=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,f=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;ne(v&&k,t,"internal-error");const _=Ae.fromJSON(this.name,k);ne("string"==typeof v,t,"internal-error"),Le(u,t.name),Le(h,t.name),ne("boolean"==typeof b,t,"internal-error"),ne("boolean"==typeof w,t,"internal-error"),Le(p,t.name),Le(d,t.name),Le(f,t.name),Le(m,t.name),Le(g,t.name),Le(y,t.name);const S=new Re({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:d,phoneNumber:p,tenantId:f,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(S.providerData=x.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new Ae;i.updateFromServerResponse(e);const r=new Re({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Te(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Oe.type="NONE";const Pe=Oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e,n){return`firebase:${t}:${e}:${n}`}class De{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Me(this.userKey,i.apiKey,r),this.fullPersistenceKey=Me("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Re._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new De(se(Pe),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||se(Pe);const o=Me(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(o);if(e){const i=Re._fromJSON(t,e);n!==r&&(s=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(o)}catch(t){}}))),new De(r,t,n)):new De(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(je(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ue(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(We(e))return"Blackberry";if($e(e))return"Webos";if(ze(e))return"Safari";if((e.includes("chrome/")||Fe(e))&&!e.includes("edge/"))return"Chrome";if(He(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ue(t=O()){return/firefox\//i.test(t)}function ze(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fe(t=O()){return/crios\//i.test(t)}function je(t=O()){return/iemobile/i.test(t)}function He(t=O()){return/android/i.test(t)}function We(t=O()){return/blackberry/i.test(t)}function $e(t=O()){return/webos/i.test(t)}function Ve(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xe(){return M()&&10===document.documentMode}function Ke(t=O()){return Ve(t)||He(t)||$e(t)||We(t)||/windows phone/i.test(t)||je(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(t,e=[]){let n;switch(t){case"Browser":n=Be(O());break;case"Worker":n=`${Be(O())}-${t}`;break;default:n=t}return`${n}/JsCore/9.19.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qe(this),this.idTokenSubscription=new Qe(this),this.beforeStateQueue=new Ge(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=se(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await De.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Te(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?G(t):null;return e&&ne(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ne(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(se(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new U("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&se(t)||this._popupRedirectResolver;ne(e,this,"argument-error"),this.redirectPersistenceManager=await De.create(this,[se(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ye(t){return G(t)}class Qe{constructor(t){this.auth=t,this.observer=null,this.addObserver=X((t=>this.observer=t))}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ze(t,e,n){const i=Ye(t);ne(i._canInitEmulator,i,"emulator-config-failed"),ne(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=tn(e),{host:s,port:a}=function(t){const e=tn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:en(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:en(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function tn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function en(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class nn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ie("not implemented")}_getIdTokenResponse(t){return ie("not implemented")}_linkToIdToken(t,e){return ie("not implemented")}_getReauthenticationResolver(t){return ie("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e){return ye(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on extends nn{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new on(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new on(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return be(t,"POST","/v1/accounts:signInWithPassword",ge(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return be(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}(t,{email:this._email,oobCode:this._password});default:Qt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return rn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return be(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Qt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e){return be(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends nn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new an(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Qt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=Xt(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new an(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){return sn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,sn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,sn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=W(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn extends nn{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new cn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new cn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return be(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await be(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e));if(n.temporaryProof)throw ke(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return be(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),ln)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new cn({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){var e,n,i,r,o,s;const a=$(V(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ne(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(t){const e=function(t){const e=$(V(t)).link,n=e?$(V(e)).deep_link_id:null,i=$(V(t)).deep_link_id;return(i?$(V(i)).link:null)||i||n||e||t}(t);try{return new un(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(t,e){return on._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=un.parseLink(e);return ne(n,"argument-error"),on._fromEmailAndCode(t,n.code,n.tenantId)}}hn.PROVIDER_ID="password",hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends pn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn extends dn{constructor(){super("facebook.com")}static credential(t){return an._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fn.credential(t.oauthAccessToken)}catch(t){return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com",fn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn extends dn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return an._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return mn.credential(e,n)}catch(t){return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com",mn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn extends dn{constructor(){super("github.com")}static credential(t){return an._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return gn.credential(t.oauthAccessToken)}catch(t){return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com",gn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends dn{constructor(){super("twitter.com")}static credential(t,e){return an._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return yn.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vn(t,e){return be(t,"POST","/v1/accounts:signUp",ge(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.TWITTER_SIGN_IN_METHOD="twitter.com",yn.PROVIDER_ID="twitter.com";class bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Re._fromIdTokenResponse(t,n,i),o=wn(n);return new bn({user:r,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=wn(n);return new bn({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function wn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn extends B{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,xn.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new xn(t,e,n,i)}}function kn(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xn._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t,e,n=!1){const i=await Ee(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Sn(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const o=await Ee(t,kn(i,r,e,t),n);ne(o.idToken,i,"internal-error");const s=Ie(o.idToken);ne(s,i,"internal-error");const{sub:a}=s;return ne(t.uid===a,i,"user-mismatch"),bn._forOperation(t,r,o)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Qt(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e,n=!1){const i="signIn",r=await kn(t,i,e),o=await bn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}async function En(t,e){return In(Ye(t),e)}async function Cn(t,e,n){const i=Ye(t),r=await vn(i,{returnSecureToken:!0,email:e,password:n}),o=await bn._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function Nn(t,e,n){return En(G(t),hn.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Tn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=O();return ze(t)||Ve(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ke(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Xe()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}An.type="LOCAL";const Ln=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Tn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Rn.type="SESSION";const On=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Pn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.receivers=[];class Dn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=Mn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(){return void 0!==Bn().WorkerGlobalScope&&"function"==typeof Bn().importScripts}class zn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Fn(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function jn(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new zn(t).toPromise()}(),e(await jn()))}))}))}async function Hn(t,e,n){const i=Fn(t,!0).put({fbase_key:e,value:n});return new zn(i).toPromise()}function Wn(t,e){const n=Fn(t,!0).delete(e);return new zn(n).toPromise()}class $n{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await jn()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(Un()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Dn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await jn();return await Hn(t,"__sak","1"),await Wn(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Hn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Fn(t,!1).get(e),i=await new zn(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Wn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Fn(t,!1).getAll();return new zn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$n.type="LOCAL";const Vn=$n;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Zt("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function Kn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kn("rcb"),new he(3e4,6e4);async function qn(t,e,n){var i;const r=await n.verify();try{let o;if(ne("string"==typeof r,t,"argument-error"),ne("recaptcha"===n.type,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){ne("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return ye(t,"POST","/v2/accounts/mfaEnrollment:start",ge(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ne("signin"===e.type,t,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;ne(n,t,"missing-multi-factor-info");const s=await function(t,e){return ye(t,"POST","/v2/accounts/mfaSignIn:start",ge(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return ye(t,"POST","/v1/accounts:sendVerificationCode",ge(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(t){this.providerId=Gn.PROVIDER_ID,this.auth=Ye(t)}verifyPhoneNumber(t,e){return qn(this.auth,t,G(e))}static credential(t,e){return cn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Gn.credentialFromTaggedObject(e)}static credentialFromError(t){return Gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?cn._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(t,e){return e?se(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.PROVIDER_ID="phone",Gn.PHONE_SIGN_IN_METHOD="phone";class Yn extends nn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return sn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return sn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return sn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Qn(t){return In(t.auth,new Yn(t),t.bypassAuthState)}function Zn(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Sn(n,new Yn(t),t.bypassAuthState)}async function ti(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),_n(n,new Yn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Qn;case"linkViaPopup":case"linkViaRedirect":return ti;case"reauthViaPopup":case"reauthViaRedirect":return Zn;default:Qt(this.auth,"internal-error")}}resolve(t){re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new he(2e3,1e4);class ii extends ei{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ne(t,this.auth,"internal-error"),t}async onExecution(){re(1===this.filter.length,"Popup operations only handle one event");const t=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ni.get())};t()}}ii.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ri=new Map;class oi extends ei{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=ri.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=li(e),i=ai(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}ri.set(this.auth._key(),t)}return this.bypassAuthState||ri.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function si(t,e){ri.set(t._key(),e)}function ai(t){return se(t._redirectPersistence)}function li(t){return Me("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e,n=!1){const i=Ye(t),r=Jn(i,e),o=new oi(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class ui{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pi(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!pi(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Zt(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hi(t))}saveEventToCache(t){this.cachedEventUids.add(hi(t)),this.lastProcessedEventTime=Date.now()}}function hi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function pi({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fi=/^https?/;async function mi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return ye(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(gi(t))return}catch(t){}Qt(t,"unauthorized-domain")}function gi(t){const e=ae(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!fi.test(n))return!1;if(di.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new he(3e4,6e4);function vi(){const t=Bn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let bi=null;function wi(t){return bi=bi||function(t){return new Promise(((e,n)=>{var i,r,o;function s(){vi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vi(),n(Zt(t,"network-request-failed"))},timeout:yi.get()})}if(null===(r=null===(i=Bn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Bn().gapi)||void 0===o?void 0:o.load)){const e=Kn("iframefcb");return Bn()[e]=()=>{gapi.load?s():n(Zt(t,"network-request-failed"))},Xn(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw bi=null,t}))}(t),bi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new he(5e3,15e3),ki={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_i=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Si(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pe(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.19.1"},r=_i.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${W(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ei{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ci(t,e,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ii),{width:i.toString(),height:r.toString(),top:o,left:s}),c=O().toLowerCase();n&&(a=Fe(c)?"_blank":n),Ue(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=O()){var e;return Ve(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Ei(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Ei(h)}function Ni(t,e,n,i,r,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.19.1",eventId:r};if(e instanceof pn){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",F(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof dn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?pe(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${W(a).slice(1)}`}const Ti=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=On,this._completeRedirectFn=ci,this._overrideRedirectResult=si}async _openPopup(t,e,n,i){var r;re(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Ci(t,Ni(t,e,n,ae(),i),Mn())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=Ni(t,e,n,ae(),i),Bn().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(re(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await wi(t),n=Bn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:Si(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ki,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=Zt(t,"network-request-failed"),o=Bn().setTimeout((()=>{i(r)}),xi.get());function s(){Bn().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{i(r)}))}))))}(t),n=new ui(t);return e.register("authEvent",(e=>{ne(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),Qt(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=mi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ke()||ze()||Ve()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Li=A("authIdTokenMaxAge")||300;let Ri=null;var Oi;Oi="Browser",At(new J("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((t,n)=>{ne(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),ne(!(null==o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:o,clientPlatform:Oi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(Oi)},s=new Je(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(se);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),At(new J("auth-internal",(t=>{const e=Ye(t.getProvider("auth").getImmediate());return new Ai(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Dt("@firebase/auth","0.22.0",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Oi)),Dt("@firebase/auth","0.22.0","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Dt("firebase","9.19.1","app");var Pi,Mi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},Di={},Bi=Bi||{},Ui=Mi||self;function zi(){}function Fi(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ji(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Hi="closure_uid_"+(1e9*Math.random()>>>0),Wi=0;function $i(t,e,n){return t.call.apply(t.bind,arguments)}function Vi(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Xi(t,e,n){return(Xi=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?$i:Vi).apply(null,arguments)}function Ki(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function qi(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[n].apply(t,r)}}function Gi(){this.s=this.s,this.o=this.o}Gi.prototype.s=!1,Gi.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Hi)&&t[Hi]||(t[Hi]=++Wi))},Gi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ji=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yi(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Qi(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Fi(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function Zi(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Zi.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!Ui.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ui.addEventListener("test",zi,e),Ui.removeEventListener("test",zi,e)}catch(t){}return t}();function er(t){return/^[\s\xa0]*$/.test(t)}var nr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ir(t,e){return t<e?-1:t>e?1:0}function rr(){var t=Ui.navigator;return t&&(t=t.userAgent)?t:""}function or(t){return-1!=rr().indexOf(t)}function sr(t){return sr[" "](t),t}sr[" "]=zi;var ar,lr,cr=or("Opera"),ur=or("Trident")||or("MSIE"),hr=or("Edge"),pr=hr||ur,dr=or("Gecko")&&!(-1!=rr().toLowerCase().indexOf("webkit")&&!or("Edge"))&&!(or("Trident")||or("MSIE"))&&!or("Edge"),fr=-1!=rr().toLowerCase().indexOf("webkit")&&!or("Edge");function mr(){var t=Ui.document;return t?t.documentMode:void 0}t:{var gr="",yr=(lr=rr(),dr?/rv:([^\);]+)(\)|;)/.exec(lr):hr?/Edge\/([\d\.]+)/.exec(lr):ur?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(lr):fr?/WebKit\/(\S+)/.exec(lr):cr?/(?:Version)[ \/]?(\S+)/.exec(lr):void 0);if(yr&&(gr=yr?yr[1]:""),ur){var vr=mr();if(null!=vr&&vr>parseFloat(gr)){ar=String(vr);break t}}ar=gr}var br,wr={};function xr(){return function(t){var e=wr;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=nr(String(ar)).split("."),n=nr("9").split("."),i=Math.max(e.length,n.length);for(let s=0;0==t&&s<i;s++){var r=e[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==r[0].length&&0==o[0].length)break;t=ir(0==r[1].length?0:parseInt(r[1],10),0==o[1].length?0:parseInt(o[1],10))||ir(0==r[2].length,0==o[2].length)||ir(r[2],o[2]),r=r[3],o=o[3]}while(0==t)}return 0<=t}))}if(Ui.document&&ur){var kr=mr();br=kr||(parseInt(ar,10)||void 0)}else br=void 0;var _r=br;function Sr(t,e){if(Zi.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dr){t:{try{sr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ir[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sr.X.h.call(this)}}qi(Sr,Zi);var Ir={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Er="closure_listenable_"+(1e6*Math.random()|0),Cr=0;function Nr(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++Cr,this.ba=this.ea=!1}function Tr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ar(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Lr(t){const e={};for(const n in t)e[n]=t[n];return e}const Rr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Rr.length;e++)n=Rr[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Pr(t){this.src=t,this.g={},this.h=0}function Mr(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],o=Ji(r,e);(i=0<=o)&&Array.prototype.splice.call(r,o,1),i&&(Tr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Dr(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==i)return r}return-1}Pr.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=Dr(t,e,i,r);return-1<s?(e=t[s],n||(e.ea=!1)):((e=new Nr(e,this.src,o,!!i,r)).ea=n,t.push(e)),e};var Br="closure_lm_"+(1e6*Math.random()|0),Ur={};function zr(t,e,n,i,r){if(i&&i.once)return jr(t,e,n,i,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)zr(t,e[o],n,i,r);return null}return n=qr(n),t&&t[Er]?t.N(e,n,ji(i)?!!i.capture:!!i,r):Fr(t,e,n,!1,i,r)}function Fr(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var s=ji(r)?!!r.capture:!!r,a=Xr(t);if(a||(t[Br]=a=new Pr(t)),(n=a.add(e,n,i,s,o)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Vr;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)tr||(r=s),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent($r(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function jr(t,e,n,i,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)jr(t,e[o],n,i,r);return null}return n=qr(n),t&&t[Er]?t.O(e,n,ji(i)?!!i.capture:!!i,r):Fr(t,e,n,!0,i,r)}function Hr(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)Hr(t,e[o],n,i,r);else i=ji(i)?!!i.capture:!!i,n=qr(n),t&&t[Er]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Dr(o=t.g[e],n,i,r))&&(Tr(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Xr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dr(e,n,i,r)),(n=-1<t?e[t]:null)&&Wr(n))}function Wr(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Er])Mr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent($r(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Xr(e))?(Mr(n,t),0==n.h&&(n.src=null,e[Br]=null)):Tr(t)}}}function $r(t){return t in Ur?Ur[t]:Ur[t]="on"+t}function Vr(t,e){if(t.ba)t=!0;else{e=new Sr(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Wr(t),t=n.call(i,e)}return t}function Xr(t){return(t=t[Br])instanceof Pr?t:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function qr(t){return"function"==typeof t?t:(t[Kr]||(t[Kr]=function(e){return t.handleEvent(e)}),t[Kr])}function Gr(){Gi.call(this),this.i=new Pr(this),this.P=this,this.I=null}function Jr(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Zi(e,t);else if(e instanceof Zi)e.target=e.target||t;else{var r=e;Or(e=new Zi(i,t),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];r=Yr(s,i,!0,e)&&r}if(r=Yr(s=e.g=t,i,!0,e)&&r,r=Yr(s,i,!1,e)&&r,n)for(o=0;o<n.length;o++)r=Yr(s=e.g=n[o],i,!1,e)&&r}function Yr(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Mr(t.i,s),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}qi(Gr,Gi),Gr.prototype[Er]=!0,Gr.prototype.removeEventListener=function(t,e,n,i){Hr(this,t,e,n,i)},Gr.prototype.M=function(){if(Gr.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Tr(n[i]);delete e.g[t],e.h--}}this.I=null},Gr.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Gr.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Qr=Ui.JSON.stringify;function Zr(){var t=so;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var to,eo=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new no),(t=>t.reset()));class no{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function io(t){Ui.setTimeout((()=>{throw t}),0)}function ro(t,e){to||function(){var t=Ui.Promise.resolve(void 0);to=function(){t.then(ao)}}(),oo||(to(),oo=!0),so.add(t,e)}var oo=!1,so=new class{constructor(){this.h=this.g=null}add(t,e){const n=eo.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function ao(){for(var t;t=Zr();){try{t.h.call(t.g)}catch(t){io(t)}var e=eo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1}function lo(t,e){Gr.call(this),this.h=t||1,this.g=e||Ui,this.j=Xi(this.lb,this),this.l=Date.now()}function co(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function uo(t,e,n){if("function"==typeof t)n&&(t=Xi(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Xi(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ui.setTimeout(t,e||0)}function ho(t){t.g=uo((()=>{t.g=null,t.i&&(t.i=!1,ho(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}qi(lo,Gr),(Pi=lo.prototype).ca=!1,Pi.R=null,Pi.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Jr(this,"tick"),this.ca&&(co(this),this.start()))}},Pi.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Pi.M=function(){lo.X.M.call(this),co(this),delete this.g};class po extends Gi{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ho(this)}M(){super.M(),this.g&&(Ui.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(t){Gi.call(this),this.h=t,this.g={}}qi(fo,Gi);var mo=[];function go(t,e,n,i){Array.isArray(n)||(n&&(mo[0]=n.toString()),n=mo);for(var r=0;r<n.length;r++){var o=zr(e,n[r],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function yo(t){Ar(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Wr(t)}),t),t.g={}}function vo(){this.g=!0}function bo(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}return Qr(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}fo.prototype.M=function(){fo.X.M.call(this),yo(this)},fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},vo.prototype.Aa=function(){this.g=!1},vo.prototype.info=function(){};var wo={},xo=null;function ko(){return xo=xo||new Gr}function _o(t){Zi.call(this,wo.Pa,t)}function So(t){const e=ko();Jr(e,new _o(e))}function Io(t,e){Zi.call(this,wo.STAT_EVENT,t),this.stat=e}function Eo(t){const e=ko();Jr(e,new Io(e,t))}function Co(t,e){Zi.call(this,wo.Qa,t),this.size=e}function No(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ui.setTimeout((function(){t()}),e)}wo.Pa="serverreachability",qi(_o,Zi),wo.STAT_EVENT="statevent",qi(Io,Zi),wo.Qa="timingevent",qi(Co,Zi);var To={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ao={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Lo(){}function Ro(t){return t.h||(t.h=t.i())}function Oo(){}Lo.prototype.h=null;var Po,Mo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Do(){Zi.call(this,"d")}function Bo(){Zi.call(this,"c")}function Uo(){}function zo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new fo(this),this.O=jo,t=pr?125:void 0,this.T=new lo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Fo}function Fo(){this.i=null,this.g="",this.h=!1}qi(Do,Zi),qi(Bo,Zi),qi(Uo,Lo),Uo.prototype.g=function(){return new XMLHttpRequest},Uo.prototype.i=function(){return{}},Po=new Uo;var jo=45e3,Ho={},Wo={};function $o(t,e,n){t.K=1,t.v=cs(rs(e)),t.s=n,t.P=!0,Vo(t,null)}function Vo(t,e){t.F=Date.now(),Go(t),t.A=rs(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),ks(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Fo,t.g=xa(t.l,n?e:null,!t.s),0<t.N&&(t.L=new po(Xi(t.La,t,t.g),t.N)),go(t.S,t.g,"readystatechange",t.ib),e=t.H?Lr(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),So(),function(t,e,n,i,r,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+c+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function Xo(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ko(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=qo(t,n),i==Wo){4==e&&(t.o=4,Eo(14),r=!1),bo(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ho){t.o=4,Eo(15),bo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}bo(t.j,t.m,i,null),ts(t,i)}Xo(t)&&i!=Wo&&i!=Ho&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Eo(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),da(e),e.K=!0,Eo(11))):(bo(t.j,t.m,n,"[Invalid Chunked Response]"),Zo(t),Qo(t))}function qo(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Wo:(n=Number(e.substring(n,i)),isNaN(n)?Ho:(i+=1)+n>e.length?Wo:(e=e.substr(i,n),t.C=i+n,e))}function Go(t){t.V=Date.now()+t.O,Jo(t,t.O)}function Jo(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=No(Xi(t.gb,t),e)}function Yo(t){t.B&&(Ui.clearTimeout(t.B),t.B=null)}function Qo(t){0==t.l.G||t.I||ga(t.l,t)}function Zo(t){Yo(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,co(t.T),yo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ts(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ns(n.h,t)))if(!t.J&&Ns(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ma(n),oa(n)}pa(n),Eo(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=No(Xi(n.cb,n),6e3));if(1>=Cs(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else va(n,11)}else if((t.J||n.g==t)&&ma(n),!er(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=i.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Ts(o,o.h),o.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,ls(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=t;if((i=n).sa=wa(i,i.H?i.ka:null,i.V),s.J){As(i.h,s);var a=s,l=i.J;l&&a.setTimeout(l),a.B&&(Yo(a),Go(a)),i.g=s}else ha(i);0<n.i.length&&aa(n)}else"stop"!=c[0]&&"close"!=c[0]||va(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?va(n,7):ra(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}So()}catch(t){}}function es(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Fi(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Fi(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Fi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(Pi=zo.prototype).setTimeout=function(t){this.O=t},Pi.ib=function(t){t=t.target;const e=this.L;e&&3==Qs(t)?e.l():this.La(t)},Pi.La=function(t){try{if(t==this.g)t:{const u=Qs(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||pr||this.g&&(this.h.h||this.g.fa()||Zs(this.g)))){this.I||4!=u||7==e||So(),Yo(this);var n=this.g.aa();this.Y=n;e:if(Xo(this)){var i=Zs(this.g);t="";var r=i.length,o=4==Qs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Zo(this),Qo(this);var s="";break e}this.h.i=new Ui.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,o,s){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!er(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Eo(12),Zo(this),Qo(this);break t}bo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ts(this,n)}this.P?(Ko(this,u,s),pr&&this.i&&3==u&&(go(this.S,this.T,"tick",this.hb),this.T.start())):(bo(this.j,this.m,s,null),ts(this,s)),4==u&&Zo(this),this.i&&!this.I&&(4==u?ga(this.l,this):(this.i=!1,Go(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Eo(12)):(this.o=0,Eo(13)),Zo(this),Qo(this)}}}catch(t){}},Pi.hb=function(){if(this.g){var t=Qs(this.g),e=this.g.fa();this.C<e.length&&(Yo(this),Ko(this,t,e),this.i&&4!=t&&Go(this))}},Pi.cancel=function(){this.I=!0,Zo(this)},Pi.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(So(),Eo(17)),Zo(this),this.o=2,Qo(this)):Jo(this,this.V-t)};var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function is(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=void 0!==e?e:t.h,os(this,t.j),this.s=t.s,this.g=t.g,ss(this,t.m),this.l=t.l,e=t.i;var n=new vs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),as(this,n),this.o=t.o}else t&&(n=String(t).match(ns))?(this.h=!!e,os(this,n[1]||"",!0),this.s=us(n[2]||""),this.g=us(n[3]||"",!0),ss(this,n[4]),this.l=us(n[5]||"",!0),as(this,n[6]||"",!0),this.o=us(n[7]||"")):(this.h=!!e,this.i=new vs(null,this.h))}function rs(t){return new is(t)}function os(t,e,n){t.j=n?us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ss(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function as(t,e,n){e instanceof vs?(t.i=e,function(t,e){e&&!t.j&&(bs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ws(this,e),ks(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=hs(e,gs)),t.i=new vs(e,t.h))}function ls(t,e,n){t.i.set(e,n)}function cs(t){return ls(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ps),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ps(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hs(e,ds,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(hs(e,ds,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(hs(n,"/"==n.charAt(0)?ms:fs,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hs(n,ys)),t.join("")};var ds=/[#\/\?@]/g,fs=/[#\?:]/g,ms=/[#\?]/g,gs=/[#\?@]/g,ys=/#/g;function vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bs(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var o=t[n].substring(0,i);r=t[n].substring(i+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ws(t,e){bs(t),e=_s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xs(t,e){return bs(t),e=_s(t,e),t.g.has(e)}function ks(t,e,n){ws(t,e),0<n.length&&(t.i=null,t.g.set(_s(t,e),Yi(n)),t.h+=n.length)}function _s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Pi=vs.prototype).add=function(t,e){bs(this),this.i=null,t=_s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Pi.forEach=function(t,e){bs(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Pi.oa=function(){bs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Pi.W=function(t){bs(this);let e=[];if("string"==typeof t)xs(this,t)&&(e=e.concat(this.g.get(_s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Pi.set=function(t,e){return bs(this),this.i=null,xs(this,t=_s(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Pi.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Pi.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const o=encodeURIComponent(String(i)),s=this.W(i);for(i=0;i<s.length;i++){var r=o;""!==s[i]&&(r+="="+encodeURIComponent(String(s[i]))),t.push(r)}}return this.i=t.join("&")};function Ss(t){this.l=t||Is,Ui.PerformanceNavigationTiming?t=0<(t=Ui.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ui.g&&Ui.g.Ga&&Ui.g.Ga()&&Ui.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Is=10;function Es(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cs(t){return t.h?1:t.g?t.g.size:0}function Ns(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ts(t,e){t.g?t.g.add(e):t.h=e}function As(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ls(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yi(t.i)}function Rs(){}function Os(){this.g=new Rs}function Ps(t,e,n){const i=n||"";try{es(t,(function(t,n){let r=t;ji(t)&&(r=Qr(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Ms(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Ds(t){this.l=t.ac||null,this.j=t.jb||!1}function Bs(t,e){Gr.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Us,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ss.prototype.cancel=function(){if(this.i=Ls(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Rs.prototype.stringify=function(t){return Ui.JSON.stringify(t,void 0)},Rs.prototype.parse=function(t){return Ui.JSON.parse(t,void 0)},qi(Ds,Lo),Ds.prototype.g=function(){return new Bs(this.l,this.j)},Ds.prototype.i=function(t){return function(){return t}}({}),qi(Bs,Gr);var Us=0;function zs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Fs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,js(t)}function js(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Pi=Bs.prototype).open=function(t,e){if(this.readyState!=Us)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,js(this)},Pi.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ui).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Pi.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fs(this)),this.readyState=Us},Pi.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Ui.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Pi.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fs(this):js(this),3==this.readyState&&zs(this)}},Pi.Va=function(t){this.g&&(this.response=this.responseText=t,Fs(this))},Pi.Ua=function(t){this.g&&(this.response=t,Fs(this))},Pi.ga=function(){this.g&&Fs(this)},Pi.setRequestHeader=function(t,e){this.v.append(t,e)},Pi.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Pi.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Bs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Hs=Ui.JSON.parse;function Ws(t){Gr.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$s,this.K=this.L=!1}qi(Ws,Gr);var $s="",Vs=/^https?$/i,Xs=["POST","PUT"];function Ks(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qs(t),Js(t)}function qs(t){t.D||(t.D=!0,Jr(t,"complete"),Jr(t,"error"))}function Gs(t){if(t.h&&void 0!==Bi&&(!t.C[1]||4!=Qs(t)||2!=t.aa()))if(t.v&&4==Qs(t))uo(t.Ha,0,t);else if(Jr(t,"readystatechange"),4==Qs(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(ns)[1]||null;if(!r&&Ui.self&&Ui.self.location){var o=Ui.self.location.protocol;r=o.substr(0,o.length-1)}i=!Vs.test(r?r.toLowerCase():"")}n=i}if(n)Jr(t,"complete"),Jr(t,"success");else{t.m=6;try{var s=2<Qs(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.aa()+"]",qs(t)}}finally{Js(t)}}}function Js(t,e){if(t.g){Ys(t);const n=t.g,i=t.C[0]?zi:null;t.g=null,t.C=null,e||Jr(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Ys(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ui.clearTimeout(t.A),t.A=null)}function Qs(t){return t.g?t.g.readyState:0}function Zs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $s:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ta(t){let e="";return Ar(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ea(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ta(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ls(t,e,n))}function na(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ia(t){this.Ca=0,this.i=[],this.j=new vo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=na("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=na("baseRetryDelayMs",5e3,t),this.bb=na("retryDelaySeedMs",1e4,t),this.$a=na("forwardChannelMaxRetries",2,t),this.ta=na("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ss(t&&t.concurrentRequestLimit),this.Fa=new Os,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ra(t){if(sa(t),3==t.G){var e=t.U++,n=rs(t.F);ls(n,"SID",t.I),ls(n,"RID",e),ls(n,"TYPE","terminate"),ca(t,n),(e=new zo(t,t.j,e,void 0)).K=2,e.v=cs(rs(n)),n=!1,Ui.navigator&&Ui.navigator.sendBeacon&&(n=Ui.navigator.sendBeacon(e.v.toString(),"")),!n&&Ui.Image&&((new Image).src=e.v,n=!0),n||(e.g=xa(e.l,null),e.g.da(e.v)),e.F=Date.now(),Go(e)}ba(t)}function oa(t){t.g&&(da(t),t.g.cancel(),t.g=null)}function sa(t){oa(t),t.u&&(Ui.clearTimeout(t.u),t.u=null),ma(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Ui.clearTimeout(t.m),t.m=null)}function aa(t){Es(t.h)||t.m||(t.m=!0,ro(t.Ja,t),t.C=0)}function la(t,e){var n;n=e?e.m:t.U++;const i=rs(t.F);ls(i,"SID",t.I),ls(i,"RID",n),ls(i,"AID",t.T),ca(t,i),t.o&&t.s&&ea(i,t.o,t.s),n=new zo(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ua(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ts(t.h,n),$o(n,i,e)}function ca(t,e){t.ia&&Ar(t.ia,(function(t,n){ls(e,n,t)})),t.l&&es({},(function(t,n){ls(e,n,t)}))}function ua(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Xi(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=r[s].h;const a=r[s].g;if(n-=e,0>n)e=Math.max(0,r[s].h-100),o=!1;else try{Ps(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ha(t){t.g||t.u||(t.Z=1,ro(t.Ia,t),t.A=0)}function pa(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=No(Xi(t.Ia,t),ya(t,t.A)),t.A++,!0)}function da(t){null!=t.B&&(Ui.clearTimeout(t.B),t.B=null)}function fa(t){t.g=new zo(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=rs(t.sa);ls(e,"RID","rpc"),ls(e,"SID",t.I),ls(e,"CI",t.L?"0":"1"),ls(e,"AID",t.T),ls(e,"TYPE","xmlhttp"),ca(t,e),t.o&&t.s&&ea(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=cs(rs(e)),n.s=null,n.P=!0,Vo(n,t)}function ma(t){null!=t.v&&(Ui.clearTimeout(t.v),t.v=null)}function ga(t,e){var n=null;if(t.g==e){ma(t),da(t),t.g=null;var i=2}else{if(!Ns(t.h,e))return;n=e.D,As(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;Jr(i=ko(),new Co(i,n)),aa(t)}else ha(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(Cs(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=No(Xi(t.Ja,t,e),ya(t,t.C)),t.C++,0)))}(t,e)||2==i&&pa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:va(t,5);break;case 4:va(t,10);break;case 3:va(t,6);break;default:va(t,2)}}function ya(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function va(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Xi(t.kb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),Ui.location&&"http"==Ui.location.protocol||os(n,"https"),cs(n)),function(t,e){const n=new vo;if(Ui.Image){const i=new Image;i.onload=Ki(Ms,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ki(Ms,n,i,"TestLoadImage: error",!1,e),i.onabort=Ki(Ms,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ki(Ms,n,i,"TestLoadImage: timeout",!1,e),Ui.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Eo(2);t.G=0,t.l&&t.l.va(e),ba(t),sa(t)}function ba(t){if(t.G=0,t.la=[],t.l){const e=Ls(t.h);0==e.length&&0==t.i.length||(Qi(t.la,e),Qi(t.la,t.i),t.h.i.length=0,Yi(t.i),t.i.length=0),t.l.ua()}}function wa(t,e,n){var i=n instanceof is?rs(n):new is(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),ss(i,i.m);else{var r=Ui.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new is(null,void 0);i&&os(o,i),e&&(o.g=e),r&&ss(o,r),n&&(o.l=n),i=o}return n=t.D,e=t.za,n&&e&&ls(i,n,e),ls(i,"VER",t.ma),ca(t,i),i}function xa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new Ws(new Ds({jb:!0})):new Ws(t.ra)).Ka(t.H),e}function ka(){}function _a(){if(ur&&!(10<=Number(_r)))throw Error("Environmental error: no available transport.")}function Sa(t,e){Gr.call(this),this.g=new ia(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!er(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!er(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ca(this)}function Ia(t){Do.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ea(){Bo.call(this),this.status=1}function Ca(t){this.g=t}(Pi=Ws.prototype).Ka=function(t){this.L=t},Pi.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Po.g(),this.C=this.u?Ro(this.u):Ro(Po),this.g.onreadystatechange=Xi(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ks(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Ui.FormData&&t instanceof Ui.FormData,!(0<=Ji(Xs,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ys(this),0<this.B&&((this.K=function(t){return ur&&xr()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xi(this.qa,this)):this.A=uo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ks(this,t)}},Pi.qa=function(){void 0!==Bi&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Jr(this,"timeout"),this.abort(8))},Pi.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Jr(this,"complete"),Jr(this,"abort"),Js(this))},Pi.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Js(this,!0)),Ws.X.M.call(this)},Pi.Ha=function(){this.s||(this.F||this.v||this.l?Gs(this):this.fb())},Pi.fb=function(){Gs(this)},Pi.aa=function(){try{return 2<Qs(this)?this.g.status:-1}catch(t){return-1}},Pi.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Pi.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Hs(e)}},Pi.Ea=function(){return this.m},Pi.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Pi=ia.prototype).ma=8,Pi.G=1,Pi.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new zo(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=Lr(o),Or(o,this.S)):o=this.S),null!==this.o||this.N||(r.H=o,o=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ua(this,r,e),ls(n=rs(this.F),"RID",t),ls(n,"CVER",22),this.D&&ls(n,"X-HTTP-Session-Id",this.D),ca(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(ta(o)))+"&"+e:this.o&&ea(n,this.o,o)),Ts(this.h,r),this.Ya&&ls(n,"TYPE","init"),this.O?(ls(n,"$req",e),ls(n,"SID","null"),r.Z=!0,$o(r,n,null)):$o(r,n,e),this.G=2}}else 3==this.G&&(t?la(this,t):0==this.i.length||Es(this.h)||la(this))},Pi.Ia=function(){if(this.u=null,fa(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=No(Xi(this.eb,this),t)}},Pi.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Eo(10),oa(this),fa(this))},Pi.cb=function(){null!=this.v&&(this.v=null,oa(this),pa(this),Eo(19))},Pi.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Eo(2)):(this.j.info("Failed to ping google.com"),Eo(1))},(Pi=ka.prototype).xa=function(){},Pi.wa=function(){},Pi.va=function(){},Pi.ua=function(){},Pi.Ra=function(){},_a.prototype.g=function(t,e){return new Sa(t,e)},qi(Sa,Gr),Sa.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Eo(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=wa(t,null,t.V),aa(t)},Sa.prototype.close=function(){ra(this.g)},Sa.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Qr(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&aa(e)},Sa.prototype.M=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,Sa.X.M.call(this)},qi(Ia,Do),qi(Ea,Bo),qi(Ca,ka),Ca.prototype.xa=function(){Jr(this.g,"a")},Ca.prototype.wa=function(t){Jr(this.g,new Ia(t))},Ca.prototype.va=function(t){Jr(this.g,new Ea)},Ca.prototype.ua=function(){Jr(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,Sa.prototype.send=Sa.prototype.u,Sa.prototype.open=Sa.prototype.m,Sa.prototype.close=Sa.prototype.close,To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Ao.COMPLETE="complete",Oo.EventType=Mo,Mo.OPEN="a",Mo.CLOSE="b",Mo.ERROR="c",Mo.MESSAGE="d",Gr.prototype.listen=Gr.prototype.N,Ws.prototype.listenOnce=Ws.prototype.O,Ws.prototype.getLastError=Ws.prototype.Oa,Ws.prototype.getLastErrorCode=Ws.prototype.Ea,Ws.prototype.getStatus=Ws.prototype.aa,Ws.prototype.getResponseJson=Ws.prototype.Sa,Ws.prototype.getResponseText=Ws.prototype.fa,Ws.prototype.send=Ws.prototype.da,Ws.prototype.setWithCredentials=Ws.prototype.Ka;Di.createWebChannelTransport=function(){return new _a},Di.getStatEventTarget=function(){return ko()},Di.ErrorCode=To,Di.EventType=Ao,Di.Event=wo,Di.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Di.FetchXmlHttpFactory=Ds,Di.WebChannel=Oo,Di.XhrIo=Ws;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Na.UNAUTHENTICATED=new Na(null),Na.GOOGLE_CREDENTIALS=new Na("google-credentials-uid"),Na.FIRST_PARTY=new Na("first-party-uid"),Na.MOCK_USER=new Na("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ta="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new st("@firebase/firestore");function La(t,...e){if(Aa.logLevel<=tt.DEBUG){const n=e.map(Pa);Aa.debug(`Firestore (${Ta}): ${t}`,...n)}}function Ra(t,...e){if(Aa.logLevel<=tt.ERROR){const n=e.map(Pa);Aa.error(`Firestore (${Ta}): ${t}`,...n)}}function Oa(t,...e){if(Aa.logLevel<=tt.WARN){const n=e.map(Pa);Aa.warn(`Firestore (${Ta}): ${t}`,...n)}}function Pa(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t="Unexpected state"){const e=`FIRESTORE (${Ta}) INTERNAL ASSERTION FAILED: `+t;throw Ra(e),new Error(e)}function Da(t,e){t||Ma()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ba={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ua extends B{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ja{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Na.UNAUTHENTICATED)))}shutdown(){}}class Ha{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Wa{constructor(t){this.t=t,this.currentUser=Na.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new za;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new za,t.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},s=t=>{La("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(La("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new za)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(La("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Da("string"==typeof e.accessToken),new Fa(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Da(null===t||"string"==typeof t),new Na(t)}}class $a{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Na.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Va{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new $a(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Na.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ka{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&La("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,La("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{La("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):La("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Da("string"==typeof t.token),this.T=t.token,new Xa(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qa(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=qa(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Ja(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ma(),void 0===n?n=t.length-e:n>t.length-e&&Ma(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ya.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ya?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Qa extends Ya{construct(t,e,n){return new Qa(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ua(Ba.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Qa(e)}static emptyPath(){return new Qa([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(t){this.path=t}static fromPath(t){return new Za(Qa.fromString(t))}static fromName(t){return new Za(Qa.fromString(t).popFirst(5))}static empty(){return new Za(Qa.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Qa.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Qa.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Za(new Qa(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}tl.UNKNOWN_ID=-1;function el(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function il(t){return 0===t&&1/t==-1/0}nl.ct=-1;const rl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ol=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],sl=ol;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(t,e){this.comparator=t,this.root=e||cl.EMPTY}insert(t,e){return new al(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,cl.BLACK,null,null))}remove(t){return new al(this.comparator,this.root.remove(t,this.comparator).copy(null,null,cl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ll(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ll(this.root,t,this.comparator,!1)}getReverseIterator(){return new ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ll(this.root,t,this.comparator,!0)}}class ll{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class cl{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:cl.RED,this.left=null!=i?i:cl.EMPTY,this.right=null!=r?r:cl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new cl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return cl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return cl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,cl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,cl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ma();if(this.right.isRed())throw Ma();const t=this.left.check();if(t!==this.right.check())throw Ma();return t+(this.isRed()?0:1)}}cl.EMPTY=null,cl.RED=!0,cl.BLACK=!1,cl.EMPTY=new class{constructor(){this.size=0}get key(){throw Ma()}get value(){throw Ma()}get color(){throw Ma()}get left(){throw Ma()}get right(){throw Ma()}copy(t,e,n,i,r){return this}insert(t,e,n){return new cl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.comparator=t,this.data=new al(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new hl(this.data.getIterator())}getIteratorFrom(t){return new hl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ul))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ul(this.comparator);return e.data=t,e}}class hl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new pl("Invalid base64 string: "+t):t}}(t);return new dl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new dl(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ja(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dl.EMPTY_BYTE_STRING=new dl("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ml(t){return"string"==typeof t?dl.fromBase64String(t):dl.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t,e,n,i,r,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class yl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof yl&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new al(Za.comparator);new al(Za.comparator);new al(Za.comparator),new ul(Za.comparator);new ul(Ja);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bl,wl;(wl=bl||(bl={}))[wl.OK=0]="OK",wl[wl.CANCELLED=1]="CANCELLED",wl[wl.UNKNOWN=2]="UNKNOWN",wl[wl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wl[wl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wl[wl.NOT_FOUND=5]="NOT_FOUND",wl[wl.ALREADY_EXISTS=6]="ALREADY_EXISTS",wl[wl.PERMISSION_DENIED=7]="PERMISSION_DENIED",wl[wl.UNAUTHENTICATED=16]="UNAUTHENTICATED",wl[wl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wl[wl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wl[wl.ABORTED=10]="ABORTED",wl[wl.OUT_OF_RANGE=11]="OUT_OF_RANGE",wl[wl.UNIMPLEMENTED=12]="UNIMPLEMENTED",wl[wl.INTERNAL=13]="INTERNAL",wl[wl.UNAVAILABLE=14]="UNAVAILABLE",wl[wl.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(fl(t.integerValue));else if("doubleValue"in t){const n=fl(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),il(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(ml(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?vl(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Ma()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const t of Object.keys(n))this.fe(t,e),this.ue(n[t],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const t of n)this.ue(t,e)}_e(t,e){this.ae(e,37),Za.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}xl.pe=new xl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class kl{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new kl(t,kl.DEFAULT_COLLECTION_PERCENTILE,kl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kl.DEFAULT_COLLECTION_PERCENTILE=10,kl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kl.DEFAULT=new kl(41943040,kl.DEFAULT_COLLECTION_PERCENTILE,kl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kl.DISABLED=new kl(-1,0,0);function _l(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,e-n);i>0&&La("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Il{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new za,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const o=Date.now()+n,s=new Il(t,e,o,i,r);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ua(Ba.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(t,e){if(Ra("AsyncQueue",`${e}: ${t}`),el(t))return new Ua(Ba.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cl{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Na.UNAUTHENTICATED,this.clientId=Ga.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{La("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(La("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ua(Ba.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new za;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=El(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Ma()}function Al(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ua(Ba.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tl(t);throw new Ua(Ba.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ua(Ba.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ua(Ba.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Ua(Ba.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ll({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ua(Ba.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ua(Ba.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ll(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ja;switch(t.type){case"firstParty":return new Va(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ua(Ba.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Nl.get(t);e&&(La("ComponentProvider","Removing Datastore"),Nl.delete(t),e.terminate())}(this),Promise.resolve()}}function Ol(t,e,n,i={}){var r;const o=(t=Al(t,Rl))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&Oa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Na.MOCK_USER;else{e=R(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new Ua(Ba.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Na(o)}t._authCredentials=new Ha(new Fa(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Sl(this,"async_queue_retry"),this.qc=()=>{const t=_l();t&&La("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=_l();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=_l();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new za;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!el(t))throw t;La("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;throw Ra("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const i=Il.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(i),i}Uc(){this.Mc&&Ma()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Ml extends Rl{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Pl,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dl(this),this._firestoreClient.terminate()}}function Dl(t){var e,n,i;const r=t._freezeSettings(),o=(s=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",l=t._persistenceKey,new gl(s,a,l,(c=r).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams));var s,a,l,c;t._firestoreClient=new Cl(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){Ta="9.19.1",At(new J("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Ml(new Wa(t.getProvider("auth-internal")),new Ka(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ua(Ba.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),Dt("@firebase/firestore","3.10.0",t),Dt("@firebase/firestore","3.10.0","esm2017")}();const Bl=function(t,e){const n="string"==typeof t?t:e||"(default)",i=Lt("object"==typeof t?t:Mt(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=T("firestore");t&&Ol(i,...t)}return i}(Pt({apiKey:"AIzaSyApAVPx8g9ncyoyFM9AB-VsIVQFVbZimu8",authDomain:"kinoteka-cc589.firebaseapp.com",databaseURL:"https://kinoteka-cc589-default-rtdb.firebaseio.com",projectId:"kinoteka-cc589",storageBucket:"kinoteka-cc589.appspot.com",messagingSenderId:"626971331589",appId:"1:626971331589:web:4219ce873aff3fdaeba06c"})),Ul=function(t=Mt()){const e=Lt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Lt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(j(n.getOptions(),null!=e?e:{}))return t;Qt(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Ti,persistence:[Vn,Ln,On]}),i=A("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Li)return;const i=null==e?void 0:e.token;Ri!==i&&(Ri=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){G(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){G(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const o=N("auth");return o&&Ze(n,`http://${o}`),n}(),zl=()=>({addToWatchedBtn:document.querySelector(".modal-card__watched-btn"),addToQueueBtn:document.querySelector(".modal-card__queue-btn"),switchSignUpBtn:document.getElementById("switchSignUp"),switchSignInBtn:document.getElementById("switchSignIn"),authContainer:document.getElementById("auth-container"),formLogIn:document.getElementById("sign-in-form"),formSignUp:document.getElementById("sign-up-form"),btnLogOut:document.getElementById("btn_logout"),notLoggedIn:document.getElementById("not-logged-in"),loggedIn:document.getElementById("logged-in"),userEmail:document.getElementById("user_email"),closeModalBtnEl:document.querySelector("[data-modal-close]"),backdropEl:document.querySelector("[data-backdrop]"),movieElements:document.querySelectorAll("[data-modal-open]")});var Fl,jl,Hl={};function Wl(t,e){Cn(Ul,t,e).then((t=>{!async function(t,e=Ul.currentUser.uid){try{const n=doc(Bl,"users",e);await setDoc(n,t,{merge:!0})}catch(t){console.error("Error adding document: ",t),Hl.Notify.failure("Something went wrong, data not saved")}}({watched:[],queue:[]},t.user.uid)})).catch((t=>{t.code;const e=t.message;Hl.Notify.failure(e)}))}function $l(t,e){Nn(Ul,t,e).then((t=>{})).catch((t=>{t.code;const e=t.message;Hl.Notify.failure(e)}))}function Vl(){var t;(t=Ul,G(t).signOut()).then((()=>{})).catch((t=>{Hl.Notify.message(t.message)}))}Fl=void 0===e?"undefined"==typeof window?Hl:window:e,jl=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",p={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d="Success",f="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",_="Hourglass",S="Circle",I="Arrows",E="Dots",C="Pulse",N="Custom",T="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},L="Standard",R="Hourglass",O="Circle",P="Arrows",M="Dots",D="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},z=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},F=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},j=function(e,n){if(!F("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},H=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?H(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,r,o){if(!F("body"))return!1;e||lt.Notify.init({});var s=H(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),e=H(!0,e,d)}var f=e[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=H(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(p.wrapID)||t.document.createElement("div");if(m.id=p.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(p.overlayID)||t.document.createElement("div");g.id=p.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=f.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(p.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(p.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+Y,y.className=e.className+" "+f.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=f.textColor,y.style.background=f.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+f.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+f.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+f.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(p.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(p.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,_,S=function(){x.classList.add("nx-remove");var e=t.document.getElementById(p.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},I=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(p.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(_)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),S();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var E=function(){k=setTimeout((function(){S()}),e.timeout),_=setTimeout((function(){I()}),e.timeout+e.cssAnimationDuration)};E(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(_)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),E()})))}}if(e.showOnlyTheLastOne&&0<Y)for(var C,N=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Y+"])"),T=0;T<N.length;T++)null!==(C=N[T]).parentNode&&C.parentNode.removeChild(C);e=H(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,o,s,l){if(!F("body"))return!1;n||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=H(!0,n,{}),n=H(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===d?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===f?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=W(i),r=W(r),o=W(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var p=t.document.createElement("div");p.id=y.ID,p.className=n.className,p.style.zIndex=n.zindex,p.style.borderRadius=n.borderRadius,p.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on")),p.style.display="flex",p.style.flexWrap="wrap",p.style.flexDirection="column",p.style.alignItems="center",p.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===d?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===f?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),p.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(p.id)){t.document.body.appendChild(p);var _=function(){var e=t.document.getElementById(p.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),_()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=H(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,o,s,l,c,u,h){if(!F("body"))return!1;i||lt.Confirm.init({});var p=H(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=H(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),s=W(s),l=W(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=x.ID,d.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),d.style.zIndex=i.zindex,d.style.padding=i.distance,i.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on"));var f="string"==typeof i.position?i.position.trim():"center";d.classList.add("nx-position-"+f),d.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=o||"";var _=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+_+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(d.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var S=t.document.getElementById(d.id),I=t.document.getElementById("NXConfirmButtonOk"),E=t.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(e===b&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(t){if(e===b&&v&&E){if((E.value||"").toString()!==v)return E.focus(),E.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&E&&(k=E.value||""),c(k)),S.classList.add("nx-remove");var n=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&E&&(k=E.value||""),u(k)),S.classList.add("nx-remove");var t=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(t))}),i.cssAnimationDuration)}))}i=H(!0,i,p)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,o,s){if(!F("body"))return!1;r||lt.Loading.init({});var l=H(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=H(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var p="";if(e===k)p=$(r.svgSize,r.svgColor);else if(e===_)p=V(r.svgSize,r.svgColor);else if(e===S)p=X(r.svgSize,r.svgColor);else if(e===I)p=K(r.svgSize,r.svgColor);else if(e===E)p=q(r.svgSize,r.svgColor);else if(e===C)p=G(r.svgSize,r.svgColor);else if(e===N&&null!==r.customSvgCode&&null===r.customSvgUrl)p=r.customSvgCode||"";else if(e===N&&null!==r.customSvgUrl&&null===r.customSvgCode)p='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===N&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;p=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var d=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),f=t.innerWidth,m=d>=f?f-40+"px":d+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+p+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),s);r=H(!0,r,l)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||lt.Block.init({});var h=H(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var p={};"object"==typeof r?p=r:"object"==typeof s&&(p=s),o=H(!0,o,p)}var d="";"string"==typeof r&&0<r.length&&(d=r),o.cssAnimation||(o.cssAnimationDuration=0);var f=B.className;"string"==typeof o.className&&(f=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+B.ID+"]");if(1>x.length){var k="";n&&(k=n===R?V(o.svgSize,o.svgColor):n===O?X(o.svgSize,o.svgColor):n===P?K(o.svgSize,o.svgColor):n===M?q(o.svgSize,o.svgColor):n===D?G(o.svgSize,o.svgColor):$(o.svgSize,o.svgColor));var _='<span class="'+f+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",S="";0<d.length&&(d=d.length>o.messageMaxLength?W(d).substring(0,o.messageMaxLength)+"...":W(d),S='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+f+'-message">'+d+"</span>"),st++;var I=t.document.createElement("div");I.id=B.ID+"-"+st,I.className=f+(o.cssAnimation?" nx-with-animation":""),I.style.position=o.position,I.style.zIndex=o.zindex,I.style.background=o.backgroundColor,I.style.animationDuration=o.cssAnimationDuration+"ms",I.style.fontFamily='"'+o.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",o.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=_+S;var E,C=t.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof C?C.toLocaleLowerCase("en"):"relative",T=Math.round(1.25*parseInt(o.svgSize))+40,A="";T>(v.offsetHeight||0)&&(A="min-height:"+T+"px;"),E=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var L="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(j||0<A.length){if(!F("head"))return!1;j&&(L="position:relative!important;");var J='<style id="Style-'+B.ID+"-"+st+'">'+E+"."+y+"{"+L+A+"}</style>",Y=t.document.createRange();Y.selectNode(t.document.head);var Q=Y.createContextualFragment(J);t.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else z("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),o.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+B.ID+"]"),tt(x));clearTimeout(nt)}),l);o=H(!0,o,h)},lt={Notify:{init:function(t){e=H(!0,p,t),j(J,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=H(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Q(l,t,e,n)},failure:function(t,e,n){Q(c,t,e,n)},warning:function(t,e,n){Q(u,t,e,n)},info:function(t,e,n){Q(h,t,e,n)}},Report:{init:function(t){n=H(!0,y,t),j(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=H(!0,n,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(d,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(f,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=H(!0,x,t),j(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=H(!0,i,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,o,s){nt(v,t,e,null,n,i,r,o,s)},ask:function(t,e,n,i,r,o,s,a){nt(b,t,e,n,i,r,o,s,a)},prompt:function(t,e,n,i,r,o,s,a){nt(w,t,e,n,i,r,o,s,a)}},Loading:{init:function(t){r=H(!0,A,t),j(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=H(!0,r,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(_,t,e,!0,0)},circle:function(t,e){rt(S,t,e,!0,0)},arrows:function(t,e){rt(I,t,e,!0,0)},dots:function(t,e){rt(E,t,e,!0,0)},pulse:function(t,e){rt(C,t,e,!0,0)},custom:function(t,e){rt(N,t,e,!0,0)},notiflix:function(t,e){rt(T,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?W(e).substring(0,r.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var o=t.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=e,n.appendChild(o)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){o=H(!0,B,t),j(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=H(!0,o,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,L,t,e,n)},hourglass:function(t,e,n){at(!0,R,t,e,n)},circle:function(t,e,n){at(!0,O,t,e,n)},arrows:function(t,e,n){at(!0,P,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,D,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?H(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return jl(Fl)})):"object"==typeof Hl?Hl=jl(Fl):Fl.Notiflix=jl(Fl);const Xl={authBtn:document.querySelector(".auth-btn"),headerWatchedBtn:document.querySelector(".js-watched"),headerQueueBtn:document.querySelector(".js-queue"),autorizationChecked:document.getElementById("icon-autorization-checked"),dataBackdrop:document.querySelector("[data-backdrop]")};var Kl={};function ql(t){return t&&t.__esModule?t:{default:t}}Kl.__esModule=!0;var Gl={};function Jl(t){return t&&t.__esModule?t:{default:t}}function Yl(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Gl.__esModule=!0;var Ql,Zl,tc,ec,nc,ic,rc,oc,sc,ac={};function lc(t){return t&&t.__esModule?t:{default:t}}t(ac,"__esModule",(function(){return Ql}),(function(t){return Ql=t})),t(ac,"HandlebarsEnvironment",(function(){return Zl}),(function(t){return Zl=t})),t(ac,"VERSION",(function(){return tc}),(function(t){return tc=t})),t(ac,"COMPILER_REVISION",(function(){return ec}),(function(t){return ec=t})),t(ac,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return nc}),(function(t){return nc=t})),t(ac,"REVISION_CHANGES",(function(){return ic}),(function(t){return ic=t})),t(ac,"log",(function(){return rc}),(function(t){return rc=t})),t(ac,"createFrame",(function(){return oc}),(function(t){return oc=t})),t(ac,"logger",(function(){return sc}),(function(t){return sc=t})),Ql=!0,Zl=fu;var cc,uc,hc,pc,dc,fc,mc,gc,yc,vc,bc,wc={};t(wc,"__esModule",(function(){return cc}),(function(t){return cc=t})),t(wc,"extend",(function(){return uc}),(function(t){return uc=t})),t(wc,"indexOf",(function(){return hc}),(function(t){return hc=t})),t(wc,"escapeExpression",(function(){return pc}),(function(t){return pc=t})),t(wc,"isEmpty",(function(){return dc}),(function(t){return dc=t})),t(wc,"createFrame",(function(){return fc}),(function(t){return fc=t})),t(wc,"blockParams",(function(){return mc}),(function(t){return mc=t})),t(wc,"appendContextPath",(function(){return gc}),(function(t){return gc=t})),t(wc,"toString",(function(){return yc}),(function(t){return yc=t})),t(wc,"isFunction",(function(){return vc}),(function(t){return vc=t})),t(wc,"isArray",(function(){return bc}),(function(t){return bc=t})),cc=!0,uc=Ic,hc=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},pc=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return _c.test(t)?t.replace(kc,Sc):t},dc=function(t){return!t&&0!==t||!(!Nc(t)||0!==t.length)},fc=function(t){var e=Ic({},t);return e._parent=t,e},mc=function(t,e){return t.path=e,t},gc=function(t,e){return(t?t+".":"")+e};var xc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},kc=/[&<>"'`=]/g,_c=/[&<>"'`=]/;function Sc(t){return xc[t]}function Ic(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var Ec=Object.prototype.toString;yc=Ec;var Cc=function(t){return"function"==typeof t};Cc(/x/)&&(vc=Cc=function(t){return"function"==typeof t&&"[object Function]"===Ec.call(t)}),vc=Cc;var Nc=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===Ec.call(t)};bc=Nc;var Tc={__esModule:!0},Ac=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function Lc(t,e){var n=e&&e.loc,i=void 0,r=void 0,o=void 0,s=void 0;n&&(i=n.start.line,r=n.end.line,o=n.start.column,s=n.end.column,t+=" - "+i+":"+o);for(var a=Error.prototype.constructor.call(this,t),l=0;l<Ac.length;l++)this[Ac[l]]=a[Ac[l]];Error.captureStackTrace&&Error.captureStackTrace(this,Lc);try{n&&(this.lineNumber=i,this.endLineNumber=r,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=o,this.endColumn=s))}catch(t){}}Lc.prototype=new Error,Tc.default=Lc;var Rc,Oc,Pc=lc(Tc=Tc.default);function Mc(t){return t&&t.__esModule?t:{default:t}}Rc=function(t){Bc.default(t),jc.default(t),$c.default(t),Kc.default(t),Gc.default(t),Yc.default(t),eu.default(t)},Oc=function(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])};var Dc={__esModule:!0,default:function(t){t.registerHelper("blockHelperMissing",(function(e,n){var i=n.inverse,r=n.fn;if(!0===e)return r(this);if(!1===e||null==e)return i(this);if(bc(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var o=fc(n.data);o.contextPath=gc(n.data.contextPath,n.name),n={data:o}}return r(e,n)}))}},Bc=Mc(Dc=Dc.default),Uc={};Uc.__esModule=!0;var zc,Fc=(zc=Tc)&&zc.__esModule?zc:{default:zc};Uc.default=function(t){t.registerHelper("each",(function(t,n){if(!n)throw new Fc.default("Must pass iterator to #each");var i,r=n.fn,o=n.inverse,s=0,a="",l=void 0,c=void 0;function u(e,n,i){l&&(l.key=e,l.index=n,l.first=0===n,l.last=!!i,c&&(l.contextPath=c+e)),a+=r(t[e],{data:l,blockParams:mc([t[e],e],[c+e,null])})}if(n.data&&n.ids&&(c=gc(n.data.contextPath,n.ids[0])+"."),vc(t)&&(t=t.call(this)),n.data&&(l=fc(n.data)),t&&"object"==typeof t)if(bc(t))for(var h=t.length;s<h;s++)s in t&&u(s,s,s===t.length-1);else if(e.Symbol&&t[e.Symbol.iterator]){for(var p=[],d=t[e.Symbol.iterator](),f=d.next();!f.done;f=d.next())p.push(f.value);for(h=(t=p).length;s<h;s++)u(s,s,s===t.length-1)}else i=void 0,Object.keys(t).forEach((function(t){void 0!==i&&u(i,s-1),i=t,s++})),void 0!==i&&u(i,s-1,!0);return 0===s&&(a=o(this)),a}))};var jc=Mc(Uc=Uc.default),Hc={};Hc.__esModule=!0;var Wc=function(t){return t&&t.__esModule?t:{default:t}}(Tc);Hc.default=function(t){t.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new Wc.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var $c=Mc(Hc=Hc.default),Vc={};Vc.__esModule=!0;var Xc=function(t){return t&&t.__esModule?t:{default:t}}(Tc);Vc.default=function(t){t.registerHelper("if",(function(t,e){if(2!=arguments.length)throw new Xc.default("#if requires exactly one argument");return vc(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||dc(t)?e.inverse(this):e.fn(this)})),t.registerHelper("unless",(function(e,n){if(2!=arguments.length)throw new Xc.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var Kc=Mc(Vc=Vc.default),qc={__esModule:!0,default:function(t){t.registerHelper("log",(function(){for(var e=[void 0],n=arguments[arguments.length-1],i=0;i<arguments.length-1;i++)e.push(arguments[i]);var r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),e[0]=r,t.log.apply(t,e)}))}},Gc=Mc(qc=qc.default),Jc={__esModule:!0,default:function(t){t.registerHelper("lookup",(function(t,e,n){return t?n.lookupProperty(t,e):t}))}},Yc=Mc(Jc=Jc.default),Qc={};Qc.__esModule=!0;var Zc=function(t){return t&&t.__esModule?t:{default:t}}(Tc);Qc.default=function(t){t.registerHelper("with",(function(t,e){if(2!=arguments.length)throw new Zc.default("#with requires exactly one argument");vc(t)&&(t=t.call(this));var n=e.fn;if(dc(t))return e.inverse(this);var i=e.data;return e.data&&e.ids&&((i=fc(e.data)).contextPath=gc(e.data.contextPath,e.ids[0])),n(t,{data:i,blockParams:mc([t],[i&&i.contextPath])})}))};var tu,eu=Mc(Qc=Qc.default);tu=function(t){iu.default(t)};var nu={__esModule:!0,default:function(t){t.registerDecorator("inline",(function(t,e,n,i){var r=t;return e.partials||(e.partials={},r=function(i,r){var o=n.partials;n.partials=uc({},o,e.partials);var s=t(i,r);return n.partials=o,s}),e.partials[i.args[0]]=i.fn,r}))}},iu=function(t){return t&&t.__esModule?t:{default:t}}(nu=nu.default);var ru={__esModule:!0},ou={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=hc(ou.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=ou.lookupLevel(t),"undefined"!=typeof console&&ou.lookupLevel(ou.level)<=t){var e=ou.methodMap[t];console[e]||(e="log");for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];console[e].apply(console,i)}}};ru.default=ou;var su,au,lu,cu,uu=lc(ru=ru.default);su=function(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:cu(n,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:cu(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},au=function(t,e,n){return du("function"==typeof t?e.methods:e.properties,n)},lu=function(){Object.keys(pu).forEach((function(t){delete pu[t]}))},cu=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return uc.apply(void 0,[Object.create(null)].concat(e))};var hu=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(ru),pu=Object.create(null);function du(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==pu[t]&&(pu[t]=!0,hu.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}tc="4.7.7";ec=8;nc=7;ic={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function fu(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},Rc(this),tu(this)}fu.prototype={constructor:fu,logger:uu.default,log:uu.default.log,registerHelper:function(t,e){if("[object Object]"===yc.call(t)){if(e)throw new Pc.default("Arg not supported with multiple helpers");uc(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===yc.call(t))uc(this.partials,t);else{if(void 0===e)throw new Pc.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===yc.call(t)){if(e)throw new Pc.default("Arg not supported with multiple decorators");uc(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){lu()}};var mu=uu.default.log;rc=mu,oc=fc,sc=uu.default;var gu=Yl(ac),yu={};function vu(t){this.string=t}yu.__esModule=!0,vu.prototype.toString=vu.prototype.toHTML=function(){return""+this.string},yu.default=vu;var bu,wu,xu,ku,_u,Su,Iu,Eu=Jl(yu=yu.default),Cu=Jl(Tc),Nu=Yl(wc),Tu={};t(Tu,"__esModule",(function(){return bu}),(function(t){return bu=t})),t(Tu,"checkRevision",(function(){return wu}),(function(t){return wu=t})),t(Tu,"template",(function(){return xu}),(function(t){return xu=t})),t(Tu,"wrapProgram",(function(){return ku}),(function(t){return ku=t})),t(Tu,"resolvePartial",(function(){return _u}),(function(t){return _u=t})),t(Tu,"invokePartial",(function(){return Su}),(function(t){return Su=t})),t(Tu,"noop",(function(){return Iu}),(function(t){return Iu=t})),bu=!0,wu=function(t){var e=t&&t[0]||1,n=ec;if(e>=nc&&e<=ec)return;if(e<nc){var i=ic[n],r=ic[e];throw new Ru.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+r+").")}throw new Ru.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")},xu=function(t,e){if(!e)throw new Ru.default("No environment passed to template");if(!t||!t.main)throw new Ru.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n=t.compiler&&7===t.compiler[0];var i={strict:function(t,e,n){if(!t||!(e in t))throw new Ru.default('"'+e+'" not defined in '+t,{loc:n});return i.lookupProperty(t,e)},lookupProperty:function(t,e){var n=t[e];return null==n||Object.prototype.hasOwnProperty.call(t,e)||au(n,i.protoAccessControl,e)?n:void 0},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++){if(null!=(t[r]&&i.lookupProperty(t[r],e)))return t[r][e]}},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:Lu.escapeExpression,invokePartial:function(n,i,r){r.hash&&(i=Lu.extend({},i,r.hash),r.ids&&(r.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,i,r);var o=Lu.extend({},r,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=e.VM.invokePartial.call(this,n,i,o);if(null==s&&e.compile&&(r.partials[r.name]=e.compile(n,t.compilerOptions,e),s=r.partials[r.name](i,o)),null!=s){if(r.indent){for(var a=s.split("\n"),l=0,c=a.length;l<c&&(a[l]||l+1!==c);l++)a[l]=r.indent+a[l];s=a.join("\n")}return s}throw new Ru.default("The partial "+r.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,i,r){var o=this.programs[t],s=this.fn(t);return e||r||i||n?o=Ou(this,t,s,e,n,i,r):o||(o=this.programs[t]=Ou(this,t,s)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=Lu.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function r(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;r._setup(n),!n.partial&&t.useData&&(o=Mu(e,o));var s=void 0,a=t.useBlockParams?[]:void 0;function l(e){return""+t.main(i,e,i.helpers,i.partials,o,a,s)}return t.useDepths&&(s=n.depths?e!=n.depths[0]?[e].concat(n.depths):n.depths:[e]),(l=Du(t.main,l,i,n.depths||[],o,a))(e,n)}return r.isTop=!0,r._setup=function(r){if(r.partial)i.protoAccessControl=r.protoAccessControl,i.helpers=r.helpers,i.partials=r.partials,i.decorators=r.decorators,i.hooks=r.hooks;else{var o=Lu.extend({},e.helpers,r.helpers);!function(t,e){Object.keys(t).forEach((function(n){var i=t[n];t[n]=function(t,e){var n=e.lookupProperty;return Au(t,(function(t){return Lu.extend({lookupProperty:n},t)}))}(i,e)}))}(o,i),i.helpers=o,t.usePartial&&(i.partials=i.mergeIfNeeded(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(i.decorators=Lu.extend({},e.decorators,r.decorators)),i.hooks={},i.protoAccessControl=su(r);var s=r.allowCallsToHelperMissing||n;Oc(i,"helperMissing",s),Oc(i,"blockHelperMissing",s)}},r._child=function(e,n,r,o){if(t.useBlockParams&&!r)throw new Ru.default("must pass block params");if(t.useDepths&&!o)throw new Ru.default("must pass parent depths");return Ou(i,e,t[e],n,0,r,o)},r},ku=Ou,_u=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},Su=function(t,e,n){var i=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var r=void 0;n.fn&&n.fn!==Pu&&function(){n.data=oc(n.data);var t=n.fn;r=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=oc(n.data),n.data["partial-block"]=i,t(e,n)},t.partials&&(n.partials=Lu.extend({},n.partials,t.partials))}();void 0===t&&r&&(t=r);if(void 0===t)throw new Ru.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},Iu=Pu;var Au,Lu=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(wc),Ru=function(t){return t&&t.__esModule?t:{default:t}}(Tc);function Ou(t,e,n,i,r,o,s){function a(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=s;return!s||e==s[0]||e===t.nullContext&&null===s[0]||(a=[e].concat(s)),n(t,e,t.helpers,t.partials,r.data||i,o&&[r.blockParams].concat(o),a)}return(a=Du(n,a,t,s,i,o)).program=e,a.depth=s?s.length:0,a.blockParams=r||0,a}function Pu(){return""}function Mu(t,e){return e&&"root"in e||((e=e?oc(e):{}).root=t),e}function Du(t,e,n,i,r,o){if(t.decorator){var s={};e=t.decorator(e,s,n,i&&i[0],r,o,i),Lu.extend(e,s)}return e}Au=function(t,e){if("function"!=typeof t)return t;return function(){return arguments[arguments.length-1]=e(arguments[arguments.length-1]),t.apply(this,arguments)}};var Bu=Yl(Tu),Uu={__esModule:!0,default:function(t){var n=void 0!==e?e:window,i=n.Handlebars;t.noConflict=function(){return n.Handlebars===t&&(n.Handlebars=i),t}}},zu=Jl(Uu=Uu.default);function Fu(){var t=new gu.HandlebarsEnvironment;return Nu.extend(t,gu),t.SafeString=Eu.default,t.Exception=Cu.default,t.Utils=Nu,t.escapeExpression=Nu.escapeExpression,t.VM=Bu,t.template=function(e){return Bu.template(e,t)},t}var ju=Fu();ju.create=Fu,zu.default(ju),ju.default=ju,Gl.default=ju;var Hu=ql(Gl=Gl.default),Wu={__esModule:!0},$u={helpers:{helperExpression:function(t){return"SubExpression"===t.type||("MustacheStatement"===t.type||"BlockStatement"===t.type)&&!!(t.params&&t.params.length||t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},simpleId:function(t){return 1===t.parts.length&&!$u.helpers.scopedId(t)&&!t.depth}}};Wu.default=$u;var Vu,Xu,Ku,qu=ql(Wu=Wu.default);function Gu(t){return t&&t.__esModule?t:{default:t}}Vu=Rh,Xu=function(t,e){var n=Rh(t,e);return new _h.default(e).accept(n)};var Ju={__esModule:!0},Yu=function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(t,e,n,i,r,o,s){var a=o.length-1;switch(r){case 1:return o[a-1];case 2:this.$=i.prepareProgram(o[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=o[a];break;case 9:this.$={type:"CommentStatement",value:i.stripComment(o[a]),strip:i.stripFlags(o[a],o[a]),loc:i.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:o[a],value:o[a],loc:i.locInfo(this._$)};break;case 11:this.$=i.prepareRawBlock(o[a-2],o[a-1],o[a],this._$);break;case 12:this.$={path:o[a-3],params:o[a-2],hash:o[a-1]};break;case 13:this.$=i.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!1,this._$);break;case 14:this.$=i.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!0,this._$);break;case 15:this.$={open:o[a-5],path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:i.stripFlags(o[a-5],o[a])};break;case 16:case 17:this.$={path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:i.stripFlags(o[a-5],o[a])};break;case 18:this.$={strip:i.stripFlags(o[a-1],o[a-1]),program:o[a]};break;case 19:var l=i.prepareBlock(o[a-2],o[a-1],o[a],o[a],!1,this._$),c=i.prepareProgram([l],o[a-1].loc);c.chained=!0,this.$={strip:o[a-2].strip,program:c,chain:!0};break;case 21:this.$={path:o[a-1],strip:i.stripFlags(o[a-2],o[a])};break;case 22:case 23:this.$=i.prepareMustache(o[a-3],o[a-2],o[a-1],o[a-4],i.stripFlags(o[a-4],o[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:o[a-3],params:o[a-2],hash:o[a-1],indent:"",strip:i.stripFlags(o[a-4],o[a]),loc:i.locInfo(this._$)};break;case 25:this.$=i.preparePartialBlock(o[a-2],o[a-1],o[a],this._$);break;case 26:this.$={path:o[a-3],params:o[a-2],hash:o[a-1],strip:i.stripFlags(o[a-4],o[a])};break;case 29:this.$={type:"SubExpression",path:o[a-3],params:o[a-2],hash:o[a-1],loc:i.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:o[a],loc:i.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:i.id(o[a-2]),value:o[a],loc:i.locInfo(this._$)};break;case 32:this.$=i.id(o[a-1]);break;case 35:this.$={type:"StringLiteral",value:o[a],original:o[a],loc:i.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(o[a]),original:Number(o[a]),loc:i.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===o[a],original:"true"===o[a],loc:i.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:i.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:i.locInfo(this._$)};break;case 42:this.$=i.preparePath(!0,o[a],this._$);break;case 43:this.$=i.preparePath(!1,o[a],this._$);break;case 44:o[a-2].push({part:i.id(o[a]),original:o[a],separator:o[a-1]}),this.$=o[a-2];break;case 45:this.$=[{part:i.id(o[a]),original:o[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:o[a-1].push(o[a]);break;case 98:case 100:this.$=[o[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(t,e){throw new Error(t)},parse:function(t){var e=this,n=[0],i=[null],r=[],o=this.table,s="",a=0,l=0,c=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var u=this.lexer.yylloc;r.push(u);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var p,d,f,m,g,y,v,b,w,x,k={};;){if(f=n[n.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==p&&(x=void 0,"number"!=typeof(x=e.lexer.lex()||1)&&(x=e.symbols_[x]||x),p=x),m=o[f]&&o[f][p]),void 0===m||!m.length||!m[0]){var _="";if(!c){for(y in w=[],o[f])this.terminals_[y]&&y>2&&w.push("'"+this.terminals_[y]+"'");_=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(_,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:u,expected:w})}}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+p);switch(m[0]){case 1:n.push(p),i.push(this.lexer.yytext),r.push(this.lexer.yylloc),n.push(m[1]),p=null,d?(p=d,d=null):(l=this.lexer.yyleng,s=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,c>0&&c--);break;case 2:if(v=this.productions_[m[1]][1],k.$=i[i.length-v],k._$={first_line:r[r.length-(v||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(v||1)].first_column,last_column:r[r.length-1].last_column},h&&(k._$.range=[r[r.length-(v||1)].range[0],r[r.length-1].range[1]]),void 0!==(g=this.performAction.call(k,s,l,a,this.yy,m[1],i,r)))return g;v&&(n=n.slice(0,-1*v*2),i=i.slice(0,-1*v),r=r.slice(0,-1*v)),n.push(this.productions_[m[1]][0]),i.push(k.$),r.push(k._$),b=o[n[n.length-2]][n[n.length-1]],n.push(b);break;case 3:return!0}}return!0}},e={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this},more:function(){return this._more=!0,this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;var t,e,n,i,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),s=0;s<o.length&&(!(n=this._input.match(this.rules[o[s]]))||e&&!(n[0].length>e[0].length)||(e=n,i=s,this.options.flex));s++);return e?((r=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,o[i],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},options:{},performAction:function(t,e,n,i){function r(t,n){return e.yytext=e.yytext.substring(t,e.yyleng-n+t)}switch(n){case 0:if("\\\\"===e.yytext.slice(-2)?(r(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(r(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(r(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(e.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return e.yytext=r(1,2).replace(/\\"/g,'"'),80;case 32:return e.yytext=r(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return e.yytext=e.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};function n(){this.yy={}}return t.lexer=e,n.prototype=t,t.Parser=n,new n}();Ju.default=Yu;var Qu=Gu(Ju=Ju.default),Zu={};Zu.__esModule=!0;var th={};th.__esModule=!0;var eh=function(t){return t&&t.__esModule?t:{default:t}}(Tc);function nh(){this.parents=[]}function ih(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function rh(t){ih.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function oh(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}nh.prototype={constructor:nh,mutating:!1,acceptKey:function(t,e){var n=this.accept(t[e]);if(this.mutating){if(n&&!nh.prototype[n.type])throw new eh.default('Unexpected node type "'+n.type+'" found when accepting '+e+" on "+t.type);t[e]=n}},acceptRequired:function(t,e){if(this.acceptKey(t,e),!t[e])throw new eh.default(t.type+" requires "+e)},acceptArray:function(t){for(var e=0,n=t.length;e<n;e++)this.acceptKey(t,e),t[e]||(t.splice(e,1),e--,n--)},accept:function(t){if(t){if(!this[t.type])throw new eh.default("Unknown type: "+t.type,t);this.current&&this.parents.unshift(this.current),this.current=t;var e=this[t.type](t);return this.current=this.parents.shift(),!this.mutating||e?e:!1!==e?t:void 0}},Program:function(t){this.acceptArray(t.body)},MustacheStatement:ih,Decorator:ih,BlockStatement:rh,DecoratorBlock:rh,PartialStatement:oh,PartialBlockStatement:function(t){oh.call(this,t),this.acceptKey(t,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:ih,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(t){this.acceptArray(t.pairs)},HashPair:function(t){this.acceptRequired(t,"value")}},th.default=nh;var sh=function(t){return t&&t.__esModule?t:{default:t}}(th=th.default);function ah(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=t}function lh(t,e,n){void 0===e&&(e=t.length);var i=t[e-1],r=t[e-2];return i?"ContentStatement"===i.type?(r||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original):void 0:n}function ch(t,e,n){void 0===e&&(e=-1);var i=t[e+1],r=t[e+2];return i?"ContentStatement"===i.type?(r||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original):void 0:n}function uh(t,e,n){var i=t[null==e?0:e+1];if(i&&"ContentStatement"===i.type&&(n||!i.rightStripped)){var r=i.value;i.value=i.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.value!==r}}function hh(t,e,n){var i=t[null==e?t.length-1:e-1];if(i&&"ContentStatement"===i.type&&(n||!i.leftStripped)){var r=i.value;return i.value=i.value.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.value!==r,i.leftStripped}}ah.prototype=new sh.default,ah.prototype.Program=function(t){var e=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var i=t.body,r=0,o=i.length;r<o;r++){var s=i[r],a=this.accept(s);if(a){var l=lh(i,r,n),c=ch(i,r,n),u=a.openStandalone&&l,h=a.closeStandalone&&c,p=a.inlineStandalone&&l&&c;a.close&&uh(i,r,!0),a.open&&hh(i,r,!0),e&&p&&(uh(i,r),hh(i,r)&&"PartialStatement"===s.type&&(s.indent=/([ \t]+$)/.exec(i[r-1].original)[1])),e&&u&&(uh((s.program||s.inverse).body),hh(i,r)),e&&h&&(uh(i,r),hh((s.inverse||s.program).body))}}return t},ah.prototype.BlockStatement=ah.prototype.DecoratorBlock=ah.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);var e=t.program||t.inverse,n=t.program&&t.inverse,i=n,r=n;if(n&&n.chained)for(i=n.body[0].program;r.chained;)r=r.body[r.body.length-1].program;var o={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:ch(e.body),closeStandalone:lh((i||e).body)};if(t.openStrip.close&&uh(e.body,null,!0),n){var s=t.inverseStrip;s.open&&hh(e.body,null,!0),s.close&&uh(i.body,null,!0),t.closeStrip.open&&hh(r.body,null,!0),!this.options.ignoreStandalone&&lh(e.body)&&ch(i.body)&&(hh(e.body),uh(i.body))}else t.closeStrip.open&&hh(e.body,null,!0);return o},ah.prototype.Decorator=ah.prototype.MustacheStatement=function(t){return t.strip},ah.prototype.PartialStatement=ah.prototype.CommentStatement=function(t){var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}},Zu.default=ah;var ph,dh,fh,mh,gh,yh,vh,bh,wh,xh,kh,_h=Gu(Zu=Zu.default),Sh={};t(Sh,"__esModule",(function(){return ph}),(function(t){return ph=t})),t(Sh,"SourceLocation",(function(){return dh}),(function(t){return dh=t})),t(Sh,"id",(function(){return fh}),(function(t){return fh=t})),t(Sh,"stripFlags",(function(){return mh}),(function(t){return mh=t})),t(Sh,"stripComment",(function(){return gh}),(function(t){return gh=t})),t(Sh,"preparePath",(function(){return yh}),(function(t){return yh=t})),t(Sh,"prepareMustache",(function(){return vh}),(function(t){return vh=t})),t(Sh,"prepareRawBlock",(function(){return bh}),(function(t){return bh=t})),t(Sh,"prepareBlock",(function(){return wh}),(function(t){return wh=t})),t(Sh,"prepareProgram",(function(){return xh}),(function(t){return xh=t})),t(Sh,"preparePartialBlock",(function(){return kh}),(function(t){return kh=t})),ph=!0,dh=function(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}},fh=function(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t},mh=function(t,e){return{open:"~"===t.charAt(2),close:"~"===e.charAt(e.length-3)}},gh=function(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},yh=function(t,e,n){n=this.locInfo(n);for(var i=t?"@":"",r=[],o=0,s=0,a=e.length;s<a;s++){var l=e[s].part,c=e[s].original!==l;if(i+=(e[s].separator||"")+l,c||".."!==l&&"."!==l&&"this"!==l)r.push(l);else{if(r.length>0)throw new Ih.default("Invalid path: "+i,{loc:n});".."===l&&o++}}return{type:"PathExpression",data:t,depth:o,parts:r,original:i,loc:n}},vh=function(t,e,n,i,r,o){var s=i.charAt(3)||i.charAt(2),a="{"!==s&&"&"!==s;return{type:/\*/.test(i)?"Decorator":"MustacheStatement",path:t,params:e,hash:n,escaped:a,strip:r,loc:this.locInfo(o)}},bh=function(t,e,n,i){Eh(t,n),i=this.locInfo(i);var r={type:"Program",body:e,strip:{},loc:i};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:r,openStrip:{},inverseStrip:{},closeStrip:{},loc:i}},wh=function(t,e,n,i,r,o){i&&i.path&&Eh(t,i);var s=/\*/.test(t.open);e.blockParams=t.blockParams;var a=void 0,l=void 0;if(n){if(s)throw new Ih.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=i.strip),l=n.strip,a=n.program}r&&(r=a,a=e,e=r);return{type:s?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:a,openStrip:t.strip,inverseStrip:l,closeStrip:i&&i.strip,loc:this.locInfo(o)}},xh=function(t,e){if(!e&&t.length){var n=t[0].loc,i=t[t.length-1].loc;n&&i&&(e={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:i.end.line,column:i.end.column}})}return{type:"Program",body:t,strip:{},loc:e}},kh=function(t,e,n,i){return Eh(t,n),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:n&&n.strip,loc:this.locInfo(i)}};var Ih=function(t){return t&&t.__esModule?t:{default:t}}(Tc);function Eh(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var n={loc:t.path.loc};throw new Ih.default(t.path.original+" doesn't match "+e,n)}}var Ch=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(Sh);Ku=Qu.default;var Nh,Th,Ah,Lh={};function Rh(t,e){return"Program"===t.type?t:(Qu.default.yy=Lh,Lh.locInfo=function(t){return new Lh.SourceLocation(e&&e.srcName,t)},Qu.default.parse(t))}function Oh(t){return t&&t.__esModule?t:{default:t}}uc(Lh,Ch),Nh=Bh,Th=function(t,e,n){if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new Ph.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);"data"in(e=e||{})||(e.data=!0);e.compat&&(e.useDepths=!0);var i=n.parse(t,e),r=(new n.Compiler).compile(i,e);return(new n.JavaScriptCompiler).compile(r,e)},Ah=function(t,e,n){void 0===e&&(e={});if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new Ph.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);"data"in(e=uc({},e))||(e.data=!0);e.compat&&(e.useDepths=!0);var i=void 0;function r(){var i=n.parse(t,e),r=(new n.Compiler).compile(i,e),o=(new n.JavaScriptCompiler).compile(r,e,void 0,!0);return n.template(o)}function o(t,e){return i||(i=r()),i.call(this,t,e)}return o._setup=function(t){return i||(i=r()),i._setup(t)},o._child=function(t,e,n,o){return i||(i=r()),i._child(t,e,n,o)},o};var Ph=Oh(Tc),Mh=Oh(Wu),Dh=[].slice;function Bh(){}function Uh(t,e){if(t===e)return!0;if(bc(t)&&bc(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!Uh(t[n],e[n]))return!1;return!0}}function zh(t){if(!t.path.parts){var e=t.path;t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}Bh.prototype={compiler:Bh,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],r=t.opcodes[n];if(i.opcode!==r.opcode||!Uh(i.args,r.args))return!1}e=this.children.length;for(n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[],e.knownHelpers=uc(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e.knownHelpers),this.accept(t)},compileProgram:function(t){var e=(new this.compiler).compile(t,this.options),n=this.guid++;return this.usePartial=this.usePartial||e.usePartial,this.children[n]=e,this.useDepths=this.useDepths||e.useDepths,n},accept:function(t){if(!this[t.type])throw new Ph.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,n=e.length,i=0;i<n;i++)this.accept(e[i]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){zh(t);var e=t.program,n=t.inverse;e=e&&this.compileProgram(e),n=n&&this.compileProgram(n);var i=this.classifySexpr(t);"helper"===i?this.helperSexpr(t,e,n):"simple"===i?(this.simpleSexpr(t),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,n),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var e=t.program&&this.compileProgram(t.program),n=this.setupFullMustacheParams(t,e,void 0),i=t.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,i.original)},PartialStatement:function(t){this.usePartial=!0;var e=t.program;e&&(e=this.compileProgram(t.program));var n=t.params;if(n.length>1)throw new Ph.default("Unsupported number of partial arguments: "+n.length,t);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var i=t.name.original,r="SubExpression"===t.name.type;r&&this.accept(t.name),this.setupFullMustacheParams(t,e,void 0,!0);var o=t.indent||"";this.options.preventIndent&&o&&(this.opcode("appendContent",o),o=""),this.opcode("invokePartial",r,i,o),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){zh(t);var e=this.classifySexpr(t);"simple"===e?this.simpleSexpr(t):"helper"===e?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,n){var i=t.path,r=i.parts[0],o=null!=e||null!=n;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),i.strict=!0,this.accept(i),this.opcode("invokeAmbiguous",r,o)},simpleSexpr:function(t){var e=t.path;e.strict=!0,this.accept(e),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),r=t.path,o=r.parts[0];if(this.options.knownHelpers[o])this.opcode("invokeKnownHelper",i.length,o);else{if(this.options.knownHelpersOnly)throw new Ph.default("You specified knownHelpersOnly, but used the unknown helper "+o,t);r.strict=!0,r.falsy=!0,this.accept(r),this.opcode("invokeHelper",i.length,r.original,Mh.default.helpers.simpleId(r))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],n=Mh.default.helpers.scopedId(t),i=!t.depth&&!n&&this.blockParamIndex(e);i?this.opcode("lookupBlockParam",i,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,n):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,n=0,i=e.length;for(this.opcode("pushHash");n<i;n++)this.pushParam(e[n].value);for(;n--;)this.opcode("assignToHash",e[n].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:Dh.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=Mh.default.helpers.simpleId(t.path),n=e&&!!this.blockParamIndex(t.path.parts[0]),i=!n&&Mh.default.helpers.helperExpression(t),r=!n&&(i||e);if(r&&!i){var o=t.path.parts[0],s=this.options;s.knownHelpers[o]?i=!0:s.knownHelpersOnly&&(r=!1)}return i?"helper":r?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){var e=null!=t.value?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),"SubExpression"===t.type&&this.accept(t);else{if(this.trackIds){var n=void 0;if(!t.parts||Mh.default.helpers.scopedId(t)||t.depth||(n=this.blockParamIndex(t.parts[0])),n){var i=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,i)}else(e=t.original||e).replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,n,i){var r=t.params;return this.pushParams(r),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.accept(t.hash):this.opcode("emptyHash",i),r},blockParamIndex:function(t){for(var e=0,n=this.options.blockParams.length;e<n;e++){var i=this.options.blockParams[e],r=i&&hc(i,t);if(i&&r>=0)return[e,r]}}};var Fh={};function jh(t){return t&&t.__esModule?t:{default:t}}Fh.__esModule=!0;var Hh=jh(Tc),Wh={__esModule:!0},$h=void 0;try{if("function"!=typeof define||!define.amd){var Vh=o("9QQ9J");$h=Vh.SourceNode}}catch(t){}function Xh(t,e,n){if(bc(t)){for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.wrap(t[r],n));return i}return"boolean"==typeof t||"number"==typeof t?t+"":t}function Kh(t){this.srcFile=t,this.source=[]}$h||(($h=function(t,e,n,i){this.src="",i&&this.add(i)}).prototype={add:function(t){bc(t)&&(t=t.join("")),this.src+=t},prepend:function(t){bc(t)&&(t=t.join("")),this.src=t+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),Kh.prototype={isEmpty:function(){return!this.source.length},prepend:function(t,e){this.source.unshift(this.wrap(t,e))},push:function(t,e){this.source.push(this.wrap(t,e))},merge:function(){var t=this.empty();return this.each((function(e){t.add(["  ",e,"\n"])})),t},each:function(t){for(var e=0,n=this.source.length;e<n;e++)t(this.source[e])},empty:function(){var t=this.currentLocation||{start:{}};return new $h(t.start.line,t.start.column,this.srcFile)},wrap:function(t){var e=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return t instanceof $h?t:(t=Xh(t,this,e),new $h(e.start.line,e.start.column,this.srcFile,t))},functionCall:function(t,e,n){return n=this.generateList(n),this.wrap([t,e?"."+e+"(":"(",n,")"])},quotedString:function(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=this,n=[];Object.keys(t).forEach((function(i){var r=Xh(t[i],e);"undefined"!==r&&n.push([e.quotedString(i),":",r])}));var i=this.generateList(n);return i.prepend("{"),i.add("}"),i},generateList:function(t){for(var e=this.empty(),n=0,i=t.length;n<i;n++)n&&e.add(","),e.add(Xh(t[n],this));return e},generateArray:function(t){var e=this.generateList(t);return e.prepend("["),e.add("]"),e}},Wh.default=Kh;var qh=jh(Wh=Wh.default);function Gh(t){this.value=t}function Jh(){}Jh.prototype={nameLookup:function(t,e){return this.internalNameLookup(t,e)},depthedLookup:function(t){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(t),")"]},compilerInfo:function(){return[ec,ic[ec]]},appendToBuffer:function(t,e,n){return bc(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple?["return ",t,";"]:n?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(t,e){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",t,",",JSON.stringify(e),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var r=t.opcodes,o=void 0,s=void 0,a=void 0,l=void 0;for(a=0,l=r.length;a<l;a++)o=r[a],this.source.currentLocation=o.loc,s=s||o.loc,this[o.opcode].apply(this,o.args);if(this.source.currentLocation=s,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Hh.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),i?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var c=this.createFunctionContext(i);if(this.isChild)return c;var u={compiler:this.compilerInfo(),main:c};this.decorators&&(u.main_d=this.decorators,u.useDecorators=!0);var h=this.context,p=h.programs,d=h.decorators;for(a=0,l=p.length;a<l;a++)p[a]&&(u[a]=p[a],d[a]&&(u[a+"_d"]=d[a],u.useDecorators=!0));return this.environment.usePartial&&(u.usePartial=!0),this.options.data&&(u.useData=!0),this.useDepths&&(u.useDepths=!0),this.useBlockParams&&(u.useBlockParams=!0),this.options.compat&&(u.compat=!0),i?u.compilerOptions=this.options:(u.compiler=JSON.stringify(u.compiler),this.source.currentLocation={start:{line:1,column:0}},u=this.objectLiteral(u),e.srcName?(u=u.toStringWithSourceMap({file:e.destName})).map=u.map&&u.map.toString():u=u.toString()),u},preamble:function(){this.lastContext=0,this.source=new qh.default(this.options.srcName),this.decorators=new qh.default(this.options.srcName)},createFunctionContext:function(t){var e=this,n="",i=this.stackVars.concat(this.registers.list);i.length>0&&(n+=", "+i.join(", "));var r=0;Object.keys(this.aliases).forEach((function(t){var i=e.aliases[t];i.children&&i.referenceCount>1&&(n+=", alias"+ ++r+"="+t,i.children[0]="alias"+r)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var o=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&o.push("blockParams"),this.useDepths&&o.push("depths");var s=this.mergeSource(n);return t?(o.push(s),Function.apply(this,o)):this.source.wrap(["function(",o.join(","),") {\n  ",s,"}"])},mergeSource:function(t){var e=this.environment.isSimple,n=!this.forceBuffer,i=void 0,r=void 0,o=void 0,s=void 0;return this.source.each((function(t){t.appendToBuffer?(o?t.prepend("  + "):o=t,s=t):(o&&(r?o.prepend("buffer += "):i=!0,s.add(";"),o=s=void 0),r=!0,e||(n=!1))})),n?o?(o.prepend("return "),s.add(";")):r||this.source.push('return "";'):(t+=", buffer = "+(i?"":this.initializeBuffer()),o?(o.prepend("return buffer + "),s.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(i?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(t){var e=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(t,0,n);var i=this.popStack();n.splice(1,0,i),this.push(this.source.functionCall(e,"call",n))},ambiguousBlockValue:function(){var t=this.aliasable("container.hooks.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var n=this.topStack();e.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(t,"call",e),"}"])},appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},append:function(){if(this.isInline())this.replaceStack((function(t){return[" != null ? ",t,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n,i){var r=0;i||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(t[r++])),this.resolvePath("context",t,r,e,n)},lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},lookupData:function(t,e,n){t?this.pushStackLiteral("container.data(data, "+t+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,n)},resolvePath:function(t,e,n,i,r){var o=this;if(this.options.strict||this.options.assumeObjects)this.push(function(t,e,n,i){var r=e.popStack(),o=0,s=n.length;t&&s--;for(;o<s;o++)r=e.nameLookup(r,n[o],i);return t?[e.aliasable("container.strict"),"(",r,", ",e.quotedString(n[o]),", ",JSON.stringify(e.source.currentLocation)," )"]:r}(this.options.strict&&r,this,e,t));else for(var s=e.length;n<s;n++)this.replaceStack((function(r){var s=o.nameLookup(r,e[n],t);return i?[" && ",s]:[" != null ? ",s," : ",r]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),"SubExpression"!==e&&("string"==typeof t?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){null!=t?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},registerDecorator:function(t,e){var n=this.nameLookup("decorators",e,"decorator"),i=this.setupHelperArgs(e,t);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",i])," || fn;"])},invokeHelper:function(t,e,n){var i=this.popStack(),r=this.setupHelper(t,e),o=[];n&&o.push(r.name),o.push(i),this.options.strict||o.push(this.aliasable("container.hooks.helperMissing"));var s=["(",this.itemsSeparatedBy(o,"||"),")"],a=this.source.functionCall(s,"call",r.callParams);this.push(a)},itemsSeparatedBy:function(t,e){var n=[];n.push(t[0]);for(var i=1;i<t.length;i++)n.push(e,t[i]);return n},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(t,e){this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),r=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",t,"helper")," || ",n,")"];this.options.strict||(r[0]="(helper = ",r.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",r,i.paramsInit?["),(",i.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",i.callParams)," : helper))"])},invokePartial:function(t,e,n){var i=[],r=this.setupParams(e,1,i);t&&(e=this.popStack(),delete r.name),n&&(r.indent=JSON.stringify(n)),r.helpers="helpers",r.partials="partials",r.decorators="container.decorators",t?i.unshift(e):i.unshift(this.nameLookup("partials",e,"partial")),this.options.compat&&(r.depths="depths"),r=this.objectLiteral(r),i.push(r),this.push(this.source.functionCall("container.invokePartial","",i))},assignToHash:function(t){var e=this.popStack(),n=void 0,i=void 0,r=void 0;this.trackIds&&(r=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var o=this.hash;n&&(o.contexts[t]=n),i&&(o.types[t]=i),r&&(o.ids[t]=r),o.values[t]=e},pushId:function(t,e,n){"BlockParam"===t?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===t?this.pushString(e):"SubExpression"===t?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:Jh,compileChildren:function(t,e){for(var n=t.children,i=void 0,r=void 0,o=0,s=n.length;o<s;o++){i=n[o],r=new this.compiler;var a=this.matchExistingProgram(i);if(null==a){this.context.programs.push("");var l=this.context.programs.length;i.index=l,i.name="program"+l,this.context.programs[l]=r.compile(i,e,this.context,!this.precompile),this.context.decorators[l]=r.decorators,this.context.environments[l]=i,this.useDepths=this.useDepths||r.useDepths,this.useBlockParams=this.useBlockParams||r.useBlockParams,i.useDepths=this.useDepths,i.useBlockParams=this.useBlockParams}else i.index=a.index,i.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return i}},programExpression:function(t){var e=this.environment.children[t],n=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof Gh||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new Gh(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],n=void 0,i=void 0,r=void 0;if(!this.isInline())throw new Hh.default("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof Gh)e=["(",n=[o.value]],r=!0;else{i=!0;var s=this.incrStack();e=["((",this.push(s)," = ",o,")"],n=this.topStack()}var a=t.call(this,n);r||this.popStack(),i&&this.stackSlot--,this.push(e.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];if(i instanceof Gh)this.compileStack.push(i);else{var r=this.incrStack();this.pushSource([r," = ",i,";"]),this.compileStack.push(r)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof Gh)return n.value;if(!e){if(!this.stackSlot)throw new Hh.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof Gh?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?(e.referenceCount++,e):((e=this.aliases[t]=this.source.wrap(t)).aliasable=!0,e.referenceCount=1,e)},setupHelper:function(t,e,n){var i=[];return{params:i,paramsInit:this.setupHelperArgs(e,t,i,n),name:this.nameLookup("helpers",e,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(i)}},setupParams:function(t,e,n){var i={},r=[],o=[],s=[],a=!n,l=void 0;a&&(n=[]),i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack());var c=this.popStack(),u=this.popStack();(u||c)&&(i.fn=u||"container.noop",i.inverse=c||"container.noop");for(var h=e;h--;)l=this.popStack(),n[h]=l,this.trackIds&&(s[h]=this.popStack()),this.stringParams&&(o[h]=this.popStack(),r[h]=this.popStack());return a&&(i.args=this.source.generateArray(n)),this.trackIds&&(i.ids=this.source.generateArray(s)),this.stringParams&&(i.types=this.source.generateArray(o),i.contexts=this.source.generateArray(r)),this.options.data&&(i.data="data"),this.useBlockParams&&(i.blockParams="blockParams"),i},setupHelperArgs:function(t,e,n,i){var r=this.setupParams(t,e,n);return r.loc=JSON.stringify(this.source.currentLocation),r=this.objectLiteral(r),i?(this.useRegister("options"),n.push("options"),["options=",r]):n?(n.push(r),""):r}},function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=Jh.RESERVED_WORDS={},n=0,i=t.length;n<i;n++)e[t[n]]=!0}(),Jh.isValidJavaScriptVariableName=function(t){return!Jh.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)},Fh.default=Jh;var Yh=ql(Fh=Fh.default),Qh=ql(th),Zh=ql(Uu),tp=Hu.default.create;function ep(){var t=tp();return t.compile=function(e,n){return Ah(e,n,t)},t.precompile=function(e,n){return Th(e,n,t)},t.AST=qu.default,t.Compiler=Nh,t.JavaScriptCompiler=Yh.default,t.Parser=Ku,t.parse=Xu,t.parseWithoutProcessing=Vu,t}var np=ep();np.create=ep,Zh.default(np),np.Visitor=Qh.default,np.default=np,Kl.default=np;var ip,rp,op=(Kl=Kl.default).default;ip=function(t){return(new ap).accept(t)},rp=ap;var sp=function(t){return t&&t.__esModule?t:{default:t}}(th);function ap(){this.padding=0}ap.prototype=new sp.default,ap.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e+="  ";return e+=t+"\n"},ap.prototype.Program=function(t){var e="",n=t.body,i=void 0,r=void 0;if(t.blockParams){var o="BLOCK PARAMS: [";for(i=0,r=t.blockParams.length;i<r;i++)o+=" "+t.blockParams[i];o+=" ]",e+=this.pad(o)}for(i=0,r=n.length;i<r;i++)e+=this.accept(n[i]);return this.padding--,e},ap.prototype.MustacheStatement=function(t){return this.pad("{{ "+this.SubExpression(t)+" }}")},ap.prototype.Decorator=function(t){return this.pad("{{ DIRECTIVE "+this.SubExpression(t)+" }}")},ap.prototype.BlockStatement=ap.prototype.DecoratorBlock=function(t){var e="";return e+=this.pad(("DecoratorBlock"===t.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,e+=this.pad(this.SubExpression(t)),t.program&&(e+=this.pad("PROGRAM:"),this.padding++,e+=this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e+=this.pad("{{^}}"),this.padding++,e+=this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e},ap.prototype.PartialStatement=function(t){var e="PARTIAL:"+t.name.original;return t.params[0]&&(e+=" "+this.accept(t.params[0])),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")},ap.prototype.PartialBlockStatement=function(t){var e="PARTIAL BLOCK:"+t.name.original;return t.params[0]&&(e+=" "+this.accept(t.params[0])),t.hash&&(e+=" "+this.accept(t.hash)),e+=" "+this.pad("PROGRAM:"),this.padding++,e+=this.accept(t.program),this.padding--,this.pad("{{> "+e+" }}")},ap.prototype.ContentStatement=function(t){return this.pad("CONTENT[ '"+t.value+"' ]")},ap.prototype.CommentStatement=function(t){return this.pad("{{! '"+t.value+"' }}")},ap.prototype.SubExpression=function(t){for(var e,n=t.params,i=[],r=0,o=n.length;r<o;r++)i.push(this.accept(n[r]));return n="["+i.join(", ")+"]",e=t.hash?" "+this.accept(t.hash):"",this.accept(t.path)+" "+n+e},ap.prototype.PathExpression=function(t){var e=t.parts.join("/");return(t.data?"@":"")+"PATH:"+e},ap.prototype.StringLiteral=function(t){return'"'+t.value+'"'},ap.prototype.NumberLiteral=function(t){return"NUMBER{"+t.value+"}"},ap.prototype.BooleanLiteral=function(t){return"BOOLEAN{"+t.value+"}"},ap.prototype.UndefinedLiteral=function(){return"UNDEFINED"},ap.prototype.NullLiteral=function(){return"NULL"},ap.prototype.Hash=function(t){for(var e=t.pairs,n=[],i=0,r=e.length;i<r;i++)n.push(this.accept(e[i]));return"HASH{"+n.join(", ")+"}"},ap.prototype.HashPair=function(t){return t.key+"="+this.accept(t.value)},op.PrintVisitor=rp,op.print=ip;var lp,cp=n(op).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,i,r){var o,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"<div class='modal-card auth'>\n  <div class='auth-container' id='auth-container'>\n    <div style='display: none' id='not-logged-in'>\n      <div class='form-container sign-up-container'>\n        <form id='sign-up-form' action='#'>\n          <h1>Create Account</h1>\n          <span>use your email for registration</span>\n          <input\n            type='email'\n            id='email_signUp'\n            name='email'\n            placeholder='email'\n            autocomplete='true'\n          />\n          <input\n            autocomplete='true'\n            type='password'\n            id='password_signUp'\n            name='password'\n            placeholder='password'\n          />\n          <input id='btn_singUp' class='button' type='submit' value='Sign Up' />\n\n        </form>\n      </div>\n      <div class='form-container sign-in-container'>\n        <form id='sign-in-form' action='#'>\n          <h1>Sign in</h1>\n          <input\n            autocomplete='true'\n            type='email'\n            id='email_signIn'\n            name='email'\n            placeholder='email'\n          />\n          <input\n            autocomplete='true'\n            type='password'\n            id='password_signIn'\n            name='password'\n            placeholder='password'\n          />\n          <input id='btn_singIn' class='button' type='submit' value='Log in' />\n        </form>\n      </div>\n      <div class='overlay-container'>\n        <div class='overlay'>\n          <div class='overlay-panel overlay-left'>\n            <h1>Welcome Back!</h1>\n            <p>To save your favorite films please login with your email</p>\n            <button class='button ghost' id='switchSignIn'>Sign In</button>\n          </div>\n          <div class='overlay-panel overlay-right'>\n            <h1>Hello, Friend!</h1>\n            <p>Enter your email and start store your favorite films</p>\n            <button class='button ghost' id='switchSignUp'>Sign Up</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div style='display: none; height:100%' id='logged-in'>\n      <div class='innerSide'>\n        <span class='innerSide-text'>Welcome back </span><span\n          class='innerSide-text'\n          id='user_email'\n        ></span>\n        <button class='button' id='btn_logout'>Log out</button>\n      </div>\n    </div>\n  </div>\n\n  <button class='modal-card__close-btn' data-modal-close>\n    <svg class='card-btn-close' width='30' height='30'>\n      <use href='"+t.escapeExpression("function"==typeof(o=null!=(o=s(n,"closeSvg")||(null!=e?s(e,"closeSvg"):e))?o:t.hooks.helperMissing)?o.call(null!=e?e:t.nullContext||{},{name:"closeSvg",hash:{},data:r,loc:{start:{line:74,column:17},end:{line:74,column:29}}}):o)+"#card-btn-close'></use>\n    </svg>\n  </button>\n</div>"},useData:!0});function up(){Xl.autorizationChecked.style.display="block";const{loggedIn:t,notLoggedIn:e,userEmail:n}=zl();e&&(e.style.display="none",t.style.display="block",n.innerHTML=Ul.currentUser.email)}function hp(){Xl.autorizationChecked.style.display="none";const{loggedIn:t,notLoggedIn:e,userEmail:n}=zl();e&&(e.style.display="block",t.style.display="none",n.innerHTML="")}lp=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();const pp=Xl.dataBackdrop;function dp(){const{closeModalBtnEl:t,backdropEl:e}=zl();document.body.style.overflow=null,document.body.classList.remove("show-modal-card"),window.addEventListener("keydown",mp),e.removeEventListener("click",fp),t.removeEventListener("click",dp),window.removeEventListener("keydown",mp)}function fp(t){t.target===t.currentTarget&&dp()}function mp(t){"Escape"===t.code&&dp()}var gp,yp,vp,bp,wp;Xl.authBtn.addEventListener("click",(t=>{t.preventDefault(),document.body.classList.add("show-modal-card");const e=cp({closeSvg:n(lp)});pp.innerHTML=e;const{switchSignUpBtn:i,switchSignInBtn:r,authContainer:o,btnLogOut:s,formLogIn:a,formSignUp:l,closeModalBtnEl:c}=zl();Ul.currentUser?up():hp(),document.body.style.overflow="hidden";const u=Xl.dataBackdrop;c&&c.addEventListener("click",dp),u.addEventListener("click",fp),window.addEventListener("keydown",mp),i.addEventListener("click",(()=>{o.classList.add("right-panel-active")})),r.addEventListener("click",(()=>{o.classList.remove("right-panel-active")})),l.addEventListener("submit",(async t=>{t.preventDefault();const{email:e,password:n}=t.currentTarget.elements;Wl(e.value,n.value)})),a.addEventListener("submit",(async t=>{t.preventDefault();const{email:e,password:n}=t.currentTarget.elements;$l(e.value,n.value)})),s.addEventListener("click",(()=>{Vl()}))})),gp=[up],yp=[hp],vp=t=>{if(t)(async function(){try{const t=doc(Bl,"users",Ul.currentUser.uid);console.log(Ul.currentUser.uid),console.log(t);const e=await getDoc(t);if(console.table(Ul.currentUser.uid,t,e),e.exists())return localStorage.dataFromDB=JSON.stringify(e.data()),e.data();Hl.Notify.warning("Empty database")}catch(t){Hl.Notify.failure(t.message)}})().then((t=>{localStorage.dataFromDB=JSON.stringify(t),gp&&gp.forEach((t=>t()))}));else{const{notLoggedIn:t,loggedIn:e}=zl();yp&&yp.forEach((t=>t())),localStorage.removeItem("dataFromDB")}},G(Ul).onAuthStateChanged(vp,bp,wp);
//# sourceMappingURL=index.7c29ed61.js.map
