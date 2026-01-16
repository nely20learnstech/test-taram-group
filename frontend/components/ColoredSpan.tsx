import { cn } from '@/libs/utils';
import React from 'react'
type ColoredSpanProps = {
    children: React.ReactNode;
    color?:  string;
    className?: string;
}

export const ColoredSpan = ({
    children,
    color="text-turquoise",
    className
}: ColoredSpanProps) => {
  return (
    <span className={cn(
        color,
        className
    )}>
        {children}
    </span>
  )
}
