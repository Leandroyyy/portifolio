import { Images, ProjectsBox, ProjectsContainer, Title, ImagesContainer, ButtonImages} from "./Projects";
import DevFinances from "../../assets/img/devFinances.png"
import Mind from "../../assets/img/mind.png"
import Moveit from "../../assets/img/moveit.png"
import Hawker from "../../assets/img/hawker.png"
import Traveller from "../../assets/img/traveller.png"
import {Data} from './projectsData'
import { useState } from "react";
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

type ImagesProps = {
    id:number,
    title:string,
    subTitle:string,
    image?:any,
}

export function Projects(){

    let number = 2;

    const [image, setImage] = useState<number>(0);

    const projectsImages : Array<any> = [DevFinances,Mind,Moveit,Hawker,Traveller]

    function AdvanceImages(){
        setImage(image+1)

        if(image == projectsImages.length - 1){
            setImage(0)
        }
    }

    function BackImages(){
        setImage(image-1)

        if(image == 0){
            setImage(projectsImages.length - 1)
        }
    }

    return(

    <ProjectsContainer>
    
        <ProjectsBox>

            <Title>Projects</Title>

            <ImagesContainer>
                <ButtonImages onClick={BackImages}><FaArrowCircleLeft/></ButtonImages>

                <Images src={projectsImages[image]} alt={Data[0].subTitle}  />

                <ButtonImages onClick={AdvanceImages}><FaArrowCircleRight/></ButtonImages>
            </ImagesContainer>
        </ProjectsBox>
    
    </ProjectsContainer>

    )
}