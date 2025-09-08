import { IsNumber } from 'class-validator';

export class MetricsDto {
  @IsNumber()
  totalRevenue: number;

  @IsNumber()
  revenueChangePercent: number;

  @IsNumber()
  orders: number;

  @IsNumber()
  ordersChangePercent: number;

  @IsNumber()
  activeUsers: number;

  @IsNumber()
  activeUsersChangePercent: number;
}
