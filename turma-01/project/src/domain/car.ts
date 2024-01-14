import { v4 as uuid } from 'uuid';

export type CarProps = {
    id?: string
    driverId: string 
    model: string 
    description: string 
    license_plate: string 
    brand: string
    avaliable?: boolean
    createdAt?: Date 
    updatedAt?: Date
}

export class Car {
    private _id: string
    private _driverId: string
    private _model: string 
    private _description: string 
    private _license_plate: string 
    private _brand: string
    private _avaliable: boolean
    private _createdAt: Date 
    private _updatedAt: Date

    constructor (props: CarProps) {
        this._id = props.id ?? uuid();
        this._driverId = props.driverId;
        this._model = props.model;
        this._description = props.description;
        this._license_plate = props.license_plate;
        this._brand = props.brand;
        this._avaliable = props.avaliable ?? false;
        this._createdAt = props.createdAt ?? new Date();
        this._updatedAt = props.updatedAt ?? new Date();
        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get license_plate(): string {
        return this._license_plate;
    }

    get driverId(): string {
        return this._driverId;
    }

    avaliable() {
        this._avaliable = true;
        this.validate();
    }

    private validate() {
        if (!this._driverId) throw new Error('Driver is required');
        if (!this._model) throw new Error('Model is required');
        if (!this._license_plate) throw new Error('License plate is required');
        if (!this._brand) throw new Error('Brand is required');
    }
}