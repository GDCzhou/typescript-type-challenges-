type ReplaceAll<S extends string, From extends string, To extends string> =
From extends ''
  ? S
  :S extends `${infer Frist}${From}${infer R}`
    ? `${Frist}${To}${ReplaceAll<R, From, To>}`
    : S
