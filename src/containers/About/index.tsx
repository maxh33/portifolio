import React from 'react'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubStats } from './styles'

const About = () => (
  <>
    <section>
      <Title fontSize={16}>About me</Title>
      <Paragraph type="secondary">
        My journey in technology began with certifications in hardware and
        software, evolving to experiences in web development and e-commerce. As
        owner of Joiasmax, I developed Web skills and sales optimization.
      </Paragraph>
      <Paragraph type="secondary">
        Currently, I am a Full Stack Python developer, focusing on creating web
        solutions and microservices. My projects on GitHub reflect this journey,
        with emphasis on developing applications in Django, scripts with Python
        for data processing and back-end integrations.
      </Paragraph>
      <Paragraph type="secondary">
        Key Skills: Python, Django, PostgreSQL, Docker, LLMs, Google Cloud
        Platform (GCP), API Integration, GTM, and Analytics, Full-stack
        development (front-end and back-end), Web development (JavaScript,
        TypeScript, React), WordPress, WooCommerce, Elementor, English C1
        (Advanced)
      </Paragraph>
      <Paragraph type="secondary">
        Contact: +55 43 9 9158-1772 | contact@maxhaider.dev
      </Paragraph>
      <GithubStats>
        <img src="https://github-readme-stats.vercel.app/api?username=maxh33&show_icons=true&theme=apprentice&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=maxh33&layout=compact&langs_count=7&theme=apprentice" />
      </GithubStats>
    </section>
  </>
)

export default About
