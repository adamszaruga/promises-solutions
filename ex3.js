function addNumbers(x, y) {
    return new Promise(function(resolve, reject){
        if (typeof x != "number" || typeof y != "number") {
            reject("One of your arguments is not a number!")
        } else {
            resolve(x + y)
        }
    });
}

addNumbers(x, y)
    .then(function(answer) {
        console.log(answer);
    })
    .catch(function(error) {
        console.log(error);
    });