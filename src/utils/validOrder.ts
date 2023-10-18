import { plants } from "src/plants/data/mockedData";
import { Plant } from "src/plants/entities/plant.entity";

import { Purchase } from "src/orders/dto/create-order.dto";

// Helper function for validating order (valid plant id and quantity passed) - can be built out to include further validation (i.e., address validation, customer validation, etc.)
export class ValidOrderInfo {
    public readonly valid: boolean;
    public readonly error?: string;
    public readonly payload?: { plantIdx: number, totalCost: number }
}

export const validOrder = (purchase: Purchase) => {
    // find plant with provided plant id in plants array
    const plantIdx = plants.findIndex((plant: Plant) => plant.id === purchase.plant_id);

    // if plant not found
    if (plantIdx === -1) {
        return {
            valid: false,
            error: 'Plant with provided id does not exist'
        }
    // if plant quantity provided is greater than available quantity for plant
    } else if (purchase.quantity > plants[plantIdx].quantity_avail) {
        return {
            valid: false,
            error: 'Quantity of plants in order is greater than the available quantity'
        }
    } else {
        // calculating total cost of order
        const total = purchase.quantity * plants[plantIdx].price

        return {
            valid: true,
            // currently only need the plant index for updating quantity in purchase method and total cost for creating order - could pass other props back if needed like plant obj
            payload: {
                plantIdx,
                totalCost: Number(total.toFixed(2)) // setting number of decimals to 2 and converting back to number
            }
        }
    }
}