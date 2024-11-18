import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>List of Tasks</Title>
      <Paragraph type="secondary">List of Projects</Paragraph>
      <LinkButton href="#">Check it</LinkButton>
    </Card>
  )
}

export default Project
