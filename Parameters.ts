function greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old`)
}

// 🧠 Extract parameter types as a tuple
type GreetArgs = Parameters<typeof greet>

// ✅ Use those inputs somewhere else
const args: GreetArgs = ['Ali', 25]

greet(...args)
