// 문제 1
sum(1)(2)(); /// 3
sum(1)(2)(3)(4)(); // 10

// 문제 2
mul(2)(3)(4); // 24
mul(4)(3)(4); // 48


const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a+b)
        }
        return a
    }
}

function mul (a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}


// 문제 3
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase (a) {
    return function (b) {
        return a + b
    }
}