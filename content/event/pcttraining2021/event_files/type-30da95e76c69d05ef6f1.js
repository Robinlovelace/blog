(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6387],{319540:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(667294),i=n(239704),o=n(477327),a=n(249286),s=n(466299),c=n(272616);function u(){var e=(0,i.v9)(a.PR),t=(0,s.Z)().event,n=t.organization,u=t.slug,l=t.external_id;return r.useEffect((function(){try{var t;if(e&&null!==e&&void 0!==e&&e.id)null===o.Z||void 0===o.Z||o.Z.setUserId(null===e||void 0===e?void 0:e.id),null===o.Z||void 0===o.Z||o.Z.setUserProperties({eventExternalId:l,eventSlug:u,internal_user:Boolean(null===e||void 0===e||null===(t=e.email)||void 0===t?void 0:t.includes("@hopin.")),organization_external_id:n.external_id,organization_name:n.name,organization_payment_plan:n.payment_plan_name})}catch(r){c.Z.error(r,{details:"error on setting amplitude user properties"})}}),[l,n.external_id,n.name,n.payment_plan_name,u,e]),null}},1032:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(392809),i=n(610219),o=n(994465),a=n(619010),s=n(441609),c=n.n(s),u=n(884967),l=n(667294),d=n(85701),p=n(333715),f=n(199350),v=n(843876),g=n(272616);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){var n=JSON.parse(JSON.stringify(e));function r(t,i){var o=e[i];-1!==o.nodes.indexOf(t)?n[i]=w(w({},n[i]),{},{nodes:n[i].nodes.filter((function(e){return e!==t}))}):(delete n[i],r(i,o.parent))}var i={};return function o(a){var s=e[a];if(s){var c=s.linkedNodes;Object.keys(c).forEach((function(e){o(c[e])})),s.nodes.forEach((function(e){return o(e)}));var u="string"===typeof s.type?s.type:s.type.resolvedName;if(!t[u]){var l="".concat(u||s.displayName," is missing from the resolver, removing from tree");i[l]||(i[l]=!0,g.Z.error(new Error(l),{details:"missing resolver"})),s.parent&&(delete n[a],r(a,s.parent))}}}(o.QS),n}var h=n(785893),b=["data"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=d.default.div.withConfig({displayName:"editor-frame-component__ViewportDiv",componentId:"sc-1g1sof5-0"})(["height:100%;margin:auto;padding:0 ",";transition:150ms ease-out;opacity:",";transform:translate(0);"],(function(e){return e.isEditing?(0,u.rem)(48):0}),(function(e){return e.isReady?1:0})),_=parseInt(a.LAYOUT.MOBILE_MAX),E=parseInt(a.LAYOUT.TABLET_MAX),P=function(e){var t=(0,f.Z)(),n=t.viewport,r=t.setViewport,a=(0,o.jE)((function(e){return{isEditing:e.options.enabled}})).isEditing,s=(0,l.useMemo)((function(){var e="100%";return a?"mobile"===n?v.xU:"tablet"===n?v.dm:e:e}),[a,n]),u=(0,l.useState)(!1),d=u[0],m=u[1],w=(0,l.useCallback)((function(){if(!a){var e=window.innerWidth,t=n;(t=e<_?"mobile":e<E?"tablet":"desktop")!==n&&r(t)}}),[a,n,r]);(0,l.useLayoutEffect)((function(){if(window)return w(),m(!0),window.addEventListener("resize",w),function(){return window.removeEventListener("resize",w)}}),[w,m]);var j=e.data,P=(0,i.Z)(e,b),Z=(0,p.Z)().currentTheme,k=(0,l.useRef)(j),S=(0,l.useRef)(Z),N=(0,l.useMemo)((function(){return c()(k.current)?null:function(e,t){try{var n=y(e,t),r=JSON.stringify(n);return"object"===typeof JSON.parse(r)?"{}"===r?null:r:null}catch(i){return g.Z.error(i,{details:"invalid content object"}),null}}(k.current,S.current.blocks)}),[]);return(0,h.jsx)(x,{isEditing:a,isReady:d,"data-testid":"viewport-wrapper",style:{maxWidth:s},id:"viewport-wrapper",children:(0,h.jsx)(o.RQ,O({data:N},P))})}},791980:function(e,t,n){"use strict";var r=n(392809),i=n(610219),o=n(994465),a=n(667294),s=n(333715),c=["children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.children,n=(0,i.Z)(e,c),r=(0,s.Z)().currentTheme;return(0,a.createElement)(o.ML,l(l({},n),{},{resolver:l(l({},r.blocks),n.resolver||{})}),t)}},538454:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(809008),i=n(667294),o=n(179217),a=n(785893);function s(e){var t,n=e.event,s=(0,i.useMemo)((function(){return(0,o.wM)(n)}),[n]),c=s.title,u=s.description,l=s.pageUrl,d=s.imageUrl,p=null===(t=n.marketing)||void 0===t?void 0:t.analytics_code,f=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(p)}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(p,"', {\n              page_path: window.location.pathname,\n            });\n          ")}})]});return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:c}),(0,a.jsx)("meta",{name:"title",content:c}),(0,a.jsx)("meta",{name:"description",content:u}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:l}),(0,a.jsx)("meta",{property:"og:title",content:c}),(0,a.jsx)("meta",{property:"og:description",content:u}),d&&(0,a.jsx)("meta",{property:"og:image",content:d}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{property:"twitter:url",content:l}),(0,a.jsx)("meta",{property:"twitter:title",content:c}),(0,a.jsx)("meta",{property:"twitter:description",content:u}),d&&(0,a.jsx)("meta",{property:"twitter:image",content:d}),"hidden_event"===n.event_type||"private_event"===n.event_type?(0,a.jsx)("meta",{name:"robots",content:"noindex"}):null,p&&f]})}},487772:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return ie},default:function(){return oe}});var r=n(809008),i=n(667294),o=n(85701),a=n(319540),s=n(1032),c=n(530266),u=n(79056),l=n(252209),d=n(900809),p=n.n(d),f=n(366222),v=n(356014),g=n(597408),m=n(458646),w=n(728592),y=n(925443),h=n(439249),b=n(396883),j=n(466299),O=n(392809),x=n(243048),_=n(239704),E=n(187778),P=n(509683),Z=n(249286);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=n(199350);var I,R,T,L=n(582374),D=n(706791),M=n(191543),A=n(272616),C=n(965905),z=n(884967),G=n(134415),H=o.default.div.withConfig({displayName:"enter-event-banner-styles__Wrapper",componentId:"r8we7n-0"})(["position:sticky;top:0;z-index:var(--z-index-highest);padding:"," ",";background:#000;"],(0,z.rem)(12),(0,z.rem)(24)),U=(0,G.e)("div",{displayName:"SignalWrapper",componentId:"3xl412"})(I||(I=(0,l.Z)(["\n  padding: "," ",";\n  color: #fff;\n  background: #282828;\n  text-transform: uppercase;\n  flex-shrink: 0;\n\n  ","\n"])),(0,z.rem)(8),(0,z.rem)(12),(function(e){return e.$viewport.mobile(R||(R=(0,l.Z)(["\n    background: transparent;\n    padding: ",";\n  "])),(0,z.rem)(8))})),F=(0,o.default)(C.z).withConfig({displayName:"enter-event-banner-styles__StyledButton",componentId:"r8we7n-1"})(["width:max-content;"]),W=n(785893),J=(0,L.ZP)(),V=(0,o.createGlobalStyle)(T||(T=(0,l.Z)(["\n  :root {\n    /*\n      (Hack): When the banner is visible, we need all other sticky elements (ie: standalone navigation) \n      to be offsetted by the banner's height\n    */\n    --frame-sticky-offset: ","px!important;\n  }\n"])),(function(e){return e.height})),B=function(){var e=i.useState(!1),t=(0,u.Z)(e,2),n=t[0],r=t[1],o=(0,w.useFlags)().pageBuilderEventStates,a=(0,N.Z)().viewport,s="mobile"===a,l=(0,j.Z)().event,d=function(e){var t=e.slug,n=(0,E.T)(),r=(0,_.v9)(P.GM),o=(0,_.v9)(P.FC),a=(0,_.v9)(P.Po),s=(0,_.v9)(Z.PR);return(0,i.useEffect)((function(){n((0,P.W4)(t))}),[n,t]),{user:s,identify:function(){var e=(0,c.Z)(p().mark((function e(){var r,i,o,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((0,P.W4)(t));case 2:return r=e.sent,i=(0,x.SI)(r),e.next=6,n((0,P.JA)(t));case 6:return o=e.sent,a=(0,x.SI)(o),e.abrupt("return",S(S({},i),a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),isAuthenticationLoading:a,isRegistered:r,isSimpleFlow:o}}({slug:l.slug}),O=d.isSimpleFlow,k=d.isRegistered,I=d.user,R=d.identify,T=(0,y.$)().t,L=function(e){var t=e.onLoadError,n=e.onMessage,r=e.options,o=e.title,a=e.url,s=(0,i.useRef)(null);return(0,i.useEffect)((function(){return window.addEventListener("message",n),function(){window.removeEventListener("message",n)}}),[]),{openPopup:function(){return s.current=window.open(a,o,null!==r&&void 0!==r?r:"width=400,height=600,status=0,toolbar=0"),s.current||null===t||void 0===t||t(),s.current},closePopup:function(){null!==s.current&&s.current.close()}}}({title:"Sign in",url:J("HOPIN_SIGNIN"),onMessage:function(e){var t;"LOGGED_IN"===(null===(t=e.data)||void 0===t?void 0:t.status)&&(R().then(function(){var e=(0,c.Z)(p().mark((function e(t){var n,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.registered){e.next=3;break}return window.location.assign(J("IN_EVENT_RECEPTION_URL")(l.slug)),e.abrupt("return");case 3:if(!t.is_simple_flow){e.next=11;break}return r(!0),e.next=7,D.a.fetchJSON(J("REGISTRATION_SIMPLE_FLOW")(l.slug));case 7:n=e.sent,(0,M.V)(n)?(r(!1),i=new Error(null===n||void 0===n?void 0:n.description),A.Z.error(i,{details:"Failed to register attendee for simple flow based event"}),h.Am.error((0,W.jsx)(b.f,{icon:"warning",text:T("event-banner.failed-to-register")}))):window.location.assign(null===n||void 0===n?void 0:n.reception_url),e.next=12;break;case 11:h.Am.success((0,W.jsx)(b.f,{icon:"success",text:T("event-banner.signed-in")}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z())}}),C=L.openPopup,z=L.closePopup,G=i.useMemo((function(){return O||k||null===I}),[k,O,I]),B=i.useCallback((0,c.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==I){e.next=3;break}return C(),e.abrupt("return");case 3:if(k&&window.location.assign(J("IN_EVENT_RECEPTION_URL")(l.slug)),!O){e.next=19;break}return r(!0),e.prev=6,e.next=9,D.a.fetchJSON(J("REGISTRATION_SIMPLE_FLOW")(l.slug));case 9:t=e.sent,(0,M.V)(t)?(r(!1),A.Z.error(new Error(null===t||void 0===t?void 0:t.description),{details:"Failed to register attendee for simple flow based event"}),h.Am.error((0,W.jsx)(b.f,{icon:"warning",text:(0,M.O)(t)}))):window.location.assign(null===t||void 0===t?void 0:t.reception_url),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),A.Z.error(e.t0,{details:"Registration request for simple flow based event failed"});case 16:return e.prev=16,r(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[6,13,16,19]])}))),[l.slug,k,O,C,I]),X=i.useRef(null),Y=i.useState(0),Q=(0,u.Z)(Y,2),$=Q[0],q=Q[1],K=i.useCallback((function(){var e=X.current;if(e){var t=e.getBoundingClientRect().height;q(t)}}),[]);return i.useEffect((function(){K()}),[K,k,O,a]),i.useEffect((function(){return window.addEventListener("resize",K),function(){return window.removeEventListener("resize",K)}}),[K]),(0,W.jsxs)(H,{"data-testid":"enter-event-banner",ref:X,children:[(0,W.jsx)(V,{height:$}),(0,W.jsxs)(f.k,{justifyContent:"center",alignItems:"center",children:[(0,W.jsx)(U,{children:(0,W.jsx)(g.M,{colorPattern:"danger",isSonar:!0,label:s?"":"Live"})}),!I||k||O?s?(0,W.jsx)(m.x,{color:"grey-white",mr:1,children:"Happening now!"}):(0,W.jsx)(m.x,{className:"live-text",color:"grey-white",ml:2,mr:6,children:"Now, live on Hopin! Have tickets?"}):s?(0,W.jsx)(m.x,{color:"grey-white",mr:1,children:"You can still join \u2014 register now!"}):(0,W.jsx)(m.x,{"data-testid":"alt-live-text",color:"grey-white",ml:2,mr:6,children:"You can still join \u2014 register now! Got an invite? Check your email."}),!o&&(0,W.jsxs)(F,{size:"tiny",href:J("IN_EVENT_RECEPTION_URL")(l.slug),target:"_blank",rel:"noreferrer",children:["Enter event",(0,W.jsx)(v.Icon,{ml:1,color:"grey-white",name:"arrow-right"})]}),o&&G&&(0,W.jsx)(F,{size:"tiny",onClick:B,children:n?"Joining...":(0,W.jsxs)(i.Fragment,{children:[k||O?"Enter event":"Join event",(0,W.jsx)(v.Icon,{ml:1,color:"grey-white",name:"arrow-right"})]})})]})]})};function X(){var e=(0,j.Z)().event;return i.useMemo((function(){return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new Date(t.getTime()+6e4*(r.offsetStart||0)),o=new Date(n.getTime()+6e4*(r.offsetEnd||0));return e>i&&e<o}(new Date,new Date(e.time_start),new Date(e.time_end),{offsetStart:-30,offsetEnd:30})}),[e.time_start,e.time_end])?(0,W.jsx)(B,{}):null}var Y=n(791980),Q=n(538454),$=n(70294),q=n(975791),K=n(3564),ee=n(90269),te=n(630945),ne=n(9602),re=o.default.div.withConfig({displayName:"type__Wrapper",componentId:"xa3d8-0"})(["min-height:100vh;"]),ie=!0;function oe(e){var t=e.event,n=e.page,o=(0,te.Z)({event:t,page:n}).logAnalytics;return ne.Z?(0,W.jsx)(Q.Z,{event:e.event}):(o("REGISTRATION_PAGE_VIEWED",{type:"canvas"}),(0,W.jsxs)(i.Fragment,{children:[(0,W.jsx)(r.default,{children:(0,W.jsx)("script",{src:"https://cmp.osano.com/AzytefSbGfTPd1Hy1/fb180949-67fe-439c-ae8d-24c5f86acf8f/osano.js"})}),(0,W.jsx)(Q.Z,{event:t}),(0,W.jsx)($.Z,{event:t,children:(0,W.jsx)(K.Z,{children:(0,W.jsxs)(q.ZP,{page:n,children:[(0,W.jsx)(a.Z,{}),(0,W.jsx)(Y.Z,{enabled:!1,children:(0,W.jsx)(ee.Z,{children:(0,W.jsxs)(re,{children:[(0,W.jsx)(X,{}),(0,W.jsx)(s.Z,{data:n.content,children:(0,W.jsx)("div",{})})]})})})]})})})]}))}},179217:function(e,t,n){"use strict";n.d(t,{wM:function(){return o}});var r=n(390398),i=(0,n(582374).ZP)();function o(e){var t,n=e.name,o=void 0===n?"Hopin Canvas":n,a=e.short_description,s=e.slug,c=e.event_type,u=e.time_start,l=e.time_end,d="private_event"===c,p=d?"".concat(o," | Hopin"):o,f=i("HOPIN_REGISTRATION_PAGE")(s),v=d?"".concat(i("HOPIN_ROOT"),"/").concat("assets/hopin-thumb-20ef10c85dda7c226361e82ad455e6c30b0a96cbbf83db569454f9e30a2dd32c.png"):null===(t=e.marketing)||void 0===t?void 0:t.image_url,g=a||function(e,t,n){var i=(0,r.Z)(t,"dd/MM/yyyy"),o=(0,r.Z)(n,"dd/MM/yyyy");return"Get tickets to ".concat(e,", taking place ").concat(i," to ").concat(o,". Hopin is your source for engaging events and experiences.")}(o,u,l);return{title:p,pageUrl:f,description:d?"Hopin is an online events platform where you can create engaging virtual events that connect people around the globe.":g,imageUrl:v}}},123634:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]/[type]",function(){return n(487772)}])}},function(e){e.O(0,[9774,3662,7391,9743,9208,5380,1390,4417,5905,6210,1911,5675,5923,3033,8364,8548,2917,807,2888,179],(function(){return t=123634,e(e.s=t);var t}));var t=e.O();_N_E=t}]);