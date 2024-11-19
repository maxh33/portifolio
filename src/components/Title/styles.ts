import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 16px;
`
