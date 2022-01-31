import styled from 'styled-components'
import {SiJavascript, SiTypescript, SiAngular, SiNodedotjs, SiReact, SiVuedotjs} from 'react-icons/si'
import {GiBrain} from 'react-icons/gi'


export const GraduationContainer = styled.section`

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

`

export const GraduationText = styled.h1`

    color:#fff;
    font-size:4rem;
    margin-bottom:5rem;
    display: flex;
    align-items:center;

    @media screen and (max-width:800px){
        font-size:3rem;
    }
`

export const CardsOrganize = styled.div`

    display: flex; 
    justify-content:center;
    align-items:center;

    @media only screen and (max-width:800px){
        flex-direction:column;
    }

`

export const CardsContainer = styled.div`

    background-color: #fff;
    height:40vh;
    width:30vw;
    border-radius:1rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:0 3rem;

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

`

export const FiapImg = styled.img`
    width:15vw;

    @media only screen and (max-width:800px){
        width:20vw;
        margin-bottom:1rem;
    }

    @media only screen and (max-width:600px){
        width:30vw;
    }

    @media only screen and (max-width:400px){
        width:40vw;
    }

`

export const AluraImg = styled.img`
    width:12vw;
    margin:0.5rem 0;
    border-radius:1rem;

    @media only screen and (max-width:800px){
        width:18vw;
    }

    @media only screen and (max-width:600px){
        width:26vw;
    }

    @media only screen and (max-width:400px){
        width:36vw;
    }

`

export const Date = styled.h2`

    font-size:2rem;

    @media only screen and (max-width:800px){
        font-size:2rem;
    }

`

export const ClickMe = styled.a`

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

    @media only screen and (max-width:600px){
        font-size:0.7rem;
    }

   
`

export const TechnologysTitle = styled.h1`
    margin:2rem 0;

`

export const Technologys = styled.div`

    background-color:#fff;
    border-radius: 1rem;
    height:8vh;
    width:60vw;
    padding:0 2rem;

    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap:3vw;
    align-items:center;
    justify-content:center;

    @media only screen and (max-width:1400px){
        grid-gap:1vw;
        padding:0 1rem;
    }

    @media only screen and (max-width:1000px){
        width:70vw;
        padding:0 1rem;

    }

    @media only screen and (max-width:800px){
        height:20vh;
        width:50vw;
        padding:0 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
` 

export const Typescript = styled(SiTypescript)`
    font-size:3rem;
    color:rgba(47,114,188);
    margin-left:1rem;

    @media only screen and (max-width:500px){
        font-size:2rem;
        margin-left:0.5rem;
    }
`

export const Javascript = styled(SiJavascript)`
    font-size:3rem;
    color:rgba(234,212,28);
    margin-left:1rem;

    @media only screen and (max-width:500px){
        font-size:2rem;
        margin-left:0.5rem;
    }
`


export const Angular = styled(SiAngular)`
    font-size:3rem;
    color:#ff0339;
    margin-left:1rem;

    @media only screen and (max-width:500px){
        font-size:2rem;
        margin-left:0.5rem;
    }
`

export const NodeJs = styled(SiNodedotjs)`
    font-size:3rem;
    color:#0a9605;
    margin-left:1rem;

    @media only screen and (max-width:500px){
        font-size:2rem;
        margin-left:0.5rem;
    }
`

export const React = styled(SiReact)`
    font-size:3rem;
    color:#58edf8;
    margin-left:1rem;

    @media only screen and (max-width:500px){
        font-size:2rem;
        margin-left:0.5rem;
    }
`

export const Vue = styled(SiVuedotjs)`
    font-size:3rem;
    color:rgba(65,184,131);
    margin-left:1rem;

    @media only screen and (max-width:500px){
        font-size:2rem;
        margin-left:0.5rem;
    }
`

export const Icons = styled.img`
    width:3rem;
    margin-left:1rem;

    @media only screen and (max-width:500px){
        width:2rem;
        margin-left:0.5rem;
    }
`

export const Certificate = styled(GiBrain)`
    margin-left:0.5rem;
    color:#fff;
`