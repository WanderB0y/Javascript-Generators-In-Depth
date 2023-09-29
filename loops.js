const counter = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator)

let counterObject = counterGenerator.next();

// for ( const _ of counter()){
//     console.log(_)
// }

while(counterObject.done === false){
    console.log(counterObject.value);
    counterObject = counterGenerator.next();
    console.log(counterObject)
}
console.log("All Done")