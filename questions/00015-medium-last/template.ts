type Last<T extends any[]> = T extends [...infer _F, infer R] ? R : never
