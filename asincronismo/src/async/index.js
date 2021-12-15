const doSomenthingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Do Something ASYNC');
            }, 3000)
            : reject(new Error('Test Error'));
    });
}

const doSomenthing = async () => {
    const something = await doSomenthingAsync();
    console.log(something);
}

console.log('Before');
doSomenthing();
console.log('After');

const anotherFunction = async ()=>{
    try {
        const something = await doSomenthingAsync();
        console.log(something);
    } catch(error) {
        console.error(error);
    }
}

console.log('Before1');
doSomenthing();
console.log('After1');