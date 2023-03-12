type OptionalKeys<T> = {
  [K in keyof T ]-?:{} extends Pick<T,K>? K:never
}[keyof T]


type OptionalKeys1<T> = {
  [K in keyof T ]-?:{} extends Pick<T,K>? T[K]:never
}[keyof T]

type t = OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>
