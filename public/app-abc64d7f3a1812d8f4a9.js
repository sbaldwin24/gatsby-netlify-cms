webpackJsonp([0xd2a57dc1d883],{54:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(302),options:{plugins:[],siteUrl:"https://nostalgic-morse-7a6322.netlify.com"}},{plugin:t(304),options:{plugins:[]}},{plugin:t(316),options:{plugins:[]}},{plugin:t(305),options:{plugins:[],trackingId:"UA-"}},{plugin:t(307),options:{plugins:[],color:"#465C6D",showSpinner:!1}},{plugin:t(309),options:{plugins:[]}}]},123:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(272),"component---src-templates-post-js":t(280),"component---src-pages-404-js":t(274),"component---src-pages-about-js":t(275),"component---src-pages-blog-js":t(276),"component---src-pages-contact-js":t(277),"component---src-pages-index-js":t(278),"component---src-pages-thanks-js":t(279)},e.json={"layout-index.json":t(281),"offline-plugin-app-shell-fallback.json":t(297),"from-failure-to-launch-hajj-hackathon.json":t(290),"we-are-truly-living-in-a-simulation.json":t(301),"the-tech-tools-i-use.json":t(299),"istanbul-trip.json":t(295),"unnamed.json":t(300),"build-your-perceptron.json":t(287),"first-time-first-prize.json":t(289),"getting-my-first-job-offer.json":t(291),"hps-hackathon.json":t(293),"how-i-learned-design-and-dev.json":t(292),"never-work-for-free.json":t(296),"about-me-so-far.json":t(285),"404.json":t(282),"about.json":t(284),"blog.json":t(286),"contact.json":t(288),"index.json":t(294),"thanks.json":t(298),"404-html.json":t(283)},e.layouts={"layout---index":t(273)}},124:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(1),c=o(s),l=t(2),f=o(l),p=t(79),d=o(p),m=t(41),h=o(m),g=t(54),y=t(434),v=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},b=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,v.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);b.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=b,n.exports=e.default},41:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(343),a=o(r),u=(0,a.default)();n.exports=u},125:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(53),a=t(80),u=o(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},126:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(111),a=o(r),u=t(54),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},283:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(321)})})}},282:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(322)})})}},285:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd1d5490b7760,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(323)})})}},284:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(324)})})}},286:function(n,e,t){t(3),n.exports=function(n){return t.e(49683490770531,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(325)})})}},287:function(n,e,t){t(3),n.exports=function(n){return t.e(19874082661528,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(326)})})}},288:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(327)})})}},289:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe3bb4585a21d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(328)})})}},290:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe8158281c425,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(329)})})}},291:function(n,e,t){t(3),n.exports=function(n){return t.e(0xfa60e2b7ef60,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(330)})})}},292:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf8ff21bb95b5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(331)})})}},293:function(n,e,t){t(3),n.exports=function(n){return t.e(54707946475366,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(332)})})}},294:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(333)})})}},295:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd3193fe44cf9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(334)})})}},281:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(73)})})}},296:function(n,e,t){t(3),n.exports=function(n){return t.e(88405902926005,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(335)})})}},297:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(336)})})}},298:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd060d772e5e0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(337)})})}},299:function(n,e,t){t(3),n.exports=function(n){return t.e(0x70cc1d038127,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(338)})})}},300:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd7d5a2aeb86a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(339)})})}},301:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc4cbc6ecdd4f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(340)})})}},273:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(127)})})}},79:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(125)),u=o(a),i=t(41),s=o(i),c=t(80),l=o(c),f=void 0,p={},d={},m={},h={},g={},y=[],v=[],x={},b="",j=[],w={},R=function(n){return n&&n.default||n},k=void 0,C=!0,N=[],_={},P={},E=5;k=t(128)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){j=j.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var S=function(n,e){return w[n]>w[e]?1:w[n]<w[e]?-1:0},O=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,N.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),N=N.slice(-E),t(n,o)})}},T=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=R(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=N.find(function(n){return n.succeeded});return!!e},U=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,D={empty:function(){v=[],x={},w={},j=[],y=[],b=""},addPagesArray:function(n){y=n,f=(0,u.default)(n,b)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,b);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,D.has(e)||v.unshift(e),v.sort(O);var o=f(e);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+t:w[o.jsonName]=1+t,j.indexOf(o.jsonName)!==-1||h[o.jsonName]||j.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+t:w[o.componentChunkName]=1+t,j.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||j.unshift(o.componentChunkName)),j.sort(S),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:w}},getPages:function(){return{pathArray:v,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(_[e])return U(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return U(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return T(o.componentChunkName,function(n,e){n&&U(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),T(o.jsonName,function(n,e){n&&U(o.path,"Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&T(o.layout,function(n,e){n&&U(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:D.getResourcesForPathname};e.default=D}).call(e,t(75))},341:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"from-failure-to-launch-hajj-hackathon.json",path:"/from-failure-to-launch-hajj-hackathon"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"we-are-truly-living-in-a-simulation.json",path:"/we-are-truly-living-in-a-simulation"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"the-tech-tools-i-use.json",path:"/the-tech-tools-I-use"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"istanbul-trip.json",path:"/istanbul-trip"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"unnamed.json",path:"/unnamed"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"build-your-perceptron.json",path:"/build-your-perceptron"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"first-time-first-prize.json",path:"/first-time-first-prize"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"getting-my-first-job-offer.json",path:"/getting-my-first-job-offer"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"hps-hackathon.json",path:"/hps-hackathon"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"how-i-learned-design-and-dev.json",path:"/how-I-learned-design-and-dev"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"never-work-for-free.json",path:"/never-work-for-free"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about-me-so-far.json",path:"/about-me-so-far"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-thanks-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"thanks.json",path:"/thanks/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},128:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(54),u=t(1),i=o(u),s=t(109),c=o(s),l=t(53),f=t(315),p=t(264),d=o(p),m=t(21),h=t(126),g=o(h),y=t(41),v=o(y),x=t(341),b=o(x),j=t(342),w=o(j),R=t(124),k=o(R),C=t(123),N=o(C),_=t(79),P=o(_);t(182),window.___history=g.default,window.___emitter=v.default,P.default.addPagesArray(b.default),P.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=w.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),S=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};S(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){S(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(129);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(s),i(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var i=e?window.___history.replace:window.___history.push,s=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:r}),i(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(s),i(o)):v.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,r({page:!0},o)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],s=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return s(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},342:function(n,e){n.exports=[]},129:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(41),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},80:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},264:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},302:function(n,e){"use strict";e.onRouteUpdate=function(n){var e=n.location,t=document.querySelector("link[rel='canonical']"),o=t.getAttribute("href"),r=t.getAttribute("data-baseProtocol"),a=t.getAttribute("data-baseHost");o&&r&&a&&t.setAttribute("href",r+"//"+a+e.pathname+e.search+e.hash)}},303:function(n,e,t){"use strict";var o=t(16);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var i=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!i.test(""+a.host+a.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},304:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(16),a=t(303),u=o(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},305:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},307:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(19),a=o(r),u=t(345),i=o(u),s={color:"#29d"};e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.default)({},s,e);window.___emitter.on("onDelayedLoadPageResources",function(){i.default.configure(t),i.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){i.default.done()});var o="\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: "+t.color+";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+t.color+", 0 0 5px "+t.color+";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: "+t.color+";\n      border-left-color: "+t.color+";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n",r=document.createElement("style");r.id="nprogress-styles",r.innerHTML=o,document.head.appendChild(r)}},272:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(308)})})}},309:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},316:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},343:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},345:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function i(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var s={};s.version="0.2.0";var c=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},s.status=null,s.set=function(e){var o=s.isStarted();e=n(e,c.minimum,1),s.status=1===e?null:e;var r=s.render(!o),a=r.querySelector(c.barSelector),u=c.speed,i=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=s.getPositioningCSS()),f(a,t(e,u,i)),1===e?(f(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){f(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){s.remove(),n()},u)},u)):setTimeout(n,u)}),this},s.isStarted=function(){return"number"==typeof s.status},s.start=function(){s.status||s.set(0);var n=function(){setTimeout(function(){s.status&&(s.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},s.done=function(n){return n||s.status?s.inc(.3+.5*Math.random()).set(1):this},s.inc=function(e){var t=s.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),s.set(t)):s.start()},s.trickle=function(){return s.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;s.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&s.start(),n++,e++,t.always(function(){e--,0===e?(n=0,s.done()):s.set((n-e)/n)}),this):this}}(),s.render=function(n){if(s.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(s.status||0),l=document.querySelector(c.parent);return f(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&i(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},s.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&i(n)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";
return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),f=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return s})},434:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},274:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(166)})})}},275:function(n,e,t){t(3),n.exports=function(n){return t.e(0xefeaa6d1881d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(167)})})}},276:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc19374f83753,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(168)})})}},277:function(n,e,t){t(3),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(169)})})}},278:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(170)})})}},279:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe6ac1b921d9d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(171)})})}},280:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb1abc741118f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(172)})})}}});
//# sourceMappingURL=app-abc64d7f3a1812d8f4a9.js.map