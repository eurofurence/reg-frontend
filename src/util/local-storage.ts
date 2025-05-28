export const load = <T>(id: string) => {
    const serializedData = 'localStorage' in globalThis ? localStorage.getItem(id) : null

    return serializedData === null ? null : (JSON.parse(serializedData) as T)
}

export const save = (id: string, saveData: unknown) => {
    if ('localStorage' in globalThis) {
        localStorage.setItem(id, JSON.stringify(saveData))
    }
}

export const remove = (id: string) => {
    if ('localStorage' in globalThis) {
        localStorage.removeItem(id)
    }
}
