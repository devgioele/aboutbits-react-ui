import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import { ClassNameProps } from '../type'
import { ReactNode } from 'react'

type SectionListItemProps = ClassNameProps

type SectionDescriptionItemProps = {
  /**
   * Defines the content of the section description item.
   * Will be placed inside <dl>.
   */
  content: ReactNode
  /**
   * Defines the title of section description item.
   * Will be placed inside <dt>.
   */
  title: ReactNode

  /**
   * The className will be applied on the `dl` element.
   */
  className?: string
}

type SectionListItemWithActionProps = {
  /**
   * The react node will be pushed to the right side of the section list item.
   */
  action: ReactNode

  /**
   * The className will be applied on the internal <SectionListItem>.
   * */
  className?: string
}

type SectionListItemWithButton = {
  /**
   * On Click handler for the button
   */
  onClick: () => void
  /**
   * This className will be forwarded to the <SectionListItem>.
   */
  className?: string
}

export const SectionListItem: React.FC<SectionListItemProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        className,
        `flex items-center min-h-14 px-4 lg:px-5 text-section-list-item bg-section-list-item`
      )}
    >
      {children}
    </div>
  )
}

export const SectionListItemWithButton: React.FC<SectionListItemWithButton> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className="block w-full">
      <SectionListItem
        className={classNames(
          'justify-between space-x-4 hover:bg-section-list-item',
          className
        )}
      >
        {children}
        <IconKeyboardArrowRight
          width="24"
          height="24"
          className="fill-current"
        />
      </SectionListItem>
    </button>
  )
}

export const SectionListItemWithAction: React.FC<SectionListItemWithActionProps> =
  ({ children, action, className }) => (
    <SectionListItem
      className={classNames('justify-between space-x-4', className)}
    >
      {children}
      <div className="flex flex-shrink-0">{action}</div>
    </SectionListItem>
  )

export const SectionDescriptionItem: React.FC<SectionDescriptionItemProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <dl
      className={classNames(
        'flex flex-col pb-2 space-y-1 text-section-description-item border-b border-section-description-item',
        className
      )}
    >
      <dt className="text-sm">{title}</dt>
      <dd>{content}</dd>
    </dl>
  )
}
