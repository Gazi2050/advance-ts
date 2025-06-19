type User = {
    name: string
    email: string
}

// 👇 Full user (all fields required)
const fullUser: User = {
    name: 'Ali',
    email: 'ali@example.com'
}

console.log('Full user:', fullUser)

// 👇 Partial user — only name
const update1: Partial<User> = {
    name: 'Alicia'
}
console.log('Update 1 (only name):', update1)

// 👇 Partial user — only email
const update2: Partial<User> = {
    email: 'alicia@example.com'
}
console.log('Update 2 (only email):', update2)

// 👇 Partial user — no fields
const update3: Partial<User> = {}
console.log('Update 3 (empty):', update3)
