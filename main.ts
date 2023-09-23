import BigBrainCompiler from "./bigbrain/scripts/bigbrain.ts";
import BrainfuckCompiler from "./compiler.ts";

BigBrainCompiler(Deno.readTextFileSync(new URL(Deno.args[0], import.meta.url))).then((output: string) => {
    Deno.writeTextFileSync("./" + Deno.args[0].replace(".bb", "") + ".bf", output)
    console.log(BrainfuckCompiler(output));
})
