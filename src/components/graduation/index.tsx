import {
  Angular,
  CardsContainer,
  CardsOrganize,
  ClickMe,
  Date,
  GraduationContainer,
  GraduationText,
  Icons,
  Javascript,
  NodeJs,
  React,
  Technologys,
  TechnologysTitle,
  Typescript,
  Vue,
  WorkImg,
} from "./Graduation";
import Fiap from "../../assets/img/fiap.png";
import Python from '../../assets/img/python.svg'
import Alura from '../../assets/img/alura.png'
import Java from '../../assets/img/java.svg'

export function Graduation() {
  return (
    <GraduationContainer>
      <GraduationText>Graduation</GraduationText>

      <CardsOrganize>
        <CardsContainer>
          <Date>2021 - 2022</Date>
          <WorkImg src={Fiap} alt="Fiap" />
        </CardsContainer>

        <CardsContainer>
          <Date>Certificates</Date>
          <WorkImg src={Alura} alt="Alura" />
          <ClickMe href=''>See Certificates</ClickMe>
        </CardsContainer>
        
      </CardsOrganize>

      <TechnologysTitle>Tecnologys that i know</TechnologysTitle>
      <Technologys>
          <Javascript/>
          <Typescript/>
          <React/>
          <NodeJs/>
          <Angular/>
          <Vue/>
          <Icons src={Python} alt='python'/>
          <Icons src={Java} alt="java" />
      </Technologys>
    </GraduationContainer>
  );
}
