type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];
interface Example {
  foo: number;
  bar?: string;
  baz: boolean;
}

type ExampleRequiredKeys = RequiredKeys<Example>

type T2 = { a: undefined; b?: undefined; c: string; d: null }
type test1 =  'b' extends keyof T2 ? 1 :2
type unionTest<A,B>  = A extends B ? true : false

type unionTest1 = unionTest<1,(1 | 2)> //true
type unionTest12 = unionTest<(1|2),(2)> //boolean
