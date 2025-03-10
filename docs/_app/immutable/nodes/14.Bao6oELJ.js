import{s as de,e as fe,n as Z,r as he,c as pe,o as ve,f as _e}from"../chunks/scheduler.DyHTbn8F.js";import{S as me,i as ge,e as d,s as k,c as f,a as B,k as O,f as y,d as N,u as I,l as o,g as ue,h as e,w as H,A as ne,q,x as be,r as Ce,t as Le,b as ke,B as ye}from"../chunks/index.CfCr36k4.js";import{e as ae}from"../chunks/each.D6YF6ztN.js";import{b as Ee}from"../chunks/paths.CtIvR8uj.js";import{u as re}from"../chunks/user.BDs8T1ax.js";function oe(r,n,l){const i=r.slice();return i[3]=n[l],i}function ie(r){let n,l=r[3].namn+"",i;return{c(){n=d("option"),i=Le(l),this.h()},l(p){n=f(p,"OPTION",{class:!0});var _=B(n);i=ke(_,l),_.forEach(N),this.h()},h(){n.__value=r[3].value,H(n,n.__value),o(n,"class","svelte-1so5cid")},m(p,_){ue(p,n,_),e(n,i)},p:Z,d(p){p&&N(n)}}}function we(r){let n,l,i,p="<p>registrering</p>",_,u,h,P,a,T,R="Namn:",U,m,V,g,F="Adress:",J,E,j,A,$="Lösenord:",z,w,G,M,ee="Favoritfärg:",K,C,Q,x,W,S,te=`Har du redan ett konto? <a href="${Ee}/login">Logga in</a>`,X,le,D=ae(r[4]),c=[];for(let t=0;t<D.length;t+=1)c[t]=ie(oe(r,D,t));return{c(){n=d("main"),l=d("div"),i=d("h1"),i.innerHTML=p,_=k(),u=d("form"),h=d("div"),P=k(),a=d("div"),T=d("label"),T.textContent=R,U=k(),m=d("input"),V=k(),g=d("label"),g.textContent=F,J=k(),E=d("input"),j=k(),A=d("label"),A.textContent=$,z=k(),w=d("input"),G=k(),M=d("label"),M.textContent=ee,K=k(),C=d("select");for(let t=0;t<c.length;t+=1)c[t].c();Q=k(),x=d("input"),W=k(),S=d("div"),S.innerHTML=te,this.h()},l(t){n=f(t,"MAIN",{class:!0});var b=B(n);l=f(b,"DIV",{class:!0,style:!0});var s=B(l);i=f(s,"H1",{"data-svelte-h":!0}),O(i)!=="svelte-hg9e4o"&&(i.innerHTML=p),_=y(s),u=f(s,"FORM",{});var L=B(u);h=f(L,"DIV",{style:!0});var ce=B(h);ce.forEach(N),P=y(L),a=f(L,"DIV",{class:!0});var v=B(a);T=f(v,"LABEL",{for:!0,"data-svelte-h":!0}),O(T)!=="svelte-t4ghih"&&(T.textContent=R),U=y(v),m=f(v,"INPUT",{type:!0,id:!0,class:!0}),V=y(v),g=f(v,"LABEL",{for:!0,"data-svelte-h":!0}),O(g)!=="svelte-967v25"&&(g.textContent=F),J=y(v),E=f(v,"INPUT",{type:!0,id:!0,class:!0}),j=y(v),A=f(v,"LABEL",{for:!0,"data-svelte-h":!0}),O(A)!=="svelte-1weckky"&&(A.textContent=$),z=y(v),w=f(v,"INPUT",{type:!0,id:!0,class:!0}),G=y(v),M=f(v,"LABEL",{for:!0,"data-svelte-h":!0}),O(M)!=="svelte-1xughya"&&(M.textContent=ee),v.forEach(N),K=y(L),C=f(L,"SELECT",{id:!0});var se=B(C);for(let Y=0;Y<c.length;Y+=1)c[Y].l(se);se.forEach(N),Q=y(L),x=f(L,"INPUT",{type:!0,style:!0,class:!0}),L.forEach(N),W=y(s),S=f(s,"DIV",{"data-svelte-h":!0}),O(S)!=="svelte-1cqkie2"&&(S.innerHTML=te),s.forEach(N),b.forEach(N),this.h()},h(){I(h,"margin-left","50px"),I(h,"width","100px"),I(h,"height","100px"),I(h,"border-radius","50%"),I(h,"overflow","hidden"),I(h,"background-color",r[3]),o(T,"for","name"),o(m,"type","text"),o(m,"id","name"),o(m,"class","svelte-1so5cid"),o(g,"for","mail"),o(E,"type","email"),o(E,"id","mail"),o(E,"class","svelte-1so5cid"),o(A,"for","password"),o(w,"type","password"),o(w,"id","password"),o(w,"class","svelte-1so5cid"),o(M,"for","favouritecolor"),o(a,"class","inputs"),o(C,"id","favouritecolor"),r[3]===void 0&&fe(()=>r[9].call(C)),o(x,"type","submit"),x.value="Registrera",I(x,"color","white"),o(x,"class","svelte-1so5cid"),o(l,"class","container svelte-1so5cid"),I(l,"min-width","300px"),I(l,"min-height","500px"),o(n,"class","svelte-1so5cid")},m(t,b){ue(t,n,b),e(n,l),e(l,i),e(l,_),e(l,u),e(u,h),e(u,P),e(u,a),e(a,T),e(a,U),e(a,m),H(m,r[0]),e(a,V),e(a,g),e(a,J),e(a,E),H(E,r[1]),e(a,j),e(a,A),e(a,z),e(a,w),H(w,r[2]),e(a,G),e(a,M),e(u,K),e(u,C);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(C,null);ne(C,r[3],!0),e(u,Q),e(u,x),e(l,W),e(l,S),X||(le=[q(m,"input",r[6]),q(E,"input",r[7]),q(w,"input",r[8]),q(C,"change",r[9]),q(u,"submit",be(r[5]))],X=!0)},p(t,[b]){if(b&8&&I(h,"background-color",t[3]),b&1&&m.value!==t[0]&&H(m,t[0]),b&2&&E.value!==t[1]&&H(E,t[1]),b&4&&w.value!==t[2]&&H(w,t[2]),b&16){D=ae(t[4]);let s;for(s=0;s<D.length;s+=1){const L=oe(t,D,s);c[s]?c[s].p(L,b):(c[s]=ie(L),c[s].c(),c[s].m(C,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=D.length}b&24&&ne(C,t[3])},i:Z,o:Z,d(t){t&&N(n),Ce(c,t),X=!1,he(le)}}}function Ie(r,n,l){let i;pe(r,re,g=>l(11,i=g));let p=[],_="black",u="",h="",P=[{namn:"Blå",value:"blue"},{namn:"Röd",value:"red"},{namn:"grön",value:"green"}],a="";function T(){let g={username:u,password:a,email:h,color:_};p.filter(F=>g.username==F.username).length==0?(p=[...p,g],_e(re,i=JSON.stringify(p),i),alert("välkommen "+u)):alert("Det här användarnamnet finns redan")}ve(()=>{i.length>2&&(p=JSON.parse(i))});function R(){u=this.value,l(0,u)}function U(){h=this.value,l(1,h)}function m(){a=this.value,l(2,a)}function V(){_=ye(this),l(3,_),l(4,P)}return[u,h,a,_,P,T,R,U,m,V]}class Be extends me{constructor(n){super(),ge(this,n,Ie,we,de,{})}}export{Be as component};
