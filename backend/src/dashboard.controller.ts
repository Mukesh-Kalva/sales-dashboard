import { Controller, Get } from '@nestjs/common';

@Controller('api/dashboard')
export class DashboardController {
  @Get('metrics')
  getMetrics() {
    return {
      totalRevenue: 123456,
      revenueChangePercent: 12.3,
      orders: 1024,
      ordersChangePercent: -2.1,
      activeUsers: 5320,
      activeUsersChangePercent: 4.7,
    };
  }

  @Get('revenue')
  getRevenue() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      series: [12000, 15000, 18000, 13000, 20000],
    };
  }

  @Get('customer-satisfaction')
  getCustomerSatisfaction() {
    return { positive: 82, neutral: 10, negative: 8 };
  }

  @Get('visitor-insights')
  getVisitorInsights() {
    return {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      visitors: [1200, 1350, 1600, 900, 2000],
    };
  }

  @Get('top-products')
  getTopProducts() {
    return [
      { id: 1, name: 'Product A', unitsSold: 420, revenue: 42000 },
      { id: 2, name: 'Product B', unitsSold: 360, revenue: 36000 },
    ];
  }
}
