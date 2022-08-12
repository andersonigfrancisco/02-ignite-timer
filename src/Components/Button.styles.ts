import styled, { css } from 'styled-components'

export type ButtoVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
  variant: ButtoVariant
}

const buttonvariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;

  background-color: ${(props) => props.theme['green-500']};

  /*
  ${(props) => {
    return css`
      background-color: ${buttonvariants[props.variant]};
    `
  }}*/
`
