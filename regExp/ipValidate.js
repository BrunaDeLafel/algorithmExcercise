/**
 * @description ip地址的校验
 * @param ip
 */
const ipValidate = (ip) => {
    const ruleRegExp = /^[A-Za-z][0-9]?/;

    return ruleRegExp.test(ip)
}

console.log(ipValidate('a9'));
console.log(ipValidate('aq90'));