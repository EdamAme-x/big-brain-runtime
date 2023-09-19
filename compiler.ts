export default function BrainfuckCompiler(code: string, max?: number):  string {
  const codeArray = code.split("");
  const memory = new Uint8Array(max ? max : 30000);
  let pointer = 0;
  let output = "";

  const jsCode = codeArray
    .map((char, index) => {
      switch (char) {
        case ">":
          pointer++;
          return "pointer++;";
        case "<":
          pointer--;
          return "pointer--;";
        case "+":
          return "memory[pointer]++;";
        case "-":
          return "memory[pointer]--;";
        case ".":
          return "output += String.fromCharCode(memory[pointer]);";
        case ",":
          return 'memory[pointer] = prompt("@:")[0].charCodeAt(0) || 0;';
        case "[":
          return "while (memory[pointer]) {";
        case "]":
          return "}";
        default:
          throw Error("\n\nInvalid character: " + char + "\n at: " + index + "\n"); 
      }
    })
    .join("\n");

  eval(jsCode);

  return output;
}
