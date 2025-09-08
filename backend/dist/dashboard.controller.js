"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
let DashboardController = class DashboardController {
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
    getRevenue() {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            series: [12000, 15000, 18000, 13000, 20000],
        };
    }
    getCustomerSatisfaction() {
        return { positive: 82, neutral: 10, negative: 8 };
    }
    getVisitorInsights() {
        return {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            visitors: [1200, 1350, 1600, 900, 2000],
        };
    }
    getTopProducts() {
        return [
            { id: 1, name: 'Product A', unitsSold: 420, revenue: 42000 },
            { id: 2, name: 'Product B', unitsSold: 360, revenue: 36000 },
        ];
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('metrics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getMetrics", null);
__decorate([
    (0, common_1.Get)('revenue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getRevenue", null);
__decorate([
    (0, common_1.Get)('customer-satisfaction'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getCustomerSatisfaction", null);
__decorate([
    (0, common_1.Get)('visitor-insights'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getVisitorInsights", null);
__decorate([
    (0, common_1.Get)('top-products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getTopProducts", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('api/dashboard')
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map