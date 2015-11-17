/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo
*/

function ex_1_I(a) {
    sum = 0;
    for (i = 0; a[i] > -1; i++) {
    sum += a[i];
    }
    return sum;
}

function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function sumOdd (n) {
    res = 0;
    for (i = 0; i < n; i++) {
    res += 1 + 2 * i;
    }
    return res;
}
function ex_2_I (n) {
    return sumOdd(n);
}

function sumOddR (n) {
    if (n == 0) {
        return 0;
    } else {
        return sumOddR(n-1) + 2 * n - 1;
    }
}
function ex_2_R (n) {
    return sumOddR(n);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function ex_3_I(a) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
    sum += a[i];
    }
    return sum / a.length;
}

function mediaR(a) {
    if (a.length == 0) { 
        return 0;
    } else { 
        return a[0] + mediaR(a.slice(1)); 
    }
}
function ex_3_R (a) {
    return (mediaR(a) / a.length);
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi allÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢interno dellÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nellÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢intervallo [b,a]
*/

function sumIntervalW(a, b) {
    var tot = 0;
    for(var i = a; i <= b; i++) {
        tot += i;
    }
    return tot;
}

function sumInterval(a, b) {
    if (a < b){
        return sumIntervalW(a, b);
    } else {
        return sumIntervalW(b, a);
    }
}

function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }


}

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
}


// Per Tiziano
function ex_4_I(x, y) {
    return sumInterval(x, y);
}

function ex_4_R(x, y) {
    return sumIntervalR(x, y);
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite lÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢utilizzo del solo
operatore somma.
*/

function moltiplica (x, y)
          {
            var i;
            var z = 0;
            //
            for (i = 1; i <= y; i++)
              {
                z = z + x;
              }
            return z;
        }
//per Tiziano
function ex_5_I(a,b) {
        return moltiplica (a,b);
}

function ex_5_R(a,b){
	return (b>0)?a+ex_5_R(a,--b):0;
}

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
lÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢utilizzo dei soli operatori somma e sottrazione.
*/

function dividi (x, y)
        {
            var z = 0;
            var i = x;
            //
            while (i >= y)
              {
                i = i - y;
                z++;
              }
              a = ([z,(x % y)])
            return a;
        }

        //per Tiziano

function ex_6_I(a,b) {
    return dividi(a,b);
}


function divR(a,b,q){
    return (a-b>=0)?divR(a-b,b,++q):[q,a];
}

function ex_6_R(a,b){
    return divR(a,b,0);
}

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite lÃ¢â‚¬â„¢utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/

function pot (x, y)
        {
            var z = 1;
            var i;
            //
            for (i = 1; i <= y; i++)
              {
                z = z * x;
              }
            return z;
        }

//per Tiziano

function ex_7_I (a,b) {
        return pot(a,b);
}

function ex_7_R(a,b){
    return (b==0)?1:ex_5_R(a,ex_7_R(a,b-1));
}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/


/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire lâ€™ordine degli
elementi.
*/


/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/


/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/

