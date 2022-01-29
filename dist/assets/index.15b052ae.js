var y=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var h=(n,t,o)=>t in n?y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,u=(n,t)=>{for(var o in t||(t={}))v.call(t,o)&&h(n,o,t[o]);if(f)for(var o of f(t))z.call(t,o)&&h(n,o,t[o]);return n},p=(n,t)=>b(n,w(t));import{s as r,j as l,r as m,B as k,G as j,A as C,a as M,R as I,b as B}from"./vendor.25ca44b9.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};P();const E=r.header`

    display:flex;
    position:${n=>n.display};
    width:100%;
    transition:1s;

    a{
        text-decoration:none;
        font-size:2rem;
    }

`,F=r.div`

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

`,A=r.li`

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



`,L=r.a`

    color:#4169e1;
    padding:1rem;
    transition:0.4s;

    &:hover{
        color:#fff;    
    }

`,R=r.aside`

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

`,S=r.ul`

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
`,e=l.exports.jsx,s=l.exports.jsxs,x=l.exports.Fragment;function O(n){return e(R,p(u({display:n.display},n.trigger),{children:s(S,{children:[e("li",{children:e("a",{href:"",children:"Experiences"})}),e("li",{children:e("a",{href:"",children:"Projects"})}),e("li",{children:e("a",{href:"",children:"Graduation"})}),e("li",{children:e("a",{href:"",children:"Contact"})})]})}))}function D(){const[n,t]=m.exports.useState(),[o,d]=m.exports.useState("-1000px"),[i,a]=m.exports.useState("");function c(g){g.preventDefault(),t(!n),d(n?"-1000px":"5.1rem"),a(n?"":"fixed")}return s(x,{children:[e(E,{display:i,children:s(F,{children:[e("ul",{children:e(A,{children:s("a",{href:"",children:["Resume.pdf  ",e(k,{})]})})}),e("ul",{children:e("li",{children:e(L,{onClick:c,href:"",children:e(j,{})})})})]})}),e(O,{display:o,trigger:!1})]})}const H=r.section`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow-y:hidden;

`,$=r.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    
    animation: fadeInAnimation ease 5s;
    animation-iteration-count: 1;

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
         }
    }
`,N=r.h1`
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
`,T=r.p`
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
`,G=r.a`

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

`,q=r(C)`

    margin-left:1rem;

`;function K(){return s(H,{children:[e(M,{style:{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:-1},id:"tsparticles",options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:["grab","bubble"]},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:1,size:10},push:{quantity:1},repulse:{distance:150,duration:10}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:100},value:10},opacity:{value:.5},shape:{type:["circle","triangle","polygon"]},size:{random:!0,value:5}},detectRetina:!1,fullScreen:!1,backgroundMode:{enable:!1,zIndex:-1}}}),s($,{children:[e(N,{children:"Leandro Cavallari"}),e(T,{children:"I'm a fullstack developer, feel free to know me here"}),s(G,{href:"",children:["Send a message ",e(q,{})," "]})]})]})}const J=r.div`

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

`,W=r.img`
    width:50vw;

    @media only screen and (max-width:800px){
        width:100vw;
    }

`,Q=r.h2`

    font-size:2rem;
    margin-bottom:-2rem;

    @media only screen and (max-width:900px){
        font-size:2rem;
        margin-bottom:0;
    }

`,U=r.a`

    color:#fff;

    text-decoration:none;
    border-radius: 2rem;
    font-size:1rem;
    padding:0.4rem 2rem;
    background-color: rgba(34,34,57);
    transition:0.5s;
    border-style:solid;

    &:hover{
        background-color:#fff;
        color:rgba(34,34,57);
        border-color:rgba(34,34,57);
        border-style:solid
    }

    @media only screen and (max-width:500px){
        font-size:0.8rem;
    }
`;function V(n){return s(J,{children:[e(Q,{children:"May/2021"}),e(W,{src:n.img,alt:n.alt}),e(U,{href:"",children:"Know More"})]})}const X=r.section`

    background-color: #000;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

`,Y=r.div`

    display: flex;
    justify-content:center;
    align-items:center;

`,Z=r.h1`

    color:#fff;
    font-size:4rem;
    margin-bottom:5rem;

    @media screen and (max-width:750px){
        font-size:3rem;
    }
`;var _="/assets/foursys.f0fdb303.png";function ee(){return s(X,{children:[e(Z,{children:"Experiences"}),e(Y,{children:e(V,{alt:"Foursys",img:_})})]})}const ne=r.section`

    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

   

`,re=r.div`

    background-color: #fff;
    width:80vw;
    height:80vh;
    border-radius: 2rem;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

`,te=r.h1`

    font-size:2rem;
    margin-bottom:2rem;

`,ie=r.img`

    width:60vw;
    height:60vh;
    border-radius:1rem;

`;var oe="/assets/devFinance.4dd98dbf.png";function ae(){return e(ne,{children:s(re,{children:[e(te,{children:"Projects"}),e(ie,{src:oe}),e("div",{})]})})}function se(){return s(x,{children:[e(D,{}),e(K,{}),e(ee,{}),e(ae,{})]})}I.render(e(B.StrictMode,{children:e(se,{})}),document.getElementById("root"));
