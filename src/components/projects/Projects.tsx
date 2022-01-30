import styled from 'styled-components'

export const ProjectsContainer = styled.section`

    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

export const ProjectsBox = styled.div`

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
`

export const Title = styled.h1`

    font-size:4rem;
    margin-top:2rem;
    margin-bottom:2rem;
    color:#fff;
`

export const Images = styled.img`

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
`

export const ImagesContainer = styled.div`

    display: flex;
`

export const ButtonImages = styled.a`

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

    @media only screen and (max-width:500px){
        margin:0.5rem;
    }
`

export const More = styled.a`

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

`

export const ProjectName = styled.h2`

    font-size:3rem;

    @media only screen and (max-width:600px){
        font-size:2rem;
    }
`