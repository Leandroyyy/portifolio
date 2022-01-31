var j=Object.defineProperty,C=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var u=(n,t,a)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,p=(n,t)=>{for(var a in t||(t={}))I.call(t,a)&&u(n,a,t[a]);if(h)for(var a of h(t))T.call(t,a)&&u(n,a,t[a]);return n},g=(n,t)=>C(n,M(t));import{s as r,j as f,r as m,B as F,G as A,A as S,a as B,b as $,F as x,M as P,c as D,d as R,S as E,e as H,f as L,g as O,h as G,i as N,R as J,k as K}from"./vendor.2a508c91.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};V();const q=r.header`

    display:flex;
    position:${n=>n.display};
    width:100%;
    transition:1s;

    a{
        text-decoration:none;
        font-size:2rem;
    }

`,W=r.div`

    background:#000;
    display:flex;
    justify-content:space-between;
    padding: 1rem 1.5rem;
    width:100%;

    ul{
        display:flex;

        li{
            padding:0.3rem;
            list-style:none;
        }
    }

    @media only screen and (max-width: 400px){
        display:flex;
        flex-direction: column;
        align-items:center;
        
        ul{
            padding-top: 1rem;
        }
    }

`,Q=r.li`

    background-color:#4169e1;
    border-radius:2rem;
    width:100%;
    transition:1s;
    
    &:hover{
        background-color:#fff;
    }

    a{ 
        color:#ffff;

        padding:1rem;
        font-family:Itim, sans-serif;
        &:hover{
            transition:1s;
            color:#4169e1;
        }
    }



`,U=r.a`

    color:#4169e1;
    padding:1rem;
    transition:0.4s;

    &:hover{
        color:#fff;    
    }

`,X=r.aside`

    width: 30%;
	top:${n=>n.display};
    right:0;
    position:fixed;
    transition: 0.5s;

    @media only screen and (max-width:850px){
        top:${n=>n.display};
        right:0;
        position:fixed;
        width:100%;
        height:100%;
    }
  
    @media only screen and (max-width:400px){
        top:${n=>n.display};
        right:0;
        margin-top:5rem;
        position:fixed;
        width:100%;
        height:100%;
    }

`,Y=r.ul`

    background-color: rgb(0, 0, 0,  0.8);
    border-radius: 0 0 0 2rem;
    height:100%;  

    li{
        padding:2rem;
		text-align: center;
		list-style-type: none;

        &:hover{
            background-color:#4169e1;
            transition:0.5s;  
        }

        a{
            font-size:2rem;
            padding:1rem;
            text-decoration:none;
            background-color:#4169e1;
            color:#fff;
            display:block;
            transition: 0.5s;
            border-radius:2rem;

            &:hover{
                background-color:#fff;
                color:#4169e1;
                transition:0.5s;  

            }
        }
    }

    @media only screen and (max-width:768px){
        width:100%;
        border-radius:0;
        a{
            font-size:1.4rem;
        }
    }
    
    @media only screen and (max-width:400px){
       height:80%;

       li{
           padding:1.5rem;
       }
    }
`,e=f.exports.jsx,i=f.exports.jsxs,w=f.exports.Fragment;function Z(n){return e(X,g(p({display:n.display},n.trigger),{children:i(Y,{children:[e("li",{children:e("a",{href:"",children:"Experiences"})}),e("li",{children:e("a",{href:"",children:"Projects"})}),e("li",{children:e("a",{href:"",children:"Graduation"})}),e("li",{children:e("a",{href:"",children:"Contact"})})]})}))}function _(){const[n,t]=m.exports.useState(),[a,d]=m.exports.useState("-10000px"),[o,s]=m.exports.useState("");function c(k){k.preventDefault(),t(!n),d(n?"-10000px":"5.1rem"),s(n?"":"fixed")}return i(w,{children:[e(q,{display:o,children:i(W,{children:[e("ul",{children:e(Q,{children:i("a",{href:"",children:["Resume.pdf ",e(F,{})]})})}),e("ul",{children:e("li",{children:e(U,{onClick:c,href:"",children:e(A,{})})})})]})}),e(Z,{display:a,trigger:!1})]})}const ee=r.section`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow-y:hidden;

`,re=r.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
         }
    }
`,ne=r.h1`
    color:white;
    font-size:5rem;

    margin-bottom: 4rem;
    white-space:nowrap;

    @media screen and (max-width:750px){
        font-size:4.5rem;
    }

    @media screen and (max-width:580px){
        font-size:3.8rem;
    }

    @media screen and (max-width:480px){
        font-size:2.8rem;
    }

    @media screen and (max-width:340px){
        font-size:2.3rem;
    }
`,te=r.p`
    color:white;
    font-size:2rem;
    white-space: nowrap;

    margin-bottom:4rem;

    @media screen and (max-width:750px){
        font-size:1.7rem;
    }

    @media screen and (max-width:600px){
        font-size:1.4rem;
    }

    @media screen and (max-width:500px){
        font-size:1.2rem;
    }

    @media screen and (max-width:420px){
        white-space: normal;
        font-size:1rem;
    }
`,ie=r.a`

    color:white;
    font-size:2rem;
    border-radius:2rem;
    padding:1rem 2rem;
    text-decoration:none;
    background-color:#4169e1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color:white;
        color:#4169e1;
        transition:0.5s;  
    }

    @media screen and (max-width:750px){
        font-size:1.5rem;
    }

    @media screen and (max-width:580px){
        font-size:1rem;
        padding:0.8rem 1.7rem;
    }

`,oe=r(S)`

    margin-left:1rem;

`;function ae(){return i(ee,{children:[e(B,{style:{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:-1},id:"tsparticles",options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:["grab","bubble"]},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:1,size:10},push:{quantity:1},repulse:{distance:150,duration:10}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:100},value:10},opacity:{value:.5},shape:{type:["circle","triangle","polygon"]},size:{random:!0,value:5}},detectRetina:!1,fullScreen:!1,backgroundMode:{enable:!1,zIndex:-1}}}),i(re,{children:[e(ne,{children:"Leandro Cavallari"}),e(te,{children:"I'm a fullstack developer, feel free to know me here"}),i(ie,{href:"",children:["Send a message ",e(oe,{})," "]})]})]})}const se=r.section`

    background-color: #000;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

`,de=r.div`

    display: flex;
    justify-content:center;
    align-items:center;

`,ce=r.h1`

    color:#fff;
    font-size:4rem;
    margin-bottom:5rem;
    display: flex;
    align-items:center;

    @media screen and (max-width:750px){
        font-size:3rem;
    }
`,le=r.div`

    background-color: #fff;
    height:100%;
    width:30vw;
    border-radius:1rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding:1rem 0;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ;
    }

    @media only screen and (max-width:800px){
        width:60vw;
    }

    @media only screen and (max-width:600px){
        width:60vw;
    }

    @media only screen and (max-width:500px){
        width:60vw;
    }

`,me=r.img`
    width:50vw;

    @media only screen and (max-width:800px){
        width:100vw;
    }

`,fe=r.h2`

    font-size:2rem;
    margin-bottom:-2rem;

    @media only screen and (max-width:900px){
        font-size:2rem;
        margin-bottom:0;
    }

`,he=r.a`

    color:#fff;

    text-decoration:none;
    border-radius: 2rem;
    font-size:1rem;
    padding:0.4rem 1rem;
    background-color: rgba(34,34,57);
    transition:0.5s;
    border-style:solid;
    display:flex;
    align-items:center;
    justify-content:space-between;

    &:hover{
        background-color:#fff;
        color:rgba(34,34,57);
        border-color:rgba(34,34,57);
        border-style:solid
    }

    @media only screen and (max-width:500px){
        font-size:0.8rem;
    }
`;var ue="/assets/foursys.f0fdb303.png";function pe(){return i(se,{children:[i(ce,{children:["Experiences ",e($,{})]}),e(de,{children:i(le,{children:[e(fe,{children:"May/2021"}),e(me,{src:ue,alt:"Foursys"}),i(he,{href:"",children:["Know More ",e(x,{})]})]})})]})}const ge=r.section`

    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`,xe=r.div`

    background-color: #fff;
    width:60vw;
    height:70vh;
    border-radius: 2rem;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:600px){
        width:85vw;
    }
`,we=r.h1`

    font-size:4rem;
    margin-top:2rem;
    margin-bottom:2rem;
    color:#fff;
    display:flex;
    align-items:center;

`,ye=r.img`

    width:35vw;
    height:50vh;
    border-radius:1rem;
    padding:2rem;
    background: rgb(2,0,36);
    background: linear-gradient(58deg, rgba(2,0,36,1) 23%, rgba(90,90,203,1) 100%);

    @media only screen and (max-width:600px){
        width:60vw;
    }

    @media only screen and (max-width:400px){
        width:60vw;
    }
`,be=r.div`

    display: flex;
`,y=r.a`

    font-size:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 2rem;

    &:hover{
        cursor:pointer;
        color:${n=>n.color};
    }

    @media only screen and (max-width:600px){
        margin: 0 1rem;
    }

    @media only screen and (max-width:500px){
        font-size:1.5rem;
    }

    @media only screen and (max-width:500px){
        margin:0.5rem;
    }
`,ve=r.a`

    font-size:1.5rem;
    text-decoration:none;
    color:#fff;
    border-radius:2rem;
    padding:0.5rem 1rem;
    background-color:${n=>n.color};
    margin-top:0.8rem;
    border:solid;
    transition: 0.3s;
    display:flex;
    align-items:center;

    &:hover{
        background-color:#fff;
        color:${n=>n.color};
    }

`,ze=r.h2`

    font-size:3rem;

    @media only screen and (max-width:600px){
        font-size:2rem;
    }
`,ke=r(P)`
    color:#fff;
    margin-left:1rem;
`;var je="/assets/devFinances.45b85748.svg",Ce="/assets/Mind.dcee3231.svg",Me="/assets/moveit.98fc5f0e.svg",Ie="/assets/hawker.728d2b4e.svg",Te="/assets/traveller.e693bc8f.svg";const l=[{id:1,title:"Mind",subTitle:"Mind",color:"rgba(252,163,17)"},{id:2,title:"Hawker",subTitle:"Hawker",color:"rgba(1,191,112)"},{id:3,title:"Traveller",subTitle:"Traveller",color:"rgba(206,33,120)"},{id:4,title:"Move-It",subTitle:"Move-It",color:"rgba(89,101,224)"},{id:5,title:"Dev Finances",subTitle:"Dev Finances",color:"rgba(73,170,38)"}];function Fe(){const[n,t]=m.exports.useState(0),a=[Ce,Ie,Te,Me,je];function d(){t(n+1),n==a.length-1&&t(0)}function o(){t(n-1),n==0&&t(a.length-1)}return i(ge,{children:[i(we,{children:["Projects ",e(ke,{})]}),i(xe,{children:[e(ze,{children:l[n].title}),i(be,{children:[e(y,{color:l[n].color,onClick:o,children:e(D,{})}),e(ye,{src:a[n],alt:l[n].subTitle}),e(y,{color:l[n].color,onClick:d,children:e(R,{})})]}),i(ve,{color:l[n].color,href:"",children:["Know More ",e(x,{})]})]})]})}const Ae=r.section`

    width:100vw;
    height:100vh;
    background:#000;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    h1{
        color:white;
    }

    @media only screen and (max-width:800px){
        height:150vh;
    }

`,Se=r.h1`

    color:#fff;
    font-size:4rem;
    margin-bottom:5rem;
    display: flex;
    align-items:center;

    @media screen and (max-width:800px){
        font-size:3rem;
    }
`,Be=r.div`

    display: flex; 
    justify-content:center;
    align-items:center;

    @media only screen and (max-width:800px){
        flex-direction:column;
    }

`,b=r.div`

    background-color: #fff;
    height:40vh;
    width:20vw;
    border-radius:1rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:0 3rem;
    padding:0rem 0;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ;
    }

    @media only screen and (max-width:800px){
        width:40vw;
        height:35vh;
        margin:0 0 1rem 0;
    }

    @media only screen and (max-width:600px){
        width:60vw;
    }

    @media only screen and (max-width:500px){
        width:60vw;
    }

`,$e=r.img`
    width:12vw;

    @media only screen and (max-width:800px){
        width:20vw;
        margin-bottom:1rem;
    }

    @media only screen and (max-width:600px){
        width:30vw;
    }

`,Pe=r.img`
    width:10vw;
    margin:0.5rem 0;
    border-radius:1rem;

    @media only screen and (max-width:800px){
        width:15vw;
    }

`,v=r.h2`

    font-size:2rem;

    @media only screen and (max-width:800px){
        font-size:2rem;
    }

`,De=r.a`

    color:#fff;

    text-decoration:none;
    border-radius: 2rem;
    font-size:1rem;
    padding:0.4rem 1rem;
    background-color: rgba(0,19,50);
    transition:0.5s;
    border-style:solid;
    display:flex;
    align-items:center;
    justify-content:space-between;

    &:hover{
        background-color:#fff;
        color:rgba(0,19,50);
        border-color:rgba(0,19,50);
        border-style:solid
    }

    @media only screen and (max-width:500px){
        font-size:0.8rem;
    }
`,Re=r.h1`
    margin:2rem 0;

`,Ee=r.div`

    background-color:#fff;
    border-radius: 1rem;
    height:8vh;
    width:50vw;

    display:flex;
    align-items:center;
    justify-content:space-around;
`,He=r(E)`
    font-size:3rem;
    color:rgba(47,114,188);
`,Le=r(H)`
    font-size:3rem;
    color:rgba(234,212,28);
`,Oe=r(L)`
    font-size:3rem;
    color:#ff0339;
`,Ge=r(O)`
    font-size:3rem;
    color:#0a9605;
`,Ne=r(G)`
    font-size:3rem;
    color:#58edf8;
`,Je=r(N)`
    font-size:3rem;
    color:rgba(65,184,131);
`,z=r.img`
    width:3rem;
`;var Ke="/assets/Fiap.d33c5586.png",Ve="/assets/python.a537601c.svg",qe="/assets/alura.47f2d768.png",We="/assets/java.a7fd0182.svg";function Qe(){return i(Ae,{children:[e(Se,{children:"Graduation"}),i(Be,{children:[i(b,{children:[e(v,{children:"2021 - 2022"}),e($e,{src:Ke,alt:"Fiap"})]}),i(b,{children:[e(v,{children:"Certificates"}),e(Pe,{src:qe,alt:"Alura"}),e(De,{href:"",children:"See Certificates"})]})]}),e(Re,{children:"Technologys that i know"}),i(Ee,{children:[e(Le,{}),e(He,{}),e(Ne,{}),e(Ge,{}),e(Oe,{}),e(Je,{}),e(z,{src:Ve,alt:"python"}),e(z,{src:We,alt:"java"})]})]})}const Ue=r.section`

    width:100vw;
    height:30vh;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;

    h1{
        color:white
    }

`;function Xe(){return e(Ue,{children:e("h1",{children:"Contact"})})}function Ye(){return i(w,{children:[e(_,{}),e(ae,{}),e(pe,{}),e(Fe,{}),e(Qe,{}),e(Xe,{})]})}J.render(e(K.StrictMode,{children:e(Ye,{})}),document.getElementById("root"));
