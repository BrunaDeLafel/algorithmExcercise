const test = () => {
    const promiseA = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    })

    promiseA.then(value => {
        console.log('promise value: ', value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2)
            }, 1000)
        })
    }).then(value => {
        console.log('promise value: ', value);
    });
}

test();