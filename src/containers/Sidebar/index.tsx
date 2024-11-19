import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Title fontSize={20}>Maxh33</Title>
    <Paragraph type="secondary" fontSize={16}>
      Maxh33
    </Paragraph>
    <Paragraph fontSize={12}>Full Stack Developer</Paragraph>
    <button>Change Theme</button>
  </aside>
)

export default Sidebar
