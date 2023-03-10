type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

type Y = {
  a: 's'
  b: {
    c: 'c'
  }
}

type t111 = MergeInsertions<Y>
