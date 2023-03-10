// type MyParameters<T extends (...args: any[]) => any> = any
type MyParameters<T> = T extends (...args: infer R) => any ? R : never
