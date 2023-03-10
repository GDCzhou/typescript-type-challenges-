type Shift<T extends unknown[]> = T extends [infer _F, ...infer R] ? R : never
