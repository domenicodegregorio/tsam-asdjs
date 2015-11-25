/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo
*/

function ex_1_F(myArray){
	var sum = 0;
	myArray.every(x => {
		if(x>0)
			sum += x;
		return x>0
	});
	return sum;
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function ex_2_F(n){	
	var a = [];
	var sum = 0;
	for(var i=1;i<=n;i++){
		a[i-1] = 2*i-1;
	}
	a.every(x => sum += x);
	return sum;
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function ex_3_F(myArray){
	var avg = 0;
		myArray.every(x => avg += x);
	return avg/myArray.length;
}

/*
+Esercizio 4
+Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
+compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
+calcolare la somma nell’intervallo [b,a]
+Esempio:
+sumInterval(3, 5) => 12
+sumInterval(5, 3) => 12
+*/

function g(a, b) {
    myarray = [];
    for( i = 0; i <= b-a && b>a; ++i){
       myarray[i] = a+i; 
    }
    return myarray;
}
function sum(a,b){
    return g(a, b).reduce((acc,x) => acc + x, 0);
}


function ex_4_F(a,b){
    return sum (a,b);
}
    
       
    




/*Esercizio 5
+Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
+operatore somma.
+Esempio:
+mult(2, 3) => 6
+*/

function h(a,b){
    myarray = [];
    for( i = 0; i < a; ++i){
        myarray[i] = b;
    }
    return myarray;
}

function mult(a,b){
    return h(a, b).reduce((acc,x) => acc +x,0);
}

function ex_5_F(a,b){
    return mult(a,b);
}





/*Esercizio 7
+Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
+operatori somma, sottrazione e della funzione mult.
+*/

function j(a,b){
    myarray = [];
    for ( i = 0; i < b && a>0 && b>0; ++i){
        myarray[i] = a;
    }
    return myarray;
}

function mult(a,b){
    return j(a,b).reduce((acc,x) =>acc*x,1);
}


function ex_7_F(a,b){
    return mult(a,b);
}




/*Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}
*/

function d(a,b){
    myarray = [];
    for( i = 0; i < b; ++i){
        myarray[i] = a;
    }
    return myarray;
}
 function replicate(a,b){
     return d(a,b).map(x => x);
 }


 function ex_10_F(a,b){
     return replicate(a,b);
 }


/*Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/

function ft(myarray){
    array1 = [];
    array2 = [];
    myarray.forEach( x =>{
        if ( x%2 == 0){
            array1.push(x);
        } if( x%2 != 0){
            array2.push(x);
        }
    });

    return array2.concat(array1);
 }   
           
function ex_11_F(myarray){
    return ft(myarray);
}