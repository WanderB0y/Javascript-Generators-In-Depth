  const randomNumber = function* () {
    while(true){
        yield Math.floor(Math.random() * 11)
    }
  }
  let i = 0;
  const randomGenerator = randomNumber();

  while ( i < 10 ){
    console.log(randomGenerator.next().value);
    i++;
  }
i = 0;

for ( const _ of randomGenerator){
    console.log(_);
    i++;
    if( i === 10 ){
        break;
    }
  }