import { Type, Static } from "@sinclair/typebox";


const data = Type.Union([
    Type.Literal("a"),
    Type.Literal("b"),
    Type.Literal("c"),
    Type.Literal("d"),
])

type Data = Static<typeof data>
type Hoge = Array<Promise<Data>>