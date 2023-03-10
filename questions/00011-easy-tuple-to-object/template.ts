type TupleToObject<T extends readonly (number|string)[]> = {
  [K in T[number]]: K
}
