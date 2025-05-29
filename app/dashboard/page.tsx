"use client"

import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, UtensilsCrossed, ShoppingCart, Users, TrendingUp, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()

  // Mock data - In production, this would come from API calls
  const dashboardData = {
    balance: 1250.5,
    mealsThisMonth: 45,
    totalMembers: 8,
    pendingTasks: 2,
    recentMeals: [
      { date: "2024-01-15", type: "Lunch", cost: 45.5, status: "completed" },
      { date: "2024-01-15", type: "Dinner", cost: 65.0, status: "completed" },
      { date: "2024-01-14", type: "Lunch", cost: 42.0, status: "completed" },
    ],
    recentExpenses: [
      { date: "2024-01-15", description: "Grocery Shopping", amount: 850.0, category: "Food" },
      { date: "2024-01-14", description: "Gas Bill", amount: 120.0, category: "Utilities" },
      { date: "2024-01-13", description: "Rice Purchase", amount: 450.0, category: "Food" },
    ],
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening in your mess today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{dashboardData.balance.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +2.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals This Month</CardTitle>
            <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.mealsThisMonth}</div>
            <p className="text-xs text-muted-foreground">15 days remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalMembers}</div>
            <p className="text-xs text-muted-foreground">Active members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.pendingTasks}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Meals */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Meals</CardTitle>
            <CardDescription>Your latest meal activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentMeals.map((meal, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{meal.type}</p>
                    <p className="text-sm text-gray-500">{meal.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">৳{meal.cost.toFixed(2)}</p>
                    <Badge variant="secondary" className="text-xs">
                      {meal.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Expenses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>Latest mess expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentExpenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{expense.description}</p>
                    <p className="text-sm text-gray-500">{expense.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">৳{expense.amount.toFixed(2)}</p>
                    <Badge variant="outline" className="text-xs">
                      {expense.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      {user?.role === "admin" && (
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <UtensilsCrossed className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-medium">Add Meal Entry</h3>
                <p className="text-sm text-gray-500">Record today's meals</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <ShoppingCart className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-medium">Add Expense</h3>
                <p className="text-sm text-gray-500">Record new expenses</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <Users className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-medium">Manage Members</h3>
                <p className="text-sm text-gray-500">Add or edit members</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
