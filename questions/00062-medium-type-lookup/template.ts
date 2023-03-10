type LookUp<U, T> = U extends { type: T } ? U : never
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}
