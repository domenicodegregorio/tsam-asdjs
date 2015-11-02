function ex_1_I(a) {
    sum = 0;
    for (i = 0; a[i] > -1; i++) {
    sum += a[i];
    }
    return sum;
}

function sumAllR(a) {
    if (a.length == 0) { 
        return 0;
    } else { 
        return a[0] + sumAllR(a.slice(1)); 
    }
}
function ex_1_R (a) {
    return sumAllR (a);
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



