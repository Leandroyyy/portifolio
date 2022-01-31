import { useState } from "react";
import { Images, ProjectsBox, ProjectsContainer, Title, ImagesContainer, ButtonImages, More, ProjectName, Computer} from "./Projects";
import DevFinances from "../../../assets/img/devFinances.svg"
import Mind from "../../../assets/img/Mind.svg"
import Moveit from "../../../assets/img/moveit.svg"
import Hawker from "../../../assets/img/hawker.svg"
import Traveller from "../../../assets/img/traveller.svg"
import {Data} from './projectsData'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import {FiMoreVertical} from 'react-icons/fi'

export function Projects(){

    const [image, setImage] = useState<number>(0);

    //if you want to add more, you need to add more data in projects as the array
    const projectsImages : Array<string> = [Mind,Hawker,Traveller,Moveit,DevFinances]

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
    
        <Title>Projects <Computer/></Title>

        <ProjectsBox>
            <ProjectName>{Data[image].title}</ProjectName>

            <ImagesContainer>
                <ButtonImages color={Data[image].color} onClick={BackImages}><FaArrowCircleLeft/></ButtonImages>

                <Images src={projectsImages[image]} alt={Data[image].subTitle}  />

                <ButtonImages color={Data[image].color} onClick={AdvanceImages}><FaArrowCircleRight/></ButtonImages>

            </ImagesContainer>
         
            <More color={Data[image].color} href="">Know More <FiMoreVertical/></More>
        </ProjectsBox>
    
    </ProjectsContainer>

    )
}