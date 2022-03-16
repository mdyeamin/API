// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
function setTime(name) {
    console.log(name);
}
setTimeout(() => {
    setTime(('hello'))
}, 3500);
console.log(11111);
console.log(22222);