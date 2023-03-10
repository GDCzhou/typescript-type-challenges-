type WordSpace = ' '| '\n' | '\t'

type Trim<S extends string> = S extends `${WordSpace}${infer R}`
  ?Trim<R>
  : S extends `${infer L}${WordSpace}`
    ? Trim<L>
    :S
