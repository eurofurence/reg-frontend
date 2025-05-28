export const includes = <T, U extends T>(array: readonly U[], searchElement: T): searchElement is U =>
    (array as readonly T[]).includes(searchElement)
