import { Driver } from "../../../domain/driver";
import { UseCase } from "../contract/iuse-case";

export class GetAllDrivers implements UseCase {

    constructor (readonly db: any) {}

    async execute(): Promise<Output> {
        const drivers = this.db.drivers as Driver[];
        const output = this.mapToOutput(drivers);
        return output;
    }

    private mapToOutput(drivers: Driver[]) : Output {
        return drivers.map((driver) => {
            return {
                id: driver.id,
                name: driver.name,
                email: driver.email,
                created_at: driver.createdAt,
                updated_at: driver.updatedAt,
            }
        })
    }
}

type Output = Array<{
    id: string
    name: string
    email: string
    created_at: Date 
    updated_at: Date
}>;