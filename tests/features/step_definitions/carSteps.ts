import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CarService } from "../../services/CarService";
import dotenv from "dotenv";
import { CarResponse } from "../../interfaces/CarResponse";

dotenv.config();

const carService = new CarService(`${process.env.BASE_URL}`);

Given(/^I make a car GET request with type "([^"]*)"$/, async function (type: string) {
  this.response = await carService.getCarsResponse(type);
});

Then(/^I should receive a status code of (\d+)$/, function (statusCode: string) {
  const actualStatusCode = parseInt(statusCode);
  expect(this.response.status(), `Expected status code: ${statusCode}`).toBe(actualStatusCode);
});

Then(/^the response should include cars of type "([^"]*)"$/, async function (type: string) {
  const cars = await this.response.json() as CarResponse[];
  this.cars = cars;

  const mismatchedCars = cars.filter((car: CarResponse) => car.type !== type);
  expect(mismatchedCars, `Expected all cars to be of type: ${type}, but found mismatches in models: ${mismatchedCars.map(car => car.model).join(', ')}`)
      .toHaveLength(0);
});

Then(/^each car in the response should match the type "([^"]*)"$/, function (type: string) {
  for (const car of this.cars as CarResponse[]) {
    expect(car.type, `Expected car type to match: ${type}`).toBe(type);
  }
});
