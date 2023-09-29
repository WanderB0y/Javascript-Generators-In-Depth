const getRandomNumber = function* (){
    for ( let i = 0; i < 5; i++){
        yield Math.floor(Math.random() * 11);
    }
}

const groceryLists = function* () {
    let groceries = ["Avocado", "Cookie", "Soda", "Soup", "Milk"];
    const groceriesLength = groceries.length
    for ( let i = 0; i < groceriesLength; i++){
        let randomNum = Math.floor(Math.random() * groceries.length);
        let removedItem = groceries.splice(randomNum, 1)[0];

        /* 
            for ( let i = 0; i < groceries.length; i++){
                if (groceries[i] === randomGrocery){
                    const temp = groceries[groceries.length - 1];
                    groceries[groceries.length - 1] = groceries[i];
                    groceries[i] = temp;
                    groceries.pop();
                }
            }
        console.log(groceries); */

        yield removedItem;
    }
}

const groceriesGenerator = groceryLists();
const randomGenerator = getRandomNumber();



for ( let i = 0; i < 5; i++){
    console.log( randomGenerator.next().value ,groceriesGenerator.next().value)

}