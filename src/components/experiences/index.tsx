import { Cards } from "../cards";
import {
  ExperiencesContainer,
  JobsContainer,
  ExperienceText,
} from "./Experiences";

export function Experiences() {
  return (
    <ExperiencesContainer>
      <ExperienceText>Experiences</ExperienceText>
      <JobsContainer>
        <Cards alt="nao sei ainda" />
      </JobsContainer>
    </ExperiencesContainer>
  );
}
