const O = () => {
    this.publisher = [];
    this.collectCallback = new Map();
}

O.prototype.subscribe = (key, callback) => {
    if(this.collectCallback.has(key)){
        let tempArr = this.collectCallback.get(key);
        tempArr.push(callback);
        this.collectCallback.set(key, tempArr);
    } else {
        this.collectCallback.set(key, [callback]);
    }

    return {
        unsubscribe: () => {
            this.collectCallback.delete(key)
        }
    };
}

O.prototype.publish = (key, ...rest) => {
    if(this.collectCallback.has(key)){
        this.collectCallback.get(key).map(callback => {
            callback(...rest);
        })
    }
}
