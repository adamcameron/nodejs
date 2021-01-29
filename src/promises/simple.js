let timeOut = process.argv[2] || 500;
console.log(`mainline code using a timeout of [${timeOut}]`);

console.log("mainline code before new Promise");
myPromise =  new Promise(resolve => {
    console.log("executor code before setTimeout");
    setTimeout(() => {
        console.log("timeout handler before resolve");
        resolve("promise resolved");
        console.log("timeout handler after resolve");
    }, timeOut);
    console.log("executor code after setTimeout");
});
console.log("mainline code after new Promise");

