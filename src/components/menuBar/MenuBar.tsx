import styled from 'styled-components'

type StylesProps = {
    display?:any;
}

export const ContainerBar = styled.aside`

    width: 30%;
	top:${(props:StylesProps) => props.display};
    right:0;
    position:fixed;
    transition: 0.5s;

    @media only screen and (max-width:850px){
        top:${(props:StylesProps) => props.display};
        right:0;
        position:fixed;
        width:100%;
        height:100%;
    }
  
    @media only screen and (max-width:400px){
        top:${(props:StylesProps) => props.display};
        right:0;
        margin-top:5rem;
        position:fixed;
        width:100%;
        height:100%;
    }

`

export const RightBar = styled.ul`

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
`