import { Images, ProjectsBox, ProjectsContainer, Title } from "./Projects";
//import DevFinance from '../../assets/img/devFinance.png'
//import {Data} from './projectsData'


type ImagesProps = {
    id:number,
    title:string,
    subTitle:string,
}

export function Projects(){
    return(

    <ProjectsContainer>
    
        <ProjectsBox>

            <Title>Projects</Title>

            {/*realizar uma troca de pagina mostrando imagem dos meus projetos
         <Images src={DevFinance} />    
        */}

           

            <div>
                {/*Data.map((data: ImagesProps, index:number) => {
                    return(
                        <div>
                            <Images />
                          
                        </div>
                    )
                })*/}
            </div>

        </ProjectsBox>
    
    </ProjectsContainer>

    )
}