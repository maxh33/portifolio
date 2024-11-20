import React from 'react'
import { SkillsListContainer } from './styles'

interface SkillsListProps {
  type?: string
}

const SkillsList: React.FC<SkillsListProps> = ({ type }) => (
  <SkillsListContainer>
    <li>Python, Django, PostgreSQL, Docker, LLMs</li>
    <li>Google Cloud Platform (GCP), API Integration, GTM, and Analytics</li>
    <li>Full-stack development (front-end and back-end)</li>
    <li>Web development (JavaScript, TypeScript, React)</li>
    <li>WordPress, WooCommerce, Elementor</li>
    <li>English C1 (Advanced)</li>
  </SkillsListContainer>
)

export default SkillsList
