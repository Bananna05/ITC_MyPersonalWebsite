function calculate() {
    const n = parseInt(document.getElementById('number').value);
    if (isNaN(n) || n < 1) {
        alert('Please enter a valid number greater than 0');
        return;
    }

    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById('factorialResult').innerText = `Factorial of ${n} is: ${factorial}`;

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);
    document.getElementById('sumResult').innerText = `Sum of first ${n} natural numbers is: ${sum}`;

    let total = 0;
    for (let k = 1; k <= n; k++) {
        total += k;
    }
    const average = total / n;
    document.getElementById('averageResult').innerText = `Average of first ${n} natural numbers is: ${average}`;
}