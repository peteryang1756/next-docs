'use client'

import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react'
import type { HTMLAttributes, ReactNode } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible'

const item = cva(
  'nd-flex nd-flex-row nd-items-center nd-gap-2 nd-text-sm nd-rounded-md nd-px-2 nd-py-1.5 [&_svg]:nd-w-4 [&_svg]:nd-h-4 nd-transition-colors hover:nd-bg-accent hover:nd-text-accent-foreground'
)

export function Files({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'nd-not-prose nd-border nd-rounded-md nd-bg-card nd-p-2',
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}

export function File({
  title,
  icon,
  defaultOpen,
  children
}: {
  title: string
  icon?: ReactNode
  defaultOpen?: boolean
  children?: ReactNode
}) {
  if (children == null) {
    return (
      <p className={cn(item())}>
        {icon ?? <FileIcon />}
        {title}
      </p>
    )
  }

  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger
        className={cn(item({ className: 'nd-group nd-w-full' }))}
      >
        <FolderIcon className="group-data-[state=open]:nd-hidden" />
        <FolderOpenIcon className="group-data-[state=closed]:nd-hidden" />
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="nd-flex nd-flex-col nd-ml-4 nd-pl-2 nd-border-l nd-py-2">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
