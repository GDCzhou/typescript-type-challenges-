type First<T extends any[]> = T extends [infer F, ...infer _R] ? F : never

type TC = First<[3, 2, 1]>
