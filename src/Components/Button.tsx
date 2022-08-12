import { ButtonContainer, ButtoVariant } from './Button.styles'

interface ButtonPorp {
  variant?: ButtoVariant
}

export function Button({ variant = 'primary' }: ButtonPorp) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
