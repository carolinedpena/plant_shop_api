import { Plant } from "../entities/plant.entity"

// data taken from The Spruce (https://www.thespruce.com)
export const plants: Plant[] = [
    {
        id: 1,
        name: "Swiss Cheese Plant",
        sci_name: "Monstera Deliciosa",
        price: 49.99,
        quantity_avail: 7,
        native_area: "Central America"
    },
    {
        id: 2,
        name: "Fiddle-Leaf Fig",
        sci_name: "Ficus Lyrata",
        price: 69.99,
        quantity_avail: 5,
        native_area: "Tropical Western Africa"
    },
    {
        id: 3,
        name: "Snake Plant",
        sci_name: "Dracaena Trifasciata",
        price: 29.99,
        quantity_avail: 20,
        native_area: "West Africa"
    },
    {
        id: 4,
        name: "Jade Plant",
        sci_name: "Crassula Ovata",
        price: 19.99,
        quantity_avail: 10,
        native_area: "South Africa"
    },
    {
        id: 5,
        name: "Bird of Paradise",
        sci_name: "Strelitzia Reginae",
        price: 59.99,
        quantity_avail: 5,
        native_area: "South Africa"
    },
    {
        id: 6,
        name: "Bird's Nest Fern",
        sci_name: "Asplenium Nidus",
        price: 29.99,
        quantity_avail: 20,
        native_area: "Tropical Southeastern Asia"
    }
]