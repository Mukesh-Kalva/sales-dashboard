import { ApiProperty } from '@nestjs/swagger';

export class VisitorInsightsDto {
  @ApiProperty({ type: [String] })
  labels: string[];

  @ApiProperty({ type: [Number] })
  visitors: number[];
}
