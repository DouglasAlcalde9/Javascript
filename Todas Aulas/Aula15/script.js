let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(` O vetor tem ${num.length} posições `)
console.log(num)
console.log(`A primeira posição é ${num[0]}`)

let pos = num.indexOf(5)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`A posição  esta na posição ${pos}`)
}
 