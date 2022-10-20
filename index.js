function writeCards(names, event) {
    const cardInside = [];
    for (let i = 0; i < names.length; i++) {
     const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     cardInside.push(message);

    };
    return cardInside;
}
console.log(cardInside);


function countDown(posiInteger) {
    let i = posiInteger
    while (i >= 0){
        console.log(i)
        i--; 
    }
}
countDown(10);