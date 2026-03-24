import { type ComponentProps, forwardRef } from 'react'
import { cn } from '@/shared/libs/cn-merge'

export interface InputRootProps extends ComponentProps<'div'> {}

const InputRoot = ({ className, ...props }: InputRootProps) => {
  return (
    <div
      className={cn(
        'position-relative d-flex align-items-center w-100 bg-white rounded-3 shadow-sm overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}
export interface InputContentProps extends ComponentProps<'input'> {}

const InputContent = forwardRef<HTMLInputElement, InputContentProps>(
  ({ className, ...props }: InputContentProps, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'form-control form-control-lg border-0 bg-transparent shadow-none ps-5 pe-3 rounded-start-3 rounded-end-0',
          className,
        )}
        {...props}
      />
    )
  },
)

export interface InputIconProps extends ComponentProps<'div'> {}
const InputIcon = ({ className, ...props }: InputIconProps) => {
  return (
    <div
      className={cn(
        'position-absolute top-50 start-0 translate-middle-y ms-3 text-muted',
        className,
      )}
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Input: InputContent,
  Icon: InputIcon,
}
