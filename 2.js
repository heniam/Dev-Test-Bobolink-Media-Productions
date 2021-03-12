// Asssumption: number is +ve integer 

function check(num) {
    if (num % 2 == 0) {
        return 'foo'
    } else if (num % 7 == 0) {
        return 'bar'
    } else if (num % 14 == 0) {
        return 'foobar'
    } else return num;
}


console.log(check(44));