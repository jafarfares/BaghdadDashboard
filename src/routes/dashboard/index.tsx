import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      <p className="text-muted-foreground">Welcome to your new dashboard layout.</p>
    </div>
  )
}
