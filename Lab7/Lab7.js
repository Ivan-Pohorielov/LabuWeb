// Функція для перевірки чи є аргумент числом та чи воно парне
function checkNumber(num) {
    if (typeof num === 'number' && !isNaN(num)) {
        return num % 2 === 0 ? "Парне число" : "Непарне число";
    } else {
        return "";
    }
}

// Функція для знаходження суми перших п'яти простих чисел
function sumOfFirstFivePrimes() {
    let primes = [];
    let num = 2;
    while (primes.length < 5) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        num++;
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

// Функція для обчислення суми ряду чисел
function seriesSum(n) {
    let total = 0;
    let currentNumber = 0;
    for (let i = 1; i <= n; i++) {
        currentNumber = currentNumber * 10 + 1;
        total += currentNumber;
    }
    return total;
}

// Приклади викликів функцій
console.log(checkNumber(10));  // Парне число
console.log(checkNumber(7));   // Непарне число
console.log(checkNumber("abc"));  // Пустий рядок

console.log(sumOfFirstFivePrimes());  // 28

console.log(seriesSum(5));  // 12345
