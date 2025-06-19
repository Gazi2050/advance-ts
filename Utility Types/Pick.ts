// 👤 Original full User type
type User = {
    id: number
    name: string
    email: string
    isAdmin: boolean
}

// 🎯 Create a new type with only name and email
type PublicUser = Pick<User, 'name' | 'email'>

// ✅ Now let's use it
const user: PublicUser = {
    name: 'Ali',
    email: 'ali@example.com'
}

// 🖨 Output
console.log('Public User:', user)
