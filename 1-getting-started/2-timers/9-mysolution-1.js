
const hello = function delay(number){
    
    console.log("Hello world " + number );
    setTimeout(hello, (number +1)*1000, ++number)
}

hello(1)