# Plant Shop API
RESTful API for purchasing plants via online plant shop.  
[Link to deployed Swagger doc](https://cute-jade-horse-tux.cyclic.app/api/docs)

## Instructions
1. Clone the repository [here](https://github.com/carolinedpena/plant_shop_api.git)
2. Install dependencies `npm install`
3. Run app locally
```bash
npm run build
npm run start
```
4. Navigate to Swagger doc in browser via http://localhost:3000/api/docs
5. Make HTTP calls to locally run app via http://localhost:3000/api or deployed app via https://cute-jade-horse-tux.cyclic.app/api and the available endpoints described below

## End Points
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /plants | To get list of all plants available for sale and their information |
| POST | /orders | To create a new order |
| GET | /orders/:id | To retrieve details of a single order |


## Considerations
* Data (Plants and Orders) are not persisted

## Built With
* [NodeJS](https://nodejs.org/)
* [NestJS](https://nestjs.com/)
* [OpenAI (NestJS module)](https://docs.nestjs.com/openapi/introduction)