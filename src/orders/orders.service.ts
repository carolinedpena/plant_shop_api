import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";

import { Order } from "./interfaces/order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";

import { Plant } from "src/plants/entities/plant.entity";
import { plants } from "src/plants/data/mockedData";

// helper function for validating order provided
import { validOrder, ValidOrderInfo } from "src/utils/validOrder";

@Injectable()
export class OrdersService {
    // initalizing orders as empty array - will be updated
    private orders: Order[] = []
    // needed for updating available quanity 
    private plants: Plant[] = plants;

    // Purchase plant
    purchasePlant(order: CreateOrderDto) {
        // check if order is valid  - throw error if not valid and pass error
        const validOrderInfo: ValidOrderInfo = validOrder(order.purchase)

        if (!validOrderInfo.valid) {
            throw new BadRequestException(validOrderInfo.error)
        }

        // for mocking - in actual app, would depend on db serial id or use a unique id generating library like uuid
        const orderId = this.orders.length + 1;

        // create a new order by spreading order payload and adding id and total price
        const newOrder: Order = {
            ...order,
            id: orderId,
            total_price: validOrderInfo.payload.totalCost
        }

        // appending to orders array - in real app, would insert order record to db here
        this.orders.push(newOrder);

        // update plants quantity available
        this.plants[validOrderInfo.payload.plantIdx].quantity_avail -= order.purchase.quantity

        // return newOrder obj
        return newOrder;
    }

    // Get details of purchase order
    getPurchaseDetails(id: number) {
        const orderIdx = this.orders.findIndex((order: Order) => order.id === id);

        // checking if valid index is returned (index is not -1) - throw not found exception if it is
        if (orderIdx === -1) {
            throw new NotFoundException('Order with provided id not found')
        }

        return this.orders[orderIdx];
    }
}