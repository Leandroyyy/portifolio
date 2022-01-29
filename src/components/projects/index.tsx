import { Images, ProjectsBox, ProjectsContainer, Title } from "./Projects";
import devFinance from '../../assets/img/devFinance.png'


export function Projects(){
    return(

    <ProjectsContainer>
    
        <ProjectsBox>

            <Title>Projects</Title>

            {/*realizar uma troca de pagina mostrando imagem dos meus projetos*/}

            <Images src={devFinance} />

        </ProjectsBox>
    
    </ProjectsContainer>

    )
}