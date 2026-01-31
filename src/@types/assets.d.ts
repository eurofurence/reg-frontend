declare module '*.inline.svg' {
  import { ComponentType } from 'react'

  const Component: ComponentType

  export default Component
}

declare module '*.svg' {
  const content: string

  export default content
}

declare module '*.png' {
  const url: string

  export default url
}
