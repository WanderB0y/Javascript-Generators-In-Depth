const randomAmountFromRange = function* (amount, min, max){

    let i = 0;
    while ( i < amount){
        yield Math.floor(Math.random() * (max - min) + min);
        i++
    }
}

const randomAmountFromResultA = randomAmountFromRange(3, 10, 20);
const randomAmountFromResultB = randomAmountFromRange(5, 100, 200);
const randomAmountFromResultC = randomAmountFromRange(10, 1000, 2000);

const arrRandomAmount = [randomAmountFromResultA, randomAmountFromResultB, randomAmountFromResultC];

let i = 0;

while (true){
    if ( i === arrRandomAmount.length) {
        break;
    }
    console.log("--------------")
    for ( const _ of arrRandomAmount[i]){
        console.log(_)
    }
    i++;
}
