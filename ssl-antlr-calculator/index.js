import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from 'antlr4';
import fs from 'fs';
import readline from 'readline';
import vm from 'vm';

import CalculatorLexer from './generated/CalculatorLexer.js';
import CalculatorParser from './generated/CalculatorParser.js';
import { CustomCalculatorVisitor, CustomJSGeneratorVisitor } from './CustomCalculatorVisitor.js';
import { CustomCalculatorListener } from './CustomCalculatorListener.js';

async function main() {
  let input;
  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch {
    input = await askInput('Ingrese código fuente: ');
  }

  const chars = CharStreams.fromString(input);
  const lexer = new CalculatorLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new CalculatorParser(tokens);

  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
    }
  });

  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      console.error(`Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
    }
  });

  const tree = parser.programa();

  if (parser._syntaxErrors > 0) {
    console.log('Se encontraron errores de sintaxis, no se procesa.');
    return;
  }

  console.log('Entrada válida.\n');

  // Tabla lexemas-tokens
  console.log('--- Tabla de lexemas y tokens ---');
  tokens.fill();
  tokens.getTokens().forEach(token => {
    if(token.type !== -1)
      console.log(`Lexema: '${token.text}' - Token: ${lexer.symbolicNames[token.type]}`);
  });

  // Árbol sintáctico
  console.log('\n--- Árbol sintáctico ---');
  console.log(tree.toStringTree(parser.ruleNames));

  // Listener para logs
  const listener = new CustomCalculatorListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);

  // Visitor para interpretación directa
  const visitor = new CustomCalculatorVisitor();
  visitor.visit(tree);

  // Visitor para generar código JS
  const generator = new CustomJSGeneratorVisitor();
  const codigoJS = generator.visit(tree);

  console.log('\n--- Código traducido a JavaScript ---\n');
  console.log(codigoJS);

  // Ejecutar el código JS generado
  console.log('\n--- Resultado ejecución del código traducido ---');
  try {
    const context = {};
    vm.createContext(context);
    vm.runInContext(codigoJS, context);
  } catch (e) {
    console.error('Error ejecutando código JS generado:', e);
  }
}

function askInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(question, answer => {
    rl.close();
    resolve(answer);
  }));
}

main();
