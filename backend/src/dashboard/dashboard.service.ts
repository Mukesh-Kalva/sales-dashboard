import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getMetrics() {
    return {
      totalRevenue: 125000,
      totalVisitors: 8900,
      totalOrders: 320,
      conversionRate: 4.5,
    };
  }

  getRevenue() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      data: [12000, 15000, 18000, 20000, 25000],
    };
  }

  getCustomerSatisfaction() {
    return {
      score: 87,
      trend: 'up',
    };
  }

  getVisitorInsights() {
    return {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      data: [55, 35, 10],
    };
  }

  getTopProducts() {
    return [
      { name: 'Product A', sales: 500 },
      { name: 'Product B', sales: 350 },
      { name: 'Product C', sales: 275 },
    ];
  }
}
