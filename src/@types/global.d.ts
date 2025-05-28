import { Entries, Replace } from 'type-fest'

declare global {
    interface ObjectConstructor {
        entries<T extends object>(t: T): Entries<T>
        fromEntries<T extends object>(t: Entries<T>): T
    }

    interface String {
        replace<Input extends string, Search extends string, Replacement extends string>(
            this: Input,
            searchValue: Search,
            replaceValue: Replacement,
        ): Replace<Input, Search, Replacement>
        replaceAll<Input extends string, Search extends string, Replacement extends string>(
            this: Input,
            searchValue: Search,
            replaceValue: Replacement,
        ): Replace<Input, Search, Replacement, { all: true }>
    }
}
