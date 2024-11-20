import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  background-color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`
