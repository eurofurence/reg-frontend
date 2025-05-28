declare module 'ptz-i18n' {
    export function getCurrentLangKey<K>(languages: readonly K[], defaultLanguage: K, url: string): K
}
