console.log(11111);
console.log(22222);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(33333);
console.log(44444);

for (let i = 0; i < 1000; i++) {
    console.log(i);
}