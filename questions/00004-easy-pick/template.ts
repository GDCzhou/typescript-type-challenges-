// type MyPick<T, K> = { [P in (keyof T&K)]: T[P] }
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
// Pick<>
