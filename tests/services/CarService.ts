import { request } from "playwright";
import { CarResponse } from "../interfaces/CarResponse";
import { APIResponse } from "@playwright/test";

export class CarService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getCarsResponse(carType: string): Promise<APIResponse> {
        return (await request.newContext()).get(`${this.baseUrl}/api/cars/${carType}`);
    }

    async getCars(carType: string): Promise<CarResponse[]> {
        const response = await this.getCarsResponse(carType);
        return response.json();
    }
}
