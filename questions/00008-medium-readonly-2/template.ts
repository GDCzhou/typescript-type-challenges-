interface Todo4 {
  title: string
  description?: string
  completed: boolean
}

// type MyReadonly2<T, K extends keyof T = keyof T> =
//   { readonly [S in K]: T[S] } &
//   { [S in KeyDiff<keyof T, K>]: T[S] }

type MyReadonly2<T, K extends keyof T = keyof T> =
{ readonly [S in K]: T[S] } &
{ [S in keyof T as S extends K ? never : S]: T[S] }

type KeyDiff<A, B> = A extends B ? never : A

type t000 = MyReadonly2<Todo4, 'title' | 'description'>
