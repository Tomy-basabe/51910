import CalculatorListener from './generated/CalculatorListener.js';

export class CustomCalculatorListener extends CalculatorListener {
  enterCrear(ctx) {
    console.log(`Detectada operación crear: ${ctx.getText()}`);
  }

  enterPush(ctx) {
    console.log(`Detectada operación empujar: ${ctx.getText()}`);
  }

  enterPop(ctx) {
    console.log(`Detectada operación sacar: ${ctx.getText()}`);
  }

  enterPeek(ctx) {
    console.log(`Detectada operación mirar: ${ctx.getText()}`);
  }

  enterPrograma(ctx) {
    console.log(`Inicio de programa pila: ${ctx.nombre().getText()}`);
  }
}
