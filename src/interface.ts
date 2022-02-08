interface Context {
    events: { [key: string]: Callback[]}
}

interface Callback {
    (...params:any): any
}
