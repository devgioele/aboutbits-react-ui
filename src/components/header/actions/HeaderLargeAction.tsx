import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & {
  /**
   * Defines the icon of the button.
   * */
  icon: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   * */
  label: string
  /**
   * Defines which action should be executed on clicking.
   * */
  onClick: () => void
}

const HeaderLargeAction: React.FC<Props> = ({
  icon: Icon,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      className={classNames(
        className,
        'text-header-action-hover text-header-action-hover'
      )}
      aria-label={label}
      onClick={onClick}
    >
      <Icon className="w-8 lg:w-10 h-8 lg:h-10 fill-current" />
    </button>
  )
}

export { HeaderLargeAction }
