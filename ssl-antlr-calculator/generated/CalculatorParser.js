// Generated from c:/Users/hp/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,17,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,2,1,2,1,2,1,2,3,2,42,8,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,70,8,7,10,7,12,7,73,9,7,3,7,75,8,7,
1,7,1,7,1,8,1,8,3,8,81,8,8,1,9,1,9,1,10,4,10,86,8,10,11,10,12,10,87,1,11,
1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,0,87,0,24,1,0,0,0,2,34,
1,0,0,0,4,41,1,0,0,0,6,43,1,0,0,0,8,49,1,0,0,0,10,55,1,0,0,0,12,60,1,0,0,
0,14,65,1,0,0,0,16,80,1,0,0,0,18,82,1,0,0,0,20,85,1,0,0,0,22,89,1,0,0,0,
24,25,5,1,0,0,25,26,3,18,9,0,26,27,5,2,0,0,27,28,3,2,1,0,28,29,5,3,0,0,29,
30,5,0,0,1,30,1,1,0,0,0,31,33,3,4,2,0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,
1,0,0,0,34,35,1,0,0,0,35,3,1,0,0,0,36,34,1,0,0,0,37,42,3,6,3,0,38,42,3,8,
4,0,39,42,3,10,5,0,40,42,3,12,6,0,41,37,1,0,0,0,41,38,1,0,0,0,41,39,1,0,
0,0,41,40,1,0,0,0,42,5,1,0,0,0,43,44,5,4,0,0,44,45,5,5,0,0,45,46,3,14,7,
0,46,47,5,6,0,0,47,48,5,7,0,0,48,7,1,0,0,0,49,50,5,8,0,0,50,51,5,5,0,0,51,
52,3,16,8,0,52,53,5,6,0,0,53,54,5,7,0,0,54,9,1,0,0,0,55,56,5,9,0,0,56,57,
5,5,0,0,57,58,5,6,0,0,58,59,5,7,0,0,59,11,1,0,0,0,60,61,5,10,0,0,61,62,5,
5,0,0,62,63,5,6,0,0,63,64,5,7,0,0,64,13,1,0,0,0,65,74,5,11,0,0,66,71,3,16,
8,0,67,68,5,12,0,0,68,70,3,16,8,0,69,67,1,0,0,0,70,73,1,0,0,0,71,69,1,0,
0,0,71,72,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,74,66,1,0,0,0,74,75,1,0,0,
0,75,76,1,0,0,0,76,77,5,13,0,0,77,15,1,0,0,0,78,81,3,20,10,0,79,81,3,22,
11,0,80,78,1,0,0,0,80,79,1,0,0,0,81,17,1,0,0,0,82,83,5,14,0,0,83,19,1,0,
0,0,84,86,5,15,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,
0,88,21,1,0,0,0,89,90,5,16,0,0,90,23,1,0,0,0,6,34,41,71,74,80,87];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'pila'", "'{'", "'}'", "'crear'", "'('", 
                            "')'", "'!'", "'empujar'", "'sacar'", "'mirar'", 
                            "'['", "','", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "IDENTIFICADOR", 
                             "DIGITO", "TEXTO", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "push", 
                         "pop", "peek", "lista", "valor", "nombre", "numero", 
                         "texto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(CalculatorParser.T__0);
	        this.state = 25;
	        this.nombre();
	        this.state = 26;
	        this.match(CalculatorParser.T__1);
	        this.state = 27;
	        this.comandos();
	        this.state = 28;
	        this.match(CalculatorParser.T__2);
	        this.state = 29;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1808) !== 0)) {
	            this.state = 31;
	            this.operacion();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_operacion);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.crear();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.push();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.pop();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.peek();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(CalculatorParser.T__3);
	        this.state = 44;
	        this.match(CalculatorParser.T__4);
	        this.state = 45;
	        this.lista();
	        this.state = 46;
	        this.match(CalculatorParser.T__5);
	        this.state = 47;
	        this.match(CalculatorParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(CalculatorParser.T__7);
	        this.state = 50;
	        this.match(CalculatorParser.T__4);
	        this.state = 51;
	        this.valor();
	        this.state = 52;
	        this.match(CalculatorParser.T__5);
	        this.state = 53;
	        this.match(CalculatorParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(CalculatorParser.T__8);
	        this.state = 56;
	        this.match(CalculatorParser.T__4);
	        this.state = 57;
	        this.match(CalculatorParser.T__5);
	        this.state = 58;
	        this.match(CalculatorParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(CalculatorParser.T__9);
	        this.state = 61;
	        this.match(CalculatorParser.T__4);
	        this.state = 62;
	        this.match(CalculatorParser.T__5);
	        this.state = 63;
	        this.match(CalculatorParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(CalculatorParser.T__10);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===16) {
	            this.state = 66;
	            this.valor();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 67;
	                this.match(CalculatorParser.T__11);
	                this.state = 68;
	                this.valor();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 76;
	        this.match(CalculatorParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_valor);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.numero();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.texto();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(CalculatorParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.match(CalculatorParser.DIGITO);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CalculatorParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(CalculatorParser.TEXTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.T__9 = 10;
CalculatorParser.T__10 = 11;
CalculatorParser.T__11 = 12;
CalculatorParser.T__12 = 13;
CalculatorParser.IDENTIFICADOR = 14;
CalculatorParser.DIGITO = 15;
CalculatorParser.TEXTO = 16;
CalculatorParser.WS = 17;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_comandos = 1;
CalculatorParser.RULE_operacion = 2;
CalculatorParser.RULE_crear = 3;
CalculatorParser.RULE_push = 4;
CalculatorParser.RULE_pop = 5;
CalculatorParser.RULE_peek = 6;
CalculatorParser.RULE_lista = 7;
CalculatorParser.RULE_valor = 8;
CalculatorParser.RULE_nombre = 9;
CalculatorParser.RULE_numero = 10;
CalculatorParser.RULE_texto = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_operacion;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_crear;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_push;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_pop;
    }


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_peek;
    }


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_nombre;
    }

	IDENTIFICADOR() {
	    return this.getToken(CalculatorParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.DIGITO);
	    } else {
	        return this.getToken(CalculatorParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(CalculatorParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.ComandosContext = ComandosContext; 
CalculatorParser.OperacionContext = OperacionContext; 
CalculatorParser.CrearContext = CrearContext; 
CalculatorParser.PushContext = PushContext; 
CalculatorParser.PopContext = PopContext; 
CalculatorParser.PeekContext = PeekContext; 
CalculatorParser.ListaContext = ListaContext; 
CalculatorParser.ValorContext = ValorContext; 
CalculatorParser.NombreContext = NombreContext; 
CalculatorParser.NumeroContext = NumeroContext; 
CalculatorParser.TextoContext = TextoContext; 
