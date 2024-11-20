import React from 'react'
import Title from '../../components/Title'
import Repositories from '../../components/Project/index'

import { List } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>My GitHub Repositories</Title>
    <Repositories />
  </section>
)

export default Projects
