// 문제: delay 함수를 구현하세요.

const delay = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 4000)
    })
}

const main = async() => {
	console.log('1번')
  	await delay(4)
    // 첫번째 콘솔('1번')이 찍힌 후 4초 후에 찍힘`
  	// output 
  	// '1번'
    // ...4초 후...
  	// '2번!!!'
    console.log('2번!!!')
  };
main();

// <문제> 어떤 데이터의 타입이 array인지 아닌지 판별하세요.
let example01 = []
let example02 = ['Hi']
let example03 = 'Hi'
let example04 = 17

function isArray(v) {
    return Array.isArray(v)
}

function isArray1(v) {
    if(Object.prototype.toString.call(v) === '[object Array]'){
        
    }
}


