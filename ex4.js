let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout(() => {
        var drop = Math.random();
        if (drop < 0.5) {
            console.log("Landed butter-side up!")
            success();
        } else {
            console.log("Landed butter-side down...")
            failure();
        }
    }, 2000);
}


let dropToastPromisified = () => {
    return new Promise((resolve, reject) => {
        dropButteredToastOnFloor(resolve, reject);
    });
}


dropToastPromisified()
    .then(() => {
        alert('Whew, that was close!');
    }).catch(() => {
        alert('Well shucks, there goes my toast...');
    });