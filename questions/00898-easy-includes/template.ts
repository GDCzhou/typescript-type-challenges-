type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
    ? Equal1<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false

type rd = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>

type ddd = Equal1<1|2, 1>
// type boo = boolean extends [false ]? 1 :2
// type boo1 = false extends object ? 1 :2
// type boo2 = 1 extends false ? 1 : 2
// type boo3 = false extends boolean ? 1 : 2

type Equal1<A, B> =
(<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
  ? true
  : false
