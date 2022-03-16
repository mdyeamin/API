console.log('first');
setInterval(() => {
    // console.log("hello ti's me");
}, 1000);
console.log('secund');

let secunds = 0;

const timeId = setInterval(() => {
    secunds++
    console.log(secunds)
    if (secunds > 15) {
        clearInterval(timeId)
    }
}, 500)