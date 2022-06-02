let numeros: number[] = [7, 3, 6, 8, 3, 5, 7, 9, 5, 6, 4, 3, 3, 2, 3, 67, 45, 12345, 123, 4123, 456, 23421, 112];
let numeros2: number[] = [2, 3, 1, 5, 4, 6, 7, 0, 1, 10];

let maxNum: number = 0;

for (let i = 0; i < numeros2.length; i++) {
    const numero = numeros2[i];
    if (maxNum < numero) maxNum = numero;
}

const tempArray = new Array<number>(maxNum + 1);
for (let i = 0; i < tempArray.length; i++) {
    tempArray[i] = 0;
}
console.log(tempArray)

for (let i = 0; i < numeros2.length; i++) {
    const value = numeros2[i];
    // if (!tempArray[value]) tempArray[value] = 0;

    tempArray[value]++;
}

const resultArray: number[] = [];
for (let i = 0; i < tempArray.length; i++) {
    while (tempArray[i] > 0) {
        resultArray.push(i);
        tempArray[i]--;
    }
}

console.log("with for solution", resultArray);


let maxNumero: number = 0;

numeros2.forEach(numero => {
    if (maxNumero < numero) maxNum = numero;
});

const tempArray2 = new Array<number>(maxNumero + 1);
numeros2.forEach(numero => {
    if(!tempArray2[numero]) tempArray2[numero] = 0;
    tempArray2[numero]++;
});
console.log(tempArray2);

const resultArray2:number[] = [];
tempArray2.forEach((temArr, index) => {    
    while(tempArray2[index] > 0) {
        resultArray2.push(index);
        tempArray2[index]--;
    }
});

console.log("with for forEach", resultArray2);