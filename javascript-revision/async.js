//This code is asynchronous as it does not happen immediately but only after the time is elapsed. It is in sync.
setTimeout(() => {
    console.log('The timer is done.');
}, 2000);

//JavaScript is asynchronous and non-blocking

console.log('JavaScript is non-blocking');

//In a sense here, JavaScript sees an asynchronous function, and it takes it as a callback. Then it utilizes it non-blocking
//nature and moves on to the next synchronous function and then after execution is done, it comes back to the callback!

//Over the course, timers and callbacks are difficult to maintain.

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    fetchData().then(text => {
        return fetchData()
    })
    .then(text2 => {
        console.log(tetx2);
    })
}, 2000);