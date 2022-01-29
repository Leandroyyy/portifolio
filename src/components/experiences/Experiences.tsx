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

    @media screen and (max-width:750px){
        font-size:3rem;
    }
`