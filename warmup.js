const countTo10 = function* () {
    let i = 0;
    while (true){
        yield i;
        i++;
        if ( i === 10){
            return yield i;
        }
    }
}

const countGenerator = countTo10();

for ( const _ of countGenerator) {
    console.log(_);
}

