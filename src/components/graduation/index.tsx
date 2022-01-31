import {
  AluraImg,
  Angular,
  CardsContainer,
  CardsOrganize,
  ClickMe,
  Date,
  FiapImg,
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
} from "./Graduation";
import Fiap from "../../../assets/img/Fiap.png";
import Python from '../../../assets/img/python.svg'
import Alura from '../../../assets/img/alura.png'
import Java from '../../../assets/img/java.svg'

export function Graduation() {
  return (
    <GraduationContainer>
      <GraduationText>Graduation</GraduationText>

      <CardsOrganize>
        <CardsContainer>
          <Date>2021 - 2022</Date>
          <FiapImg src={Fiap} alt="Fiap" />
        </CardsContainer>

        <CardsContainer>
          <Date>Certificates</Date>
          <AluraImg src={Alura} alt="Alura" />
          <ClickMe href=''>See Certificates</ClickMe>
        </CardsContainer>
        
      </CardsOrganize>

      <TechnologysTitle>Technologys that i know</TechnologysTitle>
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
