webpackJsonp([79611799117203,60335399758886],{73:function(t,e){t.exports={layoutContext:{}}},127:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(1),u=r(a),i=n(168),l=r(i),c=n(73),s=r(c);e.default=function(t){return u.default.createElement(l.default,o({},t,s.default))},t.exports=e.default},184:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.createChangeEmitter=function(){function t(){o===r&&(o=r.slice())}function e(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var n=!0;return t(),o.push(e),function(){if(n){n=!1,t();var r=o.indexOf(e);o.splice(r,1)}}}function n(){r=o;for(var t=r,e=0;e<t.length;e++)t[e].apply(t,arguments)}var r=[],o=r;return{listen:e,emit:n}}},376:function(t,e){"use strict";function n(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function r(t){function e(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}this.setState(e.bind(this))}function o(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var a=null,u=null,i=null;if("function"==typeof e.componentWillMount?a="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?u="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(u="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?i="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==u||null!==i){var l=t.displayName||t.name,c="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==u?"\n  "+u:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=n,e.componentWillReceiveProps=r),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=o;var s=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,t,e,r)}}return t}Object.defineProperty(e,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,e.polyfill=a},434:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t){var e=function(t){return t.children(t)};return t(e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=r(a),i=r(n(19)),l=r(n(108)),c=r(n(12)),s=r(n(16)),f=r(n(15)),p=n(376),d=r(n(28)),m=r(n(42)),h=r(n(112)),v=n(184),y=r(n(440)),b=function(t,e){return function(n){return n[t]=e,n}},g=function(t){return b("displayName",t)},E=function(t){if("string"==typeof t)return t;if(t)return t.displayName||t.name||"Component"},_=function(t,e){return e+"("+E(t)+")"},S=function(t){return function(e){var n=a.createFactory(e),r=function(e){return n(t(e))};return r}},w=function(t){var e=S(function(e){return i({},e,"function"==typeof t?t(e):t)});return e},C=function(t,e){for(var n={},r=0;r<e.length;r++){var o=e[r];t.hasOwnProperty(o)&&(n[o]=t[o])}return n},P=function(t,e){return function(n){var r=a.createFactory(n),o="function"==typeof t?t:function(e,n){return!l(C(e,t),C(n,t))},u=function(t){function n(){var r,o,a;c(this,n);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return r=o=s(this,t.call.apply(t,[this].concat(i))),o.state={computedProps:e(o.props),prevProps:o.props},a=r,s(o,a)}return f(n,t),n.getDerivedStateFromProps=function(t,n){return o(n.prevProps,t)?{computedProps:e(t),prevProps:t}:null},n.prototype.render=function(){return r(i({},this.props,this.state.computedProps))},n}(a.Component);return p.polyfill(u),u}},N=function(t,e){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r],r));return n},F=function(t){return function(e){var n=a.createFactory(e),r=function(t){function e(){var n,r,a;c(this,e);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return n=r=s(this,t.call.apply(t,[this].concat(i))),o.call(r),a=n,s(r,a)}return f(e,t),e.prototype.render=function(){return n(i({},this.props,this.handlers))},e}(a.Component),o=function(){var e=this;this.handlers=N("function"==typeof t?t(this.props):t,function(t){return function(){var n=t(e.props);return n.apply(void 0,arguments)}})};return r}},x=function(t){return function(e){var n=a.createFactory(e),r=function(t){return n(t)};return r.defaultProps=t,r}},U=function(t,e){for(var n=d(t,[]),r=0;r<e.length;r++){var o=e[r];n.hasOwnProperty(o)&&delete n[o]}return n},M=function(t,e){var n=S(function(n){var r;return i({},U(n,[t]),(r={},r[e]=n[t],r))});return n},O=m,k=function(t,e){return O(t).reduce(function(n,r){var o=t[r];return n[e(o,r)]=o,n},{})},W=function(t){var e=S(function(e){return i({},U(e,O(t)),k(C(e,O(t)),function(e,n){return t[n]}))});return e},A=function(t){return function(e){var n=a.createFactory(e),r=function(e){return n(i({},e,e[t]))};return r}},D=function(t,e,n){return function(r){var o=a.createFactory(r),u=function(r){function a(){var t,e,o;c(this,a);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return t=e=s(this,r.call.apply(r,[this].concat(i))),e.state={stateValue:"function"==typeof n?n(e.props):n},e.updateStateValue=function(t,n){return e.setState(function(e){var n=e.stateValue;return{stateValue:"function"==typeof t?t(n):t}},n)},o=t,s(e,o)}return f(a,r),a.prototype.render=function(){var n;return o(i({},this.props,(n={},n[t]=this.state.stateValue,n[e]=this.updateStateValue,n)))},a}(a.Component);return u}},H=function(t,e){return function(n){var r=a.createFactory(n),o=function(t){function e(){var n,r,o;c(this,e);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=r=s(this,t.call.apply(t,[this].concat(i))),u.call(r),o=n,s(r,o)}return f(e,t),e.prototype.shouldComponentUpdate=function(t,e){var n=t!==this.props,r=!l(e,this.state);return n||r},e.prototype.render=function(){return r(i({},this.props,this.state,this.stateUpdaters))},e}(a.Component),u=function(){var n=this;this.state="function"==typeof t?t(this.props):t,this.stateUpdaters=N(e,function(t){return function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];e&&"function"==typeof e.persist&&e.persist(),n.setState(function(n,r){return t(n,r).apply(void 0,[e].concat(o))})}})};return o}},T=function(){},V=function(t,e,n,r){return function(o){var u=a.createFactory(o),l=function(o){function a(){var t,e,r;c(this,a);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return t=e=s(this,o.call.apply(o,[this].concat(i))),e.state={stateValue:e.initializeStateValue()},e.dispatch=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;return e.setState(function(e){var r=e.stateValue;return{stateValue:n(r,t)}},function(){return r(e.state.stateValue)})},r=t,s(e,r)}return f(a,o),a.prototype.initializeStateValue=function(){return void 0!==r?"function"==typeof r?r(this.props):r:n(void 0,{type:"@@recompose/INIT"})},a.prototype.render=function(){var n;return u(i({},this.props,(n={},n[t]=this.state.stateValue,n[e]=this.dispatch,n)))},a}(a.Component);return l}},I=function(t){return t},R=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I;return function(r){var o=void 0,u=void 0,i=function(i){return t(i)?(o=o||a.createFactory(e(r)))(i):(u=u||a.createFactory(n(r)))(i)};return i}},j=function(t){return function(e){var n=a.createFactory(t),r=function(t){return n(t)};return r}},B=function(t){function e(){return c(this,e),s(this,t.apply(this,arguments))}return f(e,t),e.prototype.render=function(){return null},e}(a.Component),L=function(t){return B},G=function(t){return function(e){var n=a.createFactory(e),r=function(e){function r(){return c(this,r),s(this,e.apply(this,arguments))}return f(r,e),r.prototype.shouldComponentUpdate=function(e){return t(this.props,e)},r.prototype.render=function(){return n(this.props)},r}(a.Component);return r}},$=function(t){var e=G(function(t,e){return!l(t,e)});return e(t)},z=function(t){var e=G(function(e,n){return!l(C(n,t),C(e,t))});return e},J=function(t){var e=t.propTypes,n=m(e||{}),r=z(n)(t);return r},q=function(t,e){return function(n){var r=a.createFactory(n),o=function(t){function n(){var r,o,a;c(this,n);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return r=o=s(this,t.call.apply(t,[this].concat(i))),o.getChildContext=function(){return e(o.props)},a=r,s(o,a)}return f(n,t),n.prototype.render=function(){return r(this.props)},n}(a.Component);return o.childContextTypes=t,o}},K=function(t){return function(e){var n=a.createFactory(e),r=function(t,e){return n(i({},t,e))};return r.contextTypes=t,r}},Y=function(t){return function(e){var n=a.createFactory(e),r=function(t){function e(){return c(this,e),s(this,t.apply(this,arguments))}return f(e,t),e.prototype.render=function(){return n(i({},this.props,this.state))},e}(a.Component);return m(t).forEach(function(e){return r.prototype[e]=t[e]}),r}},Q=function(t){return Boolean(t&&t.prototype&&"function"==typeof t.prototype.render)},X=function(t){var e,n;return Q(t)?t:(n=e=function(e){function n(){return c(this,n),s(this,e.apply(this,arguments))}return f(n,e),n.prototype.render=function(){return"string"==typeof t?u.createElement(t,this.props):t(this.props,this.context)},n}(a.Component),e.displayName=E(t),e.propTypes=t.propTypes,e.contextTypes=t.contextTypes,e.defaultProps=t.defaultProps,n)},Z=function(t){return b("propTypes",t)},tt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}},function(t){return t})},et=function(t){var e=function(e){function n(){var t,r,o;c(this,n);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return t=r=s(this,e.call.apply(e,[this].concat(u))),r.state={},o=t,s(r,o)}return f(n,e),n.getDerivedStateFromProps=function(e){return t(e),null},n.prototype.render=function(){return null},n}(a.Component);return p.polyfill(e),e},nt=function(t){var e=function(e){return a.createElement(e[t],U(e,[t]))};return e.displayName="componentFromProp("+t+")",e},rt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(a.createFactory),o=function(t){var e=t.children,n=d(t,["children"]);return r.reduceRight(function(t,e){return e(n,t)},e)};return o},ot=function(t,e){return function(n){var r=t(n);return h(r,n,e),r}},at={fromESObservable:null,toESObservable:null},ut=function(t){at=t},it={fromESObservable:function(t){return"function"==typeof at.fromESObservable?at.fromESObservable(t):t},toESObservable:function(t){return"function"==typeof at.toESObservable?at.toESObservable(t):t}},lt=function(t){return function(e){return function(n){function r(){var o,a,u,i;c(this,r);for(var l=arguments.length,f=Array(l),p=0;p<l;p++)f[p]=arguments[p];return a=u=s(this,n.call.apply(n,[this].concat(f))),u.state={vdom:null},u.propsEmitter=v.createChangeEmitter(),u.props$=t.fromESObservable((o={subscribe:function(t){var e=u.propsEmitter.listen(function(e){e?t.next(e):t.complete()});return{unsubscribe:e}}},o[y]=function(){return this},o)),u.vdom$=t.toESObservable(e(u.props$)),i=a,s(u,i)}return f(r,n),r.prototype.componentWillMount=function(){var t=this;this.subscription=this.vdom$.subscribe({next:function(e){t.setState({vdom:e})}}),this.propsEmitter.emit(this.props)},r.prototype.componentWillReceiveProps=function(t){this.propsEmitter.emit(t)},r.prototype.shouldComponentUpdate=function(t,e){return e.vdom!==this.state.vdom},r.prototype.componentWillUnmount=function(){this.propsEmitter.emit(),this.subscription.unsubscribe()},r.prototype.render=function(){return this.state.vdom},r}(a.Component)}},ct=function(t){return lt(it)(t)},st=function(t){return t},ft=function(t){var e=lt({fromESObservable:st,toESObservable:st});return function(n){return function(r){var o=a.createFactory(r),u=t.fromESObservable,i=t.toESObservable;return e(function(t){var e;return e={subscribe:function(e){var r=i(n(u(t))).subscribe({next:function(t){return e.next(o(t))}});return{unsubscribe:function(){return r.unsubscribe()}}}},e[y]=function(){return this},e})}}},pt=function(t){var e=ft(it)(t);return e},dt=function(t){return function(){var e,n=v.createChangeEmitter(),r=t.fromESObservable((e={subscribe:function(t){var e=n.listen(function(e){return t.next(e)});return{unsubscribe:e}}},e[y]=function(){return this},e));return{handler:n.emit,stream:r}}},mt=dt(it);e.mapProps=S,e.withProps=w,e.withPropsOnChange=P,e.withHandlers=F,e.defaultProps=x,e.renameProp=M,e.renameProps=W,e.flattenProp=A,e.withState=D,e.withStateHandlers=H,e.withReducer=V,e.branch=R,e.renderComponent=j,e.renderNothing=L,e.shouldUpdate=G,e.pure=$,e.onlyUpdateForKeys=z,e.onlyUpdateForPropTypes=J,e.withContext=q,e.getContext=K,e.lifecycle=Y,e.toClass=X,e.withRenderProps=o,e.setStatic=b,e.setPropTypes=Z,e.setDisplayName=g,e.compose=tt,e.getDisplayName=E,e.wrapDisplayName=_,e.shallowEqual=l,e.isClassComponent=Q,e.createSink=et,e.componentFromProp=nt,e.nest=rt,e.hoistStatics=ot,e.componentFromStream=ct,e.componentFromStreamWithConfig=lt,e.mapPropsStream=pt,e.mapPropsStreamWithConfig=ft,e.createEventHandler=mt,e.createEventHandlerWithConfig=dt,e.setObservableConfig=ut},440:function(t,e,n){(function(t,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a,u=n(441),i=o(u);a="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof t?t:r;var l=(0,i.default)(a);e.default=l}).call(e,function(){return this}(),n(460)(t))},441:function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},460:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},137:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(14),i=r(u),l=function(){return a.default.createElement("div",{style:{padding:"1rem",margin:"0 auto",maxWidth:960,textAlign:"center"}},a.default.createElement("p",{style:{margin:0}},"© ",a.default.createElement(i.default,{to:"/"},"Smakosh")," 2016-",(new Date).getFullYear()+" ","Built with ",a.default.createElement("a",{href:"https://www.gatsbyjs.org",rel:"noopener noreferrer",target:"_blank"},"GatsbyJS"),", Open sourced on ",a.default.createElement("a",{href:"https://github.com/smakosh/smakosh.com",rel:"noopener noreferrer",target:"_blank"},"Github")," and deployed on ",a.default.createElement("a",{href:"https://www.netlify.com",rel:"noopener noreferrer",target:"_blank"},"Netlify")))};e.default=l,t.exports=e.default},138:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(14),i=r(u),l=n(5),c=n(137),s=r(c);n(353);var f=function(){return a.default.createElement("footer",null,a.default.createElement("div",{className:"footer-full gradient-blue"},a.default.createElement(l.Container,{className:"footer"},a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement(i.default,{className:"brand-footer",to:"/"},a.default.createElement(l.Logo,{className:"logo-footer",color:"#fff",strokeWidth:"2"})," Smakosh"))),a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement(i.default,{to:"/about"},"About")),a.default.createElement("li",null,a.default.createElement(i.default,{to:"/contact"},"Contact")),a.default.createElement("li",null,a.default.createElement(i.default,{to:"/blog"},"Blog"))),a.default.createElement("ul",null,a.default.createElement("li",null,"Follow me on"),a.default.createElement("li",null,a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"follow me on Twitter",className:"social",href:"https://twitter.com/smakosh"},a.default.createElement(l.Twitter,{className:"grow",width:"24",height:"24"})),a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"follow me on Github",className:"social",href:"https://github.com/smakosh"},a.default.createElement(l.GithubIcon,{className:"grow",width:"24",height:"24"})),a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"follow me on Instagram",className:"social",href:"https://instagram.com/smakosh19"},a.default.createElement(l.Instagram,{className:"grow",width:"24",height:"24"})),a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"follow me on Unsplash",className:"social",href:"https://unsplash.com/smakosh"},a.default.createElement(l.Unsplash,{className:"grow",width:"24",height:"24"})),a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"follow me on LinkedIn",href:"https://linkedin.com/in/ismail-ghallou-630149122"},a.default.createElement(l.Linkedin,{className:"grow",width:"24",height:"24"})))))),a.default.createElement(s.default,null))};e.default=f,t.exports=e.default},353:function(t,e){},139:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(20),i=r(u);n(354);var l=function(t){var e=t.sidebar,n=t.toggle,r=t.isHomePage;return a.default.createElement("div",{className:(0,i.default)("hamb",{active:e,fixed:r,absolute:!r}),onClick:n},a.default.createElement("div",{className:"top"}),a.default.createElement("div",{className:"mid"}),a.default.createElement("div",{className:"bottom"}))};e.default=l,t.exports=e.default},354:function(t,e){},140:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(14),i=r(u),l=n(5);n(355);var c=function(){return a.default.createElement(l.Container,{className:"nav"},a.default.createElement("div",{className:"nav",style:{display:"flex",alignItems:"center"}},a.default.createElement(i.default,{to:"/"},a.default.createElement(l.Logo,{className:"logo",fill:"#fff",width:"400px",height:"auto"})),a.default.createElement("div",{className:"links"},a.default.createElement(i.default,{to:"/",activeClassName:"current",exact:!0},"Home"),a.default.createElement(i.default,{to:"/about",activeClassName:"current"},"Companies"),a.default.createElement(i.default,{to:"/blog",activeClassName:"current"},"Founders"),a.default.createElement(i.default,{to:"/contact",activeClassName:"current"},"Contact"))))};e.default=c,t.exports=e.default},355:function(t,e){},141:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(14),i=r(u),l=n(20),c=r(l);n(356);var s=function(t){var e=t.sidebar,n=t.toggle;return a.default.createElement("div",{className:(0,c.default)("sidebar",{active:e}),onClick:n},a.default.createElement("div",{className:"items"},a.default.createElement(i.default,{to:"/",activeClassName:"current",exact:!0},"Home"),a.default.createElement(i.default,{to:"/about",activeClassName:"current"},"About"),a.default.createElement(i.default,{to:"/blog",activeClassName:"current"},"Blog"),a.default.createElement(i.default,{to:"/contact",activeClassName:"current"},"Contact")))};e.default=s,t.exports=e.default},356:function(t,e){},142:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(14),i=n(434),l=n(20),c=r(l),s=n(140),f=r(s),p=n(139),d=r(p),m=n(141),h=r(m);n(357);var v=function(t){var e=t.sidebar,n=t.toggle,r=t.isHomePage;return a.default.createElement("div",{className:(0,c.default)("header",{"fixed-header":r})},a.default.createElement("div",{className:(0,c.default)("overlay",{active:e}),onClick:n}),a.default.createElement(f.default,null),a.default.createElement(d.default,{isHomePage:r,sidebar:e,toggle:n}),a.default.createElement(h.default,{sidebar:e,toggle:n}))},y=(0,i.compose)((0,i.withStateHandlers)(function(t){var e=t.initialStep,n=void 0!==e&&e;return{sidebar:n}},{toggle:function(t){var e=t.sidebar;return function(){return{sidebar:!e}}}}),(0,i.lifecycle)({componentDidMount:function(){location.pathname===(0,u.withPrefix)("/")&&this.setState({isHomePage:!0})}}));e.default=y(v),t.exports=e.default},357:function(t,e){},143:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Footer=e.Header=void 0;var o=n(142),a=r(o),u=n(138),i=r(u);e.Header=a.default,e.Footer=i.default},168:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),a=r(o),u=n(5),i=n(143);n(365),n(366);var l=function(t){var e=t.children;return a.default.createElement("div",null,a.default.createElement(i.Header,null),a.default.createElement("div",null,e(),a.default.createElement(u.Subscribe,null)),a.default.createElement(i.Footer,null))};e.default=l,t.exports=e.default},365:function(t,e){},366:function(t,e){}});
//# sourceMappingURL=component---src-layouts-index-jsx-7646469da9c14013ef90.js.map