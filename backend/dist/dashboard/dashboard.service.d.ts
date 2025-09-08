export declare class DashboardService {
    getMetrics(): {
        totalRevenue: number;
        totalVisitors: number;
        totalOrders: number;
        conversionRate: number;
    };
    getRevenue(): {
        labels: string[];
        data: number[];
    };
    getCustomerSatisfaction(): {
        score: number;
        trend: string;
    };
    getVisitorInsights(): {
        labels: string[];
        data: number[];
    };
    getTopProducts(): {
        name: string;
        sales: number;
    }[];
}
