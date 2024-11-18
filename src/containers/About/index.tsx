import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubStats } from './styles'

const About = () => (
  <>
    <section>
      <Title fontSize={16}>About</Title>
      <Paragraph type="secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
        pariatur aliquam nesciunt veritatis magni eius nam voluptatibus nostrum
        harum enim, modi reprehenderit amet laboriosam blanditiis eum repellat
        necessitatibus aperiam consectetur.
      </Paragraph>
      <GithubStats>
        <img src="https://github-readme-stats.vercel.app/api?username=maxh33&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=maxh33&layout=compact&langs_count=7&theme=dracula" />
      </GithubStats>
    </section>
  </>
)

export default About
