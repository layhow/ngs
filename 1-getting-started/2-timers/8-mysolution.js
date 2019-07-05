let count = 1;
const repeat = () => {
    console.log(count)
    count = count+1;
    console.log("Hello world");
    return;
}

let x = setInterval(() => {
    console.log(count)
    count = count+1;
    
    console.log("Hello world");
    if(count >5) clearInterval(x)
}, 1 * 1000)


