import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { Alert } from '../alert'
import { ClassNameProps, Tone } from '../types'

export type FormErrorProps = ClassNameProps & {
  children?: ReactNode
}

export function FormError({ children, className }: FormErrorProps) {
  const { form } = useTheme()

  if (children === undefined || children === null) {
    return null
  }

  return (
    <Alert
      tone={Tone.Critical}
      className={classNames(className, form.formError.base)}
    >
      {children}
    </Alert>
  )
}
