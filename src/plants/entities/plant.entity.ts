import { ApiProperty } from '@nestjs/swagger'

export class Plant {
   @ApiProperty({ example: '1', description: 'Unique ID of Plant' })
   id: number;

   @ApiProperty({ example: 'Swiss Cheese Plant', description: 'Common name of plant' })
   name: string

    @ApiProperty({ example: 'Monstera Deliciosa', description: 'Scientific name of plant' })
    sci_name: string;

    @ApiProperty({ example: '49.99', description: 'Price of plant' })
    price: number;

    @ApiProperty({ example: '10', description: 'Quantity of plant available' })
    quantity_avail: number;

    @ApiProperty({ example: 'Central America', description: 'Native Area of plant' })
    native_area: string
}
