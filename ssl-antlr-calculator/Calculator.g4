grammar Calculator;

programa : 'pila' nombre '{' comandos '}' EOF ;

comandos : operacion* ;

operacion 
    : crear
    | push
    | pop
    | peek
    ;

crear : 'crear' '(' lista ')' '!' ;

push : 'empujar' '(' valor ')' '!' ;

pop : 'sacar' '(' ')' '!' ;

peek : 'mirar' '(' ')' '!' ;

lista : '[' (valor (',' valor)*)? ']' ;

valor 
    : numero
    | texto
    ;

nombre : IDENTIFICADOR ;

numero : DIGITO+ ;

texto : TEXTO ;

IDENTIFICADOR : [a-zA-Z_] [a-zA-Z_0-9]* ;

DIGITO : [0-9] ;

TEXTO : '"' (~["\r\n])* '"' ;

WS : [ \t\r\n]+ -> skip ;
