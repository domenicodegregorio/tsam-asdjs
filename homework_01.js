function ex_1_I(a) {
    sum = 0;
    for (i = 0; a[i] > -1; i++) {
    sum += a[i];
    }
    return sum;
}

function ex_5_I(a) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
    sum += a[i];
    }
    return sum / a.length;
}
