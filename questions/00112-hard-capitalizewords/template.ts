type Whitespace = ' '| ',' | '.'

type CapitalizeWords<S extends string, O extends string = ''> = S extends `${infer F}${infer Rest}`
  ? CapitalizeWords<Rest, CombineStr<F, O>>
  : MyCapitalize<CombineStr<S, O>>

type CombineStr<S extends string, O extends string> = O extends `${infer _F}${Whitespace}` ? `${O}${Uppercase<S>}`: `${O}${S}`
