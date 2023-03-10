interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

export type GetReadonlyKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >
}[keyof T]

type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B

type test = {
  -readonly [ K in keyof Todo2]: Todo2[K]
}
type testOnly = Readonly<Todo2>
type testPick = Pick<Todo2, 'title'>
type testOmit = Omit<Todo2, 'title'>
