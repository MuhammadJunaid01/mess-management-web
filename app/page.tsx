import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, ShoppingCart, ClipboardList } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">MessManager</h1>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Mess Management Solution</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your mess operations with our comprehensive platform designed for Bangladeshi students and
            professionals. Manage meals, finances, groceries, and responsibilities effortlessly.
          </p>
          <Link href="/register">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Managing Your Mess
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Manage Your Mess
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Role-based access control with admin, member, and buyer roles. Support for NID validation and profile
                  management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ClipboardList className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Meal Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track daily meals, automate cost distribution, and generate weekly/monthly summaries with customizable
                  meal types.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-yellow-600 mb-2" />
                <CardTitle>Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time balance calculation, mobile banking integration (bKash, Nagad, Rocket), and comprehensive
                  expense tracking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ShoppingCart className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Grocery & Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart inventory management, automated grocery lists, and role-based purchasing with receipt tracking.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Mess Management?</h3>
          <p className="text-xl text-green-100 mb-8">Join thousands of satisfied users across Bangladesh</p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MessManager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
