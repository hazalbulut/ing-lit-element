/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e,t,r={155:(e,t,r)=>{var n={"./tr.ts":[346,346]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=155,e.exports=o}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".bundle.js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="lit-element:",o.l=(r,n,i,s)=>{if(e[r])e[r].push(n);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var h=c[d];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==t+i){a=h;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[n];var u=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={792:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=i);var s=o.p+o.u(t),a=new Error;o.l(s,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[s,a,l]=r,c=0;if(s.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);l&&l(o)}for(t&&t(r);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunklit_element=self.webpackChunklit_element||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=n.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(r,e))}return e}toString(){return this.cssText}}const s=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new i(n,e,r)},a=(r,n)=>{if(t)r.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,f=globalThis,g=f.trustedTypes,v=g?g.emptyScript:"",_=f.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},w=(e,t)=>!c(e,t),$={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:o}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const i=n?.call(this);o.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=n,this[n]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??w)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[y("elementProperties")]=new Map,E[y("finalized")]=new Map,_?.({ReactiveElement:E}),(f.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,x=A.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+O,k=`<${S}>`,N=document,R=()=>N.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,U="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,M=/>/g,D=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),V=q(1),z=(q(2),q(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),K=new WeakMap,Q=N.createTreeWalker(N,129);function Y(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const G=(e,t)=>{const r=e.length-1,n=[];let o,i=2===t?"<svg>":3===t?"<math>":"",s=j;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===j?"!--"===l[1]?s=I:void 0!==l[1]?s=M:void 0!==l[2]?(F.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=D):void 0!==l[3]&&(s=D):s===D?">"===l[0]?(s=o??j,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?D:'"'===l[3]?H:B):s===H||s===B?s=D:s===I||s===M?s=j:(s=D,o=void 0);const h=s===D&&e[t+1].startsWith("/>")?" ":"";i+=s===j?r+k:c>=0?(n.push(a),r.slice(0,c)+P+r.slice(c)+O+h):r+O+(-2===c?t:h)}return[Y(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class J{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0;const s=e.length-1,a=this.parts,[l,c]=G(e,t);if(this.el=J.createElement(l,r),Q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Q.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(P)){const t=c[i++],r=n.getAttribute(e).split(O),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:s[2],strings:r,ctor:"."===s[1]?re:"?"===s[1]?ne:"@"===s[1]?oe:te}),n.removeAttribute(e)}else e.startsWith(O)&&(a.push({type:6,index:o}),n.removeAttribute(e));if(F.test(n.tagName)){const e=n.textContent.split(O),t=e.length-1;if(t>0){n.textContent=x?x.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],R()),Q.nextNode(),a.push({type:2,index:++o});n.append(e[t],R())}}}else if(8===n.nodeType)if(n.data===S)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(O,e+1));)a.push({type:7,index:o}),e+=O.length-1}o++}}static createElement(e,t){const r=N.createElement("template");return r.innerHTML=e,r}}function Z(e,t,r=e,n){if(t===z)return t;let o=void 0!==n?r._$Co?.[n]:r._$Cl;const i=L(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=o:r._$Cl=o),void 0!==o&&(t=Z(e,o._$AS(e,t.values),o,n)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??N).importNode(t,!0);Q.currentNode=n;let o=Q.nextNode(),i=0,s=0,a=r[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new ee(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new ie(o,this,e)),this._$AV.push(t),a=r[++s]}i!==a?.index&&(o=Q.nextNode(),i++)}return Q.currentNode=N,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),L(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=J.createElement(Y(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new X(n,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new J(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const o of e)n===t.length?t.push(r=new ee(this.O(R()),this.O(R()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}_$AI(e,t=this,r,n){const o=this.strings;let i=!1;if(void 0===o)e=Z(this,e,t,0),i=!L(e)||e!==this._$AH&&e!==z,i&&(this._$AH=e);else{const n=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=Z(this,n[r+s],t,s),a===z&&(a=this._$AH[s]),i||=!L(a)||a!==this._$AH[s],a===W?e=W:e!==W&&(e+=(a??"")+o[s+1]),this._$AH[s]=a}i&&!n&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ne extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends te{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??W)===z)return;const r=this._$AH,n=e===W&&r!==W||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==W&&(r===W||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const se=A.litHtmlPolyfillSupport;se?.(J,ee),(A.litHtmlVersions??=[]).push("3.2.1");class ae extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(void 0===o){const e=r?.renderBefore??null;n._$litPart$=o=new ee(t.insertBefore(R(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}ae._$litElement$=!0,ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ae});const le=globalThis.litElementPolyfillSupport;le?.({LitElement:ae}),(globalThis.litElementVersions??=[]).push("4.1.1");const ce=e=>(t,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},de={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w},he=(e=de,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const o=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,o,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const o=this[n];t.call(this,r),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};function ue(e){return(t,r)=>"object"==typeof r?he(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function pe(e){return ue({...e,state:!0,attribute:!1})}function me(e){return e=e||[],Array.isArray(e)?e:[e]}function fe(e){return`[Vaadin.Router] ${e}`}const ge="module",ve="nomodule",_e=[ge,ve];function ye(e){if(!e.match(/.+\.[m]?js$/))throw new Error(fe(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function be(e){if(!e||!Ce(e.path))throw new Error(fe('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!(xe(e.action)||Array.isArray(e.children)||xe(e.children)||Ae(t)||r.some((t=>Ce(e[t])))))throw new Error(fe(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(Ce(t))ye(t);else{if(!_e.some((e=>e in t)))throw new Error(fe('Expected route bundle to include either "'+ve+'" or "'+ge+'" keys, or both'));_e.forEach((e=>e in t&&ye(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(fe(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function we(e){me(e).forEach((e=>be(e)))}function $e(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===ge?r.setAttribute("type",ge):t===ve&&r.setAttribute(ve,""),r.async=!0),new Promise(((e,t)=>{r.onreadystatechange=r.onload=t=>{r.__dynamicImportLoaded=!0,e(t)},r.onerror=e=>{r.parentNode&&r.parentNode.removeChild(r),t(e)},null===r.parentNode?document.head.appendChild(r):r.__dynamicImportLoaded&&e()}))}function Ee(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function Ae(e){return"object"==typeof e&&!!e}function xe(e){return"function"==typeof e}function Ce(e){return"string"==typeof e}function Pe(e){const t=new Error(fe(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const Oe=new class{};function Se(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<r.length;e++){const n=r[e];if(n.nodeName&&"a"===n.nodeName.toLowerCase()){t=n;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const n=t.origin||function(e){const t=e.port,r=e.protocol;return`${r}//${"http:"===r&&"80"===t||"https:"===r&&"443"===t?e.hostname:e.host}`}(t);if(n!==window.location.origin)return;const{pathname:o,search:i,hash:s}=t;Ee("go",{pathname:o,search:i,hash:s})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const ke={activate(){window.document.addEventListener("click",Se)},inactivate(){window.document.removeEventListener("click",Se)}};function Ne(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:r,hash:n}=window.location;Ee("go",{pathname:t,search:r,hash:n})}/Trident/.test(navigator.userAgent)&&!xe(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);const Re={activate(){window.addEventListener("popstate",Ne)},inactivate(){window.removeEventListener("popstate",Ne)}};var Le=function e(t,r,n){return t instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,r):Array.isArray(t)?function(t,r,n){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],r,n).source);return new RegExp("(?:"+o.join("|")+")",Ve(n))}(t,r,n):function(e,t,r){return ze(Be(e,r),t,r)}(t,r,n)},Te=Be,Ue=He,je=ze,Ie="/",Me="./",De=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Be(e,t){for(var r,n=[],o=0,i=0,s="",a=t&&t.delimiter||Ie,l=t&&t.delimiters||Me,c=!1;null!==(r=De.exec(e));){var d=r[0],h=r[1],u=r.index;if(s+=e.slice(i,u),i=u+d.length,h)s+=h[1],c=!0;else{var p="",m=e[i],f=r[2],g=r[3],v=r[4],_=r[5];if(!c&&s.length){var y=s.length-1;l.indexOf(s[y])>-1&&(p=s[y],s=s.slice(0,y))}s&&(n.push(s),s="",c=!1);var b=""!==p&&void 0!==m&&m!==p,w="+"===_||"*"===_,$="?"===_||"*"===_,E=p||a,A=g||v;n.push({name:f||o++,prefix:p,delimiter:E,optional:$,repeat:w,partial:b,pattern:A?qe(A):"[^"+Fe(E)+"]+?"})}}return(s||i<e.length)&&n.push(s+e.substr(i)),n}function He(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",i=n&&n.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var l,c=r?r[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=i(c[d],a),!t[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===d?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(l=i(String(c),a),!t[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');o+=a.prefix+l}}else o+=a}return o}}function Fe(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function qe(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Ve(e){return e&&e.sensitive?"":"i"}function ze(e,t,r){for(var n=(r=r||{}).strict,o=!1!==r.start,i=!1!==r.end,s=Fe(r.delimiter||Ie),a=r.delimiters||Me,l=[].concat(r.endsWith||[]).map(Fe).concat("$").join("|"),c=o?"^":"",d=0===e.length,h=0;h<e.length;h++){var u=e[h];if("string"==typeof u)c+=Fe(u),d=h===e.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+Fe(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?c+=Fe(u.prefix)+"("+p+")?":c+="(?:"+Fe(u.prefix)+"("+p+"))?":c+=Fe(u.prefix)+"("+p+")"}}return i?(n||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(n||(c+="(?:"+s+"(?="+l+"))?"),d||(c+="(?="+s+"|"+l+")")),new RegExp(c,Ve(r))}Le.parse=Te,Le.compile=function(e,t){return He(Be(e,t))},Le.tokensToFunction=Ue,Le.tokensToRegExp=je;const{hasOwnProperty:We}=Object.prototype,Ke=new Map;function Qe(e){try{return decodeURIComponent(e)}catch(t){return e}}function Ye(e,t,r,n,o){let i,s,a=0,l=e.path||"";return"/"===l.charAt(0)&&(r&&(l=l.substr(1)),r=!0),{next(c){if(e===c)return{done:!0};const d=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,r,n,o){const i=`${e}|${r=!!r}`;let s=Ke.get(i);if(!s){const t=[];s={keys:t,pattern:Le(e,t,{end:r,strict:""===e})},Ke.set(i,s)}const a=s.pattern.exec(t);if(!a)return null;const l=Object.assign({},o);for(let e=1;e<a.length;e++){const t=s.keys[e-1],r=t.name,n=a[e];void 0===n&&We.call(l,r)||(t.repeat?l[r]=n?n.split(t.delimiter).map(Qe):[]:l[r]=n?Qe(n):n)}return{path:a[0],keys:(n||[]).concat(s.keys),params:l}}(l,t,!d,n,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;a<d.length;){if(!s){const n=d[a];n.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),s=Ye(n,t.substr(o),r,i.keys,i.params)}const n=s.next(c);if(!n.done)return{done:!1,value:n.value};s=null,a++}return{done:!0}}}}function Ge(e){if(xe(e.route.action))return e.route.action(e)}Ke.set("|false",{keys:[],pattern:/(?:)/});class Je{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ge,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){we(e);const t=[...me(e)];this.root.__children=t}addRoutes(e){return we(e),this.root.__children.push(...me(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,Ce(e)?{pathname:e}:e),r=Ye(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let o=null,i=null,s=t;function a(e,l=o.value.route,c){const d=null===c&&o.value.route;return o=i||r.next(d),i=null,e||!o.done&&function(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}(l,o.value.route)?o.done?Promise.reject(Pe(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,o.value),function(e,t){const{route:r,path:n}=t;if(r&&!r.__synthetic){const t={path:n,route:r};if(e.chain){if(r.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==r.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,o.value),Promise.resolve(n(s)).then((t=>null!=t&&t!==Oe?(s.result=t.result||t,s):a(e,l,t)))):(i=o,Promise.resolve(Oe))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;return r.slice(0,t.length)===t?r.slice(t.length):void 0}}Je.pathToRegexp=Le;const{pathToRegexp:Ze}=Je,Xe=new Map;function et(e,t,r){const n=t.name||t.component;if(n&&(e.has(n)?e.get(n).push(t):e.set(n,[t])),Array.isArray(r))for(let n=0;n<r.length;n++){const o=r[n];o.parent=t,et(e,o,o.__children||o.children)}}function tt(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function rt(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function nt(e,t={}){if(!(e instanceof Je))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(n,o)=>{let i=tt(r,n);if(!i&&(r.clear(),et(r,e.root,e.root.__children),i=tt(r,n),!i))throw new Error(`Route "${n}" not found`);let s=Xe.get(i.fullPath);if(!s){let e=rt(i),t=i.parent;for(;t;){const r=rt(t);r&&(e=r.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const r=Ze.parse(e),n=Ze.tokensToFunction(r),o=Object.create(null);for(let e=0;e<r.length;e++)Ce(r[e])||(o[r[e].name]=!0);s={toPath:n,keys:o},Xe.set(e,s),i.fullPath=e}let a=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},r=Object.keys(o);for(let t=0;t<r.length;t++){const n=r[t];s.keys[n]||(e[n]=o[n])}const n=t.stringifyQueryParams(e);n&&(a+="?"===n.charAt(0)?n:`?${n}`)}return a}}let ot=[];function it(e){ot.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),ot=e}function st(e,t){return e.classList.add(t),new Promise((r=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const n=e.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${o}`),((e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),r()}))}else e.classList.remove(t),r()}))}function at(e){return null!=e}function lt({pathname:e="",search:t="",hash:r="",chain:n=[],params:o={},redirectFrom:i,resolver:s},a){const l=n.map((e=>e.route));return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:l,route:a||l.length&&l[l.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>pt(ft.pathToRegexp.compile(mt(l))(Object.assign({},o,e)),s)}}function ct(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function dt(e,t,r){if(xe(e))return e.apply(r,t)}function ht(e,t,r){return n=>n&&(n.cancel||n.redirect)?n:r?dt(r[e],t,r):void 0}function ut(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function pt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function mt(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class ft extends Je{constructor(e,t){const r=document.head.querySelector("base"),n=r&&r.getAttribute("href");super([],Object.assign({baseUrl:n&&Je.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const o=ft.NavigationTrigger;ft.setTriggers.apply(ft,Object.keys(o).map((e=>o[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=lt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();xe(t.children)&&(r=r.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{at(e)||xe(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!Ae(e))throw new Error(fe(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=me(e);for(let e=0;e<r.length;e++)be(r[e]),t.__children.push(r[e])}(e,t)})));const n={redirect:t=>ct(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return r.then((()=>{if(this.__isLatestRender(e))return dt(t.action,[e,n],t)})).then((e=>{return at(e)&&(e instanceof HTMLElement||e.redirect||e===Oe)?e:Ce(t.redirect)?n.redirect(t.redirect):t.bundle?(r=t.bundle,Ce(r)?$e(r):Promise.race(_e.filter((e=>e in r)).map((e=>$e(r[e],e))))).then((()=>{}),(()=>{throw new Error(fe(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var r})).then((e=>at(e)?e:Ce(t.component)?n.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},Ce(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(n).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const n=this.__previousContext;if(e===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=lt(e),t&&this.__updateBrowserHistory(e,1===r),Ee("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,n),this.__previousContext=e,this.location;this.__addAppearingContent(e,n);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,n),o.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),ut(this.__outlet&&this.__outlet.children),this.location=lt(Object.assign(n,{resolver:this})),Ee("error",Object.assign({router:this,error:e},n)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((r=>{const n=r!==t?r:e,o=pt(mt(r.chain),r.resolver)===r.pathname,i=(e,t=e.route,r)=>e.next(void 0,t,r).then((r=>null===r||r===Oe?o?e:null!==t.parent?i(e,t.parent,r):r:r));return i(r).then((e=>{if(null===e||e===Oe)throw Pe(n);return e&&e!==Oe&&e!==r?this.__fullyResolveChain(n,e):this.__amendWithOnBeforeCallbacks(r)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=lt(e);const r=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[r].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(fe(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],n=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),s=t=>ct(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let t=0;t<Math.min(r.length,n.length)&&r[t].route===n[t].route&&(r[t].path===n[t].path||r[t].element===n[t].element)&&this.__isReusableElement(r[t].element,n[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=n.length===r.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=n.length-1;t>=0;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},r[t]);for(let t=0;t<n.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},n[t]),r[t].element.location=lt(e,r[t].route)}else for(let t=r.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},r[t])}if(!e.__skipAttach)for(let t=0;t<n.length;t++)t<e.__divergedChainIndex?t<r.length&&r[t].element&&(r[t].element.location=lt(e,r[t].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},n[t]),n[t].element&&(n[t].element.location=lt(e,n[t].route)));return o.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,r,n){const o=lt(t);return e.then((e=>{if(this.__isLatestRender(t))return ht("onBeforeLeave",[o,r,this],n.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,r,n){const o=lt(t,n.route);return e.then((e=>{if(this.__isLatestRender(t))return ht("onBeforeEnter",[o,r,this],n.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>256)throw new Error(fe(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(fe(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const o=n?"replaceState":"pushState";window.history[o](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const o=t&&t.chain[n].element;if(o){if(o.parentNode!==r)break;e.chain[n].element=o,r=o}}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let n=r;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===r&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&ut(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ut(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const n=t.chain[r].element;if(n)try{const r=lt(e);dt(n.onAfterLeave,[r,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ut(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},n=lt(e,e.chain[t].route);dt(r.onAfterEnter,[n,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],n=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&r&&i){const e=Ae(i)&&i.leave||"leaving",o=Ae(i)&&i.enter||"entering";n.push(st(t,e)),n.push(st(r,o))}return Promise.all(n).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:n}=e?e.detail:window.location;Ce(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:n},!0))}static setTriggers(...e){it(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=nt(this)),pt(this.__urlForName(e,t),this)}urlForPath(e,t){return pt(ft.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:n}=Ce(e)?this.__createUrl(e,"http://a"):e;return Ee("go",{pathname:t,search:r,hash:n})}}const gt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,vt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function _t(e,t){if("function"!=typeof e)return;const r=gt.exec(e.toString());if(r)try{e=new Function(r[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(vt?!(vt&&Object.keys(vt).map((e=>vt[e])).filter((e=>e.productionMode)).length>0):!_t((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(e,t){if(window.Vaadin.developmentMode)_t(e,t)}((function(){})),ft.NavigationTrigger={POPSTATE:Re,CLICK:ke};const yt=(e,t,r)=>{let n=e[0];for(let o=1;o<e.length;o++)n+=t[r?r[o-1]:o-1],n+=e[o];return n},bt=e=>{return"string"!=typeof(t=e)&&"strTag"in t?yt(e.strings,e.values):e;var t};let wt=bt,$t=!1;const Et="lit-localize-status";class At{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Et,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Et,this.__litLocalizeEventHandler)}}const xt=e=>e.addController(new At(e)),Ct=()=>(e,t)=>(e.addInitializer(xt),e);class Pt{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const Ot=[];for(let e=0;e<256;e++)Ot[e]=(e>>4&15).toString(16)+(15&e).toString(16);const St=new WeakMap,kt=new Map;function Nt(e,t,r){if(e){const n=r?.id??function(e){const t="string"==typeof e?e:e.strings;let r=kt.get(t);return void 0===r&&(r=function(e,t){return(t?"h":"s")+function(e){let t=0,r=8997,n=0,o=33826,i=0,s=40164,a=0,l=52210;for(let c=0;c<e.length;c++)r^=e.charCodeAt(c),t=435*r,n=435*o,i=435*s,a=435*l,i+=r<<8,a+=o<<8,n+=t>>>16,r=65535&t,i+=n>>>16,o=65535&n,l=a+(i>>>16)&65535,s=65535&i;return Ot[l>>8]+Ot[255&l]+Ot[s>>8]+Ot[255&s]+Ot[o>>8]+Ot[255&o]+Ot[r>>8]+Ot[255&r]}("string"==typeof e?e:e.join(""))}(t,"string"!=typeof e&&!("strTag"in e)),kt.set(t,r)),r}(t),o=e[n];if(o){if("string"==typeof o)return o;if("strTag"in o)return yt(o.strings,t.values,o.values);{let e=St.get(o);return void 0===e&&(e=o.values,St.set(o,e)),{...o,values:e.map((e=>t.values[e]))}}}}return bt(t)}function Rt(e){window.dispatchEvent(new CustomEvent(Et,{detail:e}))}let Lt,Tt,Ut,jt,It,Mt="",Dt=new Pt;Dt.resolve();let Bt=0;const{getLocale:Ht,setLocale:Ft}=(qt={sourceLocale:"en",targetLocales:["tr"],loadLocale:e=>o(155)(`./${e}.ts`)},function(){if($t)throw new Error("lit-localize can only be configured once");wt=(e,t)=>Nt(It,e,t),$t=!0}(),Mt=Tt=qt.sourceLocale,Ut=new Set(qt.targetLocales),Ut.add(qt.sourceLocale),jt=qt.loadLocale,{getLocale:()=>Mt,setLocale:e=>{if(e===(Lt??Mt))return Dt.promise;if(!Ut||!jt)throw new Error("Internal error");if(!Ut.has(e))throw new Error("Invalid locale code");Bt++;const t=Bt;return Lt=e,Dt.settled&&(Dt=new Pt),Rt({status:"loading",loadingLocale:e}),(e===Tt?Promise.resolve({templates:void 0}):jt(e)).then((r=>{Bt===t&&(Mt=e,Lt=void 0,It=r.templates,Rt({status:"ready",readyLocale:e}),Dt.resolve())}),(r=>{Bt===t&&(Rt({status:"error",errorLocale:e,errorMessage:r.toString()}),Dt.reject(r))})),Dt.promise}});var qt;function Vt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}console.log("buradayım");var zt="function"==typeof Symbol&&Symbol.observable||"@@observable",Wt=function(){return Math.random().toString(36).substring(7).split("").join(".")},Kt={INIT:"@@redux/INIT"+Wt(),REPLACE:"@@redux/REPLACE"+Wt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Wt()}};const Qt="ADD_EMPLOYEE",Yt="UPDATE_EMPLOYEE",Gt="DELETE_EMPLOYEE",Jt="SET_VIEW_MODE",Zt="SET_LANGUAGE",Xt={employees:[],viewMode:"table",language:document.documentElement.lang||"en"},er=localStorage.getItem("appState"),tr=er?JSON.parse(er):Xt,rr=(e=[],t)=>{switch(t.type){case Qt:return[...e,t.payload];case Yt:return e.map((e=>e.id===t.payload.id?t.payload:e));case Gt:return e.filter((e=>e.id!==t.payload));default:return e}},nr=(e="table",t)=>t.type===Jt?t.payload:e,or=(e="en",t)=>{if(t.type===Zt){const e=t.payload;return document.documentElement.lang=e,Ft(e),e}return e},ir=function e(t,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(Vt(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(Vt(1));return n(e)(t,r)}if("function"!=typeof t)throw new Error(Vt(2));var i=t,s=r,a=[],l=a,c=!1;function d(){l===a&&(l=a.slice())}function h(){if(c)throw new Error(Vt(3));return s}function u(e){if("function"!=typeof e)throw new Error(Vt(4));if(c)throw new Error(Vt(5));var t=!0;return d(),l.push(e),function(){if(t){if(c)throw new Error(Vt(6));t=!1,d();var r=l.indexOf(e);l.splice(r,1),a=null}}}function p(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error(Vt(7));if(void 0===e.type)throw new Error(Vt(8));if(c)throw new Error(Vt(9));try{c=!0,s=i(s,e)}finally{c=!1}for(var t=a=l,r=0;r<t.length;r++)(0,t[r])();return e}return p({type:Kt.INIT}),(o={dispatch:p,subscribe:u,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error(Vt(10));i=e,p({type:Kt.REPLACE})}})[zt]=function(){var e,t=u;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(Vt(11));function r(){e.next&&e.next(h())}return r(),{unsubscribe:t(r)}}})[zt]=function(){return this},e},o}(((e=tr,t)=>{const r={employees:rr(e.employees,t),viewMode:nr(e.viewMode,t),language:or(e.language,t)};return localStorage.setItem("appState",JSON.stringify(r)),r}),window.__REDUX_DEVTOOLS_EXTENSION__?.());ir.dispatch;class sr extends ae{constructor(){super(...arguments),this.handleLanguageChange=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("language-changed",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("language-changed",this.handleLanguageChange)}}var ar=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let lr=class extends sr{constructor(){super(...arguments),this.currentLanguage="en"}connectedCallback(){super.connectedCallback(),this.unsubscribe=ir.subscribe((()=>{const e=ir.getState();this.currentLanguage!==e.language&&(this.currentLanguage=e.language,this.requestUpdate())})),this.currentLanguage=ir.getState().language}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}async onLanguageSelect(e){const t=e.target.value;await Ft(t),ir.dispatch({type:Zt,payload:t}),window.dispatchEvent(new CustomEvent("language-changed"))}render(){return V`
      <nav>
        <a href="/" class="logo">${wt("Employee Manager")}</a>
        <div class="nav-actions">
          <a href="/employees/add" class="add-employee-btn">
            ${wt("New Employee")}
          </a>
          <select
            class="language-selector"
            @change=${this.onLanguageSelect}
            .value=${this.currentLanguage}
          >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </nav>
    `}};lr.styles=s`
    nav {
      background: var(--primary-color);
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      text-decoration: none;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .add-employee-btn {
      background: white;
      color: var(--primary-color);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
    }

    .language-selector {
      color: white;
      background: transparent;
      border: 1px solid white;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .language-selector option {
      color: black;
    }
  `,ar([pe()],lr.prototype,"currentLanguage",void 0),lr=ar([Ct(),ce("nav-menu")],lr);var cr=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let dr=class extends ae{constructor(){super(...arguments),this.employees=[],this.filteredEmployees=[],this.currentPage=1,this.searchQuery="",this.viewMode="table",this.showDeleteModal=!1,this.selectedEmployeeId=null,this.PAGE_SIZE=10}connectedCallback(){super.connectedCallback(),this.unsubscribe=ir.subscribe((()=>this.stateChanged())),this.stateChanged()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}stateChanged(){const e=ir.getState();this.employees=e.employees,this.viewMode=e.viewMode,this.filterEmployees()}filterEmployees(){this.filteredEmployees=this.employees.filter((e=>Object.values(e).some((e=>e.toString().toLowerCase().includes(this.searchQuery.toLowerCase())))))}handleSearch(e){this.searchQuery=e.target.value,this.currentPage=1,this.filterEmployees()}handleViewModeChange(e){ir.dispatch((e=>({type:Jt,payload:e}))(e))}handleDelete(e){this.selectedEmployeeId=e,this.showDeleteModal=!0}confirmDelete(){var e;this.selectedEmployeeId&&(ir.dispatch((e=this.selectedEmployeeId,{type:Gt,payload:e})),this.showDeleteModal=!1,this.selectedEmployeeId=null)}getPaginatedEmployees(){const e=(this.currentPage-1)*this.PAGE_SIZE;return this.filteredEmployees.slice(e,e+this.PAGE_SIZE)}get totalPages(){return Math.ceil(this.filteredEmployees.length/this.PAGE_SIZE)}render(){if(0===this.employees.length)return V`<p class="empty-message">${wt("No employees found")}</p>`;const e=this.getPaginatedEmployees();return V`
      <div class="controls">
        <div class="search-box">
          <input
            type="text"
            .value=${this.searchQuery}
            @input=${this.handleSearch}
            placeholder=${wt("Search")}
          />
        </div>
        <div class="view-controls">
          <button
            class=${"table"===this.viewMode?"active":""}
            @click=${()=>this.handleViewModeChange("table")}
          >
            ${wt("Table")}
          </button>
          <button
            class=${"list"===this.viewMode?"active":""}
            @click=${()=>this.handleViewModeChange("list")}
          >
            ${wt("List")}
          </button>
        </div>
      </div>

      ${"table"===this.viewMode?this.renderTableView(e):this.renderListView(e)}
      ${this.renderPagination()} ${this.renderDeleteModal()}
    `}renderTableView(e){return V`
      <table class="table-view">
        <thead>
          <tr>
            <th>${wt("First Name")}</th>
            <th>${wt("Last Name")}</th>
            <th>${wt("Email")}</th>
            <th>${wt("Department")}</th>
            <th>${wt("Position")}</th>
            <th>${wt("Actions")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map((e=>this.renderTableRow(e)))}
        </tbody>
      </table>
    `}renderTableRow(e){return V`
      <tr class="employee-row" data-id=${e.id}>
        <td>${e.firstName}</td>
        <td>${e.lastName}</td>
        <td>${e.email}</td>
        <td>${e.department}</td>
        <td>${e.position}</td>
        <td>
          <div class="actions">
            <a href="/employees/edit/${e.id}" class="edit-btn">
              ${wt("Edit")}
            </a>
            <button
              @click=${()=>this.handleDelete(e.id)}
              class="delete-btn"
            >
              ${wt("Delete")}
            </button>
          </div>
        </td>
      </tr>
    `}renderListView(e){return V`
      <div class="list-view">
        ${e.map((e=>V`
            <div class="list-item">
              <div><strong>${e.firstName} ${e.lastName}</strong></div>
              <div>${e.department} - ${e.position}</div>
              <div>${e.dateOfEmployment}</div>
              <div class="actions">
                <span
                  class="edit-btn"
                  @click=${()=>window.location.href=`/employees/edit/${e.id}`}
                  >✏️</span
                >
                <span
                  class="delete-btn"
                  @click=${()=>this.handleDelete(e.id)}
                  >🗑️</span
                >
              </div>
            </div>
          `))}
      </div>
    `}renderPagination(){return V`
      <div class="pagination">
        <button
          ?disabled=${1===this.currentPage}
          @click=${()=>this.currentPage--}
        >
          ←
        </button>
        ${Array.from({length:this.totalPages},((e,t)=>t+1)).map((e=>V`
            <button
              class=${e===this.currentPage?"active":""}
              @click=${()=>this.currentPage=e}
            >
              ${e}
            </button>
          `))}
        <button
          ?disabled=${this.currentPage===this.totalPages}
          @click=${()=>this.currentPage++}
        >
          →
        </button>
      </div>
    `}renderDeleteModal(){return this.showDeleteModal?V`
      <delete-modal
        .onConfirm=${()=>this.confirmDelete()}
        .onCancel=${()=>this.showDeleteModal=!1}
      ></delete-modal>
    `:null}};dr.styles=s`
    :host {
      display: block;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .search-box {
      flex: 1;
      max-width: 300px;
    }

    .search-box input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
    }

    .view-controls button {
      padding: 0.5rem 1rem;
      background: none;
      border: 1px solid var(--border-color);
      cursor: pointer;
    }

    .view-controls button.active {
      background: var(--primary-color);
      color: white;
    }

    /* Table View Styles */
    .table-view {
      width: 100%;
      border-collapse: collapse;
    }

    .table-view th,
    .table-view td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }

    .table-view th {
      background: var(--secondary-color);
    }

    /* List View Styles */
    .list-view {
      display: grid;
      gap: 1rem;
    }

    .list-item {
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      display: grid;
      gap: 0.5rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }

    .edit-btn {
      color: var(--primary-color);
      cursor: pointer;
    }

    .delete-btn {
      color: #ff4444;
      cursor: pointer;
    }

    .pagination {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .pagination button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border-color);
      background: none;
      cursor: pointer;
    }

    .pagination button.active {
      background: var(--primary-color);
      color: white;
    }

    @media (max-width: 768px) {
      .controls {
        flex-direction: column;
        align-items: stretch;
      }

      .search-box {
        max-width: none;
      }

      .table-view {
        display: none;
      }

      .list-view {
        display: grid;
      }
    }
  `,cr([pe()],dr.prototype,"employees",void 0),cr([pe()],dr.prototype,"filteredEmployees",void 0),cr([pe()],dr.prototype,"currentPage",void 0),cr([pe()],dr.prototype,"searchQuery",void 0),cr([pe()],dr.prototype,"viewMode",void 0),cr([pe()],dr.prototype,"showDeleteModal",void 0),cr([pe()],dr.prototype,"selectedEmployeeId",void 0),dr=cr([Ct(),ce("employee-list")],dr);const hr=["Analytics","Tech"],ur=["Junior","Medior","Senior"];class pr{constructor(){this.errors=[]}required(e,t){return e&&""!==e.trim()||this.errors.push({field:t,message:`${t} is required`}),this}email(e,t){return e&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)&&this.errors.push({field:t,message:"Please enter a valid email address"}),this}phone(e,t){const r=e.replace(/\s/g,"");return e&&!/^\+?[0-9]{10,15}$/.test(r)&&this.errors.push({field:t,message:"Please enter a valid phone number (e.g. +905321234567)"}),this}date(e,t){return e&&!/^\d{4}-\d{2}-\d{2}$/.test(e)&&this.errors.push({field:t,message:"Please enter a valid date (YYYY-MM-DD)"}),this}hasErrors(){return this.errors.length>0}getErrors(){return this.errors}clearErrors(){this.errors=[]}}var mr=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let fr=class extends sr{constructor(){super(...arguments),this.employeeId="",this.employee={firstName:"",lastName:"",dateOfEmployment:"",dateOfBirth:"",phoneNumber:"",email:"",department:void 0,position:void 0},this.errors=[],this.isEdit=!1}async connectedCallback(){super.connectedCallback();const e=window.location.pathname.match(/\/employees\/edit\/(.+)/);if(e&&e[1]){this.employeeId=e[1],this.isEdit=!0;const t=ir.getState().employees.find((e=>e.id===this.employeeId));t&&(this.employee={...t},this.requestUpdate())}this.unsubscribe=ir.subscribe((()=>{if(this.isEdit){const e=ir.getState().employees.find((e=>e.id===this.employeeId));e&&(this.employee={...e},this.requestUpdate())}}))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}validateField(e,t){const r=new pr;switch(e){case"email":r.required(t,"Email").email(t,"Email");break;case"phoneNumber":r.required(t,"Phone Number").phone(t,"Phone Number");break;case"firstName":r.required(t,"First Name");break;case"lastName":r.required(t,"Last Name");break;case"dateOfEmployment":r.required(t,"Date of Employment").date(t,"Date of Employment");break;case"dateOfBirth":r.required(t,"Date of Birth").date(t,"Date of Birth");break;case"department":r.required(t,"Department");break;case"position":r.required(t,"Position")}this.errors=this.errors.filter((t=>t.field!==e)),r.hasErrors()&&(this.errors=[...this.errors,...r.getErrors()])}handleInput(e,t){let r=e.target.value;"phoneNumber"===t&&(r=r.replace(/\s/g,"")),this.employee={...this.employee,[t]:r},this.validateField(t,r)}handleSubmit(e){e.preventDefault();const t=new pr;var r;t.required(this.employee.firstName,"First Name").required(this.employee.lastName,"Last Name").required(this.employee.dateOfEmployment,"Date of Employment").required(this.employee.dateOfBirth,"Date of Birth").required(this.employee.phoneNumber,"Phone Number").required(this.employee.email,"Email").required(this.employee.department,"Department").required(this.employee.position,"Position").email(this.employee.email||"","Email").phone(this.employee.phoneNumber||"","Phone Number").date(this.employee.dateOfEmployment||"","Date of Employment").date(this.employee.dateOfBirth||"","Date of Birth"),this.errors=t.getErrors(),t.hasErrors()||(this.isEdit&&this.employeeId?ir.dispatch((r={...this.employee,id:this.employeeId},{type:Yt,payload:r})):ir.dispatch((e=>({type:Qt,payload:{...e,id:crypto.randomUUID()}}))(this.employee)),ft.go("/employees"))}getFieldError(e){return this.errors.find((t=>t.field===e))?.message}render(){return V`
      <form @submit=${this.handleSubmit}>
        <div class="form-group">
          <label for="firstName">${wt("First Name")}</label>
          <input
            type="text"
            id="firstName"
            placeholder=${wt("Enter first name")}
            .value=${this.employee.firstName||""}
            @input=${e=>this.handleInput(e,"firstName")}
          />
          ${this.getFieldError("First Name")&&V`<div class="error">
            ${this.getFieldError(wt("First Name"))}
          </div>`}
        </div>

        <div class="form-group">
          <label for="lastName">${wt("Last Name")}</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            .value=${this.employee.lastName||""}
            @input=${e=>this.handleInput(e,"lastName")}
          />
          ${this.getFieldError("Last Name")&&V`<div class="error">${this.getFieldError("Last Name")}</div>`}
        </div>

        <div class="form-group">
          <label for="dateOfEmployment">${wt("Date of Employment")}</label>
          <input
            type="date"
            id="dateOfEmployment"
            .value=${this.employee.dateOfEmployment||""}
            @input=${e=>this.handleInput(e,"dateOfEmployment")}
          />
          ${this.getFieldError("Date of Employment")&&V`<div class="error">
            ${this.getFieldError("Date of Employment")}
          </div>`}
        </div>

        <div class="form-group">
          <label for="dateOfBirth">${wt("Date of Birth")}</label>
          <input
            type="date"
            id="dateOfBirth"
            .value=${this.employee.dateOfBirth||""}
            @input=${e=>this.handleInput(e,"dateOfBirth")}
          />
          ${this.getFieldError("Date of Birth")&&V`<div class="error">${this.getFieldError("Date of Birth")}</div>`}
        </div>

        <div class="form-group">
          <label for="phoneNumber">${wt("Phone Number")}</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="+905321234567"
            .value=${this.employee.phoneNumber||""}
            @input=${e=>{const t=e.target;t.value=t.value.replace(/\s/g,""),this.handleInput(e,"phoneNumber")}}
          />
          ${this.getFieldError("Phone Number")&&V`<div class="error">${this.getFieldError("Phone Number")}</div>`}
        </div>

        <div class="form-group">
          <label for="email">${wt("Email")}</label>
          <input
            type="email"
            id="email"
            placeholder="example@company.com"
            .value=${this.employee.email||""}
            @input=${e=>this.handleInput(e,"email")}
          />
          ${this.getFieldError("Email")&&V`<div class="error">${this.getFieldError("Email")}</div>`}
        </div>

        <div class="form-group">
          <label for="department">${wt("Department")}</label>
          <select
            id="department"
            .value=${this.employee.department||""}
            @change=${e=>this.handleInput(e,"department")}
          >
            <option value="" disabled selected>Select department</option>
            ${hr.map((e=>V` <option value=${e}>${e}</option> `))}
          </select>
          ${this.getFieldError("Department")&&V`<div class="error">${this.getFieldError("Department")}</div>`}
        </div>

        <div class="form-group">
          <label for="position">${wt("Position")}</label>
          <select
            id="position"
            .value=${this.employee.position||""}
            @change=${e=>this.handleInput(e,"position")}
          >
            <option value="" disabled selected>Select position</option>
            ${ur.map((e=>V` <option value=${e}>${e}</option> `))}
          </select>
          ${this.getFieldError("Position")&&V`<div class="error">${this.getFieldError("Position")}</div>`}
        </div>

        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            @click=${()=>ft.go("/employees")}
          >
            ${wt("Cancel")}
          </button>
          <button type="submit" class="save-btn">${wt("Save")}</button>
        </div>
      </form>
    `}};fr.styles=s`
    :host {
      display: block;
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-color);
      font-weight: bold;
    }

    input,
    select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 1rem;
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .error {
      color: red;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
    }

    .save-btn {
      background: var(--primary-color);
      color: white;
    }

    .cancel-btn {
      background: var(--secondary-color);
      color: var(--text-color);
    }

    @media (max-width: 768px) {
      :host {
        padding: 1rem;
      }

      .form-actions {
        flex-direction: column;
      }

      button {
        width: 100%;
      }
    }
  `,mr([ue({type:String})],fr.prototype,"location",void 0),mr([pe()],fr.prototype,"employeeId",void 0),mr([pe()],fr.prototype,"employee",void 0),mr([pe()],fr.prototype,"errors",void 0),mr([pe()],fr.prototype,"isEdit",void 0),fr=mr([Ct(),ce("employee-form")],fr);var gr=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let vr=class extends ae{constructor(){super(...arguments),this.onConfirm=()=>{},this.onCancel=()=>{}}render(){return V`
      <div class="modal-backdrop" @click=${this.onCancel}>
        <div class="modal" @click=${e=>e.stopPropagation()}>
          <h2 class="modal-title">${wt("Are you sure?")}</h2>
          <div class="modal-content">
            ${wt("This action cannot be undone.")}
          </div>
          <div class="modal-actions">
            <button class="cancel-btn" @click=${this.onCancel}>
              ${wt("Cancel")}
            </button>
            <button class="confirm-btn" @click=${this.onConfirm}>
              ${wt("Proceed")}
            </button>
          </div>
        </div>
      </div>
    `}};vr.styles=s`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 400px;
      width: 90%;
    }

    .modal-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-color);
    }

    .modal-content {
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      border: none;
    }

    .confirm-btn {
      background: var(--primary-color);
      color: white;
    }

    .cancel-btn {
      background: var(--secondary-color);
      color: var(--text-color);
    }
  `,gr([ue()],vr.prototype,"onConfirm",void 0),gr([ue()],vr.prototype,"onCancel",void 0),vr=gr([Ct(),ce("delete-modal")],vr);let _r=class extends ae{firstUpdated(){new ft(this.renderRoot?.querySelector("#outlet")).setRoutes([{path:"/",redirect:"/employees"},{path:"/employees",component:"employee-list"},{path:"/employees/add",component:"employee-form"},{path:"/employees/edit/:id",component:"employee-form"}]);const e=document.documentElement.lang||"en";Ft(e)}render(){return V`
      <nav-menu></nav-menu>
      <main>
        <div id="outlet"></div>
      </main>
    `}};_r.styles=s`
    :host {
      display: block;
      min-height: 100vh;
      --primary-color: #E86F37;
      --secondary-color: #F5F5F5;
      --text-color: #333333;
      --border-color: #DDDDDD;
    }

    main {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      main {
        padding: 10px;
      }
    }
  `,_r=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}([ce("app-root")],_r)})()})();