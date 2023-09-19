//@ts-ignore
import { compile } from "../src/compile.ts";

declare module process {
  export const argv: string[];
};

export default async function main(src: string): Promise<string> {
  const code = compile(src);

  return code;
}