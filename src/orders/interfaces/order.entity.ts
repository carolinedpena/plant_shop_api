import { ApiProperty } from '@nestjs/swagger'

import { Purchase } from '../dto/create-order.dto';

// order contains id, customer name, shipping address, purchase obj and total price of order
export class Order {
    @ApiProperty({ example: '1', description: 'Unique ID of Order' })
    id: number;

    @ApiProperty({ example: 'John Smith', description: 'Full name of customer' })
    customer_name: string;

    @ApiProperty({ example: '123 Main Street New York, New York 12345', description: 'Shipping address of customer' })
    shipping_add: string;

    @ApiProperty({ description: 'Purchase payload including unique id of plant and quantity', type: Purchase})
    purchase: Purchase;

    @ApiProperty({ example: '149.97', description: 'Total price of order' })
    total_price: number;
}
