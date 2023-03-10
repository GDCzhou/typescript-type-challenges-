// type DeepReadonly<T> = T extends never
//   ? T
//   : { readonly [k in keyof T]: DeepReadonly<T[k]> }
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<any, any>
    ? T[K] extends Function
      ? T[K]
      :DeepReadonly<T[K]>
    :T[K]
}

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
          f: () => 'f'
        },
      ]
    }
  }
}
type ooo = DeepReadonly<X1>
