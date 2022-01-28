import styled from "styled-components"

type StylesProps = {
    display?:any
}

export const HeaderContainer = styled.header`

    display:flex;
    position:${(props:StylesProps) => props.display};
    width:100%;
    transition:1s;

    a{
        text-decoration:none;
        font-size:2rem;
    }

`

export const Itens = styled.div`

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

`

export const Curriculum = styled.li`

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



`

export const Hamburguer = styled.a`

    color:#4169e1;
    padding:1rem;
    transition:0.4s;

    &:hover{
        color:#fff;    
    }

`