import styled from 'styled-components'

export const GithubStats = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: row;

  img {
    height: 157px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      height: auto;
      margin-bottom: 16px;
    }
  }
`
