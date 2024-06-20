let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2sec')
        resolve();
    }, 2000);
})
p.then((result) => {
    console.log('Promise resolved');
})
p.then((result) => {
    setTimeout(() => {
        console.log('1sec')
    }, 1000)
})
