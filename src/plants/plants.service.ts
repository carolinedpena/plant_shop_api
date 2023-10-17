import { Injectable } from '@nestjs/common';

import { Plant } from './entities/plant.entity';
import { plants } from './data/mockedData'

@Injectable()
export class PlantsService {
    // initalizing plants array to mocked plant data - won't be updated/modified
    private readonly plants: Plant[] = plants;

    // Get a list of plants for sale and their information
    getAll(): Plant[] {
        return this.plants;
    }
}