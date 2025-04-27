import clsx from 'clsx'

interface DividerProps {
  className?: string
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div className={clsx('bg-muted-foreground/50 h-[2px] w-full', className)} />
  )
}

export default Divider
