!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(0)),c=r(n(2)),i=n(3);n(9),c.render(o.createElement((function(){return o.createElement("div",{className:"test-wrap",style:{width:"300px",height:"300px",background:"#ddd"}},o.createElement(i.Icon,{style:{background:"#ee0",margin:"20px 20px"}}),o.createElement(i.Icon,{style:{background:"#0e0",marginRight:"20px"},spin:!0}),o.createElement(i.Icon,{style:{background:"#00e"},rotate:45}),o.createElement("br",null),o.createElement(i.Icon,{style:{background:"#00e",marginRight:"20px"},rotate:45,spin:!0}),o.createElement(i.Icon,{className:"xixi",style:{background:"#00e",marginRight:"20px"},rotate:45,spin:!0}))}),null),document.getElementById("example"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(n(0)),i=o(n(4));n(5);class a extends c.Component{constructor(){super(...arguments),this.assignStyle=()=>{const{style:e={},rotate:t=0}=this.props;return 0!==t?Object.assign(Object.assign({},e),{transform:`rotate(${t}deg)`}):e},this.renderDivByType=()=>{const{type:e="",spin:t=!1,className:n=""}=this.props,r=this.assignStyle(),o=i.default.find(t=>t.type===e);return c.createElement("i",{style:r,className:`icon-div${o?" "+o.className:""}${n?" "+n:""}${t?" period-rotation":""}`})}}render(){return this.renderDivByType()}}t.Icon=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{type:"lever",className:"icon-lever"},{type:"check-circle",className:"icon-check-circle"},{type:"question-circle",className:"icon-question-circle"},{type:"pendant",className:"icon-pendant"},{type:"left",className:"icon-left"},{type:"right",className:"icon-right"}]},function(e,t){},,,,function(e,t){}]);
//# sourceMappingURL=bundle.js.map