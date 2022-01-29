import { Cards } from "../cards";
import {
  ExperiencesContainer,
  JobsContainer,
  ExperienceText,
} from "./Experiences";

import Foursys from "../../assets/img/foursys.png"

export function Experiences() {
  return (
    <ExperiencesContainer>
      <ExperienceText>Experiences</ExperienceText>
      <JobsContainer>
        <Cards alt="Foursys" img={Foursys} />
      </JobsContainer>
    </ExperiencesContainer>
  );
}
