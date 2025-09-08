"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
let DashboardService = class DashboardService {
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
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)()
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map