import { useState } from "react";
import { Images, ProjectsBox, ProjectsContainer, Title, ImagesContainer, ButtonImages, More, ProjectName} from "./Projects";
import DevFinances from "../../assets/img/devFinances.svg"
import Mind from "../../assets/img/mind.svg"
import Moveit from "../../assets/img/moveit.svg"
import Hawker from "../../assets/img/hawker.svg"
import Traveller from "../../assets/img/traveller.svg"
import {Data} from './projectsData'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

type ImagesProps = {
    id:number,
    title:string,
    subTitle:string,
    image?:any,
}

export function Projects(){

    const [image, setImage] = useState<number>(1);

    //if you want to add more, you need to add more data in projects as the array
    const projectsImages : Array<any> = [Mind,Hawker,Traveller,Moveit,DevFinances]

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
    
        <Title>Projects</Title>

        <ProjectsBox>
            <ProjectName>{Data[image].title}</ProjectName>

            <ImagesContainer>
                <ButtonImages onClick={BackImages}><FaArrowCircleLeft/></ButtonImages>

                <Images src={projectsImages[image]} alt={Data[image].subTitle}  />

                <ButtonImages onClick={AdvanceImages}><FaArrowCircleRight/></ButtonImages>

            </ImagesContainer>

         
            <More href="">Know More</More>
        </ProjectsBox>
    
    </ProjectsContainer>

    )
}