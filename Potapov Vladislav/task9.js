function countDown(n) {
    var timerId = setInterval(function() {
        if (n < 0)
            clearInterval(timerId);
        else {
            console.log(n);
            n--;
        }
    }, 1000)
}

countDown(3);