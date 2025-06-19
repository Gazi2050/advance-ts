// 🔁 Generic function that works with any type
function wrapInArray<T>(value: T): T[] {
    return [value]
}

// 🧪 Use it with different types
const numArray = wrapInArray(5)
console.log('Number Array:', numArray) // [5]

const strArray = wrapInArray('hi')
console.log('String Array:', strArray) // ['hi']

const boolArray = wrapInArray(true)
console.log('Boolean Array:', boolArray) // [true]
