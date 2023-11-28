import { useContext, useEffect, useState } from "react";
import {
  JobCard,
  JobSkillItem,
  JobSkillList,
  MatchingJobsContainer,
} from "./style";
import { CandidateContext } from "../../providers/user/perfilCandidato/candidatesProvider";
import { JobSkillsContext } from "../../providers/jobSkillsProvider";
import { UniqueJobsArray } from "../../providers/jobSkillsProvider/interfaces";

export const MatchingJobsComponent: React.FC = () => {
  const { candidateWithEmail, getCandidateByEmail } =
    useContext(CandidateContext);

  const { getMatchingJobsForCandidate, matchingJobs } =
    useContext(JobSkillsContext);

  const candidateEmail = localStorage.getItem("@userMail");
  const [uniqueJobs, setUniqueJobs] = useState<UniqueJobsArray>([]);

  useEffect(() => {
    if (candidateEmail) {
      getCandidateByEmail(candidateEmail);
    }
  }, [candidateEmail]);

  useEffect(() => {
    if (candidateWithEmail) {
      getMatchingJobsForCandidate(candidateWithEmail.profileId);
    }
  }, [candidateWithEmail]);

  useEffect(() => {
    const uniqueJobMap = new Map();

    matchingJobs.forEach((jobSkill) => {
      uniqueJobMap.set(jobSkill.Job.jobId, {
        ...jobSkill.Job,
        skills: [
          ...(uniqueJobMap.get(jobSkill.Job.jobId)?.skills || []),
          jobSkill.Skill.name,
        ],
      });
    });

    setUniqueJobs(Array.from(uniqueJobMap.values()));
    console.log(uniqueJobs, "UNIQUE JOBS");
  }, [matchingJobs]);

  return (
    <MatchingJobsContainer>
      <h1>Vagas personalizadas</h1>
      <p>Vagas que têm tudo a ver com suas habilidades.</p>
      <div className="job_card_wrapper">
        {uniqueJobs.map((job) => (
          <JobCard key={job.jobId}>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <JobSkillList>
              {job.skills.map((skill, index) => (
                <JobSkillItem key={index}>
                  <p>{skill}</p>
                </JobSkillItem>
              ))}
            </JobSkillList>
          </JobCard>
        ))}
      </div>
    </MatchingJobsContainer>
  );
};
