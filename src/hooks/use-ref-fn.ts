import { MutableRefObject, useRef } from 'react'

export const useRefFn = <T>(init: () => T) => {
    const ref = useRef<T | null>(null)

    if (ref.current === null) {
        ref.current = init()
    }

    return ref as MutableRefObject<T>
}
