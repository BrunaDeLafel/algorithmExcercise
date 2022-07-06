/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let wordArr = s.split(' ');
    wordArr = filterWord(wordArr);

    return wordArr.reverse().join(' ');
};

const filterWord = (arr) => {
    let newArr = arr.reduce((pre, curr) => {
        if(curr !== ''){
            pre.push(curr);
        }
        return pre;
    }, []);

    return newArr;
}