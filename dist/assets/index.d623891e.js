var w=Object.defineProperty,v=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(r,t,o)=>t in r?w(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,u=(r,t)=>{for(var o in t||(t={}))z.call(t,o)&&h(r,o,t[o]);if(f)for(var o of f(t))j.call(t,o)&&h(r,o,t[o]);return r},p=(r,t)=>v(r,k(t));import{s as n,j as m,r as l,B as C,G as M,A as I,a as B,F,b as T,R as A,c as P}from"./vendor.1f25f201.js";const D=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};D();const E=n.header`

    display:flex;
    position:${r=>r.display};
    width:100%;
    transition:1s;

    a{
        text-decoration:none;
        font-size:2rem;
    }

`,H=n.div`

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

`,L=n.li`

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



`,R=n.a`

    color:#4169e1;
    padding:1rem;
    transition:0.4s;

    &:hover{
        color:#fff;    
    }

`,S=n.aside`

    width: 30%;
	top:${r=>r.display};
    right:0;
    position:fixed;
    transition: 0.5s;

    @media only screen and (max-width:850px){
        top:${r=>r.display};
        right:0;
        position:fixed;
        width:100%;
        height:100%;
    }
  
    @media only screen and (max-width:400px){
        top:${r=>r.display};
        right:0;
        margin-top:5rem;
        position:fixed;
        width:100%;
        height:100%;
    }

`,O=n.ul`

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
`,e=m.exports.jsx,s=m.exports.jsxs,g=m.exports.Fragment;function N(r){return e(S,p(u({display:r.display},r.trigger),{children:s(O,{children:[e("li",{children:e("a",{href:"",children:"Experiences"})}),e("li",{children:e("a",{href:"",children:"Projects"})}),e("li",{children:e("a",{href:"",children:"Graduation"})}),e("li",{children:e("a",{href:"",children:"Contact"})})]})}))}function $(){const[r,t]=l.exports.useState(),[o,d]=l.exports.useState("-1000px"),[i,a]=l.exports.useState("");function c(b){b.preventDefault(),t(!r),d(r?"-1000px":"5.1rem"),a(r?"":"fixed")}return s(g,{children:[e(E,{display:i,children:s(H,{children:[e("ul",{children:e(L,{children:s("a",{href:"",children:["Resume.pdf  ",e(C,{})]})})}),e("ul",{children:e("li",{children:e(R,{onClick:c,href:"",children:e(M,{})})})})]})}),e(N,{display:o,trigger:!1})]})}const G=n.section`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow-y:hidden;

`,K=n.div`
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
`,q=n.h1`
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
`,J=n.p`
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
`,W=n.a`

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

`,Q=n(I)`

    margin-left:1rem;

`;function U(){return s(G,{children:[e(B,{style:{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:-1},id:"tsparticles",options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:["grab","bubble"]},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:1,size:10},push:{quantity:1},repulse:{distance:150,duration:10}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:100},value:10},opacity:{value:.5},shape:{type:["circle","triangle","polygon"]},size:{random:!0,value:5}},detectRetina:!1,fullScreen:!1,backgroundMode:{enable:!1,zIndex:-1}}}),s(K,{children:[e(q,{children:"Leandro Cavallari"}),e(J,{children:"I'm a fullstack developer, feel free to know me here"}),s(W,{href:"",children:["Send a message ",e(Q,{})," "]})]})]})}const V=n.div`

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

`,X=n.img`
    width:50vw;

    @media only screen and (max-width:800px){
        width:100vw;
    }

`,Y=n.h2`

    font-size:2rem;
    margin-bottom:-2rem;

    @media only screen and (max-width:900px){
        font-size:2rem;
        margin-bottom:0;
    }

`,Z=n.a`

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
`;function _(r){return s(V,{children:[e(Y,{children:"May/2021"}),e(X,{src:r.img,alt:r.alt}),e(Z,{href:"",children:"Know More"})]})}const ee=n.section`

    background-color: #000;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

`,re=n.div`

    display: flex;
    justify-content:center;
    align-items:center;

`,ne=n.h1`

    color:#fff;
    font-size:4rem;
    margin-bottom:5rem;

    @media screen and (max-width:750px){
        font-size:3rem;
    }
`;var te="/assets/foursys.f0fdb303.png";function ie(){return s(ee,{children:[e(ne,{children:"Experiences"}),e(re,{children:e(_,{alt:"Foursys",img:te})})]})}const oe=n.section`

    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`,ae=n.div`

    background-color: #fff;
    width:60vw;
    height:70vh;
    border-radius: 2rem;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`,se=n.h1`

    font-size:4rem;
    margin-top:2rem;
    margin-bottom:2rem;
    color:#fff;
`,de=n.img`

    width:35vw;
    height:50vh;
    border-radius:1rem;
    padding:2rem;
    background: rgb(2,0,36);
    background: linear-gradient(58deg, rgba(2,0,36,1) 23%, rgba(90,90,203,1) 100%);

    @media only screen and (max-width:600px){
        width:40vw;
    }
`,ce=n.div`

    display: flex;
`,x=n.a`

    font-size:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 2rem;

    &:hover{
        cursor:pointer;
        color:#4169e1;
    }

    @media only screen and (max-width:600px){
        margin: 0 1rem;
    }

    @media only screen and (max-width:500px){
        font-size:1.5rem;

    }
`,le=n.a`

    font-size:1.5rem;
    text-decoration:none;
    color:#fff;
    border-radius:2rem;
    background-color:#4169e1;
    padding:0.5rem 1rem;
    margin-top:0.8rem;
    border:solid;

    &:hover{
        background-color:#fff;
        color:#4169e1;
    }

`,me=n.h2`

    font-size:3rem;

    @media only screen and (max-width:600px){
        font-size:2rem;
    }
`;var fe="/assets/devFinances.45b85748.svg",he="/assets/mind.dcee3231.svg",ue="/assets/moveit.98fc5f0e.svg",pe="/assets/hawker.728d2b4e.svg",ge="/assets/traveller.e693bc8f.svg";const y=[{id:1,title:"Mind",subTitle:"Mind"},{id:2,title:"Hawker",subTitle:"Hawker"},{id:3,title:"Traveller",subTitle:"Traveller"},{id:4,title:"Move-It",subTitle:"Move-It"},{id:5,title:"Dev Finances",subTitle:"Dev Finances"}];function xe(){const[r,t]=l.exports.useState(0),o=[he,pe,ge,ue,fe];function d(){t(r+1),r==o.length-1&&t(0)}function i(){t(r-1),r==0&&t(o.length-1)}return s(oe,{children:[e(se,{children:"Projects"}),s(ae,{children:[e(me,{children:y[r].title}),s(ce,{children:[e(x,{onClick:i,children:e(F,{})}),e(de,{src:o[r],alt:y[r].subTitle}),e(x,{onClick:d,children:e(T,{})})]}),e(le,{href:"",children:"Know More"})]})]})}function ye(){return s(g,{children:[e($,{}),e(U,{}),e(ie,{}),e(xe,{})]})}A.render(e(P.StrictMode,{children:e(ye,{})}),document.getElementById("root"));
