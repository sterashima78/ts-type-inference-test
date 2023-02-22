import * as z from "zod";
const data = z.union([
    z.literal("a"),
    z.literal("b"),
    z.literal("c"),
    z.literal("d"),
])

type Data = z.infer<typeof data>
type Hoge = Array<Promise<Data>>