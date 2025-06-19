function getUser() {
    return {
        name: 'Ali',
        age: 25
    }
}

// 🔁 Get return type from function
type User = ReturnType<typeof getUser>

const person: User = {
    name: 'Alicia',
    age: 30
}

console.log('Person:', person)
