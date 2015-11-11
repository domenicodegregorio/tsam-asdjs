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




