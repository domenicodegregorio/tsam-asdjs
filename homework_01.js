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
