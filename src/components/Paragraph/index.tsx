import { P } from './styles'

export type Props = {
  children: string
  // non mandatory prop with ? at the end
  type?: 'primary' | 'secondary'
}

const Paragraph = ({ children, type = 'primary' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph
