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

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.secondaryColor};
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
