import clsx from 'clsx'

/**
 * @param {{
 * children: any,
 * className: string,
 * size: "md" | "lg",
 * variant: "primary" | "outline"
 * }} props 
 */


export function UiButton({children, className, size, variant}) {

  const buttonClassName = clsx(
    'cursor-pointer transition-colors',
    className,
    {
      md: "rounded px-6 py-2 text-sm leading-[1.2]",
      lg: "rounded-lg px-5 py-2 text-2xl leading-[1.2]"
    }[size],
    {
      primary: "text-white bg-teal-600 hover:bg-teal-500",
      outline: "text-teal-600 border border-teal-600 hover:bg-teal-50",
    }[variant]
  )
  return (
    <button className={buttonClassName}>{children}</button>
  )
}