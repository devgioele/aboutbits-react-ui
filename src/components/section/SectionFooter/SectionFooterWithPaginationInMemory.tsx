import { ReactElement } from 'react'
import { PaginationInMemory, PaginationInMemoryProps } from '../../pagination'
import { SectionFooter } from './SectionFooter'

export function SectionFooterWithPaginationInMemory({
  page,
  size,
  total,
  onChangePage,
  config,
  className,
}: PaginationInMemoryProps): ReactElement | null {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooter>
      <PaginationInMemory
        page={page}
        size={size}
        total={total}
        onChangePage={onChangePage}
        config={config}
        className={className}
      />
    </SectionFooter>
  )
}
