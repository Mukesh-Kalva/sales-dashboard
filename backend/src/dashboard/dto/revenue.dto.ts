import { ApiProperty } from '@nestjs/swagger';

export class RevenueDto {
  @ApiProperty({ type: [String] })
  labels: string[];

  @ApiProperty({ type: [Number] })
  series: number[];
}
