import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-bottom: 40px;
  maring-top: 24px;
`
export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.primaryColor};
  font-weight: bold;
  font-size: 10px;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
