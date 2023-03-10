type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

// type test = MyReadonly<Todo1>
// type test1 = Readonly<Todo1>
