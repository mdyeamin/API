function doSomthing() {
    console.log("i'm coding javaScript");
}
console.log('first');
// setTimeout(doSomthing, 6000)
setTimeout(function () {
    console.log('i am using VS code');
}, 5000)
setTimeout(() => {
    console.log('i am exploring MDN airtical');
}, 6000)
console.log('secund');