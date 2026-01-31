declare module '@fluent/langneg' {
  export function negotiateLanguages<T extends string>(
    requestedLocales: readonly string[],
    availableLocales: readonly T[],
    { strategy, defaultLocale }?: NegotiateLanguagesOptions
  ): T[]
}
