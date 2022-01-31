import styled from 'styled-components'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

export const ContactContainer = styled.footer`

    width:100vw;
    height:20vh;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

export const Socials = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const SocialIcons = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`

export const ContactTitle = styled.h2`
    font-size:2rem;
    margin-bottom:1rem;
`

export const ContactItens = styled.a`
    text-decoration:none;
    font-size:1.2rem;
    margin-bottom:0.5rem;
    color:#000;
    font-weight:900;

    display:flex;
    align-items:center;

    &:hover{
        color:#4169e1;
        transition:0.5s;
    }
`

export const Linkedin = styled(BsLinkedin)`
    font-size:2rem;
    color:#000;

    &:hover{
        color:#4169e1;
        transition:0.5s;
    }
`

export const Github = styled(BsGithub)`
    font-size:2rem;
    color:#000;
    margin-left:1rem;

    &:hover{
        color:#4169e1;
        transition:0.5s;
    }
`