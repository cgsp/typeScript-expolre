function fn1(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

var args1 = [1, 2]

var args2 = [6, 7, 8, 9]

fn1(...args1) // 1 2 undefined
fn1(...args2) // 6 7 8