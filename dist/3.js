(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{11:function(n,e,t){"use strict";t.r(e);var o=t(2),r=t.n(o),i=t(4),a=t.n(i),l=t(20),s=t.n(l);t(31);function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function A(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var C=function(n){function e(){var n,t,o,r,i,a,l;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,p=new Array(s),f=0;f<s;f++)p[f]=arguments[f];return o=this,t=!(r=(n=u(e)).call.apply(n,[this].concat(p)))||"object"!==c(r)&&"function"!=typeof r?A(o):r,i=A(t),l=function(n){return window.history.pushState(null,null,n)},(a="navigateTo")in i?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l,t}var t,o,i;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}(e,r.a.Component),t=e,(o=[{key:"render",value:function(){var n=this;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{onClick:function(){return n.navigateTo("/")},className:"brand-logo"},"Historia"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},function(){var n=this;return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return n.navigateTo("/")}},"Home")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return n.navigateTo("/vendor")}},"Vendor")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return n.navigateTo("/")}},"Event")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return n.navigateTo("/")}},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return n.navigateTo("/")}},"Login")))}.call(this))))}},{key:"componentWillUnmount",value:function(){this.subscription.dispose()}}])&&p(t.prototype,o),i&&p(t,i),e}();t.d(e,"bootstrap",function(){return g}),t.d(e,"mount",function(){return h}),t.d(e,"unmount",function(){return m});var d=s()({React:r.a,ReactDOM:a.a,domElementGetter:function(){return document.getElementById("navbar")},rootComponent:C}),g=[d.bootstrap],h=[d.mount],m=[d.unmount]},31:function(n,e,t){var o=t(32);"string"==typeof o&&(o=[[n.i,o,""]]);var r={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};t(34)(o,r);o.locals&&(n.exports=o.locals)},32:function(n,e,t){(n.exports=t(33)(!0)).push([n.i,"body{margin:48px 0 0 0;color:#000;font-size:14px}h1,h2,h3,h4,h5,h6,p,span,div{font-family:'Roboto Condensed', sans-serif}h1,h2,h3,h4,h5,h6{font-weight:bold;margin:10px}h1{font-size:22px}.brand-logo{font-family:'PT Serif', sans-serif}ul{list-style-type:none;margin:0}ul li a{text-decoration:none}img{width:100%}.nav-wrapper{background-color:#FAD4CF;position:fixed;top:0;width:100%;padding:15px 0;display:flex;justify-content:space-between;color:#FAF2F2;z-index:1}.nav-wrapper .brand-logo{padding-left:20px}.nav-wrapper ul div{display:flex}.nav-wrapper ul a:hover{background-color:#ff6}.nav-wrapper ul li{padding:0 20px}.homepage-background-image{height:-webkit-fill-available}.homepage-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.homepage-content .brand-tagline{display:flex;flex-direction:column;align-items:center;color:#FAF2F2}.homepage-content .brand-tagline .brand-logo{font-size:100px}.homepage-content .brand-tagline span{font-size:35px;margin:10px;font-family:'Rochester', cursive}.homepage-content .brand-tagline hr{background-color:#FAF2F2;width:100%;height:2px;border:none}\n","",{version:3,sources:["/Users/indri/historia/src/scss/utilities.scss","/Users/indri/historia/src/scss/variables.scss","/Users/indri/historia/src/scss/component/navbar.scss","/Users/indri/historia/src/scss/page/desktop/home.scss","/Users/indri/historia/src/scss/mixins.scss"],names:[],mappings:"AAAA,KACE,iBAAkB,CAClB,UCOsB,CDNtB,cCOsB,CDNvB,6BAGC,0CAA2C,CAC5C,kBAGC,gBAAiB,CACjB,WAAY,CACb,GAGC,cCJsB,CDKvB,YAGC,kCAAmC,CACpC,GAGC,oBAAqB,CACrB,QAAS,CAFX,QAKM,oBAAqB,CACtB,IAKH,UAAW,CACZ,aElCC,wBDGyB,CCFzB,cAAe,CACf,KAAM,CACN,UAAW,CACX,cAAe,CACf,YAAa,CACb,6BAA8B,CAC9B,aDHyB,CCIzB,SAAU,CATZ,yBAWI,iBAAkB,CAXtB,oBAeM,YAAa,CAfnB,wBAkBM,qBDfqB,CCH3B,mBAqBM,cAAe,CAChB,2BCrBH,6BAA8B,CAC/B,kBCDC,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,+BAAgC,CDDlC,iCAGI,YAAa,CACb,qBAAsB,CACtB,kBAAmB,CACnB,aFJuB,CEF3B,6CAQM,eAAgB,CARtB,sCAWM,cAAe,CACf,WAAY,CACZ,gCAAiC,CAbvC,oCAgBM,wBFdqB,CEerB,UAAW,CACX,UAAW,CACX,WAAY",file:"historia.scss",sourcesContent:["body {\n  margin: 48px 0 0 0;\n  color: $text;\n  font-size: $text-size;\n}\n\nh1, h2, h3, h4, h5, h6, p, span, div {\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: bold;\n  margin: 10px;\n}\n\nh1 {\n  font-size: $text-size-large;\n}\n\n.brand-logo {\n  font-family: 'PT Serif', sans-serif;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  li {\n    a {\n      text-decoration: none;\n    }\n  }\n}\n\nimg {\n  width: 100%;\n}\n","//Main Pallete\n$green            : #E8F5E9;\n$yellow           : #FFE57F;\n$yellow-light     : #FFFF66;\n$pink             : #FAD4CF;\n$pink-light       : #FAF2F2;\n$orange           : #FF9E80;\n\n//Texts\n$text             : #000;\n$text-size        : 14px;\n$text-size-medium : 16px;\n$text-size-large  : 22px;\n",".nav-wrapper {\n  background-color: $pink;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-between;\n  color: $pink-light;\n  z-index: 1;\n  .brand-logo {\n    padding-left: 20px;\n  }\n  ul {\n    div {\n      display: flex;\n    }\n    a:hover {\n      background-color: $yellow-light;\n    }\n    li {\n      padding: 0 20px;\n    }\n  }\n}\n\n",".homepage-background-image {\n  height: -webkit-fill-available;\n}\n.homepage-content {\n  @include centeredText;\n  .brand-tagline {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: $pink-light;\n    .brand-logo {\n      font-size: 100px;\n    }\n    span {\n      font-size: 35px;\n      margin: 10px;\n      font-family: 'Rochester', cursive;\n    }\n    hr {\n      background-color: $pink-light;\n      width: 100%;\n      height: 2px;\n      border: none;\n    }\n  }\n}\n\n",'@mixin centeredText {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@mixin waterBrushStroke {\n  background-image: url("../../images/yellow-watercolor-brush.png");\n  background-repeat: no-repeat;\n  padding: 8px 0;\n}\n']}])}}]);
//# sourceMappingURL=3.js.map