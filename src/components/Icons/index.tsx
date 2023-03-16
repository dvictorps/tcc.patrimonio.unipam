import { Container } from './styles'
import { IconBaseProps } from 'react-icons'
import * as Icons from 'react-icons/all'

export type IconProps = IconBaseProps & {
  name: keyof typeof Icons
}

export function Icon({ name, size, ...props }: IconProps) {
  const CurrentIcon = Icons[name]

  return (
    <Container>
      <CurrentIcon size={size || 20} {...props} />
    </Container>
  )
}
