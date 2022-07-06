/**
 * @description 实现promise all方法
 * @param args
 * @returns {Promise<unknown>}
 * @constructor
 */
const PromiseAll = (args) => {
    // all 方法最终return Promise实例
    return new Promise((resolve, reject) => {
        const promiseResult = [];
        let iteratorIndex = 0;
        let fullCount = 0;

        // 开始遍历args内部的值
        // 1. 是promise对象
        // 2. 非promise对象
        for(let item of args){
            let resultIndex = iteratorIndex;
            iteratorIndex += 1;

            Promise.resolve(item).then(res => {
                promiseResult[resultIndex] = res;
                fullCount += 1;

                if(fullCount === resultIndex + 1){
                    resolve(promiseResult)
                }
            }).catch(err => {
                reject(err);
            });
        }

        if(iteratorIndex === 0){
            resolve(promiseResult);
        }
    });
}