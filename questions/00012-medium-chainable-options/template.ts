type Chainable<O={}> = {
  option<K extends string, V>(key: K extends keyof O ? never : K, value: V): Chainable<O & { [P in K]: V }>
  get(): O
}

declare const a1: Chainable

const result1 = a1
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a1
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()
