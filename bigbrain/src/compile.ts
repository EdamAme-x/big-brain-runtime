import { generateCode } from "./generateCode.ts";
import { parse } from "./parse.ts";
import { tokenize } from "./tokenize.ts";

export function compile(src: string): string {
  const source = stringer(src);
  const tokens = tokenize(source);
  const nodes = parse(tokens);
  const code = generateCode(nodes);
  return code;
}

function stringer(src: string): string {
  return src.replace(/\"(?!\")(.)\"/gmi, (match, p1): string => {
    return p1.charCodeAt(0).toString();
  });
}
