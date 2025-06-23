// 문제: 문자열의 중복 요소를 제거한 뒤 출력하세요.
const exampleStr = 'aabbbeedudaacca'
const arr =  [...new Set([...exampleStr])].join("")


// 문제: 주어진 문자열을 뒤집어 출력하세요. 글자별로 뒤집기/ 단어별로 뒤집기
let string = "Hello! Welcome to my Velog. Ask me anything.";
[...string].reverse().join("")


// 문제: 숫자형 array를 매개변수로 갖게 하고, Math.max를 활용해 최댓값을 출력하세요. (단, 스프레드 연산자를 쓰지 않고)
const exampleArray = [4, 2, 8, 1, 1, 3]
Math.max.apply(null, exampleArray)