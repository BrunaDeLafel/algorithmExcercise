/**
 * @description 返回a的b次方 OlogN
 * @param a
 * @param b
 */
const powAB = (a, b) => {
    if(b === 1){
        return a;
    }
    if(b === 2){
        return a*a;
    }

    return powAB(powAB(a, b / 2), 2);
}