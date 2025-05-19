Analizador de lenguaje de pilas con ANTLR4 y JavaScript

## INSTALACIÓN 

Para instalar este proyecto debemos clonar el repositorio ejecutando en una ventana de comandos (CMD, POWERSHELL o terminal en Linux) los siguientes comandos en orden (MUY IMPORTANTE SEGUIR BIEN ESTOS PASOS):
```
git clone https://github.com/Tomy-basabe/51910.git
```

```
cd 51910
```
```
cd ssl-antlr-calculator
```
```
code .
```
Este proyecto es un analizador para un lenguaje simple de pilas. Usa ANTLR4 y está hecho en JavaScript. El analizador hace varias cosas:

1. Verifica si el código fuente está escrito correctamente (análisis léxico y sintáctico).
2. Muestra una tabla con los lexemas y sus tokens.
3. Muestra el árbol sintáctico del programa.
4. Traduce el código a JavaScript y lo ejecuta como si fuera un intérprete.

---

Archivos principales

- `Calculator.g4`: la gramática del lenguaje en formato EBNF.
- `CustomCalculatorListener.js`: muestra por consola qué operaciones se detectan.
- `CustomCalculatorVisitor.js`: interpreta el código y también lo traduce a JavaScript.
- `index.js`: archivo principal que hace todo el procesamiento.
- `input.txt`: archivo donde se pone el código a analizar.
- `ejemplo1.txt`, `ejemplo2.txt`, `ejemplo3.txt`: ejemplos para probar.

---

Requisitos

- Tener instalado Node.js
- Tener ANTLR4 (se puede instalar con npm o bajar el `.jar`)

Si usás el `.jar`:

1. Bajá ANTLR desde https://www.antlr.org/
2. Generá los archivos con:ava -jar antlr-4.X-complete.jar -Dlanguage=JavaScript Calculator.g4 -o generated

--

Cómo ejecutar el proyecto

1. Generar los archivos del parser y lexer (si no los tenés generados ya):antlr4 -Dlanguage=JavaScript Calculator.g4 -o generated

2. Instalar la librería de antlr4: npm install antlr4

3. Ejecutar el programa: node index.js


Por defecto, va a leer el archivo `input.txt` y procesarlo.

---

## Archivos de ejemplo

Podés probar cambiando el contenido de `input.txt` con alguno de estos ejemplos:

# ejemplo1.txt (válido)
pila MiPila {
crear([1, 2, 3])!
empujar(4)!
mirar()!
}


# ejemplo2.txt (válido)
pila OtraPila {
crear([])
empujar(10)!
sacar()!
}


# ejemplo3.txt (con error)
pila Fallo {
crear([10, 20, 30)
empujar(40)!
}

# ejemplo4.txt (con error)
pila Mal {
crear([1, 2,])
empujar()!
}

Ese tiene un paréntesis sin cerrar y va a dar un error sintáctico.

así con el ejemplo4.txt que también contiene error()
---

Qué muestra la salida

Cuando ejecutás el programa, te va a mostrar:

- Si la entrada es válida o tiene errores (con línea y columna).
- Una tabla con los lexemas y tokens.
- El árbol sintáctico en formato de texto.
- El código JavaScript generado.
- El resultado de ejecutar ese código en consola.

Por ejemplo, con `input.txt` que contiene:

pila Ejemplo {
crear([10, 20, 30])!
empujar(40)!
mirar()!
sacar()!
mirar()!
}


La salida generada sería algo así:

Entrada válida.

--- Tabla de lexemas y tokens ---
Lexema: 'pila' - Token: PILA
Lexema: 'Ejemplo' - Token: IDENTIFICADOR
...

--- Árbol sintáctico ---
(programa pila Ejemplo { ... })

--- Código traducido a JavaScript ---
let Ejemplo = [10, 20, 30];
Ejemplo.push(40);
console.log(Ejemplo[Ejemplo.length - 1]);
Ejemplo.pop();
console.log(Ejemplo[Ejemplo.length - 1]);

--- Resultado ejecución del código traducido ---
30
20


---

Notas

- Si querés probar otro código, simplemente reemplazá el contenido de `input.txt`.
- Los errores sintácticos y léxicos se muestran con línea y columna para facilitar la corrección.
- El archivo `CustomCalculatorVisitor.js` también tiene una clase `CustomJSGeneratorVisitor` que genera el código en JavaScript directamente.

---

Trabajo práctico para la materia - Analizador de lenguaje con ANTLR4


