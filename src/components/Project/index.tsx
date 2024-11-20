import React, { useEffect, useState } from 'react'
import { fetchGitHubRepos } from '../../services/githubApi'

import { Card, LinkButton } from '../Project/styles'
import { Title } from '../Title/styles'
import { P } from '../Paragraph/styles'
import { List } from '../../containers/Projects/styles'

type Repo = {
  id: number
  name: string
  html_url: string
  language: string | null
}

const Repositories: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchGitHubRepos()
        setRepos(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError(String(error))
        }
      } finally {
        setLoading(false)
      }
    }

    getRepos()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <List>
      {repos.map((repo) => (
        <li key={repo.id}>
          <Card>
            <Title>{repo.name}</Title>
            <P type="secondary">{repo.language || 'No language specified'}</P>
            <LinkButton href={repo.html_url}>View on GitHub</LinkButton>
          </Card>
        </li>
      ))}
    </List>
  )
}

export default Repositories
