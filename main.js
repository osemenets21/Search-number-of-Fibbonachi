function SearchFibbonachi(number){
    if(number<=0){
        return 'Enter a positive number'
    } else if (number === 1 || number === 2) {
        return 1;
    } else {
        let previousNum = 1;
        let currentNumber = 1;

        let fibbonaciNumber;

        for (let i = 3; i <= number; i++){
            fibbonaciNumber = previousNum + currentNumber;
            previousNum = currentNumber;
            currentNumber = fibbonaciNumber;
        }
        return fibbonaciNumber;
    }
}

console.log(SearchFibbonachi(5)); 
