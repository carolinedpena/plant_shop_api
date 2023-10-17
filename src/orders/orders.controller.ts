import { Controller, Post, Get, Param, Body, HttpStatus, NotFoundException, BadRequestException, ValidationPipe } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from "@nestjs/swagger";

import { OrdersService } from "./orders.service";
import { Order } from "./interfaces/order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    // Order/Purchase a plant
    @Post('order')
    @ApiOperation({ summary: 'Create order' })
    @ApiCreatedResponse({ description: 'New order successfully created.', type: Order })
    @ApiBadRequestResponse({ type: BadRequestException})
    makeOrder(@Body(new ValidationPipe()) createOrderDto: CreateOrderDto): Order | BadRequestException {
        return this.ordersService.purchasePlant(createOrderDto);
    }

    // Get details of purchase order
    @Get(':id')
    @ApiOperation({ summary: 'Get order by id'})
    // would have used ApiFoundResponse - however this bug causes 200 response code to render regardless (https://github.com/nestjs/swagger/issues/1639)
    @ApiOkResponse({ description: 'Order found and returned', type: Order })
    @ApiNotFoundResponse({ description: 'Order with id not found', type: NotFoundException})
    getOrder(@Param('id') id: string): Order | NotFoundException {
        return this.ordersService.getPurchaseDetails(parseInt(id));
    }
}