/*!
 * HyImg: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function n(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)$.push(arguments[r]);for(;$.length>0;){let t=$.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)$.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&$.push(r);t.class=$.join(" "),$.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],g):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}function o(e,t,n={}){let o=Array.isArray(t)?t:[t];const l=e.document,s=n.hydratedCssClass||"hydrated",r=n.exclude;r&&(o=o.filter(e=>-1===r.indexOf(e[0])));const c=o.map(e=>e[0]);if(c.length>0){const e=l.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const a=n.namespace||"HyImg";return H||(H=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,a,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!D[a]){const t={},r=n.resourcesUrl||"./";i(a,t,e,l,r,s),D[a]=T(a,t,e,l,r,s,o)}(function t(){o.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),D[a].l(function i(e){const t=k(e),n=t.s,o=f(e[0]);return t.s=(({mode:e,scoped:t})=>(function i(e,t,n){return import(`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var i=function(){};function applyPolyfills(){return Promise.resolve()}const l="$",s={},r=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.u||1===o.u&&!t.v.p)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.m.head;if(n.p)if(1===o.u)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.M.get(e);if(l||t.M.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.g(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},c=e=>null!=e,a=e=>e.toLowerCase(),f=e=>a(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),u=()=>{},p=(e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(d,a(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(d,a(t),n):e.setAttribute(t,n))},d="http://www.w3.org/1999/xlink",v=(e,t,n,o,i,l,s)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.k(t);o&&o.C&&o.C[n]?(y(t,n,i),s&&o.C[n].j&&p(t,o.C[n].A,i,4===o.C[n].O)):"ref"!==n&&(y(t,n,null==i?"":i),null!=i&&!1!==i||e.v._(t,n))}else null!=i&&"key"!==n?p(t,n,i):(l||e.v.S(t,n)&&(null==i||!1===i))&&e.v._(t,n);else n=a(n)in t?a(n.substring(2)):a(n[2])+n.substring(3),i?i!==o&&e.v.W(t,n,i,0):e.v.N(t,n,0);else if(o!==i){const e=b(o),n=b(i),l=e.filter(e=>!n.includes(e)),s=b(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},b=e=>null==e||""===e?[]:e.trim().split(/\s+/),y=(e,t,n)=>{try{e[t]=n}catch(e){}},m=(e,t,n,o,i)=>{const l=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,c=n.vattrs||s;for(i in r)c&&null!=c[i]||null==r[i]||v(e,l,i,r[i],void 0,o,n.i);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?l[i]:r[i])||v(e,l,i,r[i],c[i],o,n.i)};let h=!1;const w=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{w(e,t)}))},M=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],c=[],a=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(c);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(a,t),d(f,t),a.length>0&&(f.push(...a),a.length=0),(o=c.length+a.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(c),write:u(a)}}},$=[],g={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},k=(e,t,n)=>{const[o,i,,l,s,r]=e,c={color:{A:"color"}};if(l)for(t=0;t<l.length;t++)c[(n=l[t])[0]]={P:n[1],j:!!n[2],A:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,O:n[4]};return{t:o,s:i,C:Object.assign({},c),u:s,L:r?r.map(C):void 0}},C=e=>({R:e[0],T:e[1],D:!!e[2],H:!!e[3],q:!!e[4]}),j=(e,t)=>c(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,E=(e,t,n)=>{e.B.add(t),e.F.has(t)||(e.F.set(t,!0),e.I?e.queue.write(()=>A(e,t,n)):e.queue.tick(()=>A(e,t,n)))},A=async(e,o,i,l,s,r)=>{if(e.F.delete(o),!e.U.has(o)){if(!(s=e.Y.get(o))){if((r=e.Z.get(o))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{A(e,o,i)});if(s=x(e,o,e.G.get(o),i))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.J(t,3,o)}}((e,o,i,l)=>{try{const s=o.K.host,r=o.K.encapsulation,c="shadow"===r&&e.v.p;let a,f=i;if(a=((e,t,n)=>(e&&Object.keys(e).forEach(o=>{e[o].reflectToAttr&&((n=n||{})[o]=t[o])}),n))(o.K.properties,l),c&&(f=i.shadowRoot),!i["s-rn"]){e.V(e,e.v,o,i);const n=i["s-sc"];n&&(e.v.X(i,t(n,!0)),"scoped"===r&&e.v.X(i,t(n)))}if(l.render||l.hostData||s||a){e.ee=!0;const t=l.render&&l.render();let o;a&&(o=o?Object.assign(o,a):a),e.ee=!1;const s=n(null,o,t),u=e.te.get(i)||{};u.o=f,s.i=!0,e.te.set(i,e.render(i,u,s,c,r))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e.ee=!1,e.J(t,8,i,!0)}})(e,e.k(o),o,s),o["s-init"]()}},O=(e,t,n,o,i,l,s,r,a)=>{if(t.type||t.state){const f=e.ne.get(n);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(r=l&&l.oe)&&c(a=r[t.attr])&&(f[i]=j(t.type,a)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=j(t.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[N+i]=t.watchCallbacks.slice()),W(o,i,function f(t){return(t=e.ne.get(e.ie.get(this)))&&t[i]},function u(n,o){(o=e.ie.get(this))&&(t.state||t.mutable)&&_(e,o,i,n,s)})}else t.elementRef?S(o,i,n):t.method&&S(n,i,o[i].bind(o))},_=(e,t,n,o,i,l,s)=>{(s=e.ne.get(t))||e.ne.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,l=e.Y.get(t))){{const e=s[N+n];if(e)for(let t=0;t<e.length;t++)try{l[e[t]].call(l,o,r,n)}catch(e){console.error(e)}}!e.ee&&t["s-rn"]&&E(e,t,i)}},S=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},W=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},N="wc-",x=(e,t,n,o,i,l)=>{try{i=new(l=e.k(t).K),((e,t,n,o,i,l)=>{e.ie.set(o,n),e.ne.has(n)||e.ne.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{O(e,s,n,o,t,i,l)})})(e,l,t,i,n,o)}catch(n){i={},e.J(n,7,t,!0)}return e.Y.set(t,i),i},P=(e,t,n,o,i,l)=>{if(e.B.delete(t),(i=e.Z.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.Z.delete(t)),e.le.length&&!e.B.size)for(;l=e.le.shift();)l()},L=(e,t,n,o)=>{t.forEach(([t,i])=>{const l=i.P;3&l?W(n,t,function n(){return(e.ne.get(this)||{})[t]},function n(l){_(e,this,t,j(i.O,l),o)}):32===l&&S(n,t,u)})},R=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.se.has(n)||(e.re=!0,e.B.add(n),e.se.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.ce(n);)if(e.ae(n)){e.fe.has(t)||(e.Z.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.G.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.ue(n)),n["s-cr"]||e.pe(n,"ssrv")||e.p&&1===t.u||(n["s-cr"]=e.de(""),n["s-cr"]["s-cn"]=!0,e.g(n,n["s-cr"],e.ve(n)[0])),1===t.u&&e.p&&!n.shadowRoot&&e.be(n,{mode:"open"}),o={oe:{}},t.C&&Object.keys(t.C).forEach(l=>{(i=t.C[l].A)&&(o.oe[i]=e.pe(n,i))}),o))(e.v,t,n)),e.ye(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.me&&((e,t)=>{for(;t;){if(!e.he(t))return 9!==e.we(t);t=e.he(t)}})(e.v,t)){e.U.set(t,!0),P(e,t),w(e.te.get(t),!0);{const n=e.Y.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.v.N(t),e.Me.delete(t),[e.Z,e.$e,e.G].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l)=>{if(e.Y.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),e.ge.has(t)||(e.ge.set(t,!0),t["s-ld"]=void 0,e.v.X(t,n));try{w(e.te.get(t)),(l=e.$e.get(t))&&(l.forEach(e=>e(t)),e.$e.delete(t))}catch(n){e.J(n,4,t)}P(e,t)}})(e,this,o)},n.forceUpdate=function(){E(e,this,i)},t.C){const o=Object.entries(t.C);{let e={};o.forEach(([t,{A:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[a(n)];i&&(t[i]=(null!==o||"boolean"!=typeof t[i])&&o)})(e,this,t,o)}}L(e,o,n,i)}},T=(e,t,o,i,s,f)=>{const u=o.performance,p={html:{}},d=o[e]=o[e]||{},v=((e,t,n)=>{const o=new WeakMap,i={m:n,p:!!n.documentElement.attachShadow,ke:!1,we:e=>e.nodeType,Ce:e=>n.createElement(e),je:(e,t)=>n.createElementNS(e,t),de:e=>n.createTextNode(e),Ee:e=>n.createComment(e),g:(e,t,n)=>e.insertBefore(t,n),Ae:e=>e.remove(),Oe:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},ve:e=>e.childNodes,he:e=>e.parentNode,_e:e=>e.nextSibling,Se:e=>e.previousSibling,We:e=>a(e.nodeName),Ne:e=>e.textContent,xe:(e,t)=>e.textContent=t,pe:(e,t)=>e.getAttribute(t),Pe:(e,t,n)=>e.setAttribute(t,n),_:(e,t)=>e.removeAttribute(t),S:(e,t)=>e.hasAttribute(t),ue:t=>t.getAttribute("mode")||(e.Context||{}).mode,Le:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ce(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,W:(t,n,l,s,r,c,a,f,u,p)=>{let d=t,v=l,b=o.get(t);p=n+s,b&&b[p]&&b[p](),"object"==typeof a&&(d=a),d&&(f=i.ke?{capture:!!r,passive:!!c}:!!r,e.ael(d,n,v,f),b||o.set(t,b={}),b[p]=(()=>{d&&e.rel(d,n,v,f),b[p]=null}))},N:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},Re:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),ce:(e,t)=>(t=i.he(e))&&11===i.we(t)?t.host:t,Te:(e,t,n,o)=>e.setAttributeNS(t,n,o),be:(e,t)=>e.attachShadow(t)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(d,o,i),b=v.m.documentElement,y=o["s-defined"]=o["s-defined"]||{},w={v,l:(e,t)=>{o.customElements.get(e.t)||(R(w,p[e.t]=e,t.prototype,f,u),t.observedAttributes=Object.values(e.C).map(e=>e.A).filter(e=>!!e),o.customElements.define(e.t,t))},k:e=>p[v.We(e)],De:e=>t[e],isClient:!0,ae:e=>!(!y[v.We(e)]&&!w.k(e)),J:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=M(d,o),ye:(e,t)=>{{const n=!v.p,o={mode:t.mode,scoped:n};e.s(o).then(n=>{try{e.K=n,function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.Ce("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.Oe(e.m.head,o)}}}(v,e,e.u,n.style,n.styleMode)}catch(t){console.error(t),e.K=class{}}E(w,t,u)})}},ee:!1,I:!1,me:!1,V:r,Z:new WeakMap,M:new WeakMap,se:new WeakMap,Me:new WeakMap,ge:new WeakMap,fe:new WeakMap,ie:new WeakMap,G:new WeakMap,Y:new WeakMap,U:new WeakMap,F:new WeakMap,$e:new WeakMap,He:new WeakMap,te:new WeakMap,ne:new WeakMap,B:new Set,le:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.resourcesUrl=t.publicPath=s,d.h=n,d.Context=t,d.onReady=(()=>new Promise(e=>w.queue.write(()=>w.B.size?w.le.push(e):e()))),w.render=((e,t)=>{let n,o,i,l,s,r,a;const f=(i,p,d,v,b,y,w,M,$)=>{if(M=p.vchildren[d],n||(l=!0,"slot"===M.vtag&&(o&&t.X(v,o+"-s"),M.vchildren?M.qe=!0:M.Be=!0)),c(M.vtext))M.o=t.de(M.vtext);else if(M.Be)M.o=t.de("");else{if(y=M.o=h||"svg"===M.vtag?t.je("http://www.w3.org/2000/svg",M.vtag):t.Ce(M.qe?"slot-fb":M.vtag),e.ae(y)&&e.fe.delete(a),h="svg"===M.vtag||"foreignObject"!==M.vtag&&h,m(e,null,M,h),c(o)&&y["s-si"]!==o&&t.X(y,y["s-si"]=o),M.vchildren)for(b=0;b<M.vchildren.length;++b)(w=f(i,M,b,y))&&t.Oe(y,w);"svg"===M.vtag&&(h=!1)}return M.o["s-hn"]=r,(M.qe||M.Be)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[d])&&$.vtag===M.vtag&&i.o&&u(i.o)),M.o},u=(n,o,i,s)=>{e.me=!0;const c=t.ve(n);for(i=c.length-1;i>=0;i--)(s=c[i])["s-hn"]!==r&&s["s-ol"]&&(t.Ae(s),t.g(y(s),s,b(s)),t.Ae(s["s-ol"]),s["s-ol"]=null,l=!0),o&&u(s,o);e.me=!1},p=(e,n,o,i,l,s,a,u)=>{const p=e["s-cr"];for((a=p&&t.he(p)||e).shadowRoot&&t.We(a)===r&&(a=a.shadowRoot);l<=s;++l)i[l]&&(u=c(i[l].vtext)?t.de(i[l].vtext):f(null,o,l,e))&&(i[l].o=u,t.g(a,u,b(n)))},d=(e,n,o,l)=>{for(;n<=o;++n)c(e[n])&&(l=e[n].o,i=!0,l["s-ol"]?t.Ae(l["s-ol"]):u(l,!0),t.Ae(l))},v=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),b=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.he(e["s-ol"]?e["s-ol"]:e),w=(n,o,i)=>{const l=o.o=n.o,s=n.vchildren,r=o.vchildren;h=o.o&&c(t.ce(o.o))&&void 0!==o.o.ownerSVGElement,h="svg"===o.vtag||"foreignObject"!==o.vtag&&h,c(o.vtext)?(i=l["s-cr"])?t.xe(t.he(i),o.vtext):n.vtext!==o.vtext&&t.xe(l,o.vtext):("slot"!==o.vtag&&m(e,n,o,h),c(s)&&c(r)?((e,n,o,i,l,s,r,a)=>{let m=0,h=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,C=i[0],j=i[k];for(;m<=M&&h<=k;)if(null==$)$=n[++m];else if(null==g)g=n[--M];else if(null==C)C=i[++h];else if(null==j)j=i[--k];else if(v($,C))w($,C),$=n[++m],C=i[++h];else if(v(g,j))w(g,j),g=n[--M],j=i[--k];else if(v($,j))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he($.o)),w($,j),t.g(e,$.o,t._e(g.o)),$=n[++m],j=i[--k];else if(v(g,C))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he(g.o)),w(g,C),t.g(e,g.o,$.o),g=n[--M],C=i[++h];else{for(l=null,s=m;s<=M;++s)if(n[s]&&c(n[s].vkey)&&n[s].vkey===C.vkey){l=s;break}c(l)?((a=n[l]).vtag!==C.vtag?r=f(n&&n[h],o,l,e):(w(a,C),n[l]=void 0,r=a.o),C=i[++h]):(r=f(n&&n[h],o,h,e),C=i[++h]),r&&t.g(y($.o),r,b($.o))}m>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,h,k):h>k&&d(n,m,M)})(l,s,o,r):c(r)?(c(n.vtext)&&t.xe(l,""),p(l,null,o,r,0,r.length-1)):c(s)&&d(s,0,s.length-1)),h&&"svg"===o.vtag&&(h=!1)},M=(e,n,o,i,l,s,r,c)=>{for(i=0,l=(o=t.ve(e)).length;i<l;i++)if(n=o[i],1===t.we(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(c=t.we(o[s]),""!==r){if(1===c&&r===t.pe(o[s],"slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t.Ne(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,c,a,f,u)=>{for(s=0,r=(n=t.ve(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(a=t.ve(t.he(l)),f=o["s-sn"],c=a.length-1;c>=0;c--)(l=a[c])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.we(l))||8===u)&&""===f||1===u&&null===t.pe(l,"slot")&&""===f||1===u&&t.pe(l,"slot")===f)&&($.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=f,$.push({Ie:o,Fe:l})));1===t.we(o)&&g(o)}};return(c,f,u,p,d,v,b,y,m,h,k,C)=>{if(a=c,r=t.We(a),s=a["s-cr"],n=p,o=a["s-sc"],l=i=!1,w(f,u),l){for(g(u.o),b=0;b<$.length;b++)(y=$[b]).Fe["s-ol"]||((m=t.de(""))["s-nr"]=y.Fe,t.g(t.he(y.Fe),y.Fe["s-ol"]=m,y.Fe));for(e.me=!0,b=0;b<$.length;b++){for(y=$[b],k=t.he(y.Ie),C=t._e(y.Ie),m=y.Fe["s-ol"];m=t.Se(m);)if((h=m["s-nr"])&&h&&h["s-sn"]===y.Fe["s-sn"]&&k===t.he(h)&&(h=t._e(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.he(y.Fe)||t._e(y.Fe)!==C)&&y.Fe!==C&&(t.Ae(y.Fe),t.g(k,y.Fe,C))}e.me=!1}return i&&M(u.o),$.length=0,u}})(w,v),b["s-ld"]=[],b["s-rn"]=!0,b["s-init"]=(()=>{w.fe.set(b,d.loaded=w.I=!0),v.Re(o,"appload",{detail:{namespace:e}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.k(t);if(o)if(e.fe.has(t))n(t);else{const o=e.$e.get(t)||[];o.push(n),e.$e.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(w,d,o,o["s-apps"],o["s-cr"]),d.initialized=!0,w},D={};let H=!1;export{o as defineCustomElement,n as h};