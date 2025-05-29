"use client"

import type React from "react"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Users, UtensilsCrossed, DollarSign, ShoppingCart, ClipboardList, Settings, LogOut } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Meals", href: "/dashboard/meals", icon: UtensilsCrossed },
    { name: "Finances", href: "/dashboard/finances", icon: DollarSign },
    { name: "Grocery", href: "/dashboard/grocery", icon: ShoppingCart },
    { name: "Responsibilities", href: "/dashboard/responsibilities", icon: ClipboardList },
    ...(user.role === "admin"
      ? [
          { name: "Members", href: "/dashboard/members", icon: Users },
          { name: "Settings", href: "/dashboard/settings", icon: Settings },
        ]
      : []),
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-green-600">MessManager</h1>
              <span className="ml-4 text-sm text-gray-500">Welcome, {user.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 capitalize">{user.role}</span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 mb-1"
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
