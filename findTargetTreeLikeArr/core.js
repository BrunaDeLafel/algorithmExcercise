/**
 * @description 从类似树状的tree中，找到目标值
 * @param id
 * @returns {*}
 */
const findTargetTreeLikeArr = (id) => {
    const result = [];

    const helper = (arr, path) => {
        // 回溯寻找路径
        for(let i = 0;i < arr.length;i ++){
            if(arr[i].id === id){
                path.push(arr[i].id);
                result.push(path.slice());
                break;
            } else {
                path.push(arr[i].id);
                if(arr[i].hasOwnProperty('children')) {
                    helper(arr[i].children, path);
                }
                path.pop();
            }
        }
    }

    helper(data, []);

    return result[0];
}

const data = [
    {
        id: 1,
        name: 'a',
        children: [
            {
                id: 11,
                name: 'aa',
                children: [
                    {
                        id: 111,
                        name: 'aaa',
                    },
                    {
                        id: 112,
                        name: 'aab',
                    }
                ]
            },
            {
                id: 12,
                name: 'ab',
                children: [
                    {
                        id: 121,
                        name: 'aba',
                    },
                    {
                        id: 122,
                        name: 'abb',
                    }
                ]
            }
        ]
    }
]