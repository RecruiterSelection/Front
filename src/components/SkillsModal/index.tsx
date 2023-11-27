import React, { useContext, useEffect } from "react";
import { StyledAllSkillsContainer, StyledSkillsModalContainer } from "./style";
import { CandidateTechSkillsContext } from "../../providers/candidateTechSkillProvider";
import { CandidateContext } from "../../providers/user/perfilCandidato/candidatesProvider";
import { TechSkillsContext } from "../../providers/techSkillsProvider";
import { IoIosClose } from "react-icons/io";

export const SkillsModal: React.FC = () => {
  const { getCandidateTechSkills, candidateTechSkills } = useContext(
    CandidateTechSkillsContext
  );

  const { candidateWithEmail } = useContext(CandidateContext);
  const { getTechSkills, techSkills } = useContext(TechSkillsContext);
  const { createNewCandidateTechSkill, removeCandidateTechSkill } = useContext(
    CandidateTechSkillsContext
  );

  useEffect(() => {
    getCandidateTechSkills();
    getTechSkills();
  }, [candidateWithEmail]);

  const candidateId = candidateWithEmail?.profileId;

  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    if (candidateId) {
      await createNewCandidateTechSkill(
        candidateId.toString(),
        event.currentTarget.id!
      );
      await getCandidateTechSkills();
    }
  };

  const handleRemove = async (event: React.MouseEvent<HTMLElement>) => {
    await removeCandidateTechSkill(event.currentTarget.id);
  };

  return (
    <StyledSkillsModalContainer>
      <div className="my_skills_wrapper">
        <div id="title_my_skills">
          <p>Minhas habilidades</p>
        </div>
        <ul className="candidates_skill_ul">
          {candidateTechSkills.length > 0 ? (
            candidateTechSkills.map((skill) => {
              if (candidateWithEmail?.profileId === skill.candidateId) {
                return (
                  <li
                    key={skill.id}
                    id={skill.id.toString()}
                    onClick={(event) => handleRemove(event)}>
                    {skill.TechnologySkill?.name}
                    <span> {<IoIosClose />} </span>
                  </li>
                );
              }
              return null;
            })
          ) : (
            <p>Nenhuma tecnologia escolhida ainda.</p>
          )}
        </ul>
      </div>
      <StyledAllSkillsContainer>
        <div id="title_my_skills">
          <p>Habilidades disponíveis</p>
        </div>
        <ul className="tech_skills_ul">
          {techSkills.map((skill) => (
            <li
              key={skill.skillId}
              id={skill.skillId.toString()}
              onClick={(event) => handleClick(event)}>
              {skill.name}
            </li>
          ))}
        </ul>
      </StyledAllSkillsContainer>
    </StyledSkillsModalContainer>
  );
};
