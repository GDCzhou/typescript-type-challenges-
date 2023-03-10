type CamelCase<S extends string, O extends string=''> = S extends `${infer F}${infer R}`
  ? CamelCase<R, CombineStr1<F, O>>
  :ReplaceAll<CombineStr1<S, O>, '_', ''>

type CombineStr1<S extends string, O extends string> = O extends `${infer _F}_`
  ? `${O}${Uppercase<S>}`
  : `${O}${Lowercase<S>}`

type MyReplaceAll<S extends string, From extends string, To extends string> =
From extends ''
  ? S
  : S extends `${infer Frist}${From}${infer R}`
    ? `${Frist}${To}${MyReplaceAll<R, From, To>}`
    : S
