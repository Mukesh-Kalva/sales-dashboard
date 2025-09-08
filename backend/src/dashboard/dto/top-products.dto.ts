import { ApiProperty } from '@nestjs/swagger';

export class TopProductsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  unitsSold: number;

  @ApiProperty()
  revenue: number;
}
