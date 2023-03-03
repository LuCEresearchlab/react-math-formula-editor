!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@material-ui/core/esm/Grid"),require("@material-ui/core/styles"),require("@material-ui/core/esm/Paper"),require("@material-ui/core/esm/Container"),require("@material-ui/core/esm/Button")):"function"==typeof define&&define.amd?define("react-math-formula-editor",["React","@material-ui/core/esm/Grid","@material-ui/core/styles","@material-ui/core/esm/Paper","@material-ui/core/esm/Container","@material-ui/core/esm/Button"],t):"object"==typeof exports?exports["react-math-formula-editor"]=t(require("react"),require("@material-ui/core/esm/Grid"),require("@material-ui/core/styles"),require("@material-ui/core/esm/Paper"),require("@material-ui/core/esm/Container"),require("@material-ui/core/esm/Button")):e["react-math-formula-editor"]=t(e.React,e["@material-ui/core/esm/Grid"],e["@material-ui/core/styles"],e["@material-ui/core/esm/Paper"],e["@material-ui/core/esm/Container"],e["@material-ui/core/esm/Button"])}(this,(function(e,t,r,a,o,n){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,r){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},u=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(o,n){function u(e){try{s(a.next(e))}catch(e){n(e)}}function i(e){try{s(a.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,i)}s((a=a.apply(e,t||[])).next())}))},i=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Tex2SVG=t.useTexSVG=t.MathJaxProvider=void 0;const s=n(r(0)),l=s.createContext({});function c({latex:e="",onSuccess:t=(e=>{}),onError:r=(e=>{})}={}){const a=s.useContext(l)||null,[o,n]=s.useState(null),[i,c]=s.useState(!1),f=!!(null==o?void 0:o.outerHTML.match(/data-mjx-error/));return s.useEffect((()=>{!function(){var t,r;u(this,void 0,void 0,(function*(){if((null==a?void 0:a.tex2svgPromise)||(yield null===(r=null===(t=null==a?void 0:a.loader)||void 0===t?void 0:t.ready)||void 0===r?void 0:r.call(t)))try{c(!0);const t=yield a.tex2svgPromise(e);n(t)}catch(e){console.error("Something went really wrong, if this problem persists then please open an issue",e)}finally{c(!1)}}))}()}),[a,e]),s.useEffect((()=>{o&&f&&r(o),o&&!f&&t(o)}),[o]),[o,{error:f,isLoading:i}]}t.MathJaxProvider=({options:e={},children:t=null})=>{const r=s.useRef(null),[a,o]=s.useState(window.MathJax||e);return s.useEffect((()=>{const e=document.getElementById("mathjax-script");if(e){const t=e.onload;e.onload=()=>{t(),o(window.MathJax)}}if(!e&&!window.MathJax){const e=document.createElement("script");window.MathJax=a,e.id="mathjax-script",e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",e.async=!0,e.onload=()=>o(window.MathJax),document.head.appendChild(e)}return()=>{}})),s.default.createElement(l.Provider,{value:a},s.default.createElement("span",{ref:r}),t)},t.useTexSVG=c,t.Tex2SVG=e=>{var{latex:t="",onError:r=(e=>{}),onSuccess:a=(e=>{})}=e,o=i(e,["latex","onError","onSuccess"]);const n=s.useRef(null),[u,{error:l}]=c({latex:t,onError:r,onSuccess:a});return s.useEffect((()=>{var e;return u&&!l?(Object.keys(o).map((e=>u.setAttribute(e,o[e]))),null===(e=n.current)||void 0===e||e.appendChild(u),()=>{var e;null===(e=n.current)||void 0===e||e.removeChild(u)}):()=>{}}),[o,u]),s.default.createElement("span",{ref:n})};t.default=e=>s.default.createElement(t.MathJaxProvider,null,s.default.createElement(t.Tex2SVG,Object.assign({},e)))},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t,r){"use strict";r.r(t),r.d(t,"InputComponent",(function(){return P}));var a=r(5),o=r.n(a),n=r(3),u=r.n(n),i=r(1),s=r.n(i);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,o=!1,n=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=r(2),p=r(4),d=r.n(p),m=r(0),x=r.n(m),y=Object(f.makeStyles)((function(e){return{root:{borderRadius:5,textAlign:"center",overflow:"auto",paddingBottom:e.spacing(2),fontSize:"1.5em",width:"100%"}}}));function v(e){var t=e.currentLatex,r=y();return x.a.createElement(s.a,{item:!0,xs:12},x.a.createElement(u.a,{className:r.root},x.a.createElement(d.a,{display:"inline",latex:t})))}v.defaultProps={currentLatex:"\\text{Press a button}"};var q=v,b=r(6),h=r.n(b),O=Object(f.makeStyles)((function(e){return{root:{borderColor:"black",fontSize:"1em","& > *:first-of-type":{margin:0}},selected:{borderColor:"green",fontSize:"1em","& > *:first-of-type":{margin:0}}}}));function g(e){var t=e.key,r=e.buttonLatex,a=e.setCurrentLatex,o=e.buttonOperator,n=e.setCurrentOperator,u=e.selected,i=O();return x.a.createElement(s.a,{item:!0,xs:2},x.a.createElement(h.a,{className:u?i.selected:i.root,value:r,key:t,variant:"outlined",color:"primary",onClick:function(){a(r),n(o),console.log(r,o)},selected:u,startIcon:x.a.createElement(d.a,{latex:r})}))}g.defaultProps={key:"",buttonLatex:"\\text{Press a button}",setCurrentLatex:function(){},buttonOperator:"",setCurrentOperator:function(){},selected:!1};var j=g,S=[{latex:"\\frac{{\\square}}{\\square}",operator:"—"},{latex:"{\\square}^{\\square}",operator:"^"},{latex:"\\sqrt[\\square]{\\square}",operator:"√"},{latex:"\\int_{\\square}^{\\square}{\\square}",operator:"∫"},{latex:"\\sum_{\\square}^{\\square}{\\square}",operator:"Σ"},{latex:"\\prod_{\\square}^{\\square}{\\square}",operator:"∏"},{latex:"\\lim_{\\square}{\\square}",operator:"lim"},{latex:"\\infty",operator:"∞"},{latex:"\\alpha",operator:"α"},{latex:"\\pi",operator:"π"},{latex:"\\sin{\\square}",operator:"sin"},{latex:"\\cos{\\square}",operator:"cos"},{latex:"{\\square}+{\\square}",operator:"+"},{latex:"{\\square}-{\\square}",operator:"-"},{latex:"{\\square}\\times{\\square}",operator:"×"},{latex:"{\\square}\\div{\\square}",operator:"÷"},{latex:"{\\square}\\in{\\square}",operator:"∈"},{latex:"{\\square}\\notin{\\square}",operator:"∉"},{latex:"{\\square}\\subset{\\square}",operator:"⊂"},{latex:"{\\square}\\supset{\\square}",operator:"⊃"},{latex:"{\\square}>{\\square}",operator:">"},{latex:"{\\square}<{\\square}",operator:"<"},{latex:"{\\square}\\leq{\\square}",operator:"≤"},{latex:"{\\square}\\geq{\\square}",operator:"≥"},{latex:"\\exists{\\square}",operator:"∃"},{latex:"\\forall{\\square}",operator:"∀"},{latex:"{\\square}={\\square}",operator:"="},{latex:"{\\square}\\approx{\\square}",operator:"≈"},{latex:"{\\square}\\neq{\\square}",operator:"≠"},{latex:"\\pm{\\square}",operator:"±"}],E=Object(f.makeStyles)((function(e){return{root:{padding:e.spacing(2),marginTop:e.spacing(3),borderRadius:5}}}));var P=function(){var e=c(Object(m.useState)("\\text{Press a button}"),2),t=e[0],r=e[1],a=c(Object(m.useState)(""),2),n=(a[0],a[1]),i=E();return x.a.createElement(o.a,{maxWidth:"md"},x.a.createElement(u.a,{elevation:3,className:i.root},x.a.createElement(s.a,{container:!0,spacing:1},x.a.createElement(q,{currentLatex:t}),S.map((function(e){return x.a.createElement(j,{key:e.latex,buttonLatex:e.latex,setCurrentLatex:r,buttonOperator:e.operator,setCurrentOperator:n,selected:t===e.latex})})))))}}])}));