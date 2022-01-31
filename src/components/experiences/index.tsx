import {
  ExperiencesContainer,
  JobsContainer,
  ExperienceText,
  CardsContainer,
  Date,
  WorkImg,
  ClickMe,
} from "./Experiences";

import Foursys from "../../../assets/img/foursys.png";
import { AiOutlineExperiment } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

export function Experiences() {
  return (
    <ExperiencesContainer>
      <ExperienceText>
        Experiences <AiOutlineExperiment />
      </ExperienceText>
      <JobsContainer>
        <CardsContainer>
          <Date>May/2021</Date>
          <WorkImg src={Foursys} alt="Foursys" />
          <ClickMe href="">
            Know More <FiMoreVertical />
          </ClickMe>
        </CardsContainer>
      </JobsContainer>
    </ExperiencesContainer>
  );
}
