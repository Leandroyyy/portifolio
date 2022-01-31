import styled from 'styled-components'
import {SiJavascript, SiTypescript, SiAngular, SiNodedotjs, SiReact, SiVuedotjs} from 'react-icons/si'

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

`

export const FiapImg = styled.img`
    width:12vw;

    @media only screen and (max-width:800px){
        width:20vw;
        margin-bottom:1rem;
    }

    @media only screen and (max-width:600px){
        width:30vw;
    }

`

export const AluraImg = styled.img`
    width:10vw;
    margin:0.5rem 0;
    border-radius:1rem;

    @media only screen and (max-width:800px){
        width:15vw;
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

    @media only screen and (max-width:500px){
        font-size:0.8rem;
    }
`

export const TechnologysTitle = styled.h1`
    margin:2rem 0;

`

export const Technologys = styled.div`

    background-color:#fff;
    border-radius: 1rem;
    height:8vh;
    width:50vw;

    display:flex;
    align-items:center;
    justify-content:space-around;
` 

export const Typescript = styled(SiTypescript)`
    font-size:3rem;
    color:rgba(47,114,188);
`

export const Javascript = styled(SiJavascript)`
    font-size:3rem;
    color:rgba(234,212,28);
`


export const Angular = styled(SiAngular)`
    font-size:3rem;
    color:#ff0339;
`

export const NodeJs = styled(SiNodedotjs)`
    font-size:3rem;
    color:#0a9605;
`

export const React = styled(SiReact)`
    font-size:3rem;
    color:#58edf8;
`

export const Vue = styled(SiVuedotjs)`
    font-size:3rem;
    color:rgba(65,184,131);
`

export const Icons = styled.img`
    width:3rem;
`