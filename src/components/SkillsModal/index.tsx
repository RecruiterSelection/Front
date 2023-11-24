import React, { useContext, useEffect } from "react";
import { StyledAllSkillsContainer, StyledSkillsModalContainer } from "./style";
import { CandidateTechSkillsContext } from "../../providers/candidateTechSkillProvider";
import { CandidateContext } from "../../providers/user/perfilCandidato/candidatesProvider";
import { TechSkillsContext } from "../../providers/techSkillsProvider";

export const SkillsModal: React.FC = () => {
  const { getCandidateTechSkills, candidateTechSkills } = useContext(
    CandidateTechSkillsContext
  );

  const { candidateWithEmail } = useContext(CandidateContext);
  const { getTechSkills, techSkills } = useContext(TechSkillsContext);

  useEffect(() => {
    getCandidateTechSkills();
    getTechSkills();
  }, [candidateWithEmail]);

  return (
    <StyledSkillsModalContainer>
      <div id="title_my_skills">
        <p>Minhas habilidades</p>
      </div>
      <ul className="candidates_skill_ul">
        {candidateTechSkills?.map((skill) => {
          if (candidateWithEmail?.profileId === skill.candidateId) {
            return <li key={skill.id}>{skill.TechnologySkill.name}</li>;
          }
          return <p>Nenhuma tecnologia escolhida ainda.</p>;
        })}
      </ul>
      <StyledAllSkillsContainer>
        <ul>
          {techSkills.map((skill) => (
            <li>{skill.name}</li>
          ))}
        </ul>
      </StyledAllSkillsContainer>
    </StyledSkillsModalContainer>
  );
};
