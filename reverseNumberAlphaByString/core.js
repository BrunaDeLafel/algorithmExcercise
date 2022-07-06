const reverseNumberAlphaByString = (str) => {
    let numberArr = [];
    let alphaArr = [];
    let result = [];

    let tempArr = [];
    let currMode = 'number';
    for(let i = 0;i < str.length;i ++){
        if(Number.isNaN(parseInt(str[i]))){
            if(currMode === 'number'){
                tempArr.length > 0 ? numberArr.push(tempArr.slice().join('')) : null;
                tempArr = [];
            }
            tempArr.push(str[i]);
            currMode = 'string';
            if(str.length - 1 === i){
                alphaArr.push(tempArr.join(''))
            }
        } else {
            if(currMode === 'string'){
                tempArr.length > 0 ? alphaArr.push(tempArr.join('')) : null;
                tempArr = [];
            }
            tempArr.push(str[i]);
            currMode = 'number';
            if(str.length - 1 === i){
                numberArr.push(tempArr.join(''))
            }
        }
    }

    if(Number.isNaN(parseInt(str[0]))){
        for(let i = 0;i < numberArr.length;i ++){
            result.push(numberArr[i]);
            result.push(alphaArr[i]);
        }
    } else {
        for(let i = 0;i < numberArr.length;i ++){
            result.push(alphaArr[i]);
            result.push(numberArr[i]);
        }
    }

    return result.join('');
}

console.log(reverseNumberAlphaByString('123ab456tt'))

// 123 ab 456 tt