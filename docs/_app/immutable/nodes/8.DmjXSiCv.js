import{s as F,n as V,r as J,c as j,o as z}from"../chunks/scheduler.DyHTbn8F.js";import{S as G,i as K,e as i,s as b,c as o,a as I,k as M,f as y,d as C,l as a,u as T,g as Q,h as t,w as H,q as U,x as W}from"../chunks/index.CfCr36k4.js";import{b as X}from"../chunks/paths.CtIvR8uj.js";import{u as Y}from"../chunks/user.BDs8T1ax.js";function Z(d){let l,s,u,m="<p>Inloggning</p>",c,e,f,E="Namn:",k,n,N,v,q="Lösenord:",A,p,P,x,S,_,B,L,O=`Har du inget konto? <a href="${X}/register">Registrera dig</a>`,D,R;return{c(){l=i("main"),s=i("div"),u=i("h1"),u.innerHTML=m,c=b(),e=i("form"),f=i("label"),f.textContent=E,k=b(),n=i("input"),N=b(),v=i("label"),v.textContent=q,A=b(),p=i("input"),P=b(),x=i("label"),S=b(),_=i("input"),B=b(),L=i("div"),L.innerHTML=O,this.h()},l(h){l=o(h,"MAIN",{style:!0,class:!0});var g=I(l);s=o(g,"DIV",{class:!0,style:!0});var w=I(s);u=o(w,"H1",{"data-svelte-h":!0}),M(u)!=="svelte-my29s5"&&(u.innerHTML=m),c=y(w),e=o(w,"FORM",{});var r=I(e);f=o(r,"LABEL",{for:!0,"data-svelte-h":!0}),M(f)!=="svelte-t4ghih"&&(f.textContent=E),k=y(r),n=o(r,"INPUT",{type:!0,id:!0,class:!0}),N=y(r),v=o(r,"LABEL",{for:!0,"data-svelte-h":!0}),M(v)!=="svelte-1weckky"&&(v.textContent=q),A=y(r),p=o(r,"INPUT",{type:!0,id:!0,class:!0}),P=y(r),x=o(r,"LABEL",{for:!0}),I(x).forEach(C),S=y(r),_=o(r,"INPUT",{type:!0,style:!0,class:!0}),r.forEach(C),B=y(w),L=o(w,"DIV",{"data-svelte-h":!0}),M(L)!=="svelte-5731mf"&&(L.innerHTML=O),w.forEach(C),g.forEach(C),this.h()},h(){a(f,"for","name"),a(n,"type","text"),a(n,"id","name"),a(n,"class","svelte-18kl1ph"),a(v,"for","password"),a(p,"type","password"),a(p,"id","password"),a(p,"class","svelte-18kl1ph"),a(x,"for","Tom label"),a(_,"type","submit"),_.value="Logga in",T(_,"color","white"),a(_,"class","svelte-18kl1ph"),a(s,"class","container svelte-18kl1ph"),T(s,"min-width","300px"),T(s,"min-height","500px"),T(l,"min-width","500px"),T(l,"min-height","500px"),a(l,"class","svelte-18kl1ph")},m(h,g){Q(h,l,g),t(l,s),t(s,u),t(s,c),t(s,e),t(e,f),t(e,k),t(e,n),H(n,d[0]),t(e,N),t(e,v),t(e,A),t(e,p),H(p,d[1]),t(e,P),t(e,x),t(e,S),t(e,_),t(s,B),t(s,L),D||(R=[U(n,"input",d[3]),U(p,"input",d[4]),U(e,"submit",W(d[2]))],D=!0)},p(h,[g]){g&1&&n.value!==h[0]&&H(n,h[0]),g&2&&p.value!==h[1]&&H(p,h[1])},i:V,o:V,d(h){h&&C(l),D=!1,J(R)}}}function $(d,l,s){let u;j(d,Y,n=>s(6,u=n));let m="",c="",e=[];z(()=>{u.length>2&&(e=JSON.parse(u))});function f(){e.filter(n=>n.username==m&&n.password==c).length>0?alert(m+" har loggat in"):alert("Den här användaren finns inte eller så är lösenordet fel")}function E(){m=this.value,s(0,m)}function k(){c=this.value,s(1,c)}return[m,c,f,E,k]}class ae extends G{constructor(l){super(),K(this,l,$,Z,F,{})}}export{ae as component};
