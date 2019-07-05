const hello = (seconds) => {
    console.log("Hello after " + seconds + "seconds");
}

setTimeout(hello, 4*1000, 4)
setTimeout(hello, 8*1000, 8)