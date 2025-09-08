export declare class DashboardController {
    getMetrics(): {
        totalRevenue: number;
        revenueChangePercent: number;
        orders: number;
        ordersChangePercent: number;
        activeUsers: number;
        activeUsersChangePercent: number;
    };
    getRevenue(): {
        labels: string[];
        series: number[];
    };
    getCustomerSatisfaction(): {
        positive: number;
        neutral: number;
        negative: number;
    };
    getVisitorInsights(): {
        labels: string[];
        visitors: number[];
    };
    getTopProducts(): {
        id: number;
        name: string;
        unitsSold: number;
        revenue: number;
    }[];
}
