var app="object"==typeof app?app:{};app.App=function(e){function t(t){for(var r,l,u=t[0],i=t[1],c=t[2],s=0,d=[];s<u.length;s++)l=u[s],a[l]&&d.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={1:0,2:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=i;return o.push([215,0]),n()}({106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a),l=n(35);var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement(l.PanelMenuWrapper,null,o.default.createElement(l.TraceAccordion,{group:"Traces",name:"Style"},o.default.createElement(l.PlotlySection,{name:"Colorscale",attr:"marker.colorscale"},o.default.createElement(l.ColorscalePicker,{label:"Colorscale",attr:"marker.colorscale"}))),o.default.createElement(l.LayoutPanel,{group:"Layout",name:"Style"},o.default.createElement(l.PlotlyFold,{name:"PlotlyFold"},o.default.createElement(l.Info,{attr:"title"},o.default.createElement("p",null,"This custom editor demonstrates the general-purpose container and field components."),o.default.createElement("p",null,"This is an ",o.default.createElement("code",null,"Info")," component.")),o.default.createElement(l.PlotlySection,{name:"PlotlySection"},o.default.createElement(l.Numeric,{label:"Numeric",attr:"width",show:!0,units:"units"}),o.default.createElement(l.Dropdown,{label:"Dropdown",attr:"xaxis.title",show:!0,options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}),o.default.createElement(l.Radio,{label:"Radio",attr:"yaxis.title",show:!0,options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}),o.default.createElement(l.Flaglist,{label:"Flaglist",attr:"titlefont.family",show:!0,options:[{label:"Yes",value:"y"},{label:"No",value:"n"}]}),o.default.createElement(l.ColorPicker,{label:"ColorPicker",attr:"plot_bgcolor",show:!0}),o.default.createElement(l.TextEditor,{attr:"title",label:"TextEditor default"}),o.default.createElement(l.TextEditor,{attr:"title",label:"TextEditor richTextOnly",richTextOnly:!0}),o.default.createElement(l.TextEditor,{attr:"title",label:"TextEditor htmlOnly",htmlOnly:!0}),o.default.createElement(l.TextEditor,{attr:"title",label:"TextEditor latexOnly",latexOnly:!0})))),o.default.createElement(l.SingleSidebarItem,null,o.default.createElement(l.Button,{variant:"primary",label:"save",onClick:function(){return alert("save button clicked!")}})),o.default.createElement(l.SingleSidebarItem,null,o.default.createElement(l.Button,{variant:"secondary",label:"clear",onClick:function(){return alert("clear button clicked!")}})))}}]),t}();t.default=u},215:function(e,t,n){"use strict";n(216);var r=function(e){return e&&e.__esModule?e:{default:e}}(n(71));var a=n(0);n(17).render(a.createElement(r.default,{dataSources:{col1:[1,2,3],col2:[4,3,2],col3:[17,13,9]}}),document.getElementById("root"))},216:function(e,t,n){var r=n(217);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(110)(r,a);r.locals&&(e.exports=r.locals)},217:function(e,t,n){(e.exports=n(109)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif; }\n\n.app {\n  height: 100vh;\n  max-height: 100vh; }\n",""])},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=f(a),l=f(n(1)),u=f(n(112)),i=f(n(35)),c=(f(n(106)),n(35));function f(e){return e&&e.__esModule?e:{default:e}}n(209);var s={editable:!0},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.dataSources=e.dataSources,n.dataSourceOptions="dataSourceOptions"in e?e.dataSourceOptions:Object.keys(dataSources).map(function(e){return{value:e,label:e}}),n.state={data:[],layout:{},frames:[]},"data"in e&&(n.state.data=e.data),"layout"in e&&(n.state.layout=e.layout),"frames"in e&&(n.state.frames=e.frames),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"getChildContext",value:function(){return{localize:function(e){return(0,c.localizeString)({},"en",e)}}}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"app"},o.default.createElement(i.default,{data:this.state.data,layout:this.state.layout,config:s,frames:this.state.frames,dataSources:this.dataSources,dataSourceOptions:this.dataSourceOptions,plotly:u.default,onUpdate:function(t,n,r){return e.setState({data:t,layout:n,frames:r})},useResizeHandler:!0,debug:!0,advancedTraceTypeSelector:!0}))}}]),t}();d.childContextTypes={localize:l.default.func},t.default=d}});