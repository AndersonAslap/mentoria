import { v4 as uuid } from 'uuid';

export type DriverProps = {
    id?: string
    name: string 
    email: string
    password: string
    createdAt?: Date 
    updatedAt?: Date
}

export class Driver {
    private _id: string 
    private _name: string 
    private _email: string 
    private _password: string
    private _createdAt: Date 
    private _updatedAt: Date

    constructor(props: DriverProps) {
        this._id = props.id ?? uuid();
        this._name = props.name;
        this._email = props.email;
        this._password = props.password;
        this._createdAt = props.createdAt ?? new Date();
        this._updatedAt = props.updatedAt ?? new Date();
        this.validate();
    }

    get id() : string {
        return this._id;
    }

    get name() : string {
        return this._name;
    }

    get email() : string {
        return this._email;
    }

    get createdAt() : Date {
        return this._createdAt;
    }

    get updatedAt() : Date {
        return this._updatedAt;
    }

    private validate() {
        if (!this._name) throw new Error('Name is required');
        if (!this._email) throw new Error('Email is required');
        if (!this._password) throw new Error('Password is required');
    }
}