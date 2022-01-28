var y=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var u=(r,n,i)=>n in r?y(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,h=(r,n)=>{for(var i in n||(n={}))v.call(n,i)&&u(r,i,n[i]);if(m)for(var i of m(n))z.call(n,i)&&u(r,i,n[i]);return r},p=(r,n)=>b(r,w(n));import{s as a,j as c,r as f,B as k,G as j,A as C,a as B,R as M,b as I}from"./vendor.25ca44b9.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};L();const R=a.header`

    display:flex;
    position:${r=>r.display};
    width:100%;
    transition:1s;

    a{
        text-decoration:none;
        font-size:2rem;
    }

`,S=a.div`

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

`,E=a.li`

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



`,O=a.a`

    color:#4169e1;
    padding:1rem;
    transition:0.4s;

    &:hover{
        color:#fff;    
    }

`,A=a.aside`

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

`,H=a.ul`

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
`,e=c.exports.jsx,s=c.exports.jsxs,x=c.exports.Fragment;function P(r){return e(A,p(h({display:r.display},r.trigger),{children:s(H,{children:[e("li",{children:e("a",{href:"",children:"Experiences"})}),e("li",{children:e("a",{href:"",children:"Projects"})}),e("li",{children:e("a",{href:"",children:"Graduation"})}),e("li",{children:e("a",{href:"",children:"Contact"})})]})}))}function $(){const[r,n]=f.exports.useState(),[i,d]=f.exports.useState("-1000px"),[t,o]=f.exports.useState("");function l(g){g.preventDefault(),n(!r),d(r?"-1000px":"5.1rem"),o(r?"":"fixed")}return s(x,{children:[e(R,{display:t,children:s(S,{children:[e("ul",{children:e(E,{children:s("a",{href:"",children:["Resume.pdf  ",e(k,{})]})})}),e("ul",{children:e("li",{children:e(O,{onClick:l,href:"",children:e(j,{})})})})]})}),e(P,{display:i,trigger:!1})]})}const D=a.section`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow-y:hidden;
`,F=a.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin:auto;
`,N=a.h1`
    color:white;
    font-size:5rem;

    margin-bottom: 4rem;

    @media screen and (max-width:750px){
        font-size:4rem;
    }

    @media screen and (max-width:580px){
        font-size:3rem;
    }

    @media screen and (max-width:480px){
        font-size:2rem;
    }

    @media screen and (max-width:300px){
        font-size:1.5rem;
    }
`,G=a.p`
    color:white;
    font-size:2rem;

    margin-bottom:4rem;

    @media screen and (max-width:750px){
        font-size:1.5rem;
    }

    @media screen and (max-width:580px){
        font-size:1rem;
    }

    @media screen and (max-width:480px){
        font-size:0.7rem;
    }

    @media screen and (max-width:300px){
        font-size:0.5rem;
    }
`,q=a.a`

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

    @media screen and (max-width:480px){
        font-size:0.7rem;
        padding:0.5rem 1.3rem;
    }

    @media screen and (max-width:300px){
        font-size:0.5rem;
    }

`,T=a(C)`

    margin-left:1rem;

`;function K(){return s(D,{children:[e(B,{style:{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:-1},id:"tsparticles",options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:["grab","bubble"]},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:1,size:10},push:{quantity:1},repulse:{distance:150,duration:10}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:30},value:3},opacity:{value:.5},shape:{type:["circle","triangle","polygon"]},size:{random:!0,value:5}},detectRetina:!1,fullScreen:!1,backgroundMode:{enable:!1,zIndex:-1}}}),s(F,{children:[e(N,{children:"Leandro Cavallari"}),e(G,{children:"I'm a fullstack developer, feel free to know me here"}),s(q,{href:"",children:["Send a message ",e(T,{})," "]})]})]})}const J=a.section`

    background-color: #000;
    height:100vh;

`;function Q(){return e(J,{children:e("h1",{children:"teste"})})}function U(){return s(x,{children:[e($,{}),e(K,{}),e(Q,{})]})}M.render(e(I.StrictMode,{children:e(U,{})}),document.getElementById("root"));
