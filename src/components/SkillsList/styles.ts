import styled from 'styled-components'

export const SkillsListContainer = styled.ul`
  padding-left: 20px; // Add padding to align the bullet points
  margin: 16px 0;

  li {
    font-size: 14px;
    color: ${(props) => props.theme.secondaryColor};
    line-height: 1.6;
    margin-bottom: 8px;
  }
`
