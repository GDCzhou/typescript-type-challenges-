type TrimLeft<S> = S extends `${' ' | '\n' | '\t'}${infer T}` ? TrimLeft<T> : S
