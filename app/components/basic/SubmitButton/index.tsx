import type { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
}

export const SubmitButton: FC<Props> = () => {
  return (
    <div></div>
  )
}