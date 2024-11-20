export const fetchGitHubRepos = async () => {
  const response = await fetch('https://api.github.com/users/maxh33/repos')
  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }
  return response.json()
}
