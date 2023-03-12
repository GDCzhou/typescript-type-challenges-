
type arr = [0.123, 0.456, 0.789, 0.321, 0.654];

// type dfsf = Slice<arr>

// type arr1 = arr extends [infer One,1, ...infer B] ?  B : false
type arr1 = Indexes<arr>

type AnyArray = readonly unknown[]

/**
 * Indexes<[7, 9, -3]> = 0 | 1 | 2 | 3.
 */
type Indexes<A extends AnyArray> = A extends [infer Head, ...infer Tail]
  ? (A['length'] | Indexes<Tail>)
  : 0

/**
 * NextIndexMap<[4, 5, 7]> = [1, 2, 3].
 */
type NextIndexMap<A extends AnyArray> = A extends [infer Head, ...infer Tail]
  ? [...NextIndexMap<Tail>, A['length']]
  : []

/**
 * ReverseIndexMap<[8, 41, 5]> = [3, 2, 1].
 */
type ReverseIndexMap<A extends AnyArray> = A extends [infer Head, ...infer Tail]
  ? [A['length'], ...ReverseIndexMap<Tail>]
  : []

/**
 * NegativeIndexesMap<[8, 9, 2]> = { -2: 1, -3: 0, -1: 2 }.
 */
type NegativeIndexesMap<A extends AnyArray, Reverse = ReverseIndexMap<A>> = {
  [K in Exclude<Indexes<A>, 0> as `-${K}`]: K extends A['length'] ? 0 :
    K extends keyof Reverse ? Reverse[K] : never
}

/**
 * PositiveIndex<-2, [4, 5, 6]> = 1, PositiveIndex<1, [4, 5, 6]> = 1,
 * PositiveIndex<4, [4, 5, 6]> = never.
 */
type PositiveIndex<
  I extends number,
  A extends AnyArray,
  NegativeMap extends Record<number, never> = NegativeIndexesMap<A> & Record<number, never>
> = I extends Indexes<A> ? I : NegativeMap[I]

/**
 * SliceWithPositiveArgs<[5, 6, 7], 1, 3> = [6, 7].
 */
type SliceWithPositiveArgs<
  A extends AnyArray,
  S extends number,
  E extends number,
  NextS extends number = NextIndexMap<A>[S]
> = S extends E ? [] :
  S extends A['length'] ? never :
  [A[S], ...SliceWithPositiveArgs<A, NextS, E>]

type Slice<
  A extends AnyArray,
  Start extends number = 0,
  End extends number = A['length'],
  S = PositiveIndex<Start, A>,
  E = PositiveIndex<End, A>,
  Result = SliceWithPositiveArgs<A, S & number, E & number>
> = [Result] extends [never] ? [] : Result
