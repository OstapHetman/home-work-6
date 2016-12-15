function fibonacci(numeric) {
    if (numeric === 0)
        return 0;
    else if (numeric === 1)
        return 1;
    var equation = fibonacci(numeric - 2) + fibonacci(numeric - 1);
    return equation;
}
var numeric = Number(prompt('Example 1 '+'Enter number: '));
var result = fibonacci(numeric);
alert('Fibonacci number: ' + result);
 ///////////////////////////////////////////////////////////////////
function fibonacci2(num) {
    var fib, num1, num2, i;
    for (i= 1; i <= num; i++) {
        fib = num1 + num2 || 1;
        num1 = num2;
        num2 = fib;
    }
    return fib;
}
var num = Number(prompt('Example 2 '+'Enter number: '));
var result2 = fibonacci2(num);
document.write( 'Fibonacci number: ' + result2);
