import React from 'react'
import Project from '../../components/Project'
import Title from '../../components/Title'
import Repositories from '../../components/Repositories/Repositories'

import { List } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projects</Title>
    <List>
      <li>
        <Project />
      </li>
      <li>
        <Repositories />
      </li>
    </List>
  </section>
)

export default Projects
