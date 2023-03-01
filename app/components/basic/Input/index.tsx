import type { FC, InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
}

export const Input: FC<Props> = ({ label, ...rest }) => {
  return (
    <Container>
      {label ? (<span>{label}</span>) : null}
      <div className='inner-input-container'>
        <input {...rest} />
      </div>
    </Container>
  )
}