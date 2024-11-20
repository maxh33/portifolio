import React from 'react'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubStats } from './styles'
import SkillsList from '../../components/SkillsList'

const About = () => (
  <>
    <section>
      <Title fontSize={16}>About me</Title>
      <Paragraph type="secondary">
        My journey in technology began with certifications in hardware and
        evolved into software expertise. I have experience in web development
        and e-commerce. As the owner of Joiasmax, I developed skills in web
        development and company management, focusing on optimizing sales
        performance and improving overall business efficiency.
      </Paragraph>
      <Paragraph type="secondary">
        Currently, I am a Full Stack Python developer, focusing on creating web
        solutions and microservices. My projects on GitHub reflect this journey,
        with emphasis on developing applications in Django, scripts with Python
        for data processing and back-end integrations.
      </Paragraph>
      <Title>Key Skills:</Title>
      <SkillsList type="secondary"></SkillsList>
      <Title>Contact: +55 43 9 9158-1772 | contact@maxhaider.dev</Title>
      <GithubStats>
        <img src="https://github-readme-stats.vercel.app/api?username=maxh33&show_icons=true&theme=apprentice&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=maxh33&layout=compact&langs_count=7&theme=apprentice" />
      </GithubStats>
    </section>
  </>
)

export default About
