import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import React, { ReactNode } from 'react'
import {
  LinkComponentProps,
  useLinkComponent,
  useTheme,
} from '../../../framework'
import { ClassNameProps } from '../../types'

type SectionListItemWithActionProps = ClassNameProps & {
  /**
   * The react node will be pushed to the right side of the section list item.
   */
  action: ReactNode
}

type SectionListItemButtonProps = ClassNameProps & {
  /**
   * On click handler for the button.
   */
  onClick: () => void
}

export const SectionListItem: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()
  return (
    <div className={classNames(className, section.listItem.base)}>
      {children}
    </div>
  )
}

export const SectionListItemButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<SectionListItemButtonProps>
>(({ children, onClick, className, ...props }, ref) => {
  const { section } = useTheme()
  return (
    <button
      onClick={onClick}
      className={classNames(
        section.listItemButton.base,
        section.listItem.base,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <IconKeyboardArrowRight width="24" height="24" className="fill-current" />
    </button>
  )
})

SectionListItemButton.displayName = 'SectionListItemButton'

export const SectionListItemLink = React.forwardRef<
  HTMLAnchorElement,
  LinkComponentProps
>(({ children, className, internal = true, ...props }, ref) => {
  const LinkComponent = useLinkComponent()
  const { section } = useTheme()
  return (
    <LinkComponent
      className={classNames(
        section.listItemLink.base,
        section.listItem.base,
        className
      )}
      internal={internal}
      ref={ref}
      {...props}
    >
      {children}
      <IconKeyboardArrowRight width="24" height="24" className="fill-current" />
    </LinkComponent>
  )
})

SectionListItemLink.displayName = 'SectionListItemLink'

export const SectionListItemWithAction: React.FC<
  SectionListItemWithActionProps
> = ({ children, action, className }) => {
  const { section } = useTheme()
  return (
    <SectionListItem
      className={classNames(section.listItemWithAction.base, className)}
    >
      {children}
      <div className={section.listItemWithAction.action.base}>{action}</div>
    </SectionListItem>
  )
}

SectionListItemWithAction.displayName = 'SectionListItemWithAction'
