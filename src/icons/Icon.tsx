import type { JSX } from "solid-js"


type InnerIconProps = {
  children: JSX.Element
  className: string
}

export type IconProps = {
  children: JSX.Element
}

function InnerIcon ({ children, className }: InnerIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      class={`${className}`}
    >
      {children}
    </svg>
  )
}

export default function Icon ({ children }: IconProps) {
  return (
    <div class="relative group">
      <InnerIcon className={`
      fill-white absolute z-20 top-0
        group-hover:-translate-x-1 group-hover:translate-y-1
        transition-all
      `}>
        {children}
      </InnerIcon>
      <InnerIcon className={`fill-red-600 z-10 relative`}>
        {children}
      </InnerIcon>
      <InnerIcon className={`
      fill-blue-700 absolute z-0 top-0
        group-hover:translate-x-1 group-hover:-translate-y-1
        transition-all
      `}>
        {children}
      </InnerIcon>
    </div>
  )
}
