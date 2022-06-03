let numeros: number[] = [7, 3, 6, 8, 3, 5, 7, 9, 5, 6, 4, 3, 3, 2, 3, 67, 45, 12345, 123, 4123, 456, 23421, 112];
let numeros2: number[] = [2, 3, 1, 5, 4, 6, 7, 0, 1, 10];

let i: number, j: number;
let temp: number;

for (i = 1; i < numeros.length; i++) {
    temp = numeros[i];
    for (j = i; j > 0 && numeros[j - 1] > temp; j--) {
        numeros[j] = numeros[j-1];
    }
    numeros[j] = temp;
}

console.log(numeros);