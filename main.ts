//@ts-ignore
import BigBrainCompiler from "./bigbrain/scripts/bigbrain.ts";
//@ts-ignore
import BrainfuckCompiler from "./compiler.ts";

//@ts-ignore
BigBrainCompiler(Deno.readTextFileSync(new URL(Deno.args[0], import.meta.url))).then((output: string) => {
    console.log(BrainfuckCompiler(output));
})