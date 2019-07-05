//Solution 1
function test(delay){
    let count = 0;
    const la = setInterval(()=>{
        count = count+1;
        console.log("Hello World " + delay)
        if(count >= 5) {
            delay = delay+100;
            test(delay)
            clearInterval(la)
        }
    }, delay)
}

test(100)
