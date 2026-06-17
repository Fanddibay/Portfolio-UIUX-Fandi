const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-CcmYMZW0.js","assets/vue-vendor-1JOnRWRl.js","assets/useHead-CTPFjkAB.js","assets/useReveal-Drz5MGaW.js","assets/SectionWrapper.vue_vue_type_script_setup_true_lang-BagfU4kq.js","assets/projects-CnuUcmLv.js","assets/posts-DU6N2BWZ.js","assets/CaseStudyView-Ue19I_GJ.js","assets/AboutView-ZJzLVRGM.js","assets/WritingView-Ry6pqgL3.js","assets/ContactView-DVioCVbJ.js","assets/ResumeView-DPJEsjZd.js"])))=>i.map(i=>d[i]);
import{n as ca,i as fa,v as cn,u as D,w as ua,a as fn,r as ie,o as da,b as ma,c as pa,g as ga,d as ae,e as ut,f as ha,h as ya,j as E,k as X,l as w,m as O,p as U,F as le,q as ce,s as ba,t as oe,x as q,T as Ne,y as G,z as de,A as je,B as Fe,C as va,D as ka,E as T,G as _t,H as xa,I as wa,J as _a,K as Aa,L as Pa,M as Sa}from"./vue-vendor-1JOnRWRl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ca=new Set(["title","titleTemplate","script","style","noscript"]),xe=new Set(["base","meta","link","style","script","noscript"]),Ta=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Oa=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),un=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Ia=typeof window<"u";function Ae(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ve(e){if(e._h)return e._h;if(e._d)return Ae(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return Ae(t)}function Ea(e,t){return e instanceof Promise?e.then(t):t(e)}function Ke(e,t,n,a){const r=a||mn(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(r instanceof Promise)return r.then(s=>Ke(e,t,n,s));const o={tag:e,props:r};for(const s of un){const i=o.props[s]!==void 0?o.props[s]:n[s];i!==void 0&&((!(s==="innerHTML"||s==="textContent"||s==="children")||Ca.has(o.tag))&&(o[s==="children"?"innerHTML":s]=i),delete o.props[s])}return o.props.body&&(o.tagPosition="bodyClose",delete o.props.body),o.tag==="script"&&typeof o.innerHTML=="object"&&(o.innerHTML=JSON.stringify(o.innerHTML),o.props.type=o.props.type||"application/json"),Array.isArray(o.props.content)?o.props.content.map(s=>({...o,props:{...o.props,content:s}})):o}function Ma(e,t){var a;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,r])=>r).map(([r,o])=>e==="style"?`${r}:${o}`:r)),(a=String(Array.isArray(t)?t.join(n):t))==null?void 0:a.split(n).filter(r=>!!r.trim()).join(n)}function dn(e,t,n,a){for(let r=a;r<n.length;r+=1){const o=n[r];if(o==="class"||o==="style"){e[o]=Ma(o,e[o]);continue}if(e[o]instanceof Promise)return e[o].then(s=>(e[o]=s,dn(e,t,n,r)));if(!t&&!un.has(o)){const s=String(e[o]),i=o.startsWith("data-");s==="true"||s===""?e[o]=i?"true":!0:e[o]||(i&&s==="false"?e[o]="false":delete e[o])}}}function mn(e,t=!1){const n=dn(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const La=10;function pn(e,t,n){for(let a=n;a<t.length;a+=1){const r=t[a];if(r instanceof Promise)return r.then(o=>(t[a]=o,pn(e,t,a)));Array.isArray(r)?e.push(...r):e.push(r)}}function Da(e){const t=[],n=e.resolvedInput;for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const o=n[r];if(!(o===void 0||!Ta.has(r))){if(Array.isArray(o)){for(const s of o)t.push(Ke(r,s,e));continue}t.push(Ke(r,o,e))}}if(t.length===0)return[];const a=[];return Ea(pn(a,t,0),()=>a.map((r,o)=>(r._e=e._i,e.mode&&(r._m=e.mode),r._p=(e._i<<La)+o,r)))}const At=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Pt={base:-10,title:10},St={critical:-80,high:-10,low:20};function Pe(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in Pt&&(n=Pt[e.tag]),t&&t in St?n+St[t]:n}const Na=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],ja=["name","property","http-equiv"];function gn(e){const{props:t,tag:n}=e;if(Oa.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const a of ja)if(t[a]!==void 0)return`${n}:${a}:${t[a]}`;return!1}const $="%separator";function Fa(e,t,n=!1){var r;let a;if(t==="s"||t==="pageTitle")a=e.pageTitle;else if(t.includes(".")){const o=t.indexOf(".");a=(r=e[t.substring(0,o)])==null?void 0:r[t.substring(o+1)]}else a=e[t];if(a!==void 0)return n?(a||"").replace(/"/g,'\\"'):a||""}const Ha=new RegExp(`${$}(?:\\s*${$})*`,"g");function be(e,t,n,a=!1){if(typeof e!="string"||!e.includes("%"))return e;let r=e;try{r=decodeURI(e)}catch{}const o=r.match(/%\w+(?:\.\w+)?/g);if(!o)return e;const s=e.includes($);return e=e.replace(/%\w+(?:\.\w+)?/g,i=>{if(i===$||!o.includes(i))return i;const l=Fa(t,i.slice(1),a);return l!==void 0?l:i}).trim(),s&&(e.endsWith($)&&(e=e.slice(0,-$.length)),e.startsWith($)&&(e=e.slice($.length)),e=e.replace(Ha,n).trim()),e}function Ct(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function hn(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const a={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",a),!!a.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async r=>{var y;const o=(await e.resolveTags()).map(m=>({tag:m,id:xe.has(m.tag)?Ve(m):m.tag,shouldRender:!0}));let s=e._dom;if(!s){s={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const m=new Set;for(const h of["body","head"]){const b=(y=n[h])==null?void 0:y.children;for(const x of b){const v=x.tagName.toLowerCase();if(!xe.has(v))continue;const u={tag:v,props:await mn(x.getAttributeNames().reduce((P,N)=>({...P,[N]:x.getAttribute(N)}),{})),innerHTML:x.innerHTML},g=gn(u);let k=g,A=1;for(;k&&m.has(k);)k=`${g}:${A++}`;k&&(u._d=k,m.add(k)),s.elMap[x.getAttribute("data-hid")||Ve(u)]=x}}}s.pendingSideEffects={...s.sideEffects},s.sideEffects={};function i(m,h,b){const x=`${m}:${h}`;s.sideEffects[x]=b,delete s.pendingSideEffects[x]}function l({id:m,$el:h,tag:b}){const x=b.tag.endsWith("Attrs");if(s.elMap[m]=h,x||(b.textContent&&b.textContent!==h.textContent&&(h.textContent=b.textContent),b.innerHTML&&b.innerHTML!==h.innerHTML&&(h.innerHTML=b.innerHTML),i(m,"el",()=>{var v;(v=s.elMap[m])==null||v.remove(),delete s.elMap[m]})),b._eventHandlers)for(const v in b._eventHandlers)Object.prototype.hasOwnProperty.call(b._eventHandlers,v)&&h.getAttribute(`data-${v}`)!==""&&((b.tag==="bodyAttrs"?n.defaultView:h).addEventListener(v.substring(2),b._eventHandlers[v].bind(h)),h.setAttribute(`data-${v}`,""));for(const v in b.props){if(!Object.prototype.hasOwnProperty.call(b.props,v))continue;const u=b.props[v],g=`attr:${v}`;if(v==="class"){if(!u)continue;for(const k of u.split(" "))x&&i(m,`${g}:${k}`,()=>h.classList.remove(k)),!h.classList.contains(k)&&h.classList.add(k)}else if(v==="style"){if(!u)continue;for(const k of u.split(";")){const A=k.indexOf(":"),P=k.substring(0,A).trim(),N=k.substring(A+1).trim();i(m,`${g}:${P}`,()=>{h.style.removeProperty(P)}),h.style.setProperty(P,N)}}else h.getAttribute(v)!==u&&h.setAttribute(v,u===!0?"":String(u)),x&&i(m,g,()=>h.removeAttribute(v))}}const c=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const m of o){const{tag:h,shouldRender:b,id:x}=m;if(b){if(h.tag==="title"){n.title=h.textContent;continue}m.$el=m.$el||s.elMap[x],m.$el?l(m):xe.has(h.tag)&&c.push(m)}}for(const m of c){const h=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),l(m),d[h]=d[h]||n.createDocumentFragment(),d[h].appendChild(m.$el)}for(const m of o)await e.hooks.callHook("dom:renderTag",m,n,i);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const m in s.pendingSideEffects)s.pendingSideEffects[m]();e._dom=s,await e.hooks.callHook("dom:rendered",{renders:o}),r()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function yn(e,t={}){const n=t.delayFn||(a=>setTimeout(a,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(a=>n(()=>hn(e,t).then(()=>{delete e._domDebouncedUpdatePromise,a()})))}function Ra(e){return t=>{var a,r;const n=((r=(a=t.resolvedOptions.document)==null?void 0:a.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":o=>{yn(o,e)}}}}}function Ye(e,t={},n){for(const a in e){const r=e[a],o=n?`${n}:${a}`:a;typeof r=="object"&&r!==null?Ye(r,t,o):typeof r=="function"&&(t[o]=r)}return t}const za={run:e=>e()},Ua=()=>za,bn=typeof console.createTask<"u"?console.createTask:Ua;function $a(e,t){const n=t.shift(),a=bn(n);return e.reduce((r,o)=>r.then(()=>a.run(()=>o(...t))),Promise.resolve())}function Wa(e,t){const n=t.shift(),a=bn(n);return Promise.all(e.map(r=>a.run(()=>r(...t))))}function He(e,t){for(const n of[...e])n(t)}class Ba{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,a={}){if(!t||typeof n!="function")return()=>{};const r=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!a.allowDeprecated){let s=o.message;s||(s=`${r} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let a,r=(...o)=>(typeof a=="function"&&a(),a=void 0,r=void 0,n(...o));return a=this.hook(t,r),a}removeHook(t,n){if(this._hooks[t]){const a=this._hooks[t].indexOf(n);a!==-1&&this._hooks[t].splice(a,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const a=this._hooks[t]||[];delete this._hooks[t];for(const r of a)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Ye(t),a=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of a.splice(0,a.length))r()}}removeHooks(t){const n=Ye(t);for(const a in n)this.removeHook(a,n[a])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith($a,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Wa,t,...n)}callHookWith(t,n,...a){const r=this._before||this._after?{name:n,args:a,context:{}}:void 0;this._before&&He(this._before,r);const o=t(n in this._hooks?[...this._hooks[n]]:[],a);return o instanceof Promise?o.finally(()=>{this._after&&r&&He(this._after,r)}):(this._after&&r&&He(this._after,r),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Va(){return new Ba}const Ka=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Ya={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=gn(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const a of e.tags){const r=(a.key?`${a.tag}:${a.key}`:a._d)||Ve(a),o=t[r];if(o){let i=a==null?void 0:a.tagDuplicateStrategy;if(!i&&Ka.has(a.tag)&&(i="merge"),i==="merge"){const l=o.props;l.style&&a.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),a.props.style=`${l.style} ${a.props.style}`),l.class&&a.props.class?a.props.class=`${l.class} ${a.props.class}`:l.class&&(a.props.class=l.class),t[r].props={...l,...a.props};continue}else if(a._e===o._e){o._duped=o._duped||[],a._d=`${o._d}:${o._duped.length+1}`,o._duped.push(a);continue}else if(Pe(a)>Pe(o))continue}if(!(a.innerHTML||a.textContent||Object.keys(a.props).length!==0)&&xe.has(a.tag)){delete t[r];continue}t[r]=a}const n=[];for(const a in t){const r=t[a],o=r._duped;n.push(r),o&&(delete r._duped,n.push(...o))}e.tags=n,e.tags=e.tags.filter(a=>!(a.tag==="meta"&&(a.props.name||a.props.property)&&!a.props.content))}}},Ga=new Set(["script","link","bodyAttrs"]),Xa=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!Ga.has(n.tag))continue;const a=n.props;for(const r in a){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(a,r))continue;const o=a[r];typeof o=="function"&&(e.ssr&&At.has(r)?a[r]=`this.dataset.${r}fired = true`:delete a[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=o)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Ae(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var r,o;const a=t==null?void 0:t.dataset;if(a)for(const s in a){if(!s.endsWith("fired"))continue;const i=s.slice(0,-5);At.has(i)&&((o=(r=n._eventHandlers)==null?void 0:r[i])==null||o.call(t,new Event(i.substring(2))))}}}}),qa=new Set(["link","style","script","noscript"]),Ja={hooks:{"tag:normalise":({tag:e})=>{e.key&&qa.has(e.tag)&&(e.props["data-hid"]=e._h=Ae(e.key))}}},Za={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const a of e.tags)a._m!=="server"||a.tag!=="titleTemplate"&&a.tag!=="templateParams"&&a.tag!=="title"||(t[a.tag]=a.tag==="title"||a.tag==="titleTemplate"?a.textContent:a.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Qa={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:a,offset:r}of Na){if(!n.tagPriority.startsWith(a))continue;const o=n.tagPriority.substring(a.length),s=(t=e.tags.find(i=>i._d===o))==null?void 0:t._p;if(s!==void 0){n._p=s+r;break}}e.tags.sort((n,a)=>{const r=Pe(n),o=Pe(a);return r<o?-1:r>o?1:n._p-a._p})}}},er={meta:"content",link:"href",htmlAttrs:"lang"},tr=["innerHTML","textContent"],nr=e=>({hooks:{"tags:resolve":t=>{var s;const{tags:n}=t;let a;for(let i=0;i<n.length;i+=1)n[i].tag==="templateParams"&&(a=t.tags.splice(i,1)[0].props,i-=1);const r=a||{},o=r.separator||"|";delete r.separator,r.pageTitle=be(r.pageTitle||((s=n.find(i=>i.tag==="title"))==null?void 0:s.textContent)||"",r,o);for(const i of n){if(i.processTemplateParams===!1)continue;const l=er[i.tag];if(l&&typeof i.props[l]=="string")i.props[l]=be(i.props[l],r,o);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const c of tr)typeof i[c]=="string"&&(i[c]=be(i[c],r,o,i.tag==="script"&&i.props.type.endsWith("json")))}e._templateParams=r,e._separator=o},"tags:afterResolve":({tags:t})=>{let n;for(let a=0;a<t.length;a+=1){const r=t[a];r.tag==="title"&&r.processTemplateParams!==!1&&(n=r)}n!=null&&n.textContent&&(n.textContent=be(n.textContent,e._templateParams,e._separator))}}}),ar={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,a;for(let r=0;r<t.length;r+=1){const o=t[r];o.tag==="title"?n=o:o.tag==="titleTemplate"&&(a=o)}if(a&&n){const r=Ct(a.textContent,n.textContent);r!==null?n.textContent=r||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(a){const r=Ct(a.textContent);r!==null&&(a.textContent=r,a.tag="title",a=void 0)}a&&e.tags.splice(e.tags.indexOf(a),1)}}},rr={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let vn;function or(e={}){const t=sr(e);return t.use(Ra()),vn=t}function Tt(e,t){return!e||e==="server"&&t||e==="client"&&!t}function sr(e={}){const t=Va();t.addHooks(e.hooks||{}),e.document=e.document||(Ia?document:void 0);const n=!e.document,a=()=>{i.dirty=!0,t.callHook("entries:updated",i)};let r=0,o=[];const s=[],i={plugins:s,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return o},use(l){const c=typeof l=="function"?l(i):l;(!c.key||!s.some(d=>d.key===c.key))&&(s.push(c),Tt(c.mode,n)&&t.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const d={_i:r++,input:l,...c};return Tt(d.mode,n)&&(o.push(d),a()),{dispose(){o=o.filter(y=>y._i!==d._i),a()},patch(y){for(const m of o)m._i===d._i&&(m.input=d.input=y);a()}}},async resolveTags(){const l={tags:[],entries:[...o]};await t.callHook("entries:resolve",l);for(const c of l.entries){const d=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(d):d),c.resolvedInput)for(const y of await Da(c)){const m={tag:y,entry:c,resolvedOptions:i.resolvedOptions};await t.callHook("tag:normalise",m),l.tags.push(m.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l),l.tags},ssr:n};return[Ya,Za,Xa,Ja,Qa,nr,ar,rr,...(e==null?void 0:e.plugins)||[]].forEach(l=>i.use(l)),i.hooks.callHook("init",i),i}function ir(){return vn}const lr=cn[0]==="3";function cr(e){return typeof e=="function"?e():D(e)}function Se(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=cr(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>Se(n));if(typeof t=="object"){const n={};for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(a==="titleTemplate"||a[0]==="o"&&a[1]==="n"){n[a]=D(t[a]);continue}n[a]=Se(t[a])}return n}return t}const fr={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=Se(t.input)}}},kn="usehead";function ur(e){return{install(n){lr&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(kn,e))}}.install}function dr(e={}){e.domDelayFn=e.domDelayFn||(n=>ca(()=>setTimeout(()=>n(),0)));const t=or(e);return t.use(fr),t.install=ur(t),t}const Ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},It="__unhead_injection_handler__";function mr(){return It in Ot?Ot[It]():fa(kn)||ir()}function xn(e,t={}){const n=t.head||mr();if(n)return n.ssr?n.push(e,t):pr(n,e,t)}function pr(e,t,n={}){const a=ie(!1),r=ie({});ua(()=>{r.value=a.value?{}:Se(t)});const o=e.push(r.value,n);return fn(r,i=>{o.patch(i)}),ga()&&(da(()=>{o.dispose()}),ma(()=>{a.value=!0}),pa(()=>{a.value=!1})),o}function gr(e,t){const n=dr({}),a={unhead:n,install(r){cn.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,o){return n.push(r,o)},addEntry(r,o){return n.push(r,o)},addHeadObjs(r,o){return n.push(r,o)},addReactiveEntry(r,o){const s=xn(r,o);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,o){o?hn(n,{document:r}):yn(n,{delayFn:s=>setTimeout(()=>s(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=a.addHeadObjs,n.updateDOM=a.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const o of a.hooks["before:dom"])o()===!1&&(r.shouldRender=!1)}),a}const hr="/favicon.svg",yr={class:"overflow-hidden"},br={class:"inline-block whitespace-nowrap text-base font-bold tracking-tight text-ink sm:text-lg"},vr={class:"hidden items-center gap-2 md:flex md:gap-3"},kr={class:"flex items-center gap-2 md:hidden"},xr=["aria-expanded"],wr={key:0,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},_r={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Ar={class:"fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-border bg-surface shadow-card md:hidden",role:"dialog","aria-modal":"true","aria-label":"Menu"},Pr={class:"flex flex-1 flex-col overflow-y-auto p-6 pt-8"},Sr={class:"mt-8 border-t border-border pt-6"},Cr={class:"mt-4 flex flex-wrap gap-4"},Tr=["href","aria-label"],Et=80,Or=ae({__name:"TheNavbar",setup(e){const t=va(),n=ka(),{t:a}=ut(),r=ie(!1),o=ie(!1),s=G(()=>[{to:"/work",label:a("nav.work")},{to:"/about",label:a("nav.about")},{to:"/writing",label:a("nav.writing")}]),i=[{href:"https://linkedin.com",icon:["fab","linkedin-in"],label:"LinkedIn"},{href:"https://behance.net",icon:["fab","behance"],label:"Behance"},{href:"https://dribbble.com",icon:["fab","dribbble"],label:"Dribbble"},{href:"https://medium.com",icon:["fab","medium"],label:"Medium"},{href:"mailto:hello@fandibayu.com",icon:["fas","envelope"],label:"Email"}],l=ie(!1);function c(){if(typeof window>"u")return;const h=window.scrollY;o.value=h>Et,l.value=h>Et}function d(){t.push("/resume"),r.value=!1}function y(){r.value=!1}function m(h){return h==="/work"?n.path==="/"||n.path.startsWith("/work"):n.path===h}return ha(()=>{c(),window.addEventListener("scroll",c,{passive:!0})}),ya(()=>{window.removeEventListener("scroll",c)}),(h,b)=>{const x=de("RouterLink"),v=de("FontAwesomeIcon");return T(),E("header",{class:X(["sticky top-0 z-50 w-full transition-[padding] duration-300",l.value?"px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6":""])},[w("nav",{class:X(["flex h-14 items-center justify-between transition-all duration-300 sm:h-16",l.value?"mx-auto max-w-6xl rounded-[2rem] border border-border bg-surface/95 px-4 py-2.5 shadow-soft backdrop-blur-sm sm:px-5 sm:py-3":"mx-auto max-w-6xl border-b border-border bg-surface px-4 sm:px-6 lg:px-8"]),"aria-label":"Main navigation"},[O(x,{to:"/",class:"focus-ring flex items-center gap-3 no-underline",onClick:b[0]||(b[0]=u=>r.value=!1)},{default:U(()=>[b[4]||(b[4]=w("div",{class:"flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-ink sm:h-10 sm:w-10"},[w("img",{src:hr,alt:"Fandi Bayu",class:"h-full w-full object-cover",width:"40",height:"40"})],-1)),w("div",yr,[O(Ne,{"enter-active-class":"transition-[opacity,transform] duration-300 ease-out","enter-from-class":"opacity-0 -translate-x-2","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"transition-[opacity,transform] duration-200 ease-in","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-2"},{default:U(()=>[je(w("span",br," Fandi Bayu ",512),[[Fe,o.value]])]),_:1})])]),_:1}),w("div",vr,[(T(!0),E(le,null,ce(s.value,u=>(T(),_t(x,{key:u.to,to:u.to,class:X(["focus-ring min-w-[4rem] rounded-full px-4 py-2.5 text-center text-sm font-medium no-underline transition sm:rounded-[1.25rem] sm:px-5",m(u.to)?"bg-ink text-surface":"text-ink-muted hover:text-ink"]),onClick:y},{default:U(()=>[oe(q(u.label),1)]),_:2},1032,["to","class"]))),128)),w("a",{href:"/resume",class:"focus-ring flex items-center gap-2 rounded-full border-2 border-ink bg-surface px-4 py-2.5 text-sm font-medium text-ink no-underline transition hover:bg-ink hover:text-surface sm:rounded-[1.25rem] sm:px-5",onClick:ba(d,["prevent"])},[oe(q(D(a)("nav.downloadResume"))+" ",1),O(v,{icon:["fas","download"],class:"text-xs","aria-hidden":"true"})])]),w("div",kr,[w("button",{type:"button",class:"focus-ring -mr-1 rounded-2xl p-2.5 text-ink","aria-label":"Toggle menu","aria-expanded":r.value,onClick:b[1]||(b[1]=u=>r.value=!r.value)},[r.value?(T(),E("svg",_r,[...b[6]||(b[6]=[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(T(),E("svg",wr,[...b[5]||(b[5]=[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))],8,xr)])],2),O(Ne,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:U(()=>[je(w("div",{class:"fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden","aria-hidden":"true",onClick:b[2]||(b[2]=u=>r.value=!1)},null,512),[[Fe,r.value]])]),_:1}),O(Ne,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"transition duration-200 ease-in","leave-from-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:U(()=>[je(w("div",Ar,[w("div",Pr,[(T(!0),E(le,null,ce(s.value,u=>(T(),_t(x,{key:u.to,to:u.to,class:X(["py-3 text-base font-medium text-ink no-underline",m(u.to)?"font-semibold":"text-ink-muted"]),onClick:y},{default:U(()=>[oe(q(u.label),1)]),_:2},1032,["to","class"]))),128)),w("button",{type:"button",class:"mt-2 flex items-center gap-2 py-3 text-left text-base font-medium text-ink",onClick:d},[oe(q(D(a)("nav.downloadResume"))+" ",1),O(v,{icon:["fas","download"],class:"text-sm"})]),w("div",Sr,[b[7]||(b[7]=w("p",{class:"text-xs font-semibold uppercase tracking-wider text-ink-muted"}," Find me here ",-1)),w("div",Cr,[(T(),E(le,null,ce(i,u=>w("a",{key:u.label,href:u.href,target:"_blank",rel:"noopener noreferrer",class:"focus-ring text-ink-muted transition hover:text-accent","aria-label":u.label,onClick:b[3]||(b[3]=g=>r.value=!1)},[O(v,{icon:u.icon,class:"text-xl"},null,8,["icon"])],8,Tr)),64))])])])],512),[[Fe,r.value]])]),_:1})],2)}}}),Ir={class:"border-t border-border bg-surface-muted/50"},Er={class:"mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"},Mr={class:"reveal mx-auto max-w-2xl text-center text-lg text-ink sm:text-xl"},Lr={class:"mt-8 flex flex-wrap justify-center gap-6"},Dr=["href","aria-label"],Nr={class:"mt-4 text-center"},jr=["href"],Fr={class:"mt-10 flex flex-wrap justify-center gap-6 text-sm text-ink-muted","aria-label":"Footer navigation"},Hr=ae({__name:"TheFooter",setup(e){const{t}=ut(),n=[{to:"/work",label:t("footer.work")},{to:"/about",label:t("footer.about")},{to:"/writing",label:t("footer.writing")},{to:"/resume",label:t("footer.resume")}],a=[{href:"https://linkedin.com",icon:["fab","linkedin-in"],label:"LinkedIn"},{href:"https://behance.net",icon:["fab","behance"],label:"Behance"},{href:"https://dribbble.com",icon:["fab","dribbble"],label:"Dribbble"},{href:"https://medium.com",icon:["fab","medium"],label:"Medium"},{href:"mailto:hello@fandibayu.com",icon:["fas","envelope"],label:"Email"}];return(r,o)=>{const s=de("FontAwesomeIcon"),i=de("RouterLink");return T(),E("footer",Ir,[w("section",Er,[w("p",Mr,q(D(t)("footer.headline")),1),w("div",Lr,[(T(),E(le,null,ce(a,l=>w("a",{key:l.label,href:l.href,target:"_blank",rel:"noopener noreferrer",class:"focus-ring text-ink-muted transition hover:text-accent","aria-label":l.label},[O(s,{icon:l.icon,class:"text-xl"},null,8,["icon"])],8,Dr)),64))]),w("p",Nr,[w("a",{href:`mailto:${D(t)("footer.email")}`,class:"focus-ring text-accent no-underline hover:underline"},q(D(t)("footer.email")),9,jr)]),w("nav",Fr,[(T(),E(le,null,ce(n,l=>O(i,{key:l.to,to:l.to,class:"link-underline focus-ring no-underline hover:text-ink"},{default:U(()=>[oe(q(l.label),1)]),_:2},1032,["to"])),64))])])])}}}),Rr={work:"Work",about:"About",writing:"Writing",downloadResume:"Download Resume",contact:"Contact"},zr={greeting:"Hello, I'm Fandi Bayu 👋🏻",line1:"I'm a UI/UX Designer, UI/UX Engineer, and Web Designer with 3+ years of experience based in Jakarta, Indonesia.",line2:"I design and build dashboard & web app experiences—fast, structured, and AI-assisted.",aboutMe:"About Me",downloadResume:"Download Resume",motto:"And… yes, I can spend way too long perfecting spacing 😝",subheading:"A UI/UX Designer and Web Designer in Jakarta specializing in dashboards and web apps.",viewWork:"View Work",playful:"Designing interfaces that people actually enjoy using."},Ur={title:"Featured Case Studies",viewCaseStudy:"View case study",tabAll:"All",tabWebApp:"Web App",tabLandingPage:"Landing Page",tabDashboard:"Dashboard",tabWebDesign:"Web Design",noProjectsInCategory:"No projects in this category yet."},$r={title:"Prototypes & Interactions",try:"Try",view:"View"},Wr={title:"Let's work together",subtitle:"Proven on Upwork — ready for your project",earned:"$10k+ earned",clients:"10+ clients",hours:"~1600 hours",primaryCta:"Book work together",secondaryCta:"Visit now"},Br={title:"Writing",readMore:"Read more",source:"Source: Medium"},Vr={title:"I worked with",prev:"Previous",next:"Next"},Kr={headline:"Feel free to reach out — I'd love to help you design or build your next product.",email:"hello@fandibayu.com",work:"Work",about:"About",writing:"Writing",resume:"Resume"},Yr={title:"Work",meta:"Case studies and selected projects"},Gr={title:"About",meta:"Learn more about Fandi Bayu",iLike:"I Like",greeting:"Hey, I'm Fandi. Great to meet you!",intro:"I'm a Jakarta-based UI/UX Designer & UI/UX Engineer with 3+ years of experience, specializing in dashboards and web applications. I work at the intersection of design, technology, and AI—leveraging modern tools to design smarter, faster, and more efficiently.",intro2:"Throughout my career, I've helped transform complex systems into clean, structured experiences that support both users and business goals. My hybrid background allows me to think beyond visuals—considering usability, scalability, and technical constraints from the start.",intro3:"I'm particularly passionate about integrating AI into design workflows—using tools like ChatGPT and other emerging platforms to accelerate research, ideation, and refinement while maintaining thoughtful human-centered decisions.",intro4:"In my free time, I enjoy experimenting with new AI products, building small creative experiments, and hiking to recharge and gain new perspectives.",myValues:"My values",value1Title:"Empathize others",value1Desc:"As designers, it is important to possess the ability to empathize with others and work with a variety of people. Open communication with teammates is key in aligning towards a shared vision and goal.",value2Title:"Keep learning & sharing",value2Desc:"Designers often face a range of challenges and must provide effective solutions. Continuing to learn and develop specialized skills is crucial in this field. By honing my ability to solve complex problems, I can help others who may be facing similar challenges by sharing my experiences and expertise.",value3Title:"Create values",value3Desc:'I believe in the principle of "value-first" design, as the primary purpose of a designer is to bring value to products, businesses, and users through design. Prioritizing the creation of value guides me in making the right design decisions.',iSpecializeIn:"I specialize in",iSpeak:"I speak",indonesian:"Indonesian (Bahasa Indonesia)",english:"English",nativeSpeaker:"Native Speaker",fullWorkingProficiency:"Full Working Proficiency",softwareILove:"Software I love the most",softwareDesc:"I mainly use Figma for designing anything and exploring new ideas, Cursor for AI-assisted coding and rapid prototyping, ChatGPT for research and ideation, and Lovable for building high-quality web applications quickly. I also use many other tools to make my design process & communication more efficient.",myDesignProcess:"My design process",process1:"Understand & Define",process1Desc:`User research
Hypothesis`,process2:"Ideate & Explore",process2Desc:`Brainstorming
Wireframing`,process3:"Design & Build",process3Desc:`Visual/UI Design
Hi-fi prototype`,process4:"Test & Validate",process4Desc:`Usability test
A/B testing`,workingExperience:"Working experience",community:"I'm engaged with community"},Xr={title:"Contact",meta:"Get in touch"},qr={title:"Resume",meta:"Download resume",download:"Download Resume"},Jr={overview:"Overview",problem:"Problem",constraints:"Constraints",approach:"Approach",keyScreens:"Key Screens",outcome:"Outcome",reflection:"Reflection",nextProject:"Next project",role:"Role",tools:"Tools",timeline:"Timeline"},Zr={nav:Rr,hero:zr,featured:Ur,prototypes:$r,upwork:Wr,writing:Br,testimonials:Vr,footer:Kr,work:Yr,about:Gr,contact:Xr,resume:qr,caseStudy:Jr},Qr={work:"Karya",about:"Tentang",writing:"Tulisan",downloadResume:"Unduh CV",contact:"Kontak"},eo={greeting:"Halo, saya Fandi Bayu 👋🏻",line1:"Saya UI/UX Designer, UI/UX Engineer, dan Web Designer dengan pengalaman 3+ tahun, berbasis di Jakarta, Indonesia.",line2:"Saya mendesain dan membangun pengalaman dashboard & web app—cepat, terstruktur, dan berbantuan AI.",aboutMe:"Tentang Saya",downloadResume:"Unduh CV",motto:"Dan… ya, saya bisa menghabiskan waktu lama menyempurnakan spacing 😝",subheading:"UI/UX Designer dan Web Designer di Jakarta yang mengkhususkan diri pada dashboard dan aplikasi web.",viewWork:"Lihat Karya",playful:"Mendesain antarmuka yang benar-benar nyaman dipakai."},to={title:"Studi Kasus Unggulan",viewCaseStudy:"Lihat studi kasus",tabAll:"Semua",tabWebApp:"Web App",tabLandingPage:"Landing Page",tabDashboard:"Dashboard",tabWebDesign:"Web Design",noProjectsInCategory:"Belum ada proyek di kategori ini."},no={title:"Prototipe & Interaksi",try:"Coba",view:"Lihat"},ao={title:"Mari bekerja bersama",subtitle:"Terbukti di Upwork — siap untuk proyek Anda",earned:"$10k+ penghasilan",clients:"10+ klien",hours:"~1600 jam",primaryCta:"Booking kerja sama",secondaryCta:"Kunjungi sekarang"},ro={title:"Tulisan",readMore:"Baca selengkapnya",source:"Sumber: Medium"},oo={title:"Saya pernah bekerja dengan",prev:"Sebelumnya",next:"Selanjutnya"},so={headline:"Silakan hubungi — saya siap membantu mendesain atau membangun produk Anda berikutnya.",email:"hello@fandibayu.com",work:"Karya",about:"Tentang",writing:"Tulisan",resume:"CV"},io={title:"Karya",meta:"Studi kasus dan proyek pilihan"},lo={title:"Tentang",meta:"Kenali Fandi Bayu lebih dekat",iLike:"Saya Suka",greeting:"Hai, saya Fandi. Senang bertemu!",intro:"Saya UI/UX Designer & UI/UX Engineer berbasis di Jakarta dengan pengalaman 3+ tahun, mengkhususkan diri pada dashboard dan aplikasi web. Saya bekerja di persimpangan desain, teknologi, dan AI—memanfaatkan alat modern untuk mendesain lebih pintar, cepat, dan efisien.",intro2:"Sepanjang karier saya, saya telah membantu mengubah sistem kompleks menjadi pengalaman yang bersih dan terstruktur yang mendukung tujuan pengguna dan bisnis. Latar belakang hybrid saya memungkinkan saya berpikir melampaui visual—mempertimbangkan kegunaan, skalabilitas, dan kendala teknis sejak awal.",intro3:"Saya sangat tertarik mengintegrasikan AI ke dalam alur kerja desain—menggunakan alat seperti ChatGPT dan platform baru lainnya untuk mempercepat riset, ideasi, dan penyempurnaan sambil mempertahankan keputusan yang berpusat pada manusia.",intro4:"Di waktu luang, saya menikmati bereksperimen dengan produk AI baru, membangun eksperimen kreatif kecil, dan hiking untuk mengisi ulang dan mendapatkan perspektif baru.",myValues:"Nilai-nilai saya",value1Title:"Berempati dengan orang lain",value1Desc:"Sebagai desainer, penting untuk memiliki kemampuan berempati dengan orang lain dan bekerja dengan berbagai macam orang. Komunikasi terbuka dengan rekan tim adalah kunci dalam menyelaraskan visi dan tujuan bersama.",value2Title:"Terus belajar & berbagi",value2Desc:"Desainer sering menghadapi berbagai tantangan dan harus memberikan solusi yang efektif. Terus belajar dan mengembangkan keterampilan khusus sangat penting di bidang ini. Dengan mengasah kemampuan saya untuk memecahkan masalah kompleks, saya dapat membantu orang lain yang mungkin menghadapi tantangan serupa dengan berbagi pengalaman dan keahlian saya.",value3Title:"Menciptakan nilai",value3Desc:'Saya percaya pada prinsip desain "value-first", karena tujuan utama seorang desainer adalah membawa nilai kepada produk, bisnis, dan pengguna melalui desain. Memprioritaskan penciptaan nilai membimbing saya dalam membuat keputusan desain yang tepat.',iSpecializeIn:"Saya mengkhususkan diri dalam",iSpeak:"Saya berbicara",indonesian:"Bahasa Indonesia",english:"Bahasa Inggris",nativeSpeaker:"Penutur Asli",fullWorkingProficiency:"Kemampuan Kerja Penuh",softwareILove:"Software yang paling saya sukai",softwareDesc:"Saya terutama menggunakan Figma untuk mendesain apa pun dan mengeksplorasi ide baru, Cursor untuk coding berbantuan AI dan rapid prototyping, ChatGPT untuk riset dan ideasi, dan Lovable untuk membangun aplikasi web berkualitas tinggi dengan cepat. Saya juga menggunakan banyak alat lain untuk membuat proses desain & komunikasi saya lebih efisien.",myDesignProcess:"Proses desain saya",process1:"Memahami & Mendefinisikan",process1Desc:`User research
Hipotesis`,process2:"Beride & Mengeksplorasi",process2Desc:`Brainstorming
Wireframing`,process3:"Mendesain & Membangun",process3Desc:`Visual/UI Design
Prototipe hi-fi`,process4:"Menguji & Memvalidasi",process4Desc:`Usability test
A/B testing`,workingExperience:"Pengalaman kerja",community:"Saya terlibat dengan komunitas"},co={title:"Kontak",meta:"Hubungi saya"},fo={title:"CV",meta:"Unduh CV",download:"Unduh CV"},uo={overview:"Ringkasan",problem:"Masalah",constraints:"Batasan",approach:"Pendekatan",keyScreens:"Layar Utama",outcome:"Hasil",reflection:"Refleksi",nextProject:"Proyek berikutnya",role:"Peran",tools:"Alat",timeline:"Timeline"},mo={nav:Qr,hero:eo,featured:to,prototypes:no,upwork:ao,writing:ro,testimonials:oo,footer:so,work:io,about:lo,contact:co,resume:fo,caseStudy:uo},wn="portfolio-lang";function po(){if(typeof window>"u")return"en";const e=localStorage.getItem(wn);if(e==="en"||e==="id")return e;const n=new URLSearchParams(window.location.search).get("lang");return n==="id"||n==="en"?n:"en"}const _n=xa({legacy:!1,locale:po(),fallbackLocale:"en",messages:{en:Zr,id:mo}});function An(e){_n.global.locale.value=e,typeof window<"u"&&localStorage.setItem(wn,e)}function go(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search).get("lang");(t==="id"||t==="en")&&An(t)}const ho={class:"relative inline-flex rounded-[2rem] border border-border bg-surface p-1 shadow-soft",role:"group","aria-label":"Switch language"},yo=ae({__name:"LanguageToggle",setup(e){const{locale:t}=ut();function n(a){An(a)}return(a,r)=>(T(),E("div",ho,[w("div",{class:X(["absolute top-1 bottom-1 rounded-full bg-ink transition-[left] duration-300 ease-out",D(t)==="id"?"left-[calc(50%+2px)] w-[calc(50%-6px)]":"left-1 w-[calc(50%-6px)]"]),"aria-hidden":"true"},null,2),w("button",{type:"button",class:X(["focus-ring relative z-10 flex-1 rounded-full py-2.5 px-5 text-sm font-medium transition-colors duration-200",D(t)==="en"?"text-surface":"text-ink-muted hover:text-ink"]),onClick:r[0]||(r[0]=o=>n("en"))}," EN ",2),w("button",{type:"button",class:X(["focus-ring relative z-10 flex-1 rounded-full py-2.5 px-5 text-sm font-medium transition-colors duration-200",D(t)==="id"?"text-surface":"text-ink-muted hover:text-ink"]),onClick:r[1]||(r[1]=o=>n("id"))}," ID ",2)]))}}),bo={class:"flex min-h-screen flex-col"},vo={class:"flex-1"},ko={class:"fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8"},xo=ae({__name:"LayoutView",setup(e){return(t,n)=>(T(),E("div",bo,[O(Or),w("main",vo,[wa(t.$slots,"default")]),O(Hr),w("div",ko,[O(yo)])]))}}),wo={id:"app",class:"min-h-screen flex flex-col"},_o=ae({__name:"App",setup(e){return xn({htmlAttrs:{lang:"en"},link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"}]}),(t,n)=>{const a=de("RouterView");return T(),E("div",wo,[O(xo,null,{default:U(()=>[O(a)]),_:1})])}}}),Ao="modulepreload",Po=function(e){return"/"+e},Mt={},Y=function(t,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=Po(l),l in Mt)return;Mt[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":Ao,c||(y.as="script"),y.crossOrigin="",y.href=l,i&&y.setAttribute("nonce",i),document.head.appendChild(y),c)return new Promise((m,h)=>{y.addEventListener("load",m),y.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return r.then(s=>{for(const i of s||[])i.status==="rejected"&&o(i.reason);return t().catch(o)})},So=[{path:"/",name:"Home",component:()=>Y(()=>import("./HomeView-CcmYMZW0.js"),__vite__mapDeps([0,1,2,3,4,5,6])),meta:{titleKey:"nav.work",descriptionKey:"hero.subheading"}},{path:"/work",name:"Work",component:()=>Y(()=>import("./HomeView-CcmYMZW0.js"),__vite__mapDeps([0,1,2,3,4,5,6])),meta:{titleKey:"work.title",descriptionKey:"work.meta"}},{path:"/work/:slug",name:"CaseStudy",component:()=>Y(()=>import("./CaseStudyView-Ue19I_GJ.js"),__vite__mapDeps([7,1,2,3,5])),meta:{titleKey:"caseStudy",descriptionKey:"caseStudy"}},{path:"/about",name:"About",component:()=>Y(()=>import("./AboutView-ZJzLVRGM.js"),__vite__mapDeps([8,1,2,3,4])),meta:{titleKey:"about.title",descriptionKey:"about.meta"}},{path:"/writing",name:"Writing",component:()=>Y(()=>import("./WritingView-Ry6pqgL3.js"),__vite__mapDeps([9,1,2,3,4,6])),meta:{titleKey:"writing.title",descriptionKey:"writing.title"}},{path:"/contact",name:"Contact",component:()=>Y(()=>import("./ContactView-DVioCVbJ.js"),__vite__mapDeps([10,1,2,3,4])),meta:{titleKey:"contact.title",descriptionKey:"contact.meta"}},{path:"/resume",name:"Resume",component:()=>Y(()=>import("./ResumeView-DPJEsjZd.js"),__vite__mapDeps([11,1,2,4])),meta:{titleKey:"resume.title",descriptionKey:"resume.meta"}}],Pn=_a({history:Aa(),routes:So,scrollBehavior(e,t,n){return n||(e.hash?{el:e.hash,behavior:"smooth"}:{top:0})}});Pn.beforeEach((e,t,n)=>{go(),n()});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Co(e,t,n){return(t=Oo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lt(Object(n),!0).forEach(function(a){Co(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function To(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oo(e){var t=To(e,"string");return typeof t=="symbol"?t:t+""}const Dt=()=>{};let dt={},Sn={},Cn=null,Tn={mark:Dt,measure:Dt};try{typeof window<"u"&&(dt=window),typeof document<"u"&&(Sn=document),typeof MutationObserver<"u"&&(Cn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}const{userAgent:Nt=""}=dt.navigator||{},W=dt,_=Sn,jt=Cn,ve=Tn;W.document;const R=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",On=~Nt.indexOf("MSIE")||~Nt.indexOf("Trident/");var Io=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Eo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,In={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Mo={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},En=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",Ie="duotone",Lo="sharp",Do="sharp-duotone",Mn=[C,Ie,Lo,Do],No={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},jo={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Fo=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ho={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ro=["fak","fa-kit","fakd","fa-kit-duotone"],Ft={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zo=["kit"],Uo={kit:{"fa-kit":"fak"}},$o=["fak","fakd"],Wo={kit:{fak:"fa-kit"}},Ht={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ke={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vo=["fak","fa-kit","fakd","fa-kit-duotone"],Ko={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Go={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ge={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Xo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Xe=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Bo,...Xo],qo=["solid","regular","light","thin","duotone","brands"],Ln=[1,2,3,4,5,6,7,8,9,10],Jo=Ln.concat([11,12,13,14,15,16,17,18,19,20]),Zo=[...Object.keys(Go),...qo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ke.GROUP,ke.SWAP_OPACITY,ke.PRIMARY,ke.SECONDARY].concat(Ln.map(e=>"".concat(e,"x"))).concat(Jo.map(e=>"w-".concat(e))),Qo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const F="___FONT_AWESOME___",qe=16,Dn="fa",Nn="svg-inline--fa",Z="data-fa-i2svg",Je="data-fa-pseudo-element",es="data-fa-pseudo-element-pending",mt="data-prefix",pt="data-icon",Rt="fontawesome-i2svg",ts="async",ns=["HTML","HEAD","STYLE","SCRIPT"],jn=(()=>{try{return!0}catch{return!1}})();function ge(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[C]}})}const Fn=f({},In);Fn[C]=f(f(f(f({},{"fa-duotone":"duotone"}),In[C]),Ft.kit),Ft["kit-duotone"]);const as=ge(Fn),Ze=f({},Ho);Ze[C]=f(f(f(f({},{duotone:"fad"}),Ze[C]),Ht.kit),Ht["kit-duotone"]);const zt=ge(Ze),Qe=f({},Ge);Qe[C]=f(f({},Qe[C]),Wo.kit);const gt=ge(Qe),et=f({},Yo);et[C]=f(f({},et[C]),Uo.kit);ge(et);const rs=Io,Hn="fa-layers-text",os=Eo,ss=f({},No);ge(ss);const is=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Re=Mo,ls=[...zo,...Zo],fe=W.FontAwesomeConfig||{};function cs(e){var t=_.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fs(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=fs(cs(n));r!=null&&(fe[a]=r)});const Rn={styleDefault:"solid",familyDefault:C,cssPrefix:Dn,replacementClass:Nn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fe.familyPrefix&&(fe.cssPrefix=fe.familyPrefix);const ne=f(f({},Rn),fe);ne.autoReplaceSvg||(ne.observeMutations=!1);const p={};Object.keys(Rn).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(t){ne[e]=t,ue.forEach(n=>n(p))},get:function(){return ne[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){ne.cssPrefix=e,ue.forEach(t=>t(p))},get:function(){return ne.cssPrefix}});W.FontAwesomeConfig=p;const ue=[];function us(e){return ue.push(e),()=>{ue.splice(ue.indexOf(e),1)}}const z=qe,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ds(e){if(!e||!R)return;const t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=_.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return _.head.insertBefore(t,a),e}const ms="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){let e=12,t="";for(;e-- >0;)t+=ms[Math.random()*62|0];return t}function re(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ht(e){return e.classList?re(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function zn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ps(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(zn(e[n]),'" '),"").trim()}function Ee(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function yt(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function gs(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(i)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function hs(e){let{transform:t,width:n=qe,height:a=qe,startCentered:r=!1}=e,o="";return r&&On?o+="translate(".concat(t.x/z-n/2,"em, ").concat(t.y/z-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(t.x/z,"em), calc(-50% + ").concat(t.y/z,"em)) "):o+="translate(".concat(t.x/z,"em, ").concat(t.y/z,"em) "),o+="scale(".concat(t.size/z*(t.flipX?-1:1),", ").concat(t.size/z*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ys=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Un(){const e=Dn,t=Nn,n=p.cssPrefix,a=p.replacementClass;let r=ys;if(n!==e||a!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let Ut=!1;function ze(){p.autoAddCss&&!Ut&&(ds(Un()),Ut=!0)}var bs={mixout(){return{dom:{css:Un,insertCss:ze}}},hooks(){return{beforeDOMElementCreation(){ze()},beforeI2svg(){ze()}}}};const H=W||{};H[F]||(H[F]={});H[F].styles||(H[F].styles={});H[F].hooks||(H[F].hooks={});H[F].shims||(H[F].shims=[]);var L=H[F];const $n=[],Wn=function(){_.removeEventListener("DOMContentLoaded",Wn),Ce=1,$n.map(e=>e())};let Ce=!1;R&&(Ce=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),Ce||_.addEventListener("DOMContentLoaded",Wn));function vs(e){R&&(Ce?setTimeout(e,0):$n.push(e))}function he(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?zn(e):"<".concat(t," ").concat(ps(n),">").concat(a.map(he).join(""),"</").concat(t,">")}function $t(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ue=function(t,n,a,r){var o=Object.keys(t),s=o.length,i=n,l,c,d;for(a===void 0?(l=1,d=t[o[0]]):(l=0,d=a);l<s;l++)c=o[l],d=i(d,t[c],c,t);return d};function ks(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function tt(e){const t=ks(e);return t.length===1?t[0].toString(16):null}function xs(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Wt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function nt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Wt(t);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(e,Wt(t)):L.styles[e]=f(f({},L.styles[e]||{}),r),e==="fas"&&nt("fa",t)}const{styles:pe,shims:ws}=L,Bn=Object.keys(gt),_s=Bn.reduce((e,t)=>(e[t]=Object.keys(gt[t]),e),{});let bt=null,Vn={},Kn={},Yn={},Gn={},Xn={};function As(e){return~ls.indexOf(e)}function Ps(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!As(r)?r:null}const qn=()=>{const e=a=>Ue(pe,(r,o,s)=>(r[s]=Ue(o,a,{}),r),{});Vn=e((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),Kn=e((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),Xn=e((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const t="far"in pe||p.autoFetchSvg,n=Ue(ws,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});Yn=n.names,Gn=n.unicodes,bt=Me(p.styleDefault,{family:p.familyDefault})};us(e=>{bt=Me(e.styleDefault,{family:p.familyDefault})});qn();function vt(e,t){return(Vn[e]||{})[t]}function Ss(e,t){return(Kn[e]||{})[t]}function J(e,t){return(Xn[e]||{})[t]}function Jn(e){return Yn[e]||{prefix:null,iconName:null}}function Cs(e){const t=Gn[e],n=vt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return bt}const Zn=()=>({prefix:null,iconName:null,rest:[]});function Ts(e){let t=C;const n=Bn.reduce((a,r)=>(a[r]="".concat(p.cssPrefix,"-").concat(r),a),{});return Mn.forEach(a=>{(e.includes(n[a])||e.some(r=>_s[a].includes(r)))&&(t=a)}),t}function Me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=C}=t,a=as[n][e];if(n===Ie&&!e)return"fad";const r=zt[n][e]||zt[n][a],o=e in L.styles?e:null;return r||o||null}function Os(e){let t=[],n=null;return e.forEach(a=>{const r=Ps(p.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function Bt(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=Xe.concat(Vo),o=Bt(e.filter(y=>r.includes(y))),s=Bt(e.filter(y=>!Xe.includes(y))),i=o.filter(y=>(a=y,!En.includes(y))),[l=null]=i,c=Ts(o),d=f(f({},Os(s)),{},{prefix:Me(l,{family:c})});return f(f(f({},d),Ls({values:e,family:c,styles:pe,config:p,canonical:d,givenPrefix:a})),Is(n,a,d))}function Is(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const o=t==="fa"?Jn(r):{},s=J(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!pe.far&&pe.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Es=Mn.filter(e=>e!==C||e!==Ie),Ms=Object.keys(Ge).filter(e=>e!==C).map(e=>Object.keys(Ge[e])).flat();function Ls(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=e,i=n===Ie,l=t.includes("fa-duotone")||t.includes("fad"),c=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(l||c||d)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Es.includes(n)&&(Object.keys(o).find(m=>Ms.includes(m))||s.autoFetchSvg)){const m=Fo.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=J(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=B()||"fas"),a}class Ds{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=f(f({},this.definitions[o]||{}),r[o]),nt(o,r[o]);const s=gt[C][o];s&&nt(s,r[o]),qn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],l=i[2];t[o]||(t[o]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(t[o][c]=i)}),t[o][s]=i}),t}}let Vt=[],ee={};const te={},Ns=Object.keys(te);function js(e,t){let{mixoutsTo:n}=t;return Vt=e,ee={},Object.keys(te).forEach(a=>{Ns.indexOf(a)===-1&&delete te[a]}),Vt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{ee[s]||(ee[s]=[]),ee[s].push(o[s])})}a.provides&&a.provides(te)}),n}function at(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ee[e]||[]).forEach(s=>{t=s.apply(null,[t,...a])}),t}function Q(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ee[e]||[]).forEach(o=>{o.apply(null,n)})}function V(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,t):void 0}function rt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||B();if(t)return t=J(n,t)||t,$t(Qn.definitions,n,t)||$t(L.styles,n,t)}const Qn=new Ds,Fs=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,Q("noAuto")},Hs={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(Q("beforeI2svg",e),V("pseudoElements2svg",e),V("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,vs(()=>{zs({autoReplaceSvgRoot:t}),Q("watch",e)})}},Rs={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:J(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Me(e[0]);return{prefix:n,iconName:J(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(rs))){const t=Le(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||B(),iconName:J(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=B();return{prefix:t,iconName:J(t,e)||e}}}},I={noAuto:Fs,config:p,dom:Hs,parse:Rs,library:Qn,findIconDefinition:rt,toHtml:he},zs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=_}=e;(Object.keys(L.styles).length>0||p.autoFetchSvg)&&R&&p.autoReplaceSvg&&I.dom.i2svg({node:t})};function De(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>he(n))}}),Object.defineProperty(e,"node",{get:function(){if(!R)return;const n=_.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Us(e){let{children:t,main:n,mask:a,attributes:r,styles:o,transform:s}=e;if(yt(s)&&n.found&&!a.found){const{width:i,height:l}=n,c={x:i/l/2,y:.5};r.style=Ee(f(f({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function $s(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:s}),children:a}]}]}function kt(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:l,titleId:c,extra:d,watchable:y=!1}=e,{width:m,height:h}=n.found?n:t,b=$o.includes(a),x=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(P=>d.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(d.classes).join(" ");let v={children:[],attributes:f(f({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})};const u=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};y&&(v.attributes[Z]=""),i&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||me())},children:[i]}),delete v.attributes.title);const g=f(f({},v),{},{prefix:a,iconName:r,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:f(f({},u),d.styles)}),{children:k,attributes:A}=n.found&&t.found?V("generateAbstractMask",g)||{children:[],attributes:{}}:V("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=k,g.attributes=A,s?$s(g):Us(g)}function Kt(e){const{content:t,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=e,l=f(f(f({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(l[Z]="");const c=f({},s.styles);yt(r)&&(c.transform=hs({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const d=Ee(c);d.length>0&&(l.style=d);const y=[];return y.push({tag:"span",attributes:l,children:[t]}),o&&y.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),y}function Ws(e){const{content:t,title:n,extra:a}=e,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Ee(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:$e}=L;function ot(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Re.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Re.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Bs={found:!1,width:512,height:512};function Vs(e,t){!jn&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function st(e,t){let n=t;return t==="fa"&&p.styleDefault!==null&&(t=B()),new Promise((a,r)=>{if(n==="fa"){const o=Jn(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&$e[t]&&$e[t][e]){const o=$e[t][e];return a(ot(o))}Vs(e,t),a(f(f({},Bs),{},{icon:p.showMissingIcons&&e?V("missingIconAbstract")||{}:{}}))})}const Yt=()=>{},it=p.measurePerformance&&ve&&ve.mark&&ve.measure?ve:{mark:Yt,measure:Yt},se='FA "6.7.2"',Ks=e=>(it.mark("".concat(se," ").concat(e," begins")),()=>ea(e)),ea=e=>{it.mark("".concat(se," ").concat(e," ends")),it.measure("".concat(se," ").concat(e),"".concat(se," ").concat(e," begins"),"".concat(se," ").concat(e," ends"))};var xt={begin:Ks,end:ea};const we=()=>{};function Gt(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function Ys(e){const t=e.getAttribute?e.getAttribute(mt):null,n=e.getAttribute?e.getAttribute(pt):null;return t&&n}function Gs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Xs(){return p.autoReplaceSvg===!0?_e.replace:_e[p.autoReplaceSvg]||_e.replace}function qs(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function Js(e){return _.createElement(e)}function ta(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?qs:Js}=t;if(typeof e=="string")return _.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){a.appendChild(ta(o,{ceFn:n}))}),a}function Zs(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const _e={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(ta(n),t)}),t.getAttribute(Z)===null&&p.keepOriginalSource){let n=_.createComment(Zs(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ht(t).indexOf(p.replacementClass))return _e.replace(e);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===p.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>he(o)).join(`
`);t.setAttribute(Z,""),t.innerHTML=r}};function Xt(e){e()}function na(e,t){const n=typeof t=="function"?t:we;if(e.length===0)n();else{let a=Xt;p.mutateApproach===ts&&(a=W.requestAnimationFrame||Xt),a(()=>{const r=Xs(),o=xt.begin("mutate");e.map(r),o(),n()})}}let wt=!1;function aa(){wt=!0}function lt(){wt=!1}let Te=null;function qt(e){if(!jt||!p.observeMutations)return;const{treeCallback:t=we,nodeCallback:n=we,pseudoElementsCallback:a=we,observeMutationsRoot:r=_}=e;Te=new jt(o=>{if(wt)return;const s=B();re(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Gt(i.addedNodes[0])&&(p.searchPseudoElements&&a(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&p.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Gt(i.target)&&~is.indexOf(i.attributeName))if(i.attributeName==="class"&&Ys(i.target)){const{prefix:l,iconName:c}=Le(ht(i.target));i.target.setAttribute(mt,l||s),c&&i.target.setAttribute(pt,c)}else Gs(i.target)&&n(i.target)})}),R&&Te.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Qs(){Te&&Te.disconnect()}function ei(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function ti(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=Le(ht(e));return r.prefix||(r.prefix=B()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ss(r.prefix,e.innerText)||vt(r.prefix,tt(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ni(e){const t=re(e.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||me()):(t["aria-hidden"]="true",t.focusable="false")),t}function ai(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=ti(e),o=ni(e),s=at("parseNodeAttributes",{},e);let i=t.styleParser?ei(e):[];return f({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:ri}=L;function ra(e){const t=p.autoReplaceSvg==="nest"?Jt(e,{styleParser:!1}):Jt(e);return~t.extra.classes.indexOf(Hn)?V("generateLayersText",e,t):V("generateSvgReplacementMutation",e,t)}function oi(){return[...Ro,...Xe]}function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=_.documentElement.classList,a=d=>n.add("".concat(Rt,"-").concat(d)),r=d=>n.remove("".concat(Rt,"-").concat(d)),o=p.autoFetchSvg?oi():En.concat(Object.keys(ri));o.includes("fa")||o.push("fa");const s=[".".concat(Hn,":not([").concat(Z,"])")].concat(o.map(d=>".".concat(d,":not([").concat(Z,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=re(e.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const l=xt.begin("onTree"),c=i.reduce((d,y)=>{try{const m=ra(y);m&&d.push(m)}catch(m){jn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,y)=>{Promise.all(c).then(m=>{na(m,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),d()})}).catch(m=>{l(),y(m)})})}function si(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ra(e).then(n=>{n&&na([n],t)})}function ii(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:rt(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:rt(r||{})),e(a,f(f({},n),{},{mask:r}))}}const li=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:l=[],attributes:c={},styles:d={}}=t;if(!e)return;const{prefix:y,iconName:m,icon:h}=e;return De(f({type:"icon"},e),()=>(Q("beforeDOMElementCreation",{iconDefinition:e,params:t}),p.autoA11y&&(s?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||me()):(c["aria-hidden"]="true",c.focusable="false")),kt({icons:{main:ot(h),mask:r?ot(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:m,transform:f(f({},M),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:c,styles:d,classes:l}})))};var ci={mixout(){return{icon:ii(li)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Zt,e.nodeCallback=si,e}}},provides(e){e.i2svg=function(t){const{node:n=_,callback:a=()=>{}}=t;return Zt(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:l,mask:c,maskId:d,extra:y}=n;return new Promise((m,h)=>{Promise.all([st(a,s),c.iconName?st(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[x,v]=b;m([t,kt({icons:{main:x,mask:v},prefix:s,iconName:a,transform:i,symbol:l,maskId:d,title:r,titleId:o,extra:y,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:o,styles:s}=t;const i=Ee(s);i.length>0&&(a.style=i);let l;return yt(o)&&(l=V("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},fi={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return De({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ui={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=t;return De({type:"counter",content:e},()=>(Q("beforeDOMElementCreation",{content:e,params:t}),Ws({content:e.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},di={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,title:a=null,classes:r=[],attributes:o={},styles:s={}}=t;return De({type:"text",content:e},()=>(Q("beforeDOMElementCreation",{content:e,params:t}),Kt({content:e,transform:f(f({},M),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(On){const l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/l,i=c.height/l}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Kt({content:t.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const mi=new RegExp('"',"ug"),Qt=[1105920,1112319],en=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),jo),Qo),Ko),ct=Object.keys(en).reduce((e,t)=>(e[t.toLowerCase()]=en[t],e),{}),pi=Object.keys(ct).reduce((e,t)=>{const n=ct[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function gi(e){const t=e.replace(mi,""),n=xs(t,0),a=n>=Qt[0]&&n<=Qt[1],r=t.length===2?t[0]===t[1]:!1;return{value:tt(r?t[0]:t),isSecondary:a||r}}function hi(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(ct[n]||{})[r]||pi[n]}function tn(e,t){const n="".concat(es).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const s=re(e.children).filter(m=>m.getAttribute(Je)===t)[0],i=W.getComputedStyle(e,t),l=i.getPropertyValue("font-family"),c=l.match(os),d=i.getPropertyValue("font-weight"),y=i.getPropertyValue("content");if(s&&!c)return e.removeChild(s),a();if(c&&y!=="none"&&y!==""){const m=i.getPropertyValue("content");let h=hi(l,d);const{value:b,isSecondary:x}=gi(m),v=c[0].startsWith("FontAwesome");let u=vt(h,b),g=u;if(v){const k=Cs(b);k.iconName&&k.prefix&&(u=k.iconName,h=k.prefix)}if(u&&!x&&(!s||s.getAttribute(mt)!==h||s.getAttribute(pt)!==g)){e.setAttribute(n,g),s&&e.removeChild(s);const k=ai(),{extra:A}=k;A.attributes[Je]=t,st(u,h).then(P=>{const N=kt(f(f({},k),{},{icons:{main:P,mask:Zn()},prefix:h,iconName:g,extra:A,watchable:!0})),K=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(K,e.firstChild):e.appendChild(K),K.outerHTML=N.map(la=>he(la)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function yi(e){return Promise.all([tn(e,"::before"),tn(e,"::after")])}function bi(e){return e.parentNode!==document.head&&!~ns.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Je)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nn(e){if(R)return new Promise((t,n)=>{const a=re(e.querySelectorAll("*")).filter(bi).map(yi),r=xt.begin("searchPseudoElements");aa(),Promise.all(a).then(()=>{r(),lt(),t()}).catch(()=>{r(),lt(),n()})})}var vi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=nn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=_}=t;p.searchPseudoElements&&nn(n)}}};let an=!1;var ki={mixout(){return{dom:{unwatch(){aa(),an=!0}}}},hooks(){return{bootstrap(){qt(at("mutationObserverCallbacks",{}))},noAuto(){Qs()},watch(e){const{observeMutationsRoot:t}=e;an?lt():qt(at("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const rn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var xi={mixout(){return{parse:{transform:e=>rn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=rn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:o}=t;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(i," ").concat(l," ").concat(c)},y={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:d,path:y};return{tag:"g",attributes:f({},m.outer),children:[{tag:"g",attributes:f({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),m.path)}]}]}}}};const We={x:0,y:0,width:"100%",height:"100%"};function on(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wi(e){return e.tag==="g"?e.children:[e]}var _i={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Le(n.split(" ").map(r=>r.trim())):Zn();return a.prefix||(a.prefix=B()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=t;const{width:l,icon:c}=r,{width:d,icon:y}=o,m=gs({transform:i,containerWidth:d,iconWidth:l}),h={tag:"rect",attributes:f(f({},We),{},{fill:"white"})},b=c.children?{children:c.children.map(on)}:{},x={tag:"g",attributes:f({},m.inner),children:[on(f({tag:c.tag,attributes:f(f({},c.attributes),m.path)},b))]},v={tag:"g",attributes:f({},m.outer),children:[x]},u="mask-".concat(s||me()),g="clip-".concat(s||me()),k={tag:"mask",attributes:f(f({},We),{},{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:wi(y)},k]};return n.push(A,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(u,")")},We)}),{children:n,attributes:a}}}},Ai={provides(e){let t=!1;W.matchMedia&&(t=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=f(f({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Pi={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Si=[bs,ci,fi,ui,di,vi,ki,xi,_i,Ai,Pi];js(Si,{mixoutsTo:I});I.noAuto;I.config;const Ci=I.library;I.dom;const ft=I.parse;I.findIconDefinition;I.toHtml;const Ti=I.icon;I.layer;I.text;I.counter;function S(e,t,n){return(t=Mi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sn(Object(n),!0).forEach(function(a){S(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Oi(e,t){if(e==null)return{};var n,a,r=Ii(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ii(e,t){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;n[a]=e[a]}return n}function Ei(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mi(e){var t=Ei(e,"string");return typeof t=="symbol"?t:t+""}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(e)}function Be(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?S({},e,t):{}}function Li(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},S(S(S(S(S(S(S(S(S(S(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),S(S(S(S(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oa={exports:{}};(function(e){(function(t){var n=function(u,g,k){if(!c(g)||y(g)||m(g)||h(g)||l(g))return g;var A,P=0,N=0;if(d(g))for(A=[],N=g.length;P<N;P++)A.push(n(u,g[P],k));else{A={};for(var K in g)Object.prototype.hasOwnProperty.call(g,K)&&(A[u(K,k)]=n(u,g[K],k))}return A},a=function(u,g){g=g||{};var k=g.separator||"_",A=g.split||/(?=[A-Z])/;return u.split(A).join(k)},r=function(u){return b(u)?u:(u=u.replace(/[\-_\s]+(.)?/g,function(g,k){return k?k.toUpperCase():""}),u.substr(0,1).toLowerCase()+u.substr(1))},o=function(u){var g=r(u);return g.substr(0,1).toUpperCase()+g.substr(1)},s=function(u,g){return a(u,g).toLowerCase()},i=Object.prototype.toString,l=function(u){return typeof u=="function"},c=function(u){return u===Object(u)},d=function(u){return i.call(u)=="[object Array]"},y=function(u){return i.call(u)=="[object Date]"},m=function(u){return i.call(u)=="[object RegExp]"},h=function(u){return i.call(u)=="[object Boolean]"},b=function(u){return u=u-0,u===u},x=function(u,g){var k=g&&"process"in g?g.process:g;return typeof k!="function"?u:function(A,P){return k(A,u,P)}},v={camelize:r,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(u,g){return n(x(r,g),u)},decamelizeKeys:function(u,g){return n(x(s,g),u,g)},pascalizeKeys:function(u,g){return n(x(o,g),u)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=v:t.humps=v})(Di)})(oa);var Ni=oa.exports,ji=["class","style"];function Fi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Ni.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return t[r]=o,t},{})}function Hi(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return sa(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Hi(d);break;case"style":l.style=Fi(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,i=Oi(n,ji);return Pa(e.tag,j(j(j({},t),{},{class:r.class,style:j(j({},r.style),s)},r.attrs),i),a)}var ia=!1;try{ia=!0}catch{}function Ri(){if(!ia&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ln(e){if(e&&Oe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ft.icon)return ft.icon(e);if(e===null)return null;if(Oe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zi=ae({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=G(function(){return ln(t.icon)}),o=G(function(){return Be("classes",Li(t))}),s=G(function(){return Be("transform",typeof t.transform=="string"?ft.transform(t.transform):t.transform)}),i=G(function(){return Be("mask",ln(t.mask))}),l=G(function(){var d=j(j(j(j({},o.value),s.value),i.value),{},{symbol:t.symbol,maskId:t.maskId});return d.title=t.title,d.titleId=t.titleId,Ti(r.value,d)});fn(l,function(d){if(!d)return Ri("Could not find one or more icon(s)",r.value,i.value)},{immediate:!0});var c=G(function(){return l.value?sa(l.value.abstract[0],{},a):null});return function(){return c.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ui={prefix:"fab",iconName:"behance",icon:[576,512,[],"f1b4","M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"]},$i={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wi={prefix:"fab",iconName:"dribbble",icon:[512,512,[],"f17d","M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"]},Bi={prefix:"fab",iconName:"medium",icon:[640,512,[62407,"medium-m"],"f23a","M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Vi={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},Ki={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Yi=Ki,Gi={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Xi={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},qi={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Ji={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};Ci.add($i,Ui,Wi,Bi,Gi,Yi,qi,Ji,Xi,Vi);const ye=Sa(_o),Zi=gr();ye.use(Pn);ye.use(_n);ye.use(Zi);ye.component("FontAwesomeIcon",zi);ye.mount("#app");export{xn as u};
