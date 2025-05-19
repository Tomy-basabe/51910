import CalculatorVisitor from './generated/CalculatorVisitor.js';

export class CustomCalculatorVisitor extends CalculatorVisitor {
  constructor() {
    super();
    this.pilas = {};
  }

  visitPrograma(ctx) {
    this.pilaNombre = ctx.nombre().getText();
    this.pilas[this.pilaNombre] = [];
    return this.visit(ctx.comandos());
  }

  visitCrear(ctx) {
    const lista = this.visit(ctx.lista());
    this.pilas[this.pilaNombre] = lista;
    console.log(`Pila creada: [${lista.join(', ')}]`);
  }

  visitPush(ctx) {
    const val = this.visit(ctx.valor());
    this.pilas[this.pilaNombre].push(val);
    console.log(`Elemento empujado: ${val}`);
  }

  visitPop(ctx) {
    const popped = this.pilas[this.pilaNombre].pop();
    console.log(`Elemento sacado: ${popped}`);
  }

  visitPeek(ctx) {
    const top = this.pilas[this.pilaNombre][this.pilas[this.pilaNombre].length - 1];
    console.log(`Elemento tope: ${top}`);
  }

  visitLista(ctx) {
    if (!ctx.valor()) return [];
    return ctx.valor().map(v => this.visit(v));
  }

  visitValor(ctx) {
    if(ctx.numero()) return parseInt(ctx.numero().getText());
    else return ctx.texto().getText().slice(1, -1);
  }
}

export class CustomJSGeneratorVisitor extends CalculatorVisitor {
  constructor() {
    super();
    this.output = '';
    this.currentPila = '';
  }

  visitPrograma(ctx) {
    const nombre = ctx.nombre().getText();
    this.currentPila = nombre;
    this.output += `let ${nombre} = [];\n`;
    this.visit(ctx.comandos());
    return this.output;
  }

  visitCrear(ctx) {
    const lista = this.visit(ctx.lista());
    this.output += `${this.currentPila} = [${lista.join(', ')}];\n`;
  }

  visitPush(ctx) {
    const val = this.visit(ctx.valor());
    this.output += `${this.currentPila}.push(${val});\n`;
  }

  visitPop(ctx) {
    this.output += `${this.currentPila}.pop();\n`;
  }

  visitPeek(ctx) {
    this.output += `console.log(${this.currentPila}[${this.currentPila}.length - 1]);\n`;
  }

  visitLista(ctx) {
    if (!ctx.valor()) return [];
    return ctx.valor().map(v => this.visit(v));
  }

  visitValor(ctx) {
    if(ctx.numero()) return ctx.numero().getText();
    else return ctx.texto().getText();
  }
}
