import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { PlantsService } from './plants.service';
import { Plant } from './entities/plant.entity';

@ApiTags('plants')
@Controller('plants')
export class PlantsController {
    constructor(private readonly plantsService: PlantsService) {}

    // Get list of all plants for sale and their information
    @Get()
    @ApiOperation({ summary: 'Get all plants' })
    @ApiResponse({ status: 200, description: 'List of all plants available for sale.', type: [Plant] })
    getAll(): Plant[] {
        return this.plantsService.getAll()
    }
}