function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world');
        }, 2000);
    });
}

job().then((result) => {
    console.log(result); 
}).catch((error) => {
    console.error(error);
});