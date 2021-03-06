import styled from "styled-components";


export const ExperiencesContainer = styled.section`

    background-color: #000;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

`

export const JobsContainer = styled.div`

    display: flex;
    justify-content:center;
    align-items:center;

`

export const ExperienceText = styled.h1`

    color:#fff;
    font-size:4rem;
    margin-bottom:5rem;
    display: flex;
    align-items:center;

    @media screen and (max-width:750px){
        font-size:3rem;
    }
`

export const CardsContainer = styled.div`

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

`

export const WorkImg = styled.img`
    width:50vw;

    @media only screen and (max-width:800px){
        width:100vw;
    }

`

export const Date = styled.h2`

    font-size:2rem;
    margin-bottom:-2rem;

    @media only screen and (max-width:900px){
        font-size:2rem;
        margin-bottom:0;
    }

`

export const ClickMe = styled.a`

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
`