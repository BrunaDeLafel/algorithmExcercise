const text = (oldarr) => {
    let resultArr = [];
    let usedIndexArr = [];
    let currNum = 0;
    let arr = oldarr.reduce((pre, cur) => {
        let isRea = false;
        for(let item of pre){
            if(item.id === cur.id && item.pId === cur.pId){
                isRea = true
            }
        }
        if (!isRea) {
            return pre.concat(cur);
        } else {
            return pre;
        }
    }, []);

    const helper = (baseNumber, resultArr) => {
        let tempArr = resultArr.slice();
        if(usedIndexArr.length === arr.length){
            return [];
        }
        arr.map((item, index) => {
            if(item.pId === baseNumber && !usedIndexArr.includes(index)){
                usedIndexArr.push(index);
                tempArr.push({id: item.id, pId: item.pId, children: helper(item.id, []) });
            }
        });
        return tempArr;
    }

    arr.map((item, index) => {
        if(!item.hasOwnProperty('pId')){
            usedIndexArr.push(index);
            resultArr.push({ id: item.id, children: helper(item.id, []) });
        }
    });

    return resultArr;
}