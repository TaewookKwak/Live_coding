// 문제: array 중복 제거


const exampleArray = [4, 2, 9, 2, 4, 6, 8, 9]

const removeDuplicated = [...new Set(exampleArray)]
const removeDuplicated2 = exampleArray.filter((v) => exampleArray.indexOf(v) === index )