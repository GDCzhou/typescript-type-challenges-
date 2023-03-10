type TrimRight<S extends string> = S extends `${infer T}${WordSpace}`? TrimRight<T>: S
