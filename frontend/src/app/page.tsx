"use client";

import VisitorInsightsChart from "@/components/dashboard/VisitorInsightsChart";

function RevenueCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-2xl shadow-md bg-white p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default function Page() {
  const metrics = {
    revenue: 12500,
    visitors: 3200,
    orders: 850,
    conversionRate: 4.2,
    satisfaction: 92,
  };

  return (
    <main className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <RevenueCard title="Revenue" value={`$${metrics.revenue}`} />
      <RevenueCard title="Visitors" value={metrics.visitors} />
      <RevenueCard title="Orders" value={metrics.orders} />
      <RevenueCard title="Conversion Rate" value={`${metrics.conversionRate}%`} />
      <RevenueCard title="Satisfaction" value={`${metrics.satisfaction}%`} />

      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <VisitorInsightsChart />
      </div>
    </main>
  );
}
