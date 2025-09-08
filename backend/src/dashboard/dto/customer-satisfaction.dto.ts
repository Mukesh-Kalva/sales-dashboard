import { ApiProperty } from '@nestjs/swagger';

export class CustomerSatisfactionDto {
  @ApiProperty()
  positive: number;

  @ApiProperty()
  neutral: number;

  @ApiProperty()
  negative: number;
}
