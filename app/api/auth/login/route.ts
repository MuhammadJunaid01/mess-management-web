import { type NextRequest, NextResponse } from "next/server"

// Mock user data - In production, this would come from a database
const mockUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@mess.com",
    password: "admin123",
    role: "admin",
    messId: "mess-001",
    phone: "+8801712345678",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@mess.com",
    password: "member123",
    role: "member",
    messId: "mess-001",
    phone: "+8801787654321",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find user by email and password
    const user = mockUsers.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      message: "Login successful",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
