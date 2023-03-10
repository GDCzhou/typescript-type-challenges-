type Replace<S extends string, From extends string, To extends string> =
From extends ''
  ? S
  :S extends `${infer Frist}${From}${infer R}`
    ? `${Frist}${To}${R}`
    : S

type j12 = Replace<'foobarbar', '', 'foo'>
