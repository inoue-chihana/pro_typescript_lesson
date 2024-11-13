export function lesson1() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // 3の倍数であり、5の倍数でもあるときは整数の代わりにFizzBuzzを出力する
            console.log('FizzBuzz');
        } else if (i % 3 === 0 && i % 5 !== 0) {
            // 3の倍数であり、5の倍数ではないときは整数の代わりにFizzを出力する
            console.log('Fizz');
        } else if (i % 3 !== 0 && i % 5 === 0) {
            // 3の倍数でなく、5の倍数であるときは整数の代わりにBuzzを出力する
            console.log('Buzz');
        } else {
            // 3の倍数でなく、5の倍数でもないときは整数をそのまま出力する
            console.log(i);
        }
    }
}

export function lesson2() {
    let str: string = '';
    const strBlank = ' ';
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // 3の倍数であり、5の倍数でもあるときは整数の代わりにFizzBuzzを出力する
            str += 'FizzBuzz';
        } else if (i % 3 === 0 && i % 5 !== 0) {
            // 3の倍数であり、5の倍数ではないときは整数の代わりにFizzを出力する
            str += 'Fizz';
        } else if (i % 3 !== 0 && i % 5 === 0) {
            // 3の倍数でなく、5の倍数であるときは整数の代わりにBuzzを出力する
            str += 'Buzz';
        } else {
            // 3の倍数でなく、5の倍数でもないときは整数をそのまま出力する
            str += String(i);
        }
        str += strBlank;
        continue;
    }
    console.log(str);
}