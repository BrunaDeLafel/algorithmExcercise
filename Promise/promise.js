const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

const MyPromise = (fn) => {
    this.state = PENDING;
    this.result = null;

    const onFulfilled = (value) => {
        transition(this, FULFILLED, value);
    }
    const onRejected = (reason) => {
        transition(this, REJECTED, reason);
    }

    let ignore = false;

    const resolve = (value) => {
        if(ignore) return;
        ignore = true;
        onFulfilled(value)
    }
    const reject = (reason) => {
        onRejected(value)
    }

    try {
       fn(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

MyPromise.prototype.then = (value) => {

}

// transition 核心函数
const transition = (promise, state, value) => {
    
}