let numeros: number[] = [7, 3, 6, 8, 3, 5, 7, 9, 5, 6, 4, 3, 3, 2, 3, 67, 45, 12345, 123, 4123, 456, 23421, 112];
let numeros2: number[] = [2, 3, 1, 5, 4, 6, 7, 0, 1, 10];

let maxNum:number = 0;

for (let i = 0; i < numeros2.length; i++) {
    const value = numeros2[i];
    if(maxNum < value) maxNum = value;
}

const tempArray = new Array<number>(maxNum + 1);
for (let i = 0; i < numeros2.length; i++) {
    const value = numeros2[i];
    if(!tempArray[value])  tempArray[value] = 0;

    tempArray[value]++;
}

const resultArray = Array<number>();
for (let index = 0; index < tempArray.length; index++) {    
    while(tempArray[index] > 0) {
        resultArray.push(index);
        tempArray[index]--;
    }
}

const valueAny = (2**32)-1; // 4294967296
console.log("with for solution", resultArray, {valueAny});