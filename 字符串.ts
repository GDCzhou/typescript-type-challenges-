type str = 'abcd'

// 获取第一个字母
type GetFristStr<S> = S extends `${infer Frist}${infer _Rest}` ? Frist : never
type tests1 = GetFristStr<str> // 'a'

// 获取剩余的
type GetLastStr<S> = S extends `${infer _Frist}${infer Rest}` ? Rest : never
type tests2 = GetLastStr<str> // "bcd"

// 首字母大写
type FirstStrUppercase<S> = S extends `${infer Frist}${infer _Rest}` ? `${Uppercase<Frist>}${_Rest}` : never
type tests3 = FirstStrUppercase<str> // "Abcd"

// 文本替换
type ReplaceOne<S, F extends string, T extends string> = S extends `${infer Frist}${F}${infer Rest}`
  ? `${Frist}${T}${Rest}`: never
type tests4 = ReplaceOne<str, 'b', '1'> // "a1cd"

// 键值对转化
type KeyValueTransfrom<S> = S extends `${infer key}=${infer value}` ? { [K in key]: value } : never
type tests5 = KeyValueTransfrom<'A=1'> // {A: "1"};

// 索引大写
interface Obj {
  aaa: 1
  bbb: 2
  func: () => true
}
type UpperKey<T extends Object> = {
  [K in keyof T as K extends string ? Uppercase<K> : never]: T[K]
}
type test6 = UpperKey<Obj>

// 获取函数索引
type GetFunKey<T extends Object> = {
  [K in keyof T as T[K] extends Function ? K: never]: T[K]
}
type test7 = GetFunKey<Obj>
/**
 * type test7 = {
    func: () => true;
  }
 */

// 合并key
interface A {
  a: string
  b: number
}
interface B {
  c: string
  d: number
  func: () => 1
}
type CombinKey<A, B> = {
  [T in keyof (A & B)]: T extends keyof A ? A[T] : T extends keyof B ? B[T] : never
}
type test8 = CombinKey<A, B>

// 巧用递归
// ReplaceAll
type ReplaceAll1<S extends string, F extends string, T extends string> =
  S extends `${infer First}${F}${infer Rest}`
    ? `${First}${T}${ReplaceAll1<Rest, F, T>}`
    : S
type test9 = ReplaceAll1<'aaaaddddccc111efdsa', 'a', '@'>
type testdd = ReplaceAll1<'HELLO_WORLD_WITH_TYPES', '_', ''>

// 字符串反转
type Reverse1<S extends string> = S extends `${infer First}${infer Rest}` ? `${Reverse1<Rest>}${First}` : S
type test10 = Reverse1<'123456'>

// 综合
// 字符串解析
type str1 = 'a=1&b=2&c=3&d=4'
type ParseStr<S extends string,
Init extends Record<string, any> = {},
> = S extends `${infer front}&${infer last}`
  ? ParseStr<last, CombinKey<Init, KeyValueTransfrom<front>>>
  : CombinKey<Init, KeyValueTransfrom<S>>
type test11 = ParseStr<str1>
