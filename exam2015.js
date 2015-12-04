function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

function sumAllR(a) {
    if (a.length == 0) { 
       
        return 0;
    } else { 
        return a[0] + sumAllR(a.slice(1)); 
    }
}

/***************************************************************************/

/* Esercizio Ricorsione (15 punti)
Dato l'array A creato dalla funzione initialArray() sviluppare un algoritmo ricorsivo non di coda 
in javascript che restituisca il numero di elementi presenti in A che corrispondono al valore 5070.*/

function numeroElementi (a) {
	if (a.length == 0) {
		return 0;
	} else if (a[0] == 5070) {
		return 1 + numeroElementi (a.slice(1));
	} else {
		return 0 + numeroElementi (a.slice(1))
	}
}	
	
/*Esercizio filter/map/reduce (15 punti)
Dato l'array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript che restituisca
la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.*/

function sqrSum(myA){
    return Math.sqrt  (myA.filter(x => x  >= 0 && x % 2 == 0) 
              .map(a => a * a)        
              .reduce((acc, x) => acc + x, 0));
}