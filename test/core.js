// a 的 b次方
const powAB1 = (a, b) => {
    let sum = 1;
    for(let i = 0;i < b;i ++){
        sum *= b
    }
}

// 状态转移：f(a, b) = f(a, b/2) * f(a, b/2)
const powAB2 = (a, b) => {
    if(b === 1){
        return a
    }
    if(b === 2){
        return a*a;
    }

    return powAB2(powAB2(a, b / 2), 2);
}