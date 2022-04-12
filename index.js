const Arr = [2,3,-5,-2,4]

function adjacentElementsProduct(inputArr){
    let sum= 1
    let temp = [] 
        for (let i = 0; i < inputArr.length; i++) {
            sum *= inputArr[i]
            temp.push(sum)
            sum = inputArr[i]
        }
        temp.splice(0, 1)
        let max = temp[0]
        for(let j = 0 ; j <temp.length ; j++) {
            if (max < temp[j]) {
                max = temp[j];
            }
        }
        console.log(" max " + max);
    return inputArr
}

adjacentElementsProduct(Arr)