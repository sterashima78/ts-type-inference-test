```sh
$ npm run build

> ts-type-test@1.0.0 build
> tsc

$ node dist/index.js example/test.ts 
Inferred type for Hoge: 1 | 2 | 3
Inferred type for Bar: 3 | 4 | 5
Inferred type for Piyo: 1 | 2 | 3 | 4 | 5
Inferred type for Foo: 3
$ node dist/index.js example/external.ts
Inferred type for A: 1 | 3
$ node dist/index.js example/zod.ts 
Inferred type for Data: "a" | "b" | "c" | "d"
Inferred type for Hoge: Promise<"a" | "b" | "c" | "d">[]
```
