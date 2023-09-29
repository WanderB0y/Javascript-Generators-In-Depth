const counter = function* () {

    console.log("naTATE NA ME")

    yield 1;
    yield 2;
    yield 3;
};

console.log(counter);

const counterGenerator = counter();

// console.log(counterGenerator.next());
// console.log(counterGenerator.next());
// console.log(counterGenerator.next());
// console.log(counterGenerator.next());

 

