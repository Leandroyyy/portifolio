import styled from 'styled-components'

export const ProjectsContainer = styled.section`

    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ProjectsBox = styled.div`

    background-color: #fff;
    width:80vw;
    height:80vh;
    border-radius: 2rem;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

export const Title = styled.h1`

    font-size:2rem;
    margin-bottom:2rem;
`

export const Images = styled.img`

    width:60vw;
    height:60vh;
    border-radius:1rem;
`

export const ImagesContainer = styled.div`

    display: flex;
`

export const ButtonImages = styled.a`

    font-size:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    
    &:hover{
        cursor:pointer;
        color:#4169e1;
    }

`