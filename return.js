const counter = function* () {
    yield 1;
    yield 2;
    return;
    yield 3;
}

console.log(counter);

const counterGenerator = counter();

console.log(counterGenerator);

for(const _ of counterGenerator){
    console.log(_)
}

console.log(counterGenerator.next())