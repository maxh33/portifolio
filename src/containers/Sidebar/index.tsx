import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Description, SidebarContainer } from './styles'

type Props = {
  toggleTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Maxh33</Title>
      <Paragraph type="secondary" fontSize={16}>
        Maxh33
      </Paragraph>
      <Description type="primary" fontSize={12}>
        Full Stack Developer
      </Description>
      <ButtonTheme onClick={props.toggleTheme}>Change Theme</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
