import styled from 'styled-components'
import {AiOutlineMessage} from 'react-icons/ai'


export const ProfileContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow-y:hidden;
`

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin:auto;
`

export const Name = styled.h1`
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
`

export const Text = styled.p`
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
`

export const Contact = styled.a`

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

`

export const Message = styled(AiOutlineMessage)`

    margin-left:1rem;

`