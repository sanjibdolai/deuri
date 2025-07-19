import { Card } from "@/shadcn/ui/card"
import { CalendarDays, DollarSign, Users, Utensils } from "lucide-react"

const stats = [
  { name: 'Total Bookings', value: '24', icon: CalendarDays },
  { name: 'Total Revenue', value: '$2,340', icon: DollarSign },
  { name: 'Active Users', value: '120', icon: Users },
  { name: 'Menu Items', value: '45', icon: Utensils },
]

function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name} className="p-6">
              <div className="flex items-center gap-4">
                <Icon className="h-8 w-8 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {/* Placeholder for recent bookings */}
            <p className="text-sm text-gray-600">No recent bookings</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Popular Menu Items</h2>
          <div className="space-y-4">
            {/* Placeholder for popular items */}
            <p className="text-sm text-gray-600">No menu items data</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage