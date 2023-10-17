import { ApiProperty } from '@nestjs/swagger'
import { Type } from "class-transformer";
import { IsNumber, IsString, IsNotEmpty, IsNotEmptyObject, ValidateNested } from "class-validator";

// purchase contains plant id and quantity of plant being purchased
export class Purchase {
    @IsNumber()
    @ApiProperty({ example: 1, description: 'Unique ID of Plant'})
    readonly plant_id: number

    @IsNumber()
    @ApiProperty({ example: 3, description: 'Quantity of plants purchased'})
    readonly quantity: number
}

// data transfer object for creating an order
export class CreateOrderDto {
    // checking if string and not empty - might add more validation such as checking for special characters
    @IsString()
    @IsNotEmpty()
    readonly customer_name: string;

    // checking if string and not empty - might add more validation such as checking if shipping address is a valid address (using something like Google's geocoding web service)
    @IsString()
    @IsNotEmpty()
    readonly shipping_add: string;

    // checking if type if Purchase and not null/undefined
    @IsNotEmptyObject()
    @ValidateNested() 
    @Type(() => Purchase)
    readonly purchase: Purchase
}

