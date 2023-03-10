declare function PromiseAll<T extends unknown[]>(values: readonly [...T]):
Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>

type tuple1 = ['q', 'w', 'e', 'r']

type TuA<T extends string[]> = {
  [K in keyof T]: T[K]
}

type td = TuA<tuple1> // ['q', 'w', 'e', 'r']
