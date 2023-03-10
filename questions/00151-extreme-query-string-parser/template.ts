export type ParseQueryString<S extends string, Res extends Record<string, any> ={} > =
  S extends `${infer first}&${infer second}`
    ? ParseQueryString<second, CheckSameKey<Res, ParseSimpleString<first> >>
    : CheckSameKey<Res, ParseSimpleString<S> >

// 解析单个键值对 extreme
type ParseSimpleString<S extends string> = S extends `${infer first}=${infer second}`
  ? { [k in first]: second }
  : S extends ''
    ? {}
    : { [k in S]: true }

type t = ParseSimpleString<'a=3'>

type CheckSameKey<A, B> =
  keyof B extends keyof A ? AddTuple<A, B> : CombineRecord<A, B>

type AddTuple<A, B> = {
  [K in keyof A]: K extends keyof B
    ? B[K] extends A[K]
      ? A[K]
      : A[K] extends any[]
        ? [...A[K], B[K]]
        : [A[K], B[K]]
    : A[K]
}
type CombineRecord<A, B> = {
  [T in (keyof A | keyof B)]: T extends keyof A
    ? A[T]
    : T extends keyof B
      ? B[T]
      : never
}

interface T1 {
  // A: 'A'
  // B: 'B'
}
interface T2 {
  c: 'c'
  d: 'd'
}
type t1 = CombineRecord<T1, T2>

type str1 = 'a=1&b=2&c=3&d=4'
type t2 = ParseQueryString<str1>
